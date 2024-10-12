# openapi_client.SystemApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_resource_limits**](SystemApi.md#get_resource_limits) | **GET** /system/limits | Get resource limits information
[**get_system_info**](SystemApi.md#get_system_info) | **GET** /system/info | Get system information


# **get_resource_limits**
> Limits get_resource_limits()

Get resource limits information

This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.

### Example


```python
import openapi_client
from openapi_client.models.limits import Limits
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SystemApi(api_client)

    try:
        # Get resource limits information
        api_response = api_instance.get_resource_limits()
        print("The response of SystemApi->get_resource_limits:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemApi->get_resource_limits: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Limits**](Limits.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On success, returns resource limits |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_system_info**
> SystemInfo get_system_info()

Get system information

This operation retrieves information about the running registry system, such as the version of the software and when it was built.

### Example


```python
import openapi_client
from openapi_client.models.system_info import SystemInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SystemApi(api_client)

    try:
        # Get system information
        api_response = api_instance.get_system_info()
        print("The response of SystemApi->get_system_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemApi->get_system_info: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SystemInfo**](SystemInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On success, returns the system information. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

