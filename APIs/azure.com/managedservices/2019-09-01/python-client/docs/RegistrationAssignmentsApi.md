# openapi_client.RegistrationAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registration_assignments_create_or_update**](RegistrationAssignmentsApi.md#registration_assignments_create_or_update) | **PUT** /{scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId} | 
[**registration_assignments_delete**](RegistrationAssignmentsApi.md#registration_assignments_delete) | **DELETE** /{scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId} | 
[**registration_assignments_get**](RegistrationAssignmentsApi.md#registration_assignments_get) | **GET** /{scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId} | 
[**registration_assignments_list**](RegistrationAssignmentsApi.md#registration_assignments_list) | **GET** /{scope}/providers/Microsoft.ManagedServices/registrationAssignments | 


# **registration_assignments_create_or_update**
> RegistrationAssignment registration_assignments_create_or_update(scope, registration_assignment_id, api_version, request_body)



Creates or updates a registration assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration_assignment import RegistrationAssignment
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
    api_instance = openapi_client.RegistrationAssignmentsApi(api_client)
    scope = 'scope_example' # str | Scope of the resource.
    registration_assignment_id = 'registration_assignment_id_example' # str | Guid of the registration assignment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    request_body = openapi_client.RegistrationAssignment() # RegistrationAssignment | The parameters required to create new registration assignment.

    try:
        api_response = api_instance.registration_assignments_create_or_update(scope, registration_assignment_id, api_version, request_body)
        print("The response of RegistrationAssignmentsApi->registration_assignments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationAssignmentsApi->registration_assignments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope of the resource. | 
 **registration_assignment_id** | **str**| Guid of the registration assignment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **request_body** | [**RegistrationAssignment**](RegistrationAssignment.md)| The parameters required to create new registration assignment. | 

### Return type

[**RegistrationAssignment**](RegistrationAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok - Returns information about the updated registration assignment. |  -  |
**201** | Created - Returns information about the created registration assignment. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registration_assignments_delete**
> registration_assignments_delete(scope, registration_assignment_id, api_version)



Deletes the specified registration assignment.

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
    api_instance = openapi_client.RegistrationAssignmentsApi(api_client)
    scope = 'scope_example' # str | Scope of the resource.
    registration_assignment_id = 'registration_assignment_id_example' # str | Guid of the registration assignment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.registration_assignments_delete(scope, registration_assignment_id, api_version)
    except Exception as e:
        print("Exception when calling RegistrationAssignmentsApi->registration_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope of the resource. | 
 **registration_assignment_id** | **str**| Guid of the registration assignment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**200** | OK - The registration assignment is deleted. |  -  |
**202** | Accepted - The registration assignment deletion operation is accepted. |  -  |
**204** | No Content- The registration assignment does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registration_assignments_get**
> RegistrationAssignment registration_assignments_get(scope, registration_assignment_id, api_version, expand_registration_definition=expand_registration_definition)



Gets the details of specified registration assignment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration_assignment import RegistrationAssignment
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
    api_instance = openapi_client.RegistrationAssignmentsApi(api_client)
    scope = 'scope_example' # str | Scope of the resource.
    registration_assignment_id = 'registration_assignment_id_example' # str | Guid of the registration assignment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    expand_registration_definition = True # bool | Tells whether to return registration definition details also along with registration assignment details. (optional)

    try:
        api_response = api_instance.registration_assignments_get(scope, registration_assignment_id, api_version, expand_registration_definition=expand_registration_definition)
        print("The response of RegistrationAssignmentsApi->registration_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationAssignmentsApi->registration_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope of the resource. | 
 **registration_assignment_id** | **str**| Guid of the registration assignment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **expand_registration_definition** | **bool**| Tells whether to return registration definition details also along with registration assignment details. | [optional] 

### Return type

[**RegistrationAssignment**](RegistrationAssignment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the registration assignment. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registration_assignments_list**
> RegistrationAssignmentList registration_assignments_list(scope, api_version, expand_registration_definition=expand_registration_definition)



Gets a list of the registration assignments.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration_assignment_list import RegistrationAssignmentList
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
    api_instance = openapi_client.RegistrationAssignmentsApi(api_client)
    scope = 'scope_example' # str | Scope of the resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    expand_registration_definition = True # bool | Tells whether to return registration definition details also along with registration assignment details. (optional)

    try:
        api_response = api_instance.registration_assignments_list(scope, api_version, expand_registration_definition=expand_registration_definition)
        print("The response of RegistrationAssignmentsApi->registration_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationAssignmentsApi->registration_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope of the resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **expand_registration_definition** | **bool**| Tells whether to return registration definition details also along with registration assignment details. | [optional] 

### Return type

[**RegistrationAssignmentList**](RegistrationAssignmentList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns a list of the registration assignments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

