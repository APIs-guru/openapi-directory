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


import org.openapitools.client.model.AssetsPricesAdjustedPost200Response;
import org.openapitools.client.model.AssetsPricesAdjustedPostRequest;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AssetsPricesApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public AssetsPricesApi() {
        this(Configuration.getDefaultApiClient());
    }

    public AssetsPricesApi(ApiClient apiClient) {
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
     * Build call for assetsPricesAdjustedForwardPost
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
    public okhttp3.Call assetsPricesAdjustedForwardPostCall(AssetsPricesAdjustedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/assets/prices/adjusted/forward";

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
    private okhttp3.Call assetsPricesAdjustedForwardPostValidateBeforeCall(AssetsPricesAdjustedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsPricesAdjustedForwardPost(Async)");
        }

        return assetsPricesAdjustedForwardPostCall(body, _callback);

    }

    /**
     * Forward-Adjusted Prices
     * Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that: * The price on the first date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 
     * @param body  (required)
     * @return AssetsPricesAdjustedPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsPricesAdjustedPost200Response assetsPricesAdjustedForwardPost(AssetsPricesAdjustedPostRequest body) throws ApiException {
        ApiResponse<AssetsPricesAdjustedPost200Response> localVarResp = assetsPricesAdjustedForwardPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Forward-Adjusted Prices
     * Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that: * The price on the first date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsPricesAdjustedPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsPricesAdjustedPost200Response> assetsPricesAdjustedForwardPostWithHttpInfo(AssetsPricesAdjustedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsPricesAdjustedForwardPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsPricesAdjustedPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Forward-Adjusted Prices (asynchronously)
     * Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that: * The price on the first date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 
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
    public okhttp3.Call assetsPricesAdjustedForwardPostAsync(AssetsPricesAdjustedPostRequest body, final ApiCallback<AssetsPricesAdjustedPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsPricesAdjustedForwardPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsPricesAdjustedPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for assetsPricesAdjustedPost
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
    public okhttp3.Call assetsPricesAdjustedPostCall(AssetsPricesAdjustedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/assets/prices/adjusted";

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
    private okhttp3.Call assetsPricesAdjustedPostValidateBeforeCall(AssetsPricesAdjustedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling assetsPricesAdjustedPost(Async)");
        }

        return assetsPricesAdjustedPostCall(body, _callback);

    }

    /**
     * Adjusted Prices
     * Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that: * The price on the last date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 
     * @param body  (required)
     * @return AssetsPricesAdjustedPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public AssetsPricesAdjustedPost200Response assetsPricesAdjustedPost(AssetsPricesAdjustedPostRequest body) throws ApiException {
        ApiResponse<AssetsPricesAdjustedPost200Response> localVarResp = assetsPricesAdjustedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Adjusted Prices
     * Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that: * The price on the last date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 
     * @param body  (required)
     * @return ApiResponse&lt;AssetsPricesAdjustedPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AssetsPricesAdjustedPost200Response> assetsPricesAdjustedPostWithHttpInfo(AssetsPricesAdjustedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = assetsPricesAdjustedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<AssetsPricesAdjustedPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Adjusted Prices (asynchronously)
     * Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that: * The price on the last date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 
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
    public okhttp3.Call assetsPricesAdjustedPostAsync(AssetsPricesAdjustedPostRequest body, final ApiCallback<AssetsPricesAdjustedPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = assetsPricesAdjustedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<AssetsPricesAdjustedPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
