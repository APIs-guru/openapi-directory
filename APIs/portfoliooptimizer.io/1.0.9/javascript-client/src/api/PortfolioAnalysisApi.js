/**
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PortfolioAnalysisAlphaPost200Response from '../model/PortfolioAnalysisAlphaPost200Response';
import PortfolioAnalysisAlphaPostRequest from '../model/PortfolioAnalysisAlphaPostRequest';
import PortfolioAnalysisBetaPost200Response from '../model/PortfolioAnalysisBetaPost200Response';
import PortfolioAnalysisContributionsReturnPost200Response from '../model/PortfolioAnalysisContributionsReturnPost200Response';
import PortfolioAnalysisContributionsReturnPostRequest from '../model/PortfolioAnalysisContributionsReturnPostRequest';
import PortfolioAnalysisContributionsRiskPost200Response from '../model/PortfolioAnalysisContributionsRiskPost200Response';
import PortfolioAnalysisContributionsRiskPostRequest from '../model/PortfolioAnalysisContributionsRiskPostRequest';
import PortfolioAnalysisCorrelationSpectrumPost200Response from '../model/PortfolioAnalysisCorrelationSpectrumPost200Response';
import PortfolioAnalysisCorrelationSpectrumPostRequest from '../model/PortfolioAnalysisCorrelationSpectrumPostRequest';
import PortfolioAnalysisDiversificationRatioPost200Response from '../model/PortfolioAnalysisDiversificationRatioPost200Response';
import PortfolioAnalysisDrawdownsPost200Response from '../model/PortfolioAnalysisDrawdownsPost200Response';
import PortfolioAnalysisDrawdownsPostRequest from '../model/PortfolioAnalysisDrawdownsPostRequest';
import PortfolioAnalysisEffectiveNumberOfBetsPost200Response from '../model/PortfolioAnalysisEffectiveNumberOfBetsPost200Response';
import PortfolioAnalysisEffectiveNumberOfBetsPostRequest from '../model/PortfolioAnalysisEffectiveNumberOfBetsPostRequest';
import PortfolioAnalysisFactorsExposuresPost200Response from '../model/PortfolioAnalysisFactorsExposuresPost200Response';
import PortfolioAnalysisFactorsExposuresPostRequest from '../model/PortfolioAnalysisFactorsExposuresPostRequest';
import PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response from '../model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response';
import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest from '../model/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest';
import PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest from '../model/PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest';
import PortfolioAnalysisReturnPost200Response from '../model/PortfolioAnalysisReturnPost200Response';
import PortfolioAnalysisReturnPostRequest from '../model/PortfolioAnalysisReturnPostRequest';
import PortfolioAnalysisReturnsAveragePost200Response from '../model/PortfolioAnalysisReturnsAveragePost200Response';
import PortfolioAnalysisSharpeRatioPostRequestOneOf1 from '../model/PortfolioAnalysisSharpeRatioPostRequestOneOf1';
import PortfolioAnalysisTrackingErrorPost200Response from '../model/PortfolioAnalysisTrackingErrorPost200Response';
import PortfolioAnalysisTrackingErrorPostRequest from '../model/PortfolioAnalysisTrackingErrorPostRequest';
import PortfolioAnalysisUlcerIndexPost200Response from '../model/PortfolioAnalysisUlcerIndexPost200Response';
import PortfolioAnalysisUlcerPerformanceIndexPost200Response from '../model/PortfolioAnalysisUlcerPerformanceIndexPost200Response';
import PortfolioAnalysisVolatilityPost200Response from '../model/PortfolioAnalysisVolatilityPost200Response';
import PortfolioAnalysisVolatilityPostRequest from '../model/PortfolioAnalysisVolatilityPostRequest';

/**
* PortfolioAnalysis service.
* @module api/PortfolioAnalysisApi
* @version 1.0.9
*/
export default class PortfolioAnalysisApi {

