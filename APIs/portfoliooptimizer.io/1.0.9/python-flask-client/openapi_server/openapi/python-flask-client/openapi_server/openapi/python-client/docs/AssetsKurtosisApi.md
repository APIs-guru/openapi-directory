# openapi_client.AssetsKurtosisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_kurtosis_post**](AssetsKurtosisApi.md#assets_kurtosis_post) | **POST** /assets/kurtosis | Kurtosis


# **assets_kurtosis_post**
> AssetsKurtosisPost200Response assets_kurtosis_post(body)

Kurtosis

Compute the kurtosis of one or several asset(s), from the asset returns.  References * [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_kurtosis_post200_response import AssetsKurtosisPost200Response
from openapi_client.models.assets_kurtosis_post_request import AssetsKurtosisPostRequest
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
    api_instance = openapi_client.AssetsKurtosisApi(api_client)
    body = {"assets":[{"assetReturns":[0.01,0,0.02,-0.03]}]} # AssetsKurtosisPostRequest | 

    try:
        # Kurtosis
        api_response = api_instance.assets_kurtosis_post(body)
        print("The response of AssetsKurtosisApi->assets_kurtosis_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsKurtosisApi->assets_kurtosis_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsKurtosisPostRequest**](AssetsKurtosisPostRequest.md)|  | 

### Return type

[**AssetsKurtosisPost200Response**](AssetsKurtosisPost200Response.md)

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

