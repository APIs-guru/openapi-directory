# openapi_client.UsersApi

All URIs are relative to *http://learnifier.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extparticipation_get**](UsersApi.md#extparticipation_get) | **GET** /extparticipation | Gets a participation by external id
[**extuser_get**](UsersApi.md#extuser_get) | **GET** /extuser | Gets a user by external id
[**users_get**](UsersApi.md#users_get) | **GET** /users | Lists all users
[**users_post**](UsersApi.md#users_post) | **POST** /users | Adds a user
[**users_userid_get**](UsersApi.md#users_userid_get) | **GET** /users/{userid} | User information
[**users_userid_patch**](UsersApi.md#users_userid_patch) | **PATCH** /users/{userid} | Updates user information
[**users_userid_pickey_apikey_get**](UsersApi.md#users_userid_pickey_apikey_get) | **GET** /users/{userid}/pic?key&#x3D;{APIKEY} | User profile picture
[**users_userid_project_participations_get**](UsersApi.md#users_userid_project_participations_get) | **GET** /users/{userid}/projectParticipations | Returns information about the projects the user is a participant in.


# **extparticipation_get**
> Participation extparticipation_get(extid)

Gets a participation by external id

Gets a participation by external id.

### Example


```python
import openapi_client
from openapi_client.models.participation import Participation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    extid = 'extid_example' # str | The external id of the participation

    try:
        # Gets a participation by external id
        api_response = api_instance.extparticipation_get(extid)
        print("The response of UsersApi->extparticipation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->extparticipation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extid** | **str**| The external id of the participation | 

### Return type

[**Participation**](Participation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching participation |  -  |
**404** | User not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extuser_get**
> User extuser_get(extid)

Gets a user by external id

Gets a user by external id.

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    extid = 'extid_example' # str | The external id of the user

    try:
        # Gets a user by external id
        api_response = api_instance.extuser_get(extid)
        print("The response of UsersApi->extuser_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->extuser_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extid** | **str**| The external id of the user | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User was successfully added |  -  |
**404** | User not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get**
> List[UserWithPermissions] users_get(limit=limit, offset=offset)

Lists all users

Lists all users. Only api callers that have full access can call this method.

### Example


```python
import openapi_client
from openapi_client.models.user_with_permissions import UserWithPermissions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    limit = 5000 # int | The maximum number of users to return (optional) (default to 5000)
    offset = 0 # int | The offset to start listing users from (optional) (default to 0)

    try:
        # Lists all users
        api_response = api_instance.users_get(limit=limit, offset=offset)
        print("The response of UsersApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The maximum number of users to return | [optional] [default to 5000]
 **offset** | **int**| The offset to start listing users from | [optional] [default to 0]

### Return type

[**List[UserWithPermissions]**](UserWithPermissions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List with users |  * X-More - Indicates if there are more users available <br>  * X-Offset - The offset that was used <br>  * X-Limit - The limit that was used <br>  * X-Size - The number of users returned <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_post**
> AddUserResponse users_post(body)

Adds a user

Adds a user. No two users can have the same email address. Email is saved WITH case but compared regardless of case. Email can be changed for a user assuming it doesn't cause a conflict.

### Example


```python
import openapi_client
from openapi_client.models.add_user import AddUser
from openapi_client.models.add_user_response import AddUserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    body = openapi_client.AddUser() # AddUser | 

    try:
        # Adds a user
        api_response = api_instance.users_post(body)
        print("The response of UsersApi->users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AddUser**](AddUser.md)|  | 

### Return type

[**AddUserResponse**](AddUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User was successfully added |  -  |
**409** | A user with the same primary email already existed. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_userid_get**
> User users_userid_get(userid)

User information

Returns information about a user 

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    userid = 'userid_example' # str | A user id

    try:
        # User information
        api_response = api_instance.users_userid_get(userid)
        print("The response of UsersApi->users_userid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_userid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **str**| A user id | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User information |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_userid_patch**
> users_userid_patch(userid, body)

Updates user information

Updates a user. All values that have a key defined in the input will be set. So if a value should not be updated omit it totally from the input, otherwise it will be unset.

### Example


```python
import openapi_client
from openapi_client.models.add_user import AddUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    userid = 'userid_example' # str | The user id
    body = openapi_client.AddUser() # AddUser | 

    try:
        # Updates user information
        api_instance.users_userid_patch(userid, body)
    except Exception as e:
        print("Exception when calling UsersApi->users_userid_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **str**| The user id | 
 **body** | [**AddUser**](AddUser.md)|  | 

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
**201** | User was successfully updated |  -  |
**409** | A user with the same primary email already existed. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_userid_pickey_apikey_get**
> users_userid_pickey_apikey_get(userid, apikey)

User profile picture

Returns a thumbnail picture of the user. This can either be a selected picture or an auto generated image. This method doesn't require a full sign in. The api key is sufficient. The image is square and is likely, but not necessary, to be in 128x128 PNG format. However the format will always be either PNG, JPEG or GIF. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    userid = 'userid_example' # str | The user id
    apikey = 'apikey_example' # str | 

    try:
        # User profile picture
        api_instance.users_userid_pickey_apikey_get(userid, apikey)
    except Exception as e:
        print("Exception when calling UsersApi->users_userid_pickey_apikey_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **str**| The user id | 
 **apikey** | **str**|  | 

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
**200** | An image. Check the Content-Type header to determine which type the returned image have |  -  |
**302** | A redirect to the profile |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_userid_project_participations_get**
> UserParticipationInfo users_userid_project_participations_get(userid)

Returns information about the projects the user is a participant in.

Returns information about the projects the user is a participant in. Only the projects that the current token have access to will be listed. 

### Example


```python
import openapi_client
from openapi_client.models.user_participation_info import UserParticipationInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    userid = 'userid_example' # str | A user id

    try:
        # Returns information about the projects the user is a participant in.
        api_response = api_instance.users_userid_project_participations_get(userid)
        print("The response of UsersApi->users_userid_project_participations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_userid_project_participations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **str**| A user id | 

### Return type

[**UserParticipationInfo**](UserParticipationInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project participation info |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

