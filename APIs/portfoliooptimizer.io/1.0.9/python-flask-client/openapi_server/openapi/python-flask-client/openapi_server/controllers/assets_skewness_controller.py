import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_skewness_post200_response import AssetsSkewnessPost200Response  # noqa: E501
from openapi_server.models.assets_skewness_post_request import AssetsSkewnessPostRequest  # noqa: E501
from openapi_server import util


def assets_skewness_post(body):  # noqa: E501
    """Skewness

    Compute the skewness of one or several asset(s), from the asset returns.  References * [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsSkewnessPost200Response, Tuple[AssetsSkewnessPost200Response, int], Tuple[AssetsSkewnessPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsSkewnessPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
