# openapi_client.UserAccessDevicesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_network_sm_user_access_device_1**](UserAccessDevicesApi.md#delete_network_sm_user_access_device_1) | **DELETE** /networks/{networkId}/sm/userAccessDevices/{userAccessDeviceId} | Delete a User Access Device
[**get_network_sm_user_access_devices_1**](UserAccessDevicesApi.md#get_network_sm_user_access_devices_1) | **GET** /networks/{networkId}/sm/userAccessDevices | List User Access Devices and its Trusted Access Connections


# **delete_network_sm_user_access_device_1**
> delete_network_sm_user_access_device_1(network_id, user_access_device_id)

Delete a User Access Device

Delete a User Access Device

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
    api_instance = openapi_client.UserAccessDevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    user_access_device_id = 'user_access_device_id_example' # str | 

    try:
        # Delete a User Access Device
        api_instance.delete_network_sm_user_access_device_1(network_id, user_access_device_id)
    except Exception as e:
        print("Exception when calling UserAccessDevicesApi->delete_network_sm_user_access_device_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **user_access_device_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_user_access_devices_1**
> List[GetNetworkSmUserAccessDevices200ResponseInner] get_network_sm_user_access_devices_1(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List User Access Devices and its Trusted Access Connections

List User Access Devices and its Trusted Access Connections

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_user_access_devices200_response_inner import GetNetworkSmUserAccessDevices200ResponseInner
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
    api_instance = openapi_client.UserAccessDevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List User Access Devices and its Trusted Access Connections
        api_response = api_instance.get_network_sm_user_access_devices_1(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of UserAccessDevicesApi->get_network_sm_user_access_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserAccessDevicesApi->get_network_sm_user_access_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmUserAccessDevices200ResponseInner]**](GetNetworkSmUserAccessDevices200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

