import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post200_response import PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post_request import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_confidence_interval_post200_response import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_confidence_interval_post_request import PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_post200_response import PortfolioAnalysisSharpeRatioPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request import PortfolioAnalysisSharpeRatioPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post200_response import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_post200_response import PortfolioAnalysisSharpeRatioProbabilisticPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_probabilistic_post_request import PortfolioAnalysisSharpeRatioProbabilisticPostRequest  # noqa: E501
from openapi_server import util


def portfolio_analysis_sharpe_ratio_bias_adjusted_post(body):  # noqa: E501
    """Bias-Adjusted Sharpe Ratio

    Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response, Tuple[PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response, int], Tuple[PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_sharpe_ratio_confidence_interval_post(body):  # noqa: E501
    """Sharpe Ratio Confidence Interval

    Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response, Tuple[PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response, int], Tuple[PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_sharpe_ratio_post(body):  # noqa: E501
    """Sharpe Ratio

    Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPost200Response, Tuple[PortfolioAnalysisSharpeRatioPost200Response, int], Tuple[PortfolioAnalysisSharpeRatioPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisSharpeRatioPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post(body):  # noqa: E501
    """Minimum Track Record Length

    Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response, Tuple[PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response, int], Tuple[PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_sharpe_ratio_probabilistic_post(body):  # noqa: E501
    """Probabilistic Sharpe Ratio

    Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioProbabilisticPost200Response, Tuple[PortfolioAnalysisSharpeRatioProbabilisticPost200Response, int], Tuple[PortfolioAnalysisSharpeRatioProbabilisticPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisSharpeRatioProbabilisticPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
