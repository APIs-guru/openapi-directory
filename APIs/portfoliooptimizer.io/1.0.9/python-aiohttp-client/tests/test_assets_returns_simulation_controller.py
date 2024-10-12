# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_returns_simulation_bootstrap_post200_response import AssetsReturnsSimulationBootstrapPost200Response
from openapi_server.models.assets_returns_simulation_bootstrap_post_request import AssetsReturnsSimulationBootstrapPostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_returns_simulation_bootstrap_post(client):
    """Test case for assets_returns_simulation_bootstrap_post

    Bootstrap
    """
    body = {"assets":[{"assetReturns":[0.1,-0.05,0.01,0.025,-0.1]},{"assetReturns":[0,0.01,0.02,-0.01,0.05]}],"bootstrapBlockLength":2,"bootstrapMethod":"circularBlock","simulations":5,"simulationsLength":4}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/returns/simulation/bootstrap',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

