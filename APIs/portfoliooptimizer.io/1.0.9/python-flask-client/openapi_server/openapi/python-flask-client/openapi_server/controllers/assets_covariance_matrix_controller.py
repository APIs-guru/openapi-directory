import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_correlation_matrix_post_request_one_of1 import AssetsCorrelationMatrixPostRequestOneOf1  # noqa: E501
from openapi_server.models.assets_covariance_matrix_effective_rank_post200_response import AssetsCovarianceMatrixEffectiveRankPost200Response  # noqa: E501
from openapi_server.models.assets_covariance_matrix_effective_rank_post_request import AssetsCovarianceMatrixEffectiveRankPostRequest  # noqa: E501
from openapi_server.models.assets_covariance_matrix_exponentially_weighted_post200_response import AssetsCovarianceMatrixExponentiallyWeightedPost200Response  # noqa: E501
from openapi_server.models.assets_covariance_matrix_exponentially_weighted_post_request import AssetsCovarianceMatrixExponentiallyWeightedPostRequest  # noqa: E501
from openapi_server.models.assets_covariance_matrix_post200_response import AssetsCovarianceMatrixPost200Response  # noqa: E501
from openapi_server.models.assets_covariance_matrix_post_request import AssetsCovarianceMatrixPostRequest  # noqa: E501
from openapi_server.models.assets_covariance_matrix_validation_post200_response import AssetsCovarianceMatrixValidationPost200Response  # noqa: E501
from openapi_server import util


def assets_covariance_matrix_effective_rank_post(body):  # noqa: E501
    """Covariance Matrix Effective Rank

    Compute the effective rank of an asset covariance matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCovarianceMatrixEffectiveRankPost200Response, Tuple[AssetsCovarianceMatrixEffectiveRankPost200Response, int], Tuple[AssetsCovarianceMatrixEffectiveRankPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCovarianceMatrixEffectiveRankPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_covariance_matrix_exponentially_weighted_post(body):  # noqa: E501
    """Exponentially Weighted Covariance Matrix

    Compute an exponentially weighted covariance matrix of assets returns.  References * [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCovarianceMatrixExponentiallyWeightedPost200Response, Tuple[AssetsCovarianceMatrixExponentiallyWeightedPost200Response, int], Tuple[AssetsCovarianceMatrixExponentiallyWeightedPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCovarianceMatrixExponentiallyWeightedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_covariance_matrix_post(body):  # noqa: E501
    """Covariance Matrix

    Compute the covariance matrix of assets from either:   * The asset correlation matrix and their volatilities (i.e., standard deviations) * The asset correlation matrix and their variances * The asset returns  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCovarianceMatrixPost200Response, Tuple[AssetsCovarianceMatrixPost200Response, int], Tuple[AssetsCovarianceMatrixPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCovarianceMatrixPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_covariance_matrix_validation_post(body):  # noqa: E501
    """Covariance Matrix Validation

    Validate whether a matrix is a covariance matrix.  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCovarianceMatrixValidationPost200Response, Tuple[AssetsCovarianceMatrixValidationPost200Response, int], Tuple[AssetsCovarianceMatrixValidationPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixPostRequestOneOf1.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
