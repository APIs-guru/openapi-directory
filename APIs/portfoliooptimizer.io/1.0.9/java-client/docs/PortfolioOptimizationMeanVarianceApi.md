# PortfolioOptimizationMeanVarianceApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**portfolioOptimizationMaximumReturnDiversifiedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnDiversifiedPost) | **POST** /portfolio/optimization/maximum-return/diversified | Diversified Maximum Return Portfolio |
| [**portfolioOptimizationMaximumReturnPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnPost) | **POST** /portfolio/optimization/maximum-return | Maximum Return Portfolio |
| [**portfolioOptimizationMaximumReturnSubsetResamplingBasedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnSubsetResamplingBasedPost) | **POST** /portfolio/optimization/maximum-return/subset-resampling-based | Subset Resampling-Based Maximum Return Portfolio |
| [**portfolioOptimizationMaximumSharpeRatioDiversifiedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioDiversifiedPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio/diversified | Diversified Maximum Sharpe Ratio Portfolio |
| [**portfolioOptimizationMaximumSharpeRatioPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio | Maximum Sharpe Ratio Portfolio |
| [**portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based | Subset Resampling-Based Maximum Sharpe Ratio Portfolio |
| [**portfolioOptimizationMeanVarianceEfficientDiversifiedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientDiversifiedPost) | **POST** /portfolio/optimization/mean-variance-efficient/diversified | Diversified Mean-Variance Efficient Portfolio |
| [**portfolioOptimizationMeanVarianceEfficientPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientPost) | **POST** /portfolio/optimization/mean-variance-efficient | Mean-Variance Efficient Portfolio |
| [**portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost) | **POST** /portfolio/optimization/mean-variance-efficient/subset-resampling-based | Subset Resampling-Based Mean-Variance Efficient Portfolio |
| [**portfolioOptimizationMinimumVarianceDiversifiedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVarianceDiversifiedPost) | **POST** /portfolio/optimization/minimum-variance/diversified | Diversified Minimum Variance Portfolio |
| [**portfolioOptimizationMinimumVariancePost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVariancePost) | **POST** /portfolio/optimization/minimum-variance | Minimum Variance Portfolio |
| [**portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost) | **POST** /portfolio/optimization/minimum-variance/subset-resampling-based | Subset Resampling-Based Minimum Variance Portfolio |


<a id="portfolioOptimizationMaximumReturnDiversifiedPost"></a>
# **portfolioOptimizationMaximumReturnDiversifiedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnDiversifiedPost(body)

Diversified Maximum Return Portfolio

Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMaximumReturnDiversifiedPostRequest body = new PortfolioOptimizationMaximumReturnDiversifiedPostRequest(); // PortfolioOptimizationMaximumReturnDiversifiedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMaximumReturnDiversifiedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMaximumReturnDiversifiedPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMaximumReturnDiversifiedPostRequest**](PortfolioOptimizationMaximumReturnDiversifiedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMaximumReturnPost"></a>
# **portfolioOptimizationMaximumReturnPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnPost(body)

Maximum Return Portfolio

Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMaximumReturnPostRequest body = new PortfolioOptimizationMaximumReturnPostRequest(); // PortfolioOptimizationMaximumReturnPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMaximumReturnPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMaximumReturnPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMaximumReturnPostRequest**](PortfolioOptimizationMaximumReturnPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMaximumReturnSubsetResamplingBasedPost"></a>
# **portfolioOptimizationMaximumReturnSubsetResamplingBasedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(body)

Subset Resampling-Based Maximum Return Portfolio

Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest body = new PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest(); // PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMaximumReturnSubsetResamplingBasedPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest**](PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMaximumSharpeRatioDiversifiedPost"></a>
# **portfolioOptimizationMaximumSharpeRatioDiversifiedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioDiversifiedPost(body)

Diversified Maximum Sharpe Ratio Portfolio

Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest body = new PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest(); // PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMaximumSharpeRatioDiversifiedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMaximumSharpeRatioDiversifiedPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest**](PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMaximumSharpeRatioPost"></a>
# **portfolioOptimizationMaximumSharpeRatioPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioPost(body)

Maximum Sharpe Ratio Portfolio

Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMaximumSharpeRatioPostRequest body = new PortfolioOptimizationMaximumSharpeRatioPostRequest(); // PortfolioOptimizationMaximumSharpeRatioPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMaximumSharpeRatioPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMaximumSharpeRatioPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMaximumSharpeRatioPostRequest**](PortfolioOptimizationMaximumSharpeRatioPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost"></a>
# **portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(body)

Subset Resampling-Based Maximum Sharpe Ratio Portfolio

Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest body = new PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest(); // PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest**](PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMeanVarianceEfficientDiversifiedPost"></a>
# **portfolioOptimizationMeanVarianceEfficientDiversifiedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientDiversifiedPost(body)

Diversified Mean-Variance Efficient Portfolio

Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  &gt; A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest body = new PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest(); // PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMeanVarianceEfficientDiversifiedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMeanVarianceEfficientDiversifiedPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest**](PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMeanVarianceEfficientPost"></a>
# **portfolioOptimizationMeanVarianceEfficientPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientPost(body)

Mean-Variance Efficient Portfolio

Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  &gt; A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMeanVarianceEfficientPostRequest body = new PortfolioOptimizationMeanVarianceEfficientPostRequest(); // PortfolioOptimizationMeanVarianceEfficientPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMeanVarianceEfficientPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMeanVarianceEfficientPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMeanVarianceEfficientPostRequest**](PortfolioOptimizationMeanVarianceEfficientPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost"></a>
# **portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(body)

Subset Resampling-Based Mean-Variance Efficient Portfolio

Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest body = new PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest(); // PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest**](PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMinimumVarianceDiversifiedPost"></a>
# **portfolioOptimizationMinimumVarianceDiversifiedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVarianceDiversifiedPost(body)

Diversified Minimum Variance Portfolio

Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMinimumVarianceDiversifiedPostRequest body = new PortfolioOptimizationMinimumVarianceDiversifiedPostRequest(); // PortfolioOptimizationMinimumVarianceDiversifiedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMinimumVarianceDiversifiedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMinimumVarianceDiversifiedPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMinimumVarianceDiversifiedPostRequest**](PortfolioOptimizationMinimumVarianceDiversifiedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMinimumVariancePost"></a>
# **portfolioOptimizationMinimumVariancePost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVariancePost(body)

Minimum Variance Portfolio

Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMinimumVariancePostRequest body = new PortfolioOptimizationMinimumVariancePostRequest(); // PortfolioOptimizationMinimumVariancePostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMinimumVariancePost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMinimumVariancePost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMinimumVariancePostRequest**](PortfolioOptimizationMinimumVariancePostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost"></a>
# **portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(body)

Subset Resampling-Based Minimum Variance Portfolio

Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationMeanVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationMeanVarianceApi apiInstance = new PortfolioOptimizationMeanVarianceApi(defaultClient);
    PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest body = new PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest(); // PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationMeanVarianceApi#portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest**](PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

