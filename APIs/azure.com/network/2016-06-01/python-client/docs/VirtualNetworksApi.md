# openapi_client.VirtualNetworksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_networks_create_or_update**](VirtualNetworksApi.md#virtual_networks_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName} | 
[**virtual_networks_delete**](VirtualNetworksApi.md#virtual_networks_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName} | 
[**virtual_networks_get**](VirtualNetworksApi.md#virtual_networks_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName} | 
[**virtual_networks_list**](VirtualNetworksApi.md#virtual_networks_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks | 
[**virtual_networks_list_all**](VirtualNetworksApi.md#virtual_networks_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks | 


# **virtual_networks_create_or_update**
> VirtualNetwork virtual_networks_create_or_update(resource_group_name, virtual_network_name, api_version, subscription_id, parameters)



The Put VirtualNetwork operation creates/updates a virtual network in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network import VirtualNetwork
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
    api_instance = openapi_client.VirtualNetworksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_name = 'virtual_network_name_example' # str | The name of the virtual network.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualNetwork() # VirtualNetwork | Parameters supplied to the create/update Virtual Network operation

    try:
        api_response = api_instance.virtual_networks_create_or_update(resource_group_name, virtual_network_name, api_version, subscription_id, parameters)
        print("The response of VirtualNetworksApi->virtual_networks_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworksApi->virtual_networks_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_name** | **str**| The name of the virtual network. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualNetwork**](VirtualNetwork.md)| Parameters supplied to the create/update Virtual Network operation | 

### Return type

[**VirtualNetwork**](VirtualNetwork.md)

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

# **virtual_networks_delete**
> virtual_networks_delete(resource_group_name, virtual_network_name, api_version, subscription_id)



The Delete VirtualNetwork operation deletes the specified virtual network

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
    api_instance = openapi_client.VirtualNetworksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_name = 'virtual_network_name_example' # str | The name of the virtual network.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_networks_delete(resource_group_name, virtual_network_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualNetworksApi->virtual_networks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_name** | **str**| The name of the virtual network. | 
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

# **virtual_networks_get**
> VirtualNetwork virtual_networks_get(resource_group_name, virtual_network_name, api_version, subscription_id, expand=expand)



The Get VirtualNetwork operation retrieves information about the specified virtual network.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network import VirtualNetwork
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
    api_instance = openapi_client.VirtualNetworksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_network_name = 'virtual_network_name_example' # str | The name of the virtual network.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | expand references resources. (optional)

    try:
        api_response = api_instance.virtual_networks_get(resource_group_name, virtual_network_name, api_version, subscription_id, expand=expand)
        print("The response of VirtualNetworksApi->virtual_networks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworksApi->virtual_networks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_network_name** | **str**| The name of the virtual network. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| expand references resources. | [optional] 

### Return type

[**VirtualNetwork**](VirtualNetwork.md)

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

# **virtual_networks_list**
> VirtualNetworkListResult virtual_networks_list(resource_group_name, api_version, subscription_id)



The list VirtualNetwork returns all Virtual Networks in a resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_list_result import VirtualNetworkListResult
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
    api_instance = openapi_client.VirtualNetworksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_networks_list(resource_group_name, api_version, subscription_id)
        print("The response of VirtualNetworksApi->virtual_networks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworksApi->virtual_networks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkListResult**](VirtualNetworkListResult.md)

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

# **virtual_networks_list_all**
> VirtualNetworkListResult virtual_networks_list_all(api_version, subscription_id)



The list VirtualNetwork returns all Virtual Networks in a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_list_result import VirtualNetworkListResult
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
    api_instance = openapi_client.VirtualNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_networks_list_all(api_version, subscription_id)
        print("The response of VirtualNetworksApi->virtual_networks_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworksApi->virtual_networks_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkListResult**](VirtualNetworkListResult.md)

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

