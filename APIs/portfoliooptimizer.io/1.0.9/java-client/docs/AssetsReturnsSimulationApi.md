# AssetsReturnsSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsReturnsSimulationBootstrapPost**](AssetsReturnsSimulationApi.md#assetsReturnsSimulationBootstrapPost) | **POST** /assets/returns/simulation/bootstrap | Bootstrap |


<a id="assetsReturnsSimulationBootstrapPost"></a>
# **assetsReturnsSimulationBootstrapPost**
> AssetsReturnsSimulationBootstrapPost200Response assetsReturnsSimulationBootstrapPost(body)

Bootstrap

Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.  References * [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full) * [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data) * [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsReturnsSimulationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsReturnsSimulationApi apiInstance = new AssetsReturnsSimulationApi(defaultClient);
    AssetsReturnsSimulationBootstrapPostRequest body = new AssetsReturnsSimulationBootstrapPostRequest(); // AssetsReturnsSimulationBootstrapPostRequest | 
    try {
      AssetsReturnsSimulationBootstrapPost200Response result = apiInstance.assetsReturnsSimulationBootstrapPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsReturnsSimulationApi#assetsReturnsSimulationBootstrapPost");
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
| **body** | [**AssetsReturnsSimulationBootstrapPostRequest**](AssetsReturnsSimulationBootstrapPostRequest.md)|  | |

### Return type

[**AssetsReturnsSimulationBootstrapPost200Response**](AssetsReturnsSimulationBootstrapPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

