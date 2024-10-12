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
import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner from '../model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner';
import PortfolioOptimizationMaximumReturnDiversifiedPostRequest from '../model/PortfolioOptimizationMaximumReturnDiversifiedPostRequest';
import PortfolioOptimizationMaximumReturnPostRequest from '../model/PortfolioOptimizationMaximumReturnPostRequest';
import PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest from '../model/PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest';
import PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest from '../model/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest';
import PortfolioOptimizationMaximumSharpeRatioPostRequest from '../model/PortfolioOptimizationMaximumSharpeRatioPostRequest';
import PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest from '../model/PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest';
import PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest from '../model/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest';
import PortfolioOptimizationMeanVarianceEfficientPostRequest from '../model/PortfolioOptimizationMeanVarianceEfficientPostRequest';
import PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest from '../model/PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest';
import PortfolioOptimizationMinimumVarianceDiversifiedPostRequest from '../model/PortfolioOptimizationMinimumVarianceDiversifiedPostRequest';
import PortfolioOptimizationMinimumVariancePostRequest from '../model/PortfolioOptimizationMinimumVariancePostRequest';
import PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest from '../model/PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest';

/**
* PortfolioOptimizationMeanVariance service.
* @module api/PortfolioOptimizationMeanVarianceApi
* @version 1.0.9
*/
export default class PortfolioOptimizationMeanVarianceApi {

    /**
    * Constructs a new PortfolioOptimizationMeanVarianceApi. 
    * @alias module:api/PortfolioOptimizationMeanVarianceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the portfolioOptimizationMaximumReturnDiversifiedPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumReturnDiversifiedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Diversified Maximum Return Portfolio
     * Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMaximumReturnDiversifiedPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumReturnDiversifiedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMaximumReturnDiversifiedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMaximumReturnDiversifiedPost");
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
        '/portfolio/optimization/maximum-return/diversified', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMaximumReturnPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumReturnPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Maximum Return Portfolio
     * Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMaximumReturnPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumReturnPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMaximumReturnPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMaximumReturnPost");
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
        '/portfolio/optimization/maximum-return', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMaximumReturnSubsetResamplingBasedPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumReturnSubsetResamplingBasedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subset Resampling-Based Maximum Return Portfolio
     * Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumReturnSubsetResamplingBasedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMaximumReturnSubsetResamplingBasedPost");
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
        '/portfolio/optimization/maximum-return/subset-resampling-based', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMaximumSharpeRatioDiversifiedPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumSharpeRatioDiversifiedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Diversified Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumSharpeRatioDiversifiedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMaximumSharpeRatioDiversifiedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMaximumSharpeRatioDiversifiedPost");
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
        '/portfolio/optimization/maximum-sharpe-ratio/diversified', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMaximumSharpeRatioPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumSharpeRatioPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMaximumSharpeRatioPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumSharpeRatioPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMaximumSharpeRatioPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMaximumSharpeRatioPost");
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
        '/portfolio/optimization/maximum-sharpe-ratio', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subset Resampling-Based Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost");
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
        '/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMeanVarianceEfficientDiversifiedPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMeanVarianceEfficientDiversifiedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Diversified Mean-Variance Efficient Portfolio
     * Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  > A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMeanVarianceEfficientDiversifiedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMeanVarianceEfficientDiversifiedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMeanVarianceEfficientDiversifiedPost");
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
        '/portfolio/optimization/mean-variance-efficient/diversified', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMeanVarianceEfficientPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMeanVarianceEfficientPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mean-Variance Efficient Portfolio
     * Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMeanVarianceEfficientPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMeanVarianceEfficientPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMeanVarianceEfficientPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMeanVarianceEfficientPost");
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
        '/portfolio/optimization/mean-variance-efficient', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subset Resampling-Based Mean-Variance Efficient Portfolio
     * Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost");
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
        '/portfolio/optimization/mean-variance-efficient/subset-resampling-based', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMinimumVarianceDiversifiedPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMinimumVarianceDiversifiedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Diversified Minimum Variance Portfolio
     * Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMinimumVarianceDiversifiedPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMinimumVarianceDiversifiedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMinimumVarianceDiversifiedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMinimumVarianceDiversifiedPost");
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
        '/portfolio/optimization/minimum-variance/diversified', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMinimumVariancePost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMinimumVariancePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Minimum Variance Portfolio
     * Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMinimumVariancePostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMinimumVariancePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMinimumVariancePost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMinimumVariancePost");
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
        '/portfolio/optimization/minimum-variance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost operation.
     * @callback module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subset Resampling-Based Minimum Variance Portfolio
     * Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest} body 
     * @param {module:api/PortfolioOptimizationMeanVarianceApi~portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost");
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
        '/portfolio/optimization/minimum-variance/subset-resampling-based', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