    /**
    * Constructs a new PortfolioAnalysisApi. 
    * @alias module:api/PortfolioAnalysisApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the portfolioAnalysisAlphaPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisAlphaPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisAlphaPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alpha
     * Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   
     * @param {module:model/PortfolioAnalysisAlphaPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisAlphaPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisAlphaPost200Response}
     */
    portfolioAnalysisAlphaPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisAlphaPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisAlphaPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/alpha', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisBetaPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisBetaPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisBetaPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Beta
     * Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   
     * @param {module:model/PortfolioAnalysisAlphaPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisBetaPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisBetaPost200Response}
     */
    portfolioAnalysisBetaPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisBetaPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisBetaPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/beta', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisContributionsReturnPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisContributionsReturnPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisContributionsReturnPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return Contributions
     * Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 
     * @param {module:model/PortfolioAnalysisContributionsReturnPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisContributionsReturnPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisContributionsReturnPost200Response}
     */
    portfolioAnalysisContributionsReturnPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisContributionsReturnPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisContributionsReturnPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/contributions/return', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisContributionsRiskPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisContributionsRiskPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisContributionsRiskPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Risk Contributions
     * Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 
     * @param {module:model/PortfolioAnalysisContributionsRiskPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisContributionsRiskPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisContributionsRiskPost200Response}
     */
    portfolioAnalysisContributionsRiskPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisContributionsRiskPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisContributionsRiskPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/contributions/risk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisCorrelationSpectrumPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisCorrelationSpectrumPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisCorrelationSpectrumPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Correlation Spectrum
     * Compute the correlation spectrum of one or several portfolio(s).  References * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
     * @param {module:model/PortfolioAnalysisCorrelationSpectrumPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisCorrelationSpectrumPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisCorrelationSpectrumPost200Response}
     */
    portfolioAnalysisCorrelationSpectrumPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisCorrelationSpectrumPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisCorrelationSpectrumPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/correlation-spectrum', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisDiversificationRatioPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisDiversificationRatioPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisDiversificationRatioPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Diversification Ratio
     * Compute the diversification ratio of one or several portfolio(s).  References * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
     * @param {module:model/PortfolioAnalysisCorrelationSpectrumPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisDiversificationRatioPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisDiversificationRatioPost200Response}
     */
    portfolioAnalysisDiversificationRatioPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisDiversificationRatioPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisDiversificationRatioPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/diversification-ratio', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisDrawdownsPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisDrawdownsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisDrawdownsPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Drawdowns
     * Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).  References * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))         
     * @param {module:model/PortfolioAnalysisDrawdownsPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisDrawdownsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisDrawdownsPost200Response}
     */
    portfolioAnalysisDrawdownsPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisDrawdownsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisDrawdownsPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/drawdowns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisEffectiveNumberOfBetsPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisEffectiveNumberOfBetsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisEffectiveNumberOfBetsPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Effective Number of Bets
     * Compute the effective number of bets of one or several portfolio(s).  References * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632) 
     * @param {module:model/PortfolioAnalysisEffectiveNumberOfBetsPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisEffectiveNumberOfBetsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisEffectiveNumberOfBetsPost200Response}
     */
    portfolioAnalysisEffectiveNumberOfBetsPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisEffectiveNumberOfBetsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisEffectiveNumberOfBetsPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/effective-number-of-bets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisFactorsExposuresPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisFactorsExposuresPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisFactorsExposuresPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Factor Exposures
     * Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.  References * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)  
     * @param {module:model/PortfolioAnalysisFactorsExposuresPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisFactorsExposuresPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisFactorsExposuresPost200Response}
     */
    portfolioAnalysisFactorsExposuresPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisFactorsExposuresPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisFactorsExposuresPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/factors/exposures', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisMeanVarianceEfficientFrontierPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisMeanVarianceEfficientFrontierPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mean-Variance Efficient Frontier
     * Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisMeanVarianceEfficientFrontierPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response}
     */
    portfolioAnalysisMeanVarianceEfficientFrontierPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisMeanVarianceEfficientFrontierPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/mean-variance/efficient-frontier', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mean-Variance Minimum Variance Frontier
     * Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \"top\" portion of the mean-variance minimum variance frontier.  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response}
     */
    portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/mean-variance/minimum-variance-frontier', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisReturnPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisReturnPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisReturnPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Arithmetic Return
     * Compute the arithmetic return of one or several portfolio(s) from either:   * Portfolio assets arithmetic returns * Portfolio values  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioAnalysisReturnPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisReturnPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisReturnPost200Response}
     */
    portfolioAnalysisReturnPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisReturnPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisReturnPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/return', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisReturnsAveragePost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisReturnsAveragePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisReturnsAveragePost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Arithmetic Average Return
     * Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 
     * @param {module:model/PortfolioAnalysisDrawdownsPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisReturnsAveragePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisReturnsAveragePost200Response}
     */
    portfolioAnalysisReturnsAveragePost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisReturnsAveragePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisReturnsAveragePost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/returns/average', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisTrackingErrorPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisTrackingErrorPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisTrackingErrorPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tracking Error
     * Compute the tracking error between a benchmark and one or several portfolio(s).  References * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)  * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
     * @param {module:model/PortfolioAnalysisTrackingErrorPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisTrackingErrorPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisTrackingErrorPost200Response}
     */
    portfolioAnalysisTrackingErrorPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisTrackingErrorPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisTrackingErrorPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/tracking-error', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisUlcerIndexPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisUlcerIndexPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisUlcerIndexPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ulcer Index
     * Compute the Ulcer Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOf1} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisUlcerIndexPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisUlcerIndexPost200Response}
     */
    portfolioAnalysisUlcerIndexPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisUlcerIndexPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisUlcerIndexPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/ulcer-index', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisUlcerPerformanceIndexPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisUlcerPerformanceIndexPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisUlcerPerformanceIndexPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ulcer Performance Index
     * Compute the Ulcer Performance Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOf1} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisUlcerPerformanceIndexPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisUlcerPerformanceIndexPost200Response}
     */
    portfolioAnalysisUlcerPerformanceIndexPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisUlcerPerformanceIndexPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisUlcerPerformanceIndexPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/ulcer-performance-index', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisVolatilityPost operation.
     * @callback module:api/PortfolioAnalysisApi~portfolioAnalysisVolatilityPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisVolatilityPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Volatility
     * Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:   * Portfolio assets covariance matrix * Portfolio values  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance) * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioAnalysisVolatilityPostRequest} body 
     * @param {module:api/PortfolioAnalysisApi~portfolioAnalysisVolatilityPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisVolatilityPost200Response}
     */
    portfolioAnalysisVolatilityPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisVolatilityPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioAnalysisVolatilityPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/volatility', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
