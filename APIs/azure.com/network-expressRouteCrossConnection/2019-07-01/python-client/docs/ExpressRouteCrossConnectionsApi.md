# openapi_client.ExpressRouteCrossConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_cross_connections_create_or_update**](ExpressRouteCrossConnectionsApi.md#express_route_cross_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName} | 
[**express_route_cross_connections_get**](ExpressRouteCrossConnectionsApi.md#express_route_cross_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName} | 
[**express_route_cross_connections_list**](ExpressRouteCrossConnectionsApi.md#express_route_cross_connections_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteCrossConnections | 
[**express_route_cross_connections_list_by_resource_group**](ExpressRouteCrossConnectionsApi.md#express_route_cross_connections_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections | 
[**express_route_cross_connections_update_tags**](ExpressRouteCrossConnectionsApi.md#express_route_cross_connections_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName} | 


# **express_route_cross_connections_create_or_update**
> ExpressRouteCrossConnection express_route_cross_connections_create_or_update(resource_group_name, cross_connection_name, api_version, subscription_id, parameters)



Update the specified ExpressRouteCrossConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connection import ExpressRouteCrossConnection
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
    api_instance = openapi_client.ExpressRouteCrossConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cross_connection_name = 'cross_connection_name_example' # str | The name of the ExpressRouteCrossConnection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ExpressRouteCrossConnection() # ExpressRouteCrossConnection | Parameters supplied to the update express route crossConnection operation.

    try:
        api_response = api_instance.express_route_cross_connections_create_or_update(resource_group_name, cross_connection_name, api_version, subscription_id, parameters)
        print("The response of ExpressRouteCrossConnectionsApi->express_route_cross_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionsApi->express_route_cross_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cross_connection_name** | **str**| The name of the ExpressRouteCrossConnection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ExpressRouteCrossConnection**](ExpressRouteCrossConnection.md)| Parameters supplied to the update express route crossConnection operation. | 

### Return type

[**ExpressRouteCrossConnection**](ExpressRouteCrossConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ExpressRouteCrossConnection resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_cross_connections_get**
> ExpressRouteCrossConnection express_route_cross_connections_get(resource_group_name, cross_connection_name, api_version, subscription_id)



Gets details about the specified ExpressRouteCrossConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connection import ExpressRouteCrossConnection
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
    api_instance = openapi_client.ExpressRouteCrossConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group (peering location of the circuit).
    cross_connection_name = 'cross_connection_name_example' # str | The name of the ExpressRouteCrossConnection (service key of the circuit).
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_cross_connections_get(resource_group_name, cross_connection_name, api_version, subscription_id)
        print("The response of ExpressRouteCrossConnectionsApi->express_route_cross_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionsApi->express_route_cross_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group (peering location of the circuit). | 
 **cross_connection_name** | **str**| The name of the ExpressRouteCrossConnection (service key of the circuit). | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCrossConnection**](ExpressRouteCrossConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ExpressRouteCrossConnection resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_cross_connections_list**
> ExpressRouteCrossConnectionListResult express_route_cross_connections_list(api_version, subscription_id)



Retrieves all the ExpressRouteCrossConnections in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connection_list_result import ExpressRouteCrossConnectionListResult
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
    api_instance = openapi_client.ExpressRouteCrossConnectionsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_cross_connections_list(api_version, subscription_id)
        print("The response of ExpressRouteCrossConnectionsApi->express_route_cross_connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionsApi->express_route_cross_connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCrossConnectionListResult**](ExpressRouteCrossConnectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ExpressRouteCrossConnection resources. If there are no cross connection resources an empty list is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_cross_connections_list_by_resource_group**
> ExpressRouteCrossConnectionListResult express_route_cross_connections_list_by_resource_group(resource_group_name, api_version, subscription_id)



Retrieves all the ExpressRouteCrossConnections in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connection_list_result import ExpressRouteCrossConnectionListResult
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
    api_instance = openapi_client.ExpressRouteCrossConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_cross_connections_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ExpressRouteCrossConnectionsApi->express_route_cross_connections_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionsApi->express_route_cross_connections_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCrossConnectionListResult**](ExpressRouteCrossConnectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful.The operation returns a list of ExpressRouteCrossConnection resources. If there are no cross connection resources an empty list is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_cross_connections_update_tags**
> ExpressRouteCrossConnection express_route_cross_connections_update_tags(resource_group_name, cross_connection_name, api_version, subscription_id, cross_connection_parameters)



Updates an express route cross connection tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connection import ExpressRouteCrossConnection
from openapi_client.models.express_route_cross_connections_update_tags_request import ExpressRouteCrossConnectionsUpdateTagsRequest
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
    api_instance = openapi_client.ExpressRouteCrossConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cross_connection_name = 'cross_connection_name_example' # str | The name of the cross connection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cross_connection_parameters = openapi_client.ExpressRouteCrossConnectionsUpdateTagsRequest() # ExpressRouteCrossConnectionsUpdateTagsRequest | Parameters supplied to update express route cross connection tags.

    try:
        api_response = api_instance.express_route_cross_connections_update_tags(resource_group_name, cross_connection_name, api_version, subscription_id, cross_connection_parameters)
        print("The response of ExpressRouteCrossConnectionsApi->express_route_cross_connections_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionsApi->express_route_cross_connections_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cross_connection_name** | **str**| The name of the cross connection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cross_connection_parameters** | [**ExpressRouteCrossConnectionsUpdateTagsRequest**](ExpressRouteCrossConnectionsUpdateTagsRequest.md)| Parameters supplied to update express route cross connection tags. | 

### Return type

[**ExpressRouteCrossConnection**](ExpressRouteCrossConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ExpressRouteCrossConnection resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

