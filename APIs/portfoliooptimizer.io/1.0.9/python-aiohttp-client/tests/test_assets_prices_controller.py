# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_prices_adjusted_post200_response import AssetsPricesAdjustedPost200Response
from openapi_server.models.assets_prices_adjusted_post_request import AssetsPricesAdjustedPostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_prices_adjusted_forward_post(client):
    """Test case for assets_prices_adjusted_forward_post

    Forward-Adjusted Prices
    """
    body = {"assets":[{"assetPrices":[{"close":2213.4,"date":"2020-08-28"},{"close":498.32,"date":"2020-08-31"},{"close":475.05,"date":"2020-09-01"}],"assetSplits":[{"date":"2020-08-31","factor":5}]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/prices/adjusted/forward',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_prices_adjusted_post(client):
    """Test case for assets_prices_adjusted_post

    Adjusted Prices
    """
    body = {"assets":[{"assetPrices":[{"close":2213.4,"date":"2020-08-28"},{"close":498.32,"date":"2020-08-31"},{"close":475.05,"date":"2020-09-01"}],"assetSplits":[{"date":"2020-08-31","factor":5}]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/prices/adjusted',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

