from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_kurtosis_post200_response import AssetsKurtosisPost200Response
from openapi_server.models.assets_kurtosis_post_request import AssetsKurtosisPostRequest
from openapi_server import util


async def assets_kurtosis_post(request: web.Request, body) -> web.Response:
    """Kurtosis

    Compute the kurtosis of one or several asset(s), from the asset returns.  References * [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsKurtosisPostRequest.from_dict(body)
    return web.Response(status=200)
