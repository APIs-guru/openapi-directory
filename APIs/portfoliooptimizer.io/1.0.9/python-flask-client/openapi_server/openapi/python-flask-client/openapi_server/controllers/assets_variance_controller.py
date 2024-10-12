import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_variance_post200_response import AssetsVariancePost200Response  # noqa: E501
from openapi_server.models.assets_variance_post_request import AssetsVariancePostRequest  # noqa: E501
from openapi_server import util


def assets_variance_post(body):  # noqa: E501
    """Variance

    Compute the variance of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset volatility(ies)  References * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)          # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsVariancePost200Response, Tuple[AssetsVariancePost200Response, int], Tuple[AssetsVariancePost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsVariancePostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
