# openapi_client.RoleAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**role_assignments_create**](RoleAssignmentsApi.md#role_assignments_create) | **PUT** /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName} | 
[**role_assignments_create_by_id**](RoleAssignmentsApi.md#role_assignments_create_by_id) | **PUT** /{roleAssignmentId} | 
[**role_assignments_delete**](RoleAssignmentsApi.md#role_assignments_delete) | **DELETE** /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName} | 
[**role_assignments_delete_by_id**](RoleAssignmentsApi.md#role_assignments_delete_by_id) | **DELETE** /{roleAssignmentId} | 
[**role_assignments_get**](RoleAssignmentsApi.md#role_assignments_get) | **GET** /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName} | 
[**role_assignments_get_by_id**](RoleAssignmentsApi.md#role_assignments_get_by_id) | **GET** /{roleAssignmentId} | 
[**role_assignments_list**](RoleAssignmentsApi.md#role_assignments_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleAssignments | 
[**role_assignments_list_for_resource**](RoleAssignmentsApi.md#role_assignments_list_for_resource) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/roleAssignments | 
[**role_assignments_list_for_resource_group**](RoleAssignmentsApi.md#role_assignments_list_for_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/roleAssignments | 
[**role_assignments_list_for_scope**](RoleAssignmentsApi.md#role_assignments_list_for_scope) | **GET** /{scope}/providers/Microsoft.Authorization/roleAssignments | 


# **role_assignments_create**
> RoleAssignment role_assignments_create(scope, role_assignment_name, api_version, parameters)



Creates a role assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
from openapi_client.models.role_assignment_create_parameters import RoleAssignmentCreateParameters
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the role assignment to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
    role_assignment_name = 'role_assignment_name_example' # str | The name of the role assignment to create. It can be any valid GUID.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.RoleAssignmentCreateParameters() # RoleAssignmentCreateParameters | Parameters for the role assignment.

    try:
        api_response = api_instance.role_assignments_create(scope, role_assignment_name, api_version, parameters)
        print("The response of RoleAssignmentsApi->role_assignments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the role assignment to create. The scope can be any REST resource instance. For example, use &#39;/subscriptions/{subscription-id}/&#39; for a subscription, &#39;/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}&#39; for a resource group, and &#39;/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}&#39; for a resource. | 
 **role_assignment_name** | **str**| The name of the role assignment to create. It can be any valid GUID. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**RoleAssignmentCreateParameters**](RoleAssignmentCreateParameters.md)| Parameters for the role assignment. | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created - Returns information about the role assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_create_by_id**
> RoleAssignment role_assignments_create_by_id(role_assignment_id, api_version, parameters)



Creates a role assignment by ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
from openapi_client.models.role_assignment_create_parameters import RoleAssignmentCreateParameters
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    role_assignment_id = 'role_assignment_id_example' # str | The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.RoleAssignmentCreateParameters() # RoleAssignmentCreateParameters | Parameters for the role assignment.

    try:
        api_response = api_instance.role_assignments_create_by_id(role_assignment_id, api_version, parameters)
        print("The response of RoleAssignmentsApi->role_assignments_create_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_create_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_assignment_id** | **str**| The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**RoleAssignmentCreateParameters**](RoleAssignmentCreateParameters.md)| Parameters for the role assignment. | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created - Returns the role assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_delete**
> RoleAssignment role_assignments_delete(scope, role_assignment_name, api_version)



Deletes a role assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the role assignment to delete.
    role_assignment_name = 'role_assignment_name_example' # str | The name of the role assignment to delete.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.role_assignments_delete(scope, role_assignment_name, api_version)
        print("The response of RoleAssignmentsApi->role_assignments_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the role assignment to delete. | 
 **role_assignment_name** | **str**| The name of the role assignment to delete. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the role assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_delete_by_id**
> RoleAssignment role_assignments_delete_by_id(role_assignment_id, api_version)



Deletes a role assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    role_assignment_id = 'role_assignment_id_example' # str | The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.role_assignments_delete_by_id(role_assignment_id, api_version)
        print("The response of RoleAssignmentsApi->role_assignments_delete_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_delete_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_assignment_id** | **str**| The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the role assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_get**
> RoleAssignment role_assignments_get(scope, role_assignment_name, api_version)



Get the specified role assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the role assignment.
    role_assignment_name = 'role_assignment_name_example' # str | The name of the role assignment to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.role_assignments_get(scope, role_assignment_name, api_version)
        print("The response of RoleAssignmentsApi->role_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the role assignment. | 
 **role_assignment_name** | **str**| The name of the role assignment to get. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the role assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_get_by_id**
> RoleAssignment role_assignments_get_by_id(role_assignment_id, api_version)



Gets a role assignment by ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    role_assignment_id = 'role_assignment_id_example' # str | The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.role_assignments_get_by_id(role_assignment_id, api_version)
        print("The response of RoleAssignmentsApi->role_assignments_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_assignment_id** | **str**| The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the role assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_list**
> RoleAssignmentListResult role_assignments_list(api_version, subscription_id, filter=filter)



Gets all role assignments for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment_list_result import RoleAssignmentListResult
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal. (optional)

    try:
        api_response = api_instance.role_assignments_list(api_version, subscription_id, filter=filter)
        print("The response of RoleAssignmentsApi->role_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. Use $filter&#x3D;atScope() to return all role assignments at or above the scope. Use $filter&#x3D;principalId eq {id} to return all role assignments at, above or below the scope for the specified principal. | [optional] 

### Return type

[**RoleAssignmentListResult**](RoleAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of role assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_list_for_resource**
> RoleAssignmentListResult role_assignments_list_for_resource(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)



Gets role assignments for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment_list_result import RoleAssignmentListResult
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource identity.
    resource_type = 'resource_type_example' # str | The resource type of the resource.
    resource_name = 'resource_name_example' # str | The name of the resource to get role assignments for.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal. (optional)

    try:
        api_response = api_instance.role_assignments_list_for_resource(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)
        print("The response of RoleAssignmentsApi->role_assignments_list_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_list_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **parent_resource_path** | **str**| The parent resource identity. | 
 **resource_type** | **str**| The resource type of the resource. | 
 **resource_name** | **str**| The name of the resource to get role assignments for. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. Use $filter&#x3D;atScope() to return all role assignments at or above the scope. Use $filter&#x3D;principalId eq {id} to return all role assignments at, above or below the scope for the specified principal. | [optional] 

### Return type

[**RoleAssignmentListResult**](RoleAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of role assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_list_for_resource_group**
> RoleAssignmentListResult role_assignments_list_for_resource_group(resource_group_name, api_version, subscription_id, filter=filter)



Gets role assignments for a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment_list_result import RoleAssignmentListResult
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal. (optional)

    try:
        api_response = api_instance.role_assignments_list_for_resource_group(resource_group_name, api_version, subscription_id, filter=filter)
        print("The response of RoleAssignmentsApi->role_assignments_list_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_list_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. Use $filter&#x3D;atScope() to return all role assignments at or above the scope. Use $filter&#x3D;principalId eq {id} to return all role assignments at, above or below the scope for the specified principal. | [optional] 

### Return type

[**RoleAssignmentListResult**](RoleAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of role assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_list_for_scope**
> RoleAssignmentListResult role_assignments_list_for_scope(scope, api_version, filter=filter)



Gets role assignments for a scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_assignment_list_result import RoleAssignmentListResult
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
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the role assignments.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal. (optional)

    try:
        api_response = api_instance.role_assignments_list_for_scope(scope, api_version, filter=filter)
        print("The response of RoleAssignmentsApi->role_assignments_list_for_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_list_for_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the role assignments. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. Use $filter&#x3D;atScope() to return all role assignments at or above the scope. Use $filter&#x3D;principalId eq {id} to return all role assignments at, above or below the scope for the specified principal. | [optional] 

### Return type

[**RoleAssignmentListResult**](RoleAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of role assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

