# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.portfolio_simulation_rebalancing_drift_weight_post200_response import PortfolioSimulationRebalancingDriftWeightPost200Response
from openapi_server.models.portfolio_simulation_rebalancing_drift_weight_post_request import PortfolioSimulationRebalancingDriftWeightPostRequest
from openapi_server.models.portfolio_simulation_rebalancing_random_weight_post_request import PortfolioSimulationRebalancingRandomWeightPostRequest


pytestmark = pytest.mark.asyncio

async def test_portfolio_simulation_rebalancing_drift_weight_post(client):
    """Test case for portfolio_simulation_rebalancing_drift_weight_post

    Drift-weight Portfolio Rebalancing
    """
    body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":[{"assetsWeights":[1,0,0]},{"assetsWeights":[0,1,0]},{"assetsWeights":[0,0,1]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/simulation/rebalancing/drift-weight',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_simulation_rebalancing_fixed_weight_post(client):
    """Test case for portfolio_simulation_rebalancing_fixed_weight_post

    Fixed-weight Portfolio Rebalancing
    """
    body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":[{"assetsWeights":[0.5,0.5,0]},{"assetsWeights":[0,0.5,0.5]},{"assetsWeights":[0.5,0,0.5]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/simulation/rebalancing/fixed-weight',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_simulation_rebalancing_random_weight_post(client):
    """Test case for portfolio_simulation_rebalancing_random_weight_post

    Random-weight Portfolio Rebalancing
    """
    body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":2}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/simulation/rebalancing/random-weight',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

