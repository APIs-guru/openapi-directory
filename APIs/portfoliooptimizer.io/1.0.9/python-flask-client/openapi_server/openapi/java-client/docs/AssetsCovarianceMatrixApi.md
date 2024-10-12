# AssetsCovarianceMatrixApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsCovarianceMatrixEffectiveRankPost**](AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixEffectiveRankPost) | **POST** /assets/covariance/matrix/effective-rank | Covariance Matrix Effective Rank |
| [**assetsCovarianceMatrixExponentiallyWeightedPost**](AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixExponentiallyWeightedPost) | **POST** /assets/covariance/matrix/exponentially-weighted | Exponentially Weighted Covariance Matrix |
| [**assetsCovarianceMatrixPost**](AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixPost) | **POST** /assets/covariance/matrix | Covariance Matrix |
| [**assetsCovarianceMatrixValidationPost**](AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixValidationPost) | **POST** /assets/covariance/matrix/validation | Covariance Matrix Validation |


<a id="assetsCovarianceMatrixEffectiveRankPost"></a>
# **assetsCovarianceMatrixEffectiveRankPost**
> AssetsCovarianceMatrixEffectiveRankPost200Response assetsCovarianceMatrixEffectiveRankPost(body)

Covariance Matrix Effective Rank

Compute the effective rank of an asset covariance matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsCovarianceMatrixApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsCovarianceMatrixApi apiInstance = new AssetsCovarianceMatrixApi(defaultClient);
    AssetsCovarianceMatrixEffectiveRankPostRequest body = new AssetsCovarianceMatrixEffectiveRankPostRequest(); // AssetsCovarianceMatrixEffectiveRankPostRequest | 
    try {
      AssetsCovarianceMatrixEffectiveRankPost200Response result = apiInstance.assetsCovarianceMatrixEffectiveRankPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsCovarianceMatrixApi#assetsCovarianceMatrixEffectiveRankPost");
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
| **body** | [**AssetsCovarianceMatrixEffectiveRankPostRequest**](AssetsCovarianceMatrixEffectiveRankPostRequest.md)|  | |

### Return type

[**AssetsCovarianceMatrixEffectiveRankPost200Response**](AssetsCovarianceMatrixEffectiveRankPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsCovarianceMatrixExponentiallyWeightedPost"></a>
# **assetsCovarianceMatrixExponentiallyWeightedPost**
> AssetsCovarianceMatrixExponentiallyWeightedPost200Response assetsCovarianceMatrixExponentiallyWeightedPost(body)

Exponentially Weighted Covariance Matrix

Compute an exponentially weighted covariance matrix of assets returns.  References * [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsCovarianceMatrixApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsCovarianceMatrixApi apiInstance = new AssetsCovarianceMatrixApi(defaultClient);
    AssetsCovarianceMatrixExponentiallyWeightedPostRequest body = new AssetsCovarianceMatrixExponentiallyWeightedPostRequest(); // AssetsCovarianceMatrixExponentiallyWeightedPostRequest | 
    try {
      AssetsCovarianceMatrixExponentiallyWeightedPost200Response result = apiInstance.assetsCovarianceMatrixExponentiallyWeightedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsCovarianceMatrixApi#assetsCovarianceMatrixExponentiallyWeightedPost");
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
| **body** | [**AssetsCovarianceMatrixExponentiallyWeightedPostRequest**](AssetsCovarianceMatrixExponentiallyWeightedPostRequest.md)|  | |

### Return type

[**AssetsCovarianceMatrixExponentiallyWeightedPost200Response**](AssetsCovarianceMatrixExponentiallyWeightedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsCovarianceMatrixPost"></a>
# **assetsCovarianceMatrixPost**
> AssetsCovarianceMatrixPost200Response assetsCovarianceMatrixPost(body)

Covariance Matrix

Compute the covariance matrix of assets from either:   * The asset correlation matrix and their volatilities (i.e., standard deviations) * The asset correlation matrix and their variances * The asset returns  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsCovarianceMatrixApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsCovarianceMatrixApi apiInstance = new AssetsCovarianceMatrixApi(defaultClient);
    AssetsCovarianceMatrixPostRequest body = new AssetsCovarianceMatrixPostRequest(); // AssetsCovarianceMatrixPostRequest | 
    try {
      AssetsCovarianceMatrixPost200Response result = apiInstance.assetsCovarianceMatrixPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsCovarianceMatrixApi#assetsCovarianceMatrixPost");
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
| **body** | [**AssetsCovarianceMatrixPostRequest**](AssetsCovarianceMatrixPostRequest.md)|  | |

### Return type

[**AssetsCovarianceMatrixPost200Response**](AssetsCovarianceMatrixPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsCovarianceMatrixValidationPost"></a>
# **assetsCovarianceMatrixValidationPost**
> AssetsCovarianceMatrixValidationPost200Response assetsCovarianceMatrixValidationPost(body)

Covariance Matrix Validation

Validate whether a matrix is a covariance matrix.  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsCovarianceMatrixApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsCovarianceMatrixApi apiInstance = new AssetsCovarianceMatrixApi(defaultClient);
    AssetsCorrelationMatrixPostRequestOneOf1 body = new AssetsCorrelationMatrixPostRequestOneOf1(); // AssetsCorrelationMatrixPostRequestOneOf1 | 
    try {
      AssetsCovarianceMatrixValidationPost200Response result = apiInstance.assetsCovarianceMatrixValidationPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsCovarianceMatrixApi#assetsCovarianceMatrixValidationPost");
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
| **body** | [**AssetsCorrelationMatrixPostRequestOneOf1**](AssetsCorrelationMatrixPostRequestOneOf1.md)|  | |

### Return type

[**AssetsCovarianceMatrixValidationPost200Response**](AssetsCovarianceMatrixValidationPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

