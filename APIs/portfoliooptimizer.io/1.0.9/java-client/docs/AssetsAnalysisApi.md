# AssetsAnalysisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetsAnalysisAbsorptionRatioPost**](AssetsAnalysisApi.md#assetsAnalysisAbsorptionRatioPost) | **POST** /assets/analysis/absorption-ratio | Absorption Ratio |
| [**assetsAnalysisTurbulenceIndexPost**](AssetsAnalysisApi.md#assetsAnalysisTurbulenceIndexPost) | **POST** /assets/analysis/turbulence-index | Turbulence Index |


<a id="assetsAnalysisAbsorptionRatioPost"></a>
# **assetsAnalysisAbsorptionRatioPost**
> AssetsAnalysisAbsorptionRatioPost200Response assetsAnalysisAbsorptionRatioPost(body)

Absorption Ratio

Compute the absorption ratio associated to a universe of assets.  References * [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsAnalysisApi apiInstance = new AssetsAnalysisApi(defaultClient);
    AssetsAnalysisAbsorptionRatioPostRequest body = new AssetsAnalysisAbsorptionRatioPostRequest(); // AssetsAnalysisAbsorptionRatioPostRequest | 
    try {
      AssetsAnalysisAbsorptionRatioPost200Response result = apiInstance.assetsAnalysisAbsorptionRatioPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsAnalysisApi#assetsAnalysisAbsorptionRatioPost");
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
| **body** | [**AssetsAnalysisAbsorptionRatioPostRequest**](AssetsAnalysisAbsorptionRatioPostRequest.md)|  | |

### Return type

[**AssetsAnalysisAbsorptionRatioPost200Response**](AssetsAnalysisAbsorptionRatioPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="assetsAnalysisTurbulenceIndexPost"></a>
# **assetsAnalysisTurbulenceIndexPost**
> AssetsAnalysisTurbulenceIndexPost200Response assetsAnalysisTurbulenceIndexPost(body)

Turbulence Index

Compute the turbulence index associated to a universe of assets.  References * [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3) * [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AssetsAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AssetsAnalysisApi apiInstance = new AssetsAnalysisApi(defaultClient);
    AssetsAnalysisTurbulenceIndexPostRequest body = new AssetsAnalysisTurbulenceIndexPostRequest(); // AssetsAnalysisTurbulenceIndexPostRequest | 
    try {
      AssetsAnalysisTurbulenceIndexPost200Response result = apiInstance.assetsAnalysisTurbulenceIndexPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AssetsAnalysisApi#assetsAnalysisTurbulenceIndexPost");
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
| **body** | [**AssetsAnalysisTurbulenceIndexPostRequest**](AssetsAnalysisTurbulenceIndexPostRequest.md)|  | |

### Return type

[**AssetsAnalysisTurbulenceIndexPost200Response**](AssetsAnalysisTurbulenceIndexPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

