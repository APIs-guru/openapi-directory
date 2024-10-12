# openapi_client.AssetsPricesApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_prices_adjusted_forward_post**](AssetsPricesApi.md#assets_prices_adjusted_forward_post) | **POST** /assets/prices/adjusted/forward | Forward-Adjusted Prices
[**assets_prices_adjusted_post**](AssetsPricesApi.md#assets_prices_adjusted_post) | **POST** /assets/prices/adjusted | Adjusted Prices


# **assets_prices_adjusted_forward_post**
> AssetsPricesAdjustedPost200Response assets_prices_adjusted_forward_post(body)

Forward-Adjusted Prices

Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that: * The price on the first date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_prices_adjusted_post200_response import AssetsPricesAdjustedPost200Response
from openapi_client.models.assets_prices_adjusted_post_request import AssetsPricesAdjustedPostRequest
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
    api_instance = openapi_client.AssetsPricesApi(api_client)
    body = {"assets":[{"assetPrices":[{"close":2213.4,"date":"2020-08-28"},{"close":498.32,"date":"2020-08-31"},{"close":475.05,"date":"2020-09-01"}],"assetSplits":[{"date":"2020-08-31","factor":5}]}]} # AssetsPricesAdjustedPostRequest | 

    try:
        # Forward-Adjusted Prices
        api_response = api_instance.assets_prices_adjusted_forward_post(body)
        print("The response of AssetsPricesApi->assets_prices_adjusted_forward_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsPricesApi->assets_prices_adjusted_forward_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsPricesAdjustedPostRequest**](AssetsPricesAdjustedPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assets_prices_adjusted_post**
> AssetsPricesAdjustedPost200Response assets_prices_adjusted_post(body)

Adjusted Prices

Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that: * The price on the last date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_prices_adjusted_post200_response import AssetsPricesAdjustedPost200Response
from openapi_client.models.assets_prices_adjusted_post_request import AssetsPricesAdjustedPostRequest
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
    api_instance = openapi_client.AssetsPricesApi(api_client)
    body = {"assets":[{"assetPrices":[{"close":2213.4,"date":"2020-08-28"},{"close":498.32,"date":"2020-08-31"},{"close":475.05,"date":"2020-09-01"}],"assetSplits":[{"date":"2020-08-31","factor":5}]}]} # AssetsPricesAdjustedPostRequest | 

    try:
        # Adjusted Prices
        api_response = api_instance.assets_prices_adjusted_post(body)
        print("The response of AssetsPricesApi->assets_prices_adjusted_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsPricesApi->assets_prices_adjusted_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsPricesAdjustedPostRequest**](AssetsPricesAdjustedPostRequest.md)|  | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

