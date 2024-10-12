# FactorsApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**factorsResidualizationPost**](FactorsApi.md#factorsResidualizationPost) | **POST** /factors/residualization | Residualization |


<a id="factorsResidualizationPost"></a>
# **factorsResidualizationPost**
> FactorsResidualizationPost200Response factorsResidualizationPost(body)

Residualization

Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.  References * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/) * [Catalina B. Garcia, Román Salmeron, Claudia Garcia &amp; Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.FactorsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    FactorsApi apiInstance = new FactorsApi(defaultClient);
    FactorsResidualizationPostRequest body = new FactorsResidualizationPostRequest(); // FactorsResidualizationPostRequest | 
    try {
      FactorsResidualizationPost200Response result = apiInstance.factorsResidualizationPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FactorsApi#factorsResidualizationPost");
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
| **body** | [**FactorsResidualizationPostRequest**](FactorsResidualizationPostRequest.md)|  | |

### Return type

[**FactorsResidualizationPost200Response**](FactorsResidualizationPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

