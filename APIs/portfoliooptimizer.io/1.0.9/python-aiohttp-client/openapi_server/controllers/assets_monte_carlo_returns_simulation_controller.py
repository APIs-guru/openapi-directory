from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post_request import AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_post200_response import AssetsReturnsSimulationMonteCarloCornishFisherPost200Response
from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_post_request import AssetsReturnsSimulationMonteCarloCornishFisherPostRequest
from openapi_server.models.assets_returns_simulation_monte_carlo_gaussian_post_request import AssetsReturnsSimulationMonteCarloGaussianPostRequest
from openapi_server import util


async def assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post(request: web.Request, body) -> web.Response:
    """Corrected Cornish-Fisher Distribution

    Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_returns_simulation_monte_carlo_cornish_fisher_post(request: web.Request, body) -> web.Response:
    """Cornish-Fisher Distribution

    Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_returns_simulation_monte_carlo_gaussian_post(request: web.Request, body) -> web.Response:
    """Gaussian Distribution

    Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.  References * [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsReturnsSimulationMonteCarloGaussianPostRequest.from_dict(body)
    return web.Response(status=200)
