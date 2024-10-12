# openapi_client.PingApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_device_live_tools_ping_1**](PingApi.md#create_device_live_tools_ping_1) | **POST** /devices/{serial}/liveTools/ping | Enqueue a job to ping a target host from the device
[**get_device_live_tools_ping_1**](PingApi.md#get_device_live_tools_ping_1) | **GET** /devices/{serial}/liveTools/ping/{id} | Return a ping job


# **create_device_live_tools_ping_1**
> CreateDeviceLiveToolsPing201Response create_device_live_tools_ping_1(serial, create_device_live_tools_ping_request)

Enqueue a job to ping a target host from the device

Enqueue a job to ping a target host from the device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_live_tools_ping201_response import CreateDeviceLiveToolsPing201Response
from openapi_client.models.create_device_live_tools_ping_request import CreateDeviceLiveToolsPingRequest
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
    api_instance = openapi_client.PingApi(api_client)
    serial = 'serial_example' # str | 
    create_device_live_tools_ping_request = openapi_client.CreateDeviceLiveToolsPingRequest() # CreateDeviceLiveToolsPingRequest | 

    try:
        # Enqueue a job to ping a target host from the device
        api_response = api_instance.create_device_live_tools_ping_1(serial, create_device_live_tools_ping_request)
        print("The response of PingApi->create_device_live_tools_ping_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PingApi->create_device_live_tools_ping_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **create_device_live_tools_ping_request** | [**CreateDeviceLiveToolsPingRequest**](CreateDeviceLiveToolsPingRequest.md)|  | 

### Return type

[**CreateDeviceLiveToolsPing201Response**](CreateDeviceLiveToolsPing201Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_live_tools_ping_1**
> GetDeviceLiveToolsPing200Response get_device_live_tools_ping_1(serial, id)

Return a ping job

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_live_tools_ping200_response import GetDeviceLiveToolsPing200Response
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
    api_instance = openapi_client.PingApi(api_client)
    serial = 'serial_example' # str | 
    id = 'id_example' # str | 

    try:
        # Return a ping job
        api_response = api_instance.get_device_live_tools_ping_1(serial, id)
        print("The response of PingApi->get_device_live_tools_ping_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PingApi->get_device_live_tools_ping_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**GetDeviceLiveToolsPing200Response**](GetDeviceLiveToolsPing200Response.md)

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

