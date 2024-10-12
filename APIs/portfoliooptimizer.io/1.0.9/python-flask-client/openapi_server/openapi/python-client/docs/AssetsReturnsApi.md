# openapi_client.AssetsReturnsApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_returns_average_post**](AssetsReturnsApi.md#assets_returns_average_post) | **POST** /assets/returns/average | Arithmetic Average Return
[**assets_returns_logarithmic_post**](AssetsReturnsApi.md#assets_returns_logarithmic_post) | **POST** /assets/returns/logarithmic | Logarithmic Returns
[**assets_returns_post**](AssetsReturnsApi.md#assets_returns_post) | **POST** /assets/returns | Arithmetic Returns
[**assets_returns_turbulence_partitioned_post**](AssetsReturnsApi.md#assets_returns_turbulence_partitioned_post) | **POST** /assets/returns/turbulence-partitioned | Turbulence-partitioned Asset Returns


# **assets_returns_average_post**
> AssetsReturnsAveragePost200Response assets_returns_average_post(body)

Arithmetic Average Return

Compute the arithmetic average of the return(s) of one or several asset(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_returns_average_post200_response import AssetsReturnsAveragePost200Response
from openapi_client.models.assets_returns_average_post_request import AssetsReturnsAveragePostRequest
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
    api_instance = openapi_client.AssetsReturnsApi(api_client)
    body = {"assets":[{"assetReturns":[0.1,-0.05]},{"assetReturns":[0,-0.01,0.01]}]} # AssetsReturnsAveragePostRequest | 

    try:
        # Arithmetic Average Return
        api_response = api_instance.assets_returns_average_post(body)
        print("The response of AssetsReturnsApi->assets_returns_average_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsReturnsApi->assets_returns_average_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsReturnsAveragePostRequest**](AssetsReturnsAveragePostRequest.md)|  | 

### Return type

[**AssetsReturnsAveragePost200Response**](AssetsReturnsAveragePost200Response.md)

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

# **assets_returns_logarithmic_post**
> AssetsReturnsLogarithmicPost200Response assets_returns_logarithmic_post(body)

Logarithmic Returns

Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_returns_logarithmic_post200_response import AssetsReturnsLogarithmicPost200Response
from openapi_client.models.assets_returns_post_request import AssetsReturnsPostRequest
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
    api_instance = openapi_client.AssetsReturnsApi(api_client)
    body = {"assets":[{"assetPrices":[1,2]},{"assetPrices":[2,3,6]}]} # AssetsReturnsPostRequest | 

    try:
        # Logarithmic Returns
        api_response = api_instance.assets_returns_logarithmic_post(body)
        print("The response of AssetsReturnsApi->assets_returns_logarithmic_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsReturnsApi->assets_returns_logarithmic_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsReturnsPostRequest**](AssetsReturnsPostRequest.md)|  | 

### Return type

[**AssetsReturnsLogarithmicPost200Response**](AssetsReturnsLogarithmicPost200Response.md)

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

# **assets_returns_post**
> AssetsReturnsPost200Response assets_returns_post(body)

Arithmetic Returns

Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_returns_post200_response import AssetsReturnsPost200Response
from openapi_client.models.assets_returns_post_request import AssetsReturnsPostRequest
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
    api_instance = openapi_client.AssetsReturnsApi(api_client)
    body = {"assets":[{"assetPrices":[1,2]},{"assetPrices":[2,3,6]}]} # AssetsReturnsPostRequest | 

    try:
        # Arithmetic Returns
        api_response = api_instance.assets_returns_post(body)
        print("The response of AssetsReturnsApi->assets_returns_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsReturnsApi->assets_returns_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsReturnsPostRequest**](AssetsReturnsPostRequest.md)|  | 

### Return type

[**AssetsReturnsPost200Response**](AssetsReturnsPost200Response.md)

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

# **assets_returns_turbulence_partitioned_post**
> AssetsReturnsTurbulencePartitionedPost200Response assets_returns_turbulence_partitioned_post(body)

Turbulence-partitioned Asset Returns

Partition asset returns into several subsets based on their turbulence index.  References * [George Chow, Jacquier, E., Kritzman, M., & Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_returns_turbulence_partitioned_post200_response import AssetsReturnsTurbulencePartitionedPost200Response
from openapi_client.models.assets_returns_turbulence_partitioned_post_request import AssetsReturnsTurbulencePartitionedPostRequest
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
    api_instance = openapi_client.AssetsReturnsApi(api_client)
    body = {"assets":[{"assetReturns":[0,0.1,0.05,-0.01,0.025]},{"assetReturns":[0.005,0.05,0.1,-0.02,0]}],"turbulenceThresholds":[0.8,0.95]} # AssetsReturnsTurbulencePartitionedPostRequest | 

    try:
        # Turbulence-partitioned Asset Returns
        api_response = api_instance.assets_returns_turbulence_partitioned_post(body)
        print("The response of AssetsReturnsApi->assets_returns_turbulence_partitioned_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsReturnsApi->assets_returns_turbulence_partitioned_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsReturnsTurbulencePartitionedPostRequest**](AssetsReturnsTurbulencePartitionedPostRequest.md)|  | 

### Return type

[**AssetsReturnsTurbulencePartitionedPost200Response**](AssetsReturnsTurbulencePartitionedPost200Response.md)

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

