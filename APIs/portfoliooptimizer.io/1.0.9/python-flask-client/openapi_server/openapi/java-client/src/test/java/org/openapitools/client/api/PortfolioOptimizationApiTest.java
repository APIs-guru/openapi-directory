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
import org.openapitools.client.model.AssetsCorrelationMatrixRandomPostRequest;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
import org.openapitools.client.model.PortfolioOptimizationEqualRiskContributionsPostRequest;
import org.openapitools.client.model.PortfolioOptimizationEqualSharpeRatioContributionsPostRequest;
import org.openapitools.client.model.PortfolioOptimizationEqualVolatilityWeightedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationHierarchicalRiskParityPostRequest;
import org.openapitools.client.model.PortfolioOptimizationInverseVarianceWeightedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMarketCapitalizationWeightedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumDecorrelationPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumCorrelationPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumUlcerIndexPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMostDiversifiedPostRequest;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PortfolioOptimizationApi
 */
@Disabled
public class PortfolioOptimizationApiTest {

    private final PortfolioOptimizationApi api = new PortfolioOptimizationApi();

    /**
     * Equal Risk Contributions Portfolio
     *
     * Compute the asset weights of the equal risk contributions portfolio, optionally subject to:   * Minimum and maximum weights constraints    References  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications &amp; Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3331184) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationEqualRiskContributionsPostTest() throws ApiException {
        PortfolioOptimizationEqualRiskContributionsPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationEqualRiskContributionsPost(body);
        // TODO: test validations
    }

    /**
     * Equal Sharpe Ratio Contributions Portfolio
     *
     * Compute the asset weights of the equal Sharpe Ratio contributions portfolio.  References  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1839166\&quot;) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationEqualSharpeRatioContributionsPostTest() throws ApiException {
        PortfolioOptimizationEqualSharpeRatioContributionsPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationEqualSharpeRatioContributionsPost(body);
        // TODO: test validations
    }

    /**
     * Equal Volatility Weighted Portfolio
     *
     * Compute the asset weights of the equal volatility-weighted portfolio.  References  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationEqualVolatilityWeightedPostTest() throws ApiException {
        PortfolioOptimizationEqualVolatilityWeightedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationEqualVolatilityWeightedPost(body);
        // TODO: test validations
    }

    /**
     * Equal Weighted Portfolio
     *
     * Compute the asset weights of the equal-weighted portfolio.  References  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom&#x3D;fulltext) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationEqualWeightedPostTest() throws ApiException {
        AssetsCorrelationMatrixRandomPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationEqualWeightedPost(body);
        // TODO: test validations
    }

    /**
     * Hierarchical Clustering-Based Risk Parity Portfolio
     *
     * Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract&#x3D;3237540)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationHierarchicalRiskParityClusteringBasedPostTest() throws ApiException {
        PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationHierarchicalRiskParityClusteringBasedPost(body);
        // TODO: test validations
    }

    /**
     * Hierarchical Risk Parity Portfolio
     *
     * Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationHierarchicalRiskParityPostTest() throws ApiException {
        PortfolioOptimizationHierarchicalRiskParityPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationHierarchicalRiskParityPost(body);
        // TODO: test validations
    }

    /**
     * Inverse Variance Weighted Portfolio
     *
     * Compute the asset weights of the inverse variance-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationInverseVarianceWeightedPostTest() throws ApiException {
        PortfolioOptimizationInverseVarianceWeightedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationInverseVarianceWeightedPost(body);
        // TODO: test validations
    }

    /**
     * Inverse Volatility Weighted Portfolio
     *
     * Compute the asset weights of the inverse volatility-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationInverseVolatilityWeightedPostTest() throws ApiException {
        PortfolioOptimizationEqualVolatilityWeightedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationInverseVolatilityWeightedPost(body);
        // TODO: test validations
    }

    /**
     * Market Capitalization Weighted Portfolio
     *
     * Compute the asset weights of the market capitalization-weighted portfolio.  References  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMarketCapitalizationWeightedPostTest() throws ApiException {
        PortfolioOptimizationMarketCapitalizationWeightedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMarketCapitalizationWeightedPost(body);
        // TODO: test validations
    }

    /**
     * Maximum Decorrelation Portfolio
     *
     * Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMaximumDecorrelationPostTest() throws ApiException {
        PortfolioOptimizationMaximumDecorrelationPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMaximumDecorrelationPost(body);
        // TODO: test validations
    }

    /**
     * Maximum Ulcer Performance Index Portfolio
     *
     * Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  Notes:   * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMaximumUlcerPerformanceIndexPostTest() throws ApiException {
        PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMaximumUlcerPerformanceIndexPost(body);
        // TODO: test validations
    }

    /**
     * Minimum Correlation Portfolio
     *
     * Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).  References  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMinimumCorrelationPostTest() throws ApiException {
        PortfolioOptimizationMinimumCorrelationPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMinimumCorrelationPost(body);
        // TODO: test validations
    }

    /**
     * Minimum Ulcer Index Portfolio
     *
     * Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMinimumUlcerIndexPostTest() throws ApiException {
        PortfolioOptimizationMinimumUlcerIndexPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMinimumUlcerIndexPost(body);
        // TODO: test validations
    }

    /**
     * Most Diversified Portfolio
     *
     * Compute the asset weights of the most diversified portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioOptimizationMostDiversifiedPostTest() throws ApiException {
        PortfolioOptimizationMostDiversifiedPostRequest body = null;
        PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner response = api.portfolioOptimizationMostDiversifiedPost(body);
        // TODO: test validations
    }

}
