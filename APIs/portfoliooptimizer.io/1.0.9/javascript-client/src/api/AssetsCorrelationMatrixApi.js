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
import AssetsCorrelationMatrixBoundsPost200Response from '../model/AssetsCorrelationMatrixBoundsPost200Response';
import AssetsCorrelationMatrixBoundsPostRequest from '../model/AssetsCorrelationMatrixBoundsPostRequest';
import AssetsCorrelationMatrixDenoisedPost200Response from '../model/AssetsCorrelationMatrixDenoisedPost200Response';
import AssetsCorrelationMatrixDenoisedPostRequest from '../model/AssetsCorrelationMatrixDenoisedPostRequest';
import AssetsCorrelationMatrixDistancePost200Response from '../model/AssetsCorrelationMatrixDistancePost200Response';
import AssetsCorrelationMatrixDistancePostRequest from '../model/AssetsCorrelationMatrixDistancePostRequest';
import AssetsCorrelationMatrixEffectiveRankPost200Response from '../model/AssetsCorrelationMatrixEffectiveRankPost200Response';
import AssetsCorrelationMatrixEffectiveRankPostRequest from '../model/AssetsCorrelationMatrixEffectiveRankPostRequest';
import AssetsCorrelationMatrixInformativenessPost200Response from '../model/AssetsCorrelationMatrixInformativenessPost200Response';
import AssetsCorrelationMatrixInformativenessPostRequest from '../model/AssetsCorrelationMatrixInformativenessPostRequest';
import AssetsCorrelationMatrixNearestPostRequest from '../model/AssetsCorrelationMatrixNearestPostRequest';
import AssetsCorrelationMatrixPost200Response from '../model/AssetsCorrelationMatrixPost200Response';
import AssetsCorrelationMatrixPostRequest from '../model/AssetsCorrelationMatrixPostRequest';
import AssetsCorrelationMatrixRandomPostRequest from '../model/AssetsCorrelationMatrixRandomPostRequest';
import AssetsCorrelationMatrixShrinkagePostRequest from '../model/AssetsCorrelationMatrixShrinkagePostRequest';
import AssetsCorrelationMatrixTheoryImpliedPostRequest from '../model/AssetsCorrelationMatrixTheoryImpliedPostRequest';
import AssetsCorrelationMatrixValidationPost200Response from '../model/AssetsCorrelationMatrixValidationPost200Response';
import AssetsCorrelationMatrixValidationPostRequest from '../model/AssetsCorrelationMatrixValidationPostRequest';

/**
* AssetsCorrelationMatrix service.
* @module api/AssetsCorrelationMatrixApi
* @version 1.0.9
*/
export default class AssetsCorrelationMatrixApi {

