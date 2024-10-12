# openapi_client.UsersInIQualifyApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_post**](UsersInIQualifyApi.md#users_post) | **POST** /users | Add new user
[**users_user_email_get**](UsersInIQualifyApi.md#users_user_email_get) | **GET** /users/{userEmail} | Find user by email
[**users_user_email_invite_email_post**](UsersInIQualifyApi.md#users_user_email_invite_email_post) | **POST** /users/{userEmail}/invite-email | Resend invitation email
[**users_user_email_offerings_get**](UsersInIQualifyApi.md#users_user_email_offerings_get) | **GET** /users/{userEmail}/offerings | Find user&#39;s offerings
[**users_user_email_offerings_post**](UsersInIQualifyApi.md#users_user_email_offerings_post) | **POST** /users/{userEmail}/offerings | Adds the user to the specified offerings as a learner
[**users_user_email_patch**](UsersInIQualifyApi.md#users_user_email_patch) | **PATCH** /users/{userEmail} | Update user
[**users_user_email_permissions_permission_name_post**](UsersInIQualifyApi.md#users_user_email_permissions_permission_name_post) | **POST** /users/{userEmail}/permissions/{permissionName} | Add permission to user
[**users_user_email_suspend_put**](UsersInIQualifyApi.md#users_user_email_suspend_put) | **PUT** /users/{userEmail}/suspend | Suspend user


# **users_post**
> UserResponse users_post(user)

Add new user

Creates a new user.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.user_response import UserResponse
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
    api_instance = openapi_client.UsersInIQualifyApi(api_client)
    user = openapi_client.User() # User | user

    try:
        # Add new user
        api_response = api_instance.users_post(user)
        print("The response of UsersInIQualifyApi->users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersInIQualifyApi->users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| user | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | user added |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_get**
> UserResponse users_user_email_get(user_email)

Find user by email

Responds with a user matching the specified email.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.user_response import UserResponse
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
    api_instance = openapi_client.UsersInIQualifyApi(api_client)
    user_email = 'user_email_example' # str | user's email

    try:
        # Find user by email
        api_response = api_instance.users_user_email_get(user_email)
        print("The response of UsersInIQualifyApi->users_user_email_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersInIQualifyApi->users_user_email_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | user data |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_invite_email_post**
> users_user_email_invite_email_post(user_email)

Resend invitation email

Re-sends an invitation e-mail to the specified user.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
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
    api_instance = openapi_client.UsersInIQualifyApi(api_client)
    user_email = 'user_email_example' # str | user's email

    try:
        # Resend invitation email
        api_instance.users_user_email_invite_email_post(user_email)
    except Exception as e:
        print("Exception when calling UsersInIQualifyApi->users_user_email_invite_email_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | successfully requested invitation e-mail sending |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_offerings_get**
> List[OfferingMetadataResponse] users_user_email_offerings_get(user_email)

Find user's offerings

Responds with all offerings that the user in.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
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
    api_instance = openapi_client.UsersInIQualifyApi(api_client)
    user_email = 'user_email_example' # str | user's email

    try:
        # Find user's offerings
        api_response = api_instance.users_user_email_offerings_get(user_email)
        print("The response of UsersInIQualifyApi->users_user_email_offerings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersInIQualifyApi->users_user_email_offerings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 

### Return type

[**List[OfferingMetadataResponse]**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | user&#39;s offerings |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_offerings_post**
> List[OfferingMetadataResponse] users_user_email_offerings_post(user_email, request_body)

Adds the user to the specified offerings as a learner

Adds a user to an array of offerings by offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
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
    api_instance = openapi_client.UsersInIQualifyApi(api_client)
    user_email = 'user_email_example' # str | user's email
    request_body = ['request_body_example'] # List[str] | offering ids

    try:
        # Adds the user to the specified offerings as a learner
        api_response = api_instance.users_user_email_offerings_post(user_email, request_body)
        print("The response of UsersInIQualifyApi->users_user_email_offerings_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersInIQualifyApi->users_user_email_offerings_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 
 **request_body** | [**List[str]**](str.md)| offering ids | 

### Return type

[**List[OfferingMetadataResponse]**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | user&#39;s offerings |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_patch**
> UserResponse users_user_email_patch(user_email, user=user)

Update user

Updates the specified user by email.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.user_response import UserResponse
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
    api_instance = openapi_client.UsersInIQualifyApi(api_client)
    user_email = 'user_email_example' # str | user's email
    user = openapi_client.User() # User |  (optional)

    try:
        # Update user
        api_response = api_instance.users_user_email_patch(user_email, user=user)
        print("The response of UsersInIQualifyApi->users_user_email_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersInIQualifyApi->users_user_email_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | user updated |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_permissions_permission_name_post**
> UserResponse users_user_email_permissions_permission_name_post(user_email, permission_name)

Add permission to user

Adds additional permissions to the specified user.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.user_response import UserResponse
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
    api_instance = openapi_client.UsersInIQualifyApi(api_client)
    user_email = 'user_email_example' # str | user's email
    permission_name = 'permission_name_example' # str | permission name

    try:
        # Add permission to user
        api_response = api_instance.users_user_email_permissions_permission_name_post(user_email, permission_name)
        print("The response of UsersInIQualifyApi->users_user_email_permissions_permission_name_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersInIQualifyApi->users_user_email_permissions_permission_name_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 
 **permission_name** | **str**| permission name | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | permission successfully added to user |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_email_suspend_put**
> users_user_email_suspend_put(user_email, suspended_request)

Suspend user

Suspends the specified user's account.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.suspended_request import SuspendedRequest
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
    api_instance = openapi_client.UsersInIQualifyApi(api_client)
    user_email = 'user_email_example' # str | user's email
    suspended_request = openapi_client.SuspendedRequest() # SuspendedRequest | 

    try:
        # Suspend user
        api_instance.users_user_email_suspend_put(user_email, suspended_request)
    except Exception as e:
        print("Exception when calling UsersInIQualifyApi->users_user_email_suspend_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email** | **str**| user&#39;s email | 
 **suspended_request** | [**SuspendedRequest**](SuspendedRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User suspended. |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

