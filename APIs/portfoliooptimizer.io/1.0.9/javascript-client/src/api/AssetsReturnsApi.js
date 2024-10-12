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
import AssetsReturnsAveragePost200Response from '../model/AssetsReturnsAveragePost200Response';
import AssetsReturnsAveragePostRequest from '../model/AssetsReturnsAveragePostRequest';
import AssetsReturnsLogarithmicPost200Response from '../model/AssetsReturnsLogarithmicPost200Response';
import AssetsReturnsPost200Response from '../model/AssetsReturnsPost200Response';
import AssetsReturnsPostRequest from '../model/AssetsReturnsPostRequest';
import AssetsReturnsTurbulencePartitionedPost200Response from '../model/AssetsReturnsTurbulencePartitionedPost200Response';
import AssetsReturnsTurbulencePartitionedPostRequest from '../model/AssetsReturnsTurbulencePartitionedPostRequest';

/**
* AssetsReturns service.
* @module api/AssetsReturnsApi
* @version 1.0.9
*/
export default class AssetsReturnsApi {

    /**
    * Constructs a new AssetsReturnsApi. 
    * @alias module:api/AssetsReturnsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the assetsReturnsAveragePost operation.
     * @callback module:api/AssetsReturnsApi~assetsReturnsAveragePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsReturnsAveragePost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Arithmetic Average Return
     * Compute the arithmetic average of the return(s) of one or several asset(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 
     * @param {module:model/AssetsReturnsAveragePostRequest} body 
     * @param {module:api/AssetsReturnsApi~assetsReturnsAveragePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsReturnsAveragePost200Response}
     */
    assetsReturnsAveragePost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsReturnsAveragePost");
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
      let returnType = AssetsReturnsAveragePost200Response;
      return this.apiClient.callApi(
        '/assets/returns/average', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsReturnsLogarithmicPost operation.
     * @callback module:api/AssetsReturnsApi~assetsReturnsLogarithmicPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsReturnsLogarithmicPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logarithmic Returns
     * Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return) 
     * @param {module:model/AssetsReturnsPostRequest} body 
     * @param {module:api/AssetsReturnsApi~assetsReturnsLogarithmicPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsReturnsLogarithmicPost200Response}
     */
    assetsReturnsLogarithmicPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsReturnsLogarithmicPost");
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
      let returnType = AssetsReturnsLogarithmicPost200Response;
      return this.apiClient.callApi(
        '/assets/returns/logarithmic', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsReturnsPost operation.
     * @callback module:api/AssetsReturnsApi~assetsReturnsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsReturnsPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Arithmetic Returns
     * Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) 
     * @param {module:model/AssetsReturnsPostRequest} body 
     * @param {module:api/AssetsReturnsApi~assetsReturnsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsReturnsPost200Response}
     */
    assetsReturnsPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsReturnsPost");
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
      let returnType = AssetsReturnsPost200Response;
      return this.apiClient.callApi(
        '/assets/returns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsReturnsTurbulencePartitionedPost operation.
     * @callback module:api/AssetsReturnsApi~assetsReturnsTurbulencePartitionedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsReturnsTurbulencePartitionedPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Turbulence-partitioned Asset Returns
     * Partition asset returns into several subsets based on their turbulence index.  References * [George Chow, Jacquier, E., Kritzman, M., & Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169) 
     * @param {module:model/AssetsReturnsTurbulencePartitionedPostRequest} body 
     * @param {module:api/AssetsReturnsApi~assetsReturnsTurbulencePartitionedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsReturnsTurbulencePartitionedPost200Response}
     */
    assetsReturnsTurbulencePartitionedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsReturnsTurbulencePartitionedPost");
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
      let returnType = AssetsReturnsTurbulencePartitionedPost200Response;
      return this.apiClient.callApi(
        '/assets/returns/turbulence-partitioned', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
