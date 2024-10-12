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

import ApiClient from '../ApiClient';

/**
 * The AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest model module.
 * @module model/AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
 * @version 1.0.9
 */
class AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest {
    /**
     * Constructs a new <code>AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest</code>.
     * @alias module:model/AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
     * @param assetAverageReturn {Number} The arithmetic average return of the asset, corresponding to the mean of the corrected Cornish-Fisher distribution
     * @param assetKurtosis {Number} The kurtosis of the asset returns, corresponding to the kurtosis of the Cornish-Fisher distribution
     * @param assetSkewness {Number} The skewness of the asset returns, corresponding to the skewness of the Cornish-Fisher distribution
     * @param assetVolatility {Number} The volatility of the asset returns, corresponding to the volatility of the Cornish-Fisher distribution
     */
    constructor(assetAverageReturn, assetKurtosis, assetSkewness, assetVolatility) { 
        
        AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.initialize(this, assetAverageReturn, assetKurtosis, assetSkewness, assetVolatility);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assetAverageReturn, assetKurtosis, assetSkewness, assetVolatility) { 
        obj['assetAverageReturn'] = assetAverageReturn;
        obj['assetKurtosis'] = assetKurtosis;
        obj['assetSkewness'] = assetSkewness;
        obj['assetVolatility'] = assetVolatility;
        obj['simulations'] = 1;
        obj['simulationsLength'] = 1;
    }

    /**
     * Constructs a <code>AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest} obj Optional instance to populate.
     * @return {module:model/AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest} The populated <code>AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest();

            if (data.hasOwnProperty('assetAverageReturn')) {
                obj['assetAverageReturn'] = ApiClient.convertToType(data['assetAverageReturn'], 'Number');
            }
            if (data.hasOwnProperty('assetKurtosis')) {
                obj['assetKurtosis'] = ApiClient.convertToType(data['assetKurtosis'], 'Number');
            }
            if (data.hasOwnProperty('assetSkewness')) {
                obj['assetSkewness'] = ApiClient.convertToType(data['assetSkewness'], 'Number');
            }
            if (data.hasOwnProperty('assetVolatility')) {
                obj['assetVolatility'] = ApiClient.convertToType(data['assetVolatility'], 'Number');
            }
            if (data.hasOwnProperty('simulations')) {
                obj['simulations'] = ApiClient.convertToType(data['simulations'], 'Number');
            }
            if (data.hasOwnProperty('simulationsLength')) {
                obj['simulationsLength'] = ApiClient.convertToType(data['simulationsLength'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.RequiredProperties = ["assetAverageReturn", "assetKurtosis", "assetSkewness", "assetVolatility"];

/**
 * The arithmetic average return of the asset, corresponding to the mean of the corrected Cornish-Fisher distribution
 * @member {Number} assetAverageReturn
 */
AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.prototype['assetAverageReturn'] = undefined;

/**
 * The kurtosis of the asset returns, corresponding to the kurtosis of the Cornish-Fisher distribution
 * @member {Number} assetKurtosis
 */
AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.prototype['assetKurtosis'] = undefined;

/**
 * The skewness of the asset returns, corresponding to the skewness of the Cornish-Fisher distribution
 * @member {Number} assetSkewness
 */
AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.prototype['assetSkewness'] = undefined;

/**
 * The volatility of the asset returns, corresponding to the volatility of the Cornish-Fisher distribution
 * @member {Number} assetVolatility
 */
AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.prototype['assetVolatility'] = undefined;

/**
 * The number of simulations to perform
 * @member {Number} simulations
 * @default 1
 */
AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.prototype['simulations'] = 1;

/**
 * The number of time period(s) to simulate per simulation
 * @member {Number} simulationsLength
 * @default 1
 */
AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.prototype['simulationsLength'] = 1;






export default AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest;

