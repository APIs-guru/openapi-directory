# openapi_client.TrustedServersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3**](TrustedServersApi.md#create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3) | **POST** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers | Add a server to be trusted by Dynamic ARP Inspection on this network
[**delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3**](TrustedServersApi.md#delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3) | **DELETE** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId} | Remove a server from being trusted by Dynamic ARP Inspection on this network
[**get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers_3**](TrustedServersApi.md#get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers_3) | **GET** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers | Return the list of servers trusted by Dynamic ARP Inspection on this network
[**update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3**](TrustedServersApi.md#update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3) | **PUT** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId} | Update a server that is trusted by Dynamic ARP Inspection on this network


# **create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3**
> GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3(network_id, create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request)

Add a server to be trusted by Dynamic ARP Inspection on this network

Add a server to be trusted by Dynamic ARP Inspection on this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request import CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner
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
    api_instance = openapi_client.TrustedServersApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request = openapi_client.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest() # CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest | 

    try:
        # Add a server to be trusted by Dynamic ARP Inspection on this network
        api_response = api_instance.create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3(network_id, create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request)
        print("The response of TrustedServersApi->create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustedServersApi->create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request** | [**CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest**](CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.md)|  | 

### Return type

[**GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner**](GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.md)

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

# **delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3**
> delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3(network_id, trusted_server_id)

Remove a server from being trusted by Dynamic ARP Inspection on this network

Remove a server from being trusted by Dynamic ARP Inspection on this network

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
    api_instance = openapi_client.TrustedServersApi(api_client)
    network_id = 'network_id_example' # str | 
    trusted_server_id = 'trusted_server_id_example' # str | 

    try:
        # Remove a server from being trusted by Dynamic ARP Inspection on this network
        api_instance.delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3(network_id, trusted_server_id)
    except Exception as e:
        print("Exception when calling TrustedServersApi->delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **trusted_server_id** | **str**|  | 

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

# **get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers_3**
> List[GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner] get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers_3(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the list of servers trusted by Dynamic ARP Inspection on this network

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner
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
    api_instance = openapi_client.TrustedServersApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the list of servers trusted by Dynamic ARP Inspection on this network
        api_response = api_instance.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers_3(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of TrustedServersApi->get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustedServersApi->get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner]**](GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.md)

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

# **update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3**
> GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3(network_id, trusted_server_id, update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request=update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request)

Update a server that is trusted by Dynamic ARP Inspection on this network

Update a server that is trusted by Dynamic ARP Inspection on this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner
from openapi_client.models.update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request import UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest
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
    api_instance = openapi_client.TrustedServersApi(api_client)
    network_id = 'network_id_example' # str | 
    trusted_server_id = 'trusted_server_id_example' # str | 
    update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request = openapi_client.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest() # UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest |  (optional)

    try:
        # Update a server that is trusted by Dynamic ARP Inspection on this network
        api_response = api_instance.update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3(network_id, trusted_server_id, update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request=update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request)
        print("The response of TrustedServersApi->update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustedServersApi->update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **trusted_server_id** | **str**|  | 
 **update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request** | [**UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest**](UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.md)|  | [optional] 

### Return type

[**GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner**](GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.md)

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

