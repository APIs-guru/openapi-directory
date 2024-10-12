# openapi_client.ManagedNetworksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_networks_create_or_update**](ManagedNetworksApi.md#managed_networks_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName} | 
[**managed_networks_delete**](ManagedNetworksApi.md#managed_networks_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName} | 
[**managed_networks_get**](ManagedNetworksApi.md#managed_networks_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName} | 
[**managed_networks_list_by_resource_group**](ManagedNetworksApi.md#managed_networks_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks | 
[**managed_networks_list_by_subscription**](ManagedNetworksApi.md#managed_networks_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetwork/managedNetworks | 
[**managed_networks_update**](ManagedNetworksApi.md#managed_networks_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName} | 


# **managed_networks_create_or_update**
> ManagedNetwork managed_networks_create_or_update(api_version, subscription_id, resource_group_name, managed_network_name, managed_network)



The Put ManagedNetworks operation creates/updates a Managed Network Resource, specified by resource group and Managed Network name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network import ManagedNetwork
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
    api_instance = openapi_client.ManagedNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    managed_network = openapi_client.ManagedNetwork() # ManagedNetwork | Parameters supplied to the create/update a Managed Network Resource

    try:
        api_response = api_instance.managed_networks_create_or_update(api_version, subscription_id, resource_group_name, managed_network_name, managed_network)
        print("The response of ManagedNetworksApi->managed_networks_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworksApi->managed_networks_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **managed_network** | [**ManagedNetwork**](ManagedNetwork.md)| Parameters supplied to the create/update a Managed Network Resource | 

### Return type

[**ManagedNetwork**](ManagedNetwork.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting Managed Network resource. |  -  |
**201** | Create successful. The operation returns the resulting Managed Network resource. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_networks_delete**
> managed_networks_delete(api_version, subscription_id, resource_group_name, managed_network_name)



The Delete ManagedNetworks operation deletes a Managed Network Resource, specified by the  resource group and Managed Network name

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
    api_instance = openapi_client.ManagedNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.

    try:
        api_instance.managed_networks_delete(api_version, subscription_id, resource_group_name, managed_network_name)
    except Exception as e:
        print("Exception when calling ManagedNetworksApi->managed_networks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 

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
**204** | Request successful. Resource does not exist. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_networks_get**
> ManagedNetwork managed_networks_get(api_version, subscription_id, resource_group_name, managed_network_name)



The Get ManagedNetworks operation gets a Managed Network Resource, specified by the resource group and Managed Network name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network import ManagedNetwork
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
    api_instance = openapi_client.ManagedNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.

    try:
        api_response = api_instance.managed_networks_get(api_version, subscription_id, resource_group_name, managed_network_name)
        print("The response of ManagedNetworksApi->managed_networks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworksApi->managed_networks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 

### Return type

[**ManagedNetwork**](ManagedNetwork.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get successful. The operation returns the specified Managed Network resource. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_networks_list_by_resource_group**
> ManagedNetworkListResult managed_networks_list_by_resource_group(api_version, subscription_id, resource_group_name, top=top, skiptoken=skiptoken)



The ListByResourceGroup ManagedNetwork operation retrieves all the Managed Network resources in a resource group in a paginated format.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network_list_result import ManagedNetworkListResult
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
    api_instance = openapi_client.ManagedNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    top = 56 # int | May be used to limit the number of results in a page for list queries. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.managed_networks_list_by_resource_group(api_version, subscription_id, resource_group_name, top=top, skiptoken=skiptoken)
        print("The response of ManagedNetworksApi->managed_networks_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworksApi->managed_networks_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **top** | **int**| May be used to limit the number of results in a page for list queries. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**ManagedNetworkListResult**](ManagedNetworkListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get successful. The operation returns all Managed Network resources under the specified resource group in a paginated format |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_networks_list_by_subscription**
> ManagedNetworkListResult managed_networks_list_by_subscription(api_version, subscription_id, top=top, skiptoken=skiptoken)



The ListBySubscription  ManagedNetwork operation retrieves all the Managed Network Resources in the current subscription in a paginated format.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network_list_result import ManagedNetworkListResult
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
    api_instance = openapi_client.ManagedNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | May be used to limit the number of results in a page for list queries. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.managed_networks_list_by_subscription(api_version, subscription_id, top=top, skiptoken=skiptoken)
        print("The response of ManagedNetworksApi->managed_networks_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworksApi->managed_networks_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| May be used to limit the number of results in a page for list queries. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**ManagedNetworkListResult**](ManagedNetworkListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get successful. The operation returns all Managed Network resources under the current subscription in a paginated format. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_networks_update**
> ManagedNetwork managed_networks_update(api_version, subscription_id, resource_group_name, managed_network_name, parameters)



Updates the specified Managed Network resource tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network import ManagedNetwork
from openapi_client.models.managed_network_update import ManagedNetworkUpdate
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
    api_instance = openapi_client.ManagedNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    parameters = openapi_client.ManagedNetworkUpdate() # ManagedNetworkUpdate | Parameters supplied to update application gateway tags and/or scope.

    try:
        api_response = api_instance.managed_networks_update(api_version, subscription_id, resource_group_name, managed_network_name, parameters)
        print("The response of ManagedNetworksApi->managed_networks_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworksApi->managed_networks_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **parameters** | [**ManagedNetworkUpdate**](ManagedNetworkUpdate.md)| Parameters supplied to update application gateway tags and/or scope. | 

### Return type

[**ManagedNetwork**](ManagedNetwork.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the updated Managed Network resource. |  -  |
**201** | Update successful. The operation returns the updated Managed Network resource. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

