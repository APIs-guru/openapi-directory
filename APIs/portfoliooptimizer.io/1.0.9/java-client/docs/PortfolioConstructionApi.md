# PortfolioConstructionApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**portfolioConstructionInvestablePost**](PortfolioConstructionApi.md#portfolioConstructionInvestablePost) | **POST** /portfolio/construction/investable | Investable Portfolio |
| [**portfolioConstructionMimickingPost**](PortfolioConstructionApi.md#portfolioConstructionMimickingPost) | **POST** /portfolio/construction/mimicking | Mimicking Portfolio |
| [**portfolioConstructionRandomPost**](PortfolioConstructionApi.md#portfolioConstructionRandomPost) | **POST** /portfolio/construction/random | Random Portfolio |


<a id="portfolioConstructionInvestablePost"></a>
# **portfolioConstructionInvestablePost**
> PortfolioConstructionInvestablePost200Response portfolioConstructionInvestablePost(body)

Investable Portfolio

Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account: * The desired assets weights * The desired assets groups weights * The desired maximum assets groups weights * The prices of the assets * The portfolio value * The requirement to purchase some assets by round lots or by odd lots * The possibility to purchase some assets by a fractional quantity of shares * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets  References * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2261131) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioConstructionApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioConstructionApi apiInstance = new PortfolioConstructionApi(defaultClient);
    PortfolioConstructionInvestablePostRequest body = new PortfolioConstructionInvestablePostRequest(); // PortfolioConstructionInvestablePostRequest | 
    try {
      PortfolioConstructionInvestablePost200Response result = apiInstance.portfolioConstructionInvestablePost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioConstructionApi#portfolioConstructionInvestablePost");
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
| **body** | [**PortfolioConstructionInvestablePostRequest**](PortfolioConstructionInvestablePostRequest.md)|  | |

### Return type

[**PortfolioConstructionInvestablePost200Response**](PortfolioConstructionInvestablePost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioConstructionMimickingPost"></a>
# **portfolioConstructionMimickingPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioConstructionMimickingPost(body)

Mimicking Portfolio

Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioConstructionApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioConstructionApi apiInstance = new PortfolioConstructionApi(defaultClient);
    PortfolioConstructionMimickingPostRequest body = new PortfolioConstructionMimickingPostRequest(); // PortfolioConstructionMimickingPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioConstructionMimickingPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioConstructionApi#portfolioConstructionMimickingPost");
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
| **body** | [**PortfolioConstructionMimickingPostRequest**](PortfolioConstructionMimickingPostRequest.md)|  | |

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

<a id="portfolioConstructionRandomPost"></a>
# **portfolioConstructionRandomPost**
> PortfolioConstructionRandomPost200Response portfolioConstructionRandomPost(body)

Random Portfolio

Construct one or several random portfolio(s), optionally subject to:        * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  &gt; Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.  References * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1680224) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioConstructionApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioConstructionApi apiInstance = new PortfolioConstructionApi(defaultClient);
    PortfolioConstructionRandomPostRequest body = new PortfolioConstructionRandomPostRequest(); // PortfolioConstructionRandomPostRequest | 
    try {
      PortfolioConstructionRandomPost200Response result = apiInstance.portfolioConstructionRandomPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioConstructionApi#portfolioConstructionRandomPost");
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
| **body** | [**PortfolioConstructionRandomPostRequest**](PortfolioConstructionRandomPostRequest.md)|  | |

### Return type

[**PortfolioConstructionRandomPost200Response**](PortfolioConstructionRandomPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

