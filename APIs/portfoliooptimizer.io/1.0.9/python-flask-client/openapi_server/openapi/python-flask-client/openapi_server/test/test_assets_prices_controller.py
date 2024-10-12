import unittest

from flask import json

from openapi_server.models.assets_prices_adjusted_post200_response import AssetsPricesAdjustedPost200Response  # noqa: E501
from openapi_server.models.assets_prices_adjusted_post_request import AssetsPricesAdjustedPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetsPricesController(BaseTestCase):
    """AssetsPricesController integration test stubs"""

    def test_assets_prices_adjusted_forward_post(self):
        """Test case for assets_prices_adjusted_forward_post

        Forward-Adjusted Prices
        """
        body = {"assets":[{"assetPrices":[{"close":2213.4,"date":"2020-08-28"},{"close":498.32,"date":"2020-08-31"},{"close":475.05,"date":"2020-09-01"}],"assetSplits":[{"date":"2020-08-31","factor":5}]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/prices/adjusted/forward',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_prices_adjusted_post(self):
        """Test case for assets_prices_adjusted_post

        Adjusted Prices
        """
        body = {"assets":[{"assetPrices":[{"close":2213.4,"date":"2020-08-28"},{"close":498.32,"date":"2020-08-31"},{"close":475.05,"date":"2020-09-01"}],"assetSplits":[{"date":"2020-08-31","factor":5}]}]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/prices/adjusted',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
