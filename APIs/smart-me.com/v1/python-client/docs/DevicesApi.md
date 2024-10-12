# openapi_client.DevicesApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_devices_id_get**](DevicesApi.md#api_devices_id_get) | **GET** /api/Devices/{id} | Gets a Device by it&#39;s ID
[**devices_get**](DevicesApi.md#devices_get) | **GET** /api/Devices | Gets all Devices
[**devices_post**](DevicesApi.md#devices_post) | **POST** /api/Devices | Creates or updates a Device or updates it&#39;s values.
[**devices_put**](DevicesApi.md#devices_put) | **PUT** /api/Devices/{id} | Updates the On/Off Switch on a device.               For new implementations please use the \&quot;actions\&quot; command


# **api_devices_id_get**
> Device api_devices_id_get(id)

Gets a Device by it's ID

Gets a Device by it's ID

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
    api_instance = openapi_client.DevicesApi(api_client)
    id = 'id_example' # str | The ID of the device

    try:
        # Gets a Device by it's ID
        api_response = api_instance.api_devices_id_get(id)
        print("The response of DevicesApi->api_devices_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->api_devices_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the device | 

### Return type

[**Device**](Device.md)

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

# **devices_get**
> List[Device] devices_get()

Gets all Devices

Gets all Devices

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
    api_instance = openapi_client.DevicesApi(api_client)

    try:
        # Gets all Devices
        api_response = api_instance.devices_get()
        print("The response of DevicesApi->devices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

# **devices_post**
> DeviceToPost devices_post(device_to_post)

Creates or updates a Device or updates it's values.

Creates or updates a Device or updates it's values.               For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.              To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example


```python
import openapi_client
from openapi_client.models.device_to_post import DeviceToPost
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
    api_instance = openapi_client.DevicesApi(api_client)
    device_to_post = openapi_client.DeviceToPost() # DeviceToPost | Device object with all the data

    try:
        # Creates or updates a Device or updates it's values.
        api_response = api_instance.devices_post(device_to_post)
        print("The response of DevicesApi->devices_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_to_post** | [**DeviceToPost**](DeviceToPost.md)| Device object with all the data | 

### Return type

[**DeviceToPost**](DeviceToPost.md)

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

# **devices_put**
> object devices_put(id, switch_state, switch_number=switch_number)

Updates the On/Off Switch on a device.               For new implementations please use the \"actions\" command

Updates the On/Off Switch on a device              For new implementations please use the \"actions\" command

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
    api_instance = openapi_client.DevicesApi(api_client)
    id = 'id_example' # str | The ID of the device
    switch_state = True # bool | The new state of the switch
    switch_number = 56 # int | The number of the switch if there are multiple (1 for L1, 3 for L3) (optional)

    try:
        # Updates the On/Off Switch on a device.               For new implementations please use the \"actions\" command
        api_response = api_instance.devices_put(id, switch_state, switch_number=switch_number)
        print("The response of DevicesApi->devices_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the device | 
 **switch_state** | **bool**| The new state of the switch | 
 **switch_number** | **int**| The number of the switch if there are multiple (1 for L1, 3 for L3) | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**405** | MethodNotAllowed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

