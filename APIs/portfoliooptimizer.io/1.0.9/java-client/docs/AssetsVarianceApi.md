# AssetsVarianceApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsVariancePost**](AssetsVarianceApi.md#assetsVariancePost) | **POST** /assets/variance | Variance |


<a id="assetsVariancePost"></a>
# **assetsVariancePost**
> AssetsVariancePost200Response assetsVariancePost(body)

Variance

Compute the variance of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset volatility(ies)  References * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)         

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsVarianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsVarianceApi apiInstance = new AssetsVarianceApi(defaultClient);
    AssetsVariancePostRequest body = new AssetsVariancePostRequest(); // AssetsVariancePostRequest | 
    try {
      AssetsVariancePost200Response result = apiInstance.assetsVariancePost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsVarianceApi#assetsVariancePost");
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
| **body** | [**AssetsVariancePostRequest**](AssetsVariancePostRequest.md)|  | |

### Return type

[**AssetsVariancePost200Response**](AssetsVariancePost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

