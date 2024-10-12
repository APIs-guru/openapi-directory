import unittest

from flask import json

from openapi_server.models.assets_returns_average_post200_response import AssetsReturnsAveragePost200Response  # noqa: E501
from openapi_server.models.assets_returns_average_post_request import AssetsReturnsAveragePostRequest  # noqa: E501
from openapi_server.models.assets_returns_logarithmic_post200_response import AssetsReturnsLogarithmicPost200Response  # noqa: E501
from openapi_server.models.assets_returns_post200_response import AssetsReturnsPost200Response  # noqa: E501
from openapi_server.models.assets_returns_post_request import AssetsReturnsPostRequest  # noqa: E501
from openapi_server.models.assets_returns_turbulence_partitioned_post200_response import AssetsReturnsTurbulencePartitionedPost200Response  # noqa: E501
from openapi_server.models.assets_returns_turbulence_partitioned_post_request import AssetsReturnsTurbulencePartitionedPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetsReturnsController(BaseTestCase):
    """AssetsReturnsController integration test stubs"""

    def test_assets_returns_average_post(self):
        """Test case for assets_returns_average_post

        Arithmetic Average Return
        """
        body = {"assets":[{"assetReturns":[0.1,-0.05]},{"assetReturns":[0,-0.01,0.01]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/returns/average',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_returns_logarithmic_post(self):
        """Test case for assets_returns_logarithmic_post

        Logarithmic Returns
        """
        body = {"assets":[{"assetPrices":[1,2]},{"assetPrices":[2,3,6]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/returns/logarithmic',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_returns_post(self):
        """Test case for assets_returns_post

        Arithmetic Returns
        """
        body = {"assets":[{"assetPrices":[1,2]},{"assetPrices":[2,3,6]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/returns',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_returns_turbulence_partitioned_post(self):
        """Test case for assets_returns_turbulence_partitioned_post

        Turbulence-partitioned Asset Returns
        """
        body = {"assets":[{"assetReturns":[0,0.1,0.05,-0.01,0.025]},{"assetReturns":[0.005,0.05,0.1,-0.02,0]}],"turbulenceThresholds":[0.8,0.95]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/returns/turbulence-partitioned',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
