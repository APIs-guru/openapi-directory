import unittest

from flask import json

from openapi_server.models.factors_residualization_post200_response import FactorsResidualizationPost200Response  # noqa: E501
from openapi_server.models.factors_residualization_post_request import FactorsResidualizationPostRequest  # noqa: E501
from openapi_server.test import BaseTestCase


class TestFactorsController(BaseTestCase):
    """FactorsController integration test stubs"""

    def test_factors_residualization_post(self):
        """Test case for factors_residualization_post

        Residualization
        """
        body = {"factors":[{"factorReturns":[0.01,0.02,-0.01]},{"factorReturns":[0.025,0.005,-0.02]}],"residualizedFactor":1}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKeyAuth': 'special-key',
        }
        response = self.client.open(
            '/v1/factors/residualization',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
