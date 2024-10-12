# AssetsVolatilityApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsVolatilityPost**](AssetsVolatilityApi.md#assetsVolatilityPost) | **POST** /assets/volatility | Volatility |


<a id="assetsVolatilityPost"></a>
# **assetsVolatilityPost**
> AssetsVolatilityPost200Response assetsVolatilityPost(body)

Volatility

Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset variance(s)  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsVolatilityApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsVolatilityApi apiInstance = new AssetsVolatilityApi(defaultClient);
    AssetsVolatilityPostRequest body = new AssetsVolatilityPostRequest(); // AssetsVolatilityPostRequest | 
    try {
      AssetsVolatilityPost200Response result = apiInstance.assetsVolatilityPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsVolatilityApi#assetsVolatilityPost");
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
| **body** | [**AssetsVolatilityPostRequest**](AssetsVolatilityPostRequest.md)|  | |

### Return type

[**AssetsVolatilityPost200Response**](AssetsVolatilityPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

