# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_correlation_matrix_post_request_one_of1 import AssetsCorrelationMatrixPostRequestOneOf1
from openapi_server.models.assets_covariance_matrix_effective_rank_post200_response import AssetsCovarianceMatrixEffectiveRankPost200Response
from openapi_server.models.assets_covariance_matrix_effective_rank_post_request import AssetsCovarianceMatrixEffectiveRankPostRequest
from openapi_server.models.assets_covariance_matrix_exponentially_weighted_post200_response import AssetsCovarianceMatrixExponentiallyWeightedPost200Response
from openapi_server.models.assets_covariance_matrix_exponentially_weighted_post_request import AssetsCovarianceMatrixExponentiallyWeightedPostRequest
from openapi_server.models.assets_covariance_matrix_post200_response import AssetsCovarianceMatrixPost200Response
from openapi_server.models.assets_covariance_matrix_post_request import AssetsCovarianceMatrixPostRequest
from openapi_server.models.assets_covariance_matrix_validation_post200_response import AssetsCovarianceMatrixValidationPost200Response


pytestmark = pytest.mark.asyncio

async def test_assets_covariance_matrix_effective_rank_post(client):
    """Test case for assets_covariance_matrix_effective_rank_post

    Covariance Matrix Effective Rank
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[3.5E-4,-3.5E-4],[-3.5E-4,3.5E-4]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/covariance/matrix/effective-rank',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_covariance_matrix_exponentially_weighted_post(client):
    """Test case for assets_covariance_matrix_exponentially_weighted_post

    Exponentially Weighted Covariance Matrix
    """
    body = {"assets":[{"assetReturns":[0.01,0.01,0.02,0.01]},{"assetReturns":[-0.02,-0.02,-0.04,-0.02]}],"decayFactor":0.5}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/covariance/matrix/exponentially-weighted',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_covariance_matrix_post(client):
    """Test case for assets_covariance_matrix_post

    Covariance Matrix
    """
    body = {"assets":2,"assetsCorrelationMatrix":[[1,-0.5],[-0.5,1]],"assetsVolatilities":[0.1,0.05]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/covariance/matrix',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_covariance_matrix_validation_post(client):
    """Test case for assets_covariance_matrix_validation_post

    Covariance Matrix Validation
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[3.5E-4,-3.5E-4],[-3.5E-4,3.5E-4]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/covariance/matrix/validation',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

