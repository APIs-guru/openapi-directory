# openapi_client.UsersApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_conversations**](UsersApi.md#users_conversations) | **GET** /users.conversations | 
[**users_delete_photo**](UsersApi.md#users_delete_photo) | **POST** /users.deletePhoto | 
[**users_get_presence**](UsersApi.md#users_get_presence) | **GET** /users.getPresence | 
[**users_identity**](UsersApi.md#users_identity) | **GET** /users.identity | 
[**users_info**](UsersApi.md#users_info) | **GET** /users.info | 
[**users_list**](UsersApi.md#users_list) | **GET** /users.list | 
[**users_lookup_by_email**](UsersApi.md#users_lookup_by_email) | **GET** /users.lookupByEmail | 
[**users_profile_get_0**](UsersApi.md#users_profile_get_0) | **GET** /users.profile.get | 
[**users_profile_set_0**](UsersApi.md#users_profile_set_0) | **POST** /users.profile.set | 
[**users_set_active**](UsersApi.md#users_set_active) | **POST** /users.setActive | 
[**users_set_photo**](UsersApi.md#users_set_photo) | **POST** /users.setPhoto | 
[**users_set_presence**](UsersApi.md#users_set_presence) | **POST** /users.setPresence | 


# **users_conversations**
> UsersConversationsSuccessSchema users_conversations(token=token, user=user, types=types, exclude_archived=exclude_archived, limit=limit, cursor=cursor)



List conversations the calling user may access.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_conversations_success_schema import UsersConversationsSuccessSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:read` (optional)
    user = 'user_example' # str | Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership. (optional)
    types = 'types_example' # str | Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im` (optional)
    exclude_archived = True # bool | Set to `true` to exclude archived channels from the list (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000. (optional)
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)

    try:
        api_response = api_instance.users_conversations(token=token, user=user, types=types, exclude_archived=exclude_archived, limit=limit, cursor=cursor)
        print("The response of UsersApi->users_conversations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_conversations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:read&#x60; | [optional] 
 **user** | **str**| Browse conversations by a specific user ID&#39;s membership. Non-public channels are restricted to those where the calling user shares membership. | [optional] 
 **types** | **str**| Mix and match channel types by providing a comma-separated list of any combination of &#x60;public_channel&#x60;, &#x60;private_channel&#x60;, &#x60;mpim&#x60;, &#x60;im&#x60; | [optional] 
 **exclude_archived** | **bool**| Set to &#x60;true&#x60; to exclude archived channels from the list | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn&#39;t been reached. Must be an integer no larger than 1000. | [optional] 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 

### Return type

[**UsersConversationsSuccessSchema**](UsersConversationsSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response with only public channels. Note how &#x60;num_members&#x60; and &#x60;is_member&#x60; are not returned like typical &#x60;conversations&#x60; objects. |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_delete_photo**
> UsersDeletePhotoSchema users_delete_photo(token)



Delete the user profile photo

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_delete_photo_schema import UsersDeletePhotoSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users.profile:write`

    try:
        api_response = api_instance.users_delete_photo(token)
        print("The response of UsersApi->users_delete_photo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_delete_photo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users.profile:write&#x60; | 

### Return type

[**UsersDeletePhotoSchema**](UsersDeletePhotoSchema.md)

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

# **users_get_presence**
> APIMethodUsersGetPresence users_get_presence(token, user=user)



Gets user presence information.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.api_method_users_get_presence import APIMethodUsersGetPresence
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users:read`
    user = 'user_example' # str | User to get presence info on. Defaults to the authed user. (optional)

    try:
        api_response = api_instance.users_get_presence(token, user=user)
        print("The response of UsersApi->users_get_presence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get_presence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users:read&#x60; | 
 **user** | **str**| User to get presence info on. Defaults to the authed user. | [optional] 

### Return type

[**APIMethodUsersGetPresence**](APIMethodUsersGetPresence.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | When requesting information for a different user, this method just returns the current presence (either &#x60;active&#x60; or &#x60;away&#x60;). |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_identity**
> List[UsersIdentitySchemaInner] users_identity(token=token)



Get a user's identity.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_identity_schema_inner import UsersIdentitySchemaInner
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `identity.basic` (optional)

    try:
        api_response = api_instance.users_identity(token=token)
        print("The response of UsersApi->users_identity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_identity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;identity.basic&#x60; | [optional] 

### Return type

[**List[UsersIdentitySchemaInner]**](UsersIdentitySchemaInner.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | You will receive at a minimum the following information: |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_info**
> UsersInfoSuccessSchema users_info(token, include_locale=include_locale, user=user)



Gets information about a user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_info_success_schema import UsersInfoSuccessSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users:read`
    include_locale = True # bool | Set this to `true` to receive the locale for this user. Defaults to `false` (optional)
    user = 'user_example' # str | User to get info on (optional)

    try:
        api_response = api_instance.users_info(token, include_locale=include_locale, user=user)
        print("The response of UsersApi->users_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users:read&#x60; | 
 **include_locale** | **bool**| Set this to &#x60;true&#x60; to receive the locale for this user. Defaults to &#x60;false&#x60; | [optional] 
 **user** | **str**| User to get info on | [optional] 

### Return type

[**UsersInfoSuccessSchema**](UsersInfoSuccessSchema.md)

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

# **users_list**
> UsersListSchema users_list(token=token, limit=limit, cursor=cursor, include_locale=include_locale)



Lists all users in a Slack team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_list_schema import UsersListSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users:read` (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors. (optional)
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)
    include_locale = True # bool | Set this to `true` to receive the locale for users. Defaults to `false` (optional)

    try:
        api_response = api_instance.users_list(token=token, limit=limit, cursor=cursor, include_locale=include_locale)
        print("The response of UsersApi->users_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users:read&#x60; | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn&#39;t been reached. Providing no &#x60;limit&#x60; value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience &#x60;limit_required&#x60; or HTTP 500 errors. | [optional] 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 
 **include_locale** | **bool**| Set this to &#x60;true&#x60; to receive the locale for users. Defaults to &#x60;false&#x60; | [optional] 

### Return type

[**UsersListSchema**](UsersListSchema.md)

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

# **users_lookup_by_email**
> UsersLookupByEmailSuccessSchema users_lookup_by_email(token, email)



Find a user with an email address.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_lookup_by_email_success_schema import UsersLookupByEmailSuccessSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users:read.email`
    email = 'email_example' # str | An email address belonging to a user in the workspace

    try:
        api_response = api_instance.users_lookup_by_email(token, email)
        print("The response of UsersApi->users_lookup_by_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_lookup_by_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users:read.email&#x60; | 
 **email** | **str**| An email address belonging to a user in the workspace | 

### Return type

[**UsersLookupByEmailSuccessSchema**](UsersLookupByEmailSuccessSchema.md)

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

# **users_profile_get_0**
> UsersProfileGetSchema users_profile_get_0(token, include_labels=include_labels, user=user)



Retrieves a user's profile information.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_profile_get_schema import UsersProfileGetSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users.profile:read`
    include_labels = True # bool | Include labels for each ID in custom profile fields (optional)
    user = 'user_example' # str | User to retrieve profile info for (optional)

    try:
        api_response = api_instance.users_profile_get_0(token, include_labels=include_labels, user=user)
        print("The response of UsersApi->users_profile_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_profile_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users.profile:read&#x60; | 
 **include_labels** | **bool**| Include labels for each ID in custom profile fields | [optional] 
 **user** | **str**| User to retrieve profile info for | [optional] 

### Return type

[**UsersProfileGetSchema**](UsersProfileGetSchema.md)

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

# **users_profile_set_0**
> UsersProfileSetSchema users_profile_set_0(token, name=name, profile=profile, user=user, value=value)



Set the profile information for a user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_profile_set_schema import UsersProfileSetSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users.profile:write`
    name = 'name_example' # str | Name of a single key to set. Usable only if `profile` is not passed. (optional)
    profile = 'profile_example' # str | Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters. (optional)
    user = 'user_example' # str | ID of user to change. This argument may only be specified by team admins on paid teams. (optional)
    value = 'value_example' # str | Value to set a single key to. Usable only if `profile` is not passed. (optional)

    try:
        api_response = api_instance.users_profile_set_0(token, name=name, profile=profile, user=user, value=value)
        print("The response of UsersApi->users_profile_set_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_profile_set_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users.profile:write&#x60; | 
 **name** | **str**| Name of a single key to set. Usable only if &#x60;profile&#x60; is not passed. | [optional] 
 **profile** | **str**| Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters. | [optional] 
 **user** | **str**| ID of user to change. This argument may only be specified by team admins on paid teams. | [optional] 
 **value** | **str**| Value to set a single key to. Usable only if &#x60;profile&#x60; is not passed. | [optional] 

### Return type

[**UsersProfileSetSchema**](UsersProfileSetSchema.md)

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

# **users_set_active**
> UsersSetActiveSchema users_set_active(token)



Marked a user as active. Deprecated and non-functional.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_set_active_schema import UsersSetActiveSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users:write`

    try:
        api_response = api_instance.users_set_active(token)
        print("The response of UsersApi->users_set_active:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_set_active: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users:write&#x60; | 

### Return type

[**UsersSetActiveSchema**](UsersSetActiveSchema.md)

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

# **users_set_photo**
> UsersSetPhotoSchema users_set_photo(token, crop_w=crop_w, crop_x=crop_x, crop_y=crop_y, image=image)



Set the user profile photo

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_set_photo_schema import UsersSetPhotoSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users.profile:write`
    crop_w = 'crop_w_example' # str | Width/height of crop box (always square) (optional)
    crop_x = 'crop_x_example' # str | X coordinate of top-left corner of crop box (optional)
    crop_y = 'crop_y_example' # str | Y coordinate of top-left corner of crop box (optional)
    image = 'image_example' # str | File contents via `multipart/form-data`. (optional)

    try:
        api_response = api_instance.users_set_photo(token, crop_w=crop_w, crop_x=crop_x, crop_y=crop_y, image=image)
        print("The response of UsersApi->users_set_photo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_set_photo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users.profile:write&#x60; | 
 **crop_w** | **str**| Width/height of crop box (always square) | [optional] 
 **crop_x** | **str**| X coordinate of top-left corner of crop box | [optional] 
 **crop_y** | **str**| Y coordinate of top-left corner of crop box | [optional] 
 **image** | **str**| File contents via &#x60;multipart/form-data&#x60;. | [optional] 

### Return type

[**UsersSetPhotoSchema**](UsersSetPhotoSchema.md)

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

# **users_set_presence**
> UsersSetPresenceSchema users_set_presence(token, presence)



Manually sets user presence.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_set_presence_schema import UsersSetPresenceSchema
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
    api_instance = openapi_client.UsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users:write`
    presence = 'presence_example' # str | Either `auto` or `away`

    try:
        api_response = api_instance.users_set_presence(token, presence)
        print("The response of UsersApi->users_set_presence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_set_presence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users:write&#x60; | 
 **presence** | **str**| Either &#x60;auto&#x60; or &#x60;away&#x60; | 

### Return type

[**UsersSetPresenceSchema**](UsersSetPresenceSchema.md)

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

