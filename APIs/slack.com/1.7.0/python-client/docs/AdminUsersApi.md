# openapi_client.AdminUsersApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_users_assign**](AdminUsersApi.md#admin_users_assign) | **POST** /admin.users.assign | 
[**admin_users_invite**](AdminUsersApi.md#admin_users_invite) | **POST** /admin.users.invite | 
[**admin_users_list**](AdminUsersApi.md#admin_users_list) | **GET** /admin.users.list | 
[**admin_users_remove**](AdminUsersApi.md#admin_users_remove) | **POST** /admin.users.remove | 
[**admin_users_set_admin**](AdminUsersApi.md#admin_users_set_admin) | **POST** /admin.users.setAdmin | 
[**admin_users_set_expiration**](AdminUsersApi.md#admin_users_set_expiration) | **POST** /admin.users.setExpiration | 
[**admin_users_set_owner**](AdminUsersApi.md#admin_users_set_owner) | **POST** /admin.users.setOwner | 
[**admin_users_set_regular**](AdminUsersApi.md#admin_users_set_regular) | **POST** /admin.users.setRegular | 


# **admin_users_assign**
> DefaultSuccessTemplate admin_users_assign(token, team_id, user_id, channel_ids=channel_ids, is_restricted=is_restricted, is_ultra_restricted=is_ultra_restricted)



Add an Enterprise user to a workspace.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    team_id = 'team_id_example' # str | The ID (`T1234`) of the workspace.
    user_id = 'user_id_example' # str | The ID of the user to add to the workspace.
    channel_ids = 'channel_ids_example' # str | Comma separated values of channel IDs to add user in the new workspace. (optional)
    is_restricted = True # bool | True if user should be added to the workspace as a guest. (optional)
    is_ultra_restricted = True # bool | True if user should be added to the workspace as a single-channel guest. (optional)

    try:
        api_response = api_instance.admin_users_assign(token, team_id, user_id, channel_ids=channel_ids, is_restricted=is_restricted, is_ultra_restricted=is_ultra_restricted)
        print("The response of AdminUsersApi->admin_users_assign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersApi->admin_users_assign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **team_id** | **str**| The ID (&#x60;T1234&#x60;) of the workspace. | 
 **user_id** | **str**| The ID of the user to add to the workspace. | 
 **channel_ids** | **str**| Comma separated values of channel IDs to add user in the new workspace. | [optional] 
 **is_restricted** | **bool**| True if user should be added to the workspace as a guest. | [optional] 
 **is_ultra_restricted** | **bool**| True if user should be added to the workspace as a single-channel guest. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_users_invite**
> DefaultSuccessTemplate admin_users_invite(token, channel_ids, email, team_id, custom_message=custom_message, guest_expiration_ts=guest_expiration_ts, is_restricted=is_restricted, is_ultra_restricted=is_ultra_restricted, real_name=real_name, resend=resend)



Invite a user to a workspace.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    channel_ids = 'channel_ids_example' # str | A comma-separated list of `channel_id`s for this user to join. At least one channel is required.
    email = 'email_example' # str | The email address of the person to invite.
    team_id = 'team_id_example' # str | The ID (`T1234`) of the workspace.
    custom_message = 'custom_message_example' # str | An optional message to send to the user in the invite email. (optional)
    guest_expiration_ts = 'guest_expiration_ts_example' # str | Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date. (optional)
    is_restricted = True # bool | Is this user a multi-channel guest user? (default: false) (optional)
    is_ultra_restricted = True # bool | Is this user a single channel guest user? (default: false) (optional)
    real_name = 'real_name_example' # str | Full name of the user. (optional)
    resend = True # bool | Allow this invite to be resent in the future if a user has not signed up yet. (default: false) (optional)

    try:
        api_response = api_instance.admin_users_invite(token, channel_ids, email, team_id, custom_message=custom_message, guest_expiration_ts=guest_expiration_ts, is_restricted=is_restricted, is_ultra_restricted=is_ultra_restricted, real_name=real_name, resend=resend)
        print("The response of AdminUsersApi->admin_users_invite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersApi->admin_users_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **channel_ids** | **str**| A comma-separated list of &#x60;channel_id&#x60;s for this user to join. At least one channel is required. | 
 **email** | **str**| The email address of the person to invite. | 
 **team_id** | **str**| The ID (&#x60;T1234&#x60;) of the workspace. | 
 **custom_message** | **str**| An optional message to send to the user in the invite email. | [optional] 
 **guest_expiration_ts** | **str**| Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date. | [optional] 
 **is_restricted** | **bool**| Is this user a multi-channel guest user? (default: false) | [optional] 
 **is_ultra_restricted** | **bool**| Is this user a single channel guest user? (default: false) | [optional] 
 **real_name** | **str**| Full name of the user. | [optional] 
 **resend** | **bool**| Allow this invite to be resent in the future if a user has not signed up yet. (default: false) | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_users_list**
> DefaultSuccessTemplate admin_users_list(token, team_id, cursor=cursor, limit=limit)



List users on a workspace

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:read`
    team_id = 'team_id_example' # str | The ID (`T1234`) of the workspace.
    cursor = 'cursor_example' # str | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. (optional)
    limit = 56 # int | Limit for how many users to be retrieved per page (optional)

    try:
        api_response = api_instance.admin_users_list(token, team_id, cursor=cursor, limit=limit)
        print("The response of AdminUsersApi->admin_users_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersApi->admin_users_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:read&#x60; | 
 **team_id** | **str**| The ID (&#x60;T1234&#x60;) of the workspace. | 
 **cursor** | **str**| Set &#x60;cursor&#x60; to &#x60;next_cursor&#x60; returned by the previous call to list items in the next page. | [optional] 
 **limit** | **int**| Limit for how many users to be retrieved per page | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_users_remove**
> DefaultSuccessTemplate admin_users_remove(token, team_id, user_id)



Remove a user from a workspace.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    team_id = 'team_id_example' # str | The ID (`T1234`) of the workspace.
    user_id = 'user_id_example' # str | The ID of the user to remove.

    try:
        api_response = api_instance.admin_users_remove(token, team_id, user_id)
        print("The response of AdminUsersApi->admin_users_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersApi->admin_users_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **team_id** | **str**| The ID (&#x60;T1234&#x60;) of the workspace. | 
 **user_id** | **str**| The ID of the user to remove. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_users_set_admin**
> DefaultSuccessTemplate admin_users_set_admin(token, team_id, user_id)



Set an existing guest, regular user, or owner to be an admin user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    team_id = 'team_id_example' # str | The ID (`T1234`) of the workspace.
    user_id = 'user_id_example' # str | The ID of the user to designate as an admin.

    try:
        api_response = api_instance.admin_users_set_admin(token, team_id, user_id)
        print("The response of AdminUsersApi->admin_users_set_admin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersApi->admin_users_set_admin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **team_id** | **str**| The ID (&#x60;T1234&#x60;) of the workspace. | 
 **user_id** | **str**| The ID of the user to designate as an admin. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_users_set_expiration**
> DefaultSuccessTemplate admin_users_set_expiration(token, expiration_ts, team_id, user_id)



Set an expiration for a guest user

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    expiration_ts = 56 # int | Timestamp when guest account should be disabled.
    team_id = 'team_id_example' # str | The ID (`T1234`) of the workspace.
    user_id = 'user_id_example' # str | The ID of the user to set an expiration for.

    try:
        api_response = api_instance.admin_users_set_expiration(token, expiration_ts, team_id, user_id)
        print("The response of AdminUsersApi->admin_users_set_expiration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersApi->admin_users_set_expiration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **expiration_ts** | **int**| Timestamp when guest account should be disabled. | 
 **team_id** | **str**| The ID (&#x60;T1234&#x60;) of the workspace. | 
 **user_id** | **str**| The ID of the user to set an expiration for. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_users_set_owner**
> DefaultSuccessTemplate admin_users_set_owner(token, team_id, user_id)



Set an existing guest, regular user, or admin user to be a workspace owner.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    team_id = 'team_id_example' # str | The ID (`T1234`) of the workspace.
    user_id = 'user_id_example' # str | Id of the user to promote to owner.

    try:
        api_response = api_instance.admin_users_set_owner(token, team_id, user_id)
        print("The response of AdminUsersApi->admin_users_set_owner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersApi->admin_users_set_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **team_id** | **str**| The ID (&#x60;T1234&#x60;) of the workspace. | 
 **user_id** | **str**| Id of the user to promote to owner. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_users_set_regular**
> DefaultSuccessTemplate admin_users_set_regular(token, team_id, user_id)



Set an existing guest user, admin user, or owner to be a regular user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    team_id = 'team_id_example' # str | The ID (`T1234`) of the workspace.
    user_id = 'user_id_example' # str | The ID of the user to designate as a regular user.

    try:
        api_response = api_instance.admin_users_set_regular(token, team_id, user_id)
        print("The response of AdminUsersApi->admin_users_set_regular:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersApi->admin_users_set_regular: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **team_id** | **str**| The ID (&#x60;T1234&#x60;) of the workspace. | 
 **user_id** | **str**| The ID of the user to designate as a regular user. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

