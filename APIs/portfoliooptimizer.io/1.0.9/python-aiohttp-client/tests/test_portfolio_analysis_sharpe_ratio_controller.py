# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post200_response import PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post_request import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest
from openapi_server.models.portfolio_analysis_sharpe_ratio_confidence_interval_post200_response import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_confidence_interval_post_request import PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest
from openapi_server.models.portfolio_analysis_sharpe_ratio_post200_response import PortfolioAnalysisSharpeRatioPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request import PortfolioAnalysisSharpeRatioPostRequest
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post200_response import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_post200_response import PortfolioAnalysisSharpeRatioProbabilisticPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_post_request import PortfolioAnalysisSharpeRatioProbabilisticPostRequest


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_sharpe_ratio_bias_adjusted_post(client):
    """Test case for portfolio_analysis_sharpe_ratio_bias_adjusted_post

    Bias-Adjusted Sharpe Ratio
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/sharpe-ratio/bias-adjusted',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_sharpe_ratio_confidence_interval_post(client):
    """Test case for portfolio_analysis_sharpe_ratio_confidence_interval_post

    Sharpe Ratio Confidence Interval
    """
    body = {"confidenceIntervalType":"twoSided","confidenceLevel":0.99,"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/sharpe-ratio/confidence-interval',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_sharpe_ratio_post(client):
    """Test case for portfolio_analysis_sharpe_ratio_post

    Sharpe Ratio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/sharpe-ratio',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post(client):
    """Test case for portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post

    Minimum Track Record Length
    """
    body = {"benchmarkValues":[100,101,98,85,75,65],"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_sharpe_ratio_probabilistic_post(client):
    """Test case for portfolio_analysis_sharpe_ratio_probabilistic_post

    Probabilistic Sharpe Ratio
    """
    body = {"benchmarkValues":[100,101,98,102,95,90],"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/sharpe-ratio/probabilistic',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

