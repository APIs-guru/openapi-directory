# openapi_client.VirtualNetworkGatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_network_gateways_create_or_update**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName} | 
[**virtual_network_gateways_delete**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName} | 
[**virtual_network_gateways_generate_vpn_profile**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_generate_vpn_profile) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/generatevpnprofile | 
[**virtual_network_gateways_generatevpnclientpackage**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_generatevpnclientpackage) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/generatevpnclientpackage | 
[**virtual_network_gateways_get**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName} | 
[**virtual_network_gateways_get_advertised_routes**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_get_advertised_routes) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/getAdvertisedRoutes | 
[**virtual_network_gateways_get_bgp_peer_status**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_get_bgp_peer_status) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/getBgpPeerStatus | 
[**virtual_network_gateways_get_learned_routes**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_get_learned_routes) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/getLearnedRoutes | 
[**virtual_network_gateways_get_vpn_profile_package_url**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_get_vpn_profile_package_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/getvpnprofilepackageurl | 
[**virtual_network_gateways_get_vpnclient_connection_health**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_get_vpnclient_connection_health) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/getVpnClientConnectionHealth | 
[**virtual_network_gateways_get_vpnclient_ipsec_parameters**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_get_vpnclient_ipsec_parameters) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/getvpnclientipsecparameters | 
[**virtual_network_gateways_list**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways | 
[**virtual_network_gateways_list_connections**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_list_connections) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/connections | 
[**virtual_network_gateways_reset**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_reset) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/reset | 
[**virtual_network_gateways_reset_vpn_client_shared_key**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_reset_vpn_client_shared_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/resetvpnclientsharedkey | 
[**virtual_network_gateways_set_vpnclient_ipsec_parameters**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_set_vpnclient_ipsec_parameters) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/setvpnclientipsecparameters | 
[**virtual_network_gateways_start_packet_capture**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_start_packet_capture) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/startPacketCapture | 
[**virtual_network_gateways_stop_packet_capture**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_stop_packet_capture) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/stopPacketCapture | 
[**virtual_network_gateways_supported_vpn_devices**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_supported_vpn_devices) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/supportedvpndevices | 
[**virtual_network_gateways_update_tags**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName} | 
[**virtual_network_gateways_vpn_device_configuration_script**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_vpn_device_configuration_script) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}/vpndeviceconfigurationscript | 


# **virtual_network_gateways_create_or_update**
> VirtualNetworkGateway virtual_network_gateways_create_or_update(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)



Creates or updates a virtual network gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway import VirtualNetworkGateway
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualNetworkGateway() # VirtualNetworkGateway | Parameters supplied to create or update virtual network gateway operation.

    try:
        api_response = api_instance.virtual_network_gateways_create_or_update(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualNetworkGateway**](VirtualNetworkGateway.md)| Parameters supplied to create or update virtual network gateway operation. | 

### Return type

[**VirtualNetworkGateway**](VirtualNetworkGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting VirtualNetworkGateway resource. |  -  |
**201** | Create successful. The operation returns the resulting VirtualNetworkGateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_delete**
> virtual_network_gateways_delete(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



Deletes the specified virtual network gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_network_gateways_delete(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_generate_vpn_profile**
> str virtual_network_gateways_generate_vpn_profile(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)



Generates VPN profile for P2S client of the virtual network gateway in the specified resource group. Used for IKEV2 and radius based authentication.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_client_parameters import VpnClientParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VpnClientParameters() # VpnClientParameters | Parameters supplied to the generate virtual network gateway VPN client package operation.

    try:
        api_response = api_instance.virtual_network_gateways_generate_vpn_profile(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_generate_vpn_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_generate_vpn_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VpnClientParameters**](VpnClientParameters.md)| Parameters supplied to the generate virtual network gateway VPN client package operation. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VPN profile package URL. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_generatevpnclientpackage**
> str virtual_network_gateways_generatevpnclientpackage(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)



Generates VPN client package for P2S client of the virtual network gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_client_parameters import VpnClientParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VpnClientParameters() # VpnClientParameters | Parameters supplied to the generate virtual network gateway VPN client package operation.

    try:
        api_response = api_instance.virtual_network_gateways_generatevpnclientpackage(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_generatevpnclientpackage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_generatevpnclientpackage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VpnClientParameters**](VpnClientParameters.md)| Parameters supplied to the generate virtual network gateway VPN client package operation. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VPN client package URL. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_get**
> VirtualNetworkGateway virtual_network_gateways_get(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



Gets the specified virtual network gateway by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway import VirtualNetworkGateway
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_get(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkGateway**](VirtualNetworkGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a VirtualNetworkGateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_get_advertised_routes**
> GatewayRouteListResult virtual_network_gateways_get_advertised_routes(resource_group_name, virtual_network_gateway_name, peer, api_version, subscription_id)



This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_route_list_result import GatewayRouteListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    peer = 'peer_example' # str | The IP address of the peer.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_get_advertised_routes(resource_group_name, virtual_network_gateway_name, peer, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_get_advertised_routes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_get_advertised_routes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **peer** | **str**| The IP address of the peer. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**GatewayRouteListResult**](GatewayRouteListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of learned BGP routes. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_get_bgp_peer_status**
> BgpPeerStatusListResult virtual_network_gateways_get_bgp_peer_status(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, peer=peer)



The GetBgpPeerStatus operation retrieves the status of all BGP peers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.bgp_peer_status_list_result import BgpPeerStatusListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    peer = 'peer_example' # str | The IP address of the peer to retrieve the status of. (optional)

    try:
        api_response = api_instance.virtual_network_gateways_get_bgp_peer_status(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, peer=peer)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_get_bgp_peer_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_get_bgp_peer_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **peer** | **str**| The IP address of the peer to retrieve the status of. | [optional] 

### Return type

[**BgpPeerStatusListResult**](BgpPeerStatusListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of BGP peer statuses. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_get_learned_routes**
> GatewayRouteListResult virtual_network_gateways_get_learned_routes(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_route_list_result import GatewayRouteListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_get_learned_routes(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_get_learned_routes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_get_learned_routes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**GatewayRouteListResult**](GatewayRouteListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of advertised BGP routes. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_get_vpn_profile_package_url**
> str virtual_network_gateways_get_vpn_profile_package_url(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified resource group. The profile needs to be generated first using generateVpnProfile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_get_vpn_profile_package_url(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_get_vpn_profile_package_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_get_vpn_profile_package_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VPN profile package URL. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_get_vpnclient_connection_health**
> VpnClientConnectionHealthDetailListResult virtual_network_gateways_get_vpnclient_connection_health(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



Get VPN client connection health detail per P2S client connection of the virtual network gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_client_connection_health_detail_list_result import VpnClientConnectionHealthDetailListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_get_vpnclient_connection_health(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_get_vpnclient_connection_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_get_vpnclient_connection_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VpnClientConnectionHealthDetailListResult**](VpnClientConnectionHealthDetailListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of VPN client connection health details. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_get_vpnclient_ipsec_parameters**
> VpnClientIPsecParameters virtual_network_gateways_get_vpnclient_ipsec_parameters(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



The Get VpnclientIpsecParameters operation retrieves information about the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_client_i_psec_parameters import VpnClientIPsecParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The virtual network gateway name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_get_vpnclient_ipsec_parameters(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_get_vpnclient_ipsec_parameters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_get_vpnclient_ipsec_parameters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The virtual network gateway name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VpnClientIPsecParameters**](VpnClientIPsecParameters.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the set vpnclient ipsec parameters for P2S client of VirtualNetworkGateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_list**
> VirtualNetworkGatewayListResult virtual_network_gateways_list(resource_group_name, api_version, subscription_id)



Gets all virtual network gateways by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway_list_result import VirtualNetworkGatewayListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_list(resource_group_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkGatewayListResult**](VirtualNetworkGatewayListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of VirtualNetworkGateway resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_list_connections**
> VirtualNetworkGatewayListConnectionsResult virtual_network_gateways_list_connections(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



Gets all the connections in a virtual network gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway_list_connections_result import VirtualNetworkGatewayListConnectionsResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_list_connections(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_list_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_list_connections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkGatewayListConnectionsResult**](VirtualNetworkGatewayListConnectionsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of VirtualNetworkGatewayConnection resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_reset**
> VirtualNetworkGateway virtual_network_gateways_reset(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, gateway_vip=gateway_vip)



Resets the primary of the virtual network gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway import VirtualNetworkGateway
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    gateway_vip = 'gateway_vip_example' # str | Virtual network gateway vip address supplied to the begin reset of the active-active feature enabled gateway. (optional)

    try:
        api_response = api_instance.virtual_network_gateways_reset(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, gateway_vip=gateway_vip)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_reset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **gateway_vip** | **str**| Virtual network gateway vip address supplied to the begin reset of the active-active feature enabled gateway. | [optional] 

### Return type

[**VirtualNetworkGateway**](VirtualNetworkGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation reset the primary of the virtual network gateway. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_reset_vpn_client_shared_key**
> virtual_network_gateways_reset_vpn_client_shared_key(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



Resets the VPN client shared key of the virtual network gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_network_gateways_reset_vpn_client_shared_key(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_reset_vpn_client_shared_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation reset the vpn client shared key of the virtual network gateway. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_set_vpnclient_ipsec_parameters**
> VpnClientIPsecParameters virtual_network_gateways_set_vpnclient_ipsec_parameters(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, vpnclient_ipsec_params)



The Set VpnclientIpsecParameters operation sets the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_client_i_psec_parameters import VpnClientIPsecParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vpnclient_ipsec_params = openapi_client.VpnClientIPsecParameters() # VpnClientIPsecParameters | Parameters supplied to the Begin Set vpnclient ipsec parameters of Virtual Network Gateway P2S client operation through Network resource provider.

    try:
        api_response = api_instance.virtual_network_gateways_set_vpnclient_ipsec_parameters(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, vpnclient_ipsec_params)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_set_vpnclient_ipsec_parameters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_set_vpnclient_ipsec_parameters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vpnclient_ipsec_params** | [**VpnClientIPsecParameters**](VpnClientIPsecParameters.md)| Parameters supplied to the Begin Set vpnclient ipsec parameters of Virtual Network Gateway P2S client operation through Network resource provider. | 

### Return type

[**VpnClientIPsecParameters**](VpnClientIPsecParameters.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation sets the specified vpnclient ipsec parameters for P2S client of the virtual network gateway. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_start_packet_capture**
> str virtual_network_gateways_start_packet_capture(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters=parameters)



Starts packet capture on virtual network gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_packet_capture_start_parameters import VpnPacketCaptureStartParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VpnPacketCaptureStartParameters() # VpnPacketCaptureStartParameters | Virtual network gateway packet capture parameters supplied to start packet capture on gateway. (optional)

    try:
        api_response = api_instance.virtual_network_gateways_start_packet_capture(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters=parameters)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_start_packet_capture:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_start_packet_capture: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VpnPacketCaptureStartParameters**](VpnPacketCaptureStartParameters.md)| Virtual network gateway packet capture parameters supplied to start packet capture on gateway. | [optional] 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation packet capture started on virtual network gateway. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_stop_packet_capture**
> str virtual_network_gateways_stop_packet_capture(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)



Stops packet capture on virtual network gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_packet_capture_stop_parameters import VpnPacketCaptureStopParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VpnPacketCaptureStopParameters() # VpnPacketCaptureStopParameters | Virtual network gateway packet capture parameters supplied to stop packet capture on gateway.

    try:
        api_response = api_instance.virtual_network_gateways_stop_packet_capture(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_stop_packet_capture:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_stop_packet_capture: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VpnPacketCaptureStopParameters**](VpnPacketCaptureStopParameters.md)| Virtual network gateway packet capture parameters supplied to stop packet capture on gateway. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation packet capture stopped on virtual network gateway. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_supported_vpn_devices**
> str virtual_network_gateways_supported_vpn_devices(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)



Gets a xml format representation for supported vpn devices.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateways_supported_vpn_devices(resource_group_name, virtual_network_gateway_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_supported_vpn_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_supported_vpn_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Xml format representation for supported vpn devices. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_update_tags**
> VirtualNetworkGateway virtual_network_gateways_update_tags(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)



Updates a virtual network gateway tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway import VirtualNetworkGateway
from openapi_client.models.virtual_network_gateway_connections_update_tags_request import VirtualNetworkGatewayConnectionsUpdateTagsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_name = 'virtual_network_gateway_name_example' # str | The name of the virtual network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualNetworkGatewayConnectionsUpdateTagsRequest() # VirtualNetworkGatewayConnectionsUpdateTagsRequest | Parameters supplied to update virtual network gateway tags.

    try:
        api_response = api_instance.virtual_network_gateways_update_tags(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_name** | **str**| The name of the virtual network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualNetworkGatewayConnectionsUpdateTagsRequest**](VirtualNetworkGatewayConnectionsUpdateTagsRequest.md)| Parameters supplied to update virtual network gateway tags. | 

### Return type

[**VirtualNetworkGateway**](VirtualNetworkGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting VirtualNetworkGateway resource. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_vpn_device_configuration_script**
> str virtual_network_gateways_vpn_device_configuration_script(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id, parameters)



Gets a xml format representation for vpn device configuration script.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_device_script_parameters import VpnDeviceScriptParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_connection_name = 'virtual_network_gateway_connection_name_example' # str | The name of the virtual network gateway connection for which the configuration script is generated.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VpnDeviceScriptParameters() # VpnDeviceScriptParameters | Parameters supplied to the generate vpn device script operation.

    try:
        api_response = api_instance.virtual_network_gateways_vpn_device_configuration_script(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewaysApi->virtual_network_gateways_vpn_device_configuration_script:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewaysApi->virtual_network_gateways_vpn_device_configuration_script: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_connection_name** | **str**| The name of the virtual network gateway connection for which the configuration script is generated. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VpnDeviceScriptParameters**](VpnDeviceScriptParameters.md)| Parameters supplied to the generate vpn device script operation. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Xml format representation for vpn device configuration script. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

