import unittest

from flask import json

from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_gaussian_post_request import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_historical_post_request import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskCornishFisherPost200Response  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPortfolioAnalysisValueAtRiskController(BaseTestCase):
    """PortfolioAnalysisValueAtRiskController integration test stubs"""

    def test_portfolio_analysis_value_at_risk_cornish_fisher_corrected_post(self):
        """Test case for portfolio_analysis_value_at_risk_cornish_fisher_corrected_post

        Corrected Cornish-Fisher Value At Risk
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/value-at-risk/cornish-fisher/corrected',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_value_at_risk_cornish_fisher_post(self):
        """Test case for portfolio_analysis_value_at_risk_cornish_fisher_post

        Cornish-Fisher Value At Risk
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/value-at-risk/cornish-fisher',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_value_at_risk_gaussian_post(self):
        """Test case for portfolio_analysis_value_at_risk_gaussian_post

        Gaussian Value At Risk
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/value-at-risk/gaussian',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_value_at_risk_historical_post(self):
        """Test case for portfolio_analysis_value_at_risk_historical_post

        Historical Value At Risk
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/value-at-risk/historical',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
