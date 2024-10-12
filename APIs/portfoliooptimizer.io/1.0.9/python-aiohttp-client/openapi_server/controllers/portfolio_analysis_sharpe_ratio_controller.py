from typing import List, Dict
from aiohttp import web

from openapi_server.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post200_response import PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post_request import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest
from openapi_server.models.portfolio_analysis_sharpe_ratio_confidence_interval_post200_response import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_confidence_interval_post_request import PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest
from openapi_server.models.portfolio_analysis_sharpe_ratio_post200_response import PortfolioAnalysisSharpeRatioPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request import PortfolioAnalysisSharpeRatioPostRequest
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post200_response import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_post200_response import PortfolioAnalysisSharpeRatioProbabilisticPost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_post_request import PortfolioAnalysisSharpeRatioProbabilisticPostRequest
from openapi_server import util


async def portfolio_analysis_sharpe_ratio_bias_adjusted_post(request: web.Request, body) -> web.Response:
    """Bias-Adjusted Sharpe Ratio

    Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_sharpe_ratio_confidence_interval_post(request: web.Request, body) -> web.Response:
    """Sharpe Ratio Confidence Interval

    Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_sharpe_ratio_post(request: web.Request, body) -> web.Response:
    """Sharpe Ratio

    Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisSharpeRatioPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post(request: web.Request, body) -> web.Response:
    """Minimum Track Record Length

    Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_sharpe_ratio_probabilistic_post(request: web.Request, body) -> web.Response:
    """Probabilistic Sharpe Ratio

    Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisSharpeRatioProbabilisticPostRequest.from_dict(body)
    return web.Response(status=200)
