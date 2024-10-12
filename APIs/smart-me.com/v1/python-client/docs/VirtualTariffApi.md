# openapi_client.VirtualTariffApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_virtual_tariff_id_get**](VirtualTariffApi.md#api_virtual_tariff_id_get) | **GET** /api/VirtualTariff/{id} | Gets all virtual tariffs of a folder
[**virtual_tariff_get**](VirtualTariffApi.md#virtual_tariff_get) | **GET** /api/VirtualTariff | Gets all Virtual Tariffs of a user


# **api_virtual_tariff_id_get**
> VirtualTariffsOfFolder api_virtual_tariff_id_get(id)

Gets all virtual tariffs of a folder

Gets all virtual tariffs of a folder

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
    api_instance = openapi_client.VirtualTariffApi(api_client)
    id = 'id_example' # str | The ID of the Folder

    try:
        # Gets all virtual tariffs of a folder
        api_response = api_instance.api_virtual_tariff_id_get(id)
        print("The response of VirtualTariffApi->api_virtual_tariff_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTariffApi->api_virtual_tariff_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Folder | 

### Return type

[**VirtualTariffsOfFolder**](VirtualTariffsOfFolder.md)

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

# **virtual_tariff_get**
> List[VirtualTariffsOfFolder] virtual_tariff_get()

Gets all Virtual Tariffs of a user

Gets all Virtual Tariffs of a user

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
    api_instance = openapi_client.VirtualTariffApi(api_client)

    try:
        # Gets all Virtual Tariffs of a user
        api_response = api_instance.virtual_tariff_get()
        print("The response of VirtualTariffApi->virtual_tariff_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualTariffApi->virtual_tariff_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

