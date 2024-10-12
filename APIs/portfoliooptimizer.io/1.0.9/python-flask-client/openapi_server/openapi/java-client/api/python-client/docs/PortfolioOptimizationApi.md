# openapi_client.PortfolioOptimizationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolio_optimization_equal_risk_contributions_post**](PortfolioOptimizationApi.md#portfolio_optimization_equal_risk_contributions_post) | **POST** /portfolio/optimization/equal-risk-contributions | Equal Risk Contributions Portfolio
[**portfolio_optimization_equal_sharpe_ratio_contributions_post**](PortfolioOptimizationApi.md#portfolio_optimization_equal_sharpe_ratio_contributions_post) | **POST** /portfolio/optimization/equal-sharpe-ratio-contributions | Equal Sharpe Ratio Contributions Portfolio
[**portfolio_optimization_equal_volatility_weighted_post**](PortfolioOptimizationApi.md#portfolio_optimization_equal_volatility_weighted_post) | **POST** /portfolio/optimization/equal-volatility-weighted | Equal Volatility Weighted Portfolio
[**portfolio_optimization_equal_weighted_post**](PortfolioOptimizationApi.md#portfolio_optimization_equal_weighted_post) | **POST** /portfolio/optimization/equal-weighted | Equal Weighted Portfolio
[**portfolio_optimization_hierarchical_risk_parity_clustering_based_post**](PortfolioOptimizationApi.md#portfolio_optimization_hierarchical_risk_parity_clustering_based_post) | **POST** /portfolio/optimization/hierarchical-risk-parity/clustering-based | Hierarchical Clustering-Based Risk Parity Portfolio
[**portfolio_optimization_hierarchical_risk_parity_post**](PortfolioOptimizationApi.md#portfolio_optimization_hierarchical_risk_parity_post) | **POST** /portfolio/optimization/hierarchical-risk-parity | Hierarchical Risk Parity Portfolio
[**portfolio_optimization_inverse_variance_weighted_post**](PortfolioOptimizationApi.md#portfolio_optimization_inverse_variance_weighted_post) | **POST** /portfolio/optimization/inverse-variance-weighted | Inverse Variance Weighted Portfolio
[**portfolio_optimization_inverse_volatility_weighted_post**](PortfolioOptimizationApi.md#portfolio_optimization_inverse_volatility_weighted_post) | **POST** /portfolio/optimization/inverse-volatility-weighted | Inverse Volatility Weighted Portfolio
[**portfolio_optimization_market_capitalization_weighted_post**](PortfolioOptimizationApi.md#portfolio_optimization_market_capitalization_weighted_post) | **POST** /portfolio/optimization/market-capitalization-weighted | Market Capitalization Weighted Portfolio
[**portfolio_optimization_maximum_decorrelation_post**](PortfolioOptimizationApi.md#portfolio_optimization_maximum_decorrelation_post) | **POST** /portfolio/optimization/maximum-decorrelation | Maximum Decorrelation Portfolio
[**portfolio_optimization_maximum_ulcer_performance_index_post**](PortfolioOptimizationApi.md#portfolio_optimization_maximum_ulcer_performance_index_post) | **POST** /portfolio/optimization/maximum-ulcer-performance-index | Maximum Ulcer Performance Index Portfolio
[**portfolio_optimization_minimum_correlation_post**](PortfolioOptimizationApi.md#portfolio_optimization_minimum_correlation_post) | **POST** /portfolio/optimization/minimum-correlation | Minimum Correlation Portfolio
[**portfolio_optimization_minimum_ulcer_index_post**](PortfolioOptimizationApi.md#portfolio_optimization_minimum_ulcer_index_post) | **POST** /portfolio/optimization/minimum-ulcer-index | Minimum Ulcer Index Portfolio
[**portfolio_optimization_most_diversified_post**](PortfolioOptimizationApi.md#portfolio_optimization_most_diversified_post) | **POST** /portfolio/optimization/most-diversified | Most Diversified Portfolio


# **portfolio_optimization_equal_risk_contributions_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_equal_risk_contributions_post(body)

Equal Risk Contributions Portfolio

Compute the asset weights of the equal risk contributions portfolio, optionally subject to:   * Minimum and maximum weights constraints    References  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_equal_risk_contributions_post_request import PortfolioOptimizationEqualRiskContributionsPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1]}} # PortfolioOptimizationEqualRiskContributionsPostRequest | 

    try:
        # Equal Risk Contributions Portfolio
        api_response = api_instance.portfolio_optimization_equal_risk_contributions_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_equal_risk_contributions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_equal_risk_contributions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationEqualRiskContributionsPostRequest**](PortfolioOptimizationEqualRiskContributionsPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_equal_sharpe_ratio_contributions_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_equal_sharpe_ratio_contributions_post(body)

Equal Sharpe Ratio Contributions Portfolio

Compute the asset weights of the equal Sharpe Ratio contributions portfolio.  References  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166\") 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_equal_sharpe_ratio_contributions_post_request import PortfolioOptimizationEqualSharpeRatioContributionsPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.05,0.02],[0.02,0.07]],"assetsReturns":[0.05,0.1],"riskFreeRate":0} # PortfolioOptimizationEqualSharpeRatioContributionsPostRequest | 

    try:
        # Equal Sharpe Ratio Contributions Portfolio
        api_response = api_instance.portfolio_optimization_equal_sharpe_ratio_contributions_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_equal_sharpe_ratio_contributions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_equal_sharpe_ratio_contributions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationEqualSharpeRatioContributionsPostRequest**](PortfolioOptimizationEqualSharpeRatioContributionsPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_equal_volatility_weighted_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_equal_volatility_weighted_post(body)

Equal Volatility Weighted Portfolio

Compute the asset weights of the equal volatility-weighted portfolio.  References  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_equal_volatility_weighted_post_request import PortfolioOptimizationEqualVolatilityWeightedPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsVolatilities":[0.05,0.1]} # PortfolioOptimizationEqualVolatilityWeightedPostRequest | 

    try:
        # Equal Volatility Weighted Portfolio
        api_response = api_instance.portfolio_optimization_equal_volatility_weighted_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_equal_volatility_weighted_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_equal_volatility_weighted_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationEqualVolatilityWeightedPostRequest**](PortfolioOptimizationEqualVolatilityWeightedPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_equal_weighted_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_equal_weighted_post(body)

Equal Weighted Portfolio

Compute the asset weights of the equal-weighted portfolio.  References  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_random_post_request import AssetsCorrelationMatrixRandomPostRequest
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2} # AssetsCorrelationMatrixRandomPostRequest | 

    try:
        # Equal Weighted Portfolio
        api_response = api_instance.portfolio_optimization_equal_weighted_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_equal_weighted_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_equal_weighted_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixRandomPostRequest**](AssetsCorrelationMatrixRandomPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_hierarchical_risk_parity_clustering_based_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_hierarchical_risk_parity_clustering_based_post(body)

Hierarchical Clustering-Based Risk Parity Portfolio

Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)  * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request import PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}} # PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest | 

    try:
        # Hierarchical Clustering-Based Risk Parity Portfolio
        api_response = api_instance.portfolio_optimization_hierarchical_risk_parity_clustering_based_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_hierarchical_risk_parity_clustering_based_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_hierarchical_risk_parity_clustering_based_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest**](PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_hierarchical_risk_parity_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_hierarchical_risk_parity_post(body)

Hierarchical Risk Parity Portfolio

Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:   * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)  * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_hierarchical_risk_parity_post_request import PortfolioOptimizationHierarchicalRiskParityPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}} # PortfolioOptimizationHierarchicalRiskParityPostRequest | 

    try:
        # Hierarchical Risk Parity Portfolio
        api_response = api_instance.portfolio_optimization_hierarchical_risk_parity_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_hierarchical_risk_parity_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_hierarchical_risk_parity_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationHierarchicalRiskParityPostRequest**](PortfolioOptimizationHierarchicalRiskParityPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_inverse_variance_weighted_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_inverse_variance_weighted_post(body)

Inverse Variance Weighted Portfolio

Compute the asset weights of the inverse variance-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_inverse_variance_weighted_post_request import PortfolioOptimizationInverseVarianceWeightedPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsVariances":[1,0.5]} # PortfolioOptimizationInverseVarianceWeightedPostRequest | 

    try:
        # Inverse Variance Weighted Portfolio
        api_response = api_instance.portfolio_optimization_inverse_variance_weighted_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_inverse_variance_weighted_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_inverse_variance_weighted_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationInverseVarianceWeightedPostRequest**](PortfolioOptimizationInverseVarianceWeightedPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_inverse_volatility_weighted_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_inverse_volatility_weighted_post(body)

Inverse Volatility Weighted Portfolio

Compute the asset weights of the inverse volatility-weighted portfolio.  References  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_equal_volatility_weighted_post_request import PortfolioOptimizationEqualVolatilityWeightedPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsVolatilities":[0.05,0.1]} # PortfolioOptimizationEqualVolatilityWeightedPostRequest | 

    try:
        # Inverse Volatility Weighted Portfolio
        api_response = api_instance.portfolio_optimization_inverse_volatility_weighted_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_inverse_volatility_weighted_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_inverse_volatility_weighted_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationEqualVolatilityWeightedPostRequest**](PortfolioOptimizationEqualVolatilityWeightedPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_market_capitalization_weighted_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_market_capitalization_weighted_post(body)

Market Capitalization Weighted Portfolio

Compute the asset weights of the market capitalization-weighted portfolio.  References  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_market_capitalization_weighted_post_request import PortfolioOptimizationMarketCapitalizationWeightedPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsMarketCapitalizations":[1,2]} # PortfolioOptimizationMarketCapitalizationWeightedPostRequest | 

    try:
        # Market Capitalization Weighted Portfolio
        api_response = api_instance.portfolio_optimization_market_capitalization_weighted_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_market_capitalization_weighted_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_market_capitalization_weighted_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationMarketCapitalizationWeightedPostRequest**](PortfolioOptimizationMarketCapitalizationWeightedPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_maximum_decorrelation_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_maximum_decorrelation_post(body)

Maximum Decorrelation Portfolio

Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_maximum_decorrelation_post_request import PortfolioOptimizationMaximumDecorrelationPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.9,0.85],[0.9,1,0.7],[0.85,0.7,1]]} # PortfolioOptimizationMaximumDecorrelationPostRequest | 

    try:
        # Maximum Decorrelation Portfolio
        api_response = api_instance.portfolio_optimization_maximum_decorrelation_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_maximum_decorrelation_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_maximum_decorrelation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationMaximumDecorrelationPostRequest**](PortfolioOptimizationMaximumDecorrelationPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_maximum_ulcer_performance_index_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_maximum_ulcer_performance_index_post(body)

Maximum Ulcer Performance Index Portfolio

Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  Notes:   * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_maximum_ulcer_performance_index_post_request import PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":[{"assetPrices":[100,95,110]},{"assetPrices":[100,105,100]}],"riskFreeRate":0} # PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest | 

    try:
        # Maximum Ulcer Performance Index Portfolio
        api_response = api_instance.portfolio_optimization_maximum_ulcer_performance_index_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_maximum_ulcer_performance_index_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_maximum_ulcer_performance_index_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest**](PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_minimum_correlation_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_minimum_correlation_post(body)

Minimum Correlation Portfolio

Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).  References  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_minimum_correlation_post_request import PortfolioOptimizationMinimumCorrelationPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.9,0.85],[0.9,1,0.7],[0.85,0.7,1]],"assetsVolatilities":[0.14,0.18,0.22]} # PortfolioOptimizationMinimumCorrelationPostRequest | 

    try:
        # Minimum Correlation Portfolio
        api_response = api_instance.portfolio_optimization_minimum_correlation_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_minimum_correlation_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_minimum_correlation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationMinimumCorrelationPostRequest**](PortfolioOptimizationMinimumCorrelationPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_minimum_ulcer_index_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_minimum_ulcer_index_post(body)

Minimum Ulcer Index Portfolio

Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_minimum_ulcer_index_post_request import PortfolioOptimizationMinimumUlcerIndexPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":[{"assetPrices":[100,95,110]},{"assetPrices":[100,105,100]}]} # PortfolioOptimizationMinimumUlcerIndexPostRequest | 

    try:
        # Minimum Ulcer Index Portfolio
        api_response = api_instance.portfolio_optimization_minimum_ulcer_index_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_minimum_ulcer_index_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_minimum_ulcer_index_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationMinimumUlcerIndexPostRequest**](PortfolioOptimizationMinimumUlcerIndexPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_optimization_most_diversified_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_optimization_most_diversified_post(body)

Most Diversified Portfolio

Compute the asset weights of the most diversified portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_optimization_most_diversified_post_request import PortfolioOptimizationMostDiversifiedPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioOptimizationApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.04,0.01],[0.01,0.01]]} # PortfolioOptimizationMostDiversifiedPostRequest | 

    try:
        # Most Diversified Portfolio
        api_response = api_instance.portfolio_optimization_most_diversified_post(body)
        print("The response of PortfolioOptimizationApi->portfolio_optimization_most_diversified_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioOptimizationApi->portfolio_optimization_most_diversified_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioOptimizationMostDiversifiedPostRequest**](PortfolioOptimizationMostDiversifiedPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

