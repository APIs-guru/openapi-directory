# openapi_client.VirtualNetworkPeeringsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_network_peerings_create_or_update**](VirtualNetworkPeeringsApi.md#virtual_network_peerings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/virtualNetworkPeerings/{virtualNetworkPeeringName} | 
[**virtual_network_peerings_delete**](VirtualNetworkPeeringsApi.md#virtual_network_peerings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/virtualNetworkPeerings/{virtualNetworkPeeringName} | 
[**virtual_network_peerings_get**](VirtualNetworkPeeringsApi.md#virtual_network_peerings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/virtualNetworkPeerings/{virtualNetworkPeeringName} | 
[**virtual_network_peerings_list**](VirtualNetworkPeeringsApi.md#virtual_network_peerings_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/virtualNetworkPeerings | 


# **virtual_network_peerings_create_or_update**
> VirtualNetworkPeering virtual_network_peerings_create_or_update(resource_group_name, virtual_network_name, virtual_network_peering_name, api_version, subscription_id, virtual_network_peering_parameters)



The Put virtual network peering operation creates/updates a peering in the specified virtual network

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_peering import VirtualNetworkPeering
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
    api_instance = openapi_client.VirtualNetworkPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_name = 'virtual_network_name_example' # str | The name of the virtual network.
    virtual_network_peering_name = 'virtual_network_peering_name_example' # str | The name of the peering.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    virtual_network_peering_parameters = openapi_client.VirtualNetworkPeering() # VirtualNetworkPeering | Parameters supplied to the create/update virtual network peering operation

    try:
        api_response = api_instance.virtual_network_peerings_create_or_update(resource_group_name, virtual_network_name, virtual_network_peering_name, api_version, subscription_id, virtual_network_peering_parameters)
        print("The response of VirtualNetworkPeeringsApi->virtual_network_peerings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkPeeringsApi->virtual_network_peerings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_name** | **str**| The name of the virtual network. | 
 **virtual_network_peering_name** | **str**| The name of the peering. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **virtual_network_peering_parameters** | [**VirtualNetworkPeering**](VirtualNetworkPeering.md)| Parameters supplied to the create/update virtual network peering operation | 

### Return type

[**VirtualNetworkPeering**](VirtualNetworkPeering.md)

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

# **virtual_network_peerings_delete**
> virtual_network_peerings_delete(resource_group_name, virtual_network_name, virtual_network_peering_name, api_version, subscription_id)



The delete virtual network peering operation deletes the specified peering.

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
    api_instance = openapi_client.VirtualNetworkPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_name = 'virtual_network_name_example' # str | The name of the virtual network.
    virtual_network_peering_name = 'virtual_network_peering_name_example' # str | The name of the virtual network peering.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_network_peerings_delete(resource_group_name, virtual_network_name, virtual_network_peering_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualNetworkPeeringsApi->virtual_network_peerings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_name** | **str**| The name of the virtual network. | 
 **virtual_network_peering_name** | **str**| The name of the virtual network peering. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_peerings_get**
> VirtualNetworkPeering virtual_network_peerings_get(resource_group_name, virtual_network_name, virtual_network_peering_name, api_version, subscription_id)



The Get virtual network peering operation retrieves information about the specified virtual network peering.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_peering import VirtualNetworkPeering
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
    api_instance = openapi_client.VirtualNetworkPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_name = 'virtual_network_name_example' # str | The name of the virtual network.
    virtual_network_peering_name = 'virtual_network_peering_name_example' # str | The name of the virtual network peering.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_peerings_get(resource_group_name, virtual_network_name, virtual_network_peering_name, api_version, subscription_id)
        print("The response of VirtualNetworkPeeringsApi->virtual_network_peerings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkPeeringsApi->virtual_network_peerings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_name** | **str**| The name of the virtual network. | 
 **virtual_network_peering_name** | **str**| The name of the virtual network peering. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkPeering**](VirtualNetworkPeering.md)

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

# **virtual_network_peerings_list**
> VirtualNetworkPeeringListResult virtual_network_peerings_list(resource_group_name, virtual_network_name, api_version, subscription_id)



The List virtual network peerings operation retrieves all the peerings in a virtual network.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_peering_list_result import VirtualNetworkPeeringListResult
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
    api_instance = openapi_client.VirtualNetworkPeeringsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_name = 'virtual_network_name_example' # str | The name of the virtual network.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_peerings_list(resource_group_name, virtual_network_name, api_version, subscription_id)
        print("The response of VirtualNetworkPeeringsApi->virtual_network_peerings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkPeeringsApi->virtual_network_peerings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_name** | **str**| The name of the virtual network. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkPeeringListResult**](VirtualNetworkPeeringListResult.md)

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

