# openapi_client.UsersApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_get**](UsersApi.md#users_get) | **GET** /users | Get all Users
[**users_user_id_change_password_put**](UsersApi.md#users_user_id_change_password_put) | **PUT** /users/{userId}/changePassword | Updates the password of a user
[**users_user_id_check_permissions_post**](UsersApi.md#users_user_id_check_permissions_post) | **POST** /users/{userId}/checkPermissions | Checks if a user has the provided permission.
[**users_user_id_duty_status_get**](UsersApi.md#users_user_id_duty_status_get) | **GET** /users/{userId}/dutyStatus | Get duty status by user Id
[**users_user_id_get**](UsersApi.md#users_user_id_get) | **GET** /users/{userId} | Get User by Id
[**users_user_id_image_get**](UsersApi.md#users_user_id_image_get) | **GET** /users/{userId}/image | 
[**users_user_id_image_post**](UsersApi.md#users_user_id_image_post) | **POST** /users/{userId}/image | Uploaded a profile image for a specified user.
[**users_user_id_profile_put**](UsersApi.md#users_user_id_profile_put) | **PUT** /users/{userId}/profile | Updates user profile of an user
[**users_user_id_punch_in_as_manager_post**](UsersApi.md#users_user_id_punch_in_as_manager_post) | **POST** /users/{userId}/punchInAsManager | Punch User in as Manager
[**users_user_id_punch_in_post**](UsersApi.md#users_user_id_punch_in_post) | **POST** /users/{userId}/punchIn | Punch User in
[**users_user_id_punch_out_post**](UsersApi.md#users_user_id_punch_out_post) | **POST** /users/{userId}/punchOut | Punch User out
[**users_user_id_setup_progress_get**](UsersApi.md#users_user_id_setup_progress_get) | **GET** /users/{userId}/setupProgress | Gets setup progress of a specific user.


# **users_get**
> List[UserInfo] users_get()

Get all Users

Returns a list of user objects with details such as their email address and duty information. Only users who  are part of your team will be returned.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_info import UserInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        # Get all Users
        api_response = api_instance.users_get()
        print("The response of UsersApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[UserInfo]**](UserInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User could be successfully identified. |  -  |
**400** | Required authentifaction info could not be found in the request/claims. |  -  |
**403** | You&#39;re not allowed to request the users with their information. |  -  |
**404** | Required entities could not be found in the database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_change_password_put**
> users_user_id_change_password_put(user_id, update_password_info=update_password_info)

Updates the password of a user

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.update_password_info import UpdatePasswordInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | User ID of user whose password should be changed.
    update_password_info = openapi_client.UpdatePasswordInfo() # UpdatePasswordInfo |  (optional)

    try:
        # Updates the password of a user
        api_instance.users_user_id_change_password_put(user_id, update_password_info=update_password_info)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_change_password_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| User ID of user whose password should be changed. | 
 **update_password_info** | [**UpdatePasswordInfo**](UpdatePasswordInfo.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_check_permissions_post**
> UserImage users_user_id_check_permissions_post(user_id, team_id=team_id, string_items_wrapper=string_items_wrapper)

Checks if a user has the provided permission.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.string_items_wrapper import StringItemsWrapper
from openapi_client.models.user_image import UserImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | ID of the user to check permissions for.
    team_id = 'team_id_example' # str |  (optional)
    string_items_wrapper = openapi_client.StringItemsWrapper() # StringItemsWrapper | List of permissions to check (optional)

    try:
        # Checks if a user has the provided permission.
        api_response = api_instance.users_user_id_check_permissions_post(user_id, team_id=team_id, string_items_wrapper=string_items_wrapper)
        print("The response of UsersApi->users_user_id_check_permissions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_check_permissions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| ID of the user to check permissions for. | 
 **team_id** | **str**|  | [optional] 
 **string_items_wrapper** | [**StringItemsWrapper**](StringItemsWrapper.md)| List of permissions to check | [optional] 

### Return type

[**UserImage**](UserImage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_duty_status_get**
> UserDutyInfo users_user_id_duty_status_get(user_id)

Get duty status by user Id

Returns a object with duty information.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_duty_info import UserDutyInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | Identifier of the user to get. Use 'Me' to get information about the currently logged in user. This is not possible with an api key.  Can also be an email address of a user in the team or the unique id of an according user object.”

    try:
        # Get duty status by user Id
        api_response = api_instance.users_user_id_duty_status_get(user_id)
        print("The response of UsersApi->users_user_id_duty_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_duty_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| Identifier of the user to get. Use &#39;Me&#39; to get information about the currently logged in user. This is not possible with an api key.  Can also be an email address of a user in the team or the unique id of an according user object.” | 

### Return type

[**UserDutyInfo**](UserDutyInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Duty successfully loaded. |  -  |
**400** | Required authentifaction info could not be found in the request/claims. |  -  |
**403** | You&#39;re not allowed to request that duty information. |  -  |
**404** | Required entities could not be found in the database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_get**
> UserInfo users_user_id_get(user_id)

Get User by Id

Returns a user object with details such as his email address and duty information.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_info import UserInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | Identifier of the user to get. Use 'Me' to get information about the currently logged in user. This is not possible with an api key.  Can also be an email address of a user in the team or the unique id of an according user object.”

    try:
        # Get User by Id
        api_response = api_instance.users_user_id_get(user_id)
        print("The response of UsersApi->users_user_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| Identifier of the user to get. Use &#39;Me&#39; to get information about the currently logged in user. This is not possible with an api key.  Can also be an email address of a user in the team or the unique id of an according user object.” | 

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User could be successfully identified. |  -  |
**400** | Required authentifaction info could not be found in the request/claims. |  -  |
**403** | You&#39;re not allowed to request that user&#39;s information. |  -  |
**404** | Required entities could not be found in the database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_image_get**
> UserImage users_user_id_image_get(user_id, height=height, width=width)



### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_image import UserImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | 
    height = 56 # int |  (optional)
    width = 56 # int |  (optional)

    try:
        api_response = api_instance.users_user_id_image_get(user_id, height=height, width=width)
        print("The response of UsersApi->users_user_id_image_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_image_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **height** | **int**|  | [optional] 
 **width** | **int**|  | [optional] 

### Return type

[**UserImage**](UserImage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_image_post**
> users_user_id_image_post(user_id)

Uploaded a profile image for a specified user.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | Id of the user.

    try:
        # Uploaded a profile image for a specified user.
        api_instance.users_user_id_image_post(user_id)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_image_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| Id of the user. | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | The image was successfully uploaded. |  -  |
**400** | Either a passed parameter was either empty/null or the request&#39;s multipart does not contain a  file. |  -  |
**403** | User is not allowed to upoload an image for the specified user. |  -  |
**404** | Either the user was not found or they aren&#39;t activated yet. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_profile_put**
> UserInfo users_user_id_profile_put(user_id, user_profile=user_profile)

Updates user profile of an user

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_info import UserInfo
from openapi_client.models.user_profile import UserProfile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | ID of user to update.
    user_profile = openapi_client.UserProfile() # UserProfile |  (optional)

    try:
        # Updates user profile of an user
        api_response = api_instance.users_user_id_profile_put(user_id, user_profile=user_profile)
        print("The response of UsersApi->users_user_id_profile_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_profile_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| ID of user to update. | 
 **user_profile** | [**UserProfile**](UserProfile.md)|  | [optional] 

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_punch_in_as_manager_post**
> UserDutyInfo users_user_id_punch_in_as_manager_post(user_id)

Punch User in as Manager

The specified user will be punched in to duty as a manager.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_duty_info import UserDutyInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | Identifier of the user to punch in. Use 'Me' to get information about the currently logged in  user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”

    try:
        # Punch User in as Manager
        api_response = api_instance.users_user_id_punch_in_as_manager_post(user_id)
        print("The response of UsersApi->users_user_id_punch_in_as_manager_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_punch_in_as_manager_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| Identifier of the user to punch in. Use &#39;Me&#39; to get information about the currently logged in  user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.” | 

### Return type

[**UserDutyInfo**](UserDutyInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**403** | The user tried to change the punch in a different user. |  -  |
**404** | Required entities could not be found in the database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_punch_in_post**
> UserDutyInfo users_user_id_punch_in_post(user_id)

Punch User in

The specified user will be punched in to duty.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_duty_info import UserDutyInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | Identifier of the user to punch in. Use 'Me' to get information about the currently logged in  user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”

    try:
        # Punch User in
        api_response = api_instance.users_user_id_punch_in_post(user_id)
        print("The response of UsersApi->users_user_id_punch_in_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_punch_in_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| Identifier of the user to punch in. Use &#39;Me&#39; to get information about the currently logged in  user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.” | 

### Return type

[**UserDutyInfo**](UserDutyInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**403** | The user tried to change the punch in a different user. |  -  |
**404** | Required entities could not be found in the database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_punch_out_post**
> UserDutyInfo users_user_id_punch_out_post(user_id)

Punch User out

The specified user will be punched out from duty.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_duty_info import UserDutyInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | Identifier of the user to punch out. Use 'Me' to get information about the currently logged in  user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”

    try:
        # Punch User out
        api_response = api_instance.users_user_id_punch_out_post(user_id)
        print("The response of UsersApi->users_user_id_punch_out_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_punch_out_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| Identifier of the user to punch out. Use &#39;Me&#39; to get information about the currently logged in  user. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.” | 

### Return type

[**UserDutyInfo**](UserDutyInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The user was punched out successfully. |  -  |
**400** | Required authentifaction information could not be found in the request/claims. |  -  |
**403** | The requesting user tried to punch out someone else, which is not allowed. |  -  |
**404** | The desired user was not found by passed id. |  -  |
**409** | The desired user was not punched out because it would violate  the minumum on-duty members setting  from the team. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_setup_progress_get**
> UserSetupProgress users_user_id_setup_progress_get(user_id)

Gets setup progress of a specific user.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_setup_progress import UserSetupProgress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | ID of the user the progress should be retrieved for.

    try:
        # Gets setup progress of a specific user.
        api_response = api_instance.users_user_id_setup_progress_get(user_id)
        print("The response of UsersApi->users_user_id_setup_progress_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_user_id_setup_progress_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| ID of the user the progress should be retrieved for. | 

### Return type

[**UserSetupProgress**](UserSetupProgress.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

