# openapi_client.DirectMessagesApi

All URIs are relative to *https://api.twitter.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dm_conversation_by_id_event_id_create**](DirectMessagesApi.md#dm_conversation_by_id_event_id_create) | **POST** /2/dm_conversations/{dm_conversation_id}/messages | Send a new message to a DM Conversation
[**dm_conversation_id_create**](DirectMessagesApi.md#dm_conversation_id_create) | **POST** /2/dm_conversations | Create a new DM Conversation
[**dm_conversation_with_user_event_id_create**](DirectMessagesApi.md#dm_conversation_with_user_event_id_create) | **POST** /2/dm_conversations/with/{participant_id}/messages | Send a new message to a user
[**get_dm_conversations_id_dm_events**](DirectMessagesApi.md#get_dm_conversations_id_dm_events) | **GET** /2/dm_conversations/{id}/dm_events | Get DM Events for a DM Conversation
[**get_dm_conversations_with_participant_id_dm_events**](DirectMessagesApi.md#get_dm_conversations_with_participant_id_dm_events) | **GET** /2/dm_conversations/with/{participant_id}/dm_events | Get DM Events for a DM Conversation
[**get_dm_events**](DirectMessagesApi.md#get_dm_events) | **GET** /2/dm_events | Get recent DM Events


# **dm_conversation_by_id_event_id_create**
> CreateDmEventResponse dm_conversation_by_id_event_id_create(dm_conversation_id, create_message_request=create_message_request)

Send a new message to a DM Conversation

Creates a new message for a DM Conversation specified by DM Conversation ID

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.create_dm_event_response import CreateDmEventResponse
from openapi_client.models.create_message_request import CreateMessageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectMessagesApi(api_client)
    dm_conversation_id = 'dm_conversation_id_example' # str | The DM Conversation ID.
    create_message_request = openapi_client.CreateMessageRequest() # CreateMessageRequest |  (optional)

    try:
        # Send a new message to a DM Conversation
        api_response = api_instance.dm_conversation_by_id_event_id_create(dm_conversation_id, create_message_request=create_message_request)
        print("The response of DirectMessagesApi->dm_conversation_by_id_event_id_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectMessagesApi->dm_conversation_by_id_event_id_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dm_conversation_id** | **str**| The DM Conversation ID. | 
 **create_message_request** | [**CreateMessageRequest**](CreateMessageRequest.md)|  | [optional] 

### Return type

[**CreateDmEventResponse**](CreateDmEventResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dm_conversation_id_create**
> CreateDmEventResponse dm_conversation_id_create(create_dm_conversation_request=create_dm_conversation_request)

Create a new DM Conversation

Creates a new DM Conversation.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.create_dm_conversation_request import CreateDmConversationRequest
from openapi_client.models.create_dm_event_response import CreateDmEventResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectMessagesApi(api_client)
    create_dm_conversation_request = openapi_client.CreateDmConversationRequest() # CreateDmConversationRequest |  (optional)

    try:
        # Create a new DM Conversation
        api_response = api_instance.dm_conversation_id_create(create_dm_conversation_request=create_dm_conversation_request)
        print("The response of DirectMessagesApi->dm_conversation_id_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectMessagesApi->dm_conversation_id_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_dm_conversation_request** | [**CreateDmConversationRequest**](CreateDmConversationRequest.md)|  | [optional] 

### Return type

[**CreateDmEventResponse**](CreateDmEventResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dm_conversation_with_user_event_id_create**
> CreateDmEventResponse dm_conversation_with_user_event_id_create(participant_id, create_message_request=create_message_request)

Send a new message to a user

Creates a new message for a DM Conversation with a participant user by ID

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.create_dm_event_response import CreateDmEventResponse
from openapi_client.models.create_message_request import CreateMessageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectMessagesApi(api_client)
    participant_id = 'participant_id_example' # str | The ID of the recipient user that will receive the DM.
    create_message_request = openapi_client.CreateMessageRequest() # CreateMessageRequest |  (optional)

    try:
        # Send a new message to a user
        api_response = api_instance.dm_conversation_with_user_event_id_create(participant_id, create_message_request=create_message_request)
        print("The response of DirectMessagesApi->dm_conversation_with_user_event_id_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectMessagesApi->dm_conversation_with_user_event_id_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participant_id** | **str**| The ID of the recipient user that will receive the DM. | 
 **create_message_request** | [**CreateMessageRequest**](CreateMessageRequest.md)|  | [optional] 

### Return type

[**CreateDmEventResponse**](CreateDmEventResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dm_conversations_id_dm_events**
> Get2DmConversationsIdDmEventsResponse get_dm_conversations_id_dm_events(id, max_results=max_results, pagination_token=pagination_token, event_types=event_types, dm_event_fields=dm_event_fields, expansions=expansions, media_fields=media_fields, user_fields=user_fields, tweet_fields=tweet_fields)

Get DM Events for a DM Conversation

Returns DM Events for a DM Conversation

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_dm_conversations_id_dm_events_response import Get2DmConversationsIdDmEventsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectMessagesApi(api_client)
    id = 'id_example' # str | The DM Conversation ID.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    event_types = ["MessageCreate","ParticipantsLeave","ParticipantsJoin"] # List[str] | The set of event_types to include in the results. (optional) (default to ["MessageCreate","ParticipantsLeave","ParticipantsJoin"])
    dm_event_fields = ['[\"attachments\",\"created_at\",\"dm_conversation_id\",\"event_type\",\"id\",\"participant_ids\",\"referenced_tweets\",\"sender_id\",\"text\"]'] # List[str] | A comma separated list of DmEvent fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"participant_ids\",\"referenced_tweets.id\",\"sender_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Get DM Events for a DM Conversation
        api_response = api_instance.get_dm_conversations_id_dm_events(id, max_results=max_results, pagination_token=pagination_token, event_types=event_types, dm_event_fields=dm_event_fields, expansions=expansions, media_fields=media_fields, user_fields=user_fields, tweet_fields=tweet_fields)
        print("The response of DirectMessagesApi->get_dm_conversations_id_dm_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectMessagesApi->get_dm_conversations_id_dm_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The DM Conversation ID. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **event_types** | [**List[str]**](str.md)| The set of event_types to include in the results. | [optional] [default to [&quot;MessageCreate&quot;,&quot;ParticipantsLeave&quot;,&quot;ParticipantsJoin&quot;]]
 **dm_event_fields** | [**List[str]**](str.md)| A comma separated list of DmEvent fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2DmConversationsIdDmEventsResponse**](Get2DmConversationsIdDmEventsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dm_conversations_with_participant_id_dm_events**
> Get2DmConversationsWithParticipantIdDmEventsResponse get_dm_conversations_with_participant_id_dm_events(participant_id, max_results=max_results, pagination_token=pagination_token, event_types=event_types, dm_event_fields=dm_event_fields, expansions=expansions, media_fields=media_fields, user_fields=user_fields, tweet_fields=tweet_fields)

Get DM Events for a DM Conversation

Returns DM Events for a DM Conversation

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_dm_conversations_with_participant_id_dm_events_response import Get2DmConversationsWithParticipantIdDmEventsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectMessagesApi(api_client)
    participant_id = 'participant_id_example' # str | The ID of the participant user for the One to One DM conversation.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    event_types = ["MessageCreate","ParticipantsLeave","ParticipantsJoin"] # List[str] | The set of event_types to include in the results. (optional) (default to ["MessageCreate","ParticipantsLeave","ParticipantsJoin"])
    dm_event_fields = ['[\"attachments\",\"created_at\",\"dm_conversation_id\",\"event_type\",\"id\",\"participant_ids\",\"referenced_tweets\",\"sender_id\",\"text\"]'] # List[str] | A comma separated list of DmEvent fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"participant_ids\",\"referenced_tweets.id\",\"sender_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Get DM Events for a DM Conversation
        api_response = api_instance.get_dm_conversations_with_participant_id_dm_events(participant_id, max_results=max_results, pagination_token=pagination_token, event_types=event_types, dm_event_fields=dm_event_fields, expansions=expansions, media_fields=media_fields, user_fields=user_fields, tweet_fields=tweet_fields)
        print("The response of DirectMessagesApi->get_dm_conversations_with_participant_id_dm_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectMessagesApi->get_dm_conversations_with_participant_id_dm_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participant_id** | **str**| The ID of the participant user for the One to One DM conversation. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **event_types** | [**List[str]**](str.md)| The set of event_types to include in the results. | [optional] [default to [&quot;MessageCreate&quot;,&quot;ParticipantsLeave&quot;,&quot;ParticipantsJoin&quot;]]
 **dm_event_fields** | [**List[str]**](str.md)| A comma separated list of DmEvent fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2DmConversationsWithParticipantIdDmEventsResponse**](Get2DmConversationsWithParticipantIdDmEventsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dm_events**
> Get2DmEventsResponse get_dm_events(max_results=max_results, pagination_token=pagination_token, event_types=event_types, dm_event_fields=dm_event_fields, expansions=expansions, media_fields=media_fields, user_fields=user_fields, tweet_fields=tweet_fields)

Get recent DM Events

Returns recent DM Events across DM conversations

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_dm_events_response import Get2DmEventsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectMessagesApi(api_client)
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    event_types = ["MessageCreate","ParticipantsLeave","ParticipantsJoin"] # List[str] | The set of event_types to include in the results. (optional) (default to ["MessageCreate","ParticipantsLeave","ParticipantsJoin"])
    dm_event_fields = ['[\"attachments\",\"created_at\",\"dm_conversation_id\",\"event_type\",\"id\",\"participant_ids\",\"referenced_tweets\",\"sender_id\",\"text\"]'] # List[str] | A comma separated list of DmEvent fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"participant_ids\",\"referenced_tweets.id\",\"sender_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Get recent DM Events
        api_response = api_instance.get_dm_events(max_results=max_results, pagination_token=pagination_token, event_types=event_types, dm_event_fields=dm_event_fields, expansions=expansions, media_fields=media_fields, user_fields=user_fields, tweet_fields=tweet_fields)
        print("The response of DirectMessagesApi->get_dm_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectMessagesApi->get_dm_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **event_types** | [**List[str]**](str.md)| The set of event_types to include in the results. | [optional] [default to [&quot;MessageCreate&quot;,&quot;ParticipantsLeave&quot;,&quot;ParticipantsJoin&quot;]]
 **dm_event_fields** | [**List[str]**](str.md)| A comma separated list of DmEvent fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2DmEventsResponse**](Get2DmEventsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

