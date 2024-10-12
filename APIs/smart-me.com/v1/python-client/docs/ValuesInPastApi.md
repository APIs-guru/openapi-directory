# openapi_client.ValuesInPastApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**values_in_past_get**](ValuesInPastApi.md#values_in_past_get) | **GET** /api/ValuesInPast/{id} | Gets all (last) values of a device              The first Value found before the given Date is returned.


# **values_in_past_get**
> ValuesData values_in_past_get(id, var_date)

Gets all (last) values of a device              The first Value found before the given Date is returned.

Gets the Values for a device at a given Date. The first Value found before the given Date is returned.

### Example


```python
import openapi_client
from openapi_client.models.values_data import ValuesData
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
    api_instance = openapi_client.ValuesInPastApi(api_client)
    id = 'id_example' # str | The ID of the device
    var_date = '2013-10-20T19:20:30+01:00' # datetime | the date of the value

    try:
        # Gets all (last) values of a device              The first Value found before the given Date is returned.
        api_response = api_instance.values_in_past_get(id, var_date)
        print("The response of ValuesInPastApi->values_in_past_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValuesInPastApi->values_in_past_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the device | 
 **var_date** | **datetime**| the date of the value | 

### Return type

[**ValuesData**](ValuesData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

