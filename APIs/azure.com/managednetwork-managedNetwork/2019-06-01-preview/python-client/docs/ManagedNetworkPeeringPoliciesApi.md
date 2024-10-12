# openapi_client.ManagedNetworkPeeringPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_network_peering_policies_create_or_update**](ManagedNetworkPeeringPoliciesApi.md#managed_network_peering_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkPeeringPolicies/{managedNetworkPeeringPolicyName} | 
[**managed_network_peering_policies_delete**](ManagedNetworkPeeringPoliciesApi.md#managed_network_peering_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkPeeringPolicies/{managedNetworkPeeringPolicyName} | 
[**managed_network_peering_policies_get**](ManagedNetworkPeeringPoliciesApi.md#managed_network_peering_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkPeeringPolicies/{managedNetworkPeeringPolicyName} | 
[**managed_network_peering_policies_list_by_managed_network**](ManagedNetworkPeeringPoliciesApi.md#managed_network_peering_policies_list_by_managed_network) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkPeeringPolicies | 


# **managed_network_peering_policies_create_or_update**
> ManagedNetworkPeeringPolicy managed_network_peering_policies_create_or_update(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_peering_policy_name, managed_network_policy)



The Put ManagedNetworkPeeringPolicies operation creates/updates a new Managed Network Peering Policy

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network_peering_policy import ManagedNetworkPeeringPolicy
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
    api_instance = openapi_client.ManagedNetworkPeeringPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    managed_network_peering_policy_name = 'managed_network_peering_policy_name_example' # str | The name of the Managed Network Peering Policy.
    managed_network_policy = openapi_client.ManagedNetworkPeeringPolicy() # ManagedNetworkPeeringPolicy | Parameters supplied to create/update a Managed Network Peering Policy

    try:
        api_response = api_instance.managed_network_peering_policies_create_or_update(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_peering_policy_name, managed_network_policy)
        print("The response of ManagedNetworkPeeringPoliciesApi->managed_network_peering_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworkPeeringPoliciesApi->managed_network_peering_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **managed_network_peering_policy_name** | **str**| The name of the Managed Network Peering Policy. | 
 **managed_network_policy** | [**ManagedNetworkPeeringPolicy**](ManagedNetworkPeeringPolicy.md)| Parameters supplied to create/update a Managed Network Peering Policy | 

### Return type

[**ManagedNetworkPeeringPolicy**](ManagedNetworkPeeringPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting Managed Network Peering Policy resource. |  -  |
**201** | Create successful. The operation returns the resulting Managed Network Peering Policy resource. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_network_peering_policies_delete**
> managed_network_peering_policies_delete(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_peering_policy_name)



The Delete ManagedNetworkPeeringPolicies operation deletes a Managed Network Peering Policy, specified by the  resource group, Managed Network name, and peering policy name

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
    api_instance = openapi_client.ManagedNetworkPeeringPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    managed_network_peering_policy_name = 'managed_network_peering_policy_name_example' # str | The name of the Managed Network Peering Policy.

    try:
        api_instance.managed_network_peering_policies_delete(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_peering_policy_name)
    except Exception as e:
        print("Exception when calling ManagedNetworkPeeringPoliciesApi->managed_network_peering_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **managed_network_peering_policy_name** | **str**| The name of the Managed Network Peering Policy. | 

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

# **managed_network_peering_policies_get**
> ManagedNetworkPeeringPolicy managed_network_peering_policies_get(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_peering_policy_name)



The Get ManagedNetworkPeeringPolicies operation gets a Managed Network Peering Policy resource, specified by the  resource group, Managed Network name, and peering policy name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network_peering_policy import ManagedNetworkPeeringPolicy
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
    api_instance = openapi_client.ManagedNetworkPeeringPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    managed_network_peering_policy_name = 'managed_network_peering_policy_name_example' # str | The name of the Managed Network Peering Policy.

    try:
        api_response = api_instance.managed_network_peering_policies_get(api_version, subscription_id, resource_group_name, managed_network_name, managed_network_peering_policy_name)
        print("The response of ManagedNetworkPeeringPoliciesApi->managed_network_peering_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworkPeeringPoliciesApi->managed_network_peering_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_network_name** | **str**| The name of the Managed Network. | 
 **managed_network_peering_policy_name** | **str**| The name of the Managed Network Peering Policy. | 

### Return type

[**ManagedNetworkPeeringPolicy**](ManagedNetworkPeeringPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get successful. The operation returns the specified Managed Network Peering Policy resource. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_network_peering_policies_list_by_managed_network**
> ManagedNetworkPeeringPolicyListResult managed_network_peering_policies_list_by_managed_network(api_version, subscription_id, resource_group_name, managed_network_name, top=top, skiptoken=skiptoken)



The ListByManagedNetwork PeeringPolicies operation retrieves all the Managed Network Peering Policies in a specified Managed Network, in a paginated format.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_network_peering_policy_list_result import ManagedNetworkPeeringPolicyListResult
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
    api_instance = openapi_client.ManagedNetworkPeeringPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_network_name = 'managed_network_name_example' # str | The name of the Managed Network.
    top = 56 # int | May be used to limit the number of results in a page for list queries. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.managed_network_peering_policies_list_by_managed_network(api_version, subscription_id, resource_group_name, managed_network_name, top=top, skiptoken=skiptoken)
        print("The response of ManagedNetworkPeeringPoliciesApi->managed_network_peering_policies_list_by_managed_network:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedNetworkPeeringPoliciesApi->managed_network_peering_policies_list_by_managed_network: %s\n" % e)
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

[**ManagedNetworkPeeringPolicyListResult**](ManagedNetworkPeeringPolicyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get successful. The operation returns all Managed Network Peering Policy resources in the specified Managed Network, in a paginated format |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

