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
import AssetsCorrelationMatrixRandomPostRequest from '../model/AssetsCorrelationMatrixRandomPostRequest';
import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner from '../model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner';
import PortfolioOptimizationEqualRiskContributionsPostRequest from '../model/PortfolioOptimizationEqualRiskContributionsPostRequest';
import PortfolioOptimizationEqualSharpeRatioContributionsPostRequest from '../model/PortfolioOptimizationEqualSharpeRatioContributionsPostRequest';
import PortfolioOptimizationEqualVolatilityWeightedPostRequest from '../model/PortfolioOptimizationEqualVolatilityWeightedPostRequest';
import PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest from '../model/PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest';
import PortfolioOptimizationHierarchicalRiskParityPostRequest from '../model/PortfolioOptimizationHierarchicalRiskParityPostRequest';
import PortfolioOptimizationInverseVarianceWeightedPostRequest from '../model/PortfolioOptimizationInverseVarianceWeightedPostRequest';
import PortfolioOptimizationMarketCapitalizationWeightedPostRequest from '../model/PortfolioOptimizationMarketCapitalizationWeightedPostRequest';
import PortfolioOptimizationMaximumDecorrelationPostRequest from '../model/PortfolioOptimizationMaximumDecorrelationPostRequest';
import PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest from '../model/PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest';
import PortfolioOptimizationMinimumCorrelationPostRequest from '../model/PortfolioOptimizationMinimumCorrelationPostRequest';
import PortfolioOptimizationMinimumUlcerIndexPostRequest from '../model/PortfolioOptimizationMinimumUlcerIndexPostRequest';
import PortfolioOptimizationMostDiversifiedPostRequest from '../model/PortfolioOptimizationMostDiversifiedPostRequest';

/**
* PortfolioOptimization service.
* @module api/PortfolioOptimizationApi
* @version 1.0.9
*/
export default class PortfolioOptimizationApi {

    /**
    * Constructs a new PortfolioOptimizationApi. 
    * @alias module:api/PortfolioOptimizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the portfolioOptimizationEqualRiskContributionsPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationEqualRiskContributionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Equal Risk Contributions Portfolio
     * Compute the asset weights of the equal risk contributions portfolio, optionally subject to:   * Minimum and maximum weights constraints    References  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184) 
     * @param {module:model/PortfolioOptimizationEqualRiskContributionsPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationEqualRiskContributionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationEqualRiskContributionsPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationEqualRiskContributionsPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/equal-risk-contributions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationEqualSharpeRatioContributionsPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationEqualSharpeRatioContributionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Equal Sharpe Ratio Contributions Portfolio
     * Compute the asset weights of the equal Sharpe Ratio contributions portfolio.  References  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166\") 
     * @param {module:model/PortfolioOptimizationEqualSharpeRatioContributionsPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationEqualSharpeRatioContributionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationEqualSharpeRatioContributionsPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationEqualSharpeRatioContributionsPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/equal-sharpe-ratio-contributions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationEqualVolatilityWeightedPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationEqualVolatilityWeightedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Equal Volatility Weighted Portfolio
     * Compute the asset weights of the equal volatility-weighted portfolio.  References  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
     * @param {module:model/PortfolioOptimizationEqualVolatilityWeightedPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationEqualVolatilityWeightedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationEqualVolatilityWeightedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationEqualVolatilityWeightedPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/equal-volatility-weighted', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationEqualWeightedPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationEqualWeightedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Equal Weighted Portfolio
     * Compute the asset weights of the equal-weighted portfolio.  References  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext) 
     * @param {module:model/AssetsCorrelationMatrixRandomPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationEqualWeightedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationEqualWeightedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationEqualWeightedPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/equal-weighted', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationHierarchicalRiskParityClusteringBasedPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationHierarchicalRiskParityClusteringBasedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Hierarchical Clustering-Based Risk Parity Portfolio
     * Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)  * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
     * @param {module:model/PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationHierarchicalRiskParityClusteringBasedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationHierarchicalRiskParityClusteringBasedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationHierarchicalRiskParityClusteringBasedPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/hierarchical-risk-parity/clustering-based', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationHierarchicalRiskParityPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationHierarchicalRiskParityPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Hierarchical Risk Parity Portfolio
     * Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)  * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
     * @param {module:model/PortfolioOptimizationHierarchicalRiskParityPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationHierarchicalRiskParityPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationHierarchicalRiskParityPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationHierarchicalRiskParityPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/hierarchical-risk-parity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationInverseVarianceWeightedPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationInverseVarianceWeightedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inverse Variance Weighted Portfolio
     * Compute the asset weights of the inverse variance-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
     * @param {module:model/PortfolioOptimizationInverseVarianceWeightedPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationInverseVarianceWeightedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationInverseVarianceWeightedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationInverseVarianceWeightedPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/inverse-variance-weighted', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationInverseVolatilityWeightedPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationInverseVolatilityWeightedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inverse Volatility Weighted Portfolio
     * Compute the asset weights of the inverse volatility-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
     * @param {module:model/PortfolioOptimizationEqualVolatilityWeightedPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationInverseVolatilityWeightedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationInverseVolatilityWeightedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationInverseVolatilityWeightedPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/inverse-volatility-weighted', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMarketCapitalizationWeightedPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationMarketCapitalizationWeightedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Market Capitalization Weighted Portfolio
     * Compute the asset weights of the market capitalization-weighted portfolio.  References  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index) 
     * @param {module:model/PortfolioOptimizationMarketCapitalizationWeightedPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationMarketCapitalizationWeightedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMarketCapitalizationWeightedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMarketCapitalizationWeightedPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/market-capitalization-weighted', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMaximumDecorrelationPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationMaximumDecorrelationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Maximum Decorrelation Portfolio
     * Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices) 
     * @param {module:model/PortfolioOptimizationMaximumDecorrelationPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationMaximumDecorrelationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMaximumDecorrelationPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMaximumDecorrelationPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/maximum-decorrelation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMaximumUlcerPerformanceIndexPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationMaximumUlcerPerformanceIndexPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Maximum Ulcer Performance Index Portfolio
     * Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  Notes:   * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
     * @param {module:model/PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationMaximumUlcerPerformanceIndexPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMaximumUlcerPerformanceIndexPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMaximumUlcerPerformanceIndexPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/maximum-ulcer-performance-index', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMinimumCorrelationPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationMinimumCorrelationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Minimum Correlation Portfolio
     * Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).  References  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/) 
     * @param {module:model/PortfolioOptimizationMinimumCorrelationPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationMinimumCorrelationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMinimumCorrelationPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMinimumCorrelationPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/minimum-correlation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMinimumUlcerIndexPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationMinimumUlcerIndexPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Minimum Ulcer Index Portfolio
     * Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
     * @param {module:model/PortfolioOptimizationMinimumUlcerIndexPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationMinimumUlcerIndexPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMinimumUlcerIndexPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMinimumUlcerIndexPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/minimum-ulcer-index', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMostDiversifiedPost operation.
     * @callback module:api/PortfolioOptimizationApi~portfolioOptimizationMostDiversifiedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Most Diversified Portfolio
     * Compute the asset weights of the most diversified portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) 
     * @param {module:model/PortfolioOptimizationMostDiversifiedPostRequest} body 
     * @param {module:api/PortfolioOptimizationApi~portfolioOptimizationMostDiversifiedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMostDiversifiedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMostDiversifiedPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
      return this.apiClient.callApi(
        '/portfolio/optimization/most-diversified', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
