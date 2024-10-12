from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_correlation_matrix_post_request_one_of1 import AssetsCorrelationMatrixPostRequestOneOf1
from openapi_server.models.assets_covariance_matrix_effective_rank_post200_response import AssetsCovarianceMatrixEffectiveRankPost200Response
from openapi_server.models.assets_covariance_matrix_effective_rank_post_request import AssetsCovarianceMatrixEffectiveRankPostRequest
from openapi_server.models.assets_covariance_matrix_exponentially_weighted_post200_response import AssetsCovarianceMatrixExponentiallyWeightedPost200Response
from openapi_server.models.assets_covariance_matrix_exponentially_weighted_post_request import AssetsCovarianceMatrixExponentiallyWeightedPostRequest
from openapi_server.models.assets_covariance_matrix_post200_response import AssetsCovarianceMatrixPost200Response
from openapi_server.models.assets_covariance_matrix_post_request import AssetsCovarianceMatrixPostRequest
from openapi_server.models.assets_covariance_matrix_validation_post200_response import AssetsCovarianceMatrixValidationPost200Response
from openapi_server import util


async def assets_covariance_matrix_effective_rank_post(request: web.Request, body) -> web.Response:
    """Covariance Matrix Effective Rank

    Compute the effective rank of an asset covariance matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsCovarianceMatrixEffectiveRankPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_covariance_matrix_exponentially_weighted_post(request: web.Request, body) -> web.Response:
    """Exponentially Weighted Covariance Matrix

    Compute an exponentially weighted covariance matrix of assets returns.  References * [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsCovarianceMatrixExponentiallyWeightedPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_covariance_matrix_post(request: web.Request, body) -> web.Response:
    """Covariance Matrix

    Compute the covariance matrix of assets from either:   * The asset correlation matrix and their volatilities (i.e., standard deviations) * The asset correlation matrix and their variances * The asset returns  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsCovarianceMatrixPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_covariance_matrix_validation_post(request: web.Request, body) -> web.Response:
    """Covariance Matrix Validation

    Validate whether a matrix is a covariance matrix.  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsCorrelationMatrixPostRequestOneOf1.from_dict(body)
    return web.Response(status=200)
