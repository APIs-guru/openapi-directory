# openapi_client.MeterValuesApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meter_values_get**](MeterValuesApi.md#meter_values_get) | **GET** /api/MeterValues/{id} | Gets the Values for a Meter at a given Date.               The first Value found before the given Date is returned.


# **meter_values_get**
> DeviceInPast meter_values_get(id, var_date)

Gets the Values for a Meter at a given Date.               The first Value found before the given Date is returned.

Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.

### Example


```python
import openapi_client
from openapi_client.models.device_in_past import DeviceInPast
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
    api_instance = openapi_client.MeterValuesApi(api_client)
    id = 'id_example' # str | 
    var_date = '2013-10-20T19:20:30+01:00' # datetime | 

    try:
        # Gets the Values for a Meter at a given Date.               The first Value found before the given Date is returned.
        api_response = api_instance.meter_values_get(id, var_date)
        print("The response of MeterValuesApi->meter_values_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeterValuesApi->meter_values_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **var_date** | **datetime**|  | 

### Return type

[**DeviceInPast**](DeviceInPast.md)

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

