# openapi_client.DevicesBySubTypeApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_by_sub_type_get**](DevicesBySubTypeApi.md#devices_by_sub_type_get) | **GET** /api/DevicesBySubType | Gets all Devices by it&#39;s Sub Type (e.g. E-Charging Station)


# **devices_by_sub_type_get**
> List[Device] devices_by_sub_type_get(meter_sub_type)

Gets all Devices by it's Sub Type (e.g. E-Charging Station)

Gets all Devices by it's Sub Type (e.g. E-Charging Station)

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
    api_instance = openapi_client.DevicesBySubTypeApi(api_client)
    meter_sub_type = 'meter_sub_type_example' # str | 

    try:
        # Gets all Devices by it's Sub Type (e.g. E-Charging Station)
        api_response = api_instance.devices_by_sub_type_get(meter_sub_type)
        print("The response of DevicesBySubTypeApi->devices_by_sub_type_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesBySubTypeApi->devices_by_sub_type_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meter_sub_type** | **str**|  | 

### Return type

[**List[Device]**](Device.md)

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

