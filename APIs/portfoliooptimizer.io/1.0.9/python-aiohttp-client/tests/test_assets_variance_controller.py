# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_variance_post200_response import AssetsVariancePost200Response
from openapi_server.models.assets_variance_post_request import AssetsVariancePostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_variance_post(client):
    """Test case for assets_variance_post

    Variance
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/variance',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

