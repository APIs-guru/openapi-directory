# openapi_client.SimsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_cellular_sims_2**](SimsApi.md#get_device_cellular_sims_2) | **GET** /devices/{serial}/cellular/sims | Return the SIM and APN configurations for a cellular device.
[**update_device_cellular_sims_2**](SimsApi.md#update_device_cellular_sims_2) | **PUT** /devices/{serial}/cellular/sims | Updates the SIM and APN configurations for a cellular device.


# **get_device_cellular_sims_2**
> object get_device_cellular_sims_2(serial)

Return the SIM and APN configurations for a cellular device.

Return the SIM and APN configurations for a cellular device.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.SimsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the SIM and APN configurations for a cellular device.
        api_response = api_instance.get_device_cellular_sims_2(serial)
        print("The response of SimsApi->get_device_cellular_sims_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SimsApi->get_device_cellular_sims_2: %s\n" % e)
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

# **update_device_cellular_sims_2**
> object update_device_cellular_sims_2(serial, update_device_cellular_sims_request=update_device_cellular_sims_request)

Updates the SIM and APN configurations for a cellular device.

Updates the SIM and APN configurations for a cellular device.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_cellular_sims_request import UpdateDeviceCellularSimsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.SimsApi(api_client)
    serial = 'serial_example' # str | 
    update_device_cellular_sims_request = openapi_client.UpdateDeviceCellularSimsRequest() # UpdateDeviceCellularSimsRequest |  (optional)

    try:
        # Updates the SIM and APN configurations for a cellular device.
        api_response = api_instance.update_device_cellular_sims_2(serial, update_device_cellular_sims_request=update_device_cellular_sims_request)
        print("The response of SimsApi->update_device_cellular_sims_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SimsApi->update_device_cellular_sims_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_cellular_sims_request** | [**UpdateDeviceCellularSimsRequest**](UpdateDeviceCellularSimsRequest.md)|  | [optional] 

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

