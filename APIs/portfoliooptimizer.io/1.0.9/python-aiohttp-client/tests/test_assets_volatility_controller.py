# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_volatility_post200_response import AssetsVolatilityPost200Response
from openapi_server.models.assets_volatility_post_request import AssetsVolatilityPostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_volatility_post(client):
    """Test case for assets_volatility_post

    Volatility
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/volatility',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

