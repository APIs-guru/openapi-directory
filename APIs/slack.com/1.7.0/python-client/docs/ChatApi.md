# openapi_client.ChatApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chat_delete**](ChatApi.md#chat_delete) | **POST** /chat.delete | 
[**chat_delete_scheduled_message**](ChatApi.md#chat_delete_scheduled_message) | **POST** /chat.deleteScheduledMessage | 
[**chat_get_permalink**](ChatApi.md#chat_get_permalink) | **GET** /chat.getPermalink | 
[**chat_me_message**](ChatApi.md#chat_me_message) | **POST** /chat.meMessage | 
[**chat_post_ephemeral**](ChatApi.md#chat_post_ephemeral) | **POST** /chat.postEphemeral | 
[**chat_post_message**](ChatApi.md#chat_post_message) | **POST** /chat.postMessage | 
[**chat_schedule_message**](ChatApi.md#chat_schedule_message) | **POST** /chat.scheduleMessage | 
[**chat_scheduled_messages_list_0**](ChatApi.md#chat_scheduled_messages_list_0) | **GET** /chat.scheduledMessages.list | 
[**chat_unfurl**](ChatApi.md#chat_unfurl) | **POST** /chat.unfurl | 
[**chat_update**](ChatApi.md#chat_update) | **POST** /chat.update | 


# **chat_delete**
> ChatDeleteSuccessSchema chat_delete(token=token, as_user=as_user, channel=channel, ts=ts)



Deletes a message.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_delete_success_schema import ChatDeleteSuccessSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `chat:write` (optional)
    as_user = True # bool | Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope. (optional)
    channel = 'channel_example' # str | Channel containing the message to be deleted. (optional)
    ts = 3.4 # float | Timestamp of the message to be deleted. (optional)

    try:
        api_response = api_instance.chat_delete(token=token, as_user=as_user, channel=channel, ts=ts)
        print("The response of ChatApi->chat_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;chat:write&#x60; | [optional] 
 **as_user** | **bool**| Pass true to delete the message as the authed user with &#x60;chat:write:user&#x60; scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with &#x60;chat:write:bot&#x60; scope. | [optional] 
 **channel** | **str**| Channel containing the message to be deleted. | [optional] 
 **ts** | **float**| Timestamp of the message to be deleted. | [optional] 

### Return type

[**ChatDeleteSuccessSchema**](ChatDeleteSuccessSchema.md)

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

# **chat_delete_scheduled_message**
> ChatDeleteScheduledMessageSchema chat_delete_scheduled_message(token, channel, scheduled_message_id, as_user=as_user)



Deletes a pending scheduled message from the queue.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_delete_scheduled_message_schema import ChatDeleteScheduledMessageSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `chat:write`
    channel = 'channel_example' # str | The channel the scheduled_message is posting to
    scheduled_message_id = 'scheduled_message_id_example' # str | `scheduled_message_id` returned from call to chat.scheduleMessage
    as_user = True # bool | Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope. (optional)

    try:
        api_response = api_instance.chat_delete_scheduled_message(token, channel, scheduled_message_id, as_user=as_user)
        print("The response of ChatApi->chat_delete_scheduled_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_delete_scheduled_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;chat:write&#x60; | 
 **channel** | **str**| The channel the scheduled_message is posting to | 
 **scheduled_message_id** | **str**| &#x60;scheduled_message_id&#x60; returned from call to chat.scheduleMessage | 
 **as_user** | **bool**| Pass true to delete the message as the authed user with &#x60;chat:write:user&#x60; scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with &#x60;chat:write:bot&#x60; scope. | [optional] 

### Return type

[**ChatDeleteScheduledMessageSchema**](ChatDeleteScheduledMessageSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response if no message is found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chat_get_permalink**
> ChatGetPermalinkSuccessSchema chat_get_permalink(token, channel, message_ts)



Retrieve a permalink URL for a specific extant message

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_get_permalink_success_schema import ChatGetPermalinkSuccessSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    channel = 'channel_example' # str | The ID of the conversation or channel containing the message
    message_ts = 'message_ts_example' # str | A message's `ts` value, uniquely identifying it within a channel

    try:
        api_response = api_instance.chat_get_permalink(token, channel, message_ts)
        print("The response of ChatApi->chat_get_permalink:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_get_permalink: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **channel** | **str**| The ID of the conversation or channel containing the message | 
 **message_ts** | **str**| A message&#39;s &#x60;ts&#x60; value, uniquely identifying it within a channel | 

### Return type

[**ChatGetPermalinkSuccessSchema**](ChatGetPermalinkSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response |  -  |
**0** | Error response when channel cannot be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chat_me_message**
> ChatMeMessageSchema chat_me_message(token=token, channel=channel, text=text)



Share a me message into a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_me_message_schema import ChatMeMessageSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `chat:write` (optional)
    channel = 'channel_example' # str | Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name. (optional)
    text = 'text_example' # str | Text of the message to send. (optional)

    try:
        api_response = api_instance.chat_me_message(token=token, channel=channel, text=text)
        print("The response of ChatApi->chat_me_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_me_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;chat:write&#x60; | [optional] 
 **channel** | **str**| Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name. | [optional] 
 **text** | **str**| Text of the message to send. | [optional] 

### Return type

[**ChatMeMessageSchema**](ChatMeMessageSchema.md)

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

# **chat_post_ephemeral**
> ChatPostEphemeralSuccessSchema chat_post_ephemeral(token, channel, user, as_user=as_user, attachments=attachments, blocks=blocks, icon_emoji=icon_emoji, icon_url=icon_url, link_names=link_names, parse=parse, text=text, thread_ts=thread_ts, username=username)



Sends an ephemeral message to a user in a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_post_ephemeral_success_schema import ChatPostEphemeralSuccessSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `chat:write`
    channel = 'channel_example' # str | Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.
    user = 'user_example' # str | `id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument.
    as_user = True # bool | Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false. (optional)
    attachments = 'attachments_example' # str | A JSON-based array of structured attachments, presented as a URL-encoded string. (optional)
    blocks = 'blocks_example' # str | A JSON-based array of structured blocks, presented as a URL-encoded string. (optional)
    icon_emoji = 'icon_emoji_example' # str | Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below. (optional)
    icon_url = 'icon_url_example' # str | URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. (optional)
    link_names = True # bool | Find and link channel names and usernames. (optional)
    parse = 'parse_example' # str | Change how messages are treated. Defaults to `none`. See [below](#formatting). (optional)
    text = 'text_example' # str | How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. (optional)
    thread_ts = 'thread_ts_example' # str | Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if there is already an active thread. (optional)
    username = 'username_example' # str | Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. (optional)

    try:
        api_response = api_instance.chat_post_ephemeral(token, channel, user, as_user=as_user, attachments=attachments, blocks=blocks, icon_emoji=icon_emoji, icon_url=icon_url, link_names=link_names, parse=parse, text=text, thread_ts=thread_ts, username=username)
        print("The response of ChatApi->chat_post_ephemeral:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_post_ephemeral: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;chat:write&#x60; | 
 **channel** | **str**| Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. | 
 **user** | **str**| &#x60;id&#x60; of the user who will receive the ephemeral message. The user should be in the channel specified by the &#x60;channel&#x60; argument. | 
 **as_user** | **bool**| Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false. | [optional] 
 **attachments** | **str**| A JSON-based array of structured attachments, presented as a URL-encoded string. | [optional] 
 **blocks** | **str**| A JSON-based array of structured blocks, presented as a URL-encoded string. | [optional] 
 **icon_emoji** | **str**| Emoji to use as the icon for this message. Overrides &#x60;icon_url&#x60;. Must be used in conjunction with &#x60;as_user&#x60; set to &#x60;false&#x60;, otherwise ignored. See [authorship](#authorship) below. | [optional] 
 **icon_url** | **str**| URL to an image to use as the icon for this message. Must be used in conjunction with &#x60;as_user&#x60; set to false, otherwise ignored. See [authorship](#authorship) below. | [optional] 
 **link_names** | **bool**| Find and link channel names and usernames. | [optional] 
 **parse** | **str**| Change how messages are treated. Defaults to &#x60;none&#x60;. See [below](#formatting). | [optional] 
 **text** | **str**| How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. | [optional] 
 **thread_ts** | **str**| Provide another message&#39;s &#x60;ts&#x60; value to post this message in a thread. Avoid using a reply&#39;s &#x60;ts&#x60; value; use its parent&#39;s value instead. Ephemeral messages in threads are only shown if there is already an active thread. | [optional] 
 **username** | **str**| Set your bot&#39;s user name. Must be used in conjunction with &#x60;as_user&#x60; set to false, otherwise ignored. See [authorship](#authorship) below. | [optional] 

### Return type

[**ChatPostEphemeralSuccessSchema**](ChatPostEphemeralSuccessSchema.md)

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

# **chat_post_message**
> ChatPostMessageSuccessSchema chat_post_message(token, channel, as_user=as_user, attachments=attachments, blocks=blocks, icon_emoji=icon_emoji, icon_url=icon_url, link_names=link_names, mrkdwn=mrkdwn, parse=parse, reply_broadcast=reply_broadcast, text=text, thread_ts=thread_ts, unfurl_links=unfurl_links, unfurl_media=unfurl_media, username=username)



Sends a message to a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_post_message_success_schema import ChatPostMessageSuccessSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `chat:write`
    channel = 'channel_example' # str | Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.
    as_user = 'as_user_example' # str | Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below. (optional)
    attachments = 'attachments_example' # str | A JSON-based array of structured attachments, presented as a URL-encoded string. (optional)
    blocks = 'blocks_example' # str | A JSON-based array of structured blocks, presented as a URL-encoded string. (optional)
    icon_emoji = 'icon_emoji_example' # str | Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below. (optional)
    icon_url = 'icon_url_example' # str | URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. (optional)
    link_names = True # bool | Find and link channel names and usernames. (optional)
    mrkdwn = True # bool | Disable Slack markup parsing by setting to `false`. Enabled by default. (optional)
    parse = 'parse_example' # str | Change how messages are treated. Defaults to `none`. See [below](#formatting). (optional)
    reply_broadcast = True # bool | Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`. (optional)
    text = 'text_example' # str | How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. (optional)
    thread_ts = 'thread_ts_example' # str | Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead. (optional)
    unfurl_links = True # bool | Pass true to enable unfurling of primarily text-based content. (optional)
    unfurl_media = True # bool | Pass false to disable unfurling of media content. (optional)
    username = 'username_example' # str | Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. (optional)

    try:
        api_response = api_instance.chat_post_message(token, channel, as_user=as_user, attachments=attachments, blocks=blocks, icon_emoji=icon_emoji, icon_url=icon_url, link_names=link_names, mrkdwn=mrkdwn, parse=parse, reply_broadcast=reply_broadcast, text=text, thread_ts=thread_ts, unfurl_links=unfurl_links, unfurl_media=unfurl_media, username=username)
        print("The response of ChatApi->chat_post_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_post_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;chat:write&#x60; | 
 **channel** | **str**| Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. | 
 **as_user** | **str**| Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below. | [optional] 
 **attachments** | **str**| A JSON-based array of structured attachments, presented as a URL-encoded string. | [optional] 
 **blocks** | **str**| A JSON-based array of structured blocks, presented as a URL-encoded string. | [optional] 
 **icon_emoji** | **str**| Emoji to use as the icon for this message. Overrides &#x60;icon_url&#x60;. Must be used in conjunction with &#x60;as_user&#x60; set to &#x60;false&#x60;, otherwise ignored. See [authorship](#authorship) below. | [optional] 
 **icon_url** | **str**| URL to an image to use as the icon for this message. Must be used in conjunction with &#x60;as_user&#x60; set to false, otherwise ignored. See [authorship](#authorship) below. | [optional] 
 **link_names** | **bool**| Find and link channel names and usernames. | [optional] 
 **mrkdwn** | **bool**| Disable Slack markup parsing by setting to &#x60;false&#x60;. Enabled by default. | [optional] 
 **parse** | **str**| Change how messages are treated. Defaults to &#x60;none&#x60;. See [below](#formatting). | [optional] 
 **reply_broadcast** | **bool**| Used in conjunction with &#x60;thread_ts&#x60; and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to &#x60;false&#x60;. | [optional] 
 **text** | **str**| How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. | [optional] 
 **thread_ts** | **str**| Provide another message&#39;s &#x60;ts&#x60; value to make this message a reply. Avoid using a reply&#39;s &#x60;ts&#x60; value; use its parent instead. | [optional] 
 **unfurl_links** | **bool**| Pass true to enable unfurling of primarily text-based content. | [optional] 
 **unfurl_media** | **bool**| Pass false to disable unfurling of media content. | [optional] 
 **username** | **str**| Set your bot&#39;s user name. Must be used in conjunction with &#x60;as_user&#x60; set to false, otherwise ignored. See [authorship](#authorship) below. | [optional] 

### Return type

[**ChatPostMessageSuccessSchema**](ChatPostMessageSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response if too many attachments are included |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chat_schedule_message**
> ChatScheduleMessageSuccessSchema chat_schedule_message(token=token, as_user=as_user, attachments=attachments, blocks=blocks, channel=channel, link_names=link_names, parse=parse, post_at=post_at, reply_broadcast=reply_broadcast, text=text, thread_ts=thread_ts, unfurl_links=unfurl_links, unfurl_media=unfurl_media)



Schedules a message to be sent to a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_schedule_message_success_schema import ChatScheduleMessageSuccessSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `chat:write` (optional)
    as_user = True # bool | Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship). (optional)
    attachments = 'attachments_example' # str | A JSON-based array of structured attachments, presented as a URL-encoded string. (optional)
    blocks = 'blocks_example' # str | A JSON-based array of structured blocks, presented as a URL-encoded string. (optional)
    channel = 'channel_example' # str | Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. (optional)
    link_names = True # bool | Find and link channel names and usernames. (optional)
    parse = 'parse_example' # str | Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting). (optional)
    post_at = 'post_at_example' # str | Unix EPOCH timestamp of time in future to send the message. (optional)
    reply_broadcast = True # bool | Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`. (optional)
    text = 'text_example' # str | How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. (optional)
    thread_ts = 3.4 # float | Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead. (optional)
    unfurl_links = True # bool | Pass true to enable unfurling of primarily text-based content. (optional)
    unfurl_media = True # bool | Pass false to disable unfurling of media content. (optional)

    try:
        api_response = api_instance.chat_schedule_message(token=token, as_user=as_user, attachments=attachments, blocks=blocks, channel=channel, link_names=link_names, parse=parse, post_at=post_at, reply_broadcast=reply_broadcast, text=text, thread_ts=thread_ts, unfurl_links=unfurl_links, unfurl_media=unfurl_media)
        print("The response of ChatApi->chat_schedule_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_schedule_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;chat:write&#x60; | [optional] 
 **as_user** | **bool**| Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship). | [optional] 
 **attachments** | **str**| A JSON-based array of structured attachments, presented as a URL-encoded string. | [optional] 
 **blocks** | **str**| A JSON-based array of structured blocks, presented as a URL-encoded string. | [optional] 
 **channel** | **str**| Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. | [optional] 
 **link_names** | **bool**| Find and link channel names and usernames. | [optional] 
 **parse** | **str**| Change how messages are treated. Defaults to &#x60;none&#x60;. See [chat.postMessage](chat.postMessage#formatting). | [optional] 
 **post_at** | **str**| Unix EPOCH timestamp of time in future to send the message. | [optional] 
 **reply_broadcast** | **bool**| Used in conjunction with &#x60;thread_ts&#x60; and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to &#x60;false&#x60;. | [optional] 
 **text** | **str**| How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. | [optional] 
 **thread_ts** | **float**| Provide another message&#39;s &#x60;ts&#x60; value to make this message a reply. Avoid using a reply&#39;s &#x60;ts&#x60; value; use its parent instead. | [optional] 
 **unfurl_links** | **bool**| Pass true to enable unfurling of primarily text-based content. | [optional] 
 **unfurl_media** | **bool**| Pass false to disable unfurling of media content. | [optional] 

### Return type

[**ChatScheduleMessageSuccessSchema**](ChatScheduleMessageSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response if the &#x60;post_at&#x60; is invalid (ex. in the past or too far into the future) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chat_scheduled_messages_list_0**
> ChatScheduledMessagesListSchema chat_scheduled_messages_list_0(token=token, channel=channel, latest=latest, oldest=oldest, limit=limit, cursor=cursor)



Returns a list of scheduled messages.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_scheduled_messages_list_schema import ChatScheduledMessagesListSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none` (optional)
    channel = 'channel_example' # str | The channel of the scheduled messages (optional)
    latest = 3.4 # float | A UNIX timestamp of the latest value in the time range (optional)
    oldest = 3.4 # float | A UNIX timestamp of the oldest value in the time range (optional)
    limit = 56 # int | Maximum number of original entries to return. (optional)
    cursor = 'cursor_example' # str | For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from. (optional)

    try:
        api_response = api_instance.chat_scheduled_messages_list_0(token=token, channel=channel, latest=latest, oldest=oldest, limit=limit, cursor=cursor)
        print("The response of ChatApi->chat_scheduled_messages_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_scheduled_messages_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | [optional] 
 **channel** | **str**| The channel of the scheduled messages | [optional] 
 **latest** | **float**| A UNIX timestamp of the latest value in the time range | [optional] 
 **oldest** | **float**| A UNIX timestamp of the oldest value in the time range | [optional] 
 **limit** | **int**| Maximum number of original entries to return. | [optional] 
 **cursor** | **str**| For pagination purposes, this is the &#x60;cursor&#x60; value returned from a previous call to &#x60;chat.scheduledmessages.list&#x60; indicating where you want to start this call from. | [optional] 

### Return type

[**ChatScheduledMessagesListSchema**](ChatScheduledMessagesListSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response if the channel passed is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chat_unfurl**
> ChatUnfurlSuccessSchema chat_unfurl(token, channel, ts, unfurls=unfurls, user_auth_message=user_auth_message, user_auth_required=user_auth_required, user_auth_url=user_auth_url)



Provide custom unfurl behavior for user-posted URLs

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_unfurl_success_schema import ChatUnfurlSuccessSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `links:write`
    channel = 'channel_example' # str | Channel ID of the message
    ts = 'ts_example' # str | Timestamp of the message to add unfurl behavior to.
    unfurls = 'unfurls_example' # str | URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments. (optional)
    user_auth_message = 'user_auth_message_example' # str | Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior (optional)
    user_auth_required = True # bool | Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain (optional)
    user_auth_url = 'user_auth_url_example' # str | Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded. (optional)

    try:
        api_response = api_instance.chat_unfurl(token, channel, ts, unfurls=unfurls, user_auth_message=user_auth_message, user_auth_required=user_auth_required, user_auth_url=user_auth_url)
        print("The response of ChatApi->chat_unfurl:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_unfurl: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;links:write&#x60; | 
 **channel** | **str**| Channel ID of the message | 
 **ts** | **str**| Timestamp of the message to add unfurl behavior to. | 
 **unfurls** | **str**| URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments. | [optional] 
 **user_auth_message** | **str**| Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior | [optional] 
 **user_auth_required** | **bool**| Set to &#x60;true&#x60; or &#x60;1&#x60; to indicate the user must install your Slack app to trigger unfurls for this domain | [optional] 
 **user_auth_url** | **str**| Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded. | [optional] 

### Return type

[**ChatUnfurlSuccessSchema**](ChatUnfurlSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical, minimal success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chat_update**
> ChatUpdateSuccessSchema chat_update(token, channel, ts, as_user=as_user, attachments=attachments, blocks=blocks, link_names=link_names, parse=parse, text=text)



Updates a message.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_update_success_schema import ChatUpdateSuccessSchema
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
    api_instance = openapi_client.ChatApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `chat:write`
    channel = 'channel_example' # str | Channel containing the message to be updated.
    ts = 'ts_example' # str | Timestamp of the message to be updated.
    as_user = 'as_user_example' # str | Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users. (optional)
    attachments = 'attachments_example' # str | A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don't include this field, the message's previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field. (optional)
    blocks = 'blocks_example' # str | A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded string. If you don't include this field, the message's previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field. (optional)
    link_names = 'link_names_example' # str | Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`. (optional)
    parse = 'parse_example' # str | Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`. (optional)
    text = 'text_example' # str | New text for the message, using the [default formatting rules](/reference/surfaces/formatting). It's not required when presenting `blocks` or `attachments`. (optional)

    try:
        api_response = api_instance.chat_update(token, channel, ts, as_user=as_user, attachments=attachments, blocks=blocks, link_names=link_names, parse=parse, text=text)
        print("The response of ChatApi->chat_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->chat_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;chat:write&#x60; | 
 **channel** | **str**| Channel containing the message to be updated. | 
 **ts** | **str**| Timestamp of the message to be updated. | 
 **as_user** | **str**| Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users. | [optional] 
 **attachments** | **str**| A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting &#x60;text&#x60;. If you don&#39;t include this field, the message&#39;s previous &#x60;attachments&#x60; will be retained. To remove previous &#x60;attachments&#x60;, include an empty array for this field. | [optional] 
 **blocks** | **str**| A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded string. If you don&#39;t include this field, the message&#39;s previous &#x60;blocks&#x60; will be retained. To remove previous &#x60;blocks&#x60;, include an empty array for this field. | [optional] 
 **link_names** | **str**| Find and link channel names and usernames. Defaults to &#x60;none&#x60;. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, &#x60;none&#x60;. | [optional] 
 **parse** | **str**| Change how messages are treated. Defaults to &#x60;client&#x60;, unlike &#x60;chat.postMessage&#x60;. Accepts either &#x60;none&#x60; or &#x60;full&#x60;. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, &#x60;client&#x60;. | [optional] 
 **text** | **str**| New text for the message, using the [default formatting rules](/reference/surfaces/formatting). It&#39;s not required when presenting &#x60;blocks&#x60; or &#x60;attachments&#x60;. | [optional] 

### Return type

[**ChatUpdateSuccessSchema**](ChatUpdateSuccessSchema.md)

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

