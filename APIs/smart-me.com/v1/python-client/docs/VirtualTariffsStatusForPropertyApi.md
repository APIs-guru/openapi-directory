# openapi_client.VirtualTariffsStatusForPropertyApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_tariffs_status_for_property_get**](VirtualTariffsStatusForPropertyApi.md#virtual_tariffs_status_for_property_get) | **GET** /api/VirtualTariffsStatusForProperty/{id} | Gets the calculation status for a virtual tariff property


# **virtual_tariffs_status_for_property_get**
> str virtual_tariffs_status_for_property_get(id)

Gets the calculation status for a virtual tariff property

### Example


```python
import openapi_client
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
    api_instance = openapi_client.VirtualTariffsStatusForPropertyApi(api_client)
    id = 'id_example' # str | 

    try:
        # Gets the calculation status for a virtual tariff property
        api_response = api_instance.virtual_tariffs_status_for_property_get(id)
        print("The response of VirtualTariffsStatusForPropertyApi->virtual_tariffs_status_for_property_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTariffsStatusForPropertyApi->virtual_tariffs_status_for_property_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**str**

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

