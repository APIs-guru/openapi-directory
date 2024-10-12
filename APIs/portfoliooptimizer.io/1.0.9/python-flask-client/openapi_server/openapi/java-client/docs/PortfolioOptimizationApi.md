# PortfolioOptimizationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**portfolioOptimizationEqualRiskContributionsPost**](PortfolioOptimizationApi.md#portfolioOptimizationEqualRiskContributionsPost) | **POST** /portfolio/optimization/equal-risk-contributions | Equal Risk Contributions Portfolio |
| [**portfolioOptimizationEqualSharpeRatioContributionsPost**](PortfolioOptimizationApi.md#portfolioOptimizationEqualSharpeRatioContributionsPost) | **POST** /portfolio/optimization/equal-sharpe-ratio-contributions | Equal Sharpe Ratio Contributions Portfolio |
| [**portfolioOptimizationEqualVolatilityWeightedPost**](PortfolioOptimizationApi.md#portfolioOptimizationEqualVolatilityWeightedPost) | **POST** /portfolio/optimization/equal-volatility-weighted | Equal Volatility Weighted Portfolio |
| [**portfolioOptimizationEqualWeightedPost**](PortfolioOptimizationApi.md#portfolioOptimizationEqualWeightedPost) | **POST** /portfolio/optimization/equal-weighted | Equal Weighted Portfolio |
| [**portfolioOptimizationHierarchicalRiskParityClusteringBasedPost**](PortfolioOptimizationApi.md#portfolioOptimizationHierarchicalRiskParityClusteringBasedPost) | **POST** /portfolio/optimization/hierarchical-risk-parity/clustering-based | Hierarchical Clustering-Based Risk Parity Portfolio |
| [**portfolioOptimizationHierarchicalRiskParityPost**](PortfolioOptimizationApi.md#portfolioOptimizationHierarchicalRiskParityPost) | **POST** /portfolio/optimization/hierarchical-risk-parity | Hierarchical Risk Parity Portfolio |
| [**portfolioOptimizationInverseVarianceWeightedPost**](PortfolioOptimizationApi.md#portfolioOptimizationInverseVarianceWeightedPost) | **POST** /portfolio/optimization/inverse-variance-weighted | Inverse Variance Weighted Portfolio |
| [**portfolioOptimizationInverseVolatilityWeightedPost**](PortfolioOptimizationApi.md#portfolioOptimizationInverseVolatilityWeightedPost) | **POST** /portfolio/optimization/inverse-volatility-weighted | Inverse Volatility Weighted Portfolio |
| [**portfolioOptimizationMarketCapitalizationWeightedPost**](PortfolioOptimizationApi.md#portfolioOptimizationMarketCapitalizationWeightedPost) | **POST** /portfolio/optimization/market-capitalization-weighted | Market Capitalization Weighted Portfolio |
| [**portfolioOptimizationMaximumDecorrelationPost**](PortfolioOptimizationApi.md#portfolioOptimizationMaximumDecorrelationPost) | **POST** /portfolio/optimization/maximum-decorrelation | Maximum Decorrelation Portfolio |
| [**portfolioOptimizationMaximumUlcerPerformanceIndexPost**](PortfolioOptimizationApi.md#portfolioOptimizationMaximumUlcerPerformanceIndexPost) | **POST** /portfolio/optimization/maximum-ulcer-performance-index | Maximum Ulcer Performance Index Portfolio |
| [**portfolioOptimizationMinimumCorrelationPost**](PortfolioOptimizationApi.md#portfolioOptimizationMinimumCorrelationPost) | **POST** /portfolio/optimization/minimum-correlation | Minimum Correlation Portfolio |
| [**portfolioOptimizationMinimumUlcerIndexPost**](PortfolioOptimizationApi.md#portfolioOptimizationMinimumUlcerIndexPost) | **POST** /portfolio/optimization/minimum-ulcer-index | Minimum Ulcer Index Portfolio |
| [**portfolioOptimizationMostDiversifiedPost**](PortfolioOptimizationApi.md#portfolioOptimizationMostDiversifiedPost) | **POST** /portfolio/optimization/most-diversified | Most Diversified Portfolio |


<a id="portfolioOptimizationEqualRiskContributionsPost"></a>
# **portfolioOptimizationEqualRiskContributionsPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationEqualRiskContributionsPost(body)

Equal Risk Contributions Portfolio

Compute the asset weights of the equal risk contributions portfolio, optionally subject to:   * Minimum and maximum weights constraints    References  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications &amp; Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3331184) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationEqualRiskContributionsPostRequest body = new PortfolioOptimizationEqualRiskContributionsPostRequest(); // PortfolioOptimizationEqualRiskContributionsPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationEqualRiskContributionsPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationEqualRiskContributionsPost");
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
| **body** | [**PortfolioOptimizationEqualRiskContributionsPostRequest**](PortfolioOptimizationEqualRiskContributionsPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationEqualSharpeRatioContributionsPost"></a>
# **portfolioOptimizationEqualSharpeRatioContributionsPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationEqualSharpeRatioContributionsPost(body)

Equal Sharpe Ratio Contributions Portfolio

Compute the asset weights of the equal Sharpe Ratio contributions portfolio.  References  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1839166\&quot;) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationEqualSharpeRatioContributionsPostRequest body = new PortfolioOptimizationEqualSharpeRatioContributionsPostRequest(); // PortfolioOptimizationEqualSharpeRatioContributionsPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationEqualSharpeRatioContributionsPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationEqualSharpeRatioContributionsPost");
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
| **body** | [**PortfolioOptimizationEqualSharpeRatioContributionsPostRequest**](PortfolioOptimizationEqualSharpeRatioContributionsPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationEqualVolatilityWeightedPost"></a>
# **portfolioOptimizationEqualVolatilityWeightedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationEqualVolatilityWeightedPost(body)

Equal Volatility Weighted Portfolio

Compute the asset weights of the equal volatility-weighted portfolio.  References  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationEqualVolatilityWeightedPostRequest body = new PortfolioOptimizationEqualVolatilityWeightedPostRequest(); // PortfolioOptimizationEqualVolatilityWeightedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationEqualVolatilityWeightedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationEqualVolatilityWeightedPost");
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
| **body** | [**PortfolioOptimizationEqualVolatilityWeightedPostRequest**](PortfolioOptimizationEqualVolatilityWeightedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationEqualWeightedPost"></a>
# **portfolioOptimizationEqualWeightedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationEqualWeightedPost(body)

Equal Weighted Portfolio

Compute the asset weights of the equal-weighted portfolio.  References  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom&#x3D;fulltext) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    AssetsCorrelationMatrixRandomPostRequest body = new AssetsCorrelationMatrixRandomPostRequest(); // AssetsCorrelationMatrixRandomPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationEqualWeightedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationEqualWeightedPost");
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
| **body** | [**AssetsCorrelationMatrixRandomPostRequest**](AssetsCorrelationMatrixRandomPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationHierarchicalRiskParityClusteringBasedPost"></a>
# **portfolioOptimizationHierarchicalRiskParityClusteringBasedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationHierarchicalRiskParityClusteringBasedPost(body)

Hierarchical Clustering-Based Risk Parity Portfolio

Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract&#x3D;3237540)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest body = new PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest(); // PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationHierarchicalRiskParityClusteringBasedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationHierarchicalRiskParityClusteringBasedPost");
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
| **body** | [**PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest**](PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationHierarchicalRiskParityPost"></a>
# **portfolioOptimizationHierarchicalRiskParityPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationHierarchicalRiskParityPost(body)

Hierarchical Risk Parity Portfolio

Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)  * [Johann Pfitzinger &amp; Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationHierarchicalRiskParityPostRequest body = new PortfolioOptimizationHierarchicalRiskParityPostRequest(); // PortfolioOptimizationHierarchicalRiskParityPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationHierarchicalRiskParityPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationHierarchicalRiskParityPost");
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
| **body** | [**PortfolioOptimizationHierarchicalRiskParityPostRequest**](PortfolioOptimizationHierarchicalRiskParityPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationInverseVarianceWeightedPost"></a>
# **portfolioOptimizationInverseVarianceWeightedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationInverseVarianceWeightedPost(body)

Inverse Variance Weighted Portfolio

Compute the asset weights of the inverse variance-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationInverseVarianceWeightedPostRequest body = new PortfolioOptimizationInverseVarianceWeightedPostRequest(); // PortfolioOptimizationInverseVarianceWeightedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationInverseVarianceWeightedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationInverseVarianceWeightedPost");
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
| **body** | [**PortfolioOptimizationInverseVarianceWeightedPostRequest**](PortfolioOptimizationInverseVarianceWeightedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationInverseVolatilityWeightedPost"></a>
# **portfolioOptimizationInverseVolatilityWeightedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationInverseVolatilityWeightedPost(body)

Inverse Volatility Weighted Portfolio

Compute the asset weights of the inverse volatility-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationEqualVolatilityWeightedPostRequest body = new PortfolioOptimizationEqualVolatilityWeightedPostRequest(); // PortfolioOptimizationEqualVolatilityWeightedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationInverseVolatilityWeightedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationInverseVolatilityWeightedPost");
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
| **body** | [**PortfolioOptimizationEqualVolatilityWeightedPostRequest**](PortfolioOptimizationEqualVolatilityWeightedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMarketCapitalizationWeightedPost"></a>
# **portfolioOptimizationMarketCapitalizationWeightedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMarketCapitalizationWeightedPost(body)

Market Capitalization Weighted Portfolio

Compute the asset weights of the market capitalization-weighted portfolio.  References  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationMarketCapitalizationWeightedPostRequest body = new PortfolioOptimizationMarketCapitalizationWeightedPostRequest(); // PortfolioOptimizationMarketCapitalizationWeightedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMarketCapitalizationWeightedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationMarketCapitalizationWeightedPost");
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
| **body** | [**PortfolioOptimizationMarketCapitalizationWeightedPostRequest**](PortfolioOptimizationMarketCapitalizationWeightedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMaximumDecorrelationPost"></a>
# **portfolioOptimizationMaximumDecorrelationPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumDecorrelationPost(body)

Maximum Decorrelation Portfolio

Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationMaximumDecorrelationPostRequest body = new PortfolioOptimizationMaximumDecorrelationPostRequest(); // PortfolioOptimizationMaximumDecorrelationPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMaximumDecorrelationPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationMaximumDecorrelationPost");
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
| **body** | [**PortfolioOptimizationMaximumDecorrelationPostRequest**](PortfolioOptimizationMaximumDecorrelationPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMaximumUlcerPerformanceIndexPost"></a>
# **portfolioOptimizationMaximumUlcerPerformanceIndexPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumUlcerPerformanceIndexPost(body)

Maximum Ulcer Performance Index Portfolio

Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  Notes:   * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest body = new PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest(); // PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMaximumUlcerPerformanceIndexPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationMaximumUlcerPerformanceIndexPost");
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
| **body** | [**PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest**](PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMinimumCorrelationPost"></a>
# **portfolioOptimizationMinimumCorrelationPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumCorrelationPost(body)

Minimum Correlation Portfolio

Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).  References  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationMinimumCorrelationPostRequest body = new PortfolioOptimizationMinimumCorrelationPostRequest(); // PortfolioOptimizationMinimumCorrelationPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMinimumCorrelationPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationMinimumCorrelationPost");
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
| **body** | [**PortfolioOptimizationMinimumCorrelationPostRequest**](PortfolioOptimizationMinimumCorrelationPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMinimumUlcerIndexPost"></a>
# **portfolioOptimizationMinimumUlcerIndexPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumUlcerIndexPost(body)

Minimum Ulcer Index Portfolio

Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationMinimumUlcerIndexPostRequest body = new PortfolioOptimizationMinimumUlcerIndexPostRequest(); // PortfolioOptimizationMinimumUlcerIndexPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMinimumUlcerIndexPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationMinimumUlcerIndexPost");
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
| **body** | [**PortfolioOptimizationMinimumUlcerIndexPostRequest**](PortfolioOptimizationMinimumUlcerIndexPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="portfolioOptimizationMostDiversifiedPost"></a>
# **portfolioOptimizationMostDiversifiedPost**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMostDiversifiedPost(body)

Most Diversified Portfolio

Compute the asset weights of the most diversified portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PortfolioOptimizationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.portfoliooptimizer.io/v1");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PortfolioOptimizationApi apiInstance = new PortfolioOptimizationApi(defaultClient);
    PortfolioOptimizationMostDiversifiedPostRequest body = new PortfolioOptimizationMostDiversifiedPostRequest(); // PortfolioOptimizationMostDiversifiedPostRequest | 
    try {
      PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner result = apiInstance.portfolioOptimizationMostDiversifiedPost(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PortfolioOptimizationApi#portfolioOptimizationMostDiversifiedPost");
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
| **body** | [**PortfolioOptimizationMostDiversifiedPostRequest**](PortfolioOptimizationMostDiversifiedPostRequest.md)|  | |

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

