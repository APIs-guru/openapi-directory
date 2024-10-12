import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_prices_adjusted_post200_response import AssetsPricesAdjustedPost200Response  # noqa: E501
from openapi_server.models.assets_prices_adjusted_post_request import AssetsPricesAdjustedPostRequest  # noqa: E501
from openapi_server import util


def assets_prices_adjusted_forward_post(body):  # noqa: E501
    """Forward-Adjusted Prices

    Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that: * The price on the first date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsPricesAdjustedPost200Response, Tuple[AssetsPricesAdjustedPost200Response, int], Tuple[AssetsPricesAdjustedPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsPricesAdjustedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_prices_adjusted_post(body):  # noqa: E501
    """Adjusted Prices

    Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that: * The price on the last date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsPricesAdjustedPost200Response, Tuple[AssetsPricesAdjustedPost200Response, int], Tuple[AssetsPricesAdjustedPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsPricesAdjustedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
