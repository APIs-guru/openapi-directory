# openapi_client.UsersApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_users_id**](UsersApi.md#delete_users_id) | **DELETE** /users/{userID} | Delete a user
[**get_flags**](UsersApi.md#get_flags) | **GET** /flags | Return the feature flags for the currently authenticated user
[**get_me**](UsersApi.md#get_me) | **GET** /me | Retrieve the currently authenticated user
[**get_users**](UsersApi.md#get_users) | **GET** /users | List all users
[**get_users_id**](UsersApi.md#get_users_id) | **GET** /users/{userID} | Retrieve a user
[**patch_users_id**](UsersApi.md#patch_users_id) | **PATCH** /users/{userID} | Update a user
[**post_users**](UsersApi.md#post_users) | **POST** /users | Create a user
[**post_users_id_password**](UsersApi.md#post_users_id_password) | **POST** /users/{userID}/password | Update a password
[**put_me_password**](UsersApi.md#put_me_password) | **PUT** /me/password | Update a password


# **delete_users_id**
> delete_users_id(user_id, zap_trace_span=zap_trace_span)

Delete a user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a user
        api_instance.delete_users_id(user_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling UsersApi->delete_users_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User deleted |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_flags**
> Dict[str, object] get_flags(zap_trace_span=zap_trace_span)

Return the feature flags for the currently authenticated user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Return the feature flags for the currently authenticated user
        api_response = api_instance.get_flags(zap_trace_span=zap_trace_span)
        print("The response of UsersApi->get_flags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_flags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Feature flags for the currently authenticated user |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_me**
> UserResponse get_me(zap_trace_span=zap_trace_span)

Retrieve the currently authenticated user

### Example


```python
import openapi_client
from openapi_client.models.user_response import UserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve the currently authenticated user
        api_response = api_instance.get_me(zap_trace_span=zap_trace_span)
        print("The response of UsersApi->get_me:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_me: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The currently authenticated user. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users**
> Users get_users(zap_trace_span=zap_trace_span, offset=offset, limit=limit, after=after, name=name, id=id)

List all users

### Example


```python
import openapi_client
from openapi_client.models.users import Users
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    offset = 56 # int |  (optional)
    limit = 20 # int |  (optional) (default to 20)
    after = 'after_example' # str | The last resource ID from which to seek from (but not including). This is to be used instead of `offset`.  (optional)
    name = 'name_example' # str |  (optional)
    id = 'id_example' # str |  (optional)

    try:
        # List all users
        api_response = api_instance.get_users(zap_trace_span=zap_trace_span, offset=offset, limit=limit, after=after, name=name, id=id)
        print("The response of UsersApi->get_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]
 **after** | **str**| The last resource ID from which to seek from (but not including). This is to be used instead of &#x60;offset&#x60;.  | [optional] 
 **name** | **str**|  | [optional] 
 **id** | **str**|  | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of users |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users_id**
> UserResponse get_users_id(user_id, zap_trace_span=zap_trace_span)

Retrieve a user

### Example


```python
import openapi_client
from openapi_client.models.user_response import UserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | The user ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a user
        api_response = api_instance.get_users_id(user_id, zap_trace_span=zap_trace_span)
        print("The response of UsersApi->get_users_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_users_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The user ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User details |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_users_id**
> UserResponse patch_users_id(user_id, user, zap_trace_span=zap_trace_span)

Update a user

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.user_response import UserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user to update.
    user = openapi_client.User() # User | User update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a user
        api_response = api_instance.patch_users_id(user_id, user, zap_trace_span=zap_trace_span)
        print("The response of UsersApi->patch_users_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->patch_users_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user to update. | 
 **user** | [**User**](User.md)| User update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User updated |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_users**
> UserResponse post_users(user, zap_trace_span=zap_trace_span)

Create a user

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.user_response import UserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user = openapi_client.User() # User | User to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a user
        api_response = api_instance.post_users(user, zap_trace_span=zap_trace_span)
        print("The response of UsersApi->post_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->post_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| User to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User created |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_users_id_password**
> post_users_id_password(user_id, password_reset_body, zap_trace_span=zap_trace_span)

Update a password

### Example

* Basic Authentication (BasicAuth):

```python
import openapi_client
from openapi_client.models.password_reset_body import PasswordResetBody
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

# Configure HTTP basic authorization: BasicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | The user ID.
    password_reset_body = openapi_client.PasswordResetBody() # PasswordResetBody | New password
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a password
        api_instance.post_users_id_password(user_id, password_reset_body, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling UsersApi->post_users_id_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The user ID. | 
 **password_reset_body** | [**PasswordResetBody**](PasswordResetBody.md)| New password | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Password successfully updated |  -  |
**0** | Unsuccessful authentication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_me_password**
> put_me_password(password_reset_body, zap_trace_span=zap_trace_span)

Update a password

### Example

* Basic Authentication (BasicAuth):

```python
import openapi_client
from openapi_client.models.password_reset_body import PasswordResetBody
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

# Configure HTTP basic authorization: BasicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    password_reset_body = openapi_client.PasswordResetBody() # PasswordResetBody | New password
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a password
        api_instance.put_me_password(password_reset_body, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling UsersApi->put_me_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password_reset_body** | [**PasswordResetBody**](PasswordResetBody.md)| New password | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Password successfully updated |  -  |
**0** | Unsuccessful authentication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

