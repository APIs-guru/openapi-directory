from typing import List, Dict
from aiohttp import web

from openapi_server.models.portfolio_analysis_alpha_post200_response import PortfolioAnalysisAlphaPost200Response
from openapi_server.models.portfolio_analysis_alpha_post_request import PortfolioAnalysisAlphaPostRequest
from openapi_server.models.portfolio_analysis_beta_post200_response import PortfolioAnalysisBetaPost200Response
from openapi_server.models.portfolio_analysis_contributions_return_post200_response import PortfolioAnalysisContributionsReturnPost200Response
from openapi_server.models.portfolio_analysis_contributions_return_post_request import PortfolioAnalysisContributionsReturnPostRequest
from openapi_server.models.portfolio_analysis_contributions_risk_post200_response import PortfolioAnalysisContributionsRiskPost200Response
from openapi_server.models.portfolio_analysis_contributions_risk_post_request import PortfolioAnalysisContributionsRiskPostRequest
from openapi_server.models.portfolio_analysis_correlation_spectrum_post200_response import PortfolioAnalysisCorrelationSpectrumPost200Response
from openapi_server.models.portfolio_analysis_correlation_spectrum_post_request import PortfolioAnalysisCorrelationSpectrumPostRequest
from openapi_server.models.portfolio_analysis_diversification_ratio_post200_response import PortfolioAnalysisDiversificationRatioPost200Response
from openapi_server.models.portfolio_analysis_drawdowns_post200_response import PortfolioAnalysisDrawdownsPost200Response
from openapi_server.models.portfolio_analysis_drawdowns_post_request import PortfolioAnalysisDrawdownsPostRequest
from openapi_server.models.portfolio_analysis_effective_number_of_bets_post200_response import PortfolioAnalysisEffectiveNumberOfBetsPost200Response
from openapi_server.models.portfolio_analysis_effective_number_of_bets_post_request import PortfolioAnalysisEffectiveNumberOfBetsPostRequest
from openapi_server.models.portfolio_analysis_factors_exposures_post200_response import PortfolioAnalysisFactorsExposuresPost200Response
from openapi_server.models.portfolio_analysis_factors_exposures_post_request import PortfolioAnalysisFactorsExposuresPostRequest
from openapi_server.models.portfolio_analysis_mean_variance_efficient_frontier_post200_response import PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response
from openapi_server.models.portfolio_analysis_mean_variance_efficient_frontier_post_request import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest
from openapi_server.models.portfolio_analysis_mean_variance_minimum_variance_frontier_post_request import PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest
from openapi_server.models.portfolio_analysis_return_post200_response import PortfolioAnalysisReturnPost200Response
from openapi_server.models.portfolio_analysis_return_post_request import PortfolioAnalysisReturnPostRequest
from openapi_server.models.portfolio_analysis_returns_average_post200_response import PortfolioAnalysisReturnsAveragePost200Response
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of1 import PortfolioAnalysisSharpeRatioPostRequestOneOf1
from openapi_server.models.portfolio_analysis_tracking_error_post200_response import PortfolioAnalysisTrackingErrorPost200Response
from openapi_server.models.portfolio_analysis_tracking_error_post_request import PortfolioAnalysisTrackingErrorPostRequest
from openapi_server.models.portfolio_analysis_ulcer_index_post200_response import PortfolioAnalysisUlcerIndexPost200Response
from openapi_server.models.portfolio_analysis_ulcer_performance_index_post200_response import PortfolioAnalysisUlcerPerformanceIndexPost200Response
from openapi_server.models.portfolio_analysis_volatility_post200_response import PortfolioAnalysisVolatilityPost200Response
from openapi_server.models.portfolio_analysis_volatility_post_request import PortfolioAnalysisVolatilityPostRequest
from openapi_server import util


async def portfolio_analysis_alpha_post(request: web.Request, body) -> web.Response:
    """Alpha

    Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisAlphaPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_beta_post(request: web.Request, body) -> web.Response:
    """Beta

    Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisAlphaPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_contributions_return_post(request: web.Request, body) -> web.Response:
    """Return Contributions

    Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisContributionsReturnPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_contributions_risk_post(request: web.Request, body) -> web.Response:
    """Risk Contributions

    Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisContributionsRiskPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_correlation_spectrum_post(request: web.Request, body) -> web.Response:
    """Correlation Spectrum

    Compute the correlation spectrum of one or several portfolio(s).  References * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisCorrelationSpectrumPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_diversification_ratio_post(request: web.Request, body) -> web.Response:
    """Diversification Ratio

    Compute the diversification ratio of one or several portfolio(s).  References * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisCorrelationSpectrumPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_drawdowns_post(request: web.Request, body) -> web.Response:
    """Drawdowns

    Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).  References * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))         

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisDrawdownsPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_effective_number_of_bets_post(request: web.Request, body) -> web.Response:
    """Effective Number of Bets

    Compute the effective number of bets of one or several portfolio(s).  References * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2276632) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisEffectiveNumberOfBetsPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_factors_exposures_post(request: web.Request, body) -> web.Response:
    """Factor Exposures

    Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.  References * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)  

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisFactorsExposuresPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_mean_variance_efficient_frontier_post(request: web.Request, body) -> web.Response:
    """Mean-Variance Efficient Frontier

    Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_mean_variance_minimum_variance_frontier_post(request: web.Request, body) -> web.Response:
    """Mean-Variance Minimum Variance Frontier

    Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  &gt; This endpoint is similar to the endpoint [&#x60;/portfolio/analysis/mean-variance/efficient-frontier&#x60;](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \&quot;top\&quot; portion of the mean-variance minimum variance frontier.  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_return_post(request: web.Request, body) -> web.Response:
    """Arithmetic Return

    Compute the arithmetic return of one or several portfolio(s) from either:   * Portfolio assets arithmetic returns * Portfolio values  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisReturnPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_returns_average_post(request: web.Request, body) -> web.Response:
    """Arithmetic Average Return

    Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisDrawdownsPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_tracking_error_post(request: web.Request, body) -> web.Response:
    """Tracking Error

    Compute the tracking error between a benchmark and one or several portfolio(s).  References * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)  * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisTrackingErrorPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_ulcer_index_post(request: web.Request, body) -> web.Response:
    """Ulcer Index

    Compute the Ulcer Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisSharpeRatioPostRequestOneOf1.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_ulcer_performance_index_post(request: web.Request, body) -> web.Response:
    """Ulcer Performance Index

    Compute the Ulcer Performance Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisSharpeRatioPostRequestOneOf1.from_dict(body)
    return web.Response(status=200)


async def portfolio_analysis_volatility_post(request: web.Request, body) -> web.Response:
    """Volatility

    Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:   * Portfolio assets covariance matrix * Portfolio values  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance) * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioAnalysisVolatilityPostRequest.from_dict(body)
    return web.Response(status=200)
