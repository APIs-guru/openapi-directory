import unittest

from flask import json

from openapi_server.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post200_response import PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post_request import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_confidence_interval_post200_response import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_confidence_interval_post_request import PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_post200_response import PortfolioAnalysisSharpeRatioPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request import PortfolioAnalysisSharpeRatioPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post200_response import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_post200_response import PortfolioAnalysisSharpeRatioProbabilisticPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_post_request import PortfolioAnalysisSharpeRatioProbabilisticPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPortfolioAnalysisSharpeRatioController(BaseTestCase):
    """PortfolioAnalysisSharpeRatioController integration test stubs"""

    def test_portfolio_analysis_sharpe_ratio_bias_adjusted_post(self):
        """Test case for portfolio_analysis_sharpe_ratio_bias_adjusted_post

        Bias-Adjusted Sharpe Ratio
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/sharpe-ratio/bias-adjusted',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_sharpe_ratio_confidence_interval_post(self):
        """Test case for portfolio_analysis_sharpe_ratio_confidence_interval_post

        Sharpe Ratio Confidence Interval
        """
        body = {"confidenceIntervalType":"twoSided","confidenceLevel":0.99,"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/sharpe-ratio/confidence-interval',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_sharpe_ratio_post(self):
        """Test case for portfolio_analysis_sharpe_ratio_post

        Sharpe Ratio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/sharpe-ratio',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post(self):
        """Test case for portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post

        Minimum Track Record Length
        """
        body = {"benchmarkValues":[100,101,98,85,75,65],"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_sharpe_ratio_probabilistic_post(self):
        """Test case for portfolio_analysis_sharpe_ratio_probabilistic_post

        Probabilistic Sharpe Ratio
        """
        body = {"benchmarkValues":[100,101,98,102,95,90],"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/sharpe-ratio/probabilistic',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
