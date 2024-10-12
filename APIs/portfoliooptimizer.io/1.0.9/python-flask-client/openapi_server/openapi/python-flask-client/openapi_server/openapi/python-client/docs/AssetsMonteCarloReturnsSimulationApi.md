# openapi_client.AssetsMonteCarloReturnsSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post**](AssetsMonteCarloReturnsSimulationApi.md#assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher/corrected | Corrected Cornish-Fisher Distribution
[**assets_returns_simulation_monte_carlo_cornish_fisher_post**](AssetsMonteCarloReturnsSimulationApi.md#assets_returns_simulation_monte_carlo_cornish_fisher_post) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher | Cornish-Fisher Distribution
[**assets_returns_simulation_monte_carlo_gaussian_post**](AssetsMonteCarloReturnsSimulationApi.md#assets_returns_simulation_monte_carlo_gaussian_post) | **POST** /assets/returns/simulation/monte-carlo/gaussian | Gaussian Distribution


# **assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post**
> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post(body)

Corrected Cornish-Fisher Distribution

Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post_request import AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
from openapi_client.models.assets_returns_simulation_monte_carlo_cornish_fisher_post200_response import AssetsReturnsSimulationMonteCarloCornishFisherPost200Response
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
    api_instance = openapi_client.AssetsMonteCarloReturnsSimulationApi(api_client)
    body = {"assetAverageReturn":0.05,"assetKurtosis":1,"assetSkewness":0.5,"assetVolatility":0.2,"simulations":5,"simulationsLength":4} # AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest | 

    try:
        # Corrected Cornish-Fisher Distribution
        api_response = api_instance.assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post(body)
        print("The response of AssetsMonteCarloReturnsSimulationApi->assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsMonteCarloReturnsSimulationApi->assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest**](AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.md)|  | 

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Failed computation of Cornish-Fisher skewness and (excess) kurtosis parameters corresponding to the asset skewness and (excess) kurtosis |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_returns_simulation_monte_carlo_cornish_fisher_post**
> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assets_returns_simulation_monte_carlo_cornish_fisher_post(body)

Cornish-Fisher Distribution

Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_returns_simulation_monte_carlo_cornish_fisher_post200_response import AssetsReturnsSimulationMonteCarloCornishFisherPost200Response
from openapi_client.models.assets_returns_simulation_monte_carlo_cornish_fisher_post_request import AssetsReturnsSimulationMonteCarloCornishFisherPostRequest
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
    api_instance = openapi_client.AssetsMonteCarloReturnsSimulationApi(api_client)
    body = {"assetAverageReturnParameter":0.05,"assetKurtosisParameter":1,"assetSkewnessParameter":0.5,"assetVolatilityParameter":0.2,"simulations":5,"simulationsLength":4} # AssetsReturnsSimulationMonteCarloCornishFisherPostRequest | 

    try:
        # Cornish-Fisher Distribution
        api_response = api_instance.assets_returns_simulation_monte_carlo_cornish_fisher_post(body)
        print("The response of AssetsMonteCarloReturnsSimulationApi->assets_returns_simulation_monte_carlo_cornish_fisher_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsMonteCarloReturnsSimulationApi->assets_returns_simulation_monte_carlo_cornish_fisher_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsReturnsSimulationMonteCarloCornishFisherPostRequest**](AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.md)|  | 

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

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

# **assets_returns_simulation_monte_carlo_gaussian_post**
> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assets_returns_simulation_monte_carlo_gaussian_post(body)

Gaussian Distribution

Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.  References * [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_returns_simulation_monte_carlo_cornish_fisher_post200_response import AssetsReturnsSimulationMonteCarloCornishFisherPost200Response
from openapi_client.models.assets_returns_simulation_monte_carlo_gaussian_post_request import AssetsReturnsSimulationMonteCarloGaussianPostRequest
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
    api_instance = openapi_client.AssetsMonteCarloReturnsSimulationApi(api_client)
    body = {"assetAverageReturn":0.05,"assetVolatility":0.2,"simulations":5,"simulationsLength":4} # AssetsReturnsSimulationMonteCarloGaussianPostRequest | 

    try:
        # Gaussian Distribution
        api_response = api_instance.assets_returns_simulation_monte_carlo_gaussian_post(body)
        print("The response of AssetsMonteCarloReturnsSimulationApi->assets_returns_simulation_monte_carlo_gaussian_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsMonteCarloReturnsSimulationApi->assets_returns_simulation_monte_carlo_gaussian_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsReturnsSimulationMonteCarloGaussianPostRequest**](AssetsReturnsSimulationMonteCarloGaussianPostRequest.md)|  | 

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

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

