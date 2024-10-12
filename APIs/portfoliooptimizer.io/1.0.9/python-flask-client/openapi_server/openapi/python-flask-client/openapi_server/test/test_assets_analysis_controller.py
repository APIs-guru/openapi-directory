import unittest

from flask import json

from openapi_server.models.assets_analysis_absorption_ratio_post200_response import AssetsAnalysisAbsorptionRatioPost200Response  # noqa: E501
from openapi_server.models.assets_analysis_absorption_ratio_post_request import AssetsAnalysisAbsorptionRatioPostRequest  # noqa: E501
from openapi_server.models.assets_analysis_turbulence_index_post200_response import AssetsAnalysisTurbulenceIndexPost200Response  # noqa: E501
from openapi_server.models.assets_analysis_turbulence_index_post_request import AssetsAnalysisTurbulenceIndexPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetsAnalysisController(BaseTestCase):
    """AssetsAnalysisController integration test stubs"""

    def test_assets_analysis_absorption_ratio_post(self):
        """Test case for assets_analysis_absorption_ratio_post

        Absorption Ratio
        """
        body = {"assets":2,"assetsCovarianceMatrix":[[9,1],[1,1]]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/analysis/absorption-ratio',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_assets_analysis_turbulence_index_post(self):
        """Test case for assets_analysis_turbulence_index_post

        Turbulence Index
        """
        body = {"assets":1,"assetsAverageReturns":[0.5],"assetsCovarianceMatrix":[[1]],"assetsReturns":[1]}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/assets/analysis/turbulence-index',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
