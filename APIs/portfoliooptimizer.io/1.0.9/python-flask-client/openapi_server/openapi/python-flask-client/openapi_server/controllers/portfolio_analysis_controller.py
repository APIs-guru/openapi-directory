import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.portfolio_analysis_alpha_post200_response import PortfolioAnalysisAlphaPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_alpha_post_request import PortfolioAnalysisAlphaPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_beta_post200_response import PortfolioAnalysisBetaPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_contributions_return_post200_response import PortfolioAnalysisContributionsReturnPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_contributions_return_post_request import PortfolioAnalysisContributionsReturnPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_contributions_risk_post200_response import PortfolioAnalysisContributionsRiskPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_contributions_risk_post_request import PortfolioAnalysisContributionsRiskPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_correlation_spectrum_post200_response import PortfolioAnalysisCorrelationSpectrumPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_correlation_spectrum_post_request import PortfolioAnalysisCorrelationSpectrumPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_diversification_ratio_post200_response import PortfolioAnalysisDiversificationRatioPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_drawdowns_post200_response import PortfolioAnalysisDrawdownsPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_drawdowns_post_request import PortfolioAnalysisDrawdownsPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_effective_number_of_bets_post200_response import PortfolioAnalysisEffectiveNumberOfBetsPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_effective_number_of_bets_post_request import PortfolioAnalysisEffectiveNumberOfBetsPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_factors_exposures_post200_response import PortfolioAnalysisFactorsExposuresPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_factors_exposures_post_request import PortfolioAnalysisFactorsExposuresPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_mean_variance_efficient_frontier_post200_response import PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_mean_variance_efficient_frontier_post_request import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_mean_variance_minimum_variance_frontier_post_request import PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_return_post200_response import PortfolioAnalysisReturnPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_return_post_request import PortfolioAnalysisReturnPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_returns_average_post200_response import PortfolioAnalysisReturnsAveragePost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of1 import PortfolioAnalysisSharpeRatioPostRequestOneOf1  # noqa: E501
from openapi_server.models.portfolio_analysis_tracking_error_post200_response import PortfolioAnalysisTrackingErrorPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_tracking_error_post_request import PortfolioAnalysisTrackingErrorPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_ulcer_index_post200_response import PortfolioAnalysisUlcerIndexPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_ulcer_performance_index_post200_response import PortfolioAnalysisUlcerPerformanceIndexPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_volatility_post200_response import PortfolioAnalysisVolatilityPost200Response  # noqa: E501
from openapi_server.models.portfolio_analysis_volatility_post_request import PortfolioAnalysisVolatilityPostRequest  # noqa: E501
from openapi_server import util


