# openapi_client.PortfolioSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolio_simulation_rebalancing_drift_weight_post**](PortfolioSimulationApi.md#portfolio_simulation_rebalancing_drift_weight_post) | **POST** /portfolio/simulation/rebalancing/drift-weight | Drift-weight Portfolio Rebalancing
[**portfolio_simulation_rebalancing_fixed_weight_post**](PortfolioSimulationApi.md#portfolio_simulation_rebalancing_fixed_weight_post) | **POST** /portfolio/simulation/rebalancing/fixed-weight | Fixed-weight Portfolio Rebalancing
[**portfolio_simulation_rebalancing_random_weight_post**](PortfolioSimulationApi.md#portfolio_simulation_rebalancing_random_weight_post) | **POST** /portfolio/simulation/rebalancing/random-weight | Random-weight Portfolio Rebalancing


# **portfolio_simulation_rebalancing_drift_weight_post**
> PortfolioSimulationRebalancingDriftWeightPost200Response portfolio_simulation_rebalancing_drift_weight_post(body)

Drift-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_simulation_rebalancing_drift_weight_post200_response import PortfolioSimulationRebalancingDriftWeightPost200Response
from openapi_client.models.portfolio_simulation_rebalancing_drift_weight_post_request import PortfolioSimulationRebalancingDriftWeightPostRequest
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
    api_instance = openapi_client.PortfolioSimulationApi(api_client)
    body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":[{"assetsWeights":[1,0,0]},{"assetsWeights":[0,1,0]},{"assetsWeights":[0,0,1]}]} # PortfolioSimulationRebalancingDriftWeightPostRequest | 

    try:
        # Drift-weight Portfolio Rebalancing
        api_response = api_instance.portfolio_simulation_rebalancing_drift_weight_post(body)
        print("The response of PortfolioSimulationApi->portfolio_simulation_rebalancing_drift_weight_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioSimulationApi->portfolio_simulation_rebalancing_drift_weight_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioSimulationRebalancingDriftWeightPostRequest**](PortfolioSimulationRebalancingDriftWeightPostRequest.md)|  | 

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

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

# **portfolio_simulation_rebalancing_fixed_weight_post**
> PortfolioSimulationRebalancingDriftWeightPost200Response portfolio_simulation_rebalancing_fixed_weight_post(body)

Fixed-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)         

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_simulation_rebalancing_drift_weight_post200_response import PortfolioSimulationRebalancingDriftWeightPost200Response
from openapi_client.models.portfolio_simulation_rebalancing_drift_weight_post_request import PortfolioSimulationRebalancingDriftWeightPostRequest
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
    api_instance = openapi_client.PortfolioSimulationApi(api_client)
    body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":[{"assetsWeights":[0.5,0.5,0]},{"assetsWeights":[0,0.5,0.5]},{"assetsWeights":[0.5,0,0.5]}]} # PortfolioSimulationRebalancingDriftWeightPostRequest | 

    try:
        # Fixed-weight Portfolio Rebalancing
        api_response = api_instance.portfolio_simulation_rebalancing_fixed_weight_post(body)
        print("The response of PortfolioSimulationApi->portfolio_simulation_rebalancing_fixed_weight_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioSimulationApi->portfolio_simulation_rebalancing_fixed_weight_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioSimulationRebalancingDriftWeightPostRequest**](PortfolioSimulationRebalancingDriftWeightPostRequest.md)|  | 

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

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

# **portfolio_simulation_rebalancing_random_weight_post**
> PortfolioSimulationRebalancingDriftWeightPost200Response portfolio_simulation_rebalancing_random_weight_post(body)

Random-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.  References * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_simulation_rebalancing_drift_weight_post200_response import PortfolioSimulationRebalancingDriftWeightPost200Response
from openapi_client.models.portfolio_simulation_rebalancing_random_weight_post_request import PortfolioSimulationRebalancingRandomWeightPostRequest
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
    api_instance = openapi_client.PortfolioSimulationApi(api_client)
    body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":2} # PortfolioSimulationRebalancingRandomWeightPostRequest | 

    try:
        # Random-weight Portfolio Rebalancing
        api_response = api_instance.portfolio_simulation_rebalancing_random_weight_post(body)
        print("The response of PortfolioSimulationApi->portfolio_simulation_rebalancing_random_weight_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioSimulationApi->portfolio_simulation_rebalancing_random_weight_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioSimulationRebalancingRandomWeightPostRequest**](PortfolioSimulationRebalancingRandomWeightPostRequest.md)|  | 

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

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

