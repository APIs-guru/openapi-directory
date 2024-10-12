# openapi_client.PolicyAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_assignments_create**](PolicyAssignmentsApi.md#policy_assignments_create) | **PUT** /{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName} | Creates or updates a policy assignment.
[**policy_assignments_create_by_id**](PolicyAssignmentsApi.md#policy_assignments_create_by_id) | **PUT** /{policyAssignmentId} | Creates or updates a policy assignment.
[**policy_assignments_delete**](PolicyAssignmentsApi.md#policy_assignments_delete) | **DELETE** /{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName} | Deletes a policy assignment.
[**policy_assignments_delete_by_id**](PolicyAssignmentsApi.md#policy_assignments_delete_by_id) | **DELETE** /{policyAssignmentId} | Deletes a policy assignment.
[**policy_assignments_get**](PolicyAssignmentsApi.md#policy_assignments_get) | **GET** /{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName} | Retrieves a policy assignment.
[**policy_assignments_get_by_id**](PolicyAssignmentsApi.md#policy_assignments_get_by_id) | **GET** /{policyAssignmentId} | Retrieves the policy assignment with the given ID.
[**policy_assignments_list**](PolicyAssignmentsApi.md#policy_assignments_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyAssignments | Retrieves all policy assignments that apply to a subscription.
[**policy_assignments_list_for_management_group**](PolicyAssignmentsApi.md#policy_assignments_list_for_management_group) | **GET** /providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyAssignments | Retrieves all policy assignments that apply to a management group.
[**policy_assignments_list_for_resource**](PolicyAssignmentsApi.md#policy_assignments_list_for_resource) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/policyAssignments | Retrieves all policy assignments that apply to a resource.
[**policy_assignments_list_for_resource_group**](PolicyAssignmentsApi.md#policy_assignments_list_for_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/policyAssignments | Retrieves all policy assignments that apply to a resource group.


# **policy_assignments_create**
> PolicyAssignment policy_assignments_create(scope, policy_assignment_name, api_version, parameters)

Creates or updates a policy assignment.

 This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment import PolicyAssignment
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
    policy_assignment_name = 'policy_assignment_name_example' # str | The name of the policy assignment.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    parameters = openapi_client.PolicyAssignment() # PolicyAssignment | Parameters for the policy assignment.

    try:
        # Creates or updates a policy assignment.
        api_response = api_instance.policy_assignments_create(scope, policy_assignment_name, api_version, parameters)
        print("The response of PolicyAssignmentsApi->policy_assignments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the policy assignment. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;), resource group (format: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39;, or resource (format: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}&#39; | 
 **policy_assignment_name** | **str**| The name of the policy assignment. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **parameters** | [**PolicyAssignment**](PolicyAssignment.md)| Parameters for the policy assignment. | 

### Return type

[**PolicyAssignment**](PolicyAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created - Returns information about the new policy assignment. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_create_by_id**
> PolicyAssignment policy_assignments_create_by_id(policy_assignment_id, api_version, parameters)

Creates or updates a policy assignment.

This operation creates or updates the policy assignment with the given ID. Policy assignments made on a scope apply to all resources contained in that scope. For example, when you assign a policy to a resource group that policy applies to all resources in the group. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment import PolicyAssignment
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    policy_assignment_id = 'policy_assignment_id_example' # str | The ID of the policy assignment to create. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    parameters = openapi_client.PolicyAssignment() # PolicyAssignment | Parameters for policy assignment.

    try:
        # Creates or updates a policy assignment.
        api_response = api_instance.policy_assignments_create_by_id(policy_assignment_id, api_version, parameters)
        print("The response of PolicyAssignmentsApi->policy_assignments_create_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_create_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_assignment_id** | **str**| The ID of the policy assignment to create. Use the format &#39;{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}&#39;. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **parameters** | [**PolicyAssignment**](PolicyAssignment.md)| Parameters for policy assignment. | 

### Return type

[**PolicyAssignment**](PolicyAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created - Returns information about the policy assignment. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_delete**
> PolicyAssignment policy_assignments_delete(scope, policy_assignment_name, api_version)

Deletes a policy assignment.

This operation deletes a policy assignment, given its name and the scope it was created in. The scope of a policy assignment is the part of its ID preceding '/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment import PolicyAssignment
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
    policy_assignment_name = 'policy_assignment_name_example' # str | The name of the policy assignment to delete.
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        # Deletes a policy assignment.
        api_response = api_instance.policy_assignments_delete(scope, policy_assignment_name, api_version)
        print("The response of PolicyAssignmentsApi->policy_assignments_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the policy assignment. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;), resource group (format: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39;, or resource (format: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}&#39; | 
 **policy_assignment_name** | **str**| The name of the policy assignment to delete. | 
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**PolicyAssignment**](PolicyAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deleted assignment. |  -  |
**204** | No Content - the policy assignment doesn&#39;t exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_delete_by_id**
> PolicyAssignment policy_assignments_delete_by_id(policy_assignment_id, api_version)

Deletes a policy assignment.

This operation deletes the policy with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid formats for {scope} are: '/providers/Microsoft.Management/managementGroups/{managementGroup}' (management group), '/subscriptions/{subscriptionId}' (subscription), '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' (resource group), or '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}' (resource).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment import PolicyAssignment
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    policy_assignment_id = 'policy_assignment_id_example' # str | The ID of the policy assignment to delete. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        # Deletes a policy assignment.
        api_response = api_instance.policy_assignments_delete_by_id(policy_assignment_id, api_version)
        print("The response of PolicyAssignmentsApi->policy_assignments_delete_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_delete_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_assignment_id** | **str**| The ID of the policy assignment to delete. Use the format &#39;{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}&#39;. | 
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**PolicyAssignment**](PolicyAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the policy assignment. |  -  |
**204** | No Content - the policy assignment doesn&#39;t exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_get**
> PolicyAssignment policy_assignments_get(scope, policy_assignment_name, api_version)

Retrieves a policy assignment.

This operation retrieves a single policy assignment, given its name and the scope it was created at.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment import PolicyAssignment
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
    policy_assignment_name = 'policy_assignment_name_example' # str | The name of the policy assignment to get.
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        # Retrieves a policy assignment.
        api_response = api_instance.policy_assignments_get(scope, policy_assignment_name, api_version)
        print("The response of PolicyAssignmentsApi->policy_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the policy assignment. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;), resource group (format: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39;, or resource (format: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}&#39; | 
 **policy_assignment_name** | **str**| The name of the policy assignment to get. | 
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**PolicyAssignment**](PolicyAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the policy assignment. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_get_by_id**
> PolicyAssignment policy_assignments_get_by_id(policy_assignment_id, api_version)

Retrieves the policy assignment with the given ID.

The operation retrieves the policy assignment with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment import PolicyAssignment
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    policy_assignment_id = 'policy_assignment_id_example' # str | The ID of the policy assignment to get. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        # Retrieves the policy assignment with the given ID.
        api_response = api_instance.policy_assignments_get_by_id(policy_assignment_id, api_version)
        print("The response of PolicyAssignmentsApi->policy_assignments_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_assignment_id** | **str**| The ID of the policy assignment to get. Use the format &#39;{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}&#39;. | 
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**PolicyAssignment**](PolicyAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the policy assignment. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_list**
> PolicyAssignmentListResult policy_assignments_list(api_version, subscription_id, filter=filter)

Retrieves all policy assignments that apply to a subscription.

This operation retrieves the list of all policy assignments associated with the given subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the subscription, including those that apply directly or from management groups that contain the given subscription, as well as any applied to objects contained within the subscription. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the subscription, which is everything in the unfiltered list except those applied to objects contained within the subscription. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value}.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment_list_result import PolicyAssignmentListResult
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. (optional)

    try:
        # Retrieves all policy assignments that apply to a subscription.
        api_response = api_instance.policy_assignments_list(api_version, subscription_id, filter=filter)
        print("The response of PolicyAssignmentsApi->policy_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. Valid values for $filter are: &#39;atScope()&#39; or &#39;policyDefinitionId eq &#39;{value}&#39;&#39;. If $filter is not provided, no filtering is performed. | [optional] 

### Return type

[**PolicyAssignmentListResult**](PolicyAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of policy assignments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_list_for_management_group**
> PolicyAssignmentListResult policy_assignments_list_for_management_group(management_group_id, filter, api_version)

Retrieves all policy assignments that apply to a management group.

This operation retrieves the list of all policy assignments applicable to the management group that match the given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter=atScope() is provided, the returned list includes all policy assignments that are assigned to the management group or the management group's ancestors. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment_list_result import PolicyAssignmentListResult
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    management_group_id = 'management_group_id_example' # str | The ID of the management group.
    filter = 'filter_example' # str | The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. A filter is required when listing policy assignments at management group scope.
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        # Retrieves all policy assignments that apply to a management group.
        api_response = api_instance.policy_assignments_list_for_management_group(management_group_id, filter, api_version)
        print("The response of PolicyAssignmentsApi->policy_assignments_list_for_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_list_for_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **management_group_id** | **str**| The ID of the management group. | 
 **filter** | **str**| The filter to apply on the operation. Valid values for $filter are: &#39;atScope()&#39; or &#39;policyDefinitionId eq &#39;{value}&#39;&#39;. A filter is required when listing policy assignments at management group scope. | 
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**PolicyAssignmentListResult**](PolicyAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of policy assignments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_list_for_resource**
> PolicyAssignmentListResult policy_assignments_list_for_resource(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)

Retrieves all policy assignments that apply to a resource.

This operation retrieves the list of all policy assignments associated with the specified resource in the given resource group and subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the resource, including those that apply directly or from all containing scopes, as well as any applied to resources contained within the resource. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the resource, which is everything in the unfiltered list except those applied to resources contained within the resource. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the resource. Three parameters plus the resource name are used to identify a specific resource. If the resource is not part of a parent resource (the more common case), the parent resource path should not be provided (or provided as ''). For example a web app could be specified as ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '', {resourceType} == 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent resource, then all parameters should be provided. For example a virtual machine DNS name could be specified as ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} == 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} == 'MyComputerName'). A convenient alternative to providing the namespace and type name separately is to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '', {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} == 'MyWebApp').

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment_list_result import PolicyAssignmentListResult
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the resource.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider. For example, the namespace of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource path. Use empty string if there is none.
    resource_type = 'resource_type_example' # str | The resource type name. For example the type name of a web app is 'sites' (from Microsoft.Web/sites).
    resource_name = 'resource_name_example' # str | The name of the resource.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. (optional)

    try:
        # Retrieves all policy assignments that apply to a resource.
        api_response = api_instance.policy_assignments_list_for_resource(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)
        print("The response of PolicyAssignmentsApi->policy_assignments_list_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_list_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the resource. | 
 **resource_provider_namespace** | **str**| The namespace of the resource provider. For example, the namespace of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines) | 
 **parent_resource_path** | **str**| The parent resource path. Use empty string if there is none. | 
 **resource_type** | **str**| The resource type name. For example the type name of a web app is &#39;sites&#39; (from Microsoft.Web/sites). | 
 **resource_name** | **str**| The name of the resource. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. Valid values for $filter are: &#39;atScope()&#39; or &#39;policyDefinitionId eq &#39;{value}&#39;&#39;. If $filter is not provided, no filtering is performed. | [optional] 

### Return type

[**PolicyAssignmentListResult**](PolicyAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of policy assignments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_list_for_resource_group**
> PolicyAssignmentListResult policy_assignments_list_for_resource_group(resource_group_name, api_version, subscription_id, filter=filter)

Retrieves all policy assignments that apply to a resource group.

This operation retrieves the list of all policy assignments associated with the given resource group in the given subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the resource group, including those that apply directly or apply from containing scopes, as well as any applied to resources contained within the resource group. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the resource group, which is everything in the unfiltered list except those applied to resources contained within the resource group. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_assignment_list_result import PolicyAssignmentListResult
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
    api_instance = openapi_client.PolicyAssignmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains policy assignments.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed. (optional)

    try:
        # Retrieves all policy assignments that apply to a resource group.
        api_response = api_instance.policy_assignments_list_for_resource_group(resource_group_name, api_version, subscription_id, filter=filter)
        print("The response of PolicyAssignmentsApi->policy_assignments_list_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_list_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains policy assignments. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. Valid values for $filter are: &#39;atScope()&#39; or &#39;policyDefinitionId eq &#39;{value}&#39;&#39;. If $filter is not provided, no filtering is performed. | [optional] 

### Return type

[**PolicyAssignmentListResult**](PolicyAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of policy assignments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

