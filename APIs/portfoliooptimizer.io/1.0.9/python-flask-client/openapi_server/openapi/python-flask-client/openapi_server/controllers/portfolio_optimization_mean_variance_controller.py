import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_return_diversified_post_request import PortfolioOptimizationMaximumReturnDiversifiedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_return_post_request import PortfolioOptimizationMaximumReturnPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_return_subset_resampling_based_post_request import PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_diversified_post_request import PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_post_request import PortfolioOptimizationMaximumSharpeRatioPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request import PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_mean_variance_efficient_diversified_post_request import PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_mean_variance_efficient_post_request import PortfolioOptimizationMeanVarianceEfficientPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request import PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_variance_diversified_post_request import PortfolioOptimizationMinimumVarianceDiversifiedPostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_variance_post_request import PortfolioOptimizationMinimumVariancePostRequest  # noqa: E501
from openapi_server.models.portfolio_optimization_minimum_variance_subset_resampling_based_post_request import PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest  # noqa: E501
from openapi_server import util


def portfolio_optimization_maximum_return_diversified_post(body):  # noqa: E501
    """Diversified Maximum Return Portfolio

    Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMaximumReturnDiversifiedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_maximum_return_post(body):  # noqa: E501
    """Maximum Return Portfolio

    Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMaximumReturnPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_maximum_return_subset_resampling_based_post(body):  # noqa: E501
    """Subset Resampling-Based Maximum Return Portfolio

    Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_maximum_sharpe_ratio_diversified_post(body):  # noqa: E501
    """Diversified Maximum Sharpe Ratio Portfolio

    Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_maximum_sharpe_ratio_post(body):  # noqa: E501
    """Maximum Sharpe Ratio Portfolio

    Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMaximumSharpeRatioPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post(body):  # noqa: E501
    """Subset Resampling-Based Maximum Sharpe Ratio Portfolio

    Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_mean_variance_efficient_diversified_post(body):  # noqa: E501
    """Diversified Mean-Variance Efficient Portfolio

    Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  &gt; A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_mean_variance_efficient_post(body):  # noqa: E501
    """Mean-Variance Efficient Portfolio

    Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  &gt; A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMeanVarianceEfficientPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_mean_variance_efficient_subset_resampling_based_post(body):  # noqa: E501
    """Subset Resampling-Based Mean-Variance Efficient Portfolio

    Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_minimum_variance_diversified_post(body):  # noqa: E501
    """Diversified Minimum Variance Portfolio

    Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMinimumVarianceDiversifiedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_minimum_variance_post(body):  # noqa: E501
    """Minimum Variance Portfolio

    Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMinimumVariancePostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_optimization_minimum_variance_subset_resampling_based_post(body):  # noqa: E501
    """Subset Resampling-Based Minimum Variance Portfolio

    Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int], Tuple[PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
