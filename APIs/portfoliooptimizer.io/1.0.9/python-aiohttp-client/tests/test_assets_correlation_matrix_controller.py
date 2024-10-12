# coding: utf-8

import pytest
import json
from aiohttp import web

from openapi_server.models.assets_correlation_matrix_bounds_post200_response import AssetsCorrelationMatrixBoundsPost200Response
from openapi_server.models.assets_correlation_matrix_bounds_post_request import AssetsCorrelationMatrixBoundsPostRequest
from openapi_server.models.assets_correlation_matrix_denoised_post200_response import AssetsCorrelationMatrixDenoisedPost200Response
from openapi_server.models.assets_correlation_matrix_denoised_post_request import AssetsCorrelationMatrixDenoisedPostRequest
from openapi_server.models.assets_correlation_matrix_distance_post200_response import AssetsCorrelationMatrixDistancePost200Response
from openapi_server.models.assets_correlation_matrix_distance_post_request import AssetsCorrelationMatrixDistancePostRequest
from openapi_server.models.assets_correlation_matrix_effective_rank_post200_response import AssetsCorrelationMatrixEffectiveRankPost200Response
from openapi_server.models.assets_correlation_matrix_effective_rank_post_request import AssetsCorrelationMatrixEffectiveRankPostRequest
from openapi_server.models.assets_correlation_matrix_informativeness_post200_response import AssetsCorrelationMatrixInformativenessPost200Response
from openapi_server.models.assets_correlation_matrix_informativeness_post_request import AssetsCorrelationMatrixInformativenessPostRequest
from openapi_server.models.assets_correlation_matrix_nearest_post_request import AssetsCorrelationMatrixNearestPostRequest
from openapi_server.models.assets_correlation_matrix_post200_response import AssetsCorrelationMatrixPost200Response
from openapi_server.models.assets_correlation_matrix_post_request import AssetsCorrelationMatrixPostRequest
from openapi_server.models.assets_correlation_matrix_random_post_request import AssetsCorrelationMatrixRandomPostRequest
from openapi_server.models.assets_correlation_matrix_shrinkage_post_request import AssetsCorrelationMatrixShrinkagePostRequest
from openapi_server.models.assets_correlation_matrix_theory_implied_post_request import AssetsCorrelationMatrixTheoryImpliedPostRequest
from openapi_server.models.assets_correlation_matrix_validation_post200_response import AssetsCorrelationMatrixValidationPost200Response
from openapi_server.models.assets_correlation_matrix_validation_post_request import AssetsCorrelationMatrixValidationPostRequest


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_bounds_post(client):
    """Test case for assets_correlation_matrix_bounds_post

    Correlation Matrix Bounds
    """
    body = {"assets":4,"assetsCorrelationMatrix":[[1,-0.55,-0.15,-0.1],[-0.55,1,0.4,0.3],[-0.15,0.4,1,0.5],[-0.1,0.3,0.5,1]],"assetsGroup":[2,3,4]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/bounds',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_denoised_post(client):
    """Test case for assets_correlation_matrix_denoised_post

    Denoised Correlation Matrix
    """
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"assetsCorrelationMatrixAspectRatio":0.5}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/denoised',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_distance_post(client):
    """Test case for assets_correlation_matrix_distance_post

    Correlation Matrix Distance
    """
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"distanceMetric":"correlationMatrix","referenceCorrelationMatrix":[[1,1,1],[1,1,1],[1,1,1]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/distance',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_effective_rank_post(client):
    """Test case for assets_correlation_matrix_effective_rank_post

    Correlation Matrix Effective Rank
    """
    body = {"assets":2,"assetsCorrelationMatrix":[[1,0],[0,1]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/effective-rank',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_informativeness_post(client):
    """Test case for assets_correlation_matrix_informativeness_post

    Correlation Matrix Informativeness
    """
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"distanceMetric":"bures"}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/informativeness',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_nearest_post(client):
    """Test case for assets_correlation_matrix_nearest_post

    Nearest Correlation Matrix
    """
    body = {"assets":3,"assetsApproximateCorrelationMatrix":[[1,1,0],[1,1,1],[0,1,1]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/nearest',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_post(client):
    """Test case for assets_correlation_matrix_post

    Correlation Matrix
    """
    body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_random_post(client):
    """Test case for assets_correlation_matrix_random_post

    Random Correlation Matrix
    """
    body = {"assets":2}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/random',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_shrinkage_post(client):
    """Test case for assets_correlation_matrix_shrinkage_post

    Correlation Matrix Shrinkage
    """
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"shrinkageFactor":0.5,"targetCorrelationMatrix":[[1,0,0],[0,1,0],[0,0,1]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/shrinkage',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_theory_implied_post(client):
    """Test case for assets_correlation_matrix_theory_implied_post

    Theory-Implied Correlation Matrix
    """
    body = {"assets":[{"assetHierarchicalClassification":[35,3510,351010,35101010]},{"assetHierarchicalClassification":[20,2030,203020,20302010]}],"assetsCorrelationMatrix":[[1,-3.5E-4],[-3.5E-4,1]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/theory-implied',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')


pytestmark = pytest.mark.asyncio

async def test_assets_correlation_matrix_validation_post(client):
    """Test case for assets_correlation_matrix_validation_post

    Correlation Matrix Validation
    """
    body = {"assets":2,"assetsCorrelationMatrix":[[1,-3.5E-4],[-3.5E-4,1]]}
    headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKeyAuth': 'special-key',
    }
    response = await client.request(
        method='POST',
        path='/v1/assets/correlation/matrix/validation',
        headers=headers,
        json=body,
        )
    assert response.status == 200, 'Response body is : ' + (await response.read()).decode('utf-8')

