# openapi_client.DhcpApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_appliance_dhcp_subnets_1**](DhcpApi.md#get_device_appliance_dhcp_subnets_1) | **GET** /devices/{serial}/appliance/dhcp/subnets | Return the DHCP subnet information for an appliance
[**get_device_switch_routing_interface_dhcp_3**](DhcpApi.md#get_device_switch_routing_interface_dhcp_3) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch
[**get_network_cellular_gateway_dhcp_1**](DhcpApi.md#get_network_cellular_gateway_dhcp_1) | **GET** /networks/{networkId}/cellularGateway/dhcp | List common DHCP settings of MGs
[**get_network_switch_dhcp_v4_servers_seen_1**](DhcpApi.md#get_network_switch_dhcp_v4_servers_seen_1) | **GET** /networks/{networkId}/switch/dhcp/v4/servers/seen | Return the network&#39;s DHCPv4 servers seen within the selected timeframe (default 1 day)
[**get_network_switch_stack_routing_interface_dhcp_4**](DhcpApi.md#get_network_switch_stack_routing_interface_dhcp_4) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**update_device_switch_routing_interface_dhcp_3**](DhcpApi.md#update_device_switch_routing_interface_dhcp_3) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch
[**update_network_cellular_gateway_dhcp_1**](DhcpApi.md#update_network_cellular_gateway_dhcp_1) | **PUT** /networks/{networkId}/cellularGateway/dhcp | Update common DHCP settings of MGs
[**update_network_switch_stack_routing_interface_dhcp_4**](DhcpApi.md#update_network_switch_stack_routing_interface_dhcp_4) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack


# **get_device_appliance_dhcp_subnets_1**
> List[object] get_device_appliance_dhcp_subnets_1(serial)

Return the DHCP subnet information for an appliance

Return the DHCP subnet information for an appliance

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
    api_instance = openapi_client.DhcpApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the DHCP subnet information for an appliance
        api_response = api_instance.get_device_appliance_dhcp_subnets_1(serial)
        print("The response of DhcpApi->get_device_appliance_dhcp_subnets_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DhcpApi->get_device_appliance_dhcp_subnets_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_device_switch_routing_interface_dhcp_3**
> object get_device_switch_routing_interface_dhcp_3(serial, interface_id)

Return a layer 3 interface DHCP configuration for a switch

Return a layer 3 interface DHCP configuration for a switch

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
    api_instance = openapi_client.DhcpApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface DHCP configuration for a switch
        api_response = api_instance.get_device_switch_routing_interface_dhcp_3(serial, interface_id)
        print("The response of DhcpApi->get_device_switch_routing_interface_dhcp_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DhcpApi->get_device_switch_routing_interface_dhcp_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 

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

# **get_network_cellular_gateway_dhcp_1**
> GetNetworkCellularGatewayDhcp200Response get_network_cellular_gateway_dhcp_1(network_id)

List common DHCP settings of MGs

List common DHCP settings of MGs

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_cellular_gateway_dhcp200_response import GetNetworkCellularGatewayDhcp200Response
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
    api_instance = openapi_client.DhcpApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List common DHCP settings of MGs
        api_response = api_instance.get_network_cellular_gateway_dhcp_1(network_id)
        print("The response of DhcpApi->get_network_cellular_gateway_dhcp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DhcpApi->get_network_cellular_gateway_dhcp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkCellularGatewayDhcp200Response**](GetNetworkCellularGatewayDhcp200Response.md)

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

# **get_network_switch_dhcp_v4_servers_seen_1**
> List[GetNetworkSwitchDhcpV4ServersSeen200ResponseInner] get_network_switch_dhcp_v4_servers_seen_1(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner import GetNetworkSwitchDhcpV4ServersSeen200ResponseInner
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
    api_instance = openapi_client.DhcpApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
        api_response = api_instance.get_network_switch_dhcp_v4_servers_seen_1(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of DhcpApi->get_network_switch_dhcp_v4_servers_seen_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DhcpApi->get_network_switch_dhcp_v4_servers_seen_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSwitchDhcpV4ServersSeen200ResponseInner]**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInner.md)

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

# **get_network_switch_stack_routing_interface_dhcp_4**
> object get_network_switch_stack_routing_interface_dhcp_4(network_id, switch_stack_id, interface_id)

Return a layer 3 interface DHCP configuration for a switch stack

Return a layer 3 interface DHCP configuration for a switch stack

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
    api_instance = openapi_client.DhcpApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface DHCP configuration for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interface_dhcp_4(network_id, switch_stack_id, interface_id)
        print("The response of DhcpApi->get_network_switch_stack_routing_interface_dhcp_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DhcpApi->get_network_switch_stack_routing_interface_dhcp_4: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 

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

# **update_device_switch_routing_interface_dhcp_3**
> object update_device_switch_routing_interface_dhcp_3(serial, interface_id, update_device_switch_routing_interface_dhcp_request=update_device_switch_routing_interface_dhcp_request)

Update a layer 3 interface DHCP configuration for a switch

Update a layer 3 interface DHCP configuration for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_switch_routing_interface_dhcp_request import UpdateDeviceSwitchRoutingInterfaceDhcpRequest
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
    api_instance = openapi_client.DhcpApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_device_switch_routing_interface_dhcp_request = openapi_client.UpdateDeviceSwitchRoutingInterfaceDhcpRequest() # UpdateDeviceSwitchRoutingInterfaceDhcpRequest |  (optional)

    try:
        # Update a layer 3 interface DHCP configuration for a switch
        api_response = api_instance.update_device_switch_routing_interface_dhcp_3(serial, interface_id, update_device_switch_routing_interface_dhcp_request=update_device_switch_routing_interface_dhcp_request)
        print("The response of DhcpApi->update_device_switch_routing_interface_dhcp_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DhcpApi->update_device_switch_routing_interface_dhcp_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 
 **update_device_switch_routing_interface_dhcp_request** | [**UpdateDeviceSwitchRoutingInterfaceDhcpRequest**](UpdateDeviceSwitchRoutingInterfaceDhcpRequest.md)|  | [optional] 

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

# **update_network_cellular_gateway_dhcp_1**
> GetNetworkCellularGatewayDhcp200Response update_network_cellular_gateway_dhcp_1(network_id, update_network_cellular_gateway_dhcp_request=update_network_cellular_gateway_dhcp_request)

Update common DHCP settings of MGs

Update common DHCP settings of MGs

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_cellular_gateway_dhcp200_response import GetNetworkCellularGatewayDhcp200Response
from openapi_client.models.update_network_cellular_gateway_dhcp_request import UpdateNetworkCellularGatewayDhcpRequest
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
    api_instance = openapi_client.DhcpApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_cellular_gateway_dhcp_request = openapi_client.UpdateNetworkCellularGatewayDhcpRequest() # UpdateNetworkCellularGatewayDhcpRequest |  (optional)

    try:
        # Update common DHCP settings of MGs
        api_response = api_instance.update_network_cellular_gateway_dhcp_1(network_id, update_network_cellular_gateway_dhcp_request=update_network_cellular_gateway_dhcp_request)
        print("The response of DhcpApi->update_network_cellular_gateway_dhcp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DhcpApi->update_network_cellular_gateway_dhcp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_cellular_gateway_dhcp_request** | [**UpdateNetworkCellularGatewayDhcpRequest**](UpdateNetworkCellularGatewayDhcpRequest.md)|  | [optional] 

### Return type

[**GetNetworkCellularGatewayDhcp200Response**](GetNetworkCellularGatewayDhcp200Response.md)

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

# **update_network_switch_stack_routing_interface_dhcp_4**
> object update_network_switch_stack_routing_interface_dhcp_4(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_dhcp_request=update_network_switch_stack_routing_interface_dhcp_request)

Update a layer 3 interface DHCP configuration for a switch stack

Update a layer 3 interface DHCP configuration for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_stack_routing_interface_dhcp_request import UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest
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
    api_instance = openapi_client.DhcpApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_network_switch_stack_routing_interface_dhcp_request = openapi_client.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest() # UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest |  (optional)

    try:
        # Update a layer 3 interface DHCP configuration for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_interface_dhcp_4(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_dhcp_request=update_network_switch_stack_routing_interface_dhcp_request)
        print("The response of DhcpApi->update_network_switch_stack_routing_interface_dhcp_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DhcpApi->update_network_switch_stack_routing_interface_dhcp_4: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 
 **update_network_switch_stack_routing_interface_dhcp_request** | [**UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest**](UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest.md)|  | [optional] 

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

