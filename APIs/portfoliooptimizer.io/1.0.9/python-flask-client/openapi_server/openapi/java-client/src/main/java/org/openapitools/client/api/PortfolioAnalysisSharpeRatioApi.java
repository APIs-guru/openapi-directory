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


import org.openapitools.client.model.PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioPost200Response;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioPostRequest;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioProbabilisticPost200Response;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioProbabilisticPostRequest;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PortfolioAnalysisSharpeRatioApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public PortfolioAnalysisSharpeRatioApi() {
        this(Configuration.getDefaultApiClient());
    }

    public PortfolioAnalysisSharpeRatioApi(ApiClient apiClient) {
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
     * Build call for portfolioAnalysisSharpeRatioBiasAdjustedPost
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
    public okhttp3.Call portfolioAnalysisSharpeRatioBiasAdjustedPostCall(PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/analysis/sharpe-ratio/bias-adjusted";

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
    private okhttp3.Call portfolioAnalysisSharpeRatioBiasAdjustedPostValidateBeforeCall(PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioBiasAdjustedPost(Async)");
        }

        return portfolioAnalysisSharpeRatioBiasAdjustedPostCall(body, _callback);

    }

    /**
     * Bias-Adjusted Sharpe Ratio
     * Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response portfolioAnalysisSharpeRatioBiasAdjustedPost(PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response> localVarResp = portfolioAnalysisSharpeRatioBiasAdjustedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Bias-Adjusted Sharpe Ratio
     * Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response> portfolioAnalysisSharpeRatioBiasAdjustedPostWithHttpInfo(PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioBiasAdjustedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Bias-Adjusted Sharpe Ratio (asynchronously)
     * Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 
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
    public okhttp3.Call portfolioAnalysisSharpeRatioBiasAdjustedPostAsync(PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioBiasAdjustedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioAnalysisSharpeRatioConfidenceIntervalPost
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
    public okhttp3.Call portfolioAnalysisSharpeRatioConfidenceIntervalPostCall(PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/analysis/sharpe-ratio/confidence-interval";

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
    private okhttp3.Call portfolioAnalysisSharpeRatioConfidenceIntervalPostValidateBeforeCall(PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioConfidenceIntervalPost(Async)");
        }

        return portfolioAnalysisSharpeRatioConfidenceIntervalPostCall(body, _callback);

    }

    /**
     * Sharpe Ratio Confidence Interval
     * Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response portfolioAnalysisSharpeRatioConfidenceIntervalPost(PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response> localVarResp = portfolioAnalysisSharpeRatioConfidenceIntervalPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Sharpe Ratio Confidence Interval
     * Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response> portfolioAnalysisSharpeRatioConfidenceIntervalPostWithHttpInfo(PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioConfidenceIntervalPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Sharpe Ratio Confidence Interval (asynchronously)
     * Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 
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
    public okhttp3.Call portfolioAnalysisSharpeRatioConfidenceIntervalPostAsync(PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioConfidenceIntervalPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioAnalysisSharpeRatioPost
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
    public okhttp3.Call portfolioAnalysisSharpeRatioPostCall(PortfolioAnalysisSharpeRatioPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/analysis/sharpe-ratio";

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
    private okhttp3.Call portfolioAnalysisSharpeRatioPostValidateBeforeCall(PortfolioAnalysisSharpeRatioPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioPost(Async)");
        }

        return portfolioAnalysisSharpeRatioPostCall(body, _callback);

    }

    /**
     * Sharpe Ratio
     * Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPost200Response portfolioAnalysisSharpeRatioPost(PortfolioAnalysisSharpeRatioPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPost200Response> localVarResp = portfolioAnalysisSharpeRatioPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Sharpe Ratio
     * Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPost200Response> portfolioAnalysisSharpeRatioPostWithHttpInfo(PortfolioAnalysisSharpeRatioPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Sharpe Ratio (asynchronously)
     * Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioAnalysisSharpeRatioPostAsync(PortfolioAnalysisSharpeRatioPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost
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
    public okhttp3.Call portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostCall(PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length";

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
    private okhttp3.Call portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostValidateBeforeCall(PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost(Async)");
        }

        return portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostCall(body, _callback);

    }

    /**
     * Minimum Track Record Length
     * Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost(PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response> localVarResp = portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Minimum Track Record Length
     * Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response> portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostWithHttpInfo(PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Minimum Track Record Length (asynchronously)
     * Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 
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
    public okhttp3.Call portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostAsync(PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioAnalysisSharpeRatioProbabilisticPost
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
    public okhttp3.Call portfolioAnalysisSharpeRatioProbabilisticPostCall(PortfolioAnalysisSharpeRatioProbabilisticPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/analysis/sharpe-ratio/probabilistic";

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
    private okhttp3.Call portfolioAnalysisSharpeRatioProbabilisticPostValidateBeforeCall(PortfolioAnalysisSharpeRatioProbabilisticPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioAnalysisSharpeRatioProbabilisticPost(Async)");
        }

        return portfolioAnalysisSharpeRatioProbabilisticPostCall(body, _callback);

    }

    /**
     * Probabilistic Sharpe Ratio
     * Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioProbabilisticPost200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioProbabilisticPost200Response portfolioAnalysisSharpeRatioProbabilisticPost(PortfolioAnalysisSharpeRatioProbabilisticPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioProbabilisticPost200Response> localVarResp = portfolioAnalysisSharpeRatioProbabilisticPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Probabilistic Sharpe Ratio
     * Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioProbabilisticPost200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioProbabilisticPost200Response> portfolioAnalysisSharpeRatioProbabilisticPostWithHttpInfo(PortfolioAnalysisSharpeRatioProbabilisticPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioProbabilisticPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioProbabilisticPost200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Probabilistic Sharpe Ratio (asynchronously)
     * Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 
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
    public okhttp3.Call portfolioAnalysisSharpeRatioProbabilisticPostAsync(PortfolioAnalysisSharpeRatioProbabilisticPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioProbabilisticPost200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioAnalysisSharpeRatioProbabilisticPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioProbabilisticPost200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
