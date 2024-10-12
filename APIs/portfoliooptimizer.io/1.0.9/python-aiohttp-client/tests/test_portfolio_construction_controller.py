# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_server.models.portfolio_construction_investable_post200_response import PortfolioConstructionInvestablePost200Response
from openapi_server.models.portfolio_construction_investable_post_request import PortfolioConstructionInvestablePostRequest
from openapi_server.models.portfolio_construction_mimicking_post_request import PortfolioConstructionMimickingPostRequest
from openapi_server.models.portfolio_construction_random_post200_response import PortfolioConstructionRandomPost200Response
from openapi_server.models.portfolio_construction_random_post_request import PortfolioConstructionRandomPostRequest


pytestmark = pytest.mark.asyncio

async def test_portfolio_construction_investable_post(client):
    """Test case for portfolio_construction_investable_post

    Investable Portfolio
    """
    body = {"assets":4,"assetsGroups":[[1,2],[3,4]],"assetsGroupsWeights":[0.4,0.4],"assetsPrices":[10,25,100,500],"assetsWeights":[0.2,null,null,null],"portfolioValue":10000}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/construction/investable',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_construction_mimicking_post(client):
    """Test case for portfolio_construction_mimicking_post

    Mimicking Portfolio
    """
    body = {"assets":[{"assetReturns":[0.01,0.02,0.03]},{"assetReturns":[-0.01,-0.02,-0.03]}],"benchmarkReturns":[0,0,0]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/construction/mimicking',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_construction_random_post(client):
    """Test case for portfolio_construction_random_post

    Random Portfolio
    """
    body = {"assets":3,"portfolios":2}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/construction/random',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

