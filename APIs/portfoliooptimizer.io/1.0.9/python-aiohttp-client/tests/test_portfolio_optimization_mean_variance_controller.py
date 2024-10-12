# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_server.models.portfolio_optimization_maximum_return_diversified_post_request import PortfolioOptimizationMaximumReturnDiversifiedPostRequest
from openapi_server.models.portfolio_optimization_maximum_return_post_request import PortfolioOptimizationMaximumReturnPostRequest
from openapi_server.models.portfolio_optimization_maximum_return_subset_resampling_based_post_request import PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_diversified_post_request import PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_post_request import PortfolioOptimizationMaximumSharpeRatioPostRequest
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request import PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest
from openapi_server.models.portfolio_optimization_mean_variance_efficient_diversified_post_request import PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest
from openapi_server.models.portfolio_optimization_mean_variance_efficient_post_request import PortfolioOptimizationMeanVarianceEfficientPostRequest
from openapi_server.models.portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request import PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest
from openapi_server.models.portfolio_optimization_minimum_variance_diversified_post_request import PortfolioOptimizationMinimumVarianceDiversifiedPostRequest
from openapi_server.models.portfolio_optimization_minimum_variance_post_request import PortfolioOptimizationMinimumVariancePostRequest
from openapi_server.models.portfolio_optimization_minimum_variance_subset_resampling_based_post_request import PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_maximum_return_diversified_post(client):
    """Test case for portfolio_optimization_maximum_return_diversified_post

    Diversified Maximum Return Portfolio
    """
    body = {"assets":2,"assetsReturns":[0.02,0.01],"constraints":{"maximumAssetsWeights":[0.4,1]}}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/maximum-return/diversified',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_maximum_return_post(client):
    """Test case for portfolio_optimization_maximum_return_post

    Maximum Return Portfolio
    """
    body = {"assets":2,"assetsReturns":[0.02,0.01],"constraints":{"maximumAssetsWeights":[0.4,1]}}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/maximum-return',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_maximum_return_subset_resampling_based_post(client):
    """Test case for portfolio_optimization_maximum_return_subset_resampling_based_post

    Subset Resampling-Based Maximum Return Portfolio
    """
    body = {"assets":3,"assetsReturns":[0.01,0.02,0.03],"subsetPortfoliosEnumerationMethod":"complete"}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/maximum-return/subset-resampling-based',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_maximum_sharpe_ratio_diversified_post(client):
    """Test case for portfolio_optimization_maximum_sharpe_ratio_diversified_post

    Diversified Maximum Sharpe Ratio Portfolio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.05,0.02],[0.02,0.07]],"assetsReturns":[0.05,0.1],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/maximum-sharpe-ratio/diversified',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_maximum_sharpe_ratio_post(client):
    """Test case for portfolio_optimization_maximum_sharpe_ratio_post

    Maximum Sharpe Ratio Portfolio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.05,0.02],[0.02,0.07]],"assetsReturns":[0.05,0.1],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/maximum-sharpe-ratio',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post(client):
    """Test case for portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post

    Subset Resampling-Based Maximum Sharpe Ratio Portfolio
    """
    body = {"assets":3,"assetsCovarianceMatrix":[[0.05,0.02,0],[0.02,0.07,0.5],[0,0.5,0.1]],"assetsReturns":[0.05,0.1,0.025],"riskFreeRate":0}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_mean_variance_efficient_diversified_post(client):
    """Test case for portfolio_optimization_mean_variance_efficient_diversified_post

    Diversified Mean-Variance Efficient Portfolio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[1,0.3],[0.3,1]],"assetsReturns":[0.1,0.2],"constraints":{"deltaReturn":0.05,"deltaVolatility":0.05,"portfolioReturn":0.175}}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/mean-variance-efficient/diversified',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_mean_variance_efficient_post(client):
    """Test case for portfolio_optimization_mean_variance_efficient_post

    Mean-Variance Efficient Portfolio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[1,0.3],[0.3,1]],"assetsReturns":[0.1,0.2],"constraints":{"portfolioReturn":0.15}}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/mean-variance-efficient',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_mean_variance_efficient_subset_resampling_based_post(client):
    """Test case for portfolio_optimization_mean_variance_efficient_subset_resampling_based_post

    Subset Resampling-Based Mean-Variance Efficient Portfolio
    """
    body = {"assets":3,"assetsCovarianceMatrix":[[1,0,0],[0,1,0],[0,0,1]],"assetsReturns":[0.1,0.2,0.3],"constraints":{"riskTolerance":2}}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/mean-variance-efficient/subset-resampling-based',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_minimum_variance_diversified_post(client):
    """Test case for portfolio_optimization_minimum_variance_diversified_post

    Diversified Minimum Variance Portfolio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/minimum-variance/diversified',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_minimum_variance_post(client):
    """Test case for portfolio_optimization_minimum_variance_post

    Minimum Variance Portfolio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/minimum-variance',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_portfolio_optimization_minimum_variance_subset_resampling_based_post(client):
    """Test case for portfolio_optimization_minimum_variance_subset_resampling_based_post

    Subset Resampling-Based Minimum Variance Portfolio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5},"subsetPortfolios":1}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/portfolio/optimization/minimum-variance/subset-resampling-based',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

