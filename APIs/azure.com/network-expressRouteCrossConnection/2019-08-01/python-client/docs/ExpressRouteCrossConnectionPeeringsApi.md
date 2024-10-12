# openapi_client.ExpressRouteCrossConnectionPeeringsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_cross_connection_peerings_create_or_update**](ExpressRouteCrossConnectionPeeringsApi.md#express_route_cross_connection_peerings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName} | 
[**express_route_cross_connection_peerings_delete**](ExpressRouteCrossConnectionPeeringsApi.md#express_route_cross_connection_peerings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName} | 
[**express_route_cross_connection_peerings_get**](ExpressRouteCrossConnectionPeeringsApi.md#express_route_cross_connection_peerings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName} | 
[**express_route_cross_connection_peerings_list**](ExpressRouteCrossConnectionPeeringsApi.md#express_route_cross_connection_peerings_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings | 


# **express_route_cross_connection_peerings_create_or_update**
> ExpressRouteCrossConnectionPeering express_route_cross_connection_peerings_create_or_update(resource_group_name, cross_connection_name, peering_name, api_version, subscription_id, peering_parameters)



Creates or updates a peering in the specified ExpressRouteCrossConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connection_peering import ExpressRouteCrossConnectionPeering
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
    api_instance = openapi_client.ExpressRouteCrossConnectionPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cross_connection_name = 'cross_connection_name_example' # str | The name of the ExpressRouteCrossConnection.
    peering_name = 'peering_name_example' # str | The name of the peering.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    peering_parameters = openapi_client.ExpressRouteCrossConnectionPeering() # ExpressRouteCrossConnectionPeering | Parameters supplied to the create or update ExpressRouteCrossConnection peering operation.

    try:
        api_response = api_instance.express_route_cross_connection_peerings_create_or_update(resource_group_name, cross_connection_name, peering_name, api_version, subscription_id, peering_parameters)
        print("The response of ExpressRouteCrossConnectionPeeringsApi->express_route_cross_connection_peerings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionPeeringsApi->express_route_cross_connection_peerings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cross_connection_name** | **str**| The name of the ExpressRouteCrossConnection. | 
 **peering_name** | **str**| The name of the peering. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **peering_parameters** | [**ExpressRouteCrossConnectionPeering**](ExpressRouteCrossConnectionPeering.md)| Parameters supplied to the create or update ExpressRouteCrossConnection peering operation. | 

### Return type

[**ExpressRouteCrossConnectionPeering**](ExpressRouteCrossConnectionPeering.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ExpressRouteCrossConnectionPeering resource. |  -  |
**201** | Create successful. The operation returns the resulting ExpressRouteCrossConnectionPeering resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_cross_connection_peerings_delete**
> express_route_cross_connection_peerings_delete(resource_group_name, cross_connection_name, peering_name, api_version, subscription_id)



Deletes the specified peering from the ExpressRouteCrossConnection.

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
    api_instance = openapi_client.ExpressRouteCrossConnectionPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cross_connection_name = 'cross_connection_name_example' # str | The name of the ExpressRouteCrossConnection.
    peering_name = 'peering_name_example' # str | The name of the peering.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.express_route_cross_connection_peerings_delete(resource_group_name, cross_connection_name, peering_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionPeeringsApi->express_route_cross_connection_peerings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cross_connection_name** | **str**| The name of the ExpressRouteCrossConnection. | 
 **peering_name** | **str**| The name of the peering. | 
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

# **express_route_cross_connection_peerings_get**
> ExpressRouteCrossConnectionPeering express_route_cross_connection_peerings_get(resource_group_name, cross_connection_name, peering_name, api_version, subscription_id)



Gets the specified peering for the ExpressRouteCrossConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connection_peering import ExpressRouteCrossConnectionPeering
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
    api_instance = openapi_client.ExpressRouteCrossConnectionPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cross_connection_name = 'cross_connection_name_example' # str | The name of the ExpressRouteCrossConnection.
    peering_name = 'peering_name_example' # str | The name of the peering.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_cross_connection_peerings_get(resource_group_name, cross_connection_name, peering_name, api_version, subscription_id)
        print("The response of ExpressRouteCrossConnectionPeeringsApi->express_route_cross_connection_peerings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionPeeringsApi->express_route_cross_connection_peerings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cross_connection_name** | **str**| The name of the ExpressRouteCrossConnection. | 
 **peering_name** | **str**| The name of the peering. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCrossConnectionPeering**](ExpressRouteCrossConnectionPeering.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ExpressRouteCrossConnectionPeering resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_cross_connection_peerings_list**
> ExpressRouteCrossConnectionPeeringList express_route_cross_connection_peerings_list(resource_group_name, cross_connection_name, api_version, subscription_id)



Gets all peerings in a specified ExpressRouteCrossConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_cross_connection_peering_list import ExpressRouteCrossConnectionPeeringList
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
    api_instance = openapi_client.ExpressRouteCrossConnectionPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cross_connection_name = 'cross_connection_name_example' # str | The name of the ExpressRouteCrossConnection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_cross_connection_peerings_list(resource_group_name, cross_connection_name, api_version, subscription_id)
        print("The response of ExpressRouteCrossConnectionPeeringsApi->express_route_cross_connection_peerings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCrossConnectionPeeringsApi->express_route_cross_connection_peerings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cross_connection_name** | **str**| The name of the ExpressRouteCrossConnection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCrossConnectionPeeringList**](ExpressRouteCrossConnectionPeeringList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ExpressRouteCrossConnectionPeering resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

