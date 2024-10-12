# openapi_client.UsersApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_users_id_get**](UsersApi.md#api_v2_users_id_get) | **GET** /api/v2/Users/{id} | Get a specific user
[**users_delete**](UsersApi.md#users_delete) | **DELETE** /api/v2/Users/{id} | Delete a user
[**users_get**](UsersApi.md#users_get) | **GET** /api/v2/Users | Get users
[**users_get_current_user**](UsersApi.md#users_get_current_user) | **GET** /api/v2/Users/Current | Gets the current user
[**users_post**](UsersApi.md#users_post) | **POST** /api/v2/Users | Create a user
[**users_put**](UsersApi.md#users_put) | **PUT** /api/v2/Users/{id} | Update a user
[**users_put_current_user**](UsersApi.md#users_put_current_user) | **PUT** /api/v2/Users/Current | Update a user


# **api_v2_users_id_get**
> APIModelsUser api_v2_users_id_get(id)

Get a specific user

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_user import APIModelsUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | The user ID

    try:
        # Get a specific user
        api_response = api_instance.api_v2_users_id_get(id)
        print("The response of UsersApi->api_v2_users_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->api_v2_users_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The user ID | 

### Return type

[**APIModelsUser**](APIModelsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_delete**
> users_delete(id)

Delete a user

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | The user id

    try:
        # Delete a user
        api_instance.users_delete(id)
    except Exception as e:
        print("Exception when calling UsersApi->users_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The user id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get**
> APIPagedResponseAPIModelsUser users_get(username=username, email=email, name=name, has_role=has_role, limit=limit, offset=offset)

Get users

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_api_models_user import APIPagedResponseAPIModelsUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    username = 'username_example' # str | Optional. Search by username. Supports beginning and ending wildcards (*). (optional)
    email = 'email_example' # str | Optional. Search by email. Supports beginning and ending wildcards (*). (optional)
    name = 'name_example' # str | Optional. Search by name. Supports beginning and ending wildcards (*). (optional)
    has_role = 'has_role_example' # str | Optional. Return only users having the provided role name. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get users
        api_response = api_instance.users_get(username=username, email=email, name=name, has_role=has_role, limit=limit, offset=offset)
        print("The response of UsersApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Optional. Search by username. Supports beginning and ending wildcards (*). | [optional] 
 **email** | **str**| Optional. Search by email. Supports beginning and ending wildcards (*). | [optional] 
 **name** | **str**| Optional. Search by name. Supports beginning and ending wildcards (*). | [optional] 
 **has_role** | **str**| Optional. Return only users having the provided role name. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseAPIModelsUser**](APIPagedResponseAPIModelsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get_current_user**
> APIModelsUser users_get_current_user()

Gets the current user

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_user import APIModelsUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        # Gets the current user
        api_response = api_instance.users_get_current_user()
        print("The response of UsersApi->users_get_current_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get_current_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**APIModelsUser**](APIModelsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_post**
> APIModelsUser users_post(api_models_user)

Create a user

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_user import APIModelsUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    api_models_user = openapi_client.APIModelsUser() # APIModelsUser | The user to create.

    try:
        # Create a user
        api_response = api_instance.users_post(api_models_user)
        print("The response of UsersApi->users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_models_user** | [**APIModelsUser**](APIModelsUser.md)| The user to create. | 

### Return type

[**APIModelsUser**](APIModelsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_put**
> users_put(id, api_models_user)

Update a user

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_user import APIModelsUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | The user id
    api_models_user = openapi_client.APIModelsUser() # APIModelsUser | The user

    try:
        # Update a user
        api_instance.users_put(id, api_models_user)
    except Exception as e:
        print("Exception when calling UsersApi->users_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The user id | 
 **api_models_user** | [**APIModelsUser**](APIModelsUser.md)| The user | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_put_current_user**
> users_put_current_user(api_models_user)

Update a user

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_user import APIModelsUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    api_models_user = openapi_client.APIModelsUser() # APIModelsUser | The user

    try:
        # Update a user
        api_instance.users_put_current_user(api_models_user)
    except Exception as e:
        print("Exception when calling UsersApi->users_put_current_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_models_user** | [**APIModelsUser**](APIModelsUser.md)| The user | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