def portfolio_analysis_alpha_post(body):  # noqa: E501
    """Alpha

    Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution    # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisAlphaPost200Response, Tuple[PortfolioAnalysisAlphaPost200Response, int], Tuple[PortfolioAnalysisAlphaPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisAlphaPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_beta_post(body):  # noqa: E501
    """Beta

    Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution    # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisBetaPost200Response, Tuple[PortfolioAnalysisBetaPost200Response, int], Tuple[PortfolioAnalysisBetaPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisAlphaPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_contributions_return_post(body):  # noqa: E501
    """Return Contributions

    Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisContributionsReturnPost200Response, Tuple[PortfolioAnalysisContributionsReturnPost200Response, int], Tuple[PortfolioAnalysisContributionsReturnPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisContributionsReturnPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_contributions_risk_post(body):  # noqa: E501
    """Risk Contributions

    Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisContributionsRiskPost200Response, Tuple[PortfolioAnalysisContributionsRiskPost200Response, int], Tuple[PortfolioAnalysisContributionsRiskPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisContributionsRiskPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_correlation_spectrum_post(body):  # noqa: E501
    """Correlation Spectrum

    Compute the correlation spectrum of one or several portfolio(s).  References * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisCorrelationSpectrumPost200Response, Tuple[PortfolioAnalysisCorrelationSpectrumPost200Response, int], Tuple[PortfolioAnalysisCorrelationSpectrumPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisCorrelationSpectrumPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_diversification_ratio_post(body):  # noqa: E501
    """Diversification Ratio

    Compute the diversification ratio of one or several portfolio(s).  References * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisDiversificationRatioPost200Response, Tuple[PortfolioAnalysisDiversificationRatioPost200Response, int], Tuple[PortfolioAnalysisDiversificationRatioPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisCorrelationSpectrumPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_drawdowns_post(body):  # noqa: E501
    """Drawdowns

    Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).  References * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))          # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisDrawdownsPost200Response, Tuple[PortfolioAnalysisDrawdownsPost200Response, int], Tuple[PortfolioAnalysisDrawdownsPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisDrawdownsPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_effective_number_of_bets_post(body):  # noqa: E501
    """Effective Number of Bets

    Compute the effective number of bets of one or several portfolio(s).  References * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2276632)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisEffectiveNumberOfBetsPost200Response, Tuple[PortfolioAnalysisEffectiveNumberOfBetsPost200Response, int], Tuple[PortfolioAnalysisEffectiveNumberOfBetsPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisEffectiveNumberOfBetsPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_factors_exposures_post(body):  # noqa: E501
    """Factor Exposures

    Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.  References * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)   # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisFactorsExposuresPost200Response, Tuple[PortfolioAnalysisFactorsExposuresPost200Response, int], Tuple[PortfolioAnalysisFactorsExposuresPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisFactorsExposuresPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_mean_variance_efficient_frontier_post(body):  # noqa: E501
    """Mean-Variance Efficient Frontier

    Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response, Tuple[PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response, int], Tuple[PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_mean_variance_minimum_variance_frontier_post(body):  # noqa: E501
    """Mean-Variance Minimum Variance Frontier

    Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  &gt; This endpoint is similar to the endpoint [&#x60;/portfolio/analysis/mean-variance/efficient-frontier&#x60;](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \&quot;top\&quot; portion of the mean-variance minimum variance frontier.  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response, Tuple[PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response, int], Tuple[PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_return_post(body):  # noqa: E501
    """Arithmetic Return

    Compute the arithmetic return of one or several portfolio(s) from either:   * Portfolio assets arithmetic returns * Portfolio values  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisReturnPost200Response, Tuple[PortfolioAnalysisReturnPost200Response, int], Tuple[PortfolioAnalysisReturnPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisReturnPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_returns_average_post(body):  # noqa: E501
    """Arithmetic Average Return

    Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisReturnsAveragePost200Response, Tuple[PortfolioAnalysisReturnsAveragePost200Response, int], Tuple[PortfolioAnalysisReturnsAveragePost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisDrawdownsPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_tracking_error_post(body):  # noqa: E501
    """Tracking Error

    Compute the tracking error between a benchmark and one or several portfolio(s).  References * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)  * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisTrackingErrorPost200Response, Tuple[PortfolioAnalysisTrackingErrorPost200Response, int], Tuple[PortfolioAnalysisTrackingErrorPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisTrackingErrorPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_ulcer_index_post(body):  # noqa: E501
    """Ulcer Index

    Compute the Ulcer Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisUlcerIndexPost200Response, Tuple[PortfolioAnalysisUlcerIndexPost200Response, int], Tuple[PortfolioAnalysisUlcerIndexPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisSharpeRatioPostRequestOneOf1.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_ulcer_performance_index_post(body):  # noqa: E501
    """Ulcer Performance Index

    Compute the Ulcer Performance Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisUlcerPerformanceIndexPost200Response, Tuple[PortfolioAnalysisUlcerPerformanceIndexPost200Response, int], Tuple[PortfolioAnalysisUlcerPerformanceIndexPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisSharpeRatioPostRequestOneOf1.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_analysis_volatility_post(body):  # noqa: E501
    """Volatility

    Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:   * Portfolio assets covariance matrix * Portfolio values  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance) * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisVolatilityPost200Response, Tuple[PortfolioAnalysisVolatilityPost200Response, int], Tuple[PortfolioAnalysisVolatilityPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioAnalysisVolatilityPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
