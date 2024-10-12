# openapi_client.RoleAssignmentsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**role_assignments_create**](RoleAssignmentsApi.md#role_assignments_create) | **POST** /role-assignments | 
[**role_assignments_destroy**](RoleAssignmentsApi.md#role_assignments_destroy) | **DELETE** /role-assignments/{assignment_id} | 
[**role_assignments_list**](RoleAssignmentsApi.md#role_assignments_list) | **GET** /role-assignments | 
[**role_assignments_read**](RoleAssignmentsApi.md#role_assignments_read) | **GET** /role-assignments/{assignment_id} | 


# **role_assignments_create**
> RoleAssignment role_assignments_create(role_assignment_request=role_assignment_request)



Assign a `Role` to a `Contact`.  The contact needs to have all fields filled, which the role requires. If this is not the case a `400` `UnableToFulfill` will be returned.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
from openapi_client.models.role_assignment_request import RoleAssignmentRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    role_assignment_request = openapi_client.RoleAssignmentRequest() # RoleAssignmentRequest | A role assignment request (optional)

    try:
        api_response = api_instance.role_assignments_create(role_assignment_request=role_assignment_request)
        print("The response of RoleAssignmentsApi->role_assignments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_assignment_request** | [**RoleAssignmentRequest**](RoleAssignmentRequest.md)| A role assignment request | [optional] 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A role assignment for a contact |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_destroy**
> RoleAssignment role_assignments_destroy(assignment_id)



Remove a role assignment from a contact.  If the contact is still in use with a given role required, this will yield an `UnableToFulfill` error.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    assignment_id = 'assignment_id_example' # str | Get by assignment_id

    try:
        api_response = api_instance.role_assignments_destroy(assignment_id)
        print("The response of RoleAssignmentsApi->role_assignments_destroy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment_id** | **str**| Get by assignment_id | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A role assignment for a contact |  -  |
**400** | UnableToFulfill |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_list**
> List[RoleAssignment] role_assignments_list(id=id, contact=contact, role=role)



List all role assignments for a contact.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    contact = 'contact_example' # str | Filter by contact (optional)
    role = 'role_example' # str | Filter by role (optional)

    try:
        api_response = api_instance.role_assignments_list(id=id, contact=contact, role=role)
        print("The response of RoleAssignmentsApi->role_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **contact** | **str**| Filter by contact | [optional] 
 **role** | **str**| Filter by role | [optional] 

### Return type

[**List[RoleAssignment]**](RoleAssignment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: A role assignment for a contact |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_assignments_read**
> RoleAssignment role_assignments_read(assignment_id)



Get a role assignment for a contact.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.role_assignment import RoleAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoleAssignmentsApi(api_client)
    assignment_id = 'assignment_id_example' # str | Get by assignment_id

    try:
        api_response = api_instance.role_assignments_read(assignment_id)
        print("The response of RoleAssignmentsApi->role_assignments_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleAssignmentsApi->role_assignments_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment_id** | **str**| Get by assignment_id | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A role assignment for a contact |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

