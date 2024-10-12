# openapi_client.MtuApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_switch_mtu_1**](MtuApi.md#get_network_switch_mtu_1) | **GET** /networks/{networkId}/switch/mtu | Return the MTU configuration
[**update_network_switch_mtu_1**](MtuApi.md#update_network_switch_mtu_1) | **PUT** /networks/{networkId}/switch/mtu | Update the MTU configuration


# **get_network_switch_mtu_1**
> GetNetworkSwitchMtu200Response get_network_switch_mtu_1(network_id)

Return the MTU configuration

Return the MTU configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_mtu200_response import GetNetworkSwitchMtu200Response
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
    api_instance = openapi_client.MtuApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the MTU configuration
        api_response = api_instance.get_network_switch_mtu_1(network_id)
        print("The response of MtuApi->get_network_switch_mtu_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MtuApi->get_network_switch_mtu_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSwitchMtu200Response**](GetNetworkSwitchMtu200Response.md)

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

# **update_network_switch_mtu_1**
> object update_network_switch_mtu_1(network_id, update_network_switch_mtu_request=update_network_switch_mtu_request)

Update the MTU configuration

Update the MTU configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_mtu_request import UpdateNetworkSwitchMtuRequest
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
    api_instance = openapi_client.MtuApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_mtu_request = openapi_client.UpdateNetworkSwitchMtuRequest() # UpdateNetworkSwitchMtuRequest |  (optional)

    try:
        # Update the MTU configuration
        api_response = api_instance.update_network_switch_mtu_1(network_id, update_network_switch_mtu_request=update_network_switch_mtu_request)
        print("The response of MtuApi->update_network_switch_mtu_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MtuApi->update_network_switch_mtu_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_mtu_request** | [**UpdateNetworkSwitchMtuRequest**](UpdateNetworkSwitchMtuRequest.md)|  | [optional] 

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

