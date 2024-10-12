# openapi_client.ConfigurationApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configuration_delete**](ConfigurationApi.md#configuration_delete) | **DELETE** /system/configuration/{key} | Delete a configuration item.
[**configuration_get**](ConfigurationApi.md#configuration_get) | **GET** /system/configuration/{key} | Get the value of a configuration item.
[**configuration_list**](ConfigurationApi.md#configuration_list) | **GET** /system/configuration | Get the current system configuration.


# **configuration_delete**
> configuration_delete(key)

Delete a configuration item.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationApi(api_client)
    key = 'key_example' # str | The key of the configuration item to remove.

    try:
        # Delete a configuration item.
        api_instance.configuration_delete(key)
    except Exception as e:
        print("Exception when calling ConfigurationApi->configuration_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| The key of the configuration item to remove. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The change has been accepted, and will take effect when the service can cleanly restart. |  -  |
**404** | The configuration item does not exist. |  -  |
**500** | An internal error is preventing deletion of the configuration item. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_get**
> object configuration_get(key)

Get the value of a configuration item.

The response content may vary based on the configuration item's data type.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationApi(api_client)
    key = 'key_example' # str | The key of the configuration item.

    try:
        # Get the value of a configuration item.
        api_response = api_instance.configuration_get(key)
        print("The response of ConfigurationApi->configuration_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->configuration_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| The key of the configuration item. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The value of the configuration item. |  -  |
**404** | The configuration item does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_list**
> Dict[str, object] configuration_list()

Get the current system configuration.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigurationApi(api_client)

    try:
        # Get the current system configuration.
        api_response = api_instance.configuration_list()
        print("The response of ConfigurationApi->configuration_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->configuration_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The current system configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

