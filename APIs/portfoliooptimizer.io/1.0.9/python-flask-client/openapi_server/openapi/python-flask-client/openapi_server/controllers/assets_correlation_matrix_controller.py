import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_correlation_matrix_bounds_post200_response import AssetsCorrelationMatrixBoundsPost200Response  # noqa: E501
from openapi_server.models.assets_correlation_matrix_bounds_post_request import AssetsCorrelationMatrixBoundsPostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_denoised_post200_response import AssetsCorrelationMatrixDenoisedPost200Response  # noqa: E501
from openapi_server.models.assets_correlation_matrix_denoised_post_request import AssetsCorrelationMatrixDenoisedPostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_distance_post200_response import AssetsCorrelationMatrixDistancePost200Response  # noqa: E501
from openapi_server.models.assets_correlation_matrix_distance_post_request import AssetsCorrelationMatrixDistancePostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_effective_rank_post200_response import AssetsCorrelationMatrixEffectiveRankPost200Response  # noqa: E501
from openapi_server.models.assets_correlation_matrix_effective_rank_post_request import AssetsCorrelationMatrixEffectiveRankPostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_informativeness_post200_response import AssetsCorrelationMatrixInformativenessPost200Response  # noqa: E501
from openapi_server.models.assets_correlation_matrix_informativeness_post_request import AssetsCorrelationMatrixInformativenessPostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_nearest_post_request import AssetsCorrelationMatrixNearestPostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_post200_response import AssetsCorrelationMatrixPost200Response  # noqa: E501
from openapi_server.models.assets_correlation_matrix_post_request import AssetsCorrelationMatrixPostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_random_post_request import AssetsCorrelationMatrixRandomPostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_shrinkage_post_request import AssetsCorrelationMatrixShrinkagePostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_theory_implied_post_request import AssetsCorrelationMatrixTheoryImpliedPostRequest  # noqa: E501
from openapi_server.models.assets_correlation_matrix_validation_post200_response import AssetsCorrelationMatrixValidationPost200Response  # noqa: E501
from openapi_server.models.assets_correlation_matrix_validation_post_request import AssetsCorrelationMatrixValidationPostRequest  # noqa: E501
from openapi_server import util


def assets_correlation_matrix_bounds_post(body):  # noqa: E501
    """Correlation Matrix Bounds

    Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.    References  * [Kawee Numpacharoen &amp; Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517).  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixBoundsPost200Response, Tuple[AssetsCorrelationMatrixBoundsPost200Response, int], Tuple[AssetsCorrelationMatrixBoundsPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixBoundsPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_denoised_post(body):  # noqa: E501
    """Denoised Correlation Matrix

    Compute a denoised asset correlation matrix, using one of the following methods:  * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory    References  * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixDenoisedPost200Response, Tuple[AssetsCorrelationMatrixDenoisedPost200Response, int], Tuple[AssetsCorrelationMatrixDenoisedPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixDenoisedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_distance_post(body):  # noqa: E501
    """Correlation Matrix Distance

    Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the second reference   References  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixDistancePost200Response, Tuple[AssetsCorrelationMatrixDistancePost200Response, int], Tuple[AssetsCorrelationMatrixDistancePost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixDistancePostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_effective_rank_post(body):  # noqa: E501
    """Correlation Matrix Effective Rank

    Compute the effective rank of an asset correlation matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixEffectiveRankPost200Response, Tuple[AssetsCorrelationMatrixEffectiveRankPost200Response, int], Tuple[AssetsCorrelationMatrixEffectiveRankPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixEffectiveRankPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_informativeness_post(body):  # noqa: E501
    """Correlation Matrix Informativeness

    Compute the informativeness of an asset correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the third reference   References  * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixInformativenessPost200Response, Tuple[AssetsCorrelationMatrixInformativenessPost200Response, int], Tuple[AssetsCorrelationMatrixInformativenessPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixInformativenessPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_nearest_post(body):  # noqa: E501
    """Nearest Correlation Matrix

    Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.  References * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixPost200Response, Tuple[AssetsCorrelationMatrixPost200Response, int], Tuple[AssetsCorrelationMatrixPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixNearestPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_post(body):  # noqa: E501
    """Correlation Matrix

    Compute the Pearson asset correlation matrix from either:   * The asset returns * The asset covariance matrix  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixPost200Response, Tuple[AssetsCorrelationMatrixPost200Response, int], Tuple[AssetsCorrelationMatrixPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_random_post(body):  # noqa: E501
    """Random Correlation Matrix

    Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.  References * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixPost200Response, Tuple[AssetsCorrelationMatrixPost200Response, int], Tuple[AssetsCorrelationMatrixPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixRandomPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_shrinkage_post(body):  # noqa: E501
    """Correlation Matrix Shrinkage

    Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:    * An equicorrelation matrix made of 1  * An equicorrelation matrix made of 0  * An equicorrelation matrix made of -1/(n-1), with n the number of assets  * A provided correlation matrix    References  * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1878165)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixPost200Response, Tuple[AssetsCorrelationMatrixPost200Response, int], Tuple[AssetsCorrelationMatrixPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixShrinkagePostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_theory_implied_post(body):  # noqa: E501
    """Theory-Implied Correlation Matrix

    Compute the theory-implied asset correlation matrix associated with: * A hierarchical classification of a universe of assets * An asset correlation matrix  References * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3484152)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixPost200Response, Tuple[AssetsCorrelationMatrixPost200Response, int], Tuple[AssetsCorrelationMatrixPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixTheoryImpliedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_correlation_matrix_validation_post(body):  # noqa: E501
    """Correlation Matrix Validation

    Validate whether a matrix is an asset correlation matrix.  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsCorrelationMatrixValidationPost200Response, Tuple[AssetsCorrelationMatrixValidationPost200Response, int], Tuple[AssetsCorrelationMatrixValidationPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixValidationPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
