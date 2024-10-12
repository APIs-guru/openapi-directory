# openapi_client.ManagedNetworkGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_network_groups_create_or_update**](ManagedNetworkGroupsApi.md#managed_network_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkGroups/{managedNetworkGroupName} | 
[**managed_network_groups_delete**](ManagedNetworkGroupsApi.md#managed_network_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkGroups/{managedNetworkGroupName} | 
[**managed_network_groups_get**](ManagedNetworkGroupsApi.md#managed_network_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkGroups/{managedNetworkGroupName} | 
[**managed_network_groups_list_by_managed_network**](ManagedNetworkGroupsApi.md#managed_network_groups_list_by_managed_network) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkGroups | 


# **managed_network_groups_create_or_update**
> ManagedNetworkGroup managed_network_groups_create_or_update(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_group_name, managed_network_group)



The Put ManagedNetworkGroups operation creates or updates a Managed Network Group resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network_group import ManagedNetworkGroup
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
    api_instance = openapi_client.ManagedNetworkGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    managed_network_group_name = 'managed_network_group_name_example' # str | The name of the Managed Network Group.
    managed_network_group = openapi_client.ManagedNetworkGroup() # ManagedNetworkGroup | Parameters supplied to the create/update a Managed Network Group resource

    try:
        api_response = api_instance.managed_network_groups_create_or_update(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_group_name, managed_network_group)
        print("The response of ManagedNetworkGroupsApi->managed_network_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworkGroupsApi->managed_network_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **managed_network_group_name** | **str**| The name of the Managed Network Group. | 
 **managed_network_group** | [**ManagedNetworkGroup**](ManagedNetworkGroup.md)| Parameters supplied to the create/update a Managed Network Group resource | 

### Return type

[**ManagedNetworkGroup**](ManagedNetworkGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting Managed Network Group resource. |  -  |
**201** | Create successful. The operation returns the resulting Managed Network Group resource. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_network_groups_delete**
> managed_network_groups_delete(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_group_name)



The Delete ManagedNetworkGroups operation deletes a Managed Network Group specified by the resource group, Managed Network name, and group name

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
    api_instance = openapi_client.ManagedNetworkGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    managed_network_group_name = 'managed_network_group_name_example' # str | The name of the Managed Network Group.

    try:
        api_instance.managed_network_groups_delete(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_group_name)
    except Exception as e:
        print("Exception when calling ManagedNetworkGroupsApi->managed_network_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **managed_network_group_name** | **str**| The name of the Managed Network Group. | 

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

# **managed_network_groups_get**
> ManagedNetworkGroup managed_network_groups_get(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_group_name)



The Get ManagedNetworkGroups operation gets a Managed Network Group specified by the resource group, Managed Network name, and group name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network_group import ManagedNetworkGroup
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
    api_instance = openapi_client.ManagedNetworkGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    managed_network_group_name = 'managed_network_group_name_example' # str | The name of the Managed Network Group.

    try:
        api_response = api_instance.managed_network_groups_get(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_group_name)
        print("The response of ManagedNetworkGroupsApi->managed_network_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworkGroupsApi->managed_network_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **managed_network_group_name** | **str**| The name of the Managed Network Group. | 

### Return type

[**ManagedNetworkGroup**](ManagedNetworkGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get successful. The operation returns the specified Managed Network Group resource. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_network_groups_list_by_managed_network**
> ManagedNetworkGroupListResult managed_network_groups_list_by_managed_network(api_version, subscription_id, resource_group_name, managed_network_name, top=top, skiptoken=skiptoken)



The ListByManagedNetwork ManagedNetworkGroup operation retrieves all the Managed Network Groups in a specified Managed Networks in a paginated format.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network_group_list_result import ManagedNetworkGroupListResult
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
    api_instance = openapi_client.ManagedNetworkGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    top = 56 # int | May be used to limit the number of results in a page for list queries. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.managed_network_groups_list_by_managed_network(api_version, subscription_id, resource_group_name, managed_network_name, top=top, skiptoken=skiptoken)
        print("The response of ManagedNetworkGroupsApi->managed_network_groups_list_by_managed_network:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworkGroupsApi->managed_network_groups_list_by_managed_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **top** | **int**| May be used to limit the number of results in a page for list queries. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**ManagedNetworkGroupListResult**](ManagedNetworkGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get successful. The operation returns all Managed Network Group resources under the specified Managed Network in a paginated format. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

