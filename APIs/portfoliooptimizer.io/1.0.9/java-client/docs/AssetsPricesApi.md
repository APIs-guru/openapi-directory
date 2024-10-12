# AssetsPricesApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsPricesAdjustedForwardPost**](AssetsPricesApi.md#assetsPricesAdjustedForwardPost) | **POST** /assets/prices/adjusted/forward | Forward-Adjusted Prices |
| [**assetsPricesAdjustedPost**](AssetsPricesApi.md#assetsPricesAdjustedPost) | **POST** /assets/prices/adjusted | Adjusted Prices |


<a id="assetsPricesAdjustedForwardPost"></a>
# **assetsPricesAdjustedForwardPost**
> AssetsPricesAdjustedPost200Response assetsPricesAdjustedForwardPost(body)

Forward-Adjusted Prices

Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that: * The price on the first date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsPricesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsPricesApi apiInstance = new AssetsPricesApi(defaultClient);
    AssetsPricesAdjustedPostRequest body = new AssetsPricesAdjustedPostRequest(); // AssetsPricesAdjustedPostRequest | 
    try {
      AssetsPricesAdjustedPost200Response result = apiInstance.assetsPricesAdjustedForwardPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsPricesApi#assetsPricesAdjustedForwardPost");
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
| **body** | [**AssetsPricesAdjustedPostRequest**](AssetsPricesAdjustedPostRequest.md)|  | |

### Return type

[**AssetsPricesAdjustedPost200Response**](AssetsPricesAdjustedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsPricesAdjustedPost"></a>
# **assetsPricesAdjustedPost**
> AssetsPricesAdjustedPost200Response assetsPricesAdjustedPost(body)

Adjusted Prices

Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that: * The price on the last date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsPricesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsPricesApi apiInstance = new AssetsPricesApi(defaultClient);
    AssetsPricesAdjustedPostRequest body = new AssetsPricesAdjustedPostRequest(); // AssetsPricesAdjustedPostRequest | 
    try {
      AssetsPricesAdjustedPost200Response result = apiInstance.assetsPricesAdjustedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsPricesApi#assetsPricesAdjustedPost");
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
| **body** | [**AssetsPricesAdjustedPostRequest**](AssetsPricesAdjustedPostRequest.md)|  | |

### Return type

[**AssetsPricesAdjustedPost200Response**](AssetsPricesAdjustedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

