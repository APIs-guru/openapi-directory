from typing import List, Dict
from aiohttp import web

from openapi_server.models.portfolio_simulation_rebalancing_drift_weight_post200_response import PortfolioSimulationRebalancingDriftWeightPost200Response
from openapi_server.models.portfolio_simulation_rebalancing_drift_weight_post_request import PortfolioSimulationRebalancingDriftWeightPostRequest
from openapi_server.models.portfolio_simulation_rebalancing_random_weight_post_request import PortfolioSimulationRebalancingRandomWeightPostRequest
from openapi_server import util


async def portfolio_simulation_rebalancing_drift_weight_post(request: web.Request, body) -> web.Response:
    """Drift-weight Portfolio Rebalancing

    Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract&#x3D;2746471) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioSimulationRebalancingDriftWeightPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_simulation_rebalancing_fixed_weight_post(request: web.Request, body) -> web.Response:
    """Fixed-weight Portfolio Rebalancing

    Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract&#x3D;2746471)         

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioSimulationRebalancingDriftWeightPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_simulation_rebalancing_random_weight_post(request: web.Request, body) -> web.Response:
    """Random-weight Portfolio Rebalancing

    Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.  References * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioSimulationRebalancingRandomWeightPostRequest.from_dict(body)
    return web.Response(status=200)
