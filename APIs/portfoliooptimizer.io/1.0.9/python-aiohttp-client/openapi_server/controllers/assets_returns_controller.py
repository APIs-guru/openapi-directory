from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_returns_average_post200_response import AssetsReturnsAveragePost200Response
from openapi_server.models.assets_returns_average_post_request import AssetsReturnsAveragePostRequest
from openapi_server.models.assets_returns_logarithmic_post200_response import AssetsReturnsLogarithmicPost200Response
from openapi_server.models.assets_returns_post200_response import AssetsReturnsPost200Response
from openapi_server.models.assets_returns_post_request import AssetsReturnsPostRequest
from openapi_server.models.assets_returns_turbulence_partitioned_post200_response import AssetsReturnsTurbulencePartitionedPost200Response
from openapi_server.models.assets_returns_turbulence_partitioned_post_request import AssetsReturnsTurbulencePartitionedPostRequest
from openapi_server import util


async def assets_returns_average_post(request: web.Request, body) -> web.Response:
    """Arithmetic Average Return

    Compute the arithmetic average of the return(s) of one or several asset(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsReturnsAveragePostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_returns_logarithmic_post(request: web.Request, body) -> web.Response:
    """Logarithmic Returns

    Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsReturnsPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_returns_post(request: web.Request, body) -> web.Response:
    """Arithmetic Returns

    Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsReturnsPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_returns_turbulence_partitioned_post(request: web.Request, body) -> web.Response:
    """Turbulence-partitioned Asset Returns

    Partition asset returns into several subsets based on their turbulence index.  References * [George Chow, Jacquier, E., Kritzman, M., &amp; Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsReturnsTurbulencePartitionedPostRequest.from_dict(body)
    return web.Response(status=200)
