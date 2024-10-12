# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_returns_average_post200_response import AssetsReturnsAveragePost200Response
from openapi_server.models.assets_returns_average_post_request import AssetsReturnsAveragePostRequest
from openapi_server.models.assets_returns_logarithmic_post200_response import AssetsReturnsLogarithmicPost200Response
from openapi_server.models.assets_returns_post200_response import AssetsReturnsPost200Response
from openapi_server.models.assets_returns_post_request import AssetsReturnsPostRequest
from openapi_server.models.assets_returns_turbulence_partitioned_post200_response import AssetsReturnsTurbulencePartitionedPost200Response
from openapi_server.models.assets_returns_turbulence_partitioned_post_request import AssetsReturnsTurbulencePartitionedPostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_returns_average_post(client):
    """Test case for assets_returns_average_post

    Arithmetic Average Return
    """
    body = {"assets":[{"assetReturns":[0.1,-0.05]},{"assetReturns":[0,-0.01,0.01]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/returns/average',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_returns_logarithmic_post(client):
    """Test case for assets_returns_logarithmic_post

    Logarithmic Returns
    """
    body = {"assets":[{"assetPrices":[1,2]},{"assetPrices":[2,3,6]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/returns/logarithmic',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_returns_post(client):
    """Test case for assets_returns_post

    Arithmetic Returns
    """
    body = {"assets":[{"assetPrices":[1,2]},{"assetPrices":[2,3,6]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/returns',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_returns_turbulence_partitioned_post(client):
    """Test case for assets_returns_turbulence_partitioned_post

    Turbulence-partitioned Asset Returns
    """
    body = {"assets":[{"assetReturns":[0,0.1,0.05,-0.01,0.025]},{"assetReturns":[0.005,0.05,0.1,-0.02,0]}],"turbulenceThresholds":[0.8,0.95]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/returns/turbulence-partitioned',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

