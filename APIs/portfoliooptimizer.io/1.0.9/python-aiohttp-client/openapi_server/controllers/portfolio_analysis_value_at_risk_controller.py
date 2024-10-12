from typing import List, Dict
from aiohttp import web

from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_gaussian_post_request import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_historical_post_request import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest
from openapi_server.models.portfolio_analysis_value_at_risk_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskCornishFisherPost200Response
from openapi_server import util


async def portfolio_analysis_value_at_risk_cornish_fisher_corrected_post(request: web.Request, body) -> web.Response:
    """Corrected Cornish-Fisher Value At Risk

    Compute the corrected Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.  References * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_value_at_risk_cornish_fisher_post(request: web.Request, body) -> web.Response:
    """Cornish-Fisher Value At Risk

    Compute the Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.  References * [Laurent Favre and José-Antonio Galeano, Mean-Modified Value-at-Risk Optimization with Hedge Funds, The Journal of Alternative Investments Fall 2002, 5 (2) 21-25](https://jai.pm-research.com/content/5/2/21) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_value_at_risk_gaussian_post(request: web.Request, body) -> web.Response:
    """Gaussian Value At Risk

    Compute the Gaussian value at risk of one or several portfolio(s) from portfolio values.  References * [Ballotta, Laura and Fusai, Gianluca, A Gentle Introduction to Value at Risk](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2942138) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_value_at_risk_historical_post(request: web.Request, body) -> web.Response:
    """Historical Value At Risk

    Compute the historical value at risk of one or several portfolio(s) from portfolio values.  References * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk) * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest.from_dict(body)
    return web.Response(status=200)