    /**
    * Constructs a new AssetsCorrelationMatrixApi. 
    * @alias module:api/AssetsCorrelationMatrixApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the assetsCorrelationMatrixBoundsPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixBoundsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixBoundsPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Correlation Matrix Bounds
     * Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.    References  * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517). 
     * @param {module:model/AssetsCorrelationMatrixBoundsPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixBoundsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixBoundsPost200Response}
     */
    assetsCorrelationMatrixBoundsPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixBoundsPost");
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
      let returnType = AssetsCorrelationMatrixBoundsPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/bounds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixDenoisedPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixDenoisedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixDenoisedPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Denoised Correlation Matrix
     * Compute a denoised asset correlation matrix, using one of the following methods:  * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory    References  * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467) 
     * @param {module:model/AssetsCorrelationMatrixDenoisedPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixDenoisedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixDenoisedPost200Response}
     */
    assetsCorrelationMatrixDenoisedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixDenoisedPost");
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
      let returnType = AssetsCorrelationMatrixDenoisedPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/denoised', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixDistancePost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixDistancePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixDistancePost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Correlation Matrix Distance
     * Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the second reference   References  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 
     * @param {module:model/AssetsCorrelationMatrixDistancePostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixDistancePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixDistancePost200Response}
     */
    assetsCorrelationMatrixDistancePost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixDistancePost");
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
      let returnType = AssetsCorrelationMatrixDistancePost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/distance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixEffectiveRankPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixEffectiveRankPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixEffectiveRankPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Correlation Matrix Effective Rank
     * Compute the effective rank of an asset correlation matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 
     * @param {module:model/AssetsCorrelationMatrixEffectiveRankPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixEffectiveRankPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixEffectiveRankPost200Response}
     */
    assetsCorrelationMatrixEffectiveRankPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixEffectiveRankPost");
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
      let returnType = AssetsCorrelationMatrixEffectiveRankPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/effective-rank', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixInformativenessPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixInformativenessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixInformativenessPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Correlation Matrix Informativeness
     * Compute the informativeness of an asset correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the third reference   References  * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 
     * @param {module:model/AssetsCorrelationMatrixInformativenessPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixInformativenessPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixInformativenessPost200Response}
     */
    assetsCorrelationMatrixInformativenessPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixInformativenessPost");
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
      let returnType = AssetsCorrelationMatrixInformativenessPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/informativeness', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixNearestPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixNearestPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Nearest Correlation Matrix
     * Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.  References * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf) 
     * @param {module:model/AssetsCorrelationMatrixNearestPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixNearestPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixPost200Response}
     */
    assetsCorrelationMatrixNearestPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixNearestPost");
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
      let returnType = AssetsCorrelationMatrixPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/nearest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Correlation Matrix
     * Compute the Pearson asset correlation matrix from either:   * The asset returns * The asset covariance matrix  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 
     * @param {module:model/AssetsCorrelationMatrixPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixPost200Response}
     */
    assetsCorrelationMatrixPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixPost");
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
      let returnType = AssetsCorrelationMatrixPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixRandomPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixRandomPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Random Correlation Matrix
     * Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.  References * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886) 
     * @param {module:model/AssetsCorrelationMatrixRandomPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixRandomPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixPost200Response}
     */
    assetsCorrelationMatrixRandomPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixRandomPost");
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
      let returnType = AssetsCorrelationMatrixPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/random', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixShrinkagePost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixShrinkagePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Correlation Matrix Shrinkage
     * Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:    * An equicorrelation matrix made of 1  * An equicorrelation matrix made of 0  * An equicorrelation matrix made of -1/(n-1), with n the number of assets  * A provided correlation matrix    References  * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165) 
     * @param {module:model/AssetsCorrelationMatrixShrinkagePostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixShrinkagePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixPost200Response}
     */
    assetsCorrelationMatrixShrinkagePost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixShrinkagePost");
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
      let returnType = AssetsCorrelationMatrixPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/shrinkage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixTheoryImpliedPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixTheoryImpliedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Theory-Implied Correlation Matrix
     * Compute the theory-implied asset correlation matrix associated with: * A hierarchical classification of a universe of assets * An asset correlation matrix  References * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152) 
     * @param {module:model/AssetsCorrelationMatrixTheoryImpliedPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixTheoryImpliedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixPost200Response}
     */
    assetsCorrelationMatrixTheoryImpliedPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixTheoryImpliedPost");
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
      let returnType = AssetsCorrelationMatrixPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/theory-implied', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetsCorrelationMatrixValidationPost operation.
     * @callback module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixValidationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetsCorrelationMatrixValidationPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Correlation Matrix Validation
     * Validate whether a matrix is an asset correlation matrix.  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 
     * @param {module:model/AssetsCorrelationMatrixValidationPostRequest} body 
     * @param {module:api/AssetsCorrelationMatrixApi~assetsCorrelationMatrixValidationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetsCorrelationMatrixValidationPost200Response}
     */
    assetsCorrelationMatrixValidationPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling assetsCorrelationMatrixValidationPost");
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
      let returnType = AssetsCorrelationMatrixValidationPost200Response;
      return this.apiClient.callApi(
        '/assets/correlation/matrix/validation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
