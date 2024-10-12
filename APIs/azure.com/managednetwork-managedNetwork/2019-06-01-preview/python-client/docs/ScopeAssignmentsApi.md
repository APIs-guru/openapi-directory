# openapi_client.ScopeAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scope_assignments_create_or_update**](ScopeAssignmentsApi.md#scope_assignments_create_or_update) | **PUT** /{scope}/providers/Microsoft.ManagedNetwork/scopeAssignments/{scopeAssignmentName} | 
[**scope_assignments_delete**](ScopeAssignmentsApi.md#scope_assignments_delete) | **DELETE** /{scope}/providers/Microsoft.ManagedNetwork/scopeAssignments/{scopeAssignmentName} | 
[**scope_assignments_get**](ScopeAssignmentsApi.md#scope_assignments_get) | **GET** /{scope}/providers/Microsoft.ManagedNetwork/scopeAssignments/{scopeAssignmentName} | 
[**scope_assignments_list**](ScopeAssignmentsApi.md#scope_assignments_list) | **GET** /{scope}/providers/Microsoft.ManagedNetwork/scopeAssignments | 


# **scope_assignments_create_or_update**
> ScopeAssignment scope_assignments_create_or_update(scope, scope_assignment_name, api_version, parameters)



Creates a scope assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scope_assignment import ScopeAssignment
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
    api_instance = openapi_client.ScopeAssignmentsApi(api_client)
    scope = 'scope_example' # str | The base resource of the scope assignment to create. The scope can be any REST resource instance. For example, use 'subscriptions/{subscription-id}' for a subscription, 'subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and 'subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
    scope_assignment_name = 'scope_assignment_name_example' # str | The name of the scope assignment to create.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.ScopeAssignment() # ScopeAssignment | Parameters supplied to the specify which Managed Network this scope is being assigned

    try:
        api_response = api_instance.scope_assignments_create_or_update(scope, scope_assignment_name, api_version, parameters)
        print("The response of ScopeAssignmentsApi->scope_assignments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeAssignmentsApi->scope_assignments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The base resource of the scope assignment to create. The scope can be any REST resource instance. For example, use &#39;subscriptions/{subscription-id}&#39; for a subscription, &#39;subscriptions/{subscription-id}/resourceGroups/{resource-group-name}&#39; for a resource group, and &#39;subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}&#39; for a resource. | 
 **scope_assignment_name** | **str**| The name of the scope assignment to create. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**ScopeAssignment**](ScopeAssignment.md)| Parameters supplied to the specify which Managed Network this scope is being assigned | 

### Return type

[**ScopeAssignment**](ScopeAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated - Returns information about the scope assignment. |  -  |
**201** | Created - Returns information about the scope assignment. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scope_assignments_delete**
> scope_assignments_delete(scope, scope_assignment_name, api_version)



Deletes a scope assignment.

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
    api_instance = openapi_client.ScopeAssignmentsApi(api_client)
    scope = 'scope_example' # str | The scope of the scope assignment to delete.
    scope_assignment_name = 'scope_assignment_name_example' # str | The name of the scope assignment to delete.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.scope_assignments_delete(scope, scope_assignment_name, api_version)
    except Exception as e:
        print("Exception when calling ScopeAssignmentsApi->scope_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the scope assignment to delete. | 
 **scope_assignment_name** | **str**| The name of the scope assignment to delete. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | Delete Succeed. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scope_assignments_get**
> ScopeAssignment scope_assignments_get(scope, scope_assignment_name, api_version)



Get the specified scope assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scope_assignment import ScopeAssignment
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
    api_instance = openapi_client.ScopeAssignmentsApi(api_client)
    scope = 'scope_example' # str | The base resource of the scope assignment.
    scope_assignment_name = 'scope_assignment_name_example' # str | The name of the scope assignment to get.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.scope_assignments_get(scope, scope_assignment_name, api_version)
        print("The response of ScopeAssignmentsApi->scope_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeAssignmentsApi->scope_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The base resource of the scope assignment. | 
 **scope_assignment_name** | **str**| The name of the scope assignment to get. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ScopeAssignment**](ScopeAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the scope assignment. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scope_assignments_list**
> ScopeAssignmentListResult scope_assignments_list(scope, api_version)



Get the specified scope assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scope_assignment_list_result import ScopeAssignmentListResult
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
    api_instance = openapi_client.ScopeAssignmentsApi(api_client)
    scope = 'scope_example' # str | The base resource of the scope assignment.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.scope_assignments_list(scope, api_version)
        print("The response of ScopeAssignmentsApi->scope_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeAssignmentsApi->scope_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The base resource of the scope assignment. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ScopeAssignmentListResult**](ScopeAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the scope assignment. |  -  |
**0** | Resource Provider error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

