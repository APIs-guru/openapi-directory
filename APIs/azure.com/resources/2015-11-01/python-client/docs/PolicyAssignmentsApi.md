# openapi_client.PolicyAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_assignments_create**](PolicyAssignmentsApi.md#policy_assignments_create) | **PUT** /{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName} | 
[**policy_assignments_create_by_id**](PolicyAssignmentsApi.md#policy_assignments_create_by_id) | **PUT** /{policyAssignmentId} | 
[**policy_assignments_delete**](PolicyAssignmentsApi.md#policy_assignments_delete) | **DELETE** /{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName} | 
[**policy_assignments_delete_by_id**](PolicyAssignmentsApi.md#policy_assignments_delete_by_id) | **DELETE** /{policyAssignmentId} | 
[**policy_assignments_get**](PolicyAssignmentsApi.md#policy_assignments_get) | **GET** /{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName} | 
[**policy_assignments_get_by_id**](PolicyAssignmentsApi.md#policy_assignments_get_by_id) | **GET** /{policyAssignmentId} | 
[**policy_assignments_list**](PolicyAssignmentsApi.md#policy_assignments_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyAssignments | 
[**policy_assignments_list_for_resource**](PolicyAssignmentsApi.md#policy_assignments_list_for_resource) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}providers/Microsoft.Authorization/policyAssignments | 
[**policy_assignments_list_for_resource_group**](PolicyAssignmentsApi.md#policy_assignments_list_for_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/policyAssignments | 
[**policy_assignments_list_for_scope**](PolicyAssignmentsApi.md#policy_assignments_list_for_scope) | **GET** /{scope}/providers/Microsoft.Authorization/policyAssignments | 


# **policy_assignments_create**
> PolicyAssignment policy_assignments_create(scope, policy_assignment_name, api_version, parameters)



Create policy assignment.

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
    scope = 'scope_example' # str | Scope.
    policy_assignment_name = 'policy_assignment_name_example' # str | Policy assignment name.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.PolicyAssignment() # PolicyAssignment | Policy assignment.

    try:
        api_response = api_instance.policy_assignments_create(scope, policy_assignment_name, api_version, parameters)
        print("The response of PolicyAssignmentsApi->policy_assignments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope. | 
 **policy_assignment_name** | **str**| Policy assignment name. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**PolicyAssignment**](PolicyAssignment.md)| Policy assignment. | 

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
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_create_by_id**
> PolicyAssignment policy_assignments_create_by_id(policy_assignment_id, api_version, parameters)



Create policy assignment by Id.

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
    policy_assignment_id = 'policy_assignment_id_example' # str | Policy assignment Id
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.PolicyAssignment() # PolicyAssignment | Policy assignment.

    try:
        api_response = api_instance.policy_assignments_create_by_id(policy_assignment_id, api_version, parameters)
        print("The response of PolicyAssignmentsApi->policy_assignments_create_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_create_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_assignment_id** | **str**| Policy assignment Id | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**PolicyAssignment**](PolicyAssignment.md)| Policy assignment. | 

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
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_delete**
> PolicyAssignment policy_assignments_delete(scope, policy_assignment_name)



Delete policy assignment.

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
    scope = 'scope_example' # str | Scope.
    policy_assignment_name = 'policy_assignment_name_example' # str | Policy assignment name.

    try:
        api_response = api_instance.policy_assignments_delete(scope, policy_assignment_name)
        print("The response of PolicyAssignmentsApi->policy_assignments_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope. | 
 **policy_assignment_name** | **str**| Policy assignment name. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_delete_by_id**
> PolicyAssignment policy_assignments_delete_by_id(policy_assignment_id, api_version)



Delete policy assignment.

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
    policy_assignment_id = 'policy_assignment_id_example' # str | Policy assignment Id
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.policy_assignments_delete_by_id(policy_assignment_id, api_version)
        print("The response of PolicyAssignmentsApi->policy_assignments_delete_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_delete_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_assignment_id** | **str**| Policy assignment Id | 
 **api_version** | **str**| Client Api Version. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_get**
> PolicyAssignment policy_assignments_get(scope, policy_assignment_name, api_version)



Get single policy assignment.

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
    scope = 'scope_example' # str | Scope.
    policy_assignment_name = 'policy_assignment_name_example' # str | Policy assignment name.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.policy_assignments_get(scope, policy_assignment_name, api_version)
        print("The response of PolicyAssignmentsApi->policy_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope. | 
 **policy_assignment_name** | **str**| Policy assignment name. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_get_by_id**
> PolicyAssignment policy_assignments_get_by_id(policy_assignment_id, api_version)



Get single policy assignment.

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
    policy_assignment_id = 'policy_assignment_id_example' # str | Policy assignment Id
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.policy_assignments_get_by_id(policy_assignment_id, api_version)
        print("The response of PolicyAssignmentsApi->policy_assignments_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_assignment_id** | **str**| Policy assignment Id | 
 **api_version** | **str**| Client Api Version. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_list**
> PolicyAssignmentListResult policy_assignments_list(api_version, subscription_id, filter=filter)



Gets policy assignments of the subscription.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.policy_assignments_list(api_version, subscription_id, filter=filter)
        print("The response of PolicyAssignmentsApi->policy_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_list_for_resource**
> PolicyAssignmentListResult policy_assignments_list_for_resource(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)



Gets policy assignments of the resource.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The name of the resource provider.
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource path.
    resource_type = 'resource_type_example' # str | The resource type.
    resource_name = 'resource_name_example' # str | The resource name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.policy_assignments_list_for_resource(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)
        print("The response of PolicyAssignmentsApi->policy_assignments_list_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_list_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_provider_namespace** | **str**| The name of the resource provider. | 
 **parent_resource_path** | **str**| The parent resource path. | 
 **resource_type** | **str**| The resource type. | 
 **resource_name** | **str**| The resource name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_list_for_resource_group**
> PolicyAssignmentListResult policy_assignments_list_for_resource_group(resource_group_name, api_version, subscription_id, filter=filter)



Gets policy assignments of the resource group.

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
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.policy_assignments_list_for_resource_group(resource_group_name, api_version, subscription_id, filter=filter)
        print("The response of PolicyAssignmentsApi->policy_assignments_list_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_list_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Resource group name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_assignments_list_for_scope**
> PolicyAssignmentListResult policy_assignments_list_for_scope(scope, api_version, filter=filter)



Gets policy assignments of the scope.

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
    scope = 'scope_example' # str | Scope.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.policy_assignments_list_for_scope(scope, api_version, filter=filter)
        print("The response of PolicyAssignmentsApi->policy_assignments_list_for_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyAssignmentsApi->policy_assignments_list_for_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

