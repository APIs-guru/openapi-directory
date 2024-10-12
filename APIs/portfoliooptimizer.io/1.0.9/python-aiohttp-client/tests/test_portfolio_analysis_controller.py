# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.portfolio_analysis_alpha_post200_response import PortfolioAnalysisAlphaPost200Response
from openapi_server.models.portfolio_analysis_alpha_post_request import PortfolioAnalysisAlphaPostRequest
from openapi_server.models.portfolio_analysis_beta_post200_response import PortfolioAnalysisBetaPost200Response
from openapi_server.models.portfolio_analysis_contributions_return_post200_response import PortfolioAnalysisContributionsReturnPost200Response
from openapi_server.models.portfolio_analysis_contributions_return_post_request import PortfolioAnalysisContributionsReturnPostRequest
from openapi_server.models.portfolio_analysis_contributions_risk_post200_response import PortfolioAnalysisContributionsRiskPost200Response
from openapi_server.models.portfolio_analysis_contributions_risk_post_request import PortfolioAnalysisContributionsRiskPostRequest
from openapi_server.models.portfolio_analysis_correlation_spectrum_post200_response import PortfolioAnalysisCorrelationSpectrumPost200Response
from openapi_server.models.portfolio_analysis_correlation_spectrum_post_request import PortfolioAnalysisCorrelationSpectrumPostRequest
from openapi_server.models.portfolio_analysis_diversification_ratio_post200_response import PortfolioAnalysisDiversificationRatioPost200Response
from openapi_server.models.portfolio_analysis_drawdowns_post200_response import PortfolioAnalysisDrawdownsPost200Response
from openapi_server.models.portfolio_analysis_drawdowns_post_request import PortfolioAnalysisDrawdownsPostRequest
from openapi_server.models.portfolio_analysis_effective_number_of_bets_post200_response import PortfolioAnalysisEffectiveNumberOfBetsPost200Response
from openapi_server.models.portfolio_analysis_effective_number_of_bets_post_request import PortfolioAnalysisEffectiveNumberOfBetsPostRequest
from openapi_server.models.portfolio_analysis_factors_exposures_post200_response import PortfolioAnalysisFactorsExposuresPost200Response
from openapi_server.models.portfolio_analysis_factors_exposures_post_request import PortfolioAnalysisFactorsExposuresPostRequest
from openapi_server.models.portfolio_analysis_mean_variance_efficient_frontier_post200_response import PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response
from openapi_server.models.portfolio_analysis_mean_variance_efficient_frontier_post_request import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest
from openapi_server.models.portfolio_analysis_mean_variance_minimum_variance_frontier_post_request import PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest
from openapi_server.models.portfolio_analysis_return_post200_response import PortfolioAnalysisReturnPost200Response
from openapi_server.models.portfolio_analysis_return_post_request import PortfolioAnalysisReturnPostRequest
from openapi_server.models.portfolio_analysis_returns_average_post200_response import PortfolioAnalysisReturnsAveragePost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of1 import PortfolioAnalysisSharpeRatioPostRequestOneOf1
from openapi_server.models.portfolio_analysis_tracking_error_post200_response import PortfolioAnalysisTrackingErrorPost200Response
from openapi_server.models.portfolio_analysis_tracking_error_post_request import PortfolioAnalysisTrackingErrorPostRequest
from openapi_server.models.portfolio_analysis_ulcer_index_post200_response import PortfolioAnalysisUlcerIndexPost200Response
from openapi_server.models.portfolio_analysis_ulcer_performance_index_post200_response import PortfolioAnalysisUlcerPerformanceIndexPost200Response
from openapi_server.models.portfolio_analysis_volatility_post200_response import PortfolioAnalysisVolatilityPost200Response
from openapi_server.models.portfolio_analysis_volatility_post_request import PortfolioAnalysisVolatilityPostRequest


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_alpha_post(client):
    """Test case for portfolio_analysis_alpha_post

    Alpha
    """
    body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015]}],"riskFreeRate":0.01}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/alpha',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_beta_post(client):
    """Test case for portfolio_analysis_beta_post

    Beta
    """
    body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015]}],"riskFreeRate":0.01}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/beta',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_contributions_return_post(client):
    """Test case for portfolio_analysis_contributions_return_post

    Return Contributions
    """
    body = {"assets":3,"assetsGroups":[[1,2]],"assetsReturns":[0.01,-0.01,0.025],"portfolios":[{"assetsWeights":[0.5,0.25,0.25]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/contributions/return',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_contributions_risk_post(client):
    """Test case for portfolio_analysis_contributions_risk_post

    Risk Contributions
    """
    body = {"assets":3,"assetsCovarianceMatrix":[[1.0E-4,0,0],[0,1.0E-4,0],[0,0,0.04]],"portfolios":[{"assetsWeights":[0.5,0.25,0.25]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/contributions/risk',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_correlation_spectrum_post(client):
    """Test case for portfolio_analysis_correlation_spectrum_post

    Correlation Spectrum
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[0.5,0.5]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/correlation-spectrum',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_diversification_ratio_post(client):
    """Test case for portfolio_analysis_diversification_ratio_post

    Diversification Ratio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[0.5,0.5]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/diversification-ratio',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_drawdowns_post(client):
    """Test case for portfolio_analysis_drawdowns_post

    Drawdowns
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/drawdowns',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_effective_number_of_bets_post(client):
    """Test case for portfolio_analysis_effective_number_of_bets_post

    Effective Number of Bets
    """
    body = {"assets":3,"assetsCovarianceMatrix":[[1,0,0],[0,286.31,100.79],[0,100.79,601.36]],"portfolios":[{"assetsWeights":[10.96,1.06,0.22]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/effective-number-of-bets',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_factors_exposures_post(client):
    """Test case for portfolio_analysis_factors_exposures_post

    Factor Exposures
    """
    body = {"factors":[{"factorReturns":[-0.00414169934,0.01201656108,0.0087181369]},{"factorReturns":[-0.01387258782,-0.01097961581,0.01742002062]}],"portfolios":[{"portfolioReturns":[-0.04302,0.01310372213,0.06482589323]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/factors/exposures',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_mean_variance_efficient_frontier_post(client):
    """Test case for portfolio_analysis_mean_variance_efficient_frontier_post

    Mean-Variance Efficient Frontier
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"constraints":{"minimumAssetsWeights":[0.2,0]},"portfolios":3}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/mean-variance/efficient-frontier',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_mean_variance_minimum_variance_frontier_post(client):
    """Test case for portfolio_analysis_mean_variance_minimum_variance_frontier_post

    Mean-Variance Minimum Variance Frontier
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"constraints":{"minimumAssetsWeights":[0.2,0]},"portfolios":4}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/mean-variance/minimum-variance-frontier',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_return_post(client):
    """Test case for portfolio_analysis_return_post

    Arithmetic Return
    """
    body = {"assets":2,"assetsReturns":[0.01,0.05],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/return',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_returns_average_post(client):
    """Test case for portfolio_analysis_returns_average_post

    Arithmetic Average Return
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/returns/average',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_tracking_error_post(client):
    """Test case for portfolio_analysis_tracking_error_post

    Tracking Error
    """
    body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014,0.018,0.014,0.065,-0.015,0.042,-0.006,0.083,0.039,-0.038,-0.062,0.015,-0.048,0.021,0.06,0.056,-0.067,0.019,-0.003,0],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015,0.025,0.016,0.067,-0.014,0.04,-0.005,0.081,0.04,-0.037,-0.061,0.017,-0.049,-0.022,0.07,0.058,-0.065,0.024,-0.005,-0.009]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/tracking-error',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_ulcer_index_post(client):
    """Test case for portfolio_analysis_ulcer_index_post

    Ulcer Index
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/ulcer-index',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_ulcer_performance_index_post(client):
    """Test case for portfolio_analysis_ulcer_performance_index_post

    Ulcer Performance Index
    """
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/ulcer-performance-index',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_analysis_volatility_post(client):
    """Test case for portfolio_analysis_volatility_post

    Volatility
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/analysis/volatility',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

