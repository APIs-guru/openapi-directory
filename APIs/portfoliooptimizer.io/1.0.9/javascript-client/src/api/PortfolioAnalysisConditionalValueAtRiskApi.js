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
import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response from '../model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response';
import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest from '../model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest';
import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest from '../model/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest';
import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest from '../model/PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest';

/**
* PortfolioAnalysisConditionalValueAtRisk service.
* @module api/PortfolioAnalysisConditionalValueAtRiskApi
* @version 1.0.9
*/
export default class PortfolioAnalysisConditionalValueAtRiskApi {

    /**
    * Constructs a new PortfolioAnalysisConditionalValueAtRiskApi. 
    * @alias module:api/PortfolioAnalysisConditionalValueAtRiskApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost operation.
     * @callback module:api/PortfolioAnalysisConditionalValueAtRiskApi~portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Corrected Cornish-Fisher Conditional Value At Risk
     * Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 
     * @param {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest} body 
     * @param {module:api/PortfolioAnalysisConditionalValueAtRiskApi~portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response}
     */
    portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost");
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
      let returnType = PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisValueAtRiskConditionalCornishFisherPost operation.
     * @callback module:api/PortfolioAnalysisConditionalValueAtRiskApi~portfolioAnalysisValueAtRiskConditionalCornishFisherPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cornish-Fisher Conditional Value At Risk
     * Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151). * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 
     * @param {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest} body 
     * @param {module:api/PortfolioAnalysisConditionalValueAtRiskApi~portfolioAnalysisValueAtRiskConditionalCornishFisherPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response}
     */
    portfolioAnalysisValueAtRiskConditionalCornishFisherPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisValueAtRiskConditionalCornishFisherPost");
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
      let returnType = PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/value-at-risk/conditional/cornish-fisher', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisValueAtRiskConditionalGaussianPost operation.
     * @callback module:api/PortfolioAnalysisConditionalValueAtRiskApi~portfolioAnalysisValueAtRiskConditionalGaussianPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gaussian Conditional Value At Risk
     * Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151). 
     * @param {module:model/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest} body 
     * @param {module:api/PortfolioAnalysisConditionalValueAtRiskApi~portfolioAnalysisValueAtRiskConditionalGaussianPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response}
     */
    portfolioAnalysisValueAtRiskConditionalGaussianPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisValueAtRiskConditionalGaussianPost");
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
      let returnType = PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/value-at-risk/conditional/gaussian', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioAnalysisValueAtRiskConditionalHistoricalPost operation.
     * @callback module:api/PortfolioAnalysisConditionalValueAtRiskApi~portfolioAnalysisValueAtRiskConditionalHistoricalPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Historical Conditional Value At Risk
     * Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk) * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091) 
     * @param {module:model/PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest} body 
     * @param {module:api/PortfolioAnalysisConditionalValueAtRiskApi~portfolioAnalysisValueAtRiskConditionalHistoricalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response}
     */
    portfolioAnalysisValueAtRiskConditionalHistoricalPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling portfolioAnalysisValueAtRiskConditionalHistoricalPost");
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
      let returnType = PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response;
      return this.apiClient.callApi(
        '/portfolio/analysis/value-at-risk/conditional/historical', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
