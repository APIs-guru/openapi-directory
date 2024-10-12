from typing import List, Dict
from aiohttp import web

from openapi_server.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_server.models.portfolio_optimization_maximum_return_diversified_post_request import PortfolioOptimizationMaximumReturnDiversifiedPostRequest
from openapi_server.models.portfolio_optimization_maximum_return_post_request import PortfolioOptimizationMaximumReturnPostRequest
from openapi_server.models.portfolio_optimization_maximum_return_subset_resampling_based_post_request import PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_diversified_post_request import PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_post_request import PortfolioOptimizationMaximumSharpeRatioPostRequest
from openapi_server.models.portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request import PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest
from openapi_server.models.portfolio_optimization_mean_variance_efficient_diversified_post_request import PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest
from openapi_server.models.portfolio_optimization_mean_variance_efficient_post_request import PortfolioOptimizationMeanVarianceEfficientPostRequest
from openapi_server.models.portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request import PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest
from openapi_server.models.portfolio_optimization_minimum_variance_diversified_post_request import PortfolioOptimizationMinimumVarianceDiversifiedPostRequest
from openapi_server.models.portfolio_optimization_minimum_variance_post_request import PortfolioOptimizationMinimumVariancePostRequest
from openapi_server.models.portfolio_optimization_minimum_variance_subset_resampling_based_post_request import PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest
from openapi_server import util


async def portfolio_optimization_maximum_return_diversified_post(request: web.Request, body) -> web.Response:
    """Diversified Maximum Return Portfolio

    Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMaximumReturnDiversifiedPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_maximum_return_post(request: web.Request, body) -> web.Response:
    """Maximum Return Portfolio

    Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMaximumReturnPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_maximum_return_subset_resampling_based_post(request: web.Request, body) -> web.Response:
    """Subset Resampling-Based Maximum Return Portfolio

    Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_maximum_sharpe_ratio_diversified_post(request: web.Request, body) -> web.Response:
    """Diversified Maximum Sharpe Ratio Portfolio

    Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_maximum_sharpe_ratio_post(request: web.Request, body) -> web.Response:
    """Maximum Sharpe Ratio Portfolio

    Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMaximumSharpeRatioPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post(request: web.Request, body) -> web.Response:
    """Subset Resampling-Based Maximum Sharpe Ratio Portfolio

    Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_mean_variance_efficient_diversified_post(request: web.Request, body) -> web.Response:
    """Diversified Mean-Variance Efficient Portfolio

    Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  &gt; A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_mean_variance_efficient_post(request: web.Request, body) -> web.Response:
    """Mean-Variance Efficient Portfolio

    Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  &gt; A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMeanVarianceEfficientPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_mean_variance_efficient_subset_resampling_based_post(request: web.Request, body) -> web.Response:
    """Subset Resampling-Based Mean-Variance Efficient Portfolio

    Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_minimum_variance_diversified_post(request: web.Request, body) -> web.Response:
    """Diversified Minimum Variance Portfolio

    Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMinimumVarianceDiversifiedPostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_minimum_variance_post(request: web.Request, body) -> web.Response:
    """Minimum Variance Portfolio

    Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMinimumVariancePostRequest.from_dict(body)
    return web.Response(status=200)


async def portfolio_optimization_minimum_variance_subset_resampling_based_post(request: web.Request, body) -> web.Response:
    """Subset Resampling-Based Minimum Variance Portfolio

    Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

    :param body: 
    :type body: dict | bytes

    """
    body = PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest.from_dict(body)
    return web.Response(status=200)
