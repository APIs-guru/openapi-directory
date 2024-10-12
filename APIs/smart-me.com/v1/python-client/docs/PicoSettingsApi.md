# openapi_client.PicoSettingsApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pico_settings_get**](PicoSettingsApi.md#pico_settings_get) | **GET** /api/pico/settings/{id} | GET: api/pico/settings                            Returns the settings of a pico charging station.


# **pico_settings_get**
> PicoSettingsDto pico_settings_get(id)

GET: api/pico/settings                            Returns the settings of a pico charging station.

### Example


```python
import openapi_client
from openapi_client.models.pico_settings_dto import PicoSettingsDto
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
    api_instance = openapi_client.PicoSettingsApi(api_client)
    id = 'id_example' # str | 

    try:
        # GET: api/pico/settings                            Returns the settings of a pico charging station.
        api_response = api_instance.pico_settings_get(id)
        print("The response of PicoSettingsApi->pico_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PicoSettingsApi->pico_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**PicoSettingsDto**](PicoSettingsDto.md)

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

