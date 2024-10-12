# openapi_client.LiveToolsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blink_device_leds_0**](LiveToolsApi.md#blink_device_leds_0) | **POST** /devices/{serial}/blinkLeds | Blink the LEDs on a device
[**create_device_live_tools_ping_0**](LiveToolsApi.md#create_device_live_tools_ping_0) | **POST** /devices/{serial}/liveTools/ping | Enqueue a job to ping a target host from the device
[**create_device_live_tools_ping_device_0**](LiveToolsApi.md#create_device_live_tools_ping_device_0) | **POST** /devices/{serial}/liveTools/pingDevice | Enqueue a job to check connectivity status to the device
[**cycle_device_switch_ports_0**](LiveToolsApi.md#cycle_device_switch_ports_0) | **POST** /devices/{serial}/switch/ports/cycle | Cycle a set of switch ports
[**get_device_live_tools_ping_0**](LiveToolsApi.md#get_device_live_tools_ping_0) | **GET** /devices/{serial}/liveTools/ping/{id} | Return a ping job
[**get_device_live_tools_ping_device_0**](LiveToolsApi.md#get_device_live_tools_ping_device_0) | **GET** /devices/{serial}/liveTools/pingDevice/{id} | Return a ping device job
[**reboot_device_0**](LiveToolsApi.md#reboot_device_0) | **POST** /devices/{serial}/reboot | Reboot a device


# **blink_device_leds_0**
> object blink_device_leds_0(serial, blink_device_leds_request=blink_device_leds_request)

Blink the LEDs on a device

Blink the LEDs on a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.blink_device_leds_request import BlinkDeviceLedsRequest
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
    api_instance = openapi_client.LiveToolsApi(api_client)
    serial = 'serial_example' # str | 
    blink_device_leds_request = openapi_client.BlinkDeviceLedsRequest() # BlinkDeviceLedsRequest |  (optional)

    try:
        # Blink the LEDs on a device
        api_response = api_instance.blink_device_leds_0(serial, blink_device_leds_request=blink_device_leds_request)
        print("The response of LiveToolsApi->blink_device_leds_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveToolsApi->blink_device_leds_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **blink_device_leds_request** | [**BlinkDeviceLedsRequest**](BlinkDeviceLedsRequest.md)|  | [optional] 

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
**202** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_device_live_tools_ping_0**
> CreateDeviceLiveToolsPing201Response create_device_live_tools_ping_0(serial, create_device_live_tools_ping_request)

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
    api_instance = openapi_client.LiveToolsApi(api_client)
    serial = 'serial_example' # str | 
    create_device_live_tools_ping_request = openapi_client.CreateDeviceLiveToolsPingRequest() # CreateDeviceLiveToolsPingRequest | 

    try:
        # Enqueue a job to ping a target host from the device
        api_response = api_instance.create_device_live_tools_ping_0(serial, create_device_live_tools_ping_request)
        print("The response of LiveToolsApi->create_device_live_tools_ping_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveToolsApi->create_device_live_tools_ping_0: %s\n" % e)
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

# **create_device_live_tools_ping_device_0**
> CreateDeviceLiveToolsPing201Response create_device_live_tools_ping_device_0(serial, create_device_live_tools_ping_device_request=create_device_live_tools_ping_device_request)

Enqueue a job to check connectivity status to the device

Enqueue a job to check connectivity status to the device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_live_tools_ping201_response import CreateDeviceLiveToolsPing201Response
from openapi_client.models.create_device_live_tools_ping_device_request import CreateDeviceLiveToolsPingDeviceRequest
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
    api_instance = openapi_client.LiveToolsApi(api_client)
    serial = 'serial_example' # str | 
    create_device_live_tools_ping_device_request = openapi_client.CreateDeviceLiveToolsPingDeviceRequest() # CreateDeviceLiveToolsPingDeviceRequest |  (optional)

    try:
        # Enqueue a job to check connectivity status to the device
        api_response = api_instance.create_device_live_tools_ping_device_0(serial, create_device_live_tools_ping_device_request=create_device_live_tools_ping_device_request)
        print("The response of LiveToolsApi->create_device_live_tools_ping_device_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveToolsApi->create_device_live_tools_ping_device_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **create_device_live_tools_ping_device_request** | [**CreateDeviceLiveToolsPingDeviceRequest**](CreateDeviceLiveToolsPingDeviceRequest.md)|  | [optional] 

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

# **cycle_device_switch_ports_0**
> object cycle_device_switch_ports_0(serial, cycle_device_switch_ports_request)

Cycle a set of switch ports

Cycle a set of switch ports

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.cycle_device_switch_ports_request import CycleDeviceSwitchPortsRequest
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
    api_instance = openapi_client.LiveToolsApi(api_client)
    serial = 'serial_example' # str | 
    cycle_device_switch_ports_request = openapi_client.CycleDeviceSwitchPortsRequest() # CycleDeviceSwitchPortsRequest | 

    try:
        # Cycle a set of switch ports
        api_response = api_instance.cycle_device_switch_ports_0(serial, cycle_device_switch_ports_request)
        print("The response of LiveToolsApi->cycle_device_switch_ports_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveToolsApi->cycle_device_switch_ports_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **cycle_device_switch_ports_request** | [**CycleDeviceSwitchPortsRequest**](CycleDeviceSwitchPortsRequest.md)|  | 

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

# **get_device_live_tools_ping_0**
> GetDeviceLiveToolsPing200Response get_device_live_tools_ping_0(serial, id)

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
    api_instance = openapi_client.LiveToolsApi(api_client)
    serial = 'serial_example' # str | 
    id = 'id_example' # str | 

    try:
        # Return a ping job
        api_response = api_instance.get_device_live_tools_ping_0(serial, id)
        print("The response of LiveToolsApi->get_device_live_tools_ping_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveToolsApi->get_device_live_tools_ping_0: %s\n" % e)
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

# **get_device_live_tools_ping_device_0**
> GetDeviceLiveToolsPing200Response get_device_live_tools_ping_device_0(serial, id)

Return a ping device job

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

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
    api_instance = openapi_client.LiveToolsApi(api_client)
    serial = 'serial_example' # str | 
    id = 'id_example' # str | 

    try:
        # Return a ping device job
        api_response = api_instance.get_device_live_tools_ping_device_0(serial, id)
        print("The response of LiveToolsApi->get_device_live_tools_ping_device_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveToolsApi->get_device_live_tools_ping_device_0: %s\n" % e)
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

# **reboot_device_0**
> object reboot_device_0(serial)

Reboot a device

Reboot a device

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
    api_instance = openapi_client.LiveToolsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Reboot a device
        api_response = api_instance.reboot_device_0(serial)
        print("The response of LiveToolsApi->reboot_device_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveToolsApi->reboot_device_0: %s\n" % e)
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
**202** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

