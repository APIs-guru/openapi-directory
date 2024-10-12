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
import PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response from '../model/PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response';
import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest from '../model/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest';
import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response from '../model/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response';
import PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest from '../model/PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest';
import PortfolioAnalysisSharpeRatioPost200Response from '../model/PortfolioAnalysisSharpeRatioPost200Response';
import PortfolioAnalysisSharpeRatioPostRequest from '../model/PortfolioAnalysisSharpeRatioPostRequest';
import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response from '../model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response';
import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest from '../model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest';
import PortfolioAnalysisSharpeRatioProbabilisticPost200Response from '../model/PortfolioAnalysisSharpeRatioProbabilisticPost200Response';
import PortfolioAnalysisSharpeRatioProbabilisticPostRequest from '../model/PortfolioAnalysisSharpeRatioProbabilisticPostRequest';

/**
* PortfolioAnalysisSharpeRatio service.
* @module api/PortfolioAnalysisSharpeRatioApi
* @version 1.0.9
*/
export default class PortfolioAnalysisSharpeRatioApi {

    /**
    * Constructs a new PortfolioAnalysisSharpeRatioApi. 
    * @alias module:api/PortfolioAnalysisSharpeRatioApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the portfolioAnalysisSharpeRatioBiasAdjustedPost operation.
     * @callback module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioBiasAdjustedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bias-Adjusted Sharpe Ratio
     * Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 
     * @param {module:model/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest} body 
     * @param {module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioBiasAdjustedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response}
     */
    portfolioAnalysisSharpeRatioBiasAdjustedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioBiasAdjustedPost");
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
      let returnType = PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/sharpe-ratio/bias-adjusted', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisSharpeRatioConfidenceIntervalPost operation.
     * @callback module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioConfidenceIntervalPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sharpe Ratio Confidence Interval
     * Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 
     * @param {module:model/PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest} body 
     * @param {module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioConfidenceIntervalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response}
     */
    portfolioAnalysisSharpeRatioConfidenceIntervalPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioConfidenceIntervalPost");
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
      let returnType = PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/sharpe-ratio/confidence-interval', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisSharpeRatioPost operation.
     * @callback module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sharpe Ratio
     * Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param {module:model/PortfolioAnalysisSharpeRatioPostRequest} body 
     * @param {module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioPost200Response}
     */
    portfolioAnalysisSharpeRatioPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioPost");
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
      let returnType = PortfolioAnalysisSharpeRatioPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/sharpe-ratio', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost operation.
     * @callback module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Minimum Track Record Length
     * Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643) 
     * @param {module:model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest} body 
     * @param {module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response}
     */
    portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost");
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
      let returnType = PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisSharpeRatioProbabilisticPost operation.
     * @callback module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioProbabilisticPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisSharpeRatioProbabilisticPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Probabilistic Sharpe Ratio
     * Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643) 
     * @param {module:model/PortfolioAnalysisSharpeRatioProbabilisticPostRequest} body 
     * @param {module:api/PortfolioAnalysisSharpeRatioApi~portfolioAnalysisSharpeRatioProbabilisticPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisSharpeRatioProbabilisticPost200Response}
     */
    portfolioAnalysisSharpeRatioProbabilisticPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioProbabilisticPost");
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
      let returnType = PortfolioAnalysisSharpeRatioProbabilisticPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/sharpe-ratio/probabilistic', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
