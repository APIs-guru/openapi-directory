# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post_request import AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_post200_response import AssetsReturnsSimulationMonteCarloCornishFisherPost200Response
from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_post_request import AssetsReturnsSimulationMonteCarloCornishFisherPostRequest
from openapi_server.models.assets_returns_simulation_monte_carlo_gaussian_post_request import AssetsReturnsSimulationMonteCarloGaussianPostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post(client):
    """Test case for assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post

    Corrected Cornish-Fisher Distribution
    """
    body = {"assetAverageReturn":0.05,"assetKurtosis":1,"assetSkewness":0.5,"assetVolatility":0.2,"simulations":5,"simulationsLength":4}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/returns/simulation/monte-carlo/cornish-fisher/corrected',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_returns_simulation_monte_carlo_cornish_fisher_post(client):
    """Test case for assets_returns_simulation_monte_carlo_cornish_fisher_post

    Cornish-Fisher Distribution
    """
    body = {"assetAverageReturnParameter":0.05,"assetKurtosisParameter":1,"assetSkewnessParameter":0.5,"assetVolatilityParameter":0.2,"simulations":5,"simulationsLength":4}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/returns/simulation/monte-carlo/cornish-fisher',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_returns_simulation_monte_carlo_gaussian_post(client):
    """Test case for assets_returns_simulation_monte_carlo_gaussian_post

    Gaussian Distribution
    """
    body = {"assetAverageReturn":0.05,"assetVolatility":0.2,"simulations":5,"simulationsLength":4}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/returns/simulation/monte-carlo/gaussian',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

