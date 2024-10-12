import unittest

from flask import json

from openapi_server.models.assets_correlation_matrix_random_post_request import AssetsCorrelationMatrixRandomPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner  # noqa: E501
from openapi_server.models.portfolio_optimization_equal_risk_contributions_post_request import PortfolioOptimizationEqualRiskContributionsPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_equal_sharpe_ratio_contributions_post_request import PortfolioOptimizationEqualSharpeRatioContributionsPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_equal_volatility_weighted_post_request import PortfolioOptimizationEqualVolatilityWeightedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request import PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_hierarchical_risk_parity_post_request import PortfolioOptimizationHierarchicalRiskParityPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_inverse_variance_weighted_post_request import PortfolioOptimizationInverseVarianceWeightedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_market_capitalization_weighted_post_request import PortfolioOptimizationMarketCapitalizationWeightedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_decorrelation_post_request import PortfolioOptimizationMaximumDecorrelationPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_ulcer_performance_index_post_request import PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_correlation_post_request import PortfolioOptimizationMinimumCorrelationPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_ulcer_index_post_request import PortfolioOptimizationMinimumUlcerIndexPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_most_diversified_post_request import PortfolioOptimizationMostDiversifiedPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPortfolioOptimizationController(BaseTestCase):
    """PortfolioOptimizationController integration test stubs"""

    def test_portfolio_optimization_equal_risk_contributions_post(self):
        """Test case for portfolio_optimization_equal_risk_contributions_post

        Equal Risk Contributions Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1]}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/equal-risk-contributions',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_equal_sharpe_ratio_contributions_post(self):
        """Test case for portfolio_optimization_equal_sharpe_ratio_contributions_post

        Equal Sharpe Ratio Contributions Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.05,0.02],[0.02,0.07]],"assetsReturns":[0.05,0.1],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/equal-sharpe-ratio-contributions',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_equal_volatility_weighted_post(self):
        """Test case for portfolio_optimization_equal_volatility_weighted_post

        Equal Volatility Weighted Portfolio
        """
        body = {"assets":2,"assetsVolatilities":[0.05,0.1]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/equal-volatility-weighted',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_equal_weighted_post(self):
        """Test case for portfolio_optimization_equal_weighted_post

        Equal Weighted Portfolio
        """
        body = {"assets":2}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/equal-weighted',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_hierarchical_risk_parity_clustering_based_post(self):
        """Test case for portfolio_optimization_hierarchical_risk_parity_clustering_based_post

        Hierarchical Clustering-Based Risk Parity Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/hierarchical-risk-parity/clustering-based',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_hierarchical_risk_parity_post(self):
        """Test case for portfolio_optimization_hierarchical_risk_parity_post

        Hierarchical Risk Parity Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/hierarchical-risk-parity',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_inverse_variance_weighted_post(self):
        """Test case for portfolio_optimization_inverse_variance_weighted_post

        Inverse Variance Weighted Portfolio
        """
        body = {"assets":2,"assetsVariances":[1,0.5]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/inverse-variance-weighted',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_inverse_volatility_weighted_post(self):
        """Test case for portfolio_optimization_inverse_volatility_weighted_post

        Inverse Volatility Weighted Portfolio
        """
        body = {"assets":2,"assetsVolatilities":[0.05,0.1]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/inverse-volatility-weighted',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_market_capitalization_weighted_post(self):
        """Test case for portfolio_optimization_market_capitalization_weighted_post

        Market Capitalization Weighted Portfolio
        """
        body = {"assets":2,"assetsMarketCapitalizations":[1,2]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/market-capitalization-weighted',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_maximum_decorrelation_post(self):
        """Test case for portfolio_optimization_maximum_decorrelation_post

        Maximum Decorrelation Portfolio
        """
        body = {"assets":3,"assetsCorrelationMatrix":[[1,0.9,0.85],[0.9,1,0.7],[0.85,0.7,1]]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/maximum-decorrelation',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_maximum_ulcer_performance_index_post(self):
        """Test case for portfolio_optimization_maximum_ulcer_performance_index_post

        Maximum Ulcer Performance Index Portfolio
        """
        body = {"assets":[{"assetPrices":[100,95,110]},{"assetPrices":[100,105,100]}],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/maximum-ulcer-performance-index',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_minimum_correlation_post(self):
        """Test case for portfolio_optimization_minimum_correlation_post

        Minimum Correlation Portfolio
        """
        body = {"assets":3,"assetsCorrelationMatrix":[[1,0.9,0.85],[0.9,1,0.7],[0.85,0.7,1]],"assetsVolatilities":[0.14,0.18,0.22]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/minimum-correlation',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_minimum_ulcer_index_post(self):
        """Test case for portfolio_optimization_minimum_ulcer_index_post

        Minimum Ulcer Index Portfolio
        """
        body = {"assets":[{"assetPrices":[100,95,110]},{"assetPrices":[100,105,100]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/minimum-ulcer-index',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_optimization_most_diversified_post(self):
        """Test case for portfolio_optimization_most_diversified_post

        Most Diversified Portfolio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.04,0.01],[0.01,0.01]]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/optimization/most-diversified',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
