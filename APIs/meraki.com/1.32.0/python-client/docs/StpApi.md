# openapi_client.StpApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_switch_stp_1**](StpApi.md#get_network_switch_stp_1) | **GET** /networks/{networkId}/switch/stp | Returns STP settings
[**update_network_switch_stp_1**](StpApi.md#update_network_switch_stp_1) | **PUT** /networks/{networkId}/switch/stp | Updates STP settings


# **get_network_switch_stp_1**
> object get_network_switch_stp_1(network_id)

Returns STP settings

Returns STP settings

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
    api_instance = openapi_client.StpApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns STP settings
        api_response = api_instance.get_network_switch_stp_1(network_id)
        print("The response of StpApi->get_network_switch_stp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StpApi->get_network_switch_stp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **update_network_switch_stp_1**
> object update_network_switch_stp_1(network_id, update_network_switch_stp_request=update_network_switch_stp_request)

Updates STP settings

Updates STP settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_stp_request import UpdateNetworkSwitchStpRequest
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
    api_instance = openapi_client.StpApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_stp_request = openapi_client.UpdateNetworkSwitchStpRequest() # UpdateNetworkSwitchStpRequest |  (optional)

    try:
        # Updates STP settings
        api_response = api_instance.update_network_switch_stp_1(network_id, update_network_switch_stp_request=update_network_switch_stp_request)
        print("The response of StpApi->update_network_switch_stp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StpApi->update_network_switch_stp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_stp_request** | [**UpdateNetworkSwitchStpRequest**](UpdateNetworkSwitchStpRequest.md)|  | [optional] 

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

