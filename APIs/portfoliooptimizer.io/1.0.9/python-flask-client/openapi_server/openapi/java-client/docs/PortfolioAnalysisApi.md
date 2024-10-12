# PortfolioAnalysisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**portfolioAnalysisAlphaPost**](PortfolioAnalysisApi.md#portfolioAnalysisAlphaPost) | **POST** /portfolio/analysis/alpha | Alpha |
| [**portfolioAnalysisBetaPost**](PortfolioAnalysisApi.md#portfolioAnalysisBetaPost) | **POST** /portfolio/analysis/beta | Beta |
| [**portfolioAnalysisContributionsReturnPost**](PortfolioAnalysisApi.md#portfolioAnalysisContributionsReturnPost) | **POST** /portfolio/analysis/contributions/return | Return Contributions |
| [**portfolioAnalysisContributionsRiskPost**](PortfolioAnalysisApi.md#portfolioAnalysisContributionsRiskPost) | **POST** /portfolio/analysis/contributions/risk | Risk Contributions |
| [**portfolioAnalysisCorrelationSpectrumPost**](PortfolioAnalysisApi.md#portfolioAnalysisCorrelationSpectrumPost) | **POST** /portfolio/analysis/correlation-spectrum | Correlation Spectrum |
| [**portfolioAnalysisDiversificationRatioPost**](PortfolioAnalysisApi.md#portfolioAnalysisDiversificationRatioPost) | **POST** /portfolio/analysis/diversification-ratio | Diversification Ratio |
| [**portfolioAnalysisDrawdownsPost**](PortfolioAnalysisApi.md#portfolioAnalysisDrawdownsPost) | **POST** /portfolio/analysis/drawdowns | Drawdowns |
| [**portfolioAnalysisEffectiveNumberOfBetsPost**](PortfolioAnalysisApi.md#portfolioAnalysisEffectiveNumberOfBetsPost) | **POST** /portfolio/analysis/effective-number-of-bets | Effective Number of Bets |
| [**portfolioAnalysisFactorsExposuresPost**](PortfolioAnalysisApi.md#portfolioAnalysisFactorsExposuresPost) | **POST** /portfolio/analysis/factors/exposures | Factor Exposures |
| [**portfolioAnalysisMeanVarianceEfficientFrontierPost**](PortfolioAnalysisApi.md#portfolioAnalysisMeanVarianceEfficientFrontierPost) | **POST** /portfolio/analysis/mean-variance/efficient-frontier | Mean-Variance Efficient Frontier |
| [**portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost**](PortfolioAnalysisApi.md#portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost) | **POST** /portfolio/analysis/mean-variance/minimum-variance-frontier | Mean-Variance Minimum Variance Frontier |
| [**portfolioAnalysisReturnPost**](PortfolioAnalysisApi.md#portfolioAnalysisReturnPost) | **POST** /portfolio/analysis/return | Arithmetic Return |
| [**portfolioAnalysisReturnsAveragePost**](PortfolioAnalysisApi.md#portfolioAnalysisReturnsAveragePost) | **POST** /portfolio/analysis/returns/average | Arithmetic Average Return |
| [**portfolioAnalysisTrackingErrorPost**](PortfolioAnalysisApi.md#portfolioAnalysisTrackingErrorPost) | **POST** /portfolio/analysis/tracking-error | Tracking Error |
| [**portfolioAnalysisUlcerIndexPost**](PortfolioAnalysisApi.md#portfolioAnalysisUlcerIndexPost) | **POST** /portfolio/analysis/ulcer-index | Ulcer Index |
| [**portfolioAnalysisUlcerPerformanceIndexPost**](PortfolioAnalysisApi.md#portfolioAnalysisUlcerPerformanceIndexPost) | **POST** /portfolio/analysis/ulcer-performance-index | Ulcer Performance Index |
| [**portfolioAnalysisVolatilityPost**](PortfolioAnalysisApi.md#portfolioAnalysisVolatilityPost) | **POST** /portfolio/analysis/volatility | Volatility |


<a id="portfolioAnalysisAlphaPost"></a>
# **portfolioAnalysisAlphaPost**
> PortfolioAnalysisAlphaPost200Response portfolioAnalysisAlphaPost(body)

Alpha

Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisAlphaPostRequest body = new PortfolioAnalysisAlphaPostRequest(); // PortfolioAnalysisAlphaPostRequest | 
    try {
      PortfolioAnalysisAlphaPost200Response result = apiInstance.portfolioAnalysisAlphaPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisAlphaPost");
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
| **body** | [**PortfolioAnalysisAlphaPostRequest**](PortfolioAnalysisAlphaPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisAlphaPost200Response**](PortfolioAnalysisAlphaPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisBetaPost"></a>
# **portfolioAnalysisBetaPost**
> PortfolioAnalysisBetaPost200Response portfolioAnalysisBetaPost(body)

Beta

Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisAlphaPostRequest body = new PortfolioAnalysisAlphaPostRequest(); // PortfolioAnalysisAlphaPostRequest | 
    try {
      PortfolioAnalysisBetaPost200Response result = apiInstance.portfolioAnalysisBetaPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisBetaPost");
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
| **body** | [**PortfolioAnalysisAlphaPostRequest**](PortfolioAnalysisAlphaPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisBetaPost200Response**](PortfolioAnalysisBetaPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisContributionsReturnPost"></a>
# **portfolioAnalysisContributionsReturnPost**
> PortfolioAnalysisContributionsReturnPost200Response portfolioAnalysisContributionsReturnPost(body)

Return Contributions

Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisContributionsReturnPostRequest body = new PortfolioAnalysisContributionsReturnPostRequest(); // PortfolioAnalysisContributionsReturnPostRequest | 
    try {
      PortfolioAnalysisContributionsReturnPost200Response result = apiInstance.portfolioAnalysisContributionsReturnPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisContributionsReturnPost");
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
| **body** | [**PortfolioAnalysisContributionsReturnPostRequest**](PortfolioAnalysisContributionsReturnPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisContributionsReturnPost200Response**](PortfolioAnalysisContributionsReturnPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisContributionsRiskPost"></a>
# **portfolioAnalysisContributionsRiskPost**
> PortfolioAnalysisContributionsRiskPost200Response portfolioAnalysisContributionsRiskPost(body)

Risk Contributions

Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisContributionsRiskPostRequest body = new PortfolioAnalysisContributionsRiskPostRequest(); // PortfolioAnalysisContributionsRiskPostRequest | 
    try {
      PortfolioAnalysisContributionsRiskPost200Response result = apiInstance.portfolioAnalysisContributionsRiskPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisContributionsRiskPost");
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
| **body** | [**PortfolioAnalysisContributionsRiskPostRequest**](PortfolioAnalysisContributionsRiskPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisContributionsRiskPost200Response**](PortfolioAnalysisContributionsRiskPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisCorrelationSpectrumPost"></a>
# **portfolioAnalysisCorrelationSpectrumPost**
> PortfolioAnalysisCorrelationSpectrumPost200Response portfolioAnalysisCorrelationSpectrumPost(body)

Correlation Spectrum

Compute the correlation spectrum of one or several portfolio(s).  References * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisCorrelationSpectrumPostRequest body = new PortfolioAnalysisCorrelationSpectrumPostRequest(); // PortfolioAnalysisCorrelationSpectrumPostRequest | 
    try {
      PortfolioAnalysisCorrelationSpectrumPost200Response result = apiInstance.portfolioAnalysisCorrelationSpectrumPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisCorrelationSpectrumPost");
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
| **body** | [**PortfolioAnalysisCorrelationSpectrumPostRequest**](PortfolioAnalysisCorrelationSpectrumPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisCorrelationSpectrumPost200Response**](PortfolioAnalysisCorrelationSpectrumPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisDiversificationRatioPost"></a>
# **portfolioAnalysisDiversificationRatioPost**
> PortfolioAnalysisDiversificationRatioPost200Response portfolioAnalysisDiversificationRatioPost(body)

Diversification Ratio

Compute the diversification ratio of one or several portfolio(s).  References * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisCorrelationSpectrumPostRequest body = new PortfolioAnalysisCorrelationSpectrumPostRequest(); // PortfolioAnalysisCorrelationSpectrumPostRequest | 
    try {
      PortfolioAnalysisDiversificationRatioPost200Response result = apiInstance.portfolioAnalysisDiversificationRatioPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisDiversificationRatioPost");
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
| **body** | [**PortfolioAnalysisCorrelationSpectrumPostRequest**](PortfolioAnalysisCorrelationSpectrumPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisDiversificationRatioPost200Response**](PortfolioAnalysisDiversificationRatioPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisDrawdownsPost"></a>
# **portfolioAnalysisDrawdownsPost**
> PortfolioAnalysisDrawdownsPost200Response portfolioAnalysisDrawdownsPost(body)

Drawdowns

Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).  References * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))         

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisDrawdownsPostRequest body = new PortfolioAnalysisDrawdownsPostRequest(); // PortfolioAnalysisDrawdownsPostRequest | 
    try {
      PortfolioAnalysisDrawdownsPost200Response result = apiInstance.portfolioAnalysisDrawdownsPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisDrawdownsPost");
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
| **body** | [**PortfolioAnalysisDrawdownsPostRequest**](PortfolioAnalysisDrawdownsPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisDrawdownsPost200Response**](PortfolioAnalysisDrawdownsPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisEffectiveNumberOfBetsPost"></a>
# **portfolioAnalysisEffectiveNumberOfBetsPost**
> PortfolioAnalysisEffectiveNumberOfBetsPost200Response portfolioAnalysisEffectiveNumberOfBetsPost(body)

Effective Number of Bets

Compute the effective number of bets of one or several portfolio(s).  References * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2276632) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisEffectiveNumberOfBetsPostRequest body = new PortfolioAnalysisEffectiveNumberOfBetsPostRequest(); // PortfolioAnalysisEffectiveNumberOfBetsPostRequest | 
    try {
      PortfolioAnalysisEffectiveNumberOfBetsPost200Response result = apiInstance.portfolioAnalysisEffectiveNumberOfBetsPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisEffectiveNumberOfBetsPost");
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
| **body** | [**PortfolioAnalysisEffectiveNumberOfBetsPostRequest**](PortfolioAnalysisEffectiveNumberOfBetsPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisEffectiveNumberOfBetsPost200Response**](PortfolioAnalysisEffectiveNumberOfBetsPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisFactorsExposuresPost"></a>
# **portfolioAnalysisFactorsExposuresPost**
> PortfolioAnalysisFactorsExposuresPost200Response portfolioAnalysisFactorsExposuresPost(body)

Factor Exposures

Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.  References * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)  

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisFactorsExposuresPostRequest body = new PortfolioAnalysisFactorsExposuresPostRequest(); // PortfolioAnalysisFactorsExposuresPostRequest | 
    try {
      PortfolioAnalysisFactorsExposuresPost200Response result = apiInstance.portfolioAnalysisFactorsExposuresPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisFactorsExposuresPost");
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
| **body** | [**PortfolioAnalysisFactorsExposuresPostRequest**](PortfolioAnalysisFactorsExposuresPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisFactorsExposuresPost200Response**](PortfolioAnalysisFactorsExposuresPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisMeanVarianceEfficientFrontierPost"></a>
# **portfolioAnalysisMeanVarianceEfficientFrontierPost**
> PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response portfolioAnalysisMeanVarianceEfficientFrontierPost(body)

Mean-Variance Efficient Frontier

Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest body = new PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest(); // PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest | 
    try {
      PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response result = apiInstance.portfolioAnalysisMeanVarianceEfficientFrontierPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisMeanVarianceEfficientFrontierPost");
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
| **body** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response**](PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost"></a>
# **portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost**
> PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost(body)

Mean-Variance Minimum Variance Frontier

Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  &gt; This endpoint is similar to the endpoint [&#x60;/portfolio/analysis/mean-variance/efficient-frontier&#x60;](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \&quot;top\&quot; portion of the mean-variance minimum variance frontier.  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest body = new PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest(); // PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest | 
    try {
      PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response result = apiInstance.portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost");
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
| **body** | [**PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest**](PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response**](PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisReturnPost"></a>
# **portfolioAnalysisReturnPost**
> PortfolioAnalysisReturnPost200Response portfolioAnalysisReturnPost(body)

Arithmetic Return

Compute the arithmetic return of one or several portfolio(s) from either:   * Portfolio assets arithmetic returns * Portfolio values  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisReturnPostRequest body = new PortfolioAnalysisReturnPostRequest(); // PortfolioAnalysisReturnPostRequest | 
    try {
      PortfolioAnalysisReturnPost200Response result = apiInstance.portfolioAnalysisReturnPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisReturnPost");
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
| **body** | [**PortfolioAnalysisReturnPostRequest**](PortfolioAnalysisReturnPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisReturnPost200Response**](PortfolioAnalysisReturnPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisReturnsAveragePost"></a>
# **portfolioAnalysisReturnsAveragePost**
> PortfolioAnalysisReturnsAveragePost200Response portfolioAnalysisReturnsAveragePost(body)

Arithmetic Average Return

Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisDrawdownsPostRequest body = new PortfolioAnalysisDrawdownsPostRequest(); // PortfolioAnalysisDrawdownsPostRequest | 
    try {
      PortfolioAnalysisReturnsAveragePost200Response result = apiInstance.portfolioAnalysisReturnsAveragePost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisReturnsAveragePost");
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
| **body** | [**PortfolioAnalysisDrawdownsPostRequest**](PortfolioAnalysisDrawdownsPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisReturnsAveragePost200Response**](PortfolioAnalysisReturnsAveragePost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisTrackingErrorPost"></a>
# **portfolioAnalysisTrackingErrorPost**
> PortfolioAnalysisTrackingErrorPost200Response portfolioAnalysisTrackingErrorPost(body)

Tracking Error

Compute the tracking error between a benchmark and one or several portfolio(s).  References * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)  * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisTrackingErrorPostRequest body = new PortfolioAnalysisTrackingErrorPostRequest(); // PortfolioAnalysisTrackingErrorPostRequest | 
    try {
      PortfolioAnalysisTrackingErrorPost200Response result = apiInstance.portfolioAnalysisTrackingErrorPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisTrackingErrorPost");
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
| **body** | [**PortfolioAnalysisTrackingErrorPostRequest**](PortfolioAnalysisTrackingErrorPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisTrackingErrorPost200Response**](PortfolioAnalysisTrackingErrorPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisUlcerIndexPost"></a>
# **portfolioAnalysisUlcerIndexPost**
> PortfolioAnalysisUlcerIndexPost200Response portfolioAnalysisUlcerIndexPost(body)

Ulcer Index

Compute the Ulcer Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisSharpeRatioPostRequestOneOf1 body = new PortfolioAnalysisSharpeRatioPostRequestOneOf1(); // PortfolioAnalysisSharpeRatioPostRequestOneOf1 | 
    try {
      PortfolioAnalysisUlcerIndexPost200Response result = apiInstance.portfolioAnalysisUlcerIndexPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisUlcerIndexPost");
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
| **body** | [**PortfolioAnalysisSharpeRatioPostRequestOneOf1**](PortfolioAnalysisSharpeRatioPostRequestOneOf1.md)|  | |

### Return type

[**PortfolioAnalysisUlcerIndexPost200Response**](PortfolioAnalysisUlcerIndexPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisUlcerPerformanceIndexPost"></a>
# **portfolioAnalysisUlcerPerformanceIndexPost**
> PortfolioAnalysisUlcerPerformanceIndexPost200Response portfolioAnalysisUlcerPerformanceIndexPost(body)

Ulcer Performance Index

Compute the Ulcer Performance Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisSharpeRatioPostRequestOneOf1 body = new PortfolioAnalysisSharpeRatioPostRequestOneOf1(); // PortfolioAnalysisSharpeRatioPostRequestOneOf1 | 
    try {
      PortfolioAnalysisUlcerPerformanceIndexPost200Response result = apiInstance.portfolioAnalysisUlcerPerformanceIndexPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisUlcerPerformanceIndexPost");
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
| **body** | [**PortfolioAnalysisSharpeRatioPostRequestOneOf1**](PortfolioAnalysisSharpeRatioPostRequestOneOf1.md)|  | |

### Return type

[**PortfolioAnalysisUlcerPerformanceIndexPost200Response**](PortfolioAnalysisUlcerPerformanceIndexPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioAnalysisVolatilityPost"></a>
# **portfolioAnalysisVolatilityPost**
> PortfolioAnalysisVolatilityPost200Response portfolioAnalysisVolatilityPost(body)

Volatility

Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:   * Portfolio assets covariance matrix * Portfolio values  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance) * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioAnalysisApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioAnalysisApi apiInstance = new PortfolioAnalysisApi(defaultClient);
    PortfolioAnalysisVolatilityPostRequest body = new PortfolioAnalysisVolatilityPostRequest(); // PortfolioAnalysisVolatilityPostRequest | 
    try {
      PortfolioAnalysisVolatilityPost200Response result = apiInstance.portfolioAnalysisVolatilityPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioAnalysisApi#portfolioAnalysisVolatilityPost");
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
| **body** | [**PortfolioAnalysisVolatilityPostRequest**](PortfolioAnalysisVolatilityPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisVolatilityPost200Response**](PortfolioAnalysisVolatilityPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

