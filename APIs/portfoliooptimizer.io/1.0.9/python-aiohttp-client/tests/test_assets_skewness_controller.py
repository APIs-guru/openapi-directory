# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_skewness_post200_response import AssetsSkewnessPost200Response
from openapi_server.models.assets_skewness_post_request import AssetsSkewnessPostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_skewness_post(client):
    """Test case for assets_skewness_post

    Skewness
    """
    body = {"assets":[{"assetReturns":[0.01,0,0.02,-0.03]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/skewness',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

