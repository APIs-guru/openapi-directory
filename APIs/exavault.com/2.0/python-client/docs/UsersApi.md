# openapi_client.UsersApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_user**](UsersApi.md#add_user) | **POST** /users | Create a user
[**delete_user**](UsersApi.md#delete_user) | **DELETE** /users/{id} | Delete a user
[**get_user_by_id**](UsersApi.md#get_user_by_id) | **GET** /users/{id} | Get info for a user
[**list_users**](UsersApi.md#list_users) | **GET** /users | Get a list of users
[**update_user**](UsersApi.md#update_user) | **PATCH** /users/{id} | Update a user


# **add_user**
> UserResponse add_user(ev_api_key, ev_access_token, add_user_request_body=add_user_request_body)

Create a user

Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).   **Notes:**  - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.

### Example


```python
import openapi_client
from openapi_client.models.add_user_request_body import AddUserRequestBody
from openapi_client.models.user_response import UserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    add_user_request_body = {"email":"testuser@example.com","expiration":"2011-03-21 00:18:56","homeResource":"/","locked":true,"nickname":"testnickname","onboarding":true,"password":"string","permissions":{"changePassword":true,"delete":true,"deleteFormData":true,"download":true,"list":true,"modify":true,"notification":true,"share":true,"upload":true,"viewFormData":true},"role":"user","timeZone":"America/Los_Angeles","username":"testuser","welcomeEmail":true} # AddUserRequestBody |  (optional)

    try:
        # Create a user
        api_response = api_instance.add_user(ev_api_key, ev_access_token, add_user_request_body=add_user_request_body)
        print("The response of UsersApi->add_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->add_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API key required to make the API call | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **add_user_request_body** | [**AddUserRequestBody**](AddUserRequestBody.md)|  | [optional] 

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
**201** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user**
> EmptyResponse delete_user(id, ev_api_key, ev_access_token)

Delete a user

Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user's access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in.   Resources and shares owned by the deleted user will be owned by the master user after the deletion.  **Notes:**   - You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user. - The primary owner of the account cannot be deleted. 

### Example


```python
import openapi_client
from openapi_client.models.empty_response import EmptyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 2224 # int | The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.
    ev_api_key = 'ev_api_key_example' # str | API Key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.

    try:
        # Delete a user
        api_response = api_instance.delete_user(id, ev_api_key, ev_access_token)
        print("The response of UsersApi->delete_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->delete_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The user&#39;s ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method. | 
 **ev_api_key** | **str**| API Key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_by_id**
> UserResponse get_user_by_id(id, ev_api_key, ev_access_token, include=include)

Get info for a user

Get the details for a specific user. You can use the `include` parameter to also get the details of related records, such as the account or the home directory.  **Notes:**  - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.

### Example


```python
import openapi_client
from openapi_client.models.user_response import UserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 2224 # int | The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API Key
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    include = 'homeResource,owneraccount' # str | Comma-separated list of relationships to include in response. Possible values include **homeResource** and **ownerAccount**. (optional)

    try:
        # Get info for a user
        api_response = api_instance.get_user_by_id(id, ev_api_key, ev_access_token, include=include)
        print("The response of UsersApi->get_user_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The user&#39;s ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method. | 
 **ev_api_key** | **str**| API Key | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **include** | **str**| Comma-separated list of relationships to include in response. Possible values include **homeResource** and **ownerAccount**. | [optional] 

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
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_users**
> UserCollectionResponse list_users(ev_api_key, ev_access_token, username=username, home_resource=home_resource, nickname=nickname, email=email, role=role, status=status, search=search, offset=offset, sort=sort, limit=limit, include=include)

Get a list of users

Get a list of the users in your account. There are three main types of searches you can do with this method:  1. Search for a user by username. If you provide the `username` parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored. 1. Search for a user by individual filter fields (`nickname`,`email`,`role`,`status`,`homeDir`). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the \"admin\" `role` AND `email` addresses ending in \"*@acme.com\".  1. Search for a user by search string. If you provide the `search` parameter, users whose nickname OR email OR role OR homeDir match value your provide.  **Notes:**  - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this. - The homeDir is the full path to the user's home directory, not a resource ID or hash.

### Example


```python
import openapi_client
from openapi_client.models.user_collection_response import UserCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    ev_api_key = 'ev_api_key_example' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    username = 'testuser' # str | The username of the user you are looking for. Only entries with the same username as this will be in the list of results. Does not support wildcard searches. (optional)
    home_resource = 'home_resource_example' # str | Resource identifier for user's home directory. Does not support wildcard searches. (optional)
    nickname = 'nickname_example' # str | Nickname to search for. Ignored if `username` is provided. Supports wildcard searches. (optional)
    email = '*@example.co' # str | Email to search for. Ignored if `username` is provided. Supports wildcard searches (optional)
    role = 'use' # str | Types of users to include the list. Ignored if `username` is provided. Valid options are **admin**, **master** and **user** (optional)
    status = 56 # int | Whether a user is locked. Ignored if `username` is provided. **0** means user is locked, **1** means user is not locked.  (optional)
    search = 'search_example' # str | Searches the nickname, email, role and homeDir fields for the provided value. Ignored if `username` is provided. Supports wildcard searches. (optional)
    offset = 50 # int | Starting user record in the result set. Can be used for pagination. (optional)
    sort = 'homeDir,-modified' # str | Sort order or matching users. You can sort by multiple columns by separating sort options with a comma; the sort will be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.  Valid sort fields are: **nickname**, **username**, **email**, **homeDir** and **modified** (optional)
    limit = 100 # int | Number of users to return. Can be used for pagination. (optional)
    include = 'homeResource,ownerAccount' # str | Comma separated list of relationships to include in response. Valid options are **homeResource** and **ownerAccount**. (optional)

    try:
        # Get a list of users
        api_response = api_instance.list_users(ev_api_key, ev_access_token, username=username, home_resource=home_resource, nickname=nickname, email=email, role=role, status=status, search=search, offset=offset, sort=sort, limit=limit, include=include)
        print("The response of UsersApi->list_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **username** | **str**| The username of the user you are looking for. Only entries with the same username as this will be in the list of results. Does not support wildcard searches. | [optional] 
 **home_resource** | **str**| Resource identifier for user&#39;s home directory. Does not support wildcard searches. | [optional] 
 **nickname** | **str**| Nickname to search for. Ignored if &#x60;username&#x60; is provided. Supports wildcard searches. | [optional] 
 **email** | **str**| Email to search for. Ignored if &#x60;username&#x60; is provided. Supports wildcard searches | [optional] 
 **role** | **str**| Types of users to include the list. Ignored if &#x60;username&#x60; is provided. Valid options are **admin**, **master** and **user** | [optional] 
 **status** | **int**| Whether a user is locked. Ignored if &#x60;username&#x60; is provided. **0** means user is locked, **1** means user is not locked.  | [optional] 
 **search** | **str**| Searches the nickname, email, role and homeDir fields for the provided value. Ignored if &#x60;username&#x60; is provided. Supports wildcard searches. | [optional] 
 **offset** | **int**| Starting user record in the result set. Can be used for pagination. | [optional] 
 **sort** | **str**| Sort order or matching users. You can sort by multiple columns by separating sort options with a comma; the sort will be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.  Valid sort fields are: **nickname**, **username**, **email**, **homeDir** and **modified** | [optional] 
 **limit** | **int**| Number of users to return. Can be used for pagination. | [optional] 
 **include** | **str**| Comma separated list of relationships to include in response. Valid options are **homeResource** and **ownerAccount**. | [optional] 

### Return type

[**UserCollectionResponse**](UserCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_user**
> UserResponse update_user(id, ev_api_key, ev_access_token, update_user_request_body=update_user_request_body)

Update a user

Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.  In the request body, you should only send the parameters for values that you wish to change for the user.  **Notes:**  - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings. - You cannot edit a master user with this method.

### Example


```python
import openapi_client
from openapi_client.models.update_user_request_body import UpdateUserRequestBody
from openapi_client.models.user_response import UserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://accountname.exavault.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://accountname.exavault.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 2224 # int | The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.
    ev_api_key = 'exampleaccount-zwSuWUZ8S38h33qPS8v0s' # str | API key required to make the API call.
    ev_access_token = '5dc97cc607985eb8da033220e7447647e7915fbf73808' # str | Access token required to make the API call.
    update_user_request_body = {"email":"testuser@example.com","expiration":"2011-03-21 00:18:56","homeResource":"/","locked":true,"nickname":"testnickname","onboarding":true,"password":"string","permissions":{"changePassword":true,"delete":true,"deleteFormData":true,"download":true,"list":true,"modify":true,"notification":true,"share":true,"upload":true,"viewFormData":true},"role":"user","timeZone":"America/Los_Angeles","username":"testuser"} # UpdateUserRequestBody |  (optional)

    try:
        # Update a user
        api_response = api_instance.update_user(id, ev_api_key, ev_access_token, update_user_request_body=update_user_request_body)
        print("The response of UsersApi->update_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->update_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The user&#39;s ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method. | 
 **ev_api_key** | **str**| API key required to make the API call. | 
 **ev_access_token** | **str**| Access token required to make the API call. | 
 **update_user_request_body** | [**UpdateUserRequestBody**](UpdateUserRequestBody.md)|  | [optional] 

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
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

