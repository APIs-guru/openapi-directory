# PortfolioSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**portfolioSimulationRebalancingDriftWeightPost**](PortfolioSimulationApi.md#portfolioSimulationRebalancingDriftWeightPost) | **POST** /portfolio/simulation/rebalancing/drift-weight | Drift-weight Portfolio Rebalancing |
| [**portfolioSimulationRebalancingFixedWeightPost**](PortfolioSimulationApi.md#portfolioSimulationRebalancingFixedWeightPost) | **POST** /portfolio/simulation/rebalancing/fixed-weight | Fixed-weight Portfolio Rebalancing |
| [**portfolioSimulationRebalancingRandomWeightPost**](PortfolioSimulationApi.md#portfolioSimulationRebalancingRandomWeightPost) | **POST** /portfolio/simulation/rebalancing/random-weight | Random-weight Portfolio Rebalancing |


<a id="portfolioSimulationRebalancingDriftWeightPost"></a>
# **portfolioSimulationRebalancingDriftWeightPost**
> PortfolioSimulationRebalancingDriftWeightPost200Response portfolioSimulationRebalancingDriftWeightPost(body)

Drift-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract&#x3D;2746471) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioSimulationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioSimulationApi apiInstance = new PortfolioSimulationApi(defaultClient);
    PortfolioSimulationRebalancingDriftWeightPostRequest body = new PortfolioSimulationRebalancingDriftWeightPostRequest(); // PortfolioSimulationRebalancingDriftWeightPostRequest | 
    try {
      PortfolioSimulationRebalancingDriftWeightPost200Response result = apiInstance.portfolioSimulationRebalancingDriftWeightPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioSimulationApi#portfolioSimulationRebalancingDriftWeightPost");
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
| **body** | [**PortfolioSimulationRebalancingDriftWeightPostRequest**](PortfolioSimulationRebalancingDriftWeightPostRequest.md)|  | |

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioSimulationRebalancingFixedWeightPost"></a>
# **portfolioSimulationRebalancingFixedWeightPost**
> PortfolioSimulationRebalancingDriftWeightPost200Response portfolioSimulationRebalancingFixedWeightPost(body)

Fixed-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract&#x3D;2746471)         

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioSimulationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioSimulationApi apiInstance = new PortfolioSimulationApi(defaultClient);
    PortfolioSimulationRebalancingDriftWeightPostRequest body = new PortfolioSimulationRebalancingDriftWeightPostRequest(); // PortfolioSimulationRebalancingDriftWeightPostRequest | 
    try {
      PortfolioSimulationRebalancingDriftWeightPost200Response result = apiInstance.portfolioSimulationRebalancingFixedWeightPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioSimulationApi#portfolioSimulationRebalancingFixedWeightPost");
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
| **body** | [**PortfolioSimulationRebalancingDriftWeightPostRequest**](PortfolioSimulationRebalancingDriftWeightPostRequest.md)|  | |

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioSimulationRebalancingRandomWeightPost"></a>
# **portfolioSimulationRebalancingRandomWeightPost**
> PortfolioSimulationRebalancingDriftWeightPost200Response portfolioSimulationRebalancingRandomWeightPost(body)

Random-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.  References * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioSimulationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioSimulationApi apiInstance = new PortfolioSimulationApi(defaultClient);
    PortfolioSimulationRebalancingRandomWeightPostRequest body = new PortfolioSimulationRebalancingRandomWeightPostRequest(); // PortfolioSimulationRebalancingRandomWeightPostRequest | 
    try {
      PortfolioSimulationRebalancingDriftWeightPost200Response result = apiInstance.portfolioSimulationRebalancingRandomWeightPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioSimulationApi#portfolioSimulationRebalancingRandomWeightPost");
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
| **body** | [**PortfolioSimulationRebalancingRandomWeightPostRequest**](PortfolioSimulationRebalancingRandomWeightPostRequest.md)|  | |

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

