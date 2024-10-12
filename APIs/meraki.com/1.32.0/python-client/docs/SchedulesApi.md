# openapi_client.SchedulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_camera_schedules_1**](SchedulesApi.md#get_network_camera_schedules_1) | **GET** /networks/{networkId}/camera/schedules | Returns a list of all camera recording schedules.
[**get_network_wireless_ssid_schedules_2**](SchedulesApi.md#get_network_wireless_ssid_schedules_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/schedules | List the outage schedule for the SSID
[**update_network_wireless_ssid_schedules_2**](SchedulesApi.md#update_network_wireless_ssid_schedules_2) | **PUT** /networks/{networkId}/wireless/ssids/{number}/schedules | Update the outage schedule for the SSID


# **get_network_camera_schedules_1**
> List[object] get_network_camera_schedules_1(network_id)

Returns a list of all camera recording schedules.

Returns a list of all camera recording schedules.

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
    api_instance = openapi_client.SchedulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns a list of all camera recording schedules.
        api_response = api_instance.get_network_camera_schedules_1(network_id)
        print("The response of SchedulesApi->get_network_camera_schedules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SchedulesApi->get_network_camera_schedules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

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

# **get_network_wireless_ssid_schedules_2**
> object get_network_wireless_ssid_schedules_2(network_id, number)

List the outage schedule for the SSID

List the outage schedule for the SSID

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
    api_instance = openapi_client.SchedulesApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the outage schedule for the SSID
        api_response = api_instance.get_network_wireless_ssid_schedules_2(network_id, number)
        print("The response of SchedulesApi->get_network_wireless_ssid_schedules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SchedulesApi->get_network_wireless_ssid_schedules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

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

# **update_network_wireless_ssid_schedules_2**
> object update_network_wireless_ssid_schedules_2(network_id, number, update_network_wireless_ssid_schedules_request=update_network_wireless_ssid_schedules_request)

Update the outage schedule for the SSID

Update the outage schedule for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_schedules_request import UpdateNetworkWirelessSsidSchedulesRequest
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
    api_instance = openapi_client.SchedulesApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_schedules_request = openapi_client.UpdateNetworkWirelessSsidSchedulesRequest() # UpdateNetworkWirelessSsidSchedulesRequest |  (optional)

    try:
        # Update the outage schedule for the SSID
        api_response = api_instance.update_network_wireless_ssid_schedules_2(network_id, number, update_network_wireless_ssid_schedules_request=update_network_wireless_ssid_schedules_request)
        print("The response of SchedulesApi->update_network_wireless_ssid_schedules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SchedulesApi->update_network_wireless_ssid_schedules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_schedules_request** | [**UpdateNetworkWirelessSsidSchedulesRequest**](UpdateNetworkWirelessSsidSchedulesRequest.md)|  | [optional] 

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

