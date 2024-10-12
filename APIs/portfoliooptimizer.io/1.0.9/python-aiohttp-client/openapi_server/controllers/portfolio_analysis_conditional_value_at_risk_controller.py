from typing import List, Dict
from aiohttp import web

from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_gaussian_post_request import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_historical_post_request import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest
from openapi_server import util


async def portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post(request: web.Request, body) -> web.Response:
    """Corrected Cornish-Fisher Conditional Value At Risk

    Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_value_at_risk_conditional_cornish_fisher_post(request: web.Request, body) -> web.Response:
    """Cornish-Fisher Conditional Value At Risk

    Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1024151). * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_value_at_risk_conditional_gaussian_post(request: web.Request, body) -> web.Response:
    """Gaussian Conditional Value At Risk

    Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1024151). 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_value_at_risk_conditional_historical_post(request: web.Request, body) -> web.Response:
    """Historical Conditional Value At Risk

    Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk) * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest.from_dict(body)
    return web.Response(status=200)
