# AssetsReturnsApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsReturnsAveragePost**](AssetsReturnsApi.md#assetsReturnsAveragePost) | **POST** /assets/returns/average | Arithmetic Average Return |
| [**assetsReturnsLogarithmicPost**](AssetsReturnsApi.md#assetsReturnsLogarithmicPost) | **POST** /assets/returns/logarithmic | Logarithmic Returns |
| [**assetsReturnsPost**](AssetsReturnsApi.md#assetsReturnsPost) | **POST** /assets/returns | Arithmetic Returns |
| [**assetsReturnsTurbulencePartitionedPost**](AssetsReturnsApi.md#assetsReturnsTurbulencePartitionedPost) | **POST** /assets/returns/turbulence-partitioned | Turbulence-partitioned Asset Returns |


<a id="assetsReturnsAveragePost"></a>
# **assetsReturnsAveragePost**
> AssetsReturnsAveragePost200Response assetsReturnsAveragePost(body)

Arithmetic Average Return

Compute the arithmetic average of the return(s) of one or several asset(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsReturnsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsReturnsApi apiInstance = new AssetsReturnsApi(defaultClient);
    AssetsReturnsAveragePostRequest body = new AssetsReturnsAveragePostRequest(); // AssetsReturnsAveragePostRequest | 
    try {
      AssetsReturnsAveragePost200Response result = apiInstance.assetsReturnsAveragePost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsReturnsApi#assetsReturnsAveragePost");
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
| **body** | [**AssetsReturnsAveragePostRequest**](AssetsReturnsAveragePostRequest.md)|  | |

### Return type

[**AssetsReturnsAveragePost200Response**](AssetsReturnsAveragePost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsReturnsLogarithmicPost"></a>
# **assetsReturnsLogarithmicPost**
> AssetsReturnsLogarithmicPost200Response assetsReturnsLogarithmicPost(body)

Logarithmic Returns

Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsReturnsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsReturnsApi apiInstance = new AssetsReturnsApi(defaultClient);
    AssetsReturnsPostRequest body = new AssetsReturnsPostRequest(); // AssetsReturnsPostRequest | 
    try {
      AssetsReturnsLogarithmicPost200Response result = apiInstance.assetsReturnsLogarithmicPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsReturnsApi#assetsReturnsLogarithmicPost");
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
| **body** | [**AssetsReturnsPostRequest**](AssetsReturnsPostRequest.md)|  | |

### Return type

[**AssetsReturnsLogarithmicPost200Response**](AssetsReturnsLogarithmicPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsReturnsPost"></a>
# **assetsReturnsPost**
> AssetsReturnsPost200Response assetsReturnsPost(body)

Arithmetic Returns

Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsReturnsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsReturnsApi apiInstance = new AssetsReturnsApi(defaultClient);
    AssetsReturnsPostRequest body = new AssetsReturnsPostRequest(); // AssetsReturnsPostRequest | 
    try {
      AssetsReturnsPost200Response result = apiInstance.assetsReturnsPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsReturnsApi#assetsReturnsPost");
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
| **body** | [**AssetsReturnsPostRequest**](AssetsReturnsPostRequest.md)|  | |

### Return type

[**AssetsReturnsPost200Response**](AssetsReturnsPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsReturnsTurbulencePartitionedPost"></a>
# **assetsReturnsTurbulencePartitionedPost**
> AssetsReturnsTurbulencePartitionedPost200Response assetsReturnsTurbulencePartitionedPost(body)

Turbulence-partitioned Asset Returns

Partition asset returns into several subsets based on their turbulence index.  References * [George Chow, Jacquier, E., Kritzman, M., &amp; Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsReturnsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsReturnsApi apiInstance = new AssetsReturnsApi(defaultClient);
    AssetsReturnsTurbulencePartitionedPostRequest body = new AssetsReturnsTurbulencePartitionedPostRequest(); // AssetsReturnsTurbulencePartitionedPostRequest | 
    try {
      AssetsReturnsTurbulencePartitionedPost200Response result = apiInstance.assetsReturnsTurbulencePartitionedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsReturnsApi#assetsReturnsTurbulencePartitionedPost");
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
| **body** | [**AssetsReturnsTurbulencePartitionedPostRequest**](AssetsReturnsTurbulencePartitionedPostRequest.md)|  | |

### Return type

[**AssetsReturnsTurbulencePartitionedPost200Response**](AssetsReturnsTurbulencePartitionedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

