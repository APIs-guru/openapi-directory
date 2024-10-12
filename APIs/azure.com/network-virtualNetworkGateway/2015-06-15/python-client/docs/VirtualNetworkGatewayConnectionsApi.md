# openapi_client.VirtualNetworkGatewayConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_network_gateway_connections_create_or_update**](VirtualNetworkGatewayConnectionsApi.md#virtual_network_gateway_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName} | 
[**virtual_network_gateway_connections_delete**](VirtualNetworkGatewayConnectionsApi.md#virtual_network_gateway_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName} | 
[**virtual_network_gateway_connections_get**](VirtualNetworkGatewayConnectionsApi.md#virtual_network_gateway_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName} | 
[**virtual_network_gateway_connections_get_shared_key**](VirtualNetworkGatewayConnectionsApi.md#virtual_network_gateway_connections_get_shared_key) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}/sharedkey | 
[**virtual_network_gateway_connections_list**](VirtualNetworkGatewayConnectionsApi.md#virtual_network_gateway_connections_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections | 
[**virtual_network_gateway_connections_reset_shared_key**](VirtualNetworkGatewayConnectionsApi.md#virtual_network_gateway_connections_reset_shared_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}/sharedkey/reset | 
[**virtual_network_gateway_connections_set_shared_key**](VirtualNetworkGatewayConnectionsApi.md#virtual_network_gateway_connections_set_shared_key) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}/sharedkey | 


# **virtual_network_gateway_connections_create_or_update**
> VirtualNetworkGatewayConnection virtual_network_gateway_connections_create_or_update(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id, parameters)



Creates or updates a virtual network gateway connection in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway_connection import VirtualNetworkGatewayConnection
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
    api_instance = openapi_client.VirtualNetworkGatewayConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_connection_name = 'virtual_network_gateway_connection_name_example' # str | The name of the virtual network gateway connection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualNetworkGatewayConnection() # VirtualNetworkGatewayConnection | Parameters supplied to the create or update virtual network gateway connection operation.

    try:
        api_response = api_instance.virtual_network_gateway_connections_create_or_update(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_connection_name** | **str**| The name of the virtual network gateway connection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualNetworkGatewayConnection**](VirtualNetworkGatewayConnection.md)| Parameters supplied to the create or update virtual network gateway connection operation. | 

### Return type

[**VirtualNetworkGatewayConnection**](VirtualNetworkGatewayConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting VirtualNetworkGatewayConnection resource. |  -  |
**201** | Create successful. The operation returns the resulting VirtualNetworkGatewayConnection resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateway_connections_delete**
> virtual_network_gateway_connections_delete(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id)



Deletes the specified virtual network Gateway connection.

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
    api_instance = openapi_client.VirtualNetworkGatewayConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_connection_name = 'virtual_network_gateway_connection_name_example' # str | The name of the virtual network gateway connection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_network_gateway_connections_delete(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_connection_name** | **str**| The name of the virtual network gateway connection. | 
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

# **virtual_network_gateway_connections_get**
> VirtualNetworkGatewayConnection virtual_network_gateway_connections_get(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id)



Gets the specified virtual network gateway connection by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway_connection import VirtualNetworkGatewayConnection
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
    api_instance = openapi_client.VirtualNetworkGatewayConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_connection_name = 'virtual_network_gateway_connection_name_example' # str | The name of the virtual network gateway connection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateway_connections_get(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_connection_name** | **str**| The name of the virtual network gateway connection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkGatewayConnection**](VirtualNetworkGatewayConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting VirtualNetworkPeering resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateway_connections_get_shared_key**
> ConnectionSharedKeyResult virtual_network_gateway_connections_get_shared_key(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id)



The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the specified virtual network gateway connection shared key through Network resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_shared_key_result import ConnectionSharedKeyResult
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
    api_instance = openapi_client.VirtualNetworkGatewayConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_connection_name = 'virtual_network_gateway_connection_name_example' # str | The virtual network gateway connection shared key name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateway_connections_get_shared_key(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_get_shared_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_get_shared_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_connection_name** | **str**| The virtual network gateway connection shared key name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ConnectionSharedKeyResult**](ConnectionSharedKeyResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateway_connections_list**
> VirtualNetworkGatewayConnectionListResult virtual_network_gateway_connections_list(resource_group_name, api_version, subscription_id)



The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways connections created.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_gateway_connection_list_result import VirtualNetworkGatewayConnectionListResult
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
    api_instance = openapi_client.VirtualNetworkGatewayConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_gateway_connections_list(resource_group_name, api_version, subscription_id)
        print("The response of VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkGatewayConnectionListResult**](VirtualNetworkGatewayConnectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation resets the virtual network gateway connection shared key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateway_connections_reset_shared_key**
> ConnectionResetSharedKey virtual_network_gateway_connections_reset_shared_key(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id, parameters)



The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_reset_shared_key import ConnectionResetSharedKey
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
    api_instance = openapi_client.VirtualNetworkGatewayConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_connection_name = 'virtual_network_gateway_connection_name_example' # str | The virtual network gateway connection reset shared key Name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ConnectionResetSharedKey() # ConnectionResetSharedKey | Parameters supplied to the begin reset virtual network gateway connection shared key operation through network resource provider.

    try:
        api_response = api_instance.virtual_network_gateway_connections_reset_shared_key(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_reset_shared_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_reset_shared_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_connection_name** | **str**| The virtual network gateway connection reset shared key Name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ConnectionResetSharedKey**](ConnectionResetSharedKey.md)| Parameters supplied to the begin reset virtual network gateway connection shared key operation through network resource provider. | 

### Return type

[**ConnectionResetSharedKey**](ConnectionResetSharedKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation sets the virtual network gateway connection shared key. |  -  |
**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_gateway_connections_set_shared_key**
> ConnectionSharedKey virtual_network_gateway_connections_set_shared_key(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id, parameters)



The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_shared_key import ConnectionSharedKey
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
    api_instance = openapi_client.VirtualNetworkGatewayConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_gateway_connection_name = 'virtual_network_gateway_connection_name_example' # str | The virtual network gateway connection name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ConnectionSharedKey() # ConnectionSharedKey | Parameters supplied to the Begin Set Virtual Network Gateway connection Shared key operation throughNetwork resource provider.

    try:
        api_response = api_instance.virtual_network_gateway_connections_set_shared_key(resource_group_name, virtual_network_gateway_connection_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_set_shared_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkGatewayConnectionsApi->virtual_network_gateway_connections_set_shared_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_gateway_connection_name** | **str**| The virtual network gateway connection name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ConnectionSharedKey**](ConnectionSharedKey.md)| Parameters supplied to the Begin Set Virtual Network Gateway connection Shared key operation throughNetwork resource provider. | 

### Return type

[**ConnectionSharedKey**](ConnectionSharedKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

