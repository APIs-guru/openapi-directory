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
import PortfolioConstructionRandomPostRequestConstraints from './PortfolioConstructionRandomPostRequestConstraints';

/**
 * The PortfolioOptimizationHierarchicalRiskParityPostRequest model module.
 * @module model/PortfolioOptimizationHierarchicalRiskParityPostRequest
 * @version 1.0.9
 */
class PortfolioOptimizationHierarchicalRiskParityPostRequest {
    /**
     * Constructs a new <code>PortfolioOptimizationHierarchicalRiskParityPostRequest</code>.
     * @alias module:model/PortfolioOptimizationHierarchicalRiskParityPostRequest
     * @param assets {Number} The number of assets
     * @param assetsCovarianceMatrix {Array.<Array.<Number>>} assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    constructor(assets, assetsCovarianceMatrix) { 
        
        PortfolioOptimizationHierarchicalRiskParityPostRequest.initialize(this, assets, assetsCovarianceMatrix);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assets, assetsCovarianceMatrix) { 
        obj['assets'] = assets;
        obj['assetsCovarianceMatrix'] = assetsCovarianceMatrix;
        obj['clusteringMethod'] = 'singleLinkage';
        obj['clusteringOrdering'] = 'r-hclust';
    }

    /**
     * Constructs a <code>PortfolioOptimizationHierarchicalRiskParityPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioOptimizationHierarchicalRiskParityPostRequest} obj Optional instance to populate.
     * @return {module:model/PortfolioOptimizationHierarchicalRiskParityPostRequest} The populated <code>PortfolioOptimizationHierarchicalRiskParityPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioOptimizationHierarchicalRiskParityPostRequest();

            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], 'Number');
            }
            if (data.hasOwnProperty('assetsCovarianceMatrix')) {
                obj['assetsCovarianceMatrix'] = ApiClient.convertToType(data['assetsCovarianceMatrix'], [['Number']]);
            }
            if (data.hasOwnProperty('clusteringMethod')) {
                obj['clusteringMethod'] = ApiClient.convertToType(data['clusteringMethod'], 'String');
            }
            if (data.hasOwnProperty('clusteringOrdering')) {
                obj['clusteringOrdering'] = ApiClient.convertToType(data['clusteringOrdering'], 'String');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = PortfolioConstructionRandomPostRequestConstraints.constructFromObject(data['constraints']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PortfolioOptimizationHierarchicalRiskParityPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PortfolioOptimizationHierarchicalRiskParityPostRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PortfolioOptimizationHierarchicalRiskParityPostRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['assetsCovarianceMatrix'])) {
            throw new Error("Expected the field `assetsCovarianceMatrix` to be an array in the JSON data but got " + data['assetsCovarianceMatrix']);
        }
        // ensure the json data is a string
        if (data['clusteringMethod'] && !(typeof data['clusteringMethod'] === 'string' || data['clusteringMethod'] instanceof String)) {
            throw new Error("Expected the field `clusteringMethod` to be a primitive type in the JSON string but got " + data['clusteringMethod']);
        }
        // ensure the json data is a string
        if (data['clusteringOrdering'] && !(typeof data['clusteringOrdering'] === 'string' || data['clusteringOrdering'] instanceof String)) {
            throw new Error("Expected the field `clusteringOrdering` to be a primitive type in the JSON string but got " + data['clusteringOrdering']);
        }
        // validate the optional field `constraints`
        if (data['constraints']) { // data not null
          PortfolioConstructionRandomPostRequestConstraints.validateJSON(data['constraints']);
        }

        return true;
    }


}

PortfolioOptimizationHierarchicalRiskParityPostRequest.RequiredProperties = ["assets", "assetsCovarianceMatrix"];

/**
 * The number of assets
 * @member {Number} assets
 */
PortfolioOptimizationHierarchicalRiskParityPostRequest.prototype['assets'] = undefined;

/**
 * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
 * @member {Array.<Array.<Number>>} assetsCovarianceMatrix
 */
PortfolioOptimizationHierarchicalRiskParityPostRequest.prototype['assetsCovarianceMatrix'] = undefined;

/**
 * The hierarchical clustering method to use
 * @member {module:model/PortfolioOptimizationHierarchicalRiskParityPostRequest.ClusteringMethodEnum} clusteringMethod
 * @default 'singleLinkage'
 */
PortfolioOptimizationHierarchicalRiskParityPostRequest.prototype['clusteringMethod'] = 'singleLinkage';

/**
 * The order to impose on the hierarchical clustering tree leaves
 * @member {module:model/PortfolioOptimizationHierarchicalRiskParityPostRequest.ClusteringOrderingEnum} clusteringOrdering
 * @default 'r-hclust'
 */
PortfolioOptimizationHierarchicalRiskParityPostRequest.prototype['clusteringOrdering'] = 'r-hclust';

/**
 * @member {module:model/PortfolioConstructionRandomPostRequestConstraints} constraints
 */
PortfolioOptimizationHierarchicalRiskParityPostRequest.prototype['constraints'] = undefined;





/**
 * Allowed values for the <code>clusteringMethod</code> property.
 * @enum {String}
 * @readonly
 */
PortfolioOptimizationHierarchicalRiskParityPostRequest['ClusteringMethodEnum'] = {

    /**
     * value: "singleLinkage"
     * @const
     */
    "singleLinkage": "singleLinkage",

    /**
     * value: "averageLinkage"
     * @const
     */
    "averageLinkage": "averageLinkage",

    /**
     * value: "completeLinkage"
     * @const
     */
    "completeLinkage": "completeLinkage",

    /**
     * value: "wardLinkage"
     * @const
     */
    "wardLinkage": "wardLinkage"
};


/**
 * Allowed values for the <code>clusteringOrdering</code> property.
 * @enum {String}
 * @readonly
 */
PortfolioOptimizationHierarchicalRiskParityPostRequest['ClusteringOrderingEnum'] = {

    /**
     * value: "r-hclust"
     * @const
     */
    "r-hclust": "r-hclust",

    /**
     * value: "optimal"
     * @const
     */
    "optimal": "optimal"
};



export default PortfolioOptimizationHierarchicalRiskParityPostRequest;

