import unittest

from flask import json

from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner  # noqa: E501
from openapi_server.models.portfolio_construction_investable_post200_response import PortfolioConstructionInvestablePost200Response  # noqa: E501
from openapi_server.models.portfolio_construction_investable_post_request import PortfolioConstructionInvestablePostRequest  # noqa: E501
from openapi_server.models.portfolio_construction_mimicking_post_request import PortfolioConstructionMimickingPostRequest  # noqa: E501
from openapi_server.models.portfolio_construction_random_post200_response import PortfolioConstructionRandomPost200Response  # noqa: E501
from openapi_server.models.portfolio_construction_random_post_request import PortfolioConstructionRandomPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPortfolioConstructionController(BaseTestCase):
    """PortfolioConstructionController integration test stubs"""

    def test_portfolio_construction_investable_post(self):
        """Test case for portfolio_construction_investable_post

        Investable Portfolio
        """
        body = {"assets":4,"assetsGroups":[[1,2],[3,4]],"assetsGroupsWeights":[0.4,0.4],"assetsPrices":[10,25,100,500],"assetsWeights":[0.2,null,null,null],"portfolioValue":10000}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/construction/investable',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_construction_mimicking_post(self):
        """Test case for portfolio_construction_mimicking_post

        Mimicking Portfolio
        """
        body = {"assets":[{"assetReturns":[0.01,0.02,0.03]},{"assetReturns":[-0.01,-0.02,-0.03]}],"benchmarkReturns":[0,0,0]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/construction/mimicking',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_construction_random_post(self):
        """Test case for portfolio_construction_random_post

        Random Portfolio
        """
        body = {"assets":3,"portfolios":2}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/construction/random',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
