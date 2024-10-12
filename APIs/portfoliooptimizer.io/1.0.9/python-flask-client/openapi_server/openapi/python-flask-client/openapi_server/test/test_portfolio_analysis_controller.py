import unittest

from flask import json

from openapi_server.models.portfolio_analysis_alpha_post200_response import PortfolioAnalysisAlphaPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_alpha_post_request import PortfolioAnalysisAlphaPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_beta_post200_response import PortfolioAnalysisBetaPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_contributions_return_post200_response import PortfolioAnalysisContributionsReturnPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_contributions_return_post_request import PortfolioAnalysisContributionsReturnPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_contributions_risk_post200_response import PortfolioAnalysisContributionsRiskPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_contributions_risk_post_request import PortfolioAnalysisContributionsRiskPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_correlation_spectrum_post200_response import PortfolioAnalysisCorrelationSpectrumPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_correlation_spectrum_post_request import PortfolioAnalysisCorrelationSpectrumPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_diversification_ratio_post200_response import PortfolioAnalysisDiversificationRatioPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_drawdowns_post200_response import PortfolioAnalysisDrawdownsPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_drawdowns_post_request import PortfolioAnalysisDrawdownsPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_effective_number_of_bets_post200_response import PortfolioAnalysisEffectiveNumberOfBetsPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_effective_number_of_bets_post_request import PortfolioAnalysisEffectiveNumberOfBetsPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_factors_exposures_post200_response import PortfolioAnalysisFactorsExposuresPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_factors_exposures_post_request import PortfolioAnalysisFactorsExposuresPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_mean_variance_efficient_frontier_post200_response import PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_mean_variance_efficient_frontier_post_request import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_mean_variance_minimum_variance_frontier_post_request import PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_return_post200_response import PortfolioAnalysisReturnPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_return_post_request import PortfolioAnalysisReturnPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_returns_average_post200_response import PortfolioAnalysisReturnsAveragePost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of1 import PortfolioAnalysisSharpeRatioPostRequestOneOf1  # noqa: E501
from openapi_server.models.portfolio_analysis_tracking_error_post200_response import PortfolioAnalysisTrackingErrorPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_tracking_error_post_request import PortfolioAnalysisTrackingErrorPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_ulcer_index_post200_response import PortfolioAnalysisUlcerIndexPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_ulcer_performance_index_post200_response import PortfolioAnalysisUlcerPerformanceIndexPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_volatility_post200_response import PortfolioAnalysisVolatilityPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_volatility_post_request import PortfolioAnalysisVolatilityPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPortfolioAnalysisController(BaseTestCase):
    """PortfolioAnalysisController integration test stubs"""

    def test_portfolio_analysis_alpha_post(self):
        """Test case for portfolio_analysis_alpha_post

        Alpha
        """
        body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015]}],"riskFreeRate":0.01}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/alpha',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_beta_post(self):
        """Test case for portfolio_analysis_beta_post

        Beta
        """
        body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015]}],"riskFreeRate":0.01}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/beta',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_contributions_return_post(self):
        """Test case for portfolio_analysis_contributions_return_post

        Return Contributions
        """
        body = {"assets":3,"assetsGroups":[[1,2]],"assetsReturns":[0.01,-0.01,0.025],"portfolios":[{"assetsWeights":[0.5,0.25,0.25]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/contributions/return',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_contributions_risk_post(self):
        """Test case for portfolio_analysis_contributions_risk_post

        Risk Contributions
        """
        body = {"assets":3,"assetsCovarianceMatrix":[[1.0E-4,0,0],[0,1.0E-4,0],[0,0,0.04]],"portfolios":[{"assetsWeights":[0.5,0.25,0.25]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/contributions/risk',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_correlation_spectrum_post(self):
        """Test case for portfolio_analysis_correlation_spectrum_post

        Correlation Spectrum
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[0.5,0.5]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/correlation-spectrum',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_diversification_ratio_post(self):
        """Test case for portfolio_analysis_diversification_ratio_post

        Diversification Ratio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[0.5,0.5]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/diversification-ratio',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_drawdowns_post(self):
        """Test case for portfolio_analysis_drawdowns_post

        Drawdowns
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/drawdowns',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_effective_number_of_bets_post(self):
        """Test case for portfolio_analysis_effective_number_of_bets_post

        Effective Number of Bets
        """
        body = {"assets":3,"assetsCovarianceMatrix":[[1,0,0],[0,286.31,100.79],[0,100.79,601.36]],"portfolios":[{"assetsWeights":[10.96,1.06,0.22]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/effective-number-of-bets',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_factors_exposures_post(self):
        """Test case for portfolio_analysis_factors_exposures_post

        Factor Exposures
        """
        body = {"factors":[{"factorReturns":[-0.00414169934,0.01201656108,0.0087181369]},{"factorReturns":[-0.01387258782,-0.01097961581,0.01742002062]}],"portfolios":[{"portfolioReturns":[-0.04302,0.01310372213,0.06482589323]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/factors/exposures',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_mean_variance_efficient_frontier_post(self):
        """Test case for portfolio_analysis_mean_variance_efficient_frontier_post

        Mean-Variance Efficient Frontier
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"constraints":{"minimumAssetsWeights":[0.2,0]},"portfolios":3}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/mean-variance/efficient-frontier',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_mean_variance_minimum_variance_frontier_post(self):
        """Test case for portfolio_analysis_mean_variance_minimum_variance_frontier_post

        Mean-Variance Minimum Variance Frontier
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"constraints":{"minimumAssetsWeights":[0.2,0]},"portfolios":4}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/mean-variance/minimum-variance-frontier',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_return_post(self):
        """Test case for portfolio_analysis_return_post

        Arithmetic Return
        """
        body = {"assets":2,"assetsReturns":[0.01,0.05],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/return',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_returns_average_post(self):
        """Test case for portfolio_analysis_returns_average_post

        Arithmetic Average Return
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/returns/average',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_tracking_error_post(self):
        """Test case for portfolio_analysis_tracking_error_post

        Tracking Error
        """
        body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014,0.018,0.014,0.065,-0.015,0.042,-0.006,0.083,0.039,-0.038,-0.062,0.015,-0.048,0.021,0.06,0.056,-0.067,0.019,-0.003,0],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015,0.025,0.016,0.067,-0.014,0.04,-0.005,0.081,0.04,-0.037,-0.061,0.017,-0.049,-0.022,0.07,0.058,-0.065,0.024,-0.005,-0.009]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/tracking-error',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_ulcer_index_post(self):
        """Test case for portfolio_analysis_ulcer_index_post

        Ulcer Index
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/ulcer-index',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_ulcer_performance_index_post(self):
        """Test case for portfolio_analysis_ulcer_performance_index_post

        Ulcer Performance Index
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/ulcer-performance-index',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_volatility_post(self):
        """Test case for portfolio_analysis_volatility_post

        Volatility
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/volatility',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
