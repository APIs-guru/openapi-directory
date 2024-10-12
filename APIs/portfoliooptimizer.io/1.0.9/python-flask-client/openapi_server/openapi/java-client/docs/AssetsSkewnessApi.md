# AssetsSkewnessApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsSkewnessPost**](AssetsSkewnessApi.md#assetsSkewnessPost) | **POST** /assets/skewness | Skewness |


<a id="assetsSkewnessPost"></a>
# **assetsSkewnessPost**
> AssetsSkewnessPost200Response assetsSkewnessPost(body)

Skewness

Compute the skewness of one or several asset(s), from the asset returns.  References * [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsSkewnessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsSkewnessApi apiInstance = new AssetsSkewnessApi(defaultClient);
    AssetsSkewnessPostRequest body = new AssetsSkewnessPostRequest(); // AssetsSkewnessPostRequest | 
    try {
      AssetsSkewnessPost200Response result = apiInstance.assetsSkewnessPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsSkewnessApi#assetsSkewnessPost");
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
| **body** | [**AssetsSkewnessPostRequest**](AssetsSkewnessPostRequest.md)|  | |

### Return type

[**AssetsSkewnessPost200Response**](AssetsSkewnessPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

