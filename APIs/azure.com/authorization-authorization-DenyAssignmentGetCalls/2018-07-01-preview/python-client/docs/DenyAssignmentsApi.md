# openapi_client.DenyAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deny_assignments_get**](DenyAssignmentsApi.md#deny_assignments_get) | **GET** /{scope}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} | 
[**deny_assignments_get_by_id**](DenyAssignmentsApi.md#deny_assignments_get_by_id) | **GET** /{denyAssignmentId} | 
[**deny_assignments_list**](DenyAssignmentsApi.md#deny_assignments_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/denyAssignments | 
[**deny_assignments_list_for_resource**](DenyAssignmentsApi.md#deny_assignments_list_for_resource) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/denyAssignments | 
[**deny_assignments_list_for_resource_group**](DenyAssignmentsApi.md#deny_assignments_list_for_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/denyAssignments | 
[**deny_assignments_list_for_scope**](DenyAssignmentsApi.md#deny_assignments_list_for_scope) | **GET** /{scope}/providers/Microsoft.Authorization/denyAssignments | 


# **deny_assignments_get**
> DenyAssignment deny_assignments_get(scope, deny_assignment_id, api_version)



Get the specified deny assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deny_assignment import DenyAssignment
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
    api_instance = openapi_client.DenyAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the deny assignment.
    deny_assignment_id = 'deny_assignment_id_example' # str | The ID of the deny assignment to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deny_assignments_get(scope, deny_assignment_id, api_version)
        print("The response of DenyAssignmentsApi->deny_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DenyAssignmentsApi->deny_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the deny assignment. | 
 **deny_assignment_id** | **str**| The ID of the deny assignment to get. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**DenyAssignment**](DenyAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deny assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deny_assignments_get_by_id**
> DenyAssignment deny_assignments_get_by_id(deny_assignment_id, api_version)



Gets a deny assignment by ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deny_assignment import DenyAssignment
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
    api_instance = openapi_client.DenyAssignmentsApi(api_client)
    deny_assignment_id = 'deny_assignment_id_example' # str | The fully qualified deny assignment ID. For example, use the format, /subscriptions/{guid}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for subscription level deny assignments, or /providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for tenant level deny assignments.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deny_assignments_get_by_id(deny_assignment_id, api_version)
        print("The response of DenyAssignmentsApi->deny_assignments_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DenyAssignmentsApi->deny_assignments_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deny_assignment_id** | **str**| The fully qualified deny assignment ID. For example, use the format, /subscriptions/{guid}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for subscription level deny assignments, or /providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for tenant level deny assignments. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**DenyAssignment**](DenyAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the deny assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deny_assignments_list**
> DenyAssignmentListResult deny_assignments_list(subscription_id, api_version, filter=filter)



Gets all deny assignments for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deny_assignment_list_result import DenyAssignmentListResult
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
    api_instance = openapi_client.DenyAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned. (optional)

    try:
        api_response = api_instance.deny_assignments_list(subscription_id, api_version, filter=filter)
        print("The response of DenyAssignmentsApi->deny_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DenyAssignmentsApi->deny_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. Use $filter&#x3D;atScope() to return all deny assignments at or above the scope. Use $filter&#x3D;denyAssignmentName eq &#39;{name}&#39; to search deny assignments by name at specified scope. Use $filter&#x3D;principalId eq &#39;{id}&#39; to return all deny assignments at, above and below the scope for the specified principal. Use $filter&#x3D;gdprExportPrincipalId eq &#39;{id}&#39; to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned. | [optional] 

### Return type

[**DenyAssignmentListResult**](DenyAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deny assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deny_assignments_list_for_resource**
> DenyAssignmentListResult deny_assignments_list_for_resource(subscription_id, resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, filter=filter)



Gets deny assignments for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deny_assignment_list_result import DenyAssignmentListResult
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
    api_instance = openapi_client.DenyAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource identity.
    resource_type = 'resource_type_example' # str | The resource type of the resource.
    resource_name = 'resource_name_example' # str | The name of the resource to get deny assignments for.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned. (optional)

    try:
        api_response = api_instance.deny_assignments_list_for_resource(subscription_id, resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, filter=filter)
        print("The response of DenyAssignmentsApi->deny_assignments_list_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DenyAssignmentsApi->deny_assignments_list_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **parent_resource_path** | **str**| The parent resource identity. | 
 **resource_type** | **str**| The resource type of the resource. | 
 **resource_name** | **str**| The name of the resource to get deny assignments for. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. Use $filter&#x3D;atScope() to return all deny assignments at or above the scope. Use $filter&#x3D;denyAssignmentName eq &#39;{name}&#39; to search deny assignments by name at specified scope. Use $filter&#x3D;principalId eq &#39;{id}&#39; to return all deny assignments at, above and below the scope for the specified principal. Use $filter&#x3D;gdprExportPrincipalId eq &#39;{id}&#39; to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned. | [optional] 

### Return type

[**DenyAssignmentListResult**](DenyAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deny assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deny_assignments_list_for_resource_group**
> DenyAssignmentListResult deny_assignments_list_for_resource_group(subscription_id, resource_group_name, api_version, filter=filter)



Gets deny assignments for a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deny_assignment_list_result import DenyAssignmentListResult
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
    api_instance = openapi_client.DenyAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned. (optional)

    try:
        api_response = api_instance.deny_assignments_list_for_resource_group(subscription_id, resource_group_name, api_version, filter=filter)
        print("The response of DenyAssignmentsApi->deny_assignments_list_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DenyAssignmentsApi->deny_assignments_list_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. Use $filter&#x3D;atScope() to return all deny assignments at or above the scope. Use $filter&#x3D;denyAssignmentName eq &#39;{name}&#39; to search deny assignments by name at specified scope. Use $filter&#x3D;principalId eq &#39;{id}&#39; to return all deny assignments at, above and below the scope for the specified principal. Use $filter&#x3D;gdprExportPrincipalId eq &#39;{id}&#39; to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned. | [optional] 

### Return type

[**DenyAssignmentListResult**](DenyAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deny assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deny_assignments_list_for_scope**
> DenyAssignmentListResult deny_assignments_list_for_scope(scope, api_version, filter=filter)



Gets deny assignments for a scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deny_assignment_list_result import DenyAssignmentListResult
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
    api_instance = openapi_client.DenyAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the deny assignments.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned. (optional)

    try:
        api_response = api_instance.deny_assignments_list_for_scope(scope, api_version, filter=filter)
        print("The response of DenyAssignmentsApi->deny_assignments_list_for_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DenyAssignmentsApi->deny_assignments_list_for_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the deny assignments. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. Use $filter&#x3D;atScope() to return all deny assignments at or above the scope. Use $filter&#x3D;denyAssignmentName eq &#39;{name}&#39; to search deny assignments by name at specified scope. Use $filter&#x3D;principalId eq &#39;{id}&#39; to return all deny assignments at, above and below the scope for the specified principal. Use $filter&#x3D;gdprExportPrincipalId eq &#39;{id}&#39; to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned. | [optional] 

### Return type

[**DenyAssignmentListResult**](DenyAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deny assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

