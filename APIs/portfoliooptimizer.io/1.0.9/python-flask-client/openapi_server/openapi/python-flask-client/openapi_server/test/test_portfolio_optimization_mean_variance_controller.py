import unittest

from flask import json

from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_return_diversified_post_request import PortfolioOptimizationMaximumReturnDiversifiedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_return_post_request import PortfolioOptimizationMaximumReturnPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_return_subset_resampling_based_post_request import PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_diversified_post_request import PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_post_request import PortfolioOptimizationMaximumSharpeRatioPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request import PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_mean_variance_efficient_diversified_post_request import PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_mean_variance_efficient_post_request import PortfolioOptimizationMeanVarianceEfficientPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request import PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_variance_diversified_post_request import PortfolioOptimizationMinimumVarianceDiversifiedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_variance_post_request import PortfolioOptimizationMinimumVariancePostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_variance_subset_resampling_based_post_request import PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPortfolioOptimizationMeanVarianceController(BaseTestCase):
    """PortfolioOptimizationMeanVarianceController integration test stubs"""

    def test_portfolio_optimization_maximum_return_diversified_post(self):
        """Test case for portfolio_optimization_maximum_return_diversified_post

        Diversified Maximum Return Portfolio
        """
        body = {"assets":2,"assetsReturns":[0.02,0.01],"constraints":{"maximumAssetsWeights":[0.4,1]}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/maximum-return/diversified',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_maximum_return_post(self):
        """Test case for portfolio_optimization_maximum_return_post

        Maximum Return Portfolio
        """
        body = {"assets":2,"assetsReturns":[0.02,0.01],"constraints":{"maximumAssetsWeights":[0.4,1]}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/maximum-return',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_maximum_return_subset_resampling_based_post(self):
        """Test case for portfolio_optimization_maximum_return_subset_resampling_based_post

        Subset Resampling-Based Maximum Return Portfolio
        """
        body = {"assets":3,"assetsReturns":[0.01,0.02,0.03],"subsetPortfoliosEnumerationMethod":"complete"}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/maximum-return/subset-resampling-based',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_maximum_sharpe_ratio_diversified_post(self):
        """Test case for portfolio_optimization_maximum_sharpe_ratio_diversified_post

        Diversified Maximum Sharpe Ratio Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.05,0.02],[0.02,0.07]],"assetsReturns":[0.05,0.1],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/maximum-sharpe-ratio/diversified',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_maximum_sharpe_ratio_post(self):
        """Test case for portfolio_optimization_maximum_sharpe_ratio_post

        Maximum Sharpe Ratio Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.05,0.02],[0.02,0.07]],"assetsReturns":[0.05,0.1],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/maximum-sharpe-ratio',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post(self):
        """Test case for portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post

        Subset Resampling-Based Maximum Sharpe Ratio Portfolio
        """
        body = {"assets":3,"assetsCovarianceMatrix":[[0.05,0.02,0],[0.02,0.07,0.5],[0,0.5,0.1]],"assetsReturns":[0.05,0.1,0.025],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_mean_variance_efficient_diversified_post(self):
        """Test case for portfolio_optimization_mean_variance_efficient_diversified_post

        Diversified Mean-Variance Efficient Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[1,0.3],[0.3,1]],"assetsReturns":[0.1,0.2],"constraints":{"deltaReturn":0.05,"deltaVolatility":0.05,"portfolioReturn":0.175}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/mean-variance-efficient/diversified',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_mean_variance_efficient_post(self):
        """Test case for portfolio_optimization_mean_variance_efficient_post

        Mean-Variance Efficient Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[1,0.3],[0.3,1]],"assetsReturns":[0.1,0.2],"constraints":{"portfolioReturn":0.15}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/mean-variance-efficient',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_mean_variance_efficient_subset_resampling_based_post(self):
        """Test case for portfolio_optimization_mean_variance_efficient_subset_resampling_based_post

        Subset Resampling-Based Mean-Variance Efficient Portfolio
        """
        body = {"assets":3,"assetsCovarianceMatrix":[[1,0,0],[0,1,0],[0,0,1]],"assetsReturns":[0.1,0.2,0.3],"constraints":{"riskTolerance":2}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/mean-variance-efficient/subset-resampling-based',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_minimum_variance_diversified_post(self):
        """Test case for portfolio_optimization_minimum_variance_diversified_post

        Diversified Minimum Variance Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/minimum-variance/diversified',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_minimum_variance_post(self):
        """Test case for portfolio_optimization_minimum_variance_post

        Minimum Variance Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/minimum-variance',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_minimum_variance_subset_resampling_based_post(self):
        """Test case for portfolio_optimization_minimum_variance_subset_resampling_based_post

        Subset Resampling-Based Minimum Variance Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5},"subsetPortfolios":1}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/minimum-variance/subset-resampling-based',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
