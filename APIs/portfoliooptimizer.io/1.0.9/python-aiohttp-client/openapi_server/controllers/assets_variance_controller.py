from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_variance_post200_response import AssetsVariancePost200Response
from openapi_server.models.assets_variance_post_request import AssetsVariancePostRequest
from openapi_server import util


async def assets_variance_post(request: web.Request, body) -> web.Response:
    """Variance

    Compute the variance of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset volatility(ies)  References * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)         

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsVariancePostRequest.from_dict(body)
    return web.Response(status=200)
