import unittest

from flask import json

from openapi_server.models.assets_returns_simulation_bootstrap_post200_response import AssetsReturnsSimulationBootstrapPost200Response  # noqa: E501
from openapi_server.models.assets_returns_simulation_bootstrap_post_request import AssetsReturnsSimulationBootstrapPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetsReturnsSimulationController(BaseTestCase):
    """AssetsReturnsSimulationController integration test stubs"""

    def test_assets_returns_simulation_bootstrap_post(self):
        """Test case for assets_returns_simulation_bootstrap_post

        Bootstrap
        """
        body = {"assets":[{"assetReturns":[0.1,-0.05,0.01,0.025,-0.1]},{"assetReturns":[0,0.01,0.02,-0.01,0.05]}],"bootstrapBlockLength":2,"bootstrapMethod":"circularBlock","simulations":5,"simulationsLength":4}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/returns/simulation/bootstrap',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
