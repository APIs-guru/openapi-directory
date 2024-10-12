import unittest

from flask import json

from openapi_server.models.assets_correlation_matrix_post_request_one_of1 import AssetsCorrelationMatrixPostRequestOneOf1  # noqa: E501
from openapi_server.models.assets_covariance_matrix_effective_rank_post200_response import AssetsCovarianceMatrixEffectiveRankPost200Response  # noqa: E501
from openapi_server.models.assets_covariance_matrix_effective_rank_post_request import AssetsCovarianceMatrixEffectiveRankPostRequest  # noqa: E501
from openapi_server.models.assets_covariance_matrix_exponentially_weighted_post200_response import AssetsCovarianceMatrixExponentiallyWeightedPost200Response  # noqa: E501
from openapi_server.models.assets_covariance_matrix_exponentially_weighted_post_request import AssetsCovarianceMatrixExponentiallyWeightedPostRequest  # noqa: E501
from openapi_server.models.assets_covariance_matrix_post200_response import AssetsCovarianceMatrixPost200Response  # noqa: E501
from openapi_server.models.assets_covariance_matrix_post_request import AssetsCovarianceMatrixPostRequest  # noqa: E501
from openapi_server.models.assets_covariance_matrix_validation_post200_response import AssetsCovarianceMatrixValidationPost200Response  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetsCovarianceMatrixController(BaseTestCase):
    """AssetsCovarianceMatrixController integration test stubs"""

    def test_assets_covariance_matrix_effective_rank_post(self):
        """Test case for assets_covariance_matrix_effective_rank_post

        Covariance Matrix Effective Rank
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[3.5E-4,-3.5E-4],[-3.5E-4,3.5E-4]]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/covariance/matrix/effective-rank',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_covariance_matrix_exponentially_weighted_post(self):
        """Test case for assets_covariance_matrix_exponentially_weighted_post

        Exponentially Weighted Covariance Matrix
        """
        body = {"assets":[{"assetReturns":[0.01,0.01,0.02,0.01]},{"assetReturns":[-0.02,-0.02,-0.04,-0.02]}],"decayFactor":0.5}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/covariance/matrix/exponentially-weighted',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_covariance_matrix_post(self):
        """Test case for assets_covariance_matrix_post

        Covariance Matrix
        """
        body = {"assets":2,"assetsCorrelationMatrix":[[1,-0.5],[-0.5,1]],"assetsVolatilities":[0.1,0.05]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/covariance/matrix',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_covariance_matrix_validation_post(self):
        """Test case for assets_covariance_matrix_validation_post

        Covariance Matrix Validation
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[3.5E-4,-3.5E-4],[-3.5E-4,3.5E-4]]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/covariance/matrix/validation',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
