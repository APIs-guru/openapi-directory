import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_gaussian_post_request import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_value_at_risk_conditional_historical_post_request import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest  # noqa: E501
from openapi_server import util


def portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post(body):  # noqa: E501
    """Corrected Cornish-Fisher Conditional Value At Risk

    Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, Tuple[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, int], Tuple[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_value_at_risk_conditional_cornish_fisher_post(body):  # noqa: E501
    """Cornish-Fisher Conditional Value At Risk

    Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1024151). * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, Tuple[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, int], Tuple[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_value_at_risk_conditional_gaussian_post(body):  # noqa: E501
    """Gaussian Conditional Value At Risk

    Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1024151).  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, Tuple[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, int], Tuple[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_value_at_risk_conditional_historical_post(body):  # noqa: E501
    """Historical Conditional Value At Risk

    Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk) * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, Tuple[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, int], Tuple[PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
