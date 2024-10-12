import unittest

from flask import json

from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post_request import AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest  # noqa: E501
from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_post200_response import AssetsReturnsSimulationMonteCarloCornishFisherPost200Response  # noqa: E501
from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_post_request import AssetsReturnsSimulationMonteCarloCornishFisherPostRequest  # noqa: E501
from openapi_server.models.assets_returns_simulation_monte_carlo_gaussian_post_request import AssetsReturnsSimulationMonteCarloGaussianPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetsMonteCarloReturnsSimulationController(BaseTestCase):
    """AssetsMonteCarloReturnsSimulationController integration test stubs"""

    def test_assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post(self):
        """Test case for assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post

        Corrected Cornish-Fisher Distribution
        """
        body = {"assetAverageReturn":0.05,"assetKurtosis":1,"assetSkewness":0.5,"assetVolatility":0.2,"simulations":5,"simulationsLength":4}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/returns/simulation/monte-carlo/cornish-fisher/corrected',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_returns_simulation_monte_carlo_cornish_fisher_post(self):
        """Test case for assets_returns_simulation_monte_carlo_cornish_fisher_post

        Cornish-Fisher Distribution
        """
        body = {"assetAverageReturnParameter":0.05,"assetKurtosisParameter":1,"assetSkewnessParameter":0.5,"assetVolatilityParameter":0.2,"simulations":5,"simulationsLength":4}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/returns/simulation/monte-carlo/cornish-fisher',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_returns_simulation_monte_carlo_gaussian_post(self):
        """Test case for assets_returns_simulation_monte_carlo_gaussian_post

        Gaussian Distribution
        """
        body = {"assetAverageReturn":0.05,"assetVolatility":0.2,"simulations":5,"simulationsLength":4}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/returns/simulation/monte-carlo/gaussian',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
