# openapi_client.CoursesApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**courses_content_id_activations_get**](CoursesApi.md#courses_content_id_activations_get) | **GET** /courses/{contentId}/activations | Find activations for a contentId
[**courses_content_id_get**](CoursesApi.md#courses_content_id_get) | **GET** /courses/{contentId} | Find course by contentId
[**courses_content_id_permissions_get**](CoursesApi.md#courses_content_id_permissions_get) | **GET** /courses/{contentId}/permissions | Find users who have access to the contentId provided
[**courses_get**](CoursesApi.md#courses_get) | **GET** /courses | Find courses
[**courses_root_content_id_permissions_user_email_post**](CoursesApi.md#courses_root_content_id_permissions_user_email_post) | **POST** /courses/{rootContentId}/permissions/{userEmail} | Update course access


# **courses_content_id_activations_get**
> ActivationResponse courses_content_id_activations_get(content_id)

Find activations for a contentId

Responds with all activations for the contentId provided.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.activation_response import ActivationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CoursesApi(api_client)
    content_id = 'content_id_example' # str | The content Id

    try:
        # Find activations for a contentId
        api_response = api_instance.courses_content_id_activations_get(content_id)
        print("The response of CoursesApi->courses_content_id_activations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoursesApi->courses_content_id_activations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **str**| The content Id | 

### Return type

[**ActivationResponse**](ActivationResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Activation list. |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_content_id_get**
> CourseMetaResponse courses_content_id_get(content_id)

Find course by contentId

Responds with a course matching the contentId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.course_meta_response import CourseMetaResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CoursesApi(api_client)
    content_id = 'content_id_example' # str | The content Id

    try:
        # Find course by contentId
        api_response = api_instance.courses_content_id_get(content_id)
        print("The response of CoursesApi->courses_content_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoursesApi->courses_content_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **str**| The content Id | 

### Return type

[**CourseMetaResponse**](CourseMetaResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course detail |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_content_id_permissions_get**
> UserPermission courses_content_id_permissions_get(content_id)

Find users who have access to the contentId provided

Responds with users who have access to a specific course by contentId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.user_permission import UserPermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CoursesApi(api_client)
    content_id = 'content_id_example' # str | The content Id

    try:
        # Find users who have access to the contentId provided
        api_response = api_instance.courses_content_id_permissions_get(content_id)
        print("The response of CoursesApi->courses_content_id_permissions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoursesApi->courses_content_id_permissions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **str**| The content Id | 

### Return type

[**UserPermission**](UserPermission.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of users who have access to the content ID provided. |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_get**
> List[CourseResponse] courses_get()

Find courses

Responds with all courses (draft and published.)

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.course_response import CourseResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CoursesApi(api_client)

    try:
        # Find courses
        api_response = api_instance.courses_get()
        print("The response of CoursesApi->courses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoursesApi->courses_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[CourseResponse]**](CourseResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All courses (draft and published) in the organisation. |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_root_content_id_permissions_user_email_post**
> CoursesRootContentIdPermissionsUserEmailPost201Response courses_root_content_id_permissions_user_email_post(root_content_id, user_email, permission_to_be_granted_to_the_user)

Update course access

Provide a user with access to a specific course by rootContentId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.courses_root_content_id_permissions_user_email_post201_response import CoursesRootContentIdPermissionsUserEmailPost201Response
from openapi_client.models.permission_to_be_granted_to_the_user import PermissionToBeGrantedToTheUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CoursesApi(api_client)
    root_content_id = 'root_content_id_example' # str | The content Id
    user_email = 'user_email_example' # str | The user email
    permission_to_be_granted_to_the_user = openapi_client.PermissionToBeGrantedToTheUser() # PermissionToBeGrantedToTheUser | 

    try:
        # Update course access
        api_response = api_instance.courses_root_content_id_permissions_user_email_post(root_content_id, user_email, permission_to_be_granted_to_the_user)
        print("The response of CoursesApi->courses_root_content_id_permissions_user_email_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoursesApi->courses_root_content_id_permissions_user_email_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **root_content_id** | **str**| The content Id | 
 **user_email** | **str**| The user email | 
 **permission_to_be_granted_to_the_user** | [**PermissionToBeGrantedToTheUser**](PermissionToBeGrantedToTheUser.md)|  | 

### Return type

[**CoursesRootContentIdPermissionsUserEmailPost201Response**](CoursesRootContentIdPermissionsUserEmailPost201Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | user successfully added to the course with the specified permission. |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

