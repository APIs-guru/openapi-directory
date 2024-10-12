# openapi_client.SyslogServersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_syslog_servers_1**](SyslogServersApi.md#get_network_syslog_servers_1) | **GET** /networks/{networkId}/syslogServers | List the syslog servers for a network
[**update_network_syslog_servers_1**](SyslogServersApi.md#update_network_syslog_servers_1) | **PUT** /networks/{networkId}/syslogServers | Update the syslog servers for a network


# **get_network_syslog_servers_1**
> GetNetworkSyslogServers200Response get_network_syslog_servers_1(network_id)

List the syslog servers for a network

List the syslog servers for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_syslog_servers200_response import GetNetworkSyslogServers200Response
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
    api_instance = openapi_client.SyslogServersApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the syslog servers for a network
        api_response = api_instance.get_network_syslog_servers_1(network_id)
        print("The response of SyslogServersApi->get_network_syslog_servers_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyslogServersApi->get_network_syslog_servers_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSyslogServers200Response**](GetNetworkSyslogServers200Response.md)

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

# **update_network_syslog_servers_1**
> GetNetworkSyslogServers200Response update_network_syslog_servers_1(network_id, update_network_syslog_servers_request)

Update the syslog servers for a network

Update the syslog servers for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_syslog_servers200_response import GetNetworkSyslogServers200Response
from openapi_client.models.update_network_syslog_servers_request import UpdateNetworkSyslogServersRequest
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
    api_instance = openapi_client.SyslogServersApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_syslog_servers_request = openapi_client.UpdateNetworkSyslogServersRequest() # UpdateNetworkSyslogServersRequest | 

    try:
        # Update the syslog servers for a network
        api_response = api_instance.update_network_syslog_servers_1(network_id, update_network_syslog_servers_request)
        print("The response of SyslogServersApi->update_network_syslog_servers_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyslogServersApi->update_network_syslog_servers_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_syslog_servers_request** | [**UpdateNetworkSyslogServersRequest**](UpdateNetworkSyslogServersRequest.md)|  | 

### Return type

[**GetNetworkSyslogServers200Response**](GetNetworkSyslogServers200Response.md)

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

