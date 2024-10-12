# openapi_client.VirtualRouterPeeringsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_router_peerings_create_or_update**](VirtualRouterPeeringsApi.md#virtual_router_peerings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName} | 
[**virtual_router_peerings_delete**](VirtualRouterPeeringsApi.md#virtual_router_peerings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName} | 
[**virtual_router_peerings_get**](VirtualRouterPeeringsApi.md#virtual_router_peerings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName} | 
[**virtual_router_peerings_list**](VirtualRouterPeeringsApi.md#virtual_router_peerings_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings | 
[**virtual_router_peerings_update**](VirtualRouterPeeringsApi.md#virtual_router_peerings_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName} | 


# **virtual_router_peerings_create_or_update**
> VirtualRouterPeering virtual_router_peerings_create_or_update(resource_group_name, virtual_router_name, peering_name, api_version, subscription_id, parameters)



Creates or updates the specified Virtual Router Peering.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_router_peering import VirtualRouterPeering
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
    api_instance = openapi_client.VirtualRouterPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_router_name = 'virtual_router_name_example' # str | The name of the Virtual Router.
    peering_name = 'peering_name_example' # str | The name of the Virtual Router Peering.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualRouterPeering() # VirtualRouterPeering | Parameters supplied to the create or update Virtual Router Peering operation.

    try:
        api_response = api_instance.virtual_router_peerings_create_or_update(resource_group_name, virtual_router_name, peering_name, api_version, subscription_id, parameters)
        print("The response of VirtualRouterPeeringsApi->virtual_router_peerings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualRouterPeeringsApi->virtual_router_peerings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_router_name** | **str**| The name of the Virtual Router. | 
 **peering_name** | **str**| The name of the Virtual Router Peering. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualRouterPeering**](VirtualRouterPeering.md)| Parameters supplied to the create or update Virtual Router Peering operation. | 

### Return type

[**VirtualRouterPeering**](VirtualRouterPeering.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting Virtual Router Peering resource. |  -  |
**201** | Request received successfully. The operation returns the resulting Virtual Router Peering resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_router_peerings_delete**
> virtual_router_peerings_delete(resource_group_name, virtual_router_name, peering_name, api_version, subscription_id)



Deletes the specified peering from a Virtual Router.

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
    api_instance = openapi_client.VirtualRouterPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_router_name = 'virtual_router_name_example' # str | The name of the Virtual Router.
    peering_name = 'peering_name_example' # str | The name of the peering.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_router_peerings_delete(resource_group_name, virtual_router_name, peering_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualRouterPeeringsApi->virtual_router_peerings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_router_name** | **str**| The name of the Virtual Router. | 
 **peering_name** | **str**| The name of the peering. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Request successful. Resource with the specified name does not exist |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_router_peerings_get**
> VirtualRouterPeering virtual_router_peerings_get(resource_group_name, virtual_router_name, peering_name, api_version, subscription_id)



Gets the specified Virtual Router Peering.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_router_peering import VirtualRouterPeering
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
    api_instance = openapi_client.VirtualRouterPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_router_name = 'virtual_router_name_example' # str | The name of the Virtual Router.
    peering_name = 'peering_name_example' # str | The name of the Virtual Router Peering.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_router_peerings_get(resource_group_name, virtual_router_name, peering_name, api_version, subscription_id)
        print("The response of VirtualRouterPeeringsApi->virtual_router_peerings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualRouterPeeringsApi->virtual_router_peerings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_router_name** | **str**| The name of the Virtual Router. | 
 **peering_name** | **str**| The name of the Virtual Router Peering. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualRouterPeering**](VirtualRouterPeering.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a Virtual Router Peering resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_router_peerings_list**
> VirtualRouterPeeringListResult virtual_router_peerings_list(resource_group_name, virtual_router_name, api_version, subscription_id)



Lists all Virtual Router Peerings in a Virtual Router resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_router_peering_list_result import VirtualRouterPeeringListResult
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
    api_instance = openapi_client.VirtualRouterPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_router_name = 'virtual_router_name_example' # str | The name of the Virtual Router.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_router_peerings_list(resource_group_name, virtual_router_name, api_version, subscription_id)
        print("The response of VirtualRouterPeeringsApi->virtual_router_peerings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualRouterPeeringsApi->virtual_router_peerings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_router_name** | **str**| The name of the Virtual Router. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualRouterPeeringListResult**](VirtualRouterPeeringListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of Virtual Router Peering resources. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_router_peerings_update**
> VirtualRouterPeering virtual_router_peerings_update(subscription_id, resource_group_name, virtual_router_name, api_version, peering_name, parameters)



Updates a Virtual Router Peering.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_router_peering import VirtualRouterPeering
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
    api_instance = openapi_client.VirtualRouterPeeringsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the Virtual Router Peering.
    virtual_router_name = 'virtual_router_name_example' # str | The name of the Virtual Router.
    api_version = 'api_version_example' # str | Client API version.
    peering_name = 'peering_name_example' # str | The name of the Virtual Router Peering being updated.
    parameters = openapi_client.VirtualRouterPeering() # VirtualRouterPeering | Parameters supplied to update Virtual Router Peering operation.

    try:
        api_response = api_instance.virtual_router_peerings_update(subscription_id, resource_group_name, virtual_router_name, api_version, peering_name, parameters)
        print("The response of VirtualRouterPeeringsApi->virtual_router_peerings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualRouterPeeringsApi->virtual_router_peerings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the Virtual Router Peering. | 
 **virtual_router_name** | **str**| The name of the Virtual Router. | 
 **api_version** | **str**| Client API version. | 
 **peering_name** | **str**| The name of the Virtual Router Peering being updated. | 
 **parameters** | [**VirtualRouterPeering**](VirtualRouterPeering.md)| Parameters supplied to update Virtual Router Peering operation. | 

### Return type

[**VirtualRouterPeering**](VirtualRouterPeering.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the Virtual Router Peering updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

