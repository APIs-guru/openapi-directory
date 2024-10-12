# openapi_client.DevicesByEnergyApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_by_energy_get**](DevicesByEnergyApi.md#devices_by_energy_get) | **GET** /api/DevicesByEnergy | Gets all Devices for an Energy Type


# **devices_by_energy_get**
> List[Device] devices_by_energy_get(meter_energy_type)

Gets all Devices for an Energy Type

Gets all Devices for an Energy Type

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
    api_instance = openapi_client.DevicesByEnergyApi(api_client)
    meter_energy_type = 'meter_energy_type_example' # str | 

    try:
        # Gets all Devices for an Energy Type
        api_response = api_instance.devices_by_energy_get(meter_energy_type)
        print("The response of DevicesByEnergyApi->devices_by_energy_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesByEnergyApi->devices_by_energy_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meter_energy_type** | **str**|  | 

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

