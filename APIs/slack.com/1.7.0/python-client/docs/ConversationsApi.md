# openapi_client.ConversationsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversations_archive**](ConversationsApi.md#conversations_archive) | **POST** /conversations.archive | 
[**conversations_close**](ConversationsApi.md#conversations_close) | **POST** /conversations.close | 
[**conversations_create**](ConversationsApi.md#conversations_create) | **POST** /conversations.create | 
[**conversations_history**](ConversationsApi.md#conversations_history) | **GET** /conversations.history | 
[**conversations_info**](ConversationsApi.md#conversations_info) | **GET** /conversations.info | 
[**conversations_invite**](ConversationsApi.md#conversations_invite) | **POST** /conversations.invite | 
[**conversations_join**](ConversationsApi.md#conversations_join) | **POST** /conversations.join | 
[**conversations_kick**](ConversationsApi.md#conversations_kick) | **POST** /conversations.kick | 
[**conversations_leave**](ConversationsApi.md#conversations_leave) | **POST** /conversations.leave | 
[**conversations_list**](ConversationsApi.md#conversations_list) | **GET** /conversations.list | 
[**conversations_mark**](ConversationsApi.md#conversations_mark) | **POST** /conversations.mark | 
[**conversations_members**](ConversationsApi.md#conversations_members) | **GET** /conversations.members | 
[**conversations_open**](ConversationsApi.md#conversations_open) | **POST** /conversations.open | 
[**conversations_rename**](ConversationsApi.md#conversations_rename) | **POST** /conversations.rename | 
[**conversations_replies**](ConversationsApi.md#conversations_replies) | **GET** /conversations.replies | 
[**conversations_set_purpose**](ConversationsApi.md#conversations_set_purpose) | **POST** /conversations.setPurpose | 
[**conversations_set_topic**](ConversationsApi.md#conversations_set_topic) | **POST** /conversations.setTopic | 
[**conversations_unarchive**](ConversationsApi.md#conversations_unarchive) | **POST** /conversations.unarchive | 


# **conversations_archive**
> ConversationsArchiveSuccessSchema conversations_archive(token=token, channel=channel)



Archives a conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_archive_success_schema import ConversationsArchiveSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | ID of conversation to archive (optional)

    try:
        api_response = api_instance.conversations_archive(token=token, channel=channel)
        print("The response of ConversationsApi->conversations_archive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_archive: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| ID of conversation to archive | [optional] 

### Return type

[**ConversationsArchiveSuccessSchema**](ConversationsArchiveSuccessSchema.md)

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

# **conversations_close**
> ConversationsCloseSuccessSchema conversations_close(token=token, channel=channel)



Closes a direct message or multi-person direct message.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_close_success_schema import ConversationsCloseSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | Conversation to close. (optional)

    try:
        api_response = api_instance.conversations_close(token=token, channel=channel)
        print("The response of ConversationsApi->conversations_close:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_close: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| Conversation to close. | [optional] 

### Return type

[**ConversationsCloseSuccessSchema**](ConversationsCloseSuccessSchema.md)

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

# **conversations_create**
> ConversationsCreateSuccessSchema conversations_create(token=token, is_private=is_private, name=name)



Initiates a public or private channel-based conversation

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_create_success_schema import ConversationsCreateSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    is_private = True # bool | Create a private channel instead of a public one (optional)
    name = 'name_example' # str | Name of the public or private channel to create (optional)

    try:
        api_response = api_instance.conversations_create(token=token, is_private=is_private, name=name)
        print("The response of ConversationsApi->conversations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **is_private** | **bool**| Create a private channel instead of a public one | [optional] 
 **name** | **str**| Name of the public or private channel to create | [optional] 

### Return type

[**ConversationsCreateSuccessSchema**](ConversationsCreateSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If successful, the command returns a rather stark [conversation object](/types/conversation) |  -  |
**0** | Typical error response when name already in use |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_history**
> ConversationsHistorySuccessSchema conversations_history(token=token, channel=channel, latest=latest, oldest=oldest, inclusive=inclusive, limit=limit, cursor=cursor)



Fetches a conversation's history of messages and events.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_history_success_schema import ConversationsHistorySuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:history` (optional)
    channel = 'channel_example' # str | Conversation ID to fetch history for. (optional)
    latest = 3.4 # float | End of time range of messages to include in results. (optional)
    oldest = 3.4 # float | Start of time range of messages to include in results. (optional)
    inclusive = True # bool | Include messages with latest or oldest timestamp in results only when either timestamp is specified. (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. (optional)
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)

    try:
        api_response = api_instance.conversations_history(token=token, channel=channel, latest=latest, oldest=oldest, inclusive=inclusive, limit=limit, cursor=cursor)
        print("The response of ConversationsApi->conversations_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:history&#x60; | [optional] 
 **channel** | **str**| Conversation ID to fetch history for. | [optional] 
 **latest** | **float**| End of time range of messages to include in results. | [optional] 
 **oldest** | **float**| Start of time range of messages to include in results. | [optional] 
 **inclusive** | **bool**| Include messages with latest or oldest timestamp in results only when either timestamp is specified. | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn&#39;t been reached. | [optional] 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 

### Return type

[**ConversationsHistorySuccessSchema**](ConversationsHistorySuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response containing a channel&#39;s messages |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_info**
> ConversationsInfoSuccessSchema conversations_info(token=token, channel=channel, include_locale=include_locale, include_num_members=include_num_members)



Retrieve information about a conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_info_success_schema import ConversationsInfoSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:read` (optional)
    channel = 'channel_example' # str | Conversation ID to learn more about (optional)
    include_locale = True # bool | Set this to `true` to receive the locale for this conversation. Defaults to `false` (optional)
    include_num_members = True # bool | Set to `true` to include the member count for the specified conversation. Defaults to `false` (optional)

    try:
        api_response = api_instance.conversations_info(token=token, channel=channel, include_locale=include_locale, include_num_members=include_num_members)
        print("The response of ConversationsApi->conversations_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:read&#x60; | [optional] 
 **channel** | **str**| Conversation ID to learn more about | [optional] 
 **include_locale** | **bool**| Set this to &#x60;true&#x60; to receive the locale for this conversation. Defaults to &#x60;false&#x60; | [optional] 
 **include_num_members** | **bool**| Set to &#x60;true&#x60; to include the member count for the specified conversation. Defaults to &#x60;false&#x60; | [optional] 

### Return type

[**ConversationsInfoSuccessSchema**](ConversationsInfoSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response for a public channel. (Also, a response from a private channel and a multi-party IM is very similar to this example.) |  -  |
**0** | Typical error response when a channel cannot be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_invite**
> ConversationsInviteErrorSchema conversations_invite(token=token, channel=channel, users=users)



Invites users to a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_invite_error_schema import ConversationsInviteErrorSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | The ID of the public or private channel to invite user(s) to. (optional)
    users = 'users_example' # str | A comma separated list of user IDs. Up to 1000 users may be listed. (optional)

    try:
        api_response = api_instance.conversations_invite(token=token, channel=channel, users=users)
        print("The response of ConversationsApi->conversations_invite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| The ID of the public or private channel to invite user(s) to. | [optional] 
 **users** | **str**| A comma separated list of user IDs. Up to 1000 users may be listed. | [optional] 

### Return type

[**ConversationsInviteErrorSchema**](ConversationsInviteErrorSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response when an invitation is extended |  -  |
**0** | Typical error response when an invite is attempted on a conversation type that does not support it |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_join**
> ConversationsJoinSuccessSchema conversations_join(token=token, channel=channel)



Joins an existing conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_join_success_schema import ConversationsJoinSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `channels:write` (optional)
    channel = 'channel_example' # str | ID of conversation to join (optional)

    try:
        api_response = api_instance.conversations_join(token=token, channel=channel)
        print("The response of ConversationsApi->conversations_join:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_join: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;channels:write&#x60; | [optional] 
 **channel** | **str**| ID of conversation to join | [optional] 

### Return type

[**ConversationsJoinSuccessSchema**](ConversationsJoinSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response if the conversation is archived and cannot be joined |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_kick**
> ConversationsKickSuccessSchema conversations_kick(token=token, channel=channel, user=user)



Removes a user from a conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_kick_success_schema import ConversationsKickSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | ID of conversation to remove user from. (optional)
    user = 'user_example' # str | User ID to be removed. (optional)

    try:
        api_response = api_instance.conversations_kick(token=token, channel=channel, user=user)
        print("The response of ConversationsApi->conversations_kick:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_kick: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| ID of conversation to remove user from. | [optional] 
 **user** | **str**| User ID to be removed. | [optional] 

### Return type

[**ConversationsKickSuccessSchema**](ConversationsKickSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response when you attempt to kick yourself from a channel |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_leave**
> ConversationsLeaveSuccessSchema conversations_leave(token=token, channel=channel)



Leaves a conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_leave_success_schema import ConversationsLeaveSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | Conversation to leave (optional)

    try:
        api_response = api_instance.conversations_leave(token=token, channel=channel)
        print("The response of ConversationsApi->conversations_leave:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_leave: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| Conversation to leave | [optional] 

### Return type

[**ConversationsLeaveSuccessSchema**](ConversationsLeaveSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response when attempting to leave a workspace&#39;s \&quot;general\&quot; channel |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_list**
> ConversationsListSuccessSchema conversations_list(token=token, exclude_archived=exclude_archived, types=types, limit=limit, cursor=cursor)



Lists all channels in a Slack team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_list_success_schema import ConversationsListSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:read` (optional)
    exclude_archived = True # bool | Set to `true` to exclude archived channels from the list (optional)
    types = 'types_example' # str | Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im` (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000. (optional)
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)

    try:
        api_response = api_instance.conversations_list(token=token, exclude_archived=exclude_archived, types=types, limit=limit, cursor=cursor)
        print("The response of ConversationsApi->conversations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:read&#x60; | [optional] 
 **exclude_archived** | **bool**| Set to &#x60;true&#x60; to exclude archived channels from the list | [optional] 
 **types** | **str**| Mix and match channel types by providing a comma-separated list of any combination of &#x60;public_channel&#x60;, &#x60;private_channel&#x60;, &#x60;mpim&#x60;, &#x60;im&#x60; | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn&#39;t been reached. Must be an integer no larger than 1000. | [optional] 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 

### Return type

[**ConversationsListSuccessSchema**](ConversationsListSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response with only public channels |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_mark**
> ConversationsMarkSuccessSchema conversations_mark(token=token, channel=channel, ts=ts)



Sets the read cursor in a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_mark_success_schema import ConversationsMarkSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | Channel or conversation to set the read cursor for. (optional)
    ts = 3.4 # float | Unique identifier of message you want marked as most recently seen in this conversation. (optional)

    try:
        api_response = api_instance.conversations_mark(token=token, channel=channel, ts=ts)
        print("The response of ConversationsApi->conversations_mark:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_mark: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| Channel or conversation to set the read cursor for. | [optional] 
 **ts** | **float**| Unique identifier of message you want marked as most recently seen in this conversation. | [optional] 

### Return type

[**ConversationsMarkSuccessSchema**](ConversationsMarkSuccessSchema.md)

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

# **conversations_members**
> ConversationsMembersSuccessSchema conversations_members(token=token, channel=channel, limit=limit, cursor=cursor)



Retrieve members of a conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_members_success_schema import ConversationsMembersSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:read` (optional)
    channel = 'channel_example' # str | ID of the conversation to retrieve members for (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. (optional)
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)

    try:
        api_response = api_instance.conversations_members(token=token, channel=channel, limit=limit, cursor=cursor)
        print("The response of ConversationsApi->conversations_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:read&#x60; | [optional] 
 **channel** | **str**| ID of the conversation to retrieve members for | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn&#39;t been reached. | [optional] 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 

### Return type

[**ConversationsMembersSuccessSchema**](ConversationsMembersSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical paginated success response |  -  |
**0** | Typical error response when an invalid cursor is provided |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_open**
> ConversationsOpenSuccessSchema conversations_open(token=token, channel=channel, return_im=return_im, users=users)



Opens or resumes a direct message or multi-person direct message.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_open_success_schema import ConversationsOpenSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead. (optional)
    return_im = True # bool | Boolean, indicates you want the full IM channel definition in the response. (optional)
    users = 'users_example' # str | Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`. (optional)

    try:
        api_response = api_instance.conversations_open(token=token, channel=channel, return_im=return_im, users=users)
        print("The response of ConversationsApi->conversations_open:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_open: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| Resume a conversation by supplying an &#x60;im&#x60; or &#x60;mpim&#x60;&#39;s ID. Or provide the &#x60;users&#x60; field instead. | [optional] 
 **return_im** | **bool**| Boolean, indicates you want the full IM channel definition in the response. | [optional] 
 **users** | **str**| Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a &#x60;channel&#x60; when not supplying &#x60;users&#x60;. | [optional] 

### Return type

[**ConversationsOpenSuccessSchema**](ConversationsOpenSuccessSchema.md)

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

# **conversations_rename**
> ConversationsRenameSuccessSchema conversations_rename(token=token, channel=channel, name=name)



Renames a conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_rename_success_schema import ConversationsRenameSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | ID of conversation to rename (optional)
    name = 'name_example' # str | New name for conversation. (optional)

    try:
        api_response = api_instance.conversations_rename(token=token, channel=channel, name=name)
        print("The response of ConversationsApi->conversations_rename:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| ID of conversation to rename | [optional] 
 **name** | **str**| New name for conversation. | [optional] 

### Return type

[**ConversationsRenameSuccessSchema**](ConversationsRenameSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response when the calling user is not a member of the conversation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_replies**
> ConversationsRepliesSuccessSchema conversations_replies(token=token, channel=channel, ts=ts, latest=latest, oldest=oldest, inclusive=inclusive, limit=limit, cursor=cursor)



Retrieve a thread of messages posted to a conversation

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_replies_success_schema import ConversationsRepliesSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:history` (optional)
    channel = 'channel_example' # str | Conversation ID to fetch thread from. (optional)
    ts = 3.4 # float | Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message. (optional)
    latest = 3.4 # float | End of time range of messages to include in results. (optional)
    oldest = 3.4 # float | Start of time range of messages to include in results. (optional)
    inclusive = True # bool | Include messages with latest or oldest timestamp in results only when either timestamp is specified. (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. (optional)
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)

    try:
        api_response = api_instance.conversations_replies(token=token, channel=channel, ts=ts, latest=latest, oldest=oldest, inclusive=inclusive, limit=limit, cursor=cursor)
        print("The response of ConversationsApi->conversations_replies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_replies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:history&#x60; | [optional] 
 **channel** | **str**| Conversation ID to fetch thread from. | [optional] 
 **ts** | **float**| Unique identifier of a thread&#39;s parent message. &#x60;ts&#x60; must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by &#x60;ts&#x60; will return - it is just an ordinary, unthreaded message. | [optional] 
 **latest** | **float**| End of time range of messages to include in results. | [optional] 
 **oldest** | **float**| Start of time range of messages to include in results. | [optional] 
 **inclusive** | **bool**| Include messages with latest or oldest timestamp in results only when either timestamp is specified. | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn&#39;t been reached. | [optional] 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 

### Return type

[**ConversationsRepliesSuccessSchema**](ConversationsRepliesSuccessSchema.md)

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

# **conversations_set_purpose**
> ConversationsSetPurposeSuccessSchema conversations_set_purpose(token=token, channel=channel, purpose=purpose)



Sets the purpose for a conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_set_purpose_success_schema import ConversationsSetPurposeSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | Conversation to set the purpose of (optional)
    purpose = 'purpose_example' # str | A new, specialer purpose (optional)

    try:
        api_response = api_instance.conversations_set_purpose(token=token, channel=channel, purpose=purpose)
        print("The response of ConversationsApi->conversations_set_purpose:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_set_purpose: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| Conversation to set the purpose of | [optional] 
 **purpose** | **str**| A new, specialer purpose | [optional] 

### Return type

[**ConversationsSetPurposeSuccessSchema**](ConversationsSetPurposeSuccessSchema.md)

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

# **conversations_set_topic**
> ConversationsSetTopicSuccessSchema conversations_set_topic(token=token, channel=channel, topic=topic)



Sets the topic for a conversation.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_set_topic_success_schema import ConversationsSetTopicSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | Conversation to set the topic of (optional)
    topic = 'topic_example' # str | The new topic string. Does not support formatting or linkification. (optional)

    try:
        api_response = api_instance.conversations_set_topic(token=token, channel=channel, topic=topic)
        print("The response of ConversationsApi->conversations_set_topic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_set_topic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| Conversation to set the topic of | [optional] 
 **topic** | **str**| The new topic string. Does not support formatting or linkification. | [optional] 

### Return type

[**ConversationsSetTopicSuccessSchema**](ConversationsSetTopicSuccessSchema.md)

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

# **conversations_unarchive**
> ConversationsUnarchiveSuccessSchema conversations_unarchive(token=token, channel=channel)



Reverses conversation archival.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.conversations_unarchive_success_schema import ConversationsUnarchiveSuccessSchema
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
    api_instance = openapi_client.ConversationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `conversations:write` (optional)
    channel = 'channel_example' # str | ID of conversation to unarchive (optional)

    try:
        api_response = api_instance.conversations_unarchive(token=token, channel=channel)
        print("The response of ConversationsApi->conversations_unarchive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_unarchive: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;conversations:write&#x60; | [optional] 
 **channel** | **str**| ID of conversation to unarchive | [optional] 

### Return type

[**ConversationsUnarchiveSuccessSchema**](ConversationsUnarchiveSuccessSchema.md)

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

