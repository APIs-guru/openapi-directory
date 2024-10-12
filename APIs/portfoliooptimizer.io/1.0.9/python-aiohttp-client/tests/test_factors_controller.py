# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.factors_residualization_post200_response import FactorsResidualizationPost200Response
from openapi_server.models.factors_residualization_post_request import FactorsResidualizationPostRequest


pytestmark = pytest.mark.asyncio

async def test_factors_residualization_post(client):
    """Test case for factors_residualization_post

    Residualization
    """
    body = {"factors":[{"factorReturns":[0.01,0.02,-0.01]},{"factorReturns":[0.025,0.005,-0.02]}],"residualizedFactor":1}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/factors/residualization',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

