# openapi_client.VirtualNetworkGatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_network_gateways_create_or_update**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName} | 
[**virtual_network_gateways_delete**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName} | 
[**virtual_network_gateways_generatevpnclientpackage**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_generatevpnclientpackage) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/generatevpnclientpackage | 
[**virtual_network_gateways_get**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName} | 
[**virtual_network_gateways_list**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways | 
[**virtual_network_gateways_reset**](VirtualNetworkGatewaysApi.md#virtual_network_gateways_reset) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworkGateways/{virtualNetworkGatewayName}/reset | 


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

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

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

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | VPN client package URL. |  -  |

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
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a VirtualNetworkGateway resource. |  -  |

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
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of VirtualNetworkGateway resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateways_reset**
> VirtualNetworkGateway virtual_network_gateways_reset(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)



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
    parameters = openapi_client.VirtualNetworkGateway() # VirtualNetworkGateway | Virtual network gateway vip address supplied to the begin reset of the active-active feature enabled gateway.

    try:
        api_response = api_instance.virtual_network_gateways_reset(resource_group_name, virtual_network_gateway_name, api_version, subscription_id, parameters)
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
 **parameters** | [**VirtualNetworkGateway**](VirtualNetworkGateway.md)| Virtual network gateway vip address supplied to the begin reset of the active-active feature enabled gateway. | 

### Return type

[**VirtualNetworkGateway**](VirtualNetworkGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation reset the primary of the virtual network gateway. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

