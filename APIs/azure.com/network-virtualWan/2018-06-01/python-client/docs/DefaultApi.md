# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hub_virtual_network_connections_get**](DefaultApi.md#hub_virtual_network_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/hubVirtualNetworkConnections/{connectionName} | 
[**hub_virtual_network_connections_list**](DefaultApi.md#hub_virtual_network_connections_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/hubVirtualNetworkConnections | 
[**virtual_hubs_create_or_update**](DefaultApi.md#virtual_hubs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName} | 
[**virtual_hubs_delete**](DefaultApi.md#virtual_hubs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName} | 
[**virtual_hubs_get**](DefaultApi.md#virtual_hubs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName} | 
[**virtual_hubs_list**](DefaultApi.md#virtual_hubs_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualHubs | 
[**virtual_hubs_list_by_resource_group**](DefaultApi.md#virtual_hubs_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs | 
[**virtual_wans_create_or_update**](DefaultApi.md#virtual_wans_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{VirtualWANName} | 
[**virtual_wans_delete**](DefaultApi.md#virtual_wans_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{VirtualWANName} | 
[**virtual_wans_get**](DefaultApi.md#virtual_wans_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{VirtualWANName} | 
[**virtual_wans_list**](DefaultApi.md#virtual_wans_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualWans | 
[**virtual_wans_list_by_resource_group**](DefaultApi.md#virtual_wans_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans | 
[**vpn_connections_create_or_update**](DefaultApi.md#vpn_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections/{connectionName} | 
[**vpn_connections_delete**](DefaultApi.md#vpn_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections/{connectionName} | 
[**vpn_connections_get**](DefaultApi.md#vpn_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections/{connectionName} | 
[**vpn_connections_list_by_vpn_gateway**](DefaultApi.md#vpn_connections_list_by_vpn_gateway) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections | 
[**vpn_gateways_create_or_update**](DefaultApi.md#vpn_gateways_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName} | 
[**vpn_gateways_delete**](DefaultApi.md#vpn_gateways_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName} | 
[**vpn_gateways_get**](DefaultApi.md#vpn_gateways_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName} | 
[**vpn_gateways_list**](DefaultApi.md#vpn_gateways_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/vpnGateways | 
[**vpn_gateways_list_by_resource_group**](DefaultApi.md#vpn_gateways_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways | 
[**vpn_sites_configuration_download**](DefaultApi.md#vpn_sites_configuration_download) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{virtualWANName}/vpnConfiguration | 
[**vpn_sites_create_or_update**](DefaultApi.md#vpn_sites_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName} | 
[**vpn_sites_delete**](DefaultApi.md#vpn_sites_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName} | 
[**vpn_sites_get**](DefaultApi.md#vpn_sites_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName} | 
[**vpn_sites_list**](DefaultApi.md#vpn_sites_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/vpnSites | 
[**vpn_sites_list_by_resource_group**](DefaultApi.md#vpn_sites_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites | 


# **hub_virtual_network_connections_get**
> HubVirtualNetworkConnection hub_virtual_network_connections_get(subscription_id, resource_group_name, virtual_hub_name, connection_name, api_version)



Retrieves the details of a HubVirtualNetworkConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hub_virtual_network_connection import HubVirtualNetworkConnection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualHub.
    virtual_hub_name = 'virtual_hub_name_example' # str | The name of the VirtualHub.
    connection_name = 'connection_name_example' # str | The name of the vpn connection.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.hub_virtual_network_connections_get(subscription_id, resource_group_name, virtual_hub_name, connection_name, api_version)
        print("The response of DefaultApi->hub_virtual_network_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->hub_virtual_network_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualHub. | 
 **virtual_hub_name** | **str**| The name of the VirtualHub. | 
 **connection_name** | **str**| The name of the vpn connection. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**HubVirtualNetworkConnection**](HubVirtualNetworkConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the HubVirtualNetworkConnection retrieved. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hub_virtual_network_connections_list**
> ListHubVirtualNetworkConnectionsResult hub_virtual_network_connections_list(subscription_id, resource_group_name, virtual_hub_name, api_version)



Retrieves the details of all HubVirtualNetworkConnections.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_hub_virtual_network_connections_result import ListHubVirtualNetworkConnectionsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualHub.
    virtual_hub_name = 'virtual_hub_name_example' # str | The name of the VirtualHub.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.hub_virtual_network_connections_list(subscription_id, resource_group_name, virtual_hub_name, api_version)
        print("The response of DefaultApi->hub_virtual_network_connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->hub_virtual_network_connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualHub. | 
 **virtual_hub_name** | **str**| The name of the VirtualHub. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListHubVirtualNetworkConnectionsResult**](ListHubVirtualNetworkConnectionsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the HubVirtualNetworkConnections for the VirtualHub. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_hubs_create_or_update**
> VirtualHub virtual_hubs_create_or_update(subscription_id, resource_group_name, virtual_hub_name, api_version, virtual_hub_parameters)



Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_hub import VirtualHub
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualHub.
    virtual_hub_name = 'virtual_hub_name_example' # str | The name of the VirtualHub.
    api_version = 'api_version_example' # str | Client API version.
    virtual_hub_parameters = openapi_client.VirtualHub() # VirtualHub | Parameters supplied to create or update VirtualHub.

    try:
        api_response = api_instance.virtual_hubs_create_or_update(subscription_id, resource_group_name, virtual_hub_name, api_version, virtual_hub_parameters)
        print("The response of DefaultApi->virtual_hubs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_hubs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualHub. | 
 **virtual_hub_name** | **str**| The name of the VirtualHub. | 
 **api_version** | **str**| Client API version. | 
 **virtual_hub_parameters** | [**VirtualHub**](VirtualHub.md)| Parameters supplied to create or update VirtualHub. | 

### Return type

[**VirtualHub**](VirtualHub.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VirtualHub created or updated. |  -  |
**201** | Request received successfully. Returns the details of the VirtualHub created or updated. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_hubs_delete**
> virtual_hubs_delete(subscription_id, resource_group_name, virtual_hub_name, api_version)



Deletes a VirtualHub.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualHub.
    virtual_hub_name = 'virtual_hub_name_example' # str | The name of the VirtualHub.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_instance.virtual_hubs_delete(subscription_id, resource_group_name, virtual_hub_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_hubs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualHub. | 
 **virtual_hub_name** | **str**| The name of the VirtualHub. | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. VirtualHub deleted. |  -  |
**202** | Request received successfully. VirtualHub deletion is in progress; follow the Location header to poll for final outcome. |  -  |
**204** | No VirtualHubs exist by the name provided. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_hubs_get**
> VirtualHub virtual_hubs_get(subscription_id, resource_group_name, virtual_hub_name, api_version)



Retrieves the details of a VirtualHub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_hub import VirtualHub
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualHub.
    virtual_hub_name = 'virtual_hub_name_example' # str | The name of the VirtualHub.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.virtual_hubs_get(subscription_id, resource_group_name, virtual_hub_name, api_version)
        print("The response of DefaultApi->virtual_hubs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_hubs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualHub. | 
 **virtual_hub_name** | **str**| The name of the VirtualHub. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**VirtualHub**](VirtualHub.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VirtualHub retrieved. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_hubs_list**
> ListVirtualHubsResult virtual_hubs_list(subscription_id, api_version)



Lists all the VirtualHubs in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_virtual_hubs_result import ListVirtualHubsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.virtual_hubs_list(subscription_id, api_version)
        print("The response of DefaultApi->virtual_hubs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_hubs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVirtualHubsResult**](ListVirtualHubsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the VirtualHubs in the subscription. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_hubs_list_by_resource_group**
> ListVirtualHubsResult virtual_hubs_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the VirtualHubs in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_virtual_hubs_result import ListVirtualHubsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualHub.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.virtual_hubs_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->virtual_hubs_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_hubs_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualHub. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVirtualHubsResult**](ListVirtualHubsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the VirtualHubs in the resource group. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_wans_create_or_update**
> VirtualWAN virtual_wans_create_or_update(subscription_id, resource_group_name, virtual_wan_name, api_version, wan_parameters)



Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_wan import VirtualWAN
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualWan.
    virtual_wan_name = 'virtual_wan_name_example' # str | The name of the VirtualWAN being created or updated.
    api_version = 'api_version_example' # str | Client API version.
    wan_parameters = openapi_client.VirtualWAN() # VirtualWAN | Parameters supplied to create or update VirtualWAN.

    try:
        api_response = api_instance.virtual_wans_create_or_update(subscription_id, resource_group_name, virtual_wan_name, api_version, wan_parameters)
        print("The response of DefaultApi->virtual_wans_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_wans_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualWan. | 
 **virtual_wan_name** | **str**| The name of the VirtualWAN being created or updated. | 
 **api_version** | **str**| Client API version. | 
 **wan_parameters** | [**VirtualWAN**](VirtualWAN.md)| Parameters supplied to create or update VirtualWAN. | 

### Return type

[**VirtualWAN**](VirtualWAN.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VirtualWAN created or updated. |  -  |
**201** | Create successful. The operation returns the resulting VirtualWAN resource. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_wans_delete**
> virtual_wans_delete(subscription_id, resource_group_name, virtual_wan_name, api_version)



Deletes a VirtualWAN.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualWan.
    virtual_wan_name = 'virtual_wan_name_example' # str | The name of the VirtualWAN being deleted.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_instance.virtual_wans_delete(subscription_id, resource_group_name, virtual_wan_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_wans_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualWan. | 
 **virtual_wan_name** | **str**| The name of the VirtualWAN being deleted. | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. VirtualWAN deleted. |  -  |
**202** | Request received successfully. VirtualWAN deletion is in progress; follow the Location header to poll for final outcome. |  -  |
**204** | No VirtualWANs exist by the name provided. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_wans_get**
> VirtualWAN virtual_wans_get(resource_group_name, virtual_wan_name, api_version, subscription_id)



Retrieves the details of a VirtualWAN.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_wan import VirtualWAN
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualWan.
    virtual_wan_name = 'virtual_wan_name_example' # str | The name of the VirtualWAN being retrieved.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_wans_get(resource_group_name, virtual_wan_name, api_version, subscription_id)
        print("The response of DefaultApi->virtual_wans_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_wans_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name of the VirtualWan. | 
 **virtual_wan_name** | **str**| The name of the VirtualWAN being retrieved. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualWAN**](VirtualWAN.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VirtualWAN retrieved. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_wans_list**
> ListVirtualWANsResult virtual_wans_list(subscription_id, api_version)



Lists all the VirtualWANs in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_virtual_wans_result import ListVirtualWANsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.virtual_wans_list(subscription_id, api_version)
        print("The response of DefaultApi->virtual_wans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_wans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVirtualWANsResult**](ListVirtualWANsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the VirtualWANs in the subscription. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_wans_list_by_resource_group**
> ListVirtualWANsResult virtual_wans_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the VirtualWANs in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_virtual_wans_result import ListVirtualWANsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualWan.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.virtual_wans_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->virtual_wans_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->virtual_wans_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualWan. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVirtualWANsResult**](ListVirtualWANsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the VirtualWANs in the resource group. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_connections_create_or_update**
> VpnConnection vpn_connections_create_or_update(subscription_id, resource_group_name, gateway_name, connection_name, api_version, vpn_connection_parameters)



Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing connection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_connection import VpnConnection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    connection_name = 'connection_name_example' # str | The name of the connection.
    api_version = 'api_version_example' # str | Client API version.
    vpn_connection_parameters = openapi_client.VpnConnection() # VpnConnection | Parameters supplied to create or Update a VPN Connection.

    try:
        api_response = api_instance.vpn_connections_create_or_update(subscription_id, resource_group_name, gateway_name, connection_name, api_version, vpn_connection_parameters)
        print("The response of DefaultApi->vpn_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **connection_name** | **str**| The name of the connection. | 
 **api_version** | **str**| Client API version. | 
 **vpn_connection_parameters** | [**VpnConnection**](VpnConnection.md)| Parameters supplied to create or Update a VPN Connection. | 

### Return type

[**VpnConnection**](VpnConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the vpn connection created or updated. |  -  |
**201** | Request successful. Returns the details of the vpn connection created or updated. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_connections_delete**
> vpn_connections_delete(subscription_id, resource_group_name, gateway_name, connection_name, api_version)



Deletes a vpn connection.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    connection_name = 'connection_name_example' # str | The name of the connection.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_instance.vpn_connections_delete(subscription_id, resource_group_name, gateway_name, connection_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **connection_name** | **str**| The name of the connection. | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Vpn Connection deleted. |  -  |
**202** | Request received successfully. Vpn Connection deletion is in progress; follow the Location header to poll for final outcome. |  -  |
**204** | No vpn connections exist by the name provided. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_connections_get**
> VpnConnection vpn_connections_get(subscription_id, resource_group_name, gateway_name, connection_name, api_version)



Retrieves the details of a vpn connection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_connection import VpnConnection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    connection_name = 'connection_name_example' # str | The name of the vpn connection.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.vpn_connections_get(subscription_id, resource_group_name, gateway_name, connection_name, api_version)
        print("The response of DefaultApi->vpn_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **connection_name** | **str**| The name of the vpn connection. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**VpnConnection**](VpnConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the vpn connection. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_connections_list_by_vpn_gateway**
> ListVpnConnectionsResult vpn_connections_list_by_vpn_gateway(subscription_id, resource_group_name, gateway_name, api_version)



Retrieves all vpn connections for a particular virtual wan vpn gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_vpn_connections_result import ListVpnConnectionsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.vpn_connections_list_by_vpn_gateway(subscription_id, resource_group_name, gateway_name, api_version)
        print("The response of DefaultApi->vpn_connections_list_by_vpn_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_connections_list_by_vpn_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVpnConnectionsResult**](ListVpnConnectionsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns all Vpn connections for a virtual wan vpn gateway. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_gateways_create_or_update**
> VpnGateway vpn_gateways_create_or_update(subscription_id, resource_group_name, gateway_name, api_version, vpn_gateway_parameters)



Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_gateway import VpnGateway
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    api_version = 'api_version_example' # str | Client API version.
    vpn_gateway_parameters = openapi_client.VpnGateway() # VpnGateway | Parameters supplied to create or Update a virtual wan vpn gateway.

    try:
        api_response = api_instance.vpn_gateways_create_or_update(subscription_id, resource_group_name, gateway_name, api_version, vpn_gateway_parameters)
        print("The response of DefaultApi->vpn_gateways_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_gateways_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **api_version** | **str**| Client API version. | 
 **vpn_gateway_parameters** | [**VpnGateway**](VpnGateway.md)| Parameters supplied to create or Update a virtual wan vpn gateway. | 

### Return type

[**VpnGateway**](VpnGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the virtual wan vpn Gateway created or updated. |  -  |
**201** | Request successful. Returns the details of the virtual wan vpn gateway retrieved. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_gateways_delete**
> vpn_gateways_delete(subscription_id, resource_group_name, gateway_name, api_version)



Deletes a virtual wan vpn gateway.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_instance.vpn_gateways_delete(subscription_id, resource_group_name, gateway_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_gateways_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Vpn Gateway deleted. |  -  |
**202** | Request received successfully. Vpn Gateway deletion is in progress; follow the Location header to poll for final outcome. |  -  |
**204** | No vpn gateways exist by the name provided. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_gateways_get**
> VpnGateway vpn_gateways_get(subscription_id, resource_group_name, gateway_name, api_version)



Retrieves the details of a virtual wan vpn gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_gateway import VpnGateway
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.vpn_gateways_get(subscription_id, resource_group_name, gateway_name, api_version)
        print("The response of DefaultApi->vpn_gateways_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_gateways_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**VpnGateway**](VpnGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the virtual wan vpn gateway retrieved. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_gateways_list**
> ListVpnGatewaysResult vpn_gateways_list(subscription_id, api_version)



Lists all the VpnGateways in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_vpn_gateways_result import ListVpnGatewaysResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.vpn_gateways_list(subscription_id, api_version)
        print("The response of DefaultApi->vpn_gateways_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_gateways_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVpnGatewaysResult**](ListVpnGatewaysResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the VpnGateways in the subscription. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_gateways_list_by_resource_group**
> ListVpnGatewaysResult vpn_gateways_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the VpnGateways in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_vpn_gateways_result import ListVpnGatewaysResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.vpn_gateways_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->vpn_gateways_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_gateways_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVpnGatewaysResult**](ListVpnGatewaysResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the VpnGateways in the resource group. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_sites_configuration_download**
> vpn_sites_configuration_download(subscription_id, resource_group_name, virtual_wan_name, api_version, request)



Gives the sas-url to download the configurations for vpn-sites in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_vpn_sites_configuration_request import GetVpnSitesConfigurationRequest
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    virtual_wan_name = 'virtual_wan_name_example' # str | The name of the VirtualWAN for which configuration of all vpn-sites is needed.
    api_version = 'api_version_example' # str | Client API version.
    request = openapi_client.GetVpnSitesConfigurationRequest() # GetVpnSitesConfigurationRequest | Parameters supplied to download vpn-sites configuration.

    try:
        api_instance.vpn_sites_configuration_download(subscription_id, resource_group_name, virtual_wan_name, api_version, request)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_sites_configuration_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name. | 
 **virtual_wan_name** | **str**| The name of the VirtualWAN for which configuration of all vpn-sites is needed. | 
 **api_version** | **str**| Client API version. | 
 **request** | [**GetVpnSitesConfigurationRequest**](GetVpnSitesConfigurationRequest.md)| Parameters supplied to download vpn-sites configuration. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Follow the location header for sas-url to output blob. |  -  |
**202** | Accepted and the operation will complete asynchronously. Follow the location header for sas-url to output blob. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_sites_create_or_update**
> VpnSite vpn_sites_create_or_update(subscription_id, resource_group_name, vpn_site_name, api_version, vpn_site_parameters)



Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_site import VpnSite
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnSite.
    vpn_site_name = 'vpn_site_name_example' # str | The name of the VpnSite being created or updated.
    api_version = 'api_version_example' # str | Client API version.
    vpn_site_parameters = openapi_client.VpnSite() # VpnSite | Parameters supplied to create or update VpnSite.

    try:
        api_response = api_instance.vpn_sites_create_or_update(subscription_id, resource_group_name, vpn_site_name, api_version, vpn_site_parameters)
        print("The response of DefaultApi->vpn_sites_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_sites_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnSite. | 
 **vpn_site_name** | **str**| The name of the VpnSite being created or updated. | 
 **api_version** | **str**| Client API version. | 
 **vpn_site_parameters** | [**VpnSite**](VpnSite.md)| Parameters supplied to create or update VpnSite. | 

### Return type

[**VpnSite**](VpnSite.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VpnSite created or updated. |  -  |
**201** | Request received successfully. Returns the details of the VpnSite created or updated. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_sites_delete**
> vpn_sites_delete(subscription_id, resource_group_name, vpn_site_name, api_version)



Deletes a VpnSite.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnSite.
    vpn_site_name = 'vpn_site_name_example' # str | The name of the VpnSite being deleted.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_instance.vpn_sites_delete(subscription_id, resource_group_name, vpn_site_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_sites_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnSite. | 
 **vpn_site_name** | **str**| The name of the VpnSite being deleted. | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. VpnSite deleted. |  -  |
**202** | Request received successfully. VpnSite deletion is in progress |  -  |
**204** | No VpnSites exist by the name provided. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_sites_get**
> VpnSite vpn_sites_get(subscription_id, resource_group_name, vpn_site_name, api_version)



Retrieves the details of a VPN site.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_site import VpnSite
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnSite.
    vpn_site_name = 'vpn_site_name_example' # str | The name of the VpnSite being retrieved.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.vpn_sites_get(subscription_id, resource_group_name, vpn_site_name, api_version)
        print("The response of DefaultApi->vpn_sites_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_sites_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnSite. | 
 **vpn_site_name** | **str**| The name of the VpnSite being retrieved. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**VpnSite**](VpnSite.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VpnSite retrieved. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_sites_list**
> ListVpnSitesResult vpn_sites_list(subscription_id, api_version)



Lists all the VpnSites in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_vpn_sites_result import ListVpnSitesResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.vpn_sites_list(subscription_id, api_version)
        print("The response of DefaultApi->vpn_sites_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_sites_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVpnSitesResult**](ListVpnSitesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the VpnSites in the subscription. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_sites_list_by_resource_group**
> ListVpnSitesResult vpn_sites_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the vpnSites in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_vpn_sites_result import ListVpnSitesResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnSite.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.vpn_sites_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->vpn_sites_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->vpn_sites_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnSite. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ListVpnSitesResult**](ListVpnSitesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of all the vpnSites in the resource group. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

