# openapi_client.AdminConversationsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_conversations_archive**](AdminConversationsApi.md#admin_conversations_archive) | **POST** /admin.conversations.archive | 
[**admin_conversations_convert_to_private**](AdminConversationsApi.md#admin_conversations_convert_to_private) | **POST** /admin.conversations.convertToPrivate | 
[**admin_conversations_create**](AdminConversationsApi.md#admin_conversations_create) | **POST** /admin.conversations.create | 
[**admin_conversations_delete**](AdminConversationsApi.md#admin_conversations_delete) | **POST** /admin.conversations.delete | 
[**admin_conversations_disconnect_shared**](AdminConversationsApi.md#admin_conversations_disconnect_shared) | **POST** /admin.conversations.disconnectShared | 
[**admin_conversations_get_conversation_prefs**](AdminConversationsApi.md#admin_conversations_get_conversation_prefs) | **GET** /admin.conversations.getConversationPrefs | 
[**admin_conversations_get_teams**](AdminConversationsApi.md#admin_conversations_get_teams) | **GET** /admin.conversations.getTeams | 
[**admin_conversations_invite**](AdminConversationsApi.md#admin_conversations_invite) | **POST** /admin.conversations.invite | 
[**admin_conversations_rename**](AdminConversationsApi.md#admin_conversations_rename) | **POST** /admin.conversations.rename | 
[**admin_conversations_search**](AdminConversationsApi.md#admin_conversations_search) | **GET** /admin.conversations.search | 
[**admin_conversations_set_conversation_prefs**](AdminConversationsApi.md#admin_conversations_set_conversation_prefs) | **POST** /admin.conversations.setConversationPrefs | 
[**admin_conversations_set_teams**](AdminConversationsApi.md#admin_conversations_set_teams) | **POST** /admin.conversations.setTeams | 
[**admin_conversations_unarchive**](AdminConversationsApi.md#admin_conversations_unarchive) | **POST** /admin.conversations.unarchive | 


# **admin_conversations_archive**
> AdminConversationsArchiveSchema admin_conversations_archive(token, channel_id)



Archive a public or private channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_archive_schema import AdminConversationsArchiveSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The channel to archive.

    try:
        api_response = api_instance.admin_conversations_archive(token, channel_id)
        print("The response of AdminConversationsApi->admin_conversations_archive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_archive: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The channel to archive. | 

### Return type

[**AdminConversationsArchiveSchema**](AdminConversationsArchiveSchema.md)

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

# **admin_conversations_convert_to_private**
> AdminConversationsConvertToPrivateSchema admin_conversations_convert_to_private(token, channel_id)



Convert a public channel to a private channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_convert_to_private_schema import AdminConversationsConvertToPrivateSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The channel to convert to private.

    try:
        api_response = api_instance.admin_conversations_convert_to_private(token, channel_id)
        print("The response of AdminConversationsApi->admin_conversations_convert_to_private:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_convert_to_private: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The channel to convert to private. | 

### Return type

[**AdminConversationsConvertToPrivateSchema**](AdminConversationsConvertToPrivateSchema.md)

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

# **admin_conversations_create**
> AdminConversationsCreateSchema admin_conversations_create(token, is_private, name, description=description, org_wide=org_wide, team_id=team_id)



Create a public or private channel-based conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_create_schema import AdminConversationsCreateSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    is_private = True # bool | When `true`, creates a private channel instead of a public channel
    name = 'name_example' # str | Name of the public or private channel to create.
    description = 'description_example' # str | Description of the public or private channel to create. (optional)
    org_wide = True # bool | When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel (optional)
    team_id = 'team_id_example' # str | The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`. (optional)

    try:
        api_response = api_instance.admin_conversations_create(token, is_private, name, description=description, org_wide=org_wide, team_id=team_id)
        print("The response of AdminConversationsApi->admin_conversations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **is_private** | **bool**| When &#x60;true&#x60;, creates a private channel instead of a public channel | 
 **name** | **str**| Name of the public or private channel to create. | 
 **description** | **str**| Description of the public or private channel to create. | [optional] 
 **org_wide** | **bool**| When &#x60;true&#x60;, the channel will be available org-wide. Note: if the channel is not &#x60;org_wide&#x3D;true&#x60;, you must specify a &#x60;team_id&#x60; for this channel | [optional] 
 **team_id** | **str**| The workspace to create the channel in. Note: this argument is required unless you set &#x60;org_wide&#x3D;true&#x60;. | [optional] 

### Return type

[**AdminConversationsCreateSchema**](AdminConversationsCreateSchema.md)

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

# **admin_conversations_delete**
> AdminConversationsDeleteSchema admin_conversations_delete(token, channel_id)



Delete a public or private channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_delete_schema import AdminConversationsDeleteSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The channel to delete.

    try:
        api_response = api_instance.admin_conversations_delete(token, channel_id)
        print("The response of AdminConversationsApi->admin_conversations_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The channel to delete. | 

### Return type

[**AdminConversationsDeleteSchema**](AdminConversationsDeleteSchema.md)

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

# **admin_conversations_disconnect_shared**
> AdminConversationsRenameSchema admin_conversations_disconnect_shared(token, channel_id, leaving_team_ids=leaving_team_ids)



Disconnect a connected channel from one or more workspaces.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_rename_schema import AdminConversationsRenameSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The channel to be disconnected from some workspaces.
    leaving_team_ids = 'leaving_team_ids_example' # str | The team to be removed from the channel. Currently only a single team id can be specified. (optional)

    try:
        api_response = api_instance.admin_conversations_disconnect_shared(token, channel_id, leaving_team_ids=leaving_team_ids)
        print("The response of AdminConversationsApi->admin_conversations_disconnect_shared:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_disconnect_shared: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The channel to be disconnected from some workspaces. | 
 **leaving_team_ids** | **str**| The team to be removed from the channel. Currently only a single team id can be specified. | [optional] 

### Return type

[**AdminConversationsRenameSchema**](AdminConversationsRenameSchema.md)

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

# **admin_conversations_get_conversation_prefs**
> AdminConversationsGetConversationPrefsSchema admin_conversations_get_conversation_prefs(token, channel_id)



Get conversation preferences for a public or private channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_get_conversation_prefs_schema import AdminConversationsGetConversationPrefsSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:read`
    channel_id = 'channel_id_example' # str | The channel to get preferences for.

    try:
        api_response = api_instance.admin_conversations_get_conversation_prefs(token, channel_id)
        print("The response of AdminConversationsApi->admin_conversations_get_conversation_prefs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_get_conversation_prefs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:read&#x60; | 
 **channel_id** | **str**| The channel to get preferences for. | 

### Return type

[**AdminConversationsGetConversationPrefsSchema**](AdminConversationsGetConversationPrefsSchema.md)

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

# **admin_conversations_get_teams**
> AdminConversationsGetTeamsSchema admin_conversations_get_teams(token, channel_id, cursor=cursor, limit=limit)



Get all the workspaces a given public or private channel is connected to within this Enterprise org.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_get_teams_schema import AdminConversationsGetTeamsSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:read`
    channel_id = 'channel_id_example' # str | The channel to determine connected workspaces within the organization for.
    cursor = 'cursor_example' # str | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page (optional)
    limit = 56 # int | The maximum number of items to return. Must be between 1 - 1000 both inclusive. (optional)

    try:
        api_response = api_instance.admin_conversations_get_teams(token, channel_id, cursor=cursor, limit=limit)
        print("The response of AdminConversationsApi->admin_conversations_get_teams:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_get_teams: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:read&#x60; | 
 **channel_id** | **str**| The channel to determine connected workspaces within the organization for. | 
 **cursor** | **str**| Set &#x60;cursor&#x60; to &#x60;next_cursor&#x60; returned by the previous call to list items in the next page | [optional] 
 **limit** | **int**| The maximum number of items to return. Must be between 1 - 1000 both inclusive. | [optional] 

### Return type

[**AdminConversationsGetTeamsSchema**](AdminConversationsGetTeamsSchema.md)

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

# **admin_conversations_invite**
> AdminConversationsInviteSchema admin_conversations_invite(token, channel_id, user_ids)



Invite a user to a public or private channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_invite_schema import AdminConversationsInviteSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The channel that the users will be invited to.
    user_ids = 'user_ids_example' # str | The users to invite.

    try:
        api_response = api_instance.admin_conversations_invite(token, channel_id, user_ids)
        print("The response of AdminConversationsApi->admin_conversations_invite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The channel that the users will be invited to. | 
 **user_ids** | **str**| The users to invite. | 

### Return type

[**AdminConversationsInviteSchema**](AdminConversationsInviteSchema.md)

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

# **admin_conversations_rename**
> AdminConversationsRenameSchema1 admin_conversations_rename(token, channel_id, name)



Rename a public or private channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_rename_schema1 import AdminConversationsRenameSchema1
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The channel to rename.
    name = 'name_example' # str | 

    try:
        api_response = api_instance.admin_conversations_rename(token, channel_id, name)
        print("The response of AdminConversationsApi->admin_conversations_rename:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The channel to rename. | 
 **name** | **str**|  | 

### Return type

[**AdminConversationsRenameSchema1**](AdminConversationsRenameSchema1.md)

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

# **admin_conversations_search**
> AdminConversationsSearchSchema admin_conversations_search(token, team_ids=team_ids, query=query, limit=limit, cursor=cursor, search_channel_types=search_channel_types, sort=sort, sort_dir=sort_dir)



Search for public or private channels in an Enterprise organization.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_search_schema import AdminConversationsSearchSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:read`
    team_ids = 'team_ids_example' # str | Comma separated string of team IDs, signifying the workspaces to search through. (optional)
    query = 'query_example' # str | Name of the the channel to query by. (optional)
    limit = 56 # int | Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10. (optional)
    cursor = 'cursor_example' # str | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. (optional)
    search_channel_types = 'search_channel_types_example' # str | The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](#types). (optional)
    sort = 'sort_example' # str | Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted  (optional)
    sort_dir = 'sort_dir_example' # str | Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a) (optional)

    try:
        api_response = api_instance.admin_conversations_search(token, team_ids=team_ids, query=query, limit=limit, cursor=cursor, search_channel_types=search_channel_types, sort=sort, sort_dir=sort_dir)
        print("The response of AdminConversationsApi->admin_conversations_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:read&#x60; | 
 **team_ids** | **str**| Comma separated string of team IDs, signifying the workspaces to search through. | [optional] 
 **query** | **str**| Name of the the channel to query by. | [optional] 
 **limit** | **int**| Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10. | [optional] 
 **cursor** | **str**| Set &#x60;cursor&#x60; to &#x60;next_cursor&#x60; returned by the previous call to list items in the next page. | [optional] 
 **search_channel_types** | **str**| The type of channel to include or exclude in the search. For example &#x60;private&#x60; will search private channels, while &#x60;private_exclude&#x60; will exclude them. For a full list of types, check the [Types section](#types). | [optional] 
 **sort** | **str**| Possible values are &#x60;relevant&#x60; (search ranking based on what we think is closest), &#x60;name&#x60; (alphabetical), &#x60;member_count&#x60; (number of users in the channel), and &#x60;created&#x60; (date channel was created). You can optionally pair this with the &#x60;sort_dir&#x60; arg to change how it is sorted  | [optional] 
 **sort_dir** | **str**| Sort direction. Possible values are &#x60;asc&#x60; for ascending order like (1, 2, 3) or (a, b, c), and &#x60;desc&#x60; for descending order like (3, 2, 1) or (c, b, a) | [optional] 

### Return type

[**AdminConversationsSearchSchema**](AdminConversationsSearchSchema.md)

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

# **admin_conversations_set_conversation_prefs**
> AdminConversationsSetConversationPrefsSchema admin_conversations_set_conversation_prefs(token, channel_id, prefs)



Set the posting permissions for a public or private channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_set_conversation_prefs_schema import AdminConversationsSetConversationPrefsSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The channel to set the prefs for
    prefs = 'prefs_example' # str | The prefs for this channel in a stringified JSON format.

    try:
        api_response = api_instance.admin_conversations_set_conversation_prefs(token, channel_id, prefs)
        print("The response of AdminConversationsApi->admin_conversations_set_conversation_prefs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_set_conversation_prefs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The channel to set the prefs for | 
 **prefs** | **str**| The prefs for this channel in a stringified JSON format. | 

### Return type

[**AdminConversationsSetConversationPrefsSchema**](AdminConversationsSetConversationPrefsSchema.md)

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

# **admin_conversations_set_teams**
> DefaultSuccessTemplate admin_conversations_set_teams(token, channel_id, org_channel=org_channel, target_team_ids=target_team_ids, team_id=team_id)



Set the workspaces in an Enterprise grid org that connect to a public or private channel.

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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The encoded `channel_id` to add or remove to workspaces.
    org_channel = True # bool | True if channel has to be converted to an org channel (optional)
    target_team_ids = 'target_team_ids_example' # str | A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide. (optional)
    team_id = 'team_id_example' # str | The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel. (optional)

    try:
        api_response = api_instance.admin_conversations_set_teams(token, channel_id, org_channel=org_channel, target_team_ids=target_team_ids, team_id=team_id)
        print("The response of AdminConversationsApi->admin_conversations_set_teams:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_set_teams: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The encoded &#x60;channel_id&#x60; to add or remove to workspaces. | 
 **org_channel** | **bool**| True if channel has to be converted to an org channel | [optional] 
 **target_team_ids** | **str**| A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide. | [optional] 
 **team_id** | **str**| The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel. | [optional] 

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

# **admin_conversations_unarchive**
> AdminConversationsUnarchiveSchema admin_conversations_unarchive(token, channel_id)



Unarchive a public or private channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.admin_conversations_unarchive_schema import AdminConversationsUnarchiveSchema
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
    api_instance = openapi_client.AdminConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    channel_id = 'channel_id_example' # str | The channel to unarchive.

    try:
        api_response = api_instance.admin_conversations_unarchive(token, channel_id)
        print("The response of AdminConversationsApi->admin_conversations_unarchive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsApi->admin_conversations_unarchive: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **channel_id** | **str**| The channel to unarchive. | 

### Return type

[**AdminConversationsUnarchiveSchema**](AdminConversationsUnarchiveSchema.md)

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

