from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_volatility_post200_response import AssetsVolatilityPost200Response
from openapi_server.models.assets_volatility_post_request import AssetsVolatilityPostRequest
from openapi_server import util


async def assets_volatility_post(request: web.Request, body) -> web.Response:
    """Volatility

    Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset variance(s)  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsVolatilityPostRequest.from_dict(body)
    return web.Response(status=200)
