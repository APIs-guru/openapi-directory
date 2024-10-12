# openapi_client.VirtualTariffsForPropertyApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_tariffs_for_property_get**](VirtualTariffsForPropertyApi.md#virtual_tariffs_for_property_get) | **GET** /api/VirtualTariffsForProperty/{id} | Gets all Virtual Tariffs for a property (folder)


# **virtual_tariffs_for_property_get**
> List[VirtualTariffsOfFolder] virtual_tariffs_for_property_get(id)

Gets all Virtual Tariffs for a property (folder)

Gets all Virtual Tariffs for a property (folder)

### Example


```python
import openapi_client
from openapi_client.models.virtual_tariffs_of_folder import VirtualTariffsOfFolder
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
    api_instance = openapi_client.VirtualTariffsForPropertyApi(api_client)
    id = 'id_example' # str | 

    try:
        # Gets all Virtual Tariffs for a property (folder)
        api_response = api_instance.virtual_tariffs_for_property_get(id)
        print("The response of VirtualTariffsForPropertyApi->virtual_tariffs_for_property_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTariffsForPropertyApi->virtual_tariffs_for_property_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[VirtualTariffsOfFolder]**](VirtualTariffsOfFolder.md)

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

