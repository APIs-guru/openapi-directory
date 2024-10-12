# openapi_client.AssignmentOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignment_operations_get**](AssignmentOperationsApi.md#assignment_operations_get) | **GET** /{scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}/assignmentOperations/{assignmentOperationName} | 
[**assignment_operations_list**](AssignmentOperationsApi.md#assignment_operations_list) | **GET** /{scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}/assignmentOperations | 


# **assignment_operations_get**
> AssignmentOperation assignment_operations_get(api_version, scope, assignment_name, assignment_operation_name)



Get a blueprint assignment operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assignment_operation import AssignmentOperation
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
    api_instance = openapi_client.AssignmentOperationsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    assignment_name = 'assignment_name_example' # str | Name of the blueprint assignment.
    assignment_operation_name = 'assignment_operation_name_example' # str | Name of the blueprint assignment operation.

    try:
        api_response = api_instance.assignment_operations_get(api_version, scope, assignment_name, assignment_operation_name)
        print("The response of AssignmentOperationsApi->assignment_operations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOperationsApi->assignment_operations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **assignment_name** | **str**| Name of the blueprint assignment. | 
 **assignment_operation_name** | **str**| Name of the blueprint assignment operation. | 

### Return type

[**AssignmentOperation**](AssignmentOperation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- blueprint assignment operation retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignment_operations_list**
> AssignmentOperationList assignment_operations_list(api_version, scope, assignment_name)



List operations for given blueprint assignment within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assignment_operation_list import AssignmentOperationList
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
    api_instance = openapi_client.AssignmentOperationsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    assignment_name = 'assignment_name_example' # str | Name of the blueprint assignment.

    try:
        api_response = api_instance.assignment_operations_list(api_version, scope, assignment_name)
        print("The response of AssignmentOperationsApi->assignment_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOperationsApi->assignment_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **assignment_name** | **str**| Name of the blueprint assignment. | 

### Return type

[**AssignmentOperationList**](AssignmentOperationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- all blueprint assignment operations retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

