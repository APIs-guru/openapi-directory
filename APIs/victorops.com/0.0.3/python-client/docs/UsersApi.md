# openapi_client.UsersApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_user_get**](UsersApi.md#api_public_v1_user_get) | **GET** /api-public/v1/user | List users
[**api_public_v1_user_post**](UsersApi.md#api_public_v1_user_post) | **POST** /api-public/v1/user | Add a user
[**api_public_v1_user_user_delete**](UsersApi.md#api_public_v1_user_user_delete) | **DELETE** /api-public/v1/user/{user} | Remove a user
[**api_public_v1_user_user_get**](UsersApi.md#api_public_v1_user_user_get) | **GET** /api-public/v1/user/{user} | Retrieve information for a user
[**api_public_v1_user_user_put**](UsersApi.md#api_public_v1_user_user_put) | **PUT** /api-public/v1/user/{user} | Update a user
[**api_public_v1_user_user_teams_get**](UsersApi.md#api_public_v1_user_user_teams_get) | **GET** /api-public/v1/user/{user}/teams | Retrieve the user&#39;s team membership


# **api_public_v1_user_get**
> ListUserResponse api_public_v1_user_get(x_vo_api_id, x_vo_api_key)

List users

Get a list of users for your organization  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.list_user_response import ListUserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # List users
        api_response = api_instance.api_public_v1_user_get(x_vo_api_id, x_vo_api_key)
        print("The response of UsersApi->api_public_v1_user_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->api_public_v1_user_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ListUserResponse**](ListUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of users for your organization |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**422** | You have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_post**
> V1User api_public_v1_user_post(x_vo_api_id, x_vo_api_key, body)

Add a user

Add a user to your organization  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_user_payload import AddUserPayload
from openapi_client.models.v1_user import V1User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AddUserPayload() # AddUserPayload | 

    try:
        # Add a user
        api_response = api_instance.api_public_v1_user_post(x_vo_api_id, x_vo_api_key, body)
        print("The response of UsersApi->api_public_v1_user_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->api_public_v1_user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AddUserPayload**](AddUserPayload.md)|  | 

### Return type

[**V1User**](V1User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the user that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**422** | Username or email is unavailable, or you have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_delete**
> api_public_v1_user_user_delete(x_vo_api_id, x_vo_api_key, user, body)

Remove a user

Remove a user from your organization. If no replacement is specified, an empty JSON payload (\"{}\") is still required.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.delete_user_payload import DeleteUserPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user to be deleted
    body = openapi_client.DeleteUserPayload() # DeleteUserPayload | 

    try:
        # Remove a user
        api_instance.api_public_v1_user_user_delete(x_vo_api_id, x_vo_api_key, user, body)
    except Exception as e:
        print("Exception when calling UsersApi->api_public_v1_user_user_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user to be deleted | 
 **body** | [**DeleteUserPayload**](DeleteUserPayload.md)|  | 

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
**200** | User was deleted |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**422** | There was a problem with the delete such as a replacement is required or the replacement user was not found.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_get**
> V1User api_public_v1_user_user_get(x_vo_api_id, x_vo_api_key, user)

Retrieve information for a user

Get the information for the specified user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.v1_user import V1User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user to fetch

    try:
        # Retrieve information for a user
        api_response = api_instance.api_public_v1_user_user_get(x_vo_api_id, x_vo_api_key, user)
        print("The response of UsersApi->api_public_v1_user_user_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->api_public_v1_user_user_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user to fetch | 

### Return type

[**V1User**](V1User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the user that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**422** | Username or email is unavailable, or you have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_put**
> V1User api_public_v1_user_user_put(x_vo_api_id, x_vo_api_key, user, body)

Update a user

Update the designated user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_user_payload import AddUserPayload
from openapi_client.models.v1_user import V1User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user to be updated
    body = openapi_client.AddUserPayload() # AddUserPayload | 

    try:
        # Update a user
        api_response = api_instance.api_public_v1_user_user_put(x_vo_api_id, x_vo_api_key, user, body)
        print("The response of UsersApi->api_public_v1_user_user_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->api_public_v1_user_user_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user to be updated | 
 **body** | [**AddUserPayload**](AddUserPayload.md)|  | 

### Return type

[**V1User**](V1User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the user that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**422** | Username or email is unavailable, or you have reached your user limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_teams_get**
> UserTeamsResponse api_public_v1_user_user_teams_get(x_vo_api_id, x_vo_api_key, user)

Retrieve the user's team membership

This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.user_teams_response import UserTeamsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user

    try:
        # Retrieve the user's team membership
        api_response = api_instance.api_public_v1_user_user_teams_get(x_vo_api_id, x_vo_api_key, user)
        print("The response of UsersApi->api_public_v1_user_user_teams_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->api_public_v1_user_user_teams_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user | 

### Return type

[**UserTeamsResponse**](UserTeamsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team details |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

