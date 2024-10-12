# PortfolioAnalysisConditionalValueAtRiskApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost**](PortfolioAnalysisConditionalValueAtRiskApi.md#portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost) | **POST** /portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected | Corrected Cornish-Fisher Conditional Value At Risk |
| [**portfolioAnalysisValueAtRiskConditionalCornishFisherPost**](PortfolioAnalysisConditionalValueAtRiskApi.md#portfolioAnalysisValueAtRiskConditionalCornishFisherPost) | **POST** /portfolio/analysis/value-at-risk/conditional/cornish-fisher | Cornish-Fisher Conditional Value At Risk |
| [**portfolioAnalysisValueAtRiskConditionalGaussianPost**](PortfolioAnalysisConditionalValueAtRiskApi.md#portfolioAnalysisValueAtRiskConditionalGaussianPost) | **POST** /portfolio/analysis/value-at-risk/conditional/gaussian | Gaussian Conditional Value At Risk |
| [**portfolioAnalysisValueAtRiskConditionalHistoricalPost**](PortfolioAnalysisConditionalValueAtRiskApi.md#portfolioAnalysisValueAtRiskConditionalHistoricalPost) | **POST** /portfolio/analysis/value-at-risk/conditional/historical | Historical Conditional Value At Risk |


<a id="portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost"></a>
# **portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost**
> PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost(body)

Corrected Cornish-Fisher Conditional Value At Risk

Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisConditionalValueAtRiskApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisConditionalValueAtRiskApi apiInstance = new PortfolioAnalysisConditionalValueAtRiskApi(defaultClient);
    PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest body = new PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest(); // PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest | 
    try {
      PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response result = apiInstance.portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisConditionalValueAtRiskApi#portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost");
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
| **body** | [**PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisValueAtRiskConditionalCornishFisherPost"></a>
# **portfolioAnalysisValueAtRiskConditionalCornishFisherPost**
> PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response portfolioAnalysisValueAtRiskConditionalCornishFisherPost(body)

Cornish-Fisher Conditional Value At Risk

Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1024151). * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisConditionalValueAtRiskApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisConditionalValueAtRiskApi apiInstance = new PortfolioAnalysisConditionalValueAtRiskApi(defaultClient);
    PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest body = new PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest(); // PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest | 
    try {
      PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response result = apiInstance.portfolioAnalysisValueAtRiskConditionalCornishFisherPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisConditionalValueAtRiskApi#portfolioAnalysisValueAtRiskConditionalCornishFisherPost");
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
| **body** | [**PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisValueAtRiskConditionalGaussianPost"></a>
# **portfolioAnalysisValueAtRiskConditionalGaussianPost**
> PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response portfolioAnalysisValueAtRiskConditionalGaussianPost(body)

Gaussian Conditional Value At Risk

Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1024151). 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisConditionalValueAtRiskApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisConditionalValueAtRiskApi apiInstance = new PortfolioAnalysisConditionalValueAtRiskApi(defaultClient);
    PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest body = new PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest(); // PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest | 
    try {
      PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response result = apiInstance.portfolioAnalysisValueAtRiskConditionalGaussianPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisConditionalValueAtRiskApi#portfolioAnalysisValueAtRiskConditionalGaussianPost");
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
| **body** | [**PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest**](PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisValueAtRiskConditionalHistoricalPost"></a>
# **portfolioAnalysisValueAtRiskConditionalHistoricalPost**
> PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response portfolioAnalysisValueAtRiskConditionalHistoricalPost(body)

Historical Conditional Value At Risk

Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk) * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisConditionalValueAtRiskApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisConditionalValueAtRiskApi apiInstance = new PortfolioAnalysisConditionalValueAtRiskApi(defaultClient);
    PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest body = new PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest(); // PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest | 
    try {
      PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response result = apiInstance.portfolioAnalysisValueAtRiskConditionalHistoricalPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisConditionalValueAtRiskApi#portfolioAnalysisValueAtRiskConditionalHistoricalPost");
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
| **body** | [**PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest**](PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

