# AssetsMonteCarloReturnsSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost**](AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher/corrected | Corrected Cornish-Fisher Distribution |
| [**assetsReturnsSimulationMonteCarloCornishFisherPost**](AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloCornishFisherPost) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher | Cornish-Fisher Distribution |
| [**assetsReturnsSimulationMonteCarloGaussianPost**](AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloGaussianPost) | **POST** /assets/returns/simulation/monte-carlo/gaussian | Gaussian Distribution |


<a id="assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost"></a>
# **assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost**
> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost(body)

Corrected Cornish-Fisher Distribution

Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsMonteCarloReturnsSimulationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsMonteCarloReturnsSimulationApi apiInstance = new AssetsMonteCarloReturnsSimulationApi(defaultClient);
    AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest body = new AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest(); // AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest | 
    try {
      AssetsReturnsSimulationMonteCarloCornishFisherPost200Response result = apiInstance.assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsMonteCarloReturnsSimulationApi#assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost");
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
| **body** | [**AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest**](AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.md)|  | |

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **500** | Failed computation of Cornish-Fisher skewness and (excess) kurtosis parameters corresponding to the asset skewness and (excess) kurtosis |  -  |

<a id="assetsReturnsSimulationMonteCarloCornishFisherPost"></a>
# **assetsReturnsSimulationMonteCarloCornishFisherPost**
> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assetsReturnsSimulationMonteCarloCornishFisherPost(body)

Cornish-Fisher Distribution

Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsMonteCarloReturnsSimulationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsMonteCarloReturnsSimulationApi apiInstance = new AssetsMonteCarloReturnsSimulationApi(defaultClient);
    AssetsReturnsSimulationMonteCarloCornishFisherPostRequest body = new AssetsReturnsSimulationMonteCarloCornishFisherPostRequest(); // AssetsReturnsSimulationMonteCarloCornishFisherPostRequest | 
    try {
      AssetsReturnsSimulationMonteCarloCornishFisherPost200Response result = apiInstance.assetsReturnsSimulationMonteCarloCornishFisherPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsMonteCarloReturnsSimulationApi#assetsReturnsSimulationMonteCarloCornishFisherPost");
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
| **body** | [**AssetsReturnsSimulationMonteCarloCornishFisherPostRequest**](AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.md)|  | |

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsReturnsSimulationMonteCarloGaussianPost"></a>
# **assetsReturnsSimulationMonteCarloGaussianPost**
> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assetsReturnsSimulationMonteCarloGaussianPost(body)

Gaussian Distribution

Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.  References * [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsMonteCarloReturnsSimulationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsMonteCarloReturnsSimulationApi apiInstance = new AssetsMonteCarloReturnsSimulationApi(defaultClient);
    AssetsReturnsSimulationMonteCarloGaussianPostRequest body = new AssetsReturnsSimulationMonteCarloGaussianPostRequest(); // AssetsReturnsSimulationMonteCarloGaussianPostRequest | 
    try {
      AssetsReturnsSimulationMonteCarloCornishFisherPost200Response result = apiInstance.assetsReturnsSimulationMonteCarloGaussianPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsMonteCarloReturnsSimulationApi#assetsReturnsSimulationMonteCarloGaussianPost");
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
| **body** | [**AssetsReturnsSimulationMonteCarloGaussianPostRequest**](AssetsReturnsSimulationMonteCarloGaussianPostRequest.md)|  | |

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

