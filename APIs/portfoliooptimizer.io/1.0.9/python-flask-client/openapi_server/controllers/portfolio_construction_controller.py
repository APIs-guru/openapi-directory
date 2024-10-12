import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner  # noqa: E501
from openapi_server.models.portfolio_construction_investable_post200_response import PortfolioConstructionInvestablePost200Response  # noqa: E501
from openapi_server.models.portfolio_construction_investable_post_request import PortfolioConstructionInvestablePostRequest  # noqa: E501
from openapi_server.models.portfolio_construction_mimicking_post_request import PortfolioConstructionMimickingPostRequest  # noqa: E501
from openapi_server.models.portfolio_construction_random_post200_response import PortfolioConstructionRandomPost200Response  # noqa: E501
from openapi_server.models.portfolio_construction_random_post_request import PortfolioConstructionRandomPostRequest  # noqa: E501
from openapi_server import util


def portfolio_construction_investable_post(body):  # noqa: E501
    """Investable Portfolio

    Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account: * The desired assets weights * The desired assets groups weights * The desired maximum assets groups weights * The prices of the assets * The portfolio value * The requirement to purchase some assets by round lots or by odd lots * The possibility to purchase some assets by a fractional quantity of shares * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets  References * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2261131)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioConstructionInvestablePost200Response, Tuple[PortfolioConstructionInvestablePost200Response, int], Tuple[PortfolioConstructionInvestablePost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioConstructionInvestablePostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_construction_mimicking_post(body):  # noqa: E501
    """Mimicking Portfolio

    Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioConstructionMimickingPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_construction_random_post(body):  # noqa: E501
    """Random Portfolio

    Construct one or several random portfolio(s), optionally subject to:        * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  &gt; Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.  References * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1680224)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioConstructionRandomPost200Response, Tuple[PortfolioConstructionRandomPost200Response, int], Tuple[PortfolioConstructionRandomPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioConstructionRandomPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
