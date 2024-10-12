# AssetsKurtosisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsKurtosisPost**](AssetsKurtosisApi.md#assetsKurtosisPost) | **POST** /assets/kurtosis | Kurtosis |


<a id="assetsKurtosisPost"></a>
# **assetsKurtosisPost**
> AssetsKurtosisPost200Response assetsKurtosisPost(body)

Kurtosis

Compute the kurtosis of one or several asset(s), from the asset returns.  References * [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsKurtosisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsKurtosisApi apiInstance = new AssetsKurtosisApi(defaultClient);
    AssetsKurtosisPostRequest body = new AssetsKurtosisPostRequest(); // AssetsKurtosisPostRequest | 
    try {
      AssetsKurtosisPost200Response result = apiInstance.assetsKurtosisPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsKurtosisApi#assetsKurtosisPost");
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
| **body** | [**AssetsKurtosisPostRequest**](AssetsKurtosisPostRequest.md)|  | |

### Return type

[**AssetsKurtosisPost200Response**](AssetsKurtosisPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

