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


import org.openapitools.client.model.AssetsCorrelationMatrixRandomPostRequest;
import org.openapitools.client.model.PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
import org.openapitools.client.model.PortfolioOptimizationEqualRiskContributionsPostRequest;
import org.openapitools.client.model.PortfolioOptimizationEqualSharpeRatioContributionsPostRequest;
import org.openapitools.client.model.PortfolioOptimizationEqualVolatilityWeightedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationHierarchicalRiskParityPostRequest;
import org.openapitools.client.model.PortfolioOptimizationInverseVarianceWeightedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMarketCapitalizationWeightedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumDecorrelationPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumCorrelationPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumUlcerIndexPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMostDiversifiedPostRequest;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PortfolioOptimizationApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public PortfolioOptimizationApi() {
        this(Configuration.getDefaultApiClient());
    }

    public PortfolioOptimizationApi(ApiClient apiClient) {
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
     * Build call for portfolioOptimizationEqualRiskContributionsPost
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
    public okhttp3.Call portfolioOptimizationEqualRiskContributionsPostCall(PortfolioOptimizationEqualRiskContributionsPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/equal-risk-contributions";

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
    private okhttp3.Call portfolioOptimizationEqualRiskContributionsPostValidateBeforeCall(PortfolioOptimizationEqualRiskContributionsPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationEqualRiskContributionsPost(Async)");
        }

        return portfolioOptimizationEqualRiskContributionsPostCall(body, _callback);

    }

    /**
     * Equal Risk Contributions Portfolio
     * Compute the asset weights of the equal risk contributions portfolio, optionally subject to:   * Minimum and maximum weights constraints    References  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications &amp; Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3331184) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationEqualRiskContributionsPost(PortfolioOptimizationEqualRiskContributionsPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationEqualRiskContributionsPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Equal Risk Contributions Portfolio
     * Compute the asset weights of the equal risk contributions portfolio, optionally subject to:   * Minimum and maximum weights constraints    References  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications &amp; Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3331184) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationEqualRiskContributionsPostWithHttpInfo(PortfolioOptimizationEqualRiskContributionsPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationEqualRiskContributionsPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Equal Risk Contributions Portfolio (asynchronously)
     * Compute the asset weights of the equal risk contributions portfolio, optionally subject to:   * Minimum and maximum weights constraints    References  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications &amp; Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3331184) 
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
    public okhttp3.Call portfolioOptimizationEqualRiskContributionsPostAsync(PortfolioOptimizationEqualRiskContributionsPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationEqualRiskContributionsPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationEqualSharpeRatioContributionsPost
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
    public okhttp3.Call portfolioOptimizationEqualSharpeRatioContributionsPostCall(PortfolioOptimizationEqualSharpeRatioContributionsPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/equal-sharpe-ratio-contributions";

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
    private okhttp3.Call portfolioOptimizationEqualSharpeRatioContributionsPostValidateBeforeCall(PortfolioOptimizationEqualSharpeRatioContributionsPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationEqualSharpeRatioContributionsPost(Async)");
        }

        return portfolioOptimizationEqualSharpeRatioContributionsPostCall(body, _callback);

    }

    /**
     * Equal Sharpe Ratio Contributions Portfolio
     * Compute the asset weights of the equal Sharpe Ratio contributions portfolio.  References  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1839166\&quot;) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationEqualSharpeRatioContributionsPost(PortfolioOptimizationEqualSharpeRatioContributionsPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationEqualSharpeRatioContributionsPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Equal Sharpe Ratio Contributions Portfolio
     * Compute the asset weights of the equal Sharpe Ratio contributions portfolio.  References  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1839166\&quot;) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationEqualSharpeRatioContributionsPostWithHttpInfo(PortfolioOptimizationEqualSharpeRatioContributionsPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationEqualSharpeRatioContributionsPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Equal Sharpe Ratio Contributions Portfolio (asynchronously)
     * Compute the asset weights of the equal Sharpe Ratio contributions portfolio.  References  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1839166\&quot;) 
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
    public okhttp3.Call portfolioOptimizationEqualSharpeRatioContributionsPostAsync(PortfolioOptimizationEqualSharpeRatioContributionsPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationEqualSharpeRatioContributionsPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationEqualVolatilityWeightedPost
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
    public okhttp3.Call portfolioOptimizationEqualVolatilityWeightedPostCall(PortfolioOptimizationEqualVolatilityWeightedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/equal-volatility-weighted";

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
    private okhttp3.Call portfolioOptimizationEqualVolatilityWeightedPostValidateBeforeCall(PortfolioOptimizationEqualVolatilityWeightedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationEqualVolatilityWeightedPost(Async)");
        }

        return portfolioOptimizationEqualVolatilityWeightedPostCall(body, _callback);

    }

    /**
     * Equal Volatility Weighted Portfolio
     * Compute the asset weights of the equal volatility-weighted portfolio.  References  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationEqualVolatilityWeightedPost(PortfolioOptimizationEqualVolatilityWeightedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationEqualVolatilityWeightedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Equal Volatility Weighted Portfolio
     * Compute the asset weights of the equal volatility-weighted portfolio.  References  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationEqualVolatilityWeightedPostWithHttpInfo(PortfolioOptimizationEqualVolatilityWeightedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationEqualVolatilityWeightedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Equal Volatility Weighted Portfolio (asynchronously)
     * Compute the asset weights of the equal volatility-weighted portfolio.  References  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 
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
    public okhttp3.Call portfolioOptimizationEqualVolatilityWeightedPostAsync(PortfolioOptimizationEqualVolatilityWeightedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationEqualVolatilityWeightedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationEqualWeightedPost
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
    public okhttp3.Call portfolioOptimizationEqualWeightedPostCall(AssetsCorrelationMatrixRandomPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/equal-weighted";

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
    private okhttp3.Call portfolioOptimizationEqualWeightedPostValidateBeforeCall(AssetsCorrelationMatrixRandomPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationEqualWeightedPost(Async)");
        }

        return portfolioOptimizationEqualWeightedPostCall(body, _callback);

    }

    /**
     * Equal Weighted Portfolio
     * Compute the asset weights of the equal-weighted portfolio.  References  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom&#x3D;fulltext) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationEqualWeightedPost(AssetsCorrelationMatrixRandomPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationEqualWeightedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Equal Weighted Portfolio
     * Compute the asset weights of the equal-weighted portfolio.  References  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom&#x3D;fulltext) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationEqualWeightedPostWithHttpInfo(AssetsCorrelationMatrixRandomPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationEqualWeightedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Equal Weighted Portfolio (asynchronously)
     * Compute the asset weights of the equal-weighted portfolio.  References  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom&#x3D;fulltext) 
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
    public okhttp3.Call portfolioOptimizationEqualWeightedPostAsync(AssetsCorrelationMatrixRandomPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationEqualWeightedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationHierarchicalRiskParityClusteringBasedPost
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
    public okhttp3.Call portfolioOptimizationHierarchicalRiskParityClusteringBasedPostCall(PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/hierarchical-risk-parity/clustering-based";

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
    private okhttp3.Call portfolioOptimizationHierarchicalRiskParityClusteringBasedPostValidateBeforeCall(PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationHierarchicalRiskParityClusteringBasedPost(Async)");
        }

        return portfolioOptimizationHierarchicalRiskParityClusteringBasedPostCall(body, _callback);

    }

    /**
     * Hierarchical Clustering-Based Risk Parity Portfolio
     * Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract&#x3D;3237540)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationHierarchicalRiskParityClusteringBasedPost(PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationHierarchicalRiskParityClusteringBasedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Hierarchical Clustering-Based Risk Parity Portfolio
     * Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract&#x3D;3237540)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationHierarchicalRiskParityClusteringBasedPostWithHttpInfo(PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationHierarchicalRiskParityClusteringBasedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Hierarchical Clustering-Based Risk Parity Portfolio (asynchronously)
     * Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract&#x3D;3237540)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
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
    public okhttp3.Call portfolioOptimizationHierarchicalRiskParityClusteringBasedPostAsync(PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationHierarchicalRiskParityClusteringBasedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationHierarchicalRiskParityPost
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
    public okhttp3.Call portfolioOptimizationHierarchicalRiskParityPostCall(PortfolioOptimizationHierarchicalRiskParityPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/hierarchical-risk-parity";

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
    private okhttp3.Call portfolioOptimizationHierarchicalRiskParityPostValidateBeforeCall(PortfolioOptimizationHierarchicalRiskParityPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationHierarchicalRiskParityPost(Async)");
        }

        return portfolioOptimizationHierarchicalRiskParityPostCall(body, _callback);

    }

    /**
     * Hierarchical Risk Parity Portfolio
     * Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationHierarchicalRiskParityPost(PortfolioOptimizationHierarchicalRiskParityPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationHierarchicalRiskParityPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Hierarchical Risk Parity Portfolio
     * Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationHierarchicalRiskParityPostWithHttpInfo(PortfolioOptimizationHierarchicalRiskParityPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationHierarchicalRiskParityPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Hierarchical Risk Parity Portfolio (asynchronously)
     * Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 
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
    public okhttp3.Call portfolioOptimizationHierarchicalRiskParityPostAsync(PortfolioOptimizationHierarchicalRiskParityPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationHierarchicalRiskParityPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationInverseVarianceWeightedPost
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
    public okhttp3.Call portfolioOptimizationInverseVarianceWeightedPostCall(PortfolioOptimizationInverseVarianceWeightedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/inverse-variance-weighted";

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
    private okhttp3.Call portfolioOptimizationInverseVarianceWeightedPostValidateBeforeCall(PortfolioOptimizationInverseVarianceWeightedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationInverseVarianceWeightedPost(Async)");
        }

        return portfolioOptimizationInverseVarianceWeightedPostCall(body, _callback);

    }

    /**
     * Inverse Variance Weighted Portfolio
     * Compute the asset weights of the inverse variance-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationInverseVarianceWeightedPost(PortfolioOptimizationInverseVarianceWeightedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationInverseVarianceWeightedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Inverse Variance Weighted Portfolio
     * Compute the asset weights of the inverse variance-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationInverseVarianceWeightedPostWithHttpInfo(PortfolioOptimizationInverseVarianceWeightedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationInverseVarianceWeightedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Inverse Variance Weighted Portfolio (asynchronously)
     * Compute the asset weights of the inverse variance-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
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
    public okhttp3.Call portfolioOptimizationInverseVarianceWeightedPostAsync(PortfolioOptimizationInverseVarianceWeightedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationInverseVarianceWeightedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationInverseVolatilityWeightedPost
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
    public okhttp3.Call portfolioOptimizationInverseVolatilityWeightedPostCall(PortfolioOptimizationEqualVolatilityWeightedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/inverse-volatility-weighted";

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
    private okhttp3.Call portfolioOptimizationInverseVolatilityWeightedPostValidateBeforeCall(PortfolioOptimizationEqualVolatilityWeightedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationInverseVolatilityWeightedPost(Async)");
        }

        return portfolioOptimizationInverseVolatilityWeightedPostCall(body, _callback);

    }

    /**
     * Inverse Volatility Weighted Portfolio
     * Compute the asset weights of the inverse volatility-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationInverseVolatilityWeightedPost(PortfolioOptimizationEqualVolatilityWeightedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationInverseVolatilityWeightedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Inverse Volatility Weighted Portfolio
     * Compute the asset weights of the inverse volatility-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationInverseVolatilityWeightedPostWithHttpInfo(PortfolioOptimizationEqualVolatilityWeightedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationInverseVolatilityWeightedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Inverse Volatility Weighted Portfolio (asynchronously)
     * Compute the asset weights of the inverse volatility-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 
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
    public okhttp3.Call portfolioOptimizationInverseVolatilityWeightedPostAsync(PortfolioOptimizationEqualVolatilityWeightedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationInverseVolatilityWeightedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMarketCapitalizationWeightedPost
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
    public okhttp3.Call portfolioOptimizationMarketCapitalizationWeightedPostCall(PortfolioOptimizationMarketCapitalizationWeightedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/market-capitalization-weighted";

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
    private okhttp3.Call portfolioOptimizationMarketCapitalizationWeightedPostValidateBeforeCall(PortfolioOptimizationMarketCapitalizationWeightedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMarketCapitalizationWeightedPost(Async)");
        }

        return portfolioOptimizationMarketCapitalizationWeightedPostCall(body, _callback);

    }

    /**
     * Market Capitalization Weighted Portfolio
     * Compute the asset weights of the market capitalization-weighted portfolio.  References  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMarketCapitalizationWeightedPost(PortfolioOptimizationMarketCapitalizationWeightedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMarketCapitalizationWeightedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Market Capitalization Weighted Portfolio
     * Compute the asset weights of the market capitalization-weighted portfolio.  References  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMarketCapitalizationWeightedPostWithHttpInfo(PortfolioOptimizationMarketCapitalizationWeightedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMarketCapitalizationWeightedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Market Capitalization Weighted Portfolio (asynchronously)
     * Compute the asset weights of the market capitalization-weighted portfolio.  References  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index) 
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
    public okhttp3.Call portfolioOptimizationMarketCapitalizationWeightedPostAsync(PortfolioOptimizationMarketCapitalizationWeightedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMarketCapitalizationWeightedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMaximumDecorrelationPost
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
    public okhttp3.Call portfolioOptimizationMaximumDecorrelationPostCall(PortfolioOptimizationMaximumDecorrelationPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/maximum-decorrelation";

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
    private okhttp3.Call portfolioOptimizationMaximumDecorrelationPostValidateBeforeCall(PortfolioOptimizationMaximumDecorrelationPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMaximumDecorrelationPost(Async)");
        }

        return portfolioOptimizationMaximumDecorrelationPostCall(body, _callback);

    }

    /**
     * Maximum Decorrelation Portfolio
     * Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumDecorrelationPost(PortfolioOptimizationMaximumDecorrelationPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMaximumDecorrelationPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Maximum Decorrelation Portfolio
     * Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMaximumDecorrelationPostWithHttpInfo(PortfolioOptimizationMaximumDecorrelationPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMaximumDecorrelationPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Maximum Decorrelation Portfolio (asynchronously)
     * Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices) 
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
    public okhttp3.Call portfolioOptimizationMaximumDecorrelationPostAsync(PortfolioOptimizationMaximumDecorrelationPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMaximumDecorrelationPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMaximumUlcerPerformanceIndexPost
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
    public okhttp3.Call portfolioOptimizationMaximumUlcerPerformanceIndexPostCall(PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/maximum-ulcer-performance-index";

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
    private okhttp3.Call portfolioOptimizationMaximumUlcerPerformanceIndexPostValidateBeforeCall(PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMaximumUlcerPerformanceIndexPost(Async)");
        }

        return portfolioOptimizationMaximumUlcerPerformanceIndexPostCall(body, _callback);

    }

    /**
     * Maximum Ulcer Performance Index Portfolio
     * Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  Notes:   * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumUlcerPerformanceIndexPost(PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMaximumUlcerPerformanceIndexPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Maximum Ulcer Performance Index Portfolio
     * Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  Notes:   * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMaximumUlcerPerformanceIndexPostWithHttpInfo(PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMaximumUlcerPerformanceIndexPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Maximum Ulcer Performance Index Portfolio (asynchronously)
     * Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  Notes:   * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
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
    public okhttp3.Call portfolioOptimizationMaximumUlcerPerformanceIndexPostAsync(PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMaximumUlcerPerformanceIndexPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMinimumCorrelationPost
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
    public okhttp3.Call portfolioOptimizationMinimumCorrelationPostCall(PortfolioOptimizationMinimumCorrelationPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/minimum-correlation";

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
    private okhttp3.Call portfolioOptimizationMinimumCorrelationPostValidateBeforeCall(PortfolioOptimizationMinimumCorrelationPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMinimumCorrelationPost(Async)");
        }

        return portfolioOptimizationMinimumCorrelationPostCall(body, _callback);

    }

    /**
     * Minimum Correlation Portfolio
     * Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).  References  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumCorrelationPost(PortfolioOptimizationMinimumCorrelationPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMinimumCorrelationPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Minimum Correlation Portfolio
     * Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).  References  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMinimumCorrelationPostWithHttpInfo(PortfolioOptimizationMinimumCorrelationPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMinimumCorrelationPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Minimum Correlation Portfolio (asynchronously)
     * Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).  References  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/) 
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
    public okhttp3.Call portfolioOptimizationMinimumCorrelationPostAsync(PortfolioOptimizationMinimumCorrelationPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMinimumCorrelationPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMinimumUlcerIndexPost
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
    public okhttp3.Call portfolioOptimizationMinimumUlcerIndexPostCall(PortfolioOptimizationMinimumUlcerIndexPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/minimum-ulcer-index";

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
    private okhttp3.Call portfolioOptimizationMinimumUlcerIndexPostValidateBeforeCall(PortfolioOptimizationMinimumUlcerIndexPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMinimumUlcerIndexPost(Async)");
        }

        return portfolioOptimizationMinimumUlcerIndexPostCall(body, _callback);

    }

    /**
     * Minimum Ulcer Index Portfolio
     * Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumUlcerIndexPost(PortfolioOptimizationMinimumUlcerIndexPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMinimumUlcerIndexPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Minimum Ulcer Index Portfolio
     * Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMinimumUlcerIndexPostWithHttpInfo(PortfolioOptimizationMinimumUlcerIndexPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMinimumUlcerIndexPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Minimum Ulcer Index Portfolio (asynchronously)
     * Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 
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
    public okhttp3.Call portfolioOptimizationMinimumUlcerIndexPostAsync(PortfolioOptimizationMinimumUlcerIndexPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMinimumUlcerIndexPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMostDiversifiedPost
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
    public okhttp3.Call portfolioOptimizationMostDiversifiedPostCall(PortfolioOptimizationMostDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/most-diversified";

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
    private okhttp3.Call portfolioOptimizationMostDiversifiedPostValidateBeforeCall(PortfolioOptimizationMostDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMostDiversifiedPost(Async)");
        }

        return portfolioOptimizationMostDiversifiedPostCall(body, _callback);

    }

    /**
     * Most Diversified Portfolio
     * Compute the asset weights of the most diversified portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMostDiversifiedPost(PortfolioOptimizationMostDiversifiedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMostDiversifiedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Most Diversified Portfolio
     * Compute the asset weights of the most diversified portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMostDiversifiedPostWithHttpInfo(PortfolioOptimizationMostDiversifiedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMostDiversifiedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Most Diversified Portfolio (asynchronously)
     * Compute the asset weights of the most diversified portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) 
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
    public okhttp3.Call portfolioOptimizationMostDiversifiedPostAsync(PortfolioOptimizationMostDiversifiedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMostDiversifiedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
