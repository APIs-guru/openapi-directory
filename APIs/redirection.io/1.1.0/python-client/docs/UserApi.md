# openapi_client.UserApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirm_new_email_user_item**](UserApi.md#confirm_new_email_user_item) | **GET** /users/{id}/confirm-new-email/{newEmailToken} | Retrieves a User resource.
[**delete_user_item**](UserApi.md#delete_user_item) | **DELETE** /users/{id} | Removes the User resource.
[**edit_email_user_item**](UserApi.md#edit_email_user_item) | **PUT** /users/{id}/edit-email | Replaces the User resource.
[**edit_info_user_item**](UserApi.md#edit_info_user_item) | **PUT** /users/{id}/edit-info | Replaces the User resource.
[**edit_password_user_item**](UserApi.md#edit_password_user_item) | **PUT** /users/{id}/edit-password | Replaces the User resource.
[**forgot_password_user_item**](UserApi.md#forgot_password_user_item) | **PUT** /users/forgot-password/{resetToken} | Replaces the User resource.
[**get_user_collection**](UserApi.md#get_user_collection) | **GET** /users | Retrieves the collection of User resources.
[**get_user_item**](UserApi.md#get_user_item) | **GET** /users/{id} | Retrieves a User resource.
[**post_user_collection**](UserApi.md#post_user_collection) | **POST** /users | Creates a User resource.


# **confirm_new_email_user_item**
> UserRead confirm_new_email_user_item(id, new_email_token)

Retrieves a User resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_read import UserRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 'id_example' # str | 
    new_email_token = 'new_email_token_example' # str | 

    try:
        # Retrieves a User resource.
        api_response = api_instance.confirm_new_email_user_item(id, new_email_token)
        print("The response of UserApi->confirm_new_email_user_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->confirm_new_email_user_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **new_email_token** | **str**|  | 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_item**
> delete_user_item(id)

Removes the User resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 'id_example' # str | 

    try:
        # Removes the User resource.
        api_instance.delete_user_item(id)
    except Exception as e:
        print("Exception when calling UserApi->delete_user_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_email_user_item**
> UserRead edit_email_user_item(id, user=user)

Replaces the User resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_edit_info import UserEditInfo
from openapi_client.models.user_read import UserRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 'id_example' # str | 
    user = openapi_client.UserEditInfo() # UserEditInfo | The updated User resource (optional)

    try:
        # Replaces the User resource.
        api_response = api_instance.edit_email_user_item(id, user=user)
        print("The response of UserApi->edit_email_user_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->edit_email_user_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user** | [**UserEditInfo**](UserEditInfo.md)| The updated User resource | [optional] 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_info_user_item**
> UserRead edit_info_user_item(id, user=user)

Replaces the User resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_edit_info import UserEditInfo
from openapi_client.models.user_read import UserRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 'id_example' # str | 
    user = openapi_client.UserEditInfo() # UserEditInfo | The updated User resource (optional)

    try:
        # Replaces the User resource.
        api_response = api_instance.edit_info_user_item(id, user=user)
        print("The response of UserApi->edit_info_user_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->edit_info_user_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user** | [**UserEditInfo**](UserEditInfo.md)| The updated User resource | [optional] 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_password_user_item**
> UserRead edit_password_user_item(id, user=user)

Replaces the User resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_edit_info import UserEditInfo
from openapi_client.models.user_read import UserRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 'id_example' # str | 
    user = openapi_client.UserEditInfo() # UserEditInfo | The updated User resource (optional)

    try:
        # Replaces the User resource.
        api_response = api_instance.edit_password_user_item(id, user=user)
        print("The response of UserApi->edit_password_user_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->edit_password_user_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user** | [**UserEditInfo**](UserEditInfo.md)| The updated User resource | [optional] 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forgot_password_user_item**
> UserRead forgot_password_user_item(reset_token, user=user)

Replaces the User resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_password import UserPassword
from openapi_client.models.user_read import UserRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    reset_token = 'reset_token_example' # str | 
    user = openapi_client.UserPassword() # UserPassword | The updated User resource (optional)

    try:
        # Replaces the User resource.
        api_response = api_instance.forgot_password_user_item(reset_token, user=user)
        print("The response of UserApi->forgot_password_user_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->forgot_password_user_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset_token** | **str**|  | 
 **user** | [**UserPassword**](UserPassword.md)| The updated User resource | [optional] 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_collection**
> List[UserList] get_user_collection(organization_id, search=search)

Retrieves the collection of User resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_list import UserList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    organization_id = 'organization_id_example' # str | 
    search = 'search_example' # str |  (optional)

    try:
        # Retrieves the collection of User resources.
        api_response = api_instance.get_user_collection(organization_id, search=search)
        print("The response of UserApi->get_user_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **search** | **str**|  | [optional] 

### Return type

[**List[UserList]**](UserList.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_item**
> UserRead get_user_item(id)

Retrieves a User resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_read import UserRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a User resource.
        api_response = api_instance.get_user_item(id)
        print("The response of UserApi->get_user_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_collection**
> UserRead post_user_collection(user=user)

Creates a User resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_creation_write import UserCreationWrite
from openapi_client.models.user_read import UserRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    user = openapi_client.UserCreationWrite() # UserCreationWrite | The new User resource (optional)

    try:
        # Creates a User resource.
        api_response = api_instance.post_user_collection(user=user)
        print("The response of UserApi->post_user_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->post_user_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**UserCreationWrite**](UserCreationWrite.md)| The new User resource | [optional] 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

