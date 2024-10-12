# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpoint_keys_get_keys**](DefaultApi.md#endpoint_keys_get_keys) | **GET** /endpointkeys | Gets endpoint keys for an endpoint
[**endpoint_settings_get_settings**](DefaultApi.md#endpoint_settings_get_settings) | **GET** /endpointSettings | Gets endpoint settings for an endpoint.


# **endpoint_keys_get_keys**
> EndpointKeysDTO endpoint_keys_get_keys()

Gets endpoint keys for an endpoint

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.endpoint_keys_dto import EndpointKeysDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Gets endpoint keys for an endpoint
        api_response = api_instance.endpoint_keys_get_keys()
        print("The response of DefaultApi->endpoint_keys_get_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->endpoint_keys_get_keys: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**EndpointKeysDTO**](EndpointKeysDTO.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response with endpoint info in it. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoint_settings_get_settings**
> EndpointSettingsDTO endpoint_settings_get_settings()

Gets endpoint settings for an endpoint.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.endpoint_settings_dto import EndpointSettingsDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Gets endpoint settings for an endpoint.
        api_response = api_instance.endpoint_settings_get_settings()
        print("The response of DefaultApi->endpoint_settings_get_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->endpoint_settings_get_settings: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**EndpointSettingsDTO**](EndpointSettingsDTO.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response with endpoint settings info in it. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

