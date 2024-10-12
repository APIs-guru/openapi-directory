from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_skewness_post200_response import AssetsSkewnessPost200Response
from openapi_server.models.assets_skewness_post_request import AssetsSkewnessPostRequest
from openapi_server import util


async def assets_skewness_post(request: web.Request, body) -> web.Response:
    """Skewness

    Compute the skewness of one or several asset(s), from the asset returns.  References * [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsSkewnessPostRequest.from_dict(body)
    return web.Response(status=200)
