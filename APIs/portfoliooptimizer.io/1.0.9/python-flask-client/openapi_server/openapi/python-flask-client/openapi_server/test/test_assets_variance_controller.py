import unittest

from flask import json

from openapi_server.models.assets_variance_post200_response import AssetsVariancePost200Response  # noqa: E501
from openapi_server.models.assets_variance_post_request import AssetsVariancePostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetsVarianceController(BaseTestCase):
    """AssetsVarianceController integration test stubs"""

    def test_assets_variance_post(self):
        """Test case for assets_variance_post

        Variance
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/variance',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
