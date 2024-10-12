from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_returns_simulation_bootstrap_post200_response import AssetsReturnsSimulationBootstrapPost200Response
from openapi_server.models.assets_returns_simulation_bootstrap_post_request import AssetsReturnsSimulationBootstrapPostRequest
from openapi_server import util


async def assets_returns_simulation_bootstrap_post(request: web.Request, body) -> web.Response:
    """Bootstrap

    Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.  References * [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full) * [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data) * [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsReturnsSimulationBootstrapPostRequest.from_dict(body)
    return web.Response(status=200)
