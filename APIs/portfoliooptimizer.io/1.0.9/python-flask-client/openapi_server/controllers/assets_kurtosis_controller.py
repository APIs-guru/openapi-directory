import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_kurtosis_post200_response import AssetsKurtosisPost200Response  # noqa: E501
from openapi_server.models.assets_kurtosis_post_request import AssetsKurtosisPostRequest  # noqa: E501
from openapi_server import util


def assets_kurtosis_post(body):  # noqa: E501
    """Kurtosis

    Compute the kurtosis of one or several asset(s), from the asset returns.  References * [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsKurtosisPost200Response, Tuple[AssetsKurtosisPost200Response, int], Tuple[AssetsKurtosisPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsKurtosisPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
