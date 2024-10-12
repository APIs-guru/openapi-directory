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


import org.openapitools.client.model.PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner;
import org.openapitools.client.model.PortfolioOptimizationMaximumReturnDiversifiedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumReturnPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumSharpeRatioPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMeanVarianceEfficientPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumVarianceDiversifiedPostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumVariancePostRequest;
import org.openapitools.client.model.PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PortfolioOptimizationMeanVarianceApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public PortfolioOptimizationMeanVarianceApi() {
        this(Configuration.getDefaultApiClient());
    }

    public PortfolioOptimizationMeanVarianceApi(ApiClient apiClient) {
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
     * Build call for portfolioOptimizationMaximumReturnDiversifiedPost
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
    public okhttp3.Call portfolioOptimizationMaximumReturnDiversifiedPostCall(PortfolioOptimizationMaximumReturnDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/maximum-return/diversified";

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
    private okhttp3.Call portfolioOptimizationMaximumReturnDiversifiedPostValidateBeforeCall(PortfolioOptimizationMaximumReturnDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMaximumReturnDiversifiedPost(Async)");
        }

        return portfolioOptimizationMaximumReturnDiversifiedPostCall(body, _callback);

    }

    /**
     * Diversified Maximum Return Portfolio
     * Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnDiversifiedPost(PortfolioOptimizationMaximumReturnDiversifiedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMaximumReturnDiversifiedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Diversified Maximum Return Portfolio
     * Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMaximumReturnDiversifiedPostWithHttpInfo(PortfolioOptimizationMaximumReturnDiversifiedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMaximumReturnDiversifiedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Diversified Maximum Return Portfolio (asynchronously)
     * Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMaximumReturnDiversifiedPostAsync(PortfolioOptimizationMaximumReturnDiversifiedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMaximumReturnDiversifiedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMaximumReturnPost
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
    public okhttp3.Call portfolioOptimizationMaximumReturnPostCall(PortfolioOptimizationMaximumReturnPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/maximum-return";

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
    private okhttp3.Call portfolioOptimizationMaximumReturnPostValidateBeforeCall(PortfolioOptimizationMaximumReturnPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMaximumReturnPost(Async)");
        }

        return portfolioOptimizationMaximumReturnPostCall(body, _callback);

    }

    /**
     * Maximum Return Portfolio
     * Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnPost(PortfolioOptimizationMaximumReturnPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMaximumReturnPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Maximum Return Portfolio
     * Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMaximumReturnPostWithHttpInfo(PortfolioOptimizationMaximumReturnPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMaximumReturnPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Maximum Return Portfolio (asynchronously)
     * Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMaximumReturnPostAsync(PortfolioOptimizationMaximumReturnPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMaximumReturnPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMaximumReturnSubsetResamplingBasedPost
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
    public okhttp3.Call portfolioOptimizationMaximumReturnSubsetResamplingBasedPostCall(PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/maximum-return/subset-resampling-based";

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
    private okhttp3.Call portfolioOptimizationMaximumReturnSubsetResamplingBasedPostValidateBeforeCall(PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(Async)");
        }

        return portfolioOptimizationMaximumReturnSubsetResamplingBasedPostCall(body, _callback);

    }

    /**
     * Subset Resampling-Based Maximum Return Portfolio
     * Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMaximumReturnSubsetResamplingBasedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Subset Resampling-Based Maximum Return Portfolio
     * Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMaximumReturnSubsetResamplingBasedPostWithHttpInfo(PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMaximumReturnSubsetResamplingBasedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Subset Resampling-Based Maximum Return Portfolio (asynchronously)
     * Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMaximumReturnSubsetResamplingBasedPostAsync(PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMaximumReturnSubsetResamplingBasedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMaximumSharpeRatioDiversifiedPost
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
    public okhttp3.Call portfolioOptimizationMaximumSharpeRatioDiversifiedPostCall(PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/maximum-sharpe-ratio/diversified";

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
    private okhttp3.Call portfolioOptimizationMaximumSharpeRatioDiversifiedPostValidateBeforeCall(PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMaximumSharpeRatioDiversifiedPost(Async)");
        }

        return portfolioOptimizationMaximumSharpeRatioDiversifiedPostCall(body, _callback);

    }

    /**
     * Diversified Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioDiversifiedPost(PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMaximumSharpeRatioDiversifiedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Diversified Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMaximumSharpeRatioDiversifiedPostWithHttpInfo(PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMaximumSharpeRatioDiversifiedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Diversified Maximum Sharpe Ratio Portfolio (asynchronously)
     * Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMaximumSharpeRatioDiversifiedPostAsync(PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMaximumSharpeRatioDiversifiedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMaximumSharpeRatioPost
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
    public okhttp3.Call portfolioOptimizationMaximumSharpeRatioPostCall(PortfolioOptimizationMaximumSharpeRatioPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/maximum-sharpe-ratio";

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
    private okhttp3.Call portfolioOptimizationMaximumSharpeRatioPostValidateBeforeCall(PortfolioOptimizationMaximumSharpeRatioPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMaximumSharpeRatioPost(Async)");
        }

        return portfolioOptimizationMaximumSharpeRatioPostCall(body, _callback);

    }

    /**
     * Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioPost(PortfolioOptimizationMaximumSharpeRatioPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMaximumSharpeRatioPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMaximumSharpeRatioPostWithHttpInfo(PortfolioOptimizationMaximumSharpeRatioPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMaximumSharpeRatioPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Maximum Sharpe Ratio Portfolio (asynchronously)
     * Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMaximumSharpeRatioPostAsync(PortfolioOptimizationMaximumSharpeRatioPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMaximumSharpeRatioPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost
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
    public okhttp3.Call portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostCall(PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based";

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
    private okhttp3.Call portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostValidateBeforeCall(PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(Async)");
        }

        return portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostCall(body, _callback);

    }

    /**
     * Subset Resampling-Based Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Subset Resampling-Based Maximum Sharpe Ratio Portfolio
     * Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostWithHttpInfo(PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Subset Resampling-Based Maximum Sharpe Ratio Portfolio (asynchronously)
     * Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostAsync(PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMeanVarianceEfficientDiversifiedPost
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
    public okhttp3.Call portfolioOptimizationMeanVarianceEfficientDiversifiedPostCall(PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/mean-variance-efficient/diversified";

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
    private okhttp3.Call portfolioOptimizationMeanVarianceEfficientDiversifiedPostValidateBeforeCall(PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMeanVarianceEfficientDiversifiedPost(Async)");
        }

        return portfolioOptimizationMeanVarianceEfficientDiversifiedPostCall(body, _callback);

    }

    /**
     * Diversified Mean-Variance Efficient Portfolio
     * Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  &gt; A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientDiversifiedPost(PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMeanVarianceEfficientDiversifiedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Diversified Mean-Variance Efficient Portfolio
     * Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  &gt; A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMeanVarianceEfficientDiversifiedPostWithHttpInfo(PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMeanVarianceEfficientDiversifiedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Diversified Mean-Variance Efficient Portfolio (asynchronously)
     * Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  &gt; A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMeanVarianceEfficientDiversifiedPostAsync(PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMeanVarianceEfficientDiversifiedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMeanVarianceEfficientPost
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
    public okhttp3.Call portfolioOptimizationMeanVarianceEfficientPostCall(PortfolioOptimizationMeanVarianceEfficientPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/mean-variance-efficient";

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
    private okhttp3.Call portfolioOptimizationMeanVarianceEfficientPostValidateBeforeCall(PortfolioOptimizationMeanVarianceEfficientPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMeanVarianceEfficientPost(Async)");
        }

        return portfolioOptimizationMeanVarianceEfficientPostCall(body, _callback);

    }

    /**
     * Mean-Variance Efficient Portfolio
     * Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  &gt; A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientPost(PortfolioOptimizationMeanVarianceEfficientPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMeanVarianceEfficientPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Mean-Variance Efficient Portfolio
     * Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  &gt; A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMeanVarianceEfficientPostWithHttpInfo(PortfolioOptimizationMeanVarianceEfficientPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMeanVarianceEfficientPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Mean-Variance Efficient Portfolio (asynchronously)
     * Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  &gt; A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMeanVarianceEfficientPostAsync(PortfolioOptimizationMeanVarianceEfficientPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMeanVarianceEfficientPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost
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
    public okhttp3.Call portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostCall(PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/mean-variance-efficient/subset-resampling-based";

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
    private okhttp3.Call portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostValidateBeforeCall(PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(Async)");
        }

        return portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostCall(body, _callback);

    }

    /**
     * Subset Resampling-Based Mean-Variance Efficient Portfolio
     * Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Subset Resampling-Based Mean-Variance Efficient Portfolio
     * Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostWithHttpInfo(PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Subset Resampling-Based Mean-Variance Efficient Portfolio (asynchronously)
     * Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostAsync(PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMinimumVarianceDiversifiedPost
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
    public okhttp3.Call portfolioOptimizationMinimumVarianceDiversifiedPostCall(PortfolioOptimizationMinimumVarianceDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/minimum-variance/diversified";

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
    private okhttp3.Call portfolioOptimizationMinimumVarianceDiversifiedPostValidateBeforeCall(PortfolioOptimizationMinimumVarianceDiversifiedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMinimumVarianceDiversifiedPost(Async)");
        }

        return portfolioOptimizationMinimumVarianceDiversifiedPostCall(body, _callback);

    }

    /**
     * Diversified Minimum Variance Portfolio
     * Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVarianceDiversifiedPost(PortfolioOptimizationMinimumVarianceDiversifiedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMinimumVarianceDiversifiedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Diversified Minimum Variance Portfolio
     * Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMinimumVarianceDiversifiedPostWithHttpInfo(PortfolioOptimizationMinimumVarianceDiversifiedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMinimumVarianceDiversifiedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Diversified Minimum Variance Portfolio (asynchronously)
     * Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMinimumVarianceDiversifiedPostAsync(PortfolioOptimizationMinimumVarianceDiversifiedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMinimumVarianceDiversifiedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMinimumVariancePost
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
    public okhttp3.Call portfolioOptimizationMinimumVariancePostCall(PortfolioOptimizationMinimumVariancePostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/minimum-variance";

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
    private okhttp3.Call portfolioOptimizationMinimumVariancePostValidateBeforeCall(PortfolioOptimizationMinimumVariancePostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMinimumVariancePost(Async)");
        }

        return portfolioOptimizationMinimumVariancePostCall(body, _callback);

    }

    /**
     * Minimum Variance Portfolio
     * Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVariancePost(PortfolioOptimizationMinimumVariancePostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMinimumVariancePostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Minimum Variance Portfolio
     * Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMinimumVariancePostWithHttpInfo(PortfolioOptimizationMinimumVariancePostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMinimumVariancePostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Minimum Variance Portfolio (asynchronously)
     * Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMinimumVariancePostAsync(PortfolioOptimizationMinimumVariancePostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMinimumVariancePostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost
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
    public okhttp3.Call portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostCall(PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest body, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/portfolio/optimization/minimum-variance/subset-resampling-based";

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
    private okhttp3.Call portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostValidateBeforeCall(PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest body, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(Async)");
        }

        return portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostCall(body, _callback);

    }

    /**
     * Subset Resampling-Based Minimum Variance Portfolio
     * Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest body) throws ApiException {
        ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> localVarResp = portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostWithHttpInfo(body);
        return localVarResp.getData();
    }

    /**
     * Subset Resampling-Based Minimum Variance Portfolio
     * Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
     * @param body  (required)
     * @return ApiResponse&lt;PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostWithHttpInfo(PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest body) throws ApiException {
        okhttp3.Call localVarCall = portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostValidateBeforeCall(body, null);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Subset Resampling-Based Minimum Variance Portfolio (asynchronously)
     * Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 
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
    public okhttp3.Call portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostAsync(PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest body, final ApiCallback<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner> _callback) throws ApiException {

        okhttp3.Call localVarCall = portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostValidateBeforeCall(body, _callback);
        Type localVarReturnType = new TypeToken<PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
