# openapi_client.PortfolioConstructionApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolio_construction_investable_post**](PortfolioConstructionApi.md#portfolio_construction_investable_post) | **POST** /portfolio/construction/investable | Investable Portfolio
[**portfolio_construction_mimicking_post**](PortfolioConstructionApi.md#portfolio_construction_mimicking_post) | **POST** /portfolio/construction/mimicking | Mimicking Portfolio
[**portfolio_construction_random_post**](PortfolioConstructionApi.md#portfolio_construction_random_post) | **POST** /portfolio/construction/random | Random Portfolio


# **portfolio_construction_investable_post**
> PortfolioConstructionInvestablePost200Response portfolio_construction_investable_post(body)

Investable Portfolio

Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account: * The desired assets weights * The desired assets groups weights * The desired maximum assets groups weights * The prices of the assets * The portfolio value * The requirement to purchase some assets by round lots or by odd lots * The possibility to purchase some assets by a fractional quantity of shares * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets  References * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_construction_investable_post200_response import PortfolioConstructionInvestablePost200Response
from openapi_client.models.portfolio_construction_investable_post_request import PortfolioConstructionInvestablePostRequest
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
    api_instance = openapi_client.PortfolioConstructionApi(api_client)
    body = {"assets":4,"assetsGroups":[[1,2],[3,4]],"assetsGroupsWeights":[0.4,0.4],"assetsPrices":[10,25,100,500],"assetsWeights":[0.2,null,null,null],"portfolioValue":10000} # PortfolioConstructionInvestablePostRequest | 

    try:
        # Investable Portfolio
        api_response = api_instance.portfolio_construction_investable_post(body)
        print("The response of PortfolioConstructionApi->portfolio_construction_investable_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioConstructionApi->portfolio_construction_investable_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioConstructionInvestablePostRequest**](PortfolioConstructionInvestablePostRequest.md)|  | 

### Return type

[**PortfolioConstructionInvestablePost200Response**](PortfolioConstructionInvestablePost200Response.md)

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

# **portfolio_construction_mimicking_post**
> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolio_construction_mimicking_post(body)

Mimicking Portfolio

Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of_portfolios_inner import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner
from openapi_client.models.portfolio_construction_mimicking_post_request import PortfolioConstructionMimickingPostRequest
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
    api_instance = openapi_client.PortfolioConstructionApi(api_client)
    body = {"assets":[{"assetReturns":[0.01,0.02,0.03]},{"assetReturns":[-0.01,-0.02,-0.03]}],"benchmarkReturns":[0,0,0]} # PortfolioConstructionMimickingPostRequest | 

    try:
        # Mimicking Portfolio
        api_response = api_instance.portfolio_construction_mimicking_post(body)
        print("The response of PortfolioConstructionApi->portfolio_construction_mimicking_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioConstructionApi->portfolio_construction_mimicking_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioConstructionMimickingPostRequest**](PortfolioConstructionMimickingPostRequest.md)|  | 

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

# **portfolio_construction_random_post**
> PortfolioConstructionRandomPost200Response portfolio_construction_random_post(body)

Random Portfolio

Construct one or several random portfolio(s), optionally subject to:        * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.  References * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_construction_random_post200_response import PortfolioConstructionRandomPost200Response
from openapi_client.models.portfolio_construction_random_post_request import PortfolioConstructionRandomPostRequest
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
    api_instance = openapi_client.PortfolioConstructionApi(api_client)
    body = {"assets":3,"portfolios":2} # PortfolioConstructionRandomPostRequest | 

    try:
        # Random Portfolio
        api_response = api_instance.portfolio_construction_random_post(body)
        print("The response of PortfolioConstructionApi->portfolio_construction_random_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioConstructionApi->portfolio_construction_random_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioConstructionRandomPostRequest**](PortfolioConstructionRandomPostRequest.md)|  | 

### Return type

[**PortfolioConstructionRandomPost200Response**](PortfolioConstructionRandomPost200Response.md)

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

