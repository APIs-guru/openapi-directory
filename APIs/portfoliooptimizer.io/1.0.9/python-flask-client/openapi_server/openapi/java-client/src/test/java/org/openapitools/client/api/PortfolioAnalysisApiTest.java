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
import org.openapitools.client.model.PortfolioAnalysisAlphaPost200Response;
import org.openapitools.client.model.PortfolioAnalysisAlphaPostRequest;
import org.openapitools.client.model.PortfolioAnalysisBetaPost200Response;
import org.openapitools.client.model.PortfolioAnalysisContributionsReturnPost200Response;
import org.openapitools.client.model.PortfolioAnalysisContributionsReturnPostRequest;
import org.openapitools.client.model.PortfolioAnalysisContributionsRiskPost200Response;
import org.openapitools.client.model.PortfolioAnalysisContributionsRiskPostRequest;
import org.openapitools.client.model.PortfolioAnalysisCorrelationSpectrumPost200Response;
import org.openapitools.client.model.PortfolioAnalysisCorrelationSpectrumPostRequest;
import org.openapitools.client.model.PortfolioAnalysisDiversificationRatioPost200Response;
import org.openapitools.client.model.PortfolioAnalysisDrawdownsPost200Response;
import org.openapitools.client.model.PortfolioAnalysisDrawdownsPostRequest;
import org.openapitools.client.model.PortfolioAnalysisEffectiveNumberOfBetsPost200Response;
import org.openapitools.client.model.PortfolioAnalysisEffectiveNumberOfBetsPostRequest;
import org.openapitools.client.model.PortfolioAnalysisFactorsExposuresPost200Response;
import org.openapitools.client.model.PortfolioAnalysisFactorsExposuresPostRequest;
import org.openapitools.client.model.PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response;
import org.openapitools.client.model.PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest;
import org.openapitools.client.model.PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest;
import org.openapitools.client.model.PortfolioAnalysisReturnPost200Response;
import org.openapitools.client.model.PortfolioAnalysisReturnPostRequest;
import org.openapitools.client.model.PortfolioAnalysisReturnsAveragePost200Response;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioPostRequestOneOf1;
import org.openapitools.client.model.PortfolioAnalysisTrackingErrorPost200Response;
import org.openapitools.client.model.PortfolioAnalysisTrackingErrorPostRequest;
import org.openapitools.client.model.PortfolioAnalysisUlcerIndexPost200Response;
import org.openapitools.client.model.PortfolioAnalysisUlcerPerformanceIndexPost200Response;
import org.openapitools.client.model.PortfolioAnalysisVolatilityPost200Response;
import org.openapitools.client.model.PortfolioAnalysisVolatilityPostRequest;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PortfolioAnalysisApi
 */
@Disabled
public class PortfolioAnalysisApiTest {

    private final PortfolioAnalysisApi api = new PortfolioAnalysisApi();

