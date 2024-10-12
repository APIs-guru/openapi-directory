# PortfolioAnalysisSharpeRatioApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**portfolioAnalysisSharpeRatioBiasAdjustedPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioBiasAdjustedPost) | **POST** /portfolio/analysis/sharpe-ratio/bias-adjusted | Bias-Adjusted Sharpe Ratio |
| [**portfolioAnalysisSharpeRatioConfidenceIntervalPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioConfidenceIntervalPost) | **POST** /portfolio/analysis/sharpe-ratio/confidence-interval | Sharpe Ratio Confidence Interval |
| [**portfolioAnalysisSharpeRatioPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioPost) | **POST** /portfolio/analysis/sharpe-ratio | Sharpe Ratio |
| [**portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length | Minimum Track Record Length |
| [**portfolioAnalysisSharpeRatioProbabilisticPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioProbabilisticPost) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic | Probabilistic Sharpe Ratio |


<a id="portfolioAnalysisSharpeRatioBiasAdjustedPost"></a>
# **portfolioAnalysisSharpeRatioBiasAdjustedPost**
> PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response portfolioAnalysisSharpeRatioBiasAdjustedPost(body)

Bias-Adjusted Sharpe Ratio

Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisSharpeRatioApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisSharpeRatioApi apiInstance = new PortfolioAnalysisSharpeRatioApi(defaultClient);
    PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest body = new PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest(); // PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response result = apiInstance.portfolioAnalysisSharpeRatioBiasAdjustedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisSharpeRatioApi#portfolioAnalysisSharpeRatioBiasAdjustedPost");
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
| **body** | [**PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response**](PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisSharpeRatioConfidenceIntervalPost"></a>
# **portfolioAnalysisSharpeRatioConfidenceIntervalPost**
> PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response portfolioAnalysisSharpeRatioConfidenceIntervalPost(body)

Sharpe Ratio Confidence Interval

Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisSharpeRatioApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisSharpeRatioApi apiInstance = new PortfolioAnalysisSharpeRatioApi(defaultClient);
    PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest body = new PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest(); // PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response result = apiInstance.portfolioAnalysisSharpeRatioConfidenceIntervalPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisSharpeRatioApi#portfolioAnalysisSharpeRatioConfidenceIntervalPost");
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
| **body** | [**PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest**](PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response**](PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisSharpeRatioPost"></a>
# **portfolioAnalysisSharpeRatioPost**
> PortfolioAnalysisSharpeRatioPost200Response portfolioAnalysisSharpeRatioPost(body)

Sharpe Ratio

Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisSharpeRatioApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisSharpeRatioApi apiInstance = new PortfolioAnalysisSharpeRatioApi(defaultClient);
    PortfolioAnalysisSharpeRatioPostRequest body = new PortfolioAnalysisSharpeRatioPostRequest(); // PortfolioAnalysisSharpeRatioPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPost200Response result = apiInstance.portfolioAnalysisSharpeRatioPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisSharpeRatioApi#portfolioAnalysisSharpeRatioPost");
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
| **body** | [**PortfolioAnalysisSharpeRatioPostRequest**](PortfolioAnalysisSharpeRatioPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPost200Response**](PortfolioAnalysisSharpeRatioPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost"></a>
# **portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost**
> PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost(body)

Minimum Track Record Length

Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisSharpeRatioApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisSharpeRatioApi apiInstance = new PortfolioAnalysisSharpeRatioApi(defaultClient);
    PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest body = new PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest(); // PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response result = apiInstance.portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisSharpeRatioApi#portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost");
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
| **body** | [**PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest**](PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response**](PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisSharpeRatioProbabilisticPost"></a>
# **portfolioAnalysisSharpeRatioProbabilisticPost**
> PortfolioAnalysisSharpeRatioProbabilisticPost200Response portfolioAnalysisSharpeRatioProbabilisticPost(body)

Probabilistic Sharpe Ratio

Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisSharpeRatioApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisSharpeRatioApi apiInstance = new PortfolioAnalysisSharpeRatioApi(defaultClient);
    PortfolioAnalysisSharpeRatioProbabilisticPostRequest body = new PortfolioAnalysisSharpeRatioProbabilisticPostRequest(); // PortfolioAnalysisSharpeRatioProbabilisticPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioProbabilisticPost200Response result = apiInstance.portfolioAnalysisSharpeRatioProbabilisticPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisSharpeRatioApi#portfolioAnalysisSharpeRatioProbabilisticPost");
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
| **body** | [**PortfolioAnalysisSharpeRatioProbabilisticPostRequest**](PortfolioAnalysisSharpeRatioProbabilisticPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioProbabilisticPost200Response**](PortfolioAnalysisSharpeRatioProbabilisticPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

