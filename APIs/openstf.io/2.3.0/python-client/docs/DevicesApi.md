# openapi_client.DevicesApi

All URIs are relative to *http://openstf.local/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_by_serial**](DevicesApi.md#get_device_by_serial) | **GET** /devices/{serial} | Device Information
[**get_devices**](DevicesApi.md#get_devices) | **GET** /devices | Device List


# **get_device_by_serial**
> DeviceResponse get_device_by_serial(serial, fields=fields)

Device Information

The device enpoint return information about a single device

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.models.device_response import DeviceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | Device Serial
    fields = 'fields_example' # str | Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response (optional)

    try:
        # Device Information
        api_response = api_instance.get_device_by_serial(serial, fields=fields)
        print("The response of DevicesApi->get_device_by_serial:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device_by_serial: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**| Device Serial | 
 **fields** | **str**| Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response | [optional] 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device Information |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_devices**
> DeviceListResponse get_devices(fields=fields)

Device List

The devices endpoint return list of all the STF devices including Disconnected and Offline

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.models.device_list_response import DeviceListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DevicesApi(api_client)
    fields = 'fields_example' # str | Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response (optional)

    try:
        # Device List
        api_response = api_instance.get_devices(fields=fields)
        print("The response of DevicesApi->get_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **str**| Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response | [optional] 

### Return type

[**DeviceListResponse**](DeviceListResponse.md)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Devices |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

