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

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.AssetsCorrelationMatrixBoundsPost200Response;
import org.openapitools.client.model.AssetsCorrelationMatrixBoundsPostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixDenoisedPost200Response;
import org.openapitools.client.model.AssetsCorrelationMatrixDenoisedPostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixDistancePost200Response;
import org.openapitools.client.model.AssetsCorrelationMatrixDistancePostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixEffectiveRankPost200Response;
import org.openapitools.client.model.AssetsCorrelationMatrixEffectiveRankPostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixInformativenessPost200Response;
import org.openapitools.client.model.AssetsCorrelationMatrixInformativenessPostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixNearestPostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixPost200Response;
import org.openapitools.client.model.AssetsCorrelationMatrixPostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixRandomPostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixShrinkagePostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixTheoryImpliedPostRequest;
import org.openapitools.client.model.AssetsCorrelationMatrixValidationPost200Response;
import org.openapitools.client.model.AssetsCorrelationMatrixValidationPostRequest;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AssetsCorrelationMatrixApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public AssetsCorrelationMatrixApi() {
        this(Configuration.getDefaultApiClient());
    }

    public AssetsCorrelationMatrixApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public int getHostIndex() {
        return localHostIndex;
    }

    public void setHostIndex(int hostIndex) {
        this.localHostIndex = hostIndex;
    }

    public String getCustomBaseUrl() {
        return localCustomBaseUrl;
    }

    public void setCustomBaseUrl(String customBaseUrl) {
        this.localCustomBaseUrl = customBaseUrl;
    }

    /**
     * Build call for assetsCorrelationMatrixBoundsPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixBoundsPostCall(AssetsCorrelationMatrixBoundsPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/bounds";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixBoundsPostValidateBeforeCall(AssetsCorrelationMatrixBoundsPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixBoundsPost(Async)");
        }

        return assetsCorrelationMatrixBoundsPostCall(body, _callback);

    }

    /**
     * Correlation Matrix Bounds
     * Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.    References  * [Kawee Numpacharoen &amp; Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517). 
     * @param body  (required)
     * @return AssetsCorrelationMatrixBoundsPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixBoundsPost200Response assetsCorrelationMatrixBoundsPost(AssetsCorrelationMatrixBoundsPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixBoundsPost200Response> localVarResp = assetsCorrelationMatrixBoundsPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Correlation Matrix Bounds
     * Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.    References  * [Kawee Numpacharoen &amp; Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517). 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixBoundsPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixBoundsPost200Response> assetsCorrelationMatrixBoundsPostWithHttpInfo(AssetsCorrelationMatrixBoundsPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixBoundsPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixBoundsPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Correlation Matrix Bounds (asynchronously)
     * Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.    References  * [Kawee Numpacharoen &amp; Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517). 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixBoundsPostAsync(AssetsCorrelationMatrixBoundsPostRequest body, final ApiCallback<AssetsCorrelationMatrixBoundsPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixBoundsPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixBoundsPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixDenoisedPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixDenoisedPostCall(AssetsCorrelationMatrixDenoisedPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/denoised";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixDenoisedPostValidateBeforeCall(AssetsCorrelationMatrixDenoisedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixDenoisedPost(Async)");
        }

        return assetsCorrelationMatrixDenoisedPostCall(body, _callback);

    }

    /**
     * Denoised Correlation Matrix
     * Compute a denoised asset correlation matrix, using one of the following methods:  * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory    References  * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixDenoisedPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixDenoisedPost200Response assetsCorrelationMatrixDenoisedPost(AssetsCorrelationMatrixDenoisedPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixDenoisedPost200Response> localVarResp = assetsCorrelationMatrixDenoisedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Denoised Correlation Matrix
     * Compute a denoised asset correlation matrix, using one of the following methods:  * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory    References  * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixDenoisedPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixDenoisedPost200Response> assetsCorrelationMatrixDenoisedPostWithHttpInfo(AssetsCorrelationMatrixDenoisedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixDenoisedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixDenoisedPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Denoised Correlation Matrix (asynchronously)
     * Compute a denoised asset correlation matrix, using one of the following methods:  * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory    References  * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixDenoisedPostAsync(AssetsCorrelationMatrixDenoisedPostRequest body, final ApiCallback<AssetsCorrelationMatrixDenoisedPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixDenoisedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixDenoisedPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixDistancePost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixDistancePostCall(AssetsCorrelationMatrixDistancePostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/distance";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixDistancePostValidateBeforeCall(AssetsCorrelationMatrixDistancePostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixDistancePost(Async)");
        }

        return assetsCorrelationMatrixDistancePostCall(body, _callback);

    }

    /**
     * Correlation Matrix Distance
     * Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the second reference   References  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixDistancePost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixDistancePost200Response assetsCorrelationMatrixDistancePost(AssetsCorrelationMatrixDistancePostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixDistancePost200Response> localVarResp = assetsCorrelationMatrixDistancePostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Correlation Matrix Distance
     * Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the second reference   References  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixDistancePost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixDistancePost200Response> assetsCorrelationMatrixDistancePostWithHttpInfo(AssetsCorrelationMatrixDistancePostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixDistancePostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixDistancePost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Correlation Matrix Distance (asynchronously)
     * Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the second reference   References  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixDistancePostAsync(AssetsCorrelationMatrixDistancePostRequest body, final ApiCallback<AssetsCorrelationMatrixDistancePost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixDistancePostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixDistancePost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixEffectiveRankPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixEffectiveRankPostCall(AssetsCorrelationMatrixEffectiveRankPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/effective-rank";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixEffectiveRankPostValidateBeforeCall(AssetsCorrelationMatrixEffectiveRankPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixEffectiveRankPost(Async)");
        }

        return assetsCorrelationMatrixEffectiveRankPostCall(body, _callback);

    }

    /**
     * Correlation Matrix Effective Rank
     * Compute the effective rank of an asset correlation matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixEffectiveRankPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixEffectiveRankPost200Response assetsCorrelationMatrixEffectiveRankPost(AssetsCorrelationMatrixEffectiveRankPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixEffectiveRankPost200Response> localVarResp = assetsCorrelationMatrixEffectiveRankPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Correlation Matrix Effective Rank
     * Compute the effective rank of an asset correlation matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixEffectiveRankPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixEffectiveRankPost200Response> assetsCorrelationMatrixEffectiveRankPostWithHttpInfo(AssetsCorrelationMatrixEffectiveRankPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixEffectiveRankPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixEffectiveRankPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Correlation Matrix Effective Rank (asynchronously)
     * Compute the effective rank of an asset correlation matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixEffectiveRankPostAsync(AssetsCorrelationMatrixEffectiveRankPostRequest body, final ApiCallback<AssetsCorrelationMatrixEffectiveRankPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixEffectiveRankPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixEffectiveRankPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixInformativenessPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixInformativenessPostCall(AssetsCorrelationMatrixInformativenessPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/informativeness";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixInformativenessPostValidateBeforeCall(AssetsCorrelationMatrixInformativenessPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixInformativenessPost(Async)");
        }

        return assetsCorrelationMatrixInformativenessPostCall(body, _callback);

    }

    /**
     * Correlation Matrix Informativeness
     * Compute the informativeness of an asset correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the third reference   References  * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixInformativenessPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixInformativenessPost200Response assetsCorrelationMatrixInformativenessPost(AssetsCorrelationMatrixInformativenessPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixInformativenessPost200Response> localVarResp = assetsCorrelationMatrixInformativenessPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Correlation Matrix Informativeness
     * Compute the informativeness of an asset correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the third reference   References  * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixInformativenessPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixInformativenessPost200Response> assetsCorrelationMatrixInformativenessPostWithHttpInfo(AssetsCorrelationMatrixInformativenessPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixInformativenessPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixInformativenessPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Correlation Matrix Informativeness (asynchronously)
     * Compute the informativeness of an asset correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the third reference   References  * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixInformativenessPostAsync(AssetsCorrelationMatrixInformativenessPostRequest body, final ApiCallback<AssetsCorrelationMatrixInformativenessPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixInformativenessPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixInformativenessPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixNearestPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixNearestPostCall(AssetsCorrelationMatrixNearestPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/nearest";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixNearestPostValidateBeforeCall(AssetsCorrelationMatrixNearestPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixNearestPost(Async)");
        }

        return assetsCorrelationMatrixNearestPostCall(body, _callback);

    }

    /**
     * Nearest Correlation Matrix
     * Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.  References * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixNearestPost(AssetsCorrelationMatrixNearestPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixPost200Response> localVarResp = assetsCorrelationMatrixNearestPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Nearest Correlation Matrix
     * Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.  References * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixPost200Response> assetsCorrelationMatrixNearestPostWithHttpInfo(AssetsCorrelationMatrixNearestPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixNearestPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Nearest Correlation Matrix (asynchronously)
     * Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.  References * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixNearestPostAsync(AssetsCorrelationMatrixNearestPostRequest body, final ApiCallback<AssetsCorrelationMatrixPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixNearestPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixPostCall(AssetsCorrelationMatrixPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixPostValidateBeforeCall(AssetsCorrelationMatrixPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixPost(Async)");
        }

        return assetsCorrelationMatrixPostCall(body, _callback);

    }

    /**
     * Correlation Matrix
     * Compute the Pearson asset correlation matrix from either:   * The asset returns * The asset covariance matrix  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixPost(AssetsCorrelationMatrixPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixPost200Response> localVarResp = assetsCorrelationMatrixPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Correlation Matrix
     * Compute the Pearson asset correlation matrix from either:   * The asset returns * The asset covariance matrix  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixPost200Response> assetsCorrelationMatrixPostWithHttpInfo(AssetsCorrelationMatrixPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Correlation Matrix (asynchronously)
     * Compute the Pearson asset correlation matrix from either:   * The asset returns * The asset covariance matrix  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixPostAsync(AssetsCorrelationMatrixPostRequest body, final ApiCallback<AssetsCorrelationMatrixPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixRandomPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixRandomPostCall(AssetsCorrelationMatrixRandomPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/random";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixRandomPostValidateBeforeCall(AssetsCorrelationMatrixRandomPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixRandomPost(Async)");
        }

        return assetsCorrelationMatrixRandomPostCall(body, _callback);

    }

    /**
     * Random Correlation Matrix
     * Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.  References * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixRandomPost(AssetsCorrelationMatrixRandomPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixPost200Response> localVarResp = assetsCorrelationMatrixRandomPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Random Correlation Matrix
     * Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.  References * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixPost200Response> assetsCorrelationMatrixRandomPostWithHttpInfo(AssetsCorrelationMatrixRandomPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixRandomPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Random Correlation Matrix (asynchronously)
     * Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.  References * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixRandomPostAsync(AssetsCorrelationMatrixRandomPostRequest body, final ApiCallback<AssetsCorrelationMatrixPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixRandomPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixShrinkagePost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixShrinkagePostCall(AssetsCorrelationMatrixShrinkagePostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/shrinkage";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixShrinkagePostValidateBeforeCall(AssetsCorrelationMatrixShrinkagePostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixShrinkagePost(Async)");
        }

        return assetsCorrelationMatrixShrinkagePostCall(body, _callback);

    }

    /**
     * Correlation Matrix Shrinkage
     * Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:    * An equicorrelation matrix made of 1  * An equicorrelation matrix made of 0  * An equicorrelation matrix made of -1/(n-1), with n the number of assets  * A provided correlation matrix    References  * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1878165) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixShrinkagePost(AssetsCorrelationMatrixShrinkagePostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixPost200Response> localVarResp = assetsCorrelationMatrixShrinkagePostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Correlation Matrix Shrinkage
     * Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:    * An equicorrelation matrix made of 1  * An equicorrelation matrix made of 0  * An equicorrelation matrix made of -1/(n-1), with n the number of assets  * A provided correlation matrix    References  * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1878165) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixPost200Response> assetsCorrelationMatrixShrinkagePostWithHttpInfo(AssetsCorrelationMatrixShrinkagePostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixShrinkagePostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Correlation Matrix Shrinkage (asynchronously)
     * Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:    * An equicorrelation matrix made of 1  * An equicorrelation matrix made of 0  * An equicorrelation matrix made of -1/(n-1), with n the number of assets  * A provided correlation matrix    References  * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1878165) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixShrinkagePostAsync(AssetsCorrelationMatrixShrinkagePostRequest body, final ApiCallback<AssetsCorrelationMatrixPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixShrinkagePostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixTheoryImpliedPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixTheoryImpliedPostCall(AssetsCorrelationMatrixTheoryImpliedPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/theory-implied";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixTheoryImpliedPostValidateBeforeCall(AssetsCorrelationMatrixTheoryImpliedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixTheoryImpliedPost(Async)");
        }

        return assetsCorrelationMatrixTheoryImpliedPostCall(body, _callback);

    }

    /**
     * Theory-Implied Correlation Matrix
     * Compute the theory-implied asset correlation matrix associated with: * A hierarchical classification of a universe of assets * An asset correlation matrix  References * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3484152) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixTheoryImpliedPost(AssetsCorrelationMatrixTheoryImpliedPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixPost200Response> localVarResp = assetsCorrelationMatrixTheoryImpliedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Theory-Implied Correlation Matrix
     * Compute the theory-implied asset correlation matrix associated with: * A hierarchical classification of a universe of assets * An asset correlation matrix  References * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3484152) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixPost200Response> assetsCorrelationMatrixTheoryImpliedPostWithHttpInfo(AssetsCorrelationMatrixTheoryImpliedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixTheoryImpliedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Theory-Implied Correlation Matrix (asynchronously)
     * Compute the theory-implied asset correlation matrix associated with: * A hierarchical classification of a universe of assets * An asset correlation matrix  References * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3484152) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixTheoryImpliedPostAsync(AssetsCorrelationMatrixTheoryImpliedPostRequest body, final ApiCallback<AssetsCorrelationMatrixPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixTheoryImpliedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsCorrelationMatrixValidationPost
     * @param body  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixValidationPostCall(AssetsCorrelationMatrixValidationPostRequest body, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/assets/correlation/matrix/validation";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call assetsCorrelationMatrixValidationPostValidateBeforeCall(AssetsCorrelationMatrixValidationPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsCorrelationMatrixValidationPost(Async)");
        }

        return assetsCorrelationMatrixValidationPostCall(body, _callback);

    }

    /**
     * Correlation Matrix Validation
     * Validate whether a matrix is an asset correlation matrix.  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 
     * @param body  (required)
     * @return AssetsCorrelationMatrixValidationPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsCorrelationMatrixValidationPost200Response assetsCorrelationMatrixValidationPost(AssetsCorrelationMatrixValidationPostRequest body) throws ApiException {
        ApiResponse<AssetsCorrelationMatrixValidationPost200Response> localVarResp = assetsCorrelationMatrixValidationPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Correlation Matrix Validation
     * Validate whether a matrix is an asset correlation matrix.  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsCorrelationMatrixValidationPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsCorrelationMatrixValidationPost200Response> assetsCorrelationMatrixValidationPostWithHttpInfo(AssetsCorrelationMatrixValidationPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsCorrelationMatrixValidationPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixValidationPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Correlation Matrix Validation (asynchronously)
     * Validate whether a matrix is an asset correlation matrix.  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 
     * @param body  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call assetsCorrelationMatrixValidationPostAsync(AssetsCorrelationMatrixValidationPostRequest body, final ApiCallback<AssetsCorrelationMatrixValidationPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsCorrelationMatrixValidationPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsCorrelationMatrixValidationPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
