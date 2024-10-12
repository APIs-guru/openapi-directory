import unittest

from flask import json

from openapi_server.models.assets_kurtosis_post200_response import AssetsKurtosisPost200Response  # noqa: E501
from openapi_server.models.assets_kurtosis_post_request import AssetsKurtosisPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetsKurtosisController(BaseTestCase):
    """AssetsKurtosisController integration test stubs"""

    def test_assets_kurtosis_post(self):
        """Test case for assets_kurtosis_post

        Kurtosis
        """
        body = {"assets":[{"assetReturns":[0.01,0,0.02,-0.03]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/kurtosis',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
