# openapi_client.EndpointKeysApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpoint_keys_refresh_keys**](EndpointKeysApi.md#endpoint_keys_refresh_keys) | **PATCH** /endpointkeys/{keyType} | Re-generates an endpoint key.
[**endpoint_settings_update_settings**](EndpointKeysApi.md#endpoint_settings_update_settings) | **PATCH** /endpointSettings | Updates endpoint settings for an endpoint.


# **endpoint_keys_refresh_keys**
> EndpointKeysDTO endpoint_keys_refresh_keys(key_type)

Re-generates an endpoint key.

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
    api_instance = openapi_client.EndpointKeysApi(api_client)
    key_type = 'key_type_example' # str | Type of Key

    try:
        # Re-generates an endpoint key.
        api_response = api_instance.endpoint_keys_refresh_keys(key_type)
        print("The response of EndpointKeysApi->endpoint_keys_refresh_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointKeysApi->endpoint_keys_refresh_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_type** | **str**| Type of Key | 

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
**200** | Details of the endpoint keys generated. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoint_settings_update_settings**
> str endpoint_settings_update_settings(endpoint_settings_payload)

Updates endpoint settings for an endpoint.

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
    api_instance = openapi_client.EndpointKeysApi(api_client)
    endpoint_settings_payload = openapi_client.EndpointSettingsDTO() # EndpointSettingsDTO | Post body of the request.

    try:
        # Updates endpoint settings for an endpoint.
        api_response = api_instance.endpoint_settings_update_settings(endpoint_settings_payload)
        print("The response of EndpointKeysApi->endpoint_settings_update_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointKeysApi->endpoint_settings_update_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_settings_payload** | [**EndpointSettingsDTO**](EndpointSettingsDTO.md)| Post body of the request. | 

### Return type

**str**

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response with endpointSettings update status. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

