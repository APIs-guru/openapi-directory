from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_prices_adjusted_post200_response import AssetsPricesAdjustedPost200Response
from openapi_server.models.assets_prices_adjusted_post_request import AssetsPricesAdjustedPostRequest
from openapi_server import util


async def assets_prices_adjusted_forward_post(request: web.Request, body) -> web.Response:
    """Forward-Adjusted Prices

    Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that: * The price on the first date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsPricesAdjustedPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_prices_adjusted_post(request: web.Request, body) -> web.Response:
    """Adjusted Prices

    Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that: * The price on the last date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsPricesAdjustedPostRequest.from_dict(body)
    return web.Response(status=200)
