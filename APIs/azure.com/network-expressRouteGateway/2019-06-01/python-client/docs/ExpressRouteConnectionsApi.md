# openapi_client.ExpressRouteConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_connections_create_or_update**](ExpressRouteConnectionsApi.md#express_route_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName} | 
[**express_route_connections_delete**](ExpressRouteConnectionsApi.md#express_route_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName} | 
[**express_route_connections_get**](ExpressRouteConnectionsApi.md#express_route_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName} | 
[**express_route_connections_list**](ExpressRouteConnectionsApi.md#express_route_connections_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections | 


# **express_route_connections_create_or_update**
> ExpressRouteConnection express_route_connections_create_or_update(resource_group_name, express_route_gateway_name, connection_name, api_version, subscription_id, put_express_route_connection_parameters)



Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_connection import ExpressRouteConnection
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
    api_instance = openapi_client.ExpressRouteConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_gateway_name = 'express_route_gateway_name_example' # str | The name of the ExpressRoute gateway.
    connection_name = 'connection_name_example' # str | The name of the connection subresource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    put_express_route_connection_parameters = openapi_client.ExpressRouteConnection() # ExpressRouteConnection | Parameters required in an ExpressRouteConnection PUT operation.

    try:
        api_response = api_instance.express_route_connections_create_or_update(resource_group_name, express_route_gateway_name, connection_name, api_version, subscription_id, put_express_route_connection_parameters)
        print("The response of ExpressRouteConnectionsApi->express_route_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteConnectionsApi->express_route_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_gateway_name** | **str**| The name of the ExpressRoute gateway. | 
 **connection_name** | **str**| The name of the connection subresource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **put_express_route_connection_parameters** | [**ExpressRouteConnection**](ExpressRouteConnection.md)| Parameters required in an ExpressRouteConnection PUT operation. | 

### Return type

[**ExpressRouteConnection**](ExpressRouteConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the ExpressRouteConnection. |  -  |
**201** | Create successful. The operation returns the ExpressRouteConnection. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_connections_delete**
> express_route_connections_delete(resource_group_name, express_route_gateway_name, connection_name, api_version, subscription_id)



Deletes a connection to a ExpressRoute circuit.

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
    api_instance = openapi_client.ExpressRouteConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_gateway_name = 'express_route_gateway_name_example' # str | The name of the ExpressRoute gateway.
    connection_name = 'connection_name_example' # str | The name of the connection subresource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.express_route_connections_delete(resource_group_name, express_route_gateway_name, connection_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ExpressRouteConnectionsApi->express_route_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_gateway_name** | **str**| The name of the ExpressRoute gateway. | 
 **connection_name** | **str**| The name of the connection subresource. | 
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
**202** | Accepted, and the operation will continue asynchronously. |  -  |
**204** | Delete successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_connections_get**
> ExpressRouteConnection express_route_connections_get(resource_group_name, express_route_gateway_name, connection_name, api_version, subscription_id)



Gets the specified ExpressRouteConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_connection import ExpressRouteConnection
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
    api_instance = openapi_client.ExpressRouteConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_gateway_name = 'express_route_gateway_name_example' # str | The name of the ExpressRoute gateway.
    connection_name = 'connection_name_example' # str | The name of the ExpressRoute connection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_connections_get(resource_group_name, express_route_gateway_name, connection_name, api_version, subscription_id)
        print("The response of ExpressRouteConnectionsApi->express_route_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteConnectionsApi->express_route_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_gateway_name** | **str**| The name of the ExpressRoute gateway. | 
 **connection_name** | **str**| The name of the ExpressRoute connection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteConnection**](ExpressRouteConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the ExpressRouteConnection. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_connections_list**
> ExpressRouteConnectionList express_route_connections_list(resource_group_name, express_route_gateway_name, api_version, subscription_id)



Lists ExpressRouteConnections.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_connection_list import ExpressRouteConnectionList
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
    api_instance = openapi_client.ExpressRouteConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_gateway_name = 'express_route_gateway_name_example' # str | The name of the ExpressRoute gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_connections_list(resource_group_name, express_route_gateway_name, api_version, subscription_id)
        print("The response of ExpressRouteConnectionsApi->express_route_connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteConnectionsApi->express_route_connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_gateway_name** | **str**| The name of the ExpressRoute gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteConnectionList**](ExpressRouteConnectionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

