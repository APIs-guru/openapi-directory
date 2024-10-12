import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_correlation_matrix_random_post_request import AssetsCorrelationMatrixRandomPostRequest  # noqa: E501
from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner  # noqa: E501
from openapi_server.models.portfolio_optimization_equal_risk_contributions_post_request import PortfolioOptimizationEqualRiskContributionsPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_equal_sharpe_ratio_contributions_post_request import PortfolioOptimizationEqualSharpeRatioContributionsPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_equal_volatility_weighted_post_request import PortfolioOptimizationEqualVolatilityWeightedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request import PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_hierarchical_risk_parity_post_request import PortfolioOptimizationHierarchicalRiskParityPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_inverse_variance_weighted_post_request import PortfolioOptimizationInverseVarianceWeightedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_market_capitalization_weighted_post_request import PortfolioOptimizationMarketCapitalizationWeightedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_decorrelation_post_request import PortfolioOptimizationMaximumDecorrelationPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_ulcer_performance_index_post_request import PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_correlation_post_request import PortfolioOptimizationMinimumCorrelationPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_ulcer_index_post_request import PortfolioOptimizationMinimumUlcerIndexPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_most_diversified_post_request import PortfolioOptimizationMostDiversifiedPostRequest  # noqa: E501
from openapi_server import util


def portfolio_optimization_equal_risk_contributions_post(body):  # noqa: E501
    """Equal Risk Contributions Portfolio

    Compute the asset weights of the equal risk contributions portfolio, optionally subject to:   * Minimum and maximum weights constraints    References  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications &amp; Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3331184)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationEqualRiskContributionsPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_equal_sharpe_ratio_contributions_post(body):  # noqa: E501
    """Equal Sharpe Ratio Contributions Portfolio

    Compute the asset weights of the equal Sharpe Ratio contributions portfolio.  References  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1839166\&quot;)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationEqualSharpeRatioContributionsPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_equal_volatility_weighted_post(body):  # noqa: E501
    """Equal Volatility Weighted Portfolio

    Compute the asset weights of the equal volatility-weighted portfolio.  References  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationEqualVolatilityWeightedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_equal_weighted_post(body):  # noqa: E501
    """Equal Weighted Portfolio

    Compute the asset weights of the equal-weighted portfolio.  References  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom&#x3D;fulltext)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsCorrelationMatrixRandomPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_hierarchical_risk_parity_clustering_based_post(body):  # noqa: E501
    """Hierarchical Clustering-Based Risk Parity Portfolio

    Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract&#x3D;3237540)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_hierarchical_risk_parity_post(body):  # noqa: E501
    """Hierarchical Risk Parity Portfolio

    Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationHierarchicalRiskParityPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_inverse_variance_weighted_post(body):  # noqa: E501
    """Inverse Variance Weighted Portfolio

    Compute the asset weights of the inverse variance-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationInverseVarianceWeightedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_inverse_volatility_weighted_post(body):  # noqa: E501
    """Inverse Volatility Weighted Portfolio

    Compute the asset weights of the inverse volatility-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationEqualVolatilityWeightedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_market_capitalization_weighted_post(body):  # noqa: E501
    """Market Capitalization Weighted Portfolio

    Compute the asset weights of the market capitalization-weighted portfolio.  References  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMarketCapitalizationWeightedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_maximum_decorrelation_post(body):  # noqa: E501
    """Maximum Decorrelation Portfolio

    Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMaximumDecorrelationPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_maximum_ulcer_performance_index_post(body):  # noqa: E501
    """Maximum Ulcer Performance Index Portfolio

    Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  Notes:   * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_minimum_correlation_post(body):  # noqa: E501
    """Minimum Correlation Portfolio

    Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).  References  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMinimumCorrelationPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_minimum_ulcer_index_post(body):  # noqa: E501
    """Minimum Ulcer Index Portfolio

    Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMinimumUlcerIndexPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_most_diversified_post(body):  # noqa: E501
    """Most Diversified Portfolio

    Compute the asset weights of the most diversified portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMostDiversifiedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
