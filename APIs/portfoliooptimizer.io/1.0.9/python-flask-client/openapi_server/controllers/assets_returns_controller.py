import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_returns_average_post200_response import AssetsReturnsAveragePost200Response  # noqa: E501
from openapi_server.models.assets_returns_average_post_request import AssetsReturnsAveragePostRequest  # noqa: E501
from openapi_server.models.assets_returns_logarithmic_post200_response import AssetsReturnsLogarithmicPost200Response  # noqa: E501
from openapi_server.models.assets_returns_post200_response import AssetsReturnsPost200Response  # noqa: E501
from openapi_server.models.assets_returns_post_request import AssetsReturnsPostRequest  # noqa: E501
from openapi_server.models.assets_returns_turbulence_partitioned_post200_response import AssetsReturnsTurbulencePartitionedPost200Response  # noqa: E501
from openapi_server.models.assets_returns_turbulence_partitioned_post_request import AssetsReturnsTurbulencePartitionedPostRequest  # noqa: E501
from openapi_server import util


def assets_returns_average_post(body):  # noqa: E501
    """Arithmetic Average Return

    Compute the arithmetic average of the return(s) of one or several asset(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsReturnsAveragePost200Response, Tuple[AssetsReturnsAveragePost200Response, int], Tuple[AssetsReturnsAveragePost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsReturnsAveragePostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_returns_logarithmic_post(body):  # noqa: E501
    """Logarithmic Returns

    Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsReturnsLogarithmicPost200Response, Tuple[AssetsReturnsLogarithmicPost200Response, int], Tuple[AssetsReturnsLogarithmicPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsReturnsPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_returns_post(body):  # noqa: E501
    """Arithmetic Returns

    Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsReturnsPost200Response, Tuple[AssetsReturnsPost200Response, int], Tuple[AssetsReturnsPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsReturnsPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_returns_turbulence_partitioned_post(body):  # noqa: E501
    """Turbulence-partitioned Asset Returns

    Partition asset returns into several subsets based on their turbulence index.  References * [George Chow, Jacquier, E., Kritzman, M., &amp; Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsReturnsTurbulencePartitionedPost200Response, Tuple[AssetsReturnsTurbulencePartitionedPost200Response, int], Tuple[AssetsReturnsTurbulencePartitionedPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsReturnsTurbulencePartitionedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
