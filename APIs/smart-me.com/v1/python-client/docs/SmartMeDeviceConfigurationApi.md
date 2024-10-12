# openapi_client.SmartMeDeviceConfigurationApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**smart_me_device_configuration_get**](SmartMeDeviceConfigurationApi.md#smart_me_device_configuration_get) | **GET** /api/SmartMeDeviceConfiguration/{id} | Gets the configuration of a smart-me device.
[**smart_me_device_configuration_post**](SmartMeDeviceConfigurationApi.md#smart_me_device_configuration_post) | **POST** /api/SmartMeDeviceConfiguration | Sets the configuration of a smart-me device. The device needs to be online.


# **smart_me_device_configuration_get**
> SmartMeDeviceConfigurationContainer smart_me_device_configuration_get(id)

Gets the configuration of a smart-me device.

### Example


```python
import openapi_client
from openapi_client.models.smart_me_device_configuration_container import SmartMeDeviceConfigurationContainer
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
    api_instance = openapi_client.SmartMeDeviceConfigurationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Gets the configuration of a smart-me device.
        api_response = api_instance.smart_me_device_configuration_get(id)
        print("The response of SmartMeDeviceConfigurationApi->smart_me_device_configuration_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartMeDeviceConfigurationApi->smart_me_device_configuration_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**SmartMeDeviceConfigurationContainer**](SmartMeDeviceConfigurationContainer.md)

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

# **smart_me_device_configuration_post**
> smart_me_device_configuration_post(smart_me_device_configuration_container)

Sets the configuration of a smart-me device. The device needs to be online.

### Example


```python
import openapi_client
from openapi_client.models.smart_me_device_configuration_container import SmartMeDeviceConfigurationContainer
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
    api_instance = openapi_client.SmartMeDeviceConfigurationApi(api_client)
    smart_me_device_configuration_container = openapi_client.SmartMeDeviceConfigurationContainer() # SmartMeDeviceConfigurationContainer | 

    try:
        # Sets the configuration of a smart-me device. The device needs to be online.
        api_instance.smart_me_device_configuration_post(smart_me_device_configuration_container)
    except Exception as e:
        print("Exception when calling SmartMeDeviceConfigurationApi->smart_me_device_configuration_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smart_me_device_configuration_container** | [**SmartMeDeviceConfigurationContainer**](SmartMeDeviceConfigurationContainer.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

