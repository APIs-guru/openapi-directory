# openapi_client.DeviceBySerialApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_by_serial_get**](DeviceBySerialApi.md#device_by_serial_get) | **GET** /api/DeviceBySerial | Gets a Device by it&#39;s Serial Number. The Serial is the part before the \&quot;-\&quot;.


# **device_by_serial_get**
> Device device_by_serial_get(serial)

Gets a Device by it's Serial Number. The Serial is the part before the \"-\".

Gets a Device by it's Serial Number. The Serial is the part before the \"-\".

### Example


```python
import openapi_client
from openapi_client.models.device import Device
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceBySerialApi(api_client)
    serial = 56 # int | The Serial Number of the device

    try:
        # Gets a Device by it's Serial Number. The Serial is the part before the \"-\".
        api_response = api_instance.device_by_serial_get(serial)
        print("The response of DeviceBySerialApi->device_by_serial_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceBySerialApi->device_by_serial_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **int**| The Serial Number of the device | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

