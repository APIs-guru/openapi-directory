/*
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
import org.openapitools.client.model.PortfolioOptimizationMaximumReturnDiversifiedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumReturnPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumSharpeRatioPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMeanVarianceEfficientPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumVarianceDiversifiedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumVariancePostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PortfolioOptimizationMeanVarianceApi
 */
@Disabled
public class PortfolioOptimizationMeanVarianceApiTest {

    private final PortfolioOptimizationMeanVarianceApi api = new PortfolioOptimizationMeanVarianceApi();

    /**
     * Diversified Maximum Return Portfolio
     *
     * Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMaximumReturnDiversifiedPostTest() throws ApiException {
        PortfolioOptimizationMaximumReturnDiversifiedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMaximumReturnDiversifiedPost(body);
        // TODO: test validations
    }

    /**
     * Maximum Return Portfolio
     *
     * Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMaximumReturnPostTest() throws ApiException {
        PortfolioOptimizationMaximumReturnPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMaximumReturnPost(body);
        // TODO: test validations
    }

    /**
     * Subset Resampling-Based Maximum Return Portfolio
     *
     * Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMaximumReturnSubsetResamplingBasedPostTest() throws ApiException {
        PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(body);
        // TODO: test validations
    }

    /**
     * Diversified Maximum Sharpe Ratio Portfolio
     *
     * Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMaximumSharpeRatioDiversifiedPostTest() throws ApiException {
        PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMaximumSharpeRatioDiversifiedPost(body);
        // TODO: test validations
    }

    /**
     * Maximum Sharpe Ratio Portfolio
     *
     * Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMaximumSharpeRatioPostTest() throws ApiException {
        PortfolioOptimizationMaximumSharpeRatioPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMaximumSharpeRatioPost(body);
        // TODO: test validations
    }

    /**
     * Subset Resampling-Based Maximum Sharpe Ratio Portfolio
     *
     * Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostTest() throws ApiException {
        PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(body);
        // TODO: test validations
    }

    /**
     * Diversified Mean-Variance Efficient Portfolio
     *
     * Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  &gt; A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMeanVarianceEfficientDiversifiedPostTest() throws ApiException {
        PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMeanVarianceEfficientDiversifiedPost(body);
        // TODO: test validations
    }

    /**
     * Mean-Variance Efficient Portfolio
     *
     * Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  &gt; A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMeanVarianceEfficientPostTest() throws ApiException {
        PortfolioOptimizationMeanVarianceEfficientPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMeanVarianceEfficientPost(body);
        // TODO: test validations
    }

    /**
     * Subset Resampling-Based Mean-Variance Efficient Portfolio
     *
     * Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostTest() throws ApiException {
        PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(body);
        // TODO: test validations
    }

    /**
     * Diversified Minimum Variance Portfolio
     *
     * Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMinimumVarianceDiversifiedPostTest() throws ApiException {
        PortfolioOptimizationMinimumVarianceDiversifiedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMinimumVarianceDiversifiedPost(body);
        // TODO: test validations
    }

    /**
     * Minimum Variance Portfolio
     *
     * Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMinimumVariancePostTest() throws ApiException {
        PortfolioOptimizationMinimumVariancePostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMinimumVariancePost(body);
        // TODO: test validations
    }

    /**
     * Subset Resampling-Based Minimum Variance Portfolio
     *
     * Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostTest() throws ApiException {
        PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(body);
        // TODO: test validations
    }

}
