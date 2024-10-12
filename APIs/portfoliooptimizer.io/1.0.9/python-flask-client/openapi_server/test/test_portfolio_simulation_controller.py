import unittest

from flask import json

from openapi_server.models.portfolio_simulation_rebalancing_drift_weight_post200_response import PortfolioSimulationRebalancingDriftWeightPost200Response  # noqa: E501
from openapi_server.models.portfolio_simulation_rebalancing_drift_weight_post_request import PortfolioSimulationRebalancingDriftWeightPostRequest  # noqa: E501
from openapi_server.models.portfolio_simulation_rebalancing_random_weight_post_request import PortfolioSimulationRebalancingRandomWeightPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPortfolioSimulationController(BaseTestCase):
    """PortfolioSimulationController integration test stubs"""

    def test_portfolio_simulation_rebalancing_drift_weight_post(self):
        """Test case for portfolio_simulation_rebalancing_drift_weight_post

        Drift-weight Portfolio Rebalancing
        """
        body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":[{"assetsWeights":[1,0,0]},{"assetsWeights":[0,1,0]},{"assetsWeights":[0,0,1]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/simulation/rebalancing/drift-weight',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_simulation_rebalancing_fixed_weight_post(self):
        """Test case for portfolio_simulation_rebalancing_fixed_weight_post

        Fixed-weight Portfolio Rebalancing
        """
        body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":[{"assetsWeights":[0.5,0.5,0]},{"assetsWeights":[0,0.5,0.5]},{"assetsWeights":[0.5,0,0.5]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/simulation/rebalancing/fixed-weight',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_portfolio_simulation_rebalancing_random_weight_post(self):
        """Test case for portfolio_simulation_rebalancing_random_weight_post

        Random-weight Portfolio Rebalancing
        """
        body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":2}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/portfolio/simulation/rebalancing/random-weight',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
