# openapi_client.ConversationsApi

All URIs are relative to *https://circuitsandbox.net/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_favorite**](ConversationsApi.md#add_favorite) | **POST** /conversations/{convId}/favorite | Adds a conversation to the favorites
[**add_label**](ConversationsApi.md#add_label) | **POST** /users/labels | Add a user label
[**add_moderators**](ConversationsApi.md#add_moderators) | **POST** /conversations/{convId}/moderators | Add moderators
[**add_participant_community**](ConversationsApi.md#add_participant_community) | **POST** /conversations/community/{convId}/participants | Adds participants to a community
[**add_participant_group**](ConversationsApi.md#add_participant_group) | **POST** /conversations/group/{convId}/participants | Adds participants to a group conversation
[**add_text_item**](ConversationsApi.md#add_text_item) | **POST** /conversations/{convId}/messages | Adds a message to a conversation
[**add_text_item_with_parent**](ConversationsApi.md#add_text_item_with_parent) | **POST** /conversations/{convId}/messages/{itemId} | Adds a message to an item
[**archive_conversation**](ConversationsApi.md#archive_conversation) | **POST** /conversations/{convId}/archive | Archives conversation
[**assign_label**](ConversationsApi.md#assign_label) | **POST** /conversations/{convId}/label | Adds a label to a conversation
[**create_community_conversation**](ConversationsApi.md#create_community_conversation) | **POST** /conversations/community | Creates a community conversation
[**create_direct_conversation**](ConversationsApi.md#create_direct_conversation) | **POST** /conversations/direct | Creates a 1-to-1 conversation
[**create_group_conversation**](ConversationsApi.md#create_group_conversation) | **POST** /conversations/group | Creates a group conversation
[**delete_favorite**](ConversationsApi.md#delete_favorite) | **DELETE** /conversations/{convId}/favorite | Removes a conversation from favorites
[**delete_text_item**](ConversationsApi.md#delete_text_item) | **DELETE** /conversations/{convId}/messages/{itemId} | Deletes a message from a conversation
[**flag_item**](ConversationsApi.md#flag_item) | **POST** /conversations/{convId}/messages/{itemId}/flag | Adds a flag to a message in a conversation
[**get_community_conversations**](ConversationsApi.md#get_community_conversations) | **GET** /conversations/community | Gets a list of communities
[**get_conversation_items**](ConversationsApi.md#get_conversation_items) | **GET** /conversations/{convId}/items | Gets a list of conversation items
[**get_conversationby_id**](ConversationsApi.md#get_conversationby_id) | **GET** /conversations/{convId} | Gets a conversation
[**get_conversations**](ConversationsApi.md#get_conversations) | **GET** /conversations | Gets a list of conversations
[**get_conversations_by_id**](ConversationsApi.md#get_conversations_by_id) | **GET** /conversations/byIds | Gets conversations
[**get_conversations_by_label**](ConversationsApi.md#get_conversations_by_label) | **GET** /conversations/label/{labelId} | Returns conversations with a certain label
[**get_direct_conversation**](ConversationsApi.md#get_direct_conversation) | **GET** /conversations/direct | Checks for a 1-to-1 conversation
[**get_favorite_conversations**](ConversationsApi.md#get_favorite_conversations) | **GET** /conversations/favorite | Gets favorite conversations
[**get_flag_item**](ConversationsApi.md#get_flag_item) | **GET** /conversations/{convId}/messages/flag | Gets a list of the flagged messages of a conversation
[**get_flag_item_conv**](ConversationsApi.md#get_flag_item_conv) | **GET** /conversations/messages/flag | Gets a list of the flagged messages
[**get_join_details**](ConversationsApi.md#get_join_details) | **GET** /conversations/{convId}/conversationdetails | Gets the conference details of a conversation
[**get_join_details_multiple**](ConversationsApi.md#get_join_details_multiple) | **GET** /conversations/conversationdetails | Gets the conference details for multiple conversations
[**get_participants_by_conv_id**](ConversationsApi.md#get_participants_by_conv_id) | **GET** /conversations/{convId}/participants | Performs a list of participants
[**get_pinned_conversations**](ConversationsApi.md#get_pinned_conversations) | **GET** /conversations/{convId}/pins | Returns pinned topics of a conversation
[**get_single_conversationtem**](ConversationsApi.md#get_single_conversationtem) | **GET** /conversations/messages/{itemId} | Returns a text item
[**join_community_conversation**](ConversationsApi.md#join_community_conversation) | **POST** /conversations/community/{convId}/join | Adds the authenticated user to a community
[**like_item**](ConversationsApi.md#like_item) | **POST** /conversations/{convId}/messages/{itemId}/like | Adds a \&quot;like\&quot; to a message
[**moderate_conversation**](ConversationsApi.md#moderate_conversation) | **POST** /conversations/moderate/{convId} | Set conversation moderated
[**pin_a_conversation**](ConversationsApi.md#pin_a_conversation) | **POST** /conversations/{convId}/pins/{itemId} | Pins a topic of a conversation
[**remove_label**](ConversationsApi.md#remove_label) | **DELETE** /users/labels/{labelId} | Remove a user label
[**remove_moderators**](ConversationsApi.md#remove_moderators) | **DELETE** /conversations/{convId}/moderators | Remove moderators
[**remove_participant_community**](ConversationsApi.md#remove_participant_community) | **DELETE** /conversations/community/{convId}/participants | Removes participants from a community
[**remove_participant_group**](ConversationsApi.md#remove_participant_group) | **DELETE** /conversations/group/{convId}/participants | Removes participants from a group conversation
[**resolve_invitation_token**](ConversationsApi.md#resolve_invitation_token) | **GET** /conversations/resolveinvitetoken | Resolves an invite token to a conversation
[**search_conversations**](ConversationsApi.md#search_conversations) | **GET** /conversations/search | Performs a conversation search
[**un_flag_item**](ConversationsApi.md#un_flag_item) | **DELETE** /conversations/{convId}/messages/{itemId}/flag | Removes the flag from a message
[**un_pin_a_conversation**](ConversationsApi.md#un_pin_a_conversation) | **DELETE** /conversations/{convId}/pins/{itemId} | Unpins a topic of a conversation
[**unassign_label**](ConversationsApi.md#unassign_label) | **DELETE** /conversations/{convId}/label/{labelId} | Removes a label from a conversation
[**undo_archive_conversation**](ConversationsApi.md#undo_archive_conversation) | **DELETE** /conversations/{convId}/archive | Unmute conversation
[**unlike_item**](ConversationsApi.md#unlike_item) | **DELETE** /conversations/{convId}/messages/{itemId}/like | Removes a \&quot;like\&quot; from a message
[**unmoderate_conversation**](ConversationsApi.md#unmoderate_conversation) | **POST** /conversations/unmoderate/{convId} | Set conversation unmoderated
[**update_conversation_community**](ConversationsApi.md#update_conversation_community) | **PUT** /conversations/community/{convId} | Updates the information of a community
[**update_conversation_group**](ConversationsApi.md#update_conversation_group) | **PUT** /conversations/group/{convId} | Updates the information of a group conversation
[**update_profile**](ConversationsApi.md#update_profile) | **PUT** /users/profile | Updates the user profile
[**update_text_item**](ConversationsApi.md#update_text_item) | **PUT** /conversations/{convId}/messages/{itemId} | Updates a message


# **add_favorite**
> add_favorite(conv_id)

Adds a conversation to the favorites

Adds a conversation to the favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations. OauthScopes: WRITE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which will be marked as favorite

    try:
        # Adds a conversation to the favorites
        api_instance.add_favorite(conv_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->add_favorite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which will be marked as favorite | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation was successfully marked |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_label**
> Label add_label(label)

Add a user label

Add a label to the list of user labels OauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.label import Label
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    label = 'label_example' # str | The label value to add

    try:
        # Add a user label
        api_response = api_instance.add_label(label)
        print("The response of ConversationsApi->add_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->add_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **str**| The label value to add | 

### Return type

[**Label**](Label.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The label was successfully added |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_moderators**
> add_moderators(conv_id, moderators)

Add moderators

Adds a list of moderators to a conversation OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the moderators are added
    moderators = ['moderators_example'] # List[str] | The list of moderator ids to add 

    try:
        # Add moderators
        api_instance.add_moderators(conv_id, moderators)
    except Exception as e:
        print("Exception when calling ConversationsApi->add_moderators: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the moderators are added | 
 **moderators** | [**List[str]**](str.md)| The list of moderator ids to add  | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The moderators were successfully added |  -  |
**400** | Error reading list of moderators to add |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_participant_community**
> Conversation add_participant_community(conv_id, participants)

Adds participants to a community

Adds one or more participants to the given community. This operation can only be performed by a user who is already a member of the community. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the participant has to be added.
    participants = ['participants_example'] # List[str] | The IDs or the unique email addresses of the Circuit users that should to be added.

    try:
        # Adds participants to a community
        api_response = api_instance.add_participant_community(conv_id, participants)
        print("The response of ConversationsApi->add_participant_community:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->add_participant_community: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the participant has to be added. | 
 **participants** | [**List[str]**](str.md)| The IDs or the unique email addresses of the Circuit users that should to be added. | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the conversation object to which the participants were added. |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the userIds passed as parameter are not provided in the correct format&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or one or more of the user do not exist&lt;/li&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the conversation is not of type COMMUNITY&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_participant_group**
> Conversation add_participant_group(conv_id, participants)

Adds participants to a group conversation

Adds one or more participants to the given group conversation. This operation can only be performed by a user who is already a member of the conversation. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the participant has to be added.
    participants = ['participants_example'] # List[str] | The IDs or the unique email addresses of the Circuit users that should to be added.

    try:
        # Adds participants to a group conversation
        api_response = api_instance.add_participant_group(conv_id, participants)
        print("The response of ConversationsApi->add_participant_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->add_participant_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the participant has to be added. | 
 **participants** | [**List[str]**](str.md)| The IDs or the unique email addresses of the Circuit users that should to be added. | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the conversation object to which the participants were added. |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the userIds passed as parameter are not provided in the correct format&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or one or more of the user do not exist&lt;/li&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the conversation is not of type GROUP&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_text_item**
> ConversationItem add_text_item(conv_id, attachments=attachments, content=content, form_meta_data=form_meta_data, subject=subject)

Adds a message to a conversation

Adds a message to the given conversation. This operation can be only performed on behalf of a user who is already a member of the conversation. OauthScopes: WRITE_CONVERSATIONS, CREATE_CONVERSATIONS_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the new item has to be added
    attachments = ['attachments_example'] # List[str] | A comma separated list of attachment IDs from the file API. (optional)
    content = 'content_example' # str | The actual content of the item, is mandatory unless an attachment is added (optional)
    form_meta_data = 'form_meta_data_example' # str | The form meta data of the new text item (optional)
    subject = 'subject_example' # str | The subject (headline) of the new text item (optional)

    try:
        # Adds a message to a conversation
        api_response = api_instance.add_text_item(conv_id, attachments=attachments, content=content, form_meta_data=form_meta_data, subject=subject)
        print("The response of ConversationsApi->add_text_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->add_text_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the new item has to be added | 
 **attachments** | [**List[str]**](str.md)| A comma separated list of attachment IDs from the file API. | [optional] 
 **content** | **str**| The actual content of the item, is mandatory unless an attachment is added | [optional] 
 **form_meta_data** | **str**| The form meta data of the new text item | [optional] 
 **subject** | **str**| The subject (headline) of the new text item | [optional] 

### Return type

[**ConversationItem**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the new text item object |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_text_item_with_parent**
> ConversationItem add_text_item_with_parent(conv_id, item_id, attachments=attachments, content=content, form_meta_data=form_meta_data, subject=subject)

Adds a message to an item

Adds a message to the existing item. The added message will be a child item of the message with the given itemId. OauthScopes: WRITE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the new item has to be added
    item_id = 'item_id_example' # str | The ID of the item to which the new one has to be added as child
    attachments = ['attachments_example'] # List[str] | A comma separated list of attachment IDs from the file API. (optional)
    content = 'content_example' # str | The actual content of the item (optional)
    form_meta_data = 'form_meta_data_example' # str | The form meta data of the new text item (optional)
    subject = 'subject_example' # str | The subject (headline) of the new text item (optional)

    try:
        # Adds a message to an item
        api_response = api_instance.add_text_item_with_parent(conv_id, item_id, attachments=attachments, content=content, form_meta_data=form_meta_data, subject=subject)
        print("The response of ConversationsApi->add_text_item_with_parent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->add_text_item_with_parent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the new item has to be added | 
 **item_id** | **str**| The ID of the item to which the new one has to be added as child | 
 **attachments** | [**List[str]**](str.md)| A comma separated list of attachment IDs from the file API. | [optional] 
 **content** | **str**| The actual content of the item | [optional] 
 **form_meta_data** | **str**| The form meta data of the new text item | [optional] 
 **subject** | **str**| The subject (headline) of the new text item | [optional] 

### Return type

[**ConversationItem**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the new text item object |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the parent item does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **archive_conversation**
> archive_conversation(conv_id)

Archives conversation

Archives a conversation by muting it OauthScopes: WRITE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which will be archived

    try:
        # Archives conversation
        api_instance.archive_conversation(conv_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->archive_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which will be archived | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation was successfully archived |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_label**
> Label assign_label(conv_id, label)

Adds a label to a conversation

Adds a label to a conversation, you can search and organize your conversations based on these labels OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.label import Label
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the label is added
    label = 'label_example' # str | The actual label 

    try:
        # Adds a label to a conversation
        api_response = api_instance.assign_label(conv_id, label)
        print("The response of ConversationsApi->assign_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->assign_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the label is added | 
 **label** | **str**| The actual label  | 

### Return type

[**Label**](Label.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The label was successfully added |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;li&gt;you reached the maximum of 250 labels&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_community_conversation**
> Conversation create_community_conversation(topic, description=description, participants=participants)

Creates a community conversation

Creates a community. Communities are open conversations that anyone in a Circuit domain (tenant) can join without having to be added by another user. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    topic = 'topic_example' # str | An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)
    description = 'description_example' # str | An optional description for the community conversation (optional)
    participants = ['participants_example'] # List[str] | list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added (optional)

    try:
        # Creates a community conversation
        api_response = api_instance.create_community_conversation(topic, description=description, participants=participants)
        print("The response of ConversationsApi->create_community_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->create_community_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topic** | **str**| An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used) | 
 **description** | **str**| An optional description for the community conversation | [optional] 
 **participants** | [**List[str]**](str.md)| list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added | [optional] 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation was created successfully and can be accessed via the conversation ID |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the userIds passed as parameter are not provided in the correct format&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or one or more of the user do not exist&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_direct_conversation**
> Conversation create_direct_conversation(participant)

Creates a 1-to-1 conversation

Creates a 1-to-1 conversation between the authenticated user and the user with the provided userId. In case there is already an existing 1-to-1 conversation between these users, the endpoint returns the existing conversation. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    participant = 'participant_example' # str | The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address

    try:
        # Creates a 1-to-1 conversation
        api_response = api_instance.create_direct_conversation(participant)
        print("The response of ConversationsApi->create_direct_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->create_direct_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participant** | **str**| The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation was created successfully and can be accessed via the conversation ID |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the data format of the passed user does not match either a UUID (user primary key)&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or the user does not exist&lt;/li&gt;&lt;li&gt;or the user is the same who initiates the request&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**409** | A conversation already exists. The response contains this conversation. |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_group_conversation**
> Conversation create_group_conversation(participants, topic=topic)

Creates a group conversation

Creates a group conversation between three or more users. The authenticated user is directly added to this conversation. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    participants = ['participants_example'] # List[str] | A list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added
    topic = 'topic_example' # str | An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used) (optional)

    try:
        # Creates a group conversation
        api_response = api_instance.create_group_conversation(participants, topic=topic)
        print("The response of ConversationsApi->create_group_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->create_group_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participants** | [**List[str]**](str.md)| A list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added | 
 **topic** | **str**| An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used) | [optional] 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation was created successfully and can be accessed via the conversation ID |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the userIds passed as parameter are not provided in the correct format&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or one or more of the user do not exist&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_favorite**
> delete_favorite(conv_id)

Removes a conversation from favorites

Removes a conversation from favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations. OauthScopes: WRITE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which will be unmarked as favorite

    try:
        # Removes a conversation from favorites
        api_instance.delete_favorite(conv_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->delete_favorite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which will be unmarked as favorite | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation was successfully unmarked |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;li&gt;the conversation was not marked before&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_text_item**
> ConversationItem delete_text_item(conv_id, item_id)

Deletes a message from a conversation

Marks a message in the given conversation as deleted. Deleted messages are still part of the conversation, but their content is no more visible. This operation can only be performed on behalf of the message's creator. OauthScopes: WRITE_CONVERSATIONS, DELETE_CONVERSATIONS_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the item belongs
    item_id = 'item_id_example' # str | The ID of the item that will be deleted

    try:
        # Deletes a message from a conversation
        api_response = api_instance.delete_text_item(conv_id, item_id)
        print("The response of ConversationsApi->delete_text_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->delete_text_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the item belongs | 
 **item_id** | **str**| The ID of the item that will be deleted | 

### Return type

[**ConversationItem**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the deleted text item object |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the item does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flag_item**
> flag_item(conv_id, item_id, item_creation_time=item_creation_time, parent_id=parent_id)

Adds a flag to a message in a conversation

Adds a flag to the given message in the given conversation. OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the item belongs
    item_id = 'item_id_example' # str | The ID of the item that will be flagged
    item_creation_time = 'item_creation_time_example' # str | The time when the item was created (optional)
    parent_id = 'parent_id_example' # str | The ID of the item's parent (optional)

    try:
        # Adds a flag to a message in a conversation
        api_instance.flag_item(conv_id, item_id, item_creation_time=item_creation_time, parent_id=parent_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->flag_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the item belongs | 
 **item_id** | **str**| The ID of the item that will be flagged | 
 **item_creation_time** | **str**| The time when the item was created | [optional] 
 **parent_id** | **str**| The ID of the item&#39;s parent | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The item was successful flagged |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the item does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_community_conversations**
> List[Conversation] get_community_conversations(sort=sort, order=order, include_own=include_own, start_index=start_index, results=results)

Gets a list of communities

Gets a list of communities. This endpoint can be used to explore the communities the authenticated user could join. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    sort = ALPHABETICALLY # str | Defines the type of sorting for the community conversations (default is alphabetical) (optional) (default to ALPHABETICALLY)
    order = ASCENDING # str | Defines the ordering of the conversations (default is ascending) (optional) (default to ASCENDING)
    include_own = False # bool | If set to false only conversations are returned where the user is no member of, otherwise all community conversations are returned (optional) (default to False)
    start_index = 0 # float | The index of the conversation that is the first one that has to be returned. E.g. if a request starts with startIndex 40 and results 20 the conversations 40 to 60 are returned (optional) (default to 0)
    results = 25 # float | The maximum number of returned results (default 25). The maximum allowed value is 100. (optional) (default to 25)

    try:
        # Gets a list of communities
        api_response = api_instance.get_community_conversations(sort=sort, order=order, include_own=include_own, start_index=start_index, results=results)
        print("The response of ConversationsApi->get_community_conversations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_community_conversations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **str**| Defines the type of sorting for the community conversations (default is alphabetical) | [optional] [default to ALPHABETICALLY]
 **order** | **str**| Defines the ordering of the conversations (default is ascending) | [optional] [default to ASCENDING]
 **include_own** | **bool**| If set to false only conversations are returned where the user is no member of, otherwise all community conversations are returned | [optional] [default to False]
 **start_index** | **float**| The index of the conversation that is the first one that has to be returned. E.g. if a request starts with startIndex 40 and results 20 the conversations 40 to 60 are returned | [optional] [default to 0]
 **results** | **float**| The maximum number of returned results (default 25). The maximum allowed value is 100. | [optional] [default to 25]

### Return type

[**List[Conversation]**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching conversations |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;a field constraint is violated&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_conversation_items**
> List[ConversationItem] get_conversation_items(conv_id, mod_time=mod_time, direction=direction, results=results)

Gets a list of conversation items

Gets a list of conversation items. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the items belong
    mod_time = '2013-10-20T19:20:30+01:00' # datetime | The modification time of the item in UTC format. During the query the items before (default) or after this timestamps are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified items are returned (optional)
    direction = BEFORE # str | The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER (optional) (default to BEFORE)
    results = 25 # float | The maximum number of returned results (default 25). The maximum allowed value is 100. (optional) (default to 25)

    try:
        # Gets a list of conversation items
        api_response = api_instance.get_conversation_items(conv_id, mod_time=mod_time, direction=direction, results=results)
        print("The response of ConversationsApi->get_conversation_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_conversation_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the items belong | 
 **mod_time** | **datetime**| The modification time of the item in UTC format. During the query the items before (default) or after this timestamps are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified items are returned | [optional] 
 **direction** | **str**| The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER | [optional] [default to BEFORE]
 **results** | **float**| The maximum number of returned results (default 25). The maximum allowed value is 100. | [optional] [default to 25]

### Return type

[**List[ConversationItem]**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching conversation items |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_conversationby_id**
> Conversation get_conversationby_id(conv_id)

Gets a conversation

Gets a conversation based on the given ID. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which should be updated

    try:
        # Gets a conversation
        api_response = api_instance.get_conversationby_id(conv_id)
        print("The response of ConversationsApi->get_conversationby_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_conversationby_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which should be updated | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the conversation object |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_conversations**
> List[Conversation] get_conversations(mod_time=mod_time, direction=direction, results=results)

Gets a list of conversations

Gets a list of conversations and communities the authenticated user participates in. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    mod_time = '2013-10-20T19:20:30+01:00' # datetime | The modification time of the conversation in UTC format. During the query the conversations before (<i>default</i>) or after this timestamp are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified conversations are returned (optional)
    direction = BEFORE # str | The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER (optional) (default to BEFORE)
    results = 25 # float | The maximum number of returned results (default 25). The maximum allowed value is 100. (optional) (default to 25)

    try:
        # Gets a list of conversations
        api_response = api_instance.get_conversations(mod_time=mod_time, direction=direction, results=results)
        print("The response of ConversationsApi->get_conversations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_conversations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mod_time** | **datetime**| The modification time of the conversation in UTC format. During the query the conversations before (&lt;i&gt;default&lt;/i&gt;) or after this timestamp are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified conversations are returned | [optional] 
 **direction** | **str**| The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER | [optional] [default to BEFORE]
 **results** | **float**| The maximum number of returned results (default 25). The maximum allowed value is 100. | [optional] [default to 25]

### Return type

[**List[Conversation]**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching conversations |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_conversations_by_id**
> List[Conversation] get_conversations_by_id(conv_ids)

Gets conversations

Gets conversation based on the given IDs. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_ids = ['conv_ids_example'] # List[str] | The array of IDs of the conversations which should be retrieved

    try:
        # Gets conversations
        api_response = api_instance.get_conversations_by_id(conv_ids)
        print("The response of ConversationsApi->get_conversations_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_conversations_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_ids** | [**List[str]**](str.md)| The array of IDs of the conversations which should be retrieved | 

### Return type

[**List[Conversation]**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of existing conversations successfully retrieved. |  -  |
**400** | missing documentation |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_conversations_by_label**
> ConversationsPage get_conversations_by_label(label_id, next_page_pointer=next_page_pointer, page_size=page_size)

Returns conversations with a certain label

Returns conversations with matching labels and paginated  OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversations_page import ConversationsPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    label_id = 'label_id_example' # str | Id of the label to look for
    next_page_pointer = 'next_page_pointer_example' # str | Pointer to the next page of conversations if there are any (optional)
    page_size = 25 # float | Numbers of max conversations per page (optional) (default to 25)

    try:
        # Returns conversations with a certain label
        api_response = api_instance.get_conversations_by_label(label_id, next_page_pointer=next_page_pointer, page_size=page_size)
        print("The response of ConversationsApi->get_conversations_by_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_conversations_by_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_id** | **str**| Id of the label to look for | 
 **next_page_pointer** | **str**| Pointer to the next page of conversations if there are any | [optional] 
 **page_size** | **float**| Numbers of max conversations per page | [optional] [default to 25]

### Return type

[**ConversationsPage**](ConversationsPage.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of conversations that are tagged with a certain label |  -  |
**400** | he request cannot be fulfilled due to bad syntax |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_direct_conversation**
> Conversation get_direct_conversation(participant)

Checks for a 1-to-1 conversation

Checks if a 1-to-1 conversation between the authenticated user and the user with the provided userId exists. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    participant = 'participant_example' # str | The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address

    try:
        # Checks for a 1-to-1 conversation
        api_response = api_instance.get_direct_conversation(participant)
        print("The response of ConversationsApi->get_direct_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_direct_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participant** | **str**| The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation was found and can be accessed via the conversation ID |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the data format of the passed user does not match either a UUID (user primary key)&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or the user does not exist&lt;/li&gt;&lt;li&gt;or the user is the same who initiates the request&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_favorite_conversations**
> List[String] get_favorite_conversations()

Gets favorite conversations

Gets the conversationIds which are marked as favorites. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.string import String
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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

    try:
        # Gets favorite conversations
        api_response = api_instance.get_favorite_conversations()
        print("The response of ConversationsApi->get_favorite_conversations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_favorite_conversations: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[String]**](String.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of marked conversations or an empty response. |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_flag_item**
> List[ConversationItem] get_flag_item(conv_id)

Gets a list of the flagged messages of a conversation

Gets a list of all the flagged messages in the given conversation. OauthScopes: READ_CONVERSATIONS, ORGANIZE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the item belongs

    try:
        # Gets a list of the flagged messages of a conversation
        api_response = api_instance.get_flag_item(conv_id)
        print("The response of ConversationsApi->get_flag_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_flag_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the item belongs | 

### Return type

[**List[ConversationItem]**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the list of flagged items |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_flag_item_conv**
> List[ConversationItem] get_flag_item_conv()

Gets a list of the flagged messages

Gets a list of all the messages the authenticated user has flagged. This endpoint should be used carefully in case where the authenticated user has a lot of flagged messages. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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

    try:
        # Gets a list of the flagged messages
        api_response = api_instance.get_flag_item_conv()
        print("The response of ConversationsApi->get_flag_item_conv:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_flag_item_conv: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ConversationItem]**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the list of flagged items |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_join_details**
> ConversationDetails get_join_details(conv_id)

Gets the conference details of a conversation

Gets the conference details of the given conversation. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_details import ConversationDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation for which the join details should be returned

    try:
        # Gets the conference details of a conversation
        api_response = api_instance.get_join_details(conv_id)
        print("The response of ConversationsApi->get_join_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_join_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation for which the join details should be returned | 

### Return type

[**ConversationDetails**](ConversationDetails.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The join details. |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_join_details_multiple**
> List[ConversationDetails] get_join_details_multiple(conv_ids)

Gets the conference details for multiple conversations

Gets the conference details of the given conversations. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_details import ConversationDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_ids = ['conv_ids_example'] # List[str] | An array of IDs of the conversations for which the join details should be returned

    try:
        # Gets the conference details for multiple conversations
        api_response = api_instance.get_join_details_multiple(conv_ids)
        print("The response of ConversationsApi->get_join_details_multiple:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_join_details_multiple: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_ids** | [**List[str]**](str.md)| An array of IDs of the conversations for which the join details should be returned | 

### Return type

[**List[ConversationDetails]**](ConversationDetails.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The join details. |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_participants_by_conv_id**
> List[ConversationParticipantsList] get_participants_by_conv_id(conv_id, page_size, name=name, type=type, search_pointer=search_pointer)

Performs a list of participants

Performs a search for participants. The max number of participants is configurable. If more participants are available a search pointer is returned for consecutive calls. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_participants_list import ConversationParticipantsList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The id of the conversation the participants are searched for.
    page_size = 3.4 # float | The page size of the hit list
    name = 'name_example' # str | Part of name to filter the results (optional)
    type = REGULAR # str | Type of participant to filter the results (optional) (default to REGULAR)
    search_pointer = 'search_pointer_example' # str | Pointer for paged output. Add to consecutive request to get next page (optional)

    try:
        # Performs a list of participants
        api_response = api_instance.get_participants_by_conv_id(conv_id, page_size, name=name, type=type, search_pointer=search_pointer)
        print("The response of ConversationsApi->get_participants_by_conv_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_participants_by_conv_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The id of the conversation the participants are searched for. | 
 **page_size** | **float**| The page size of the hit list | 
 **name** | **str**| Part of name to filter the results | [optional] 
 **type** | **str**| Type of participant to filter the results | [optional] [default to REGULAR]
 **search_pointer** | **str**| Pointer for paged output. Add to consecutive request to get next page | [optional] 

### Return type

[**List[ConversationParticipantsList]**](ConversationParticipantsList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of conversations and items that match the term |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pinned_conversations**
> List[PinnedTopic] get_pinned_conversations(conv_id)

Returns pinned topics of a conversation

Returns pinned topics of a conversation OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.pinned_topic import PinnedTopic
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | ID of the conversation

    try:
        # Returns pinned topics of a conversation
        api_response = api_instance.get_pinned_conversations(conv_id)
        print("The response of ConversationsApi->get_pinned_conversations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_pinned_conversations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| ID of the conversation | 

### Return type

[**List[PinnedTopic]**](PinnedTopic.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pinned topics |  -  |
**400** | The request cannot be fulfilled due to bad syntax |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_single_conversationtem**
> ConversationItem get_single_conversationtem(item_id)

Returns a text item

Returns a text item for a given item id OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    item_id = 'item_id_example' # str | The ID of the item that will be returned

    try:
        # Returns a text item
        api_response = api_instance.get_single_conversationtem(item_id)
        print("The response of ConversationsApi->get_single_conversationtem:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->get_single_conversationtem: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| The ID of the item that will be returned | 

### Return type

[**ConversationItem**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The item was successful returned |  -  |
**400** | The item with the given id was not found |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **join_community_conversation**
> Conversation join_community_conversation(conv_id)

Adds the authenticated user to a community

Adds the authenticated user to the given community (i.e., allows the user to join this community). Contrary to the operation of adding a new participant, this operation can only be performed by a user who is not yet a member of the community. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which the user will join

    try:
        # Adds the authenticated user to a community
        api_response = api_instance.join_community_conversation(conv_id)
        print("The response of ConversationsApi->join_community_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->join_community_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which the user will join | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the conversation object to which the participants was added |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the userIds passed as parameter are not provided in the correct format&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or one or more of the user do not exist&lt;/li&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the conversation is not of type COMMUNITY&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **like_item**
> like_item(conv_id, item_id)

Adds a \"like\" to a message

Adds a \"like\" to the given message in the given conversation OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the item belongs
    item_id = 'item_id_example' # str | The ID of the item that will be liked

    try:
        # Adds a \"like\" to a message
        api_instance.like_item(conv_id, item_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->like_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the item belongs | 
 **item_id** | **str**| The ID of the item that will be liked | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The item was successful liked |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the item does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moderate_conversation**
> moderate_conversation(conv_id)

Set conversation moderated

Set a conversation in moderatd mode. Moderators can be added and removed OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which will be set to moderated state

    try:
        # Set conversation moderated
        api_instance.moderate_conversation(conv_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->moderate_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which will be set to moderated state | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation is in moderated mode |  -  |
**401** | Permission denied |  -  |
**403** | Forbidden to edit this conversation |  -  |
**500** | Internal server error |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pin_a_conversation**
> Conversation pin_a_conversation(conv_id, item_id)

Pins a topic of a conversation

Pins a topic of a conversation OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation
    item_id = 'item_id_example' # str | The ID of the topic

    try:
        # Pins a topic of a conversation
        api_response = api_instance.pin_a_conversation(conv_id, item_id)
        print("The response of ConversationsApi->pin_a_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->pin_a_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation | 
 **item_id** | **str**| The ID of the topic | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the pinned conversation conversation after pinning a topic |  -  |
**400** | The request cannot be fulfilled due to bad syntax |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_label**
> Label remove_label(label_id)

Remove a user label

Remove a label from the list of user labels OauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.label import Label
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    label_id = 'label_id_example' # str | The label value to remove, either the unique ID or the label value

    try:
        # Remove a user label
        api_response = api_instance.remove_label(label_id)
        print("The response of ConversationsApi->remove_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->remove_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_id** | **str**| The label value to remove, either the unique ID or the label value | 

### Return type

[**Label**](Label.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The label was successfully removed |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;li&gt;the label does not exist&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_moderators**
> remove_moderators(conv_id, moderators)

Remove moderators

Removes a list of moderators from a conversation OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation where the moderators are removed
    moderators = ['moderators_example'] # List[str] | The list of moderator ids to remove

    try:
        # Remove moderators
        api_instance.remove_moderators(conv_id, moderators)
    except Exception as e:
        print("Exception when calling ConversationsApi->remove_moderators: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation where the moderators are removed | 
 **moderators** | [**List[str]**](str.md)| The list of moderator ids to remove | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The moderators were successfully removed |  -  |
**400** | Failure in moderators list |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_participant_community**
> Conversation remove_participant_community(conv_id, participants)

Removes participants from a community

Removes one or more participants from the given community. The last participant of a community cannot be removed. This operation can only be performed by a user who is already a member of the community. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation from which the participant have to be removed
    participants = ['participants_example'] # List[str] | The IDs or the unique email addresses of the Circuit users that have to be removed

    try:
        # Removes participants from a community
        api_response = api_instance.remove_participant_community(conv_id, participants)
        print("The response of ConversationsApi->remove_participant_community:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->remove_participant_community: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation from which the participant have to be removed | 
 **participants** | [**List[str]**](str.md)| The IDs or the unique email addresses of the Circuit users that have to be removed | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the conversation object from which the participants were removed. |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;/li&gt;the userIds passed as parameter are not provided in the correct format&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or one or more of the user do not exist&lt;/li&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the conversation is not of type COMMUNITY&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_participant_group**
> Conversation remove_participant_group(conv_id, participants)

Removes participants from a group conversation

Removes one or more participants from the given group conversation. The last participant of a group conversation cannot be removed. This operation can only be performed on behalf of a user who is already a member of the conversation. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation from which the participant have to be removed
    participants = ['participants_example'] # List[str] | The IDs or the unique email addresses of the Circuit users that have to be removed

    try:
        # Removes participants from a group conversation
        api_response = api_instance.remove_participant_group(conv_id, participants)
        print("The response of ConversationsApi->remove_participant_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->remove_participant_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation from which the participant have to be removed | 
 **participants** | [**List[str]**](str.md)| The IDs or the unique email addresses of the Circuit users that have to be removed | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the conversation object from which the participants were removed. |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the userIds passed as parameter are not provided in the correct format&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or one or more of the user do not exist&lt;/li&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the conversation is not of type GROUP&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolve_invitation_token**
> Conversation resolve_invitation_token(token)

Resolves an invite token to a conversation

Resolves an invite token to a conversation OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    token = 'token_example' # str | The invite token to resolve

    try:
        # Resolves an invite token to a conversation
        api_response = api_instance.resolve_invitation_token(token)
        print("The response of ConversationsApi->resolve_invitation_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->resolve_invitation_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The invite token to resolve | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the conversation object that belongs to the invite token if you are member of the conversation |  -  |
**400** | In case no invitation token was send |  -  |
**401** | The authentication was not successful |  -  |
**404** | If the token does not exist or you are not member of the conversation  |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_conversations**
> ConversationSearchResult search_conversations(term, include_item_ids=include_item_ids, scope=scope)

Performs a conversation search

Performs a search for conversation content. A maximum of 100 conversations is returned. If you hit this limit you should refine the search term. OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_search_result import ConversationSearchResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    term = 'term_example' # str | The search term
    include_item_ids = False # bool | Optional parameter to specify if a deep or normal search is executed. In a deep search all matching item IDs inside every conversation are returned (up to a maximum of 100). For a normal search only the conversation IDs are returned. Default is a normal search (without item IDs). (optional) (default to False)
    scope = ALL # str | The search scope, FILES||PEOPLE||MEMBERS||MESSAGES||SENTBY||ALL||CONVERSATIONS||LABEL||FILTER (optional) (default to ALL)

    try:
        # Performs a conversation search
        api_response = api_instance.search_conversations(term, include_item_ids=include_item_ids, scope=scope)
        print("The response of ConversationsApi->search_conversations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->search_conversations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **str**| The search term | 
 **include_item_ids** | **bool**| Optional parameter to specify if a deep or normal search is executed. In a deep search all matching item IDs inside every conversation are returned (up to a maximum of 100). For a normal search only the conversation IDs are returned. Default is a normal search (without item IDs). | [optional] [default to False]
 **scope** | **str**| The search scope, FILES||PEOPLE||MEMBERS||MESSAGES||SENTBY||ALL||CONVERSATIONS||LABEL||FILTER | [optional] [default to ALL]

### Return type

[**ConversationSearchResult**](ConversationSearchResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of conversations and items that match the term |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **un_flag_item**
> un_flag_item(conv_id, item_id)

Removes the flag from a message

Removes the flag from a given message that is posted to the given conversation. OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the item belongs
    item_id = 'item_id_example' # str | The ID of the item that will be flagged

    try:
        # Removes the flag from a message
        api_instance.un_flag_item(conv_id, item_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->un_flag_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the item belongs | 
 **item_id** | **str**| The ID of the item that will be flagged | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The flagged state of item was successfully removed |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the item does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **un_pin_a_conversation**
> Conversation un_pin_a_conversation(conv_id, item_id)

Unpins a topic of a conversation

Unpins a topic of a conversation OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation
    item_id = 'item_id_example' # str | The ID of the topic

    try:
        # Unpins a topic of a conversation
        api_response = api_instance.un_pin_a_conversation(conv_id, item_id)
        print("The response of ConversationsApi->un_pin_a_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->un_pin_a_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation | 
 **item_id** | **str**| The ID of the topic | 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the pinned conversation conversation after unpinning a topic |  -  |
**400** | The request cannot be fulfilled due to bad syntax |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unassign_label**
> Label unassign_label(conv_id, label_id)

Removes a label from a conversation

Removes a label from a conversation, you can search and organize your conversations based on these labels OauthScopes: WRITE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.label import Label
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation from which the label is removed
    label_id = 'label_id_example' # str | The actual label 

    try:
        # Removes a label from a conversation
        api_response = api_instance.unassign_label(conv_id, label_id)
        print("The response of ConversationsApi->unassign_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->unassign_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation from which the label is removed | 
 **label_id** | **str**| The actual label  | 

### Return type

[**Label**](Label.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The label was successfully removed |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;li&gt;the label was not assigned to the conversation&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **undo_archive_conversation**
> undo_archive_conversation(conv_id)

Unmute conversation

The conversation will no longer be archived but active again OauthScopes: WRITE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which will be unmarked as muted

    try:
        # Unmute conversation
        api_instance.undo_archive_conversation(conv_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->undo_archive_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which will be unmarked as muted | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation was successfully unmarked |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;li&gt;the conversation was not marked before&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlike_item**
> unlike_item(conv_id, item_id)

Removes a \"like\" from a message

Removes a \"like\" from the given message in the given conversation OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the item belongs
    item_id = 'item_id_example' # str | The ID of the item that will be unliked

    try:
        # Removes a \"like\" from a message
        api_instance.unlike_item(conv_id, item_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->unlike_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the item belongs | 
 **item_id** | **str**| The ID of the item that will be unliked | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The item was successful unliked |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the item does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unmoderate_conversation**
> unmoderate_conversation(conv_id)

Set conversation unmoderated

Set a conversation to unmoderatd mode OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which will be set to unmoderated state

    try:
        # Set conversation unmoderated
        api_instance.unmoderate_conversation(conv_id)
    except Exception as e:
        print("Exception when calling ConversationsApi->unmoderate_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which will be set to unmoderated state | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The conversation is in unmoderated mode |  -  |
**401** | Forbidden to edit this conversation |  -  |
**403** | Permission denied |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_conversation_community**
> Conversation update_conversation_community(conv_id, description=description, topic=topic)

Updates the information of a community

Updates the information of the given community. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which should be updated
    description = 'description_example' # str | An optional description for the community conversation (optional)
    topic = 'topic_example' # str | An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used) (optional)

    try:
        # Updates the information of a community
        api_response = api_instance.update_conversation_community(conv_id, description=description, topic=topic)
        print("The response of ConversationsApi->update_conversation_community:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->update_conversation_community: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which should be updated | 
 **description** | **str**| An optional description for the community conversation | [optional] 
 **topic** | **str**| An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used) | [optional] 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the updated conversation object with the new topic / description |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the conversation is not of type COMMUNITY&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_conversation_group**
> Conversation update_conversation_group(conv_id, topic=topic)

Updates the information of a group conversation

Updates the information of the given group conversation. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation import Conversation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation which should be updated
    topic = 'topic_example' # str | An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used) (optional)

    try:
        # Updates the information of a group conversation
        api_response = api_instance.update_conversation_group(conv_id, topic=topic)
        print("The response of ConversationsApi->update_conversation_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->update_conversation_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation which should be updated | 
 **topic** | **str**| An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used) | [optional] 

### Return type

[**Conversation**](Conversation.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the updated conversation object with the new topic |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the conversation is not of type GROUP&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_profile**
> User update_profile(firstname=firstname, job_title=job_title, lastname=lastname, locale=locale)

Updates the user profile

Updates the user profile of the authenticated user OauthScopes: WRITE_USER_PROFILE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    firstname = 'firstname_example' # str | The new firstname of the user (optional)
    job_title = 'job_title_example' # str | The new job title of the user (optional)
    lastname = 'lastname_example' # str | The new lastname of the user (optional)
    locale = 'locale_example' # str | The new locale of the user. One of EN_US, DE_DE, EN_GB, ES_ES, FR_FR, IT_IT, RU_RU, ZH_HANS_CN. (optional)

    try:
        # Updates the user profile
        api_response = api_instance.update_profile(firstname=firstname, job_title=job_title, lastname=lastname, locale=locale)
        print("The response of ConversationsApi->update_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->update_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstname** | **str**| The new firstname of the user | [optional] 
 **job_title** | **str**| The new job title of the user | [optional] 
 **lastname** | **str**| The new lastname of the user | [optional] 
 **locale** | **str**| The new locale of the user. One of EN_US, DE_DE, EN_GB, ES_ES, FR_FR, IT_IT, RU_RU, ZH_HANS_CN. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The modified user object. |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the user does not exist&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_text_item**
> ConversationItem update_text_item(conv_id, item_id, attachments=attachments, content=content, form_meta_data=form_meta_data, subject=subject)

Updates a message

Updates the content or subject of the existing message. Only the creator of the message is allowed to perform this operation. OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    conv_id = 'conv_id_example' # str | The ID of the conversation to which the item belongs
    item_id = 'item_id_example' # str | The ID of the item to update
    attachments = ['attachments_example'] # List[str] | A comma separated list of attachment IDs from the file API. (optional)
    content = 'content_example' # str | The actual content of the item (optional)
    form_meta_data = 'form_meta_data_example' # str | The form meta data of the new text item (optional)
    subject = 'subject_example' # str | The subject (headline) of the new text item (optional)

    try:
        # Updates a message
        api_response = api_instance.update_text_item(conv_id, item_id, attachments=attachments, content=content, form_meta_data=form_meta_data, subject=subject)
        print("The response of ConversationsApi->update_text_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->update_text_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conv_id** | **str**| The ID of the conversation to which the item belongs | 
 **item_id** | **str**| The ID of the item to update | 
 **attachments** | [**List[str]**](str.md)| A comma separated list of attachment IDs from the file API. | [optional] 
 **content** | **str**| The actual content of the item | [optional] 
 **form_meta_data** | **str**| The form meta data of the new text item | [optional] 
 **subject** | **str**| The subject (headline) of the new text item | [optional] 

### Return type

[**ConversationItem**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the modified text item object |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the conversation does not exist&lt;/li&gt;&lt;li&gt;the user is no participant of the conversation&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

