# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_tracked_resources_list_query_results_for_management_group**](DefaultApi.md#policy_tracked_resources_list_query_results_for_management_group) | **POST** /providers/{managementGroupsNamespace}/managementGroups/{managementGroupName}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults | 
[**policy_tracked_resources_list_query_results_for_resource**](DefaultApi.md#policy_tracked_resources_list_query_results_for_resource) | **POST** /{resourceId}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults | 
[**policy_tracked_resources_list_query_results_for_resource_group**](DefaultApi.md#policy_tracked_resources_list_query_results_for_resource_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults | 
[**policy_tracked_resources_list_query_results_for_subscription**](DefaultApi.md#policy_tracked_resources_list_query_results_for_subscription) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults | 


# **policy_tracked_resources_list_query_results_for_management_group**
> PolicyTrackedResourcesQueryResults policy_tracked_resources_list_query_results_for_management_group(management_groups_namespace, management_group_name, policy_tracked_resources_resource, api_version, top=top, filter=filter)



Queries policy tracked resources under the management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_tracked_resources_query_results import PolicyTrackedResourcesQueryResults
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
    api_instance = openapi_client.DefaultApi(api_client)
    management_groups_namespace = 'management_groups_namespace_example' # str | The namespace for Microsoft Management RP; only \"Microsoft.Management\" is allowed.
    management_group_name = 'management_group_name_example' # str | Management group name.
    policy_tracked_resources_resource = 'policy_tracked_resources_resource_example' # str | The name of the virtual resource under PolicyTrackedResources resource type; only \"default\" is allowed.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_tracked_resources_list_query_results_for_management_group(management_groups_namespace, management_group_name, policy_tracked_resources_resource, api_version, top=top, filter=filter)
        print("The response of DefaultApi->policy_tracked_resources_list_query_results_for_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_tracked_resources_list_query_results_for_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_groups_namespace** | **str**| The namespace for Microsoft Management RP; only \&quot;Microsoft.Management\&quot; is allowed. | 
 **management_group_name** | **str**| Management group name. | 
 **policy_tracked_resources_resource** | **str**| The name of the virtual resource under PolicyTrackedResources resource type; only \&quot;default\&quot; is allowed. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**PolicyTrackedResourcesQueryResults**](PolicyTrackedResourcesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_tracked_resources_list_query_results_for_resource**
> PolicyTrackedResourcesQueryResults policy_tracked_resources_list_query_results_for_resource(resource_id, policy_tracked_resources_resource, api_version, top=top, filter=filter)



Queries policy tracked resources under the resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_tracked_resources_query_results import PolicyTrackedResourcesQueryResults
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_id = 'resource_id_example' # str | Resource ID.
    policy_tracked_resources_resource = 'policy_tracked_resources_resource_example' # str | The name of the virtual resource under PolicyTrackedResources resource type; only \"default\" is allowed.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_tracked_resources_list_query_results_for_resource(resource_id, policy_tracked_resources_resource, api_version, top=top, filter=filter)
        print("The response of DefaultApi->policy_tracked_resources_list_query_results_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_tracked_resources_list_query_results_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| Resource ID. | 
 **policy_tracked_resources_resource** | **str**| The name of the virtual resource under PolicyTrackedResources resource type; only \&quot;default\&quot; is allowed. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**PolicyTrackedResourcesQueryResults**](PolicyTrackedResourcesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_tracked_resources_list_query_results_for_resource_group**
> PolicyTrackedResourcesQueryResults policy_tracked_resources_list_query_results_for_resource_group(resource_group_name, policy_tracked_resources_resource, subscription_id, api_version, top=top, filter=filter)



Queries policy tracked resources under the resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_tracked_resources_query_results import PolicyTrackedResourcesQueryResults
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    policy_tracked_resources_resource = 'policy_tracked_resources_resource_example' # str | The name of the virtual resource under PolicyTrackedResources resource type; only \"default\" is allowed.
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_tracked_resources_list_query_results_for_resource_group(resource_group_name, policy_tracked_resources_resource, subscription_id, api_version, top=top, filter=filter)
        print("The response of DefaultApi->policy_tracked_resources_list_query_results_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_tracked_resources_list_query_results_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Resource group name. | 
 **policy_tracked_resources_resource** | **str**| The name of the virtual resource under PolicyTrackedResources resource type; only \&quot;default\&quot; is allowed. | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**PolicyTrackedResourcesQueryResults**](PolicyTrackedResourcesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_tracked_resources_list_query_results_for_subscription**
> PolicyTrackedResourcesQueryResults policy_tracked_resources_list_query_results_for_subscription(policy_tracked_resources_resource, subscription_id, api_version, top=top, filter=filter)



Queries policy tracked resources under the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_tracked_resources_query_results import PolicyTrackedResourcesQueryResults
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
    api_instance = openapi_client.DefaultApi(api_client)
    policy_tracked_resources_resource = 'policy_tracked_resources_resource_example' # str | The name of the virtual resource under PolicyTrackedResources resource type; only \"default\" is allowed.
    subscription_id = 'subscription_id_example' # str | Microsoft Azure subscription ID.
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)
    filter = 'filter_example' # str | OData filter expression. (optional)

    try:
        api_response = api_instance.policy_tracked_resources_list_query_results_for_subscription(policy_tracked_resources_resource, subscription_id, api_version, top=top, filter=filter)
        print("The response of DefaultApi->policy_tracked_resources_list_query_results_for_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_tracked_resources_list_query_results_for_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_tracked_resources_resource** | **str**| The name of the virtual resource under PolicyTrackedResources resource type; only \&quot;default\&quot; is allowed. | 
 **subscription_id** | **str**| Microsoft Azure subscription ID. | 
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 
 **filter** | **str**| OData filter expression. | [optional] 

### Return type

[**PolicyTrackedResourcesQueryResults**](PolicyTrackedResourcesQueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

