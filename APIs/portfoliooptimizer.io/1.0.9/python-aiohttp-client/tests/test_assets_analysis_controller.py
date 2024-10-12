# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_analysis_absorption_ratio_post200_response import AssetsAnalysisAbsorptionRatioPost200Response
from openapi_server.models.assets_analysis_absorption_ratio_post_request import AssetsAnalysisAbsorptionRatioPostRequest
from openapi_server.models.assets_analysis_turbulence_index_post200_response import AssetsAnalysisTurbulenceIndexPost200Response
from openapi_server.models.assets_analysis_turbulence_index_post_request import AssetsAnalysisTurbulenceIndexPostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_analysis_absorption_ratio_post(client):
    """Test case for assets_analysis_absorption_ratio_post

    Absorption Ratio
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[9,1],[1,1]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/analysis/absorption-ratio',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_analysis_turbulence_index_post(client):
    """Test case for assets_analysis_turbulence_index_post

    Turbulence Index
    """
    body = {"assets":1,"assetsAverageReturns":[0.5],"assetsCovarianceMatrix":[[1]],"assetsReturns":[1]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/analysis/turbulence-index',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

