# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_gaussian_post_request import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_historical_post_request import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post(client):
    """Test case for portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post

    Corrected Cornish-Fisher Conditional Value At Risk
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_value_at_risk_conditional_cornish_fisher_post(client):
    """Test case for portfolio_analysis_value_at_risk_conditional_cornish_fisher_post

    Cornish-Fisher Conditional Value At Risk
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/value-at-risk/conditional/cornish-fisher',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_value_at_risk_conditional_gaussian_post(client):
    """Test case for portfolio_analysis_value_at_risk_conditional_gaussian_post

    Gaussian Conditional Value At Risk
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/value-at-risk/conditional/gaussian',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_value_at_risk_conditional_historical_post(client):
    """Test case for portfolio_analysis_value_at_risk_conditional_historical_post

    Historical Conditional Value At Risk
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/value-at-risk/conditional/historical',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

