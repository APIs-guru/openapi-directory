# openapi_client.LogsApi

All URIs are relative to *https://azure.local/personalizer/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**log_delete**](LogsApi.md#log_delete) | **DELETE** /logs | Deletes Logs.
[**log_get_properties**](LogsApi.md#log_get_properties) | **GET** /logs/properties | Get Log Properties.


# **log_delete**
> log_delete()

Deletes Logs.

Delete all generated logs.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
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
    api_instance = openapi_client.LogsApi(api_client)

    try:
        # Deletes Logs.
        api_instance.log_delete()
    except Exception as e:
        print("Exception when calling LogsApi->log_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **log_get_properties**
> LogsProperties log_get_properties()

Get Log Properties.

Get properties of generated logs.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.logs_properties import LogsProperties
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
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
    api_instance = openapi_client.LogsApi(api_client)

    try:
        # Get Log Properties.
        api_response = api_instance.log_get_properties()
        print("The response of LogsApi->log_get_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->log_get_properties: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**LogsProperties**](LogsProperties.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Logs properties not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

