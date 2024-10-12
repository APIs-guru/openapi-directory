# openapi_client.CustomDeviceApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_custom_device_id_get**](CustomDeviceApi.md#api_custom_device_id_get) | **GET** /api/CustomDevice/{id} | Gets a Custom Device by it&#39;s ID
[**custom_device_get**](CustomDeviceApi.md#custom_device_get) | **GET** /api/CustomDevice | Gets all Custom Devices
[**custom_device_post**](CustomDeviceApi.md#custom_device_post) | **POST** /api/CustomDevice | Creates or updates a Custom Device or updates it&#39;s values.


# **api_custom_device_id_get**
> CustomDeviceToPost api_custom_device_id_get(id)

Gets a Custom Device by it's ID

Gets a Device by it's ID

### Example


```python
import openapi_client
from openapi_client.models.custom_device_to_post import CustomDeviceToPost
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
    api_instance = openapi_client.CustomDeviceApi(api_client)
    id = 'id_example' # str | The ID of the device

    try:
        # Gets a Custom Device by it's ID
        api_response = api_instance.api_custom_device_id_get(id)
        print("The response of CustomDeviceApi->api_custom_device_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomDeviceApi->api_custom_device_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the device | 

### Return type

[**CustomDeviceToPost**](CustomDeviceToPost.md)

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

# **custom_device_get**
> List[CustomDeviceToPost] custom_device_get()

Gets all Custom Devices

Gets all Devices

### Example


```python
import openapi_client
from openapi_client.models.custom_device_to_post import CustomDeviceToPost
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
    api_instance = openapi_client.CustomDeviceApi(api_client)

    try:
        # Gets all Custom Devices
        api_response = api_instance.custom_device_get()
        print("The response of CustomDeviceApi->custom_device_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomDeviceApi->custom_device_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[CustomDeviceToPost]**](CustomDeviceToPost.md)

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

# **custom_device_post**
> CustomDeviceToPost custom_device_post(custom_device_to_post)

Creates or updates a Custom Device or updates it's values.

Creates or updates a Custom Device or updates it's values.              A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.              Only use a custom device for all non meters.              For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.              To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example


```python
import openapi_client
from openapi_client.models.custom_device_to_post import CustomDeviceToPost
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
    api_instance = openapi_client.CustomDeviceApi(api_client)
    custom_device_to_post = openapi_client.CustomDeviceToPost() # CustomDeviceToPost | Device object with all the data

    try:
        # Creates or updates a Custom Device or updates it's values.
        api_response = api_instance.custom_device_post(custom_device_to_post)
        print("The response of CustomDeviceApi->custom_device_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomDeviceApi->custom_device_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_device_to_post** | [**CustomDeviceToPost**](CustomDeviceToPost.md)| Device object with all the data | 

### Return type

[**CustomDeviceToPost**](CustomDeviceToPost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

