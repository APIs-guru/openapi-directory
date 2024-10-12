import unittest

from flask import json

from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_gaussian_post_request import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_historical_post_request import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPortfolioAnalysisConditionalValueAtRiskController(BaseTestCase):
    """PortfolioAnalysisConditionalValueAtRiskController integration test stubs"""

    def test_portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post(self):
        """Test case for portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post

        Corrected Cornish-Fisher Conditional Value At Risk
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_value_at_risk_conditional_cornish_fisher_post(self):
        """Test case for portfolio_analysis_value_at_risk_conditional_cornish_fisher_post

        Cornish-Fisher Conditional Value At Risk
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/value-at-risk/conditional/cornish-fisher',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_value_at_risk_conditional_gaussian_post(self):
        """Test case for portfolio_analysis_value_at_risk_conditional_gaussian_post

        Gaussian Conditional Value At Risk
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/value-at-risk/conditional/gaussian',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_analysis_value_at_risk_conditional_historical_post(self):
        """Test case for portfolio_analysis_value_at_risk_conditional_historical_post

        Historical Conditional Value At Risk
        """
        body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/analysis/value-at-risk/conditional/historical',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
