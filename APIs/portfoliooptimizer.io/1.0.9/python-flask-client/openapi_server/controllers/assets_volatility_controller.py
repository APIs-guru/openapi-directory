import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_volatility_post200_response import AssetsVolatilityPost200Response  # noqa: E501
from openapi_server.models.assets_volatility_post_request import AssetsVolatilityPostRequest  # noqa: E501
from openapi_server import util


def assets_volatility_post(body):  # noqa: E501
    """Volatility

    Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset variance(s)  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsVolatilityPost200Response, Tuple[AssetsVolatilityPost200Response, int], Tuple[AssetsVolatilityPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsVolatilityPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
