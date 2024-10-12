# openapi_client.PerformanceApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_appliance_performance_1**](PerformanceApi.md#get_device_appliance_performance_1) | **GET** /devices/{serial}/appliance/performance | Return the performance score for a single MX


# **get_device_appliance_performance_1**
> object get_device_appliance_performance_1(serial)

Return the performance score for a single MX

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PerformanceApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the performance score for a single MX
        api_response = api_instance.get_device_appliance_performance_1(serial)
        print("The response of PerformanceApi->get_device_appliance_performance_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PerformanceApi->get_device_appliance_performance_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

