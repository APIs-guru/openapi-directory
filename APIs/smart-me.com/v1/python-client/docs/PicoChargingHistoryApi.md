# openapi_client.PicoChargingHistoryApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pico_charging_history_get**](PicoChargingHistoryApi.md#pico_charging_history_get) | **GET** /api/pico/history/{id} | Gets the last charging history for a pico station


# **pico_charging_history_get**
> List[PicoChargingHistoryData] pico_charging_history_get(id)

Gets the last charging history for a pico station

### Example


```python
import openapi_client
from openapi_client.models.pico_charging_history_data import PicoChargingHistoryData
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
    api_instance = openapi_client.PicoChargingHistoryApi(api_client)
    id = 'id_example' # str | 

    try:
        # Gets the last charging history for a pico station
        api_response = api_instance.pico_charging_history_get(id)
        print("The response of PicoChargingHistoryApi->pico_charging_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PicoChargingHistoryApi->pico_charging_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[PicoChargingHistoryData]**](PicoChargingHistoryData.md)

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