    /**
     * Alpha
     *
     * Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisAlphaPostTest() throws ApiException {
        PortfolioAnalysisAlphaPostRequest body = null;
        PortfolioAnalysisAlphaPost200Response response = api.portfolioAnalysisAlphaPost(body);
        // TODO: test validations
    }

    /**
     * Beta
     *
     * Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisBetaPostTest() throws ApiException {
        PortfolioAnalysisAlphaPostRequest body = null;
        PortfolioAnalysisBetaPost200Response response = api.portfolioAnalysisBetaPost(body);
        // TODO: test validations
    }

    /**
     * Return Contributions
     *
     * Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisContributionsReturnPostTest() throws ApiException {
        PortfolioAnalysisContributionsReturnPostRequest body = null;
        PortfolioAnalysisContributionsReturnPost200Response response = api.portfolioAnalysisContributionsReturnPost(body);
        // TODO: test validations
    }

    /**
     * Risk Contributions
     *
     * Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisContributionsRiskPostTest() throws ApiException {
        PortfolioAnalysisContributionsRiskPostRequest body = null;
        PortfolioAnalysisContributionsRiskPost200Response response = api.portfolioAnalysisContributionsRiskPost(body);
        // TODO: test validations
    }

    /**
     * Correlation Spectrum
     *
     * Compute the correlation spectrum of one or several portfolio(s).  References * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisCorrelationSpectrumPostTest() throws ApiException {
        PortfolioAnalysisCorrelationSpectrumPostRequest body = null;
        PortfolioAnalysisCorrelationSpectrumPost200Response response = api.portfolioAnalysisCorrelationSpectrumPost(body);
        // TODO: test validations
    }

    /**
     * Diversification Ratio
     *
     * Compute the diversification ratio of one or several portfolio(s).  References * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisDiversificationRatioPostTest() throws ApiException {
        PortfolioAnalysisCorrelationSpectrumPostRequest body = null;
        PortfolioAnalysisDiversificationRatioPost200Response response = api.portfolioAnalysisDiversificationRatioPost(body);
        // TODO: test validations
    }

    /**
     * Drawdowns
     *
     * Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).  References * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))         
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisDrawdownsPostTest() throws ApiException {
        PortfolioAnalysisDrawdownsPostRequest body = null;
        PortfolioAnalysisDrawdownsPost200Response response = api.portfolioAnalysisDrawdownsPost(body);
        // TODO: test validations
    }

    /**
     * Effective Number of Bets
     *
     * Compute the effective number of bets of one or several portfolio(s).  References * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2276632) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisEffectiveNumberOfBetsPostTest() throws ApiException {
        PortfolioAnalysisEffectiveNumberOfBetsPostRequest body = null;
        PortfolioAnalysisEffectiveNumberOfBetsPost200Response response = api.portfolioAnalysisEffectiveNumberOfBetsPost(body);
        // TODO: test validations
    }

    /**
     * Factor Exposures
     *
     * Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.  References * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)  
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisFactorsExposuresPostTest() throws ApiException {
        PortfolioAnalysisFactorsExposuresPostRequest body = null;
        PortfolioAnalysisFactorsExposuresPost200Response response = api.portfolioAnalysisFactorsExposuresPost(body);
        // TODO: test validations
    }

    /**
     * Mean-Variance Efficient Frontier
     *
     * Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisMeanVarianceEfficientFrontierPostTest() throws ApiException {
        PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest body = null;
        PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response response = api.portfolioAnalysisMeanVarianceEfficientFrontierPost(body);
        // TODO: test validations
    }

    /**
     * Mean-Variance Minimum Variance Frontier
     *
     * Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  &gt; This endpoint is similar to the endpoint [&#x60;/portfolio/analysis/mean-variance/efficient-frontier&#x60;](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \&quot;top\&quot; portion of the mean-variance minimum variance frontier.  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostTest() throws ApiException {
        PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest body = null;
        PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response response = api.portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost(body);
        // TODO: test validations
    }

    /**
     * Arithmetic Return
     *
     * Compute the arithmetic return of one or several portfolio(s) from either:   * Portfolio assets arithmetic returns * Portfolio values  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisReturnPostTest() throws ApiException {
        PortfolioAnalysisReturnPostRequest body = null;
        PortfolioAnalysisReturnPost200Response response = api.portfolioAnalysisReturnPost(body);
        // TODO: test validations
    }

    /**
     * Arithmetic Average Return
     *
     * Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisReturnsAveragePostTest() throws ApiException {
        PortfolioAnalysisDrawdownsPostRequest body = null;
        PortfolioAnalysisReturnsAveragePost200Response response = api.portfolioAnalysisReturnsAveragePost(body);
        // TODO: test validations
    }

    /**
     * Tracking Error
     *
     * Compute the tracking error between a benchmark and one or several portfolio(s).  References * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)  * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisTrackingErrorPostTest() throws ApiException {
        PortfolioAnalysisTrackingErrorPostRequest body = null;
        PortfolioAnalysisTrackingErrorPost200Response response = api.portfolioAnalysisTrackingErrorPost(body);
        // TODO: test validations
    }

    /**
     * Ulcer Index
     *
     * Compute the Ulcer Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisUlcerIndexPostTest() throws ApiException {
        PortfolioAnalysisSharpeRatioPostRequestOneOf1 body = null;
        PortfolioAnalysisUlcerIndexPost200Response response = api.portfolioAnalysisUlcerIndexPost(body);
        // TODO: test validations
    }

    /**
     * Ulcer Performance Index
     *
     * Compute the Ulcer Performance Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisUlcerPerformanceIndexPostTest() throws ApiException {
        PortfolioAnalysisSharpeRatioPostRequestOneOf1 body = null;
        PortfolioAnalysisUlcerPerformanceIndexPost200Response response = api.portfolioAnalysisUlcerPerformanceIndexPost(body);
        // TODO: test validations
    }

    /**
     * Volatility
     *
     * Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:   * Portfolio assets covariance matrix * Portfolio values  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance) * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void portfolioAnalysisVolatilityPostTest() throws ApiException {
        PortfolioAnalysisVolatilityPostRequest body = null;
        PortfolioAnalysisVolatilityPost200Response response = api.portfolioAnalysisVolatilityPost(body);
        // TODO: test validations
    }

}
