# openapi_client.MGLANSettingsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_cellular_gateway_settings**](MGLANSettingsApi.md#get_device_cellular_gateway_settings) | **GET** /devices/{serial}/cellularGateway/settings | Show the LAN Settings of a MG
[**update_device_cellular_gateway_settings**](MGLANSettingsApi.md#update_device_cellular_gateway_settings) | **PUT** /devices/{serial}/cellularGateway/settings | Update the LAN Settings for a single MG.


# **get_device_cellular_gateway_settings**
> object get_device_cellular_gateway_settings(serial)

Show the LAN Settings of a MG

Show the LAN Settings of a MG

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MGLANSettingsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Show the LAN Settings of a MG
        api_response = api_instance.get_device_cellular_gateway_settings(serial)
        print("The response of MGLANSettingsApi->get_device_cellular_gateway_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MGLANSettingsApi->get_device_cellular_gateway_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_cellular_gateway_settings**
> object update_device_cellular_gateway_settings(serial, update_device_cellular_gateway_settings_request=update_device_cellular_gateway_settings_request)

Update the LAN Settings for a single MG.

Update the LAN Settings for a single MG.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_cellular_gateway_settings_request import UpdateDeviceCellularGatewaySettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MGLANSettingsApi(api_client)
    serial = 'serial_example' # str | 
    update_device_cellular_gateway_settings_request = openapi_client.UpdateDeviceCellularGatewaySettingsRequest() # UpdateDeviceCellularGatewaySettingsRequest |  (optional)

    try:
        # Update the LAN Settings for a single MG.
        api_response = api_instance.update_device_cellular_gateway_settings(serial, update_device_cellular_gateway_settings_request=update_device_cellular_gateway_settings_request)
        print("The response of MGLANSettingsApi->update_device_cellular_gateway_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MGLANSettingsApi->update_device_cellular_gateway_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_cellular_gateway_settings_request** | [**UpdateDeviceCellularGatewaySettingsRequest**](UpdateDeviceCellularGatewaySettingsRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

