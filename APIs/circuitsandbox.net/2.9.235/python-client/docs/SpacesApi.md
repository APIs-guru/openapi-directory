# openapi_client.SpacesApi

All URIs are relative to *https://circuitsandbox.net/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_participants_to_space**](SpacesApi.md#add_participants_to_space) | **POST** /spaces/{id}/participant | Add Participant to Space
[**add_recent_space_search**](SpacesApi.md#add_recent_space_search) | **PUT** /spaces/search/add/recent | Add recent search 
[**assign_labels**](SpacesApi.md#assign_labels) | **POST** /spaces/{id}/labels/assign | Assign labels
[**cancel_space_search**](SpacesApi.md#cancel_space_search) | **PUT** /spaces/search/cancel/{searchId} | Cancels a space search of a client.
[**create_reply**](SpacesApi.md#create_reply) | **POST** /spaces/{spaceId}/topic/{topicId}/reply | creates a reply to a topic
[**create_space**](SpacesApi.md#create_space) | **POST** /spaces/create | Create a space
[**create_space_topic**](SpacesApi.md#create_space_topic) | **POST** /spaces/{spaceId}/topic | creates a new space topic
[**delete_space**](SpacesApi.md#delete_space) | **DELETE** /spaces/{id} | Delete a space
[**delete_space_item**](SpacesApi.md#delete_space_item) | **DELETE** /spaces/item/{itemId} | deletes a space item
[**deny_space_acces**](SpacesApi.md#deny_space_acces) | **POST** /spaces/{spaceId}/participant/{participantId}/deny | Deny access for a space
[**exists_space_name**](SpacesApi.md#exists_space_name) | **GET** /spaces/exists/{name} | Space name exists
[**flag_space_item**](SpacesApi.md#flag_space_item) | **PUT** /spaces/flag/{itemId} | flag a space item
[**get_directory**](SpacesApi.md#get_directory) | **GET** /spaces/directory | Get the directory
[**get_flagged_items**](SpacesApi.md#get_flagged_items) | **GET** /spaces/flagged | Get flagged items
[**get_likes**](SpacesApi.md#get_likes) | **GET** /spaces/likes/{itemId} | Get the likes of an item
[**get_participants_import_data**](SpacesApi.md#get_participants_import_data) | **GET** /spaces/{spaceId}/participant/import/ | missing documentation
[**get_pending_participants**](SpacesApi.md#get_pending_participants) | **GET** /spaces/{id}/participants/pending | Get the pending participants of a space
[**get_pinned_topics**](SpacesApi.md#get_pinned_topics) | **GET** /spaces/{id}/pinnedTopics | Retrieve pinned topics
[**get_recent_searches**](SpacesApi.md#get_recent_searches) | **GET** /spaces/search/recent | Retrieve recent space searches
[**get_space_participants**](SpacesApi.md#get_space_participants) | **GET** /spaces/{id}/participants | Get the participants of a space
[**get_space_replies**](SpacesApi.md#get_space_replies) | **GET** /spaces/{spaceId}/topic/{topicId}/reply | Gets space replies
[**get_space_topics**](SpacesApi.md#get_space_topics) | **GET** /spaces/{spaceId}/topics | Gets space topics
[**get_spaces**](SpacesApi.md#get_spaces) | **GET** /spaces | Get the spaces
[**get_spaces_by_ids**](SpacesApi.md#get_spaces_by_ids) | **GET** /spaces/ids | Get the spaces by their ids
[**grant_space_acces**](SpacesApi.md#grant_space_acces) | **POST** /spaces/{spaceId}/participant/{participantId}/grant | grant access for a space
[**join_space**](SpacesApi.md#join_space) | **POST** /spaces/{id}/join | Join a space
[**leave_space**](SpacesApi.md#leave_space) | **POST** /spaces/{id}/leave | Leave a space
[**like_space_item**](SpacesApi.md#like_space_item) | **PUT** /spaces/like/{itemId} | Like a space item
[**pin_topic**](SpacesApi.md#pin_topic) | **PUT** /spaces/{topicId}/pin | Pin a topic
[**request_space_acces**](SpacesApi.md#request_space_acces) | **POST** /spaces/{spaceId}/participant/request | request access for a space
[**search_participants_to_add**](SpacesApi.md#search_participants_to_add) | **GET** /spaces/{id}/searchParticipantsToAdd | Finds participants to add to add to a space 
[**search_space_participants**](SpacesApi.md#search_space_participants) | **GET** /spaces/{id}/searchSpaceParticipants | Get the participants of a space
[**start_basic_spaces_search**](SpacesApi.md#start_basic_spaces_search) | **GET** /spaces/search/startBasic | starts a basic search in spaces
[**start_detailed_space_search**](SpacesApi.md#start_detailed_space_search) | **GET** /spaces/search/startDetailed | starts a detailed search in a space
[**unassign_labels**](SpacesApi.md#unassign_labels) | **DELETE** /spaces/{id}/labels/unassign | Unassign labels
[**unflag_space_item**](SpacesApi.md#unflag_space_item) | **PUT** /spaces/unflag/{itemId} | Unflag a space item
[**unlike_space_item**](SpacesApi.md#unlike_space_item) | **PUT** /spaces/unlike/{itemId} | Unlike a space item
[**unpin_topic**](SpacesApi.md#unpin_topic) | **PUT** /spaces/{topicId}/unpin | Unpin a topic
[**update_participant_in_space**](SpacesApi.md#update_participant_in_space) | **PUT** /spaces/{spaceId}/participant | Update participant
[**update_read_timestamp**](SpacesApi.md#update_read_timestamp) | **PUT** /spaces/{id}/updateTimestamp | Update read timestamp
[**update_space**](SpacesApi.md#update_space) | **PUT** /spaces/{id} | Update a space
[**update_space_reply**](SpacesApi.md#update_space_reply) | **PUT** /spaces/{spaceId}/topic/{topicId}/reply/{replyId} | Updates a space reply
[**update_space_topic**](SpacesApi.md#update_space_topic) | **PUT** /spaces/{spaceId}/topic/{topicId} | Updates a topic
[**update_topic_tags**](SpacesApi.md#update_topic_tags) | **PUT** /spaces/topic/{topicId}/updateTags | Update tags
[**v2_get_topic_with_replies**](SpacesApi.md#v2_get_topic_with_replies) | **GET** /spaces/{spaceId}/topic/{topicId} | Gets space replies and a topic
[**v2_remove_participants_from_space**](SpacesApi.md#v2_remove_participants_from_space) | **POST** /spaces/{id}/participant/remove | Removes participants from a space
[**v2_update_welcome_box_content**](SpacesApi.md#v2_update_welcome_box_content) | **PUT** /spaces/{spaceId}/welcomebox/{content} | Update content of welcome box


# **add_participants_to_space**
> List[object] add_participants_to_space(id, role, user_id)

Add Participant to Space

Add a participant to a space OauthScopes: WRITE_SPACE, MANAGE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space
    role = DEFAULT # str | The name of the role of the participant (default to DEFAULT)
    user_id = ['user_id_example'] # List[str] | The user id of the participant

    try:
        # Add Participant to Space
        api_response = api_instance.add_participants_to_space(id, role, user_id)
        print("The response of SpacesApi->add_participants_to_space:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->add_participants_to_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space | 
 **role** | **str**| The name of the role of the participant | [default to DEFAULT]
 **user_id** | [**List[str]**](str.md)| The user id of the participant | 

### Return type

**List[object]**

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added participant. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_recent_space_search**
> add_recent_space_search(scope, search_term, end_time=end_time, start_time=start_time)

Add recent search 

Add recent search of a client to search controller. OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    scope = 'scope_example' # str | The scope of the search.
    search_term = 'search_term_example' # str | The term to search for.
    end_time = '2013-10-20T19:20:30+01:00' # datetime | The end time. (optional)
    start_time = '2013-10-20T19:20:30+01:00' # datetime | The start time. (optional)

    try:
        # Add recent search 
        api_instance.add_recent_space_search(scope, search_term, end_time=end_time, start_time=start_time)
    except Exception as e:
        print("Exception when calling SpacesApi->add_recent_space_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the search. | 
 **search_term** | **str**| The term to search for. | 
 **end_time** | **datetime**| The end time. | [optional] 
 **start_time** | **datetime**| The start time. | [optional] 

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
**200** | Search successfully added. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_labels**
> List[LabelIds] assign_labels(id, labels)

Assign labels

Assign labels to space OauthScopes: WRITE_SPACE, ORGANIZE_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.label_ids import LabelIds
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space.
    labels = ['labels_example'] # List[str] | The labels to assign to the space

    try:
        # Assign labels
        api_response = api_instance.assign_labels(id, labels)
        print("The response of SpacesApi->assign_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->assign_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space. | 
 **labels** | [**List[str]**](str.md)| The labels to assign to the space | 

### Return type

[**List[LabelIds]**](LabelIds.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Labels successfully assigned |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_space_search**
> cancel_space_search(search_id)

Cancels a space search of a client.

Cancels a space search of a client. OauthScopes: WRITE_SPACE, MANAGE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    search_id = 'search_id_example' # str | The id of the search to cancel

    try:
        # Cancels a space search of a client.
        api_instance.cancel_space_search(search_id)
    except Exception as e:
        print("Exception when calling SpacesApi->cancel_space_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_id** | **str**| The id of the search to cancel | 

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
**200** | Search successfully cancelled. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_reply**
> SpaceReply create_reply(space_id, topic_id, attachments=attachments, complex=complex, content=content, form_meta_data=form_meta_data, mentioned_user=mentioned_user)

creates a reply to a topic

creates a reply to a topic OauthScopes: WRITE_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_reply import SpaceReply
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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | ID of the space
    topic_id = 'topic_id_example' # str | ID of the topic
    attachments = ['attachments_example'] # List[str] | the attached files (optional)
    complex = True # bool | complex or not (optional)
    content = 'content_example' # str | Content of the reply (optional)
    form_meta_data = 'form_meta_data_example' # str | formMetaData used in the reply (optional)
    mentioned_user = 'mentioned_user_example' # str | the user mentioned in the reply (optional)

    try:
        # creates a reply to a topic
        api_response = api_instance.create_reply(space_id, topic_id, attachments=attachments, complex=complex, content=content, form_meta_data=form_meta_data, mentioned_user=mentioned_user)
        print("The response of SpacesApi->create_reply:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->create_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| ID of the space | 
 **topic_id** | **str**| ID of the topic | 
 **attachments** | [**List[str]**](str.md)| the attached files | [optional] 
 **complex** | **bool**| complex or not | [optional] 
 **content** | **str**| Content of the reply | [optional] 
 **form_meta_data** | **str**| formMetaData used in the reply | [optional] 
 **mentioned_user** | **str**| the user mentioned in the reply | [optional] 

### Return type

[**SpaceReply**](SpaceReply.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns the created reply |  -  |
**400** | invalid input |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_space**
> object create_space(access_mode_type, name, role, status, type, description=description, large_picture_base64=large_picture_base64, small_picture_base64=small_picture_base64, tags=tags)

Create a space

Create a space OauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT

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
    api_instance = openapi_client.SpacesApi(api_client)
    access_mode_type = INTERNAL_ONLY # str | Access mode (default to INTERNAL_ONLY)
    name = 'name_example' # str | name of the space
    role = AUTHOR # str | role (default to AUTHOR)
    status = ENABLED # str | status (default to ENABLED)
    type = SECRET # str | type (default to SECRET)
    description = 'description_example' # str | description of the space (optional)
    large_picture_base64 = 'large_picture_base64_example' # str | large picture (optional)
    small_picture_base64 = 'small_picture_base64_example' # str | small picture (optional)
    tags = ['tags_example'] # List[str] | tags of the space (optional)

    try:
        # Create a space
        api_response = api_instance.create_space(access_mode_type, name, role, status, type, description=description, large_picture_base64=large_picture_base64, small_picture_base64=small_picture_base64, tags=tags)
        print("The response of SpacesApi->create_space:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->create_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_mode_type** | **str**| Access mode | [default to INTERNAL_ONLY]
 **name** | **str**| name of the space | 
 **role** | **str**| role | [default to AUTHOR]
 **status** | **str**| status | [default to ENABLED]
 **type** | **str**| type | [default to SECRET]
 **description** | **str**| description of the space | [optional] 
 **large_picture_base64** | **str**| large picture | [optional] 
 **small_picture_base64** | **str**| small picture | [optional] 
 **tags** | [**List[str]**](str.md)| tags of the space | [optional] 

### Return type

**object**

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Space successfully created. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_space_topic**
> SpaceTopic create_space_topic(space_id, subject, attachments=attachments, complex=complex, content=content, content_tags=content_tags, form_meta_data=form_meta_data, mentioned_user=mentioned_user, tags=tags)

creates a new space topic

creates a new space topic OauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_topic import SpaceTopic
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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | The ID of the space
    subject = 'subject_example' # str | The subject of the topic
    attachments = ['attachments_example'] # List[str] | the attached files (optional)
    complex = True # bool | complex or not (optional)
    content = 'content_example' # str | The content of this topic (optional)
    content_tags = ['content_tags_example'] # List[str] | the content tags (optional)
    form_meta_data = 'form_meta_data_example' # str | The formMetaData (optional)
    mentioned_user = 'mentioned_user_example' # str | A list of mentioned users (optional)
    tags = ['tags_example'] # List[str] | the tags (optional)

    try:
        # creates a new space topic
        api_response = api_instance.create_space_topic(space_id, subject, attachments=attachments, complex=complex, content=content, content_tags=content_tags, form_meta_data=form_meta_data, mentioned_user=mentioned_user, tags=tags)
        print("The response of SpacesApi->create_space_topic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->create_space_topic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| The ID of the space | 
 **subject** | **str**| The subject of the topic | 
 **attachments** | [**List[str]**](str.md)| the attached files | [optional] 
 **complex** | **bool**| complex or not | [optional] 
 **content** | **str**| The content of this topic | [optional] 
 **content_tags** | [**List[str]**](str.md)| the content tags | [optional] 
 **form_meta_data** | **str**| The formMetaData | [optional] 
 **mentioned_user** | **str**| A list of mentioned users | [optional] 
 **tags** | [**List[str]**](str.md)| the tags | [optional] 

### Return type

[**SpaceTopic**](SpaceTopic.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns the created topic |  -  |
**400** | something went wrong |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_space**
> delete_space(id)

Delete a space

Delete a space OauthScopes: WRITE_SPACE, MANAGE_SPACE, DELETE_SPACE_CONTENT

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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | id of the space

    try:
        # Delete a space
        api_instance.delete_space(id)
    except Exception as e:
        print("Exception when calling SpacesApi->delete_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id of the space | 

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
**200** | Space successfully deleted. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_space_item**
> delete_space_item(item_id)

deletes a space item

deletes a space item OauthScopes: WRITE_SPACE, DELETE_SPACE_CONTENT

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
    api_instance = openapi_client.SpacesApi(api_client)
    item_id = 'item_id_example' # str | the id of the spaceItem

    try:
        # deletes a space item
        api_instance.delete_space_item(item_id)
    except Exception as e:
        print("Exception when calling SpacesApi->delete_space_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| the id of the spaceItem | 

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
**200** | the deletion was a success |  -  |
**400** | invalid itemid |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deny_space_acces**
> deny_space_acces(space_id, participant_id, reason=reason)

Deny access for a space

Deny access for a space OauthScopes: WRITE_SPACE, MANAGE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | Id of the space
    participant_id = 'participant_id_example' # str | Id of the participant
    reason = 'reason_example' # str | Reason why the request has been denied (optional)

    try:
        # Deny access for a space
        api_instance.deny_space_acces(space_id, participant_id, reason=reason)
    except Exception as e:
        print("Exception when calling SpacesApi->deny_space_acces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| Id of the space | 
 **participant_id** | **str**| Id of the participant | 
 **reason** | **str**| Reason why the request has been denied | [optional] 

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
**200** | Access denied |  -  |
**400** | Invalid parameter |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exists_space_name**
> exists_space_name(name)

Space name exists

Find out if a space name already exists for non-secret spaces. OauthScopes: READ_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    name = 'name_example' # str | The name to check for existence.

    try:
        # Space name exists
        api_instance.exists_space_name(name)
    except Exception as e:
        print("Exception when calling SpacesApi->exists_space_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name to check for existence. | 

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
**200** | Check performed successfully, returning true if found, false if not found. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flag_space_item**
> flag_space_item(item_id)

flag a space item

flag a space item OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

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
    api_instance = openapi_client.SpacesApi(api_client)
    item_id = 'item_id_example' # str | the id of the item you want to flag

    try:
        # flag a space item
        api_instance.flag_space_item(item_id)
    except Exception as e:
        print("Exception when calling SpacesApi->flag_space_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| the id of the item you want to flag | 

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
**200** | Space item successfully flagged |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_directory**
> DirectoryResult get_directory(sort_by, sort_order, filter, query=query, page_pointer=page_pointer, number_of_results=number_of_results)

Get the directory

Get the directory by a search query in ordered way OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.directory_result import DirectoryResult
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
    api_instance = openapi_client.SpacesApi(api_client)
    sort_by = LAST_CONTENT # str | sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE (default to LAST_CONTENT)
    sort_order = ASCENDING # str | ascending or descending (default to ASCENDING)
    filter = NONE # str | filter for spaces (JOINED, REQUESTED, OPEN, CLOSED or NOT_JOINED_REQUESTED) (default to NONE)
    query = 'query_example' # str | some sort of query (optional)
    page_pointer = 'page_pointer_example' # str | page pointer, start with nothing and for next query use returned pointer (optional)
    number_of_results = 25 # float | number of results to return, 25 by default. (optional) (default to 25)

    try:
        # Get the directory
        api_response = api_instance.get_directory(sort_by, sort_order, filter, query=query, page_pointer=page_pointer, number_of_results=number_of_results)
        print("The response of SpacesApi->get_directory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_directory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort_by** | **str**| sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE | [default to LAST_CONTENT]
 **sort_order** | **str**| ascending or descending | [default to ASCENDING]
 **filter** | **str**| filter for spaces (JOINED, REQUESTED, OPEN, CLOSED or NOT_JOINED_REQUESTED) | [default to NONE]
 **query** | **str**| some sort of query | [optional] 
 **page_pointer** | **str**| page pointer, start with nothing and for next query use returned pointer | [optional] 
 **number_of_results** | **float**| number of results to return, 25 by default. | [optional] [default to 25]

### Return type

[**DirectoryResult**](DirectoryResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Spaces successfully retrieved. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_flagged_items**
> FlaggedItemsResult get_flagged_items(search_direction, timestamp, search_pointer=search_pointer, number_of_results=number_of_results)

Get flagged items

Get flagged items OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.flagged_items_result import FlaggedItemsResult
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
    api_instance = openapi_client.SpacesApi(api_client)
    search_direction = BEFORE # str | before or after the time stamp (default to BEFORE)
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | The timestamp according to which you want to retrieve the flagged items
    search_pointer = 'search_pointer_example' # str | The searchpointer for the search (initially not set). (optional)
    number_of_results = 25 # float | The number of results you want to retrieve. (optional) (default to 25)

    try:
        # Get flagged items
        api_response = api_instance.get_flagged_items(search_direction, timestamp, search_pointer=search_pointer, number_of_results=number_of_results)
        print("The response of SpacesApi->get_flagged_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_flagged_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_direction** | **str**| before or after the time stamp | [default to BEFORE]
 **timestamp** | **datetime**| The timestamp according to which you want to retrieve the flagged items | 
 **search_pointer** | **str**| The searchpointer for the search (initially not set). | [optional] 
 **number_of_results** | **float**| The number of results you want to retrieve. | [optional] [default to 25]

### Return type

[**FlaggedItemsResult**](FlaggedItemsResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Flagged items successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_likes**
> ParticipantsLikeResult get_likes(item_id, search_pointer=search_pointer, number_of_results=number_of_results)

Get the likes of an item

Get the likes of an item OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.participants_like_result import ParticipantsLikeResult
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
    api_instance = openapi_client.SpacesApi(api_client)
    item_id = 'item_id_example' # str | The id of the item to retrieve the likes from
    search_pointer = 'search_pointer_example' # str | The searchpointer for the search (initially not set). (optional)
    number_of_results = 25 # float | The number of results you want to retrieve. (optional) (default to 25)

    try:
        # Get the likes of an item
        api_response = api_instance.get_likes(item_id, search_pointer=search_pointer, number_of_results=number_of_results)
        print("The response of SpacesApi->get_likes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_likes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| The id of the item to retrieve the likes from | 
 **search_pointer** | **str**| The searchpointer for the search (initially not set). | [optional] 
 **number_of_results** | **float**| The number of results you want to retrieve. | [optional] [default to 25]

### Return type

[**ParticipantsLikeResult**](ParticipantsLikeResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Likes successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_participants_import_data**
> ParticipantsImportDataResult get_participants_import_data(space_id)

missing documentation

missing documentation OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.participants_import_data_result import ParticipantsImportDataResult
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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | missing documentation

    try:
        # missing documentation
        api_response = api_instance.get_participants_import_data(space_id)
        print("The response of SpacesApi->get_participants_import_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_participants_import_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| missing documentation | 

### Return type

[**ParticipantsImportDataResult**](ParticipantsImportDataResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | missing documentation |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pending_participants**
> ParticipantsSearchResult get_pending_participants(id, search_pointer=search_pointer, number_of_results=number_of_results)

Get the pending participants of a space

Get the pending participants of a space OauthScopes: WRITE_SPACE, MANAGE_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.participants_search_result import ParticipantsSearchResult
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space.
    search_pointer = 'search_pointer_example' # str | The search pointer (leave empty initially). (optional)
    number_of_results = 25 # float | number of results to return, 25 by default. (optional) (default to 25)

    try:
        # Get the pending participants of a space
        api_response = api_instance.get_pending_participants(id, search_pointer=search_pointer, number_of_results=number_of_results)
        print("The response of SpacesApi->get_pending_participants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_pending_participants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space. | 
 **search_pointer** | **str**| The search pointer (leave empty initially). | [optional] 
 **number_of_results** | **float**| number of results to return, 25 by default. | [optional] [default to 25]

### Return type

[**ParticipantsSearchResult**](ParticipantsSearchResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pending participants successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pinned_topics**
> List[SpacePinnedTopic] get_pinned_topics(id)

Retrieve pinned topics

Retrieve pinned topics of a space OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_pinned_topic import SpacePinnedTopic
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space.

    try:
        # Retrieve pinned topics
        api_response = api_instance.get_pinned_topics(id)
        print("The response of SpacesApi->get_pinned_topics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_pinned_topics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space. | 

### Return type

[**List[SpacePinnedTopic]**](SpacePinnedTopic.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pinned topics successfully retrieved (or none available).  |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recent_searches**
> List[SpacesSearchTermResult] get_recent_searches()

Retrieve recent space searches

Retrieve recent space searches for a user. OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.spaces_search_term_result import SpacesSearchTermResult
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
    api_instance = openapi_client.SpacesApi(api_client)

    try:
        # Retrieve recent space searches
        api_response = api_instance.get_recent_searches()
        print("The response of SpacesApi->get_recent_searches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_recent_searches: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[SpacesSearchTermResult]**](SpacesSearchTermResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recent searches successfully retrieved (or none available). |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_space_participants**
> ParticipantsSearchResult get_space_participants(id, sort_by, sort_order, filter_type, filter_value=filter_value, query=query, search_pointer=search_pointer, number_of_results=number_of_results)

Get the participants of a space

Get the participants of a space OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.participants_search_result import ParticipantsSearchResult
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space.
    sort_by = NAME # str | sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE (default to NAME)
    sort_order = ASCENDING # str | ascending or descending (default to ASCENDING)
    filter_type = 'filter_type_example' # str | filtertype for participants (ACCESS_TYPE, ROLE or STATE)
    filter_value = 'filter_value_example' # str | value for the filter (optional)
    query = 'query_example' # str | some sort of query (optional)
    search_pointer = 'search_pointer_example' # str | The search pointer (leave empty initially). (optional)
    number_of_results = 25 # float | number of results to return, 25 by default. (optional) (default to 25)

    try:
        # Get the participants of a space
        api_response = api_instance.get_space_participants(id, sort_by, sort_order, filter_type, filter_value=filter_value, query=query, search_pointer=search_pointer, number_of_results=number_of_results)
        print("The response of SpacesApi->get_space_participants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_space_participants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space. | 
 **sort_by** | **str**| sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE | [default to NAME]
 **sort_order** | **str**| ascending or descending | [default to ASCENDING]
 **filter_type** | **str**| filtertype for participants (ACCESS_TYPE, ROLE or STATE) | 
 **filter_value** | **str**| value for the filter | [optional] 
 **query** | **str**| some sort of query | [optional] 
 **search_pointer** | **str**| The search pointer (leave empty initially). | [optional] 
 **number_of_results** | **float**| number of results to return, 25 by default. | [optional] [default to 25]

### Return type

[**ParticipantsSearchResult**](ParticipantsSearchResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Participants successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_space_replies**
> SpaceReply get_space_replies(space_id, topic_id, search_direction, timestamp=timestamp, number_of_results=number_of_results)

Gets space replies

Gets a number of Space replies OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_reply import SpaceReply
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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | Id of the containing space
    topic_id = 'topic_id_example' # str | Id of the topic
    search_direction = BEFORE # str | Search before or after a certain timestamp (default to BEFORE)
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | Timestamp to start the search from (optional)
    number_of_results = 25 # float | The number of results that should be returned (optional) (default to 25)

    try:
        # Gets space replies
        api_response = api_instance.get_space_replies(space_id, topic_id, search_direction, timestamp=timestamp, number_of_results=number_of_results)
        print("The response of SpacesApi->get_space_replies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_space_replies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| Id of the containing space | 
 **topic_id** | **str**| Id of the topic | 
 **search_direction** | **str**| Search before or after a certain timestamp | [default to BEFORE]
 **timestamp** | **datetime**| Timestamp to start the search from | [optional] 
 **number_of_results** | **float**| The number of results that should be returned | [optional] [default to 25]

### Return type

[**SpaceReply**](SpaceReply.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the replies |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_space_topics**
> List[SpaceTopic] get_space_topics(space_id, search_direction, timestamp=timestamp, number_of_results=number_of_results)

Gets space topics

Gets a number of Space topics OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_topic import SpaceTopic
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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | Id of the space
    search_direction = BEFORE # str | Search before or after a certain timestamp (default to BEFORE)
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | Timestamp to start the search from (optional)
    number_of_results = 25 # float | The number of results that should be returned (optional) (default to 25)

    try:
        # Gets space topics
        api_response = api_instance.get_space_topics(space_id, search_direction, timestamp=timestamp, number_of_results=number_of_results)
        print("The response of SpacesApi->get_space_topics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_space_topics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| Id of the space | 
 **search_direction** | **str**| Search before or after a certain timestamp | [default to BEFORE]
 **timestamp** | **datetime**| Timestamp to start the search from | [optional] 
 **number_of_results** | **float**| The number of results that should be returned | [optional] [default to 25]

### Return type

[**List[SpaceTopic]**](SpaceTopic.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the the topics |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_spaces**
> object get_spaces(timestamp=timestamp, number_of_results=number_of_results)

Get the spaces

Get the spaces OauthScopes: READ_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | a beautiful timestamp (optional)
    number_of_results = 3.4 # float | the number of results you want (optional)

    try:
        # Get the spaces
        api_response = api_instance.get_spaces(timestamp=timestamp, number_of_results=number_of_results)
        print("The response of SpacesApi->get_spaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_spaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timestamp** | **datetime**| a beautiful timestamp | [optional] 
 **number_of_results** | **float**| the number of results you want | [optional] 

### Return type

**object**

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Spaces successfully retrieved. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_spaces_by_ids**
> object get_spaces_by_ids(ids)

Get the spaces by their ids

Get the spaces by their ids OauthScopes: READ_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    ids = ['ids_example'] # List[str] | an array of ids

    try:
        # Get the spaces by their ids
        api_response = api_instance.get_spaces_by_ids(ids)
        print("The response of SpacesApi->get_spaces_by_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->get_spaces_by_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List[str]**](str.md)| an array of ids | 

### Return type

**object**

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Spaces successfully retrieved. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grant_space_acces**
> grant_space_acces(space_id, participant_id)

grant access for a space

grant access for a space OauthScopes: WRITE_SPACE, MANAGE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | Id of the space
    participant_id = 'participant_id_example' # str | Id of the participant

    try:
        # grant access for a space
        api_instance.grant_space_acces(space_id, participant_id)
    except Exception as e:
        print("Exception when calling SpacesApi->grant_space_acces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| Id of the space | 
 **participant_id** | **str**| Id of the participant | 

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
**200** | access granted |  -  |
**400** | invalid parameter |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **join_space**
> object join_space(id)

Join a space

Join a space OauthScopes: WRITE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space

    try:
        # Join a space
        api_response = api_instance.join_space(id)
        print("The response of SpacesApi->join_space:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->join_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space | 

### Return type

**object**

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Space successfully joined |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **leave_space**
> leave_space(id)

Leave a space

Leave a space OauthScopes: WRITE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space

    try:
        # Leave a space
        api_instance.leave_space(id)
    except Exception as e:
        print("Exception when calling SpacesApi->leave_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space | 

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
**200** | Space successfully left |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **like_space_item**
> like_space_item(item_id)

Like a space item

Like a space item OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

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
    api_instance = openapi_client.SpacesApi(api_client)
    item_id = 'item_id_example' # str | The id of the item you want to like

    try:
        # Like a space item
        api_instance.like_space_item(item_id)
    except Exception as e:
        print("Exception when calling SpacesApi->like_space_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| The id of the item you want to like | 

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
**200** | Space item successfully liked |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pin_topic**
> pin_topic(topic_id, position)

Pin a topic

Pin a topic OauthScopes: WRITE_SPACE, MANAGE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    topic_id = 'topic_id_example' # str | The id of the topic
    position = 3.4 # float | The position to pin to

    try:
        # Pin a topic
        api_instance.pin_topic(topic_id, position)
    except Exception as e:
        print("Exception when calling SpacesApi->pin_topic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topic_id** | **str**| The id of the topic | 
 **position** | **float**| The position to pin to | 

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
**200** | Topic successfully pinned. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_space_acces**
> request_space_acces(space_id, reason=reason)

request access for a space

request access for a space OauthScopes: READ_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | Id of the space
    reason = 'reason_example' # str | Reason why the Access has been requested (optional)

    try:
        # request access for a space
        api_instance.request_space_acces(space_id, reason=reason)
    except Exception as e:
        print("Exception when calling SpacesApi->request_space_acces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| Id of the space | 
 **reason** | **str**| Reason why the Access has been requested | [optional] 

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
**200** | request is recieved |  -  |
**400** | invalid parameter |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_participants_to_add**
> List[AddParticipantsSearchResult] search_participants_to_add(id, query)

Finds participants to add to add to a space 

Finds participants to add to a space  OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.add_participants_search_result import AddParticipantsSearchResult
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space
    query = 'query_example' # str | The query 

    try:
        # Finds participants to add to add to a space 
        api_response = api_instance.search_participants_to_add(id, query)
        print("The response of SpacesApi->search_participants_to_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->search_participants_to_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space | 
 **query** | **str**| The query  | 

### Return type

[**List[AddParticipantsSearchResult]**](AddParticipantsSearchResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | participants successfully found |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_space_participants**
> List[ParticipantsSearchResultLarge] search_space_participants(id, query)

Get the participants of a space

Get the participants of a space OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.participants_search_result_large import ParticipantsSearchResultLarge
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space.
    query = 'query_example' # str | The query to search with. If searchpointer/hasMotre is returned, refine query.

    try:
        # Get the participants of a space
        api_response = api_instance.search_space_participants(id, query)
        print("The response of SpacesApi->search_space_participants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->search_space_participants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space. | 
 **query** | **str**| The query to search with. If searchpointer/hasMotre is returned, refine query. | 

### Return type

[**List[ParticipantsSearchResultLarge]**](ParticipantsSearchResultLarge.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Participants successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_basic_spaces_search**
> BasicSearchResult start_basic_spaces_search(scope, search_term, start_time=start_time, end_time=end_time, priority_spaces=priority_spaces)

starts a basic search in spaces

starts a basic search in spaces OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.basic_search_result import BasicSearchResult
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
    api_instance = openapi_client.SpacesApi(api_client)
    scope = 'scope_example' # str | the scope of the search
    search_term = 'search_term_example' # str | the term to search for
    start_time = '2013-10-20T19:20:30+01:00' # datetime | the starttime (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | the end time (optional)
    priority_spaces = ['priority_spaces_example'] # List[str] | list of prioritized spaces (optional)

    try:
        # starts a basic search in spaces
        api_response = api_instance.start_basic_spaces_search(scope, search_term, start_time=start_time, end_time=end_time, priority_spaces=priority_spaces)
        print("The response of SpacesApi->start_basic_spaces_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->start_basic_spaces_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| the scope of the search | 
 **search_term** | **str**| the term to search for | 
 **start_time** | **datetime**| the starttime | [optional] 
 **end_time** | **datetime**| the end time | [optional] 
 **priority_spaces** | [**List[str]**](str.md)| list of prioritized spaces | [optional] 

### Return type

[**BasicSearchResult**](BasicSearchResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | search successfully executed |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_detailed_space_search**
> List[SpaceSearchResultDetailedBack] start_detailed_space_search(scope, search_term, space_id, start_time=start_time, end_time=end_time, search_id=search_id)

starts a detailed search in a space

starts a detailed search in a space OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_search_result_detailed_back import SpaceSearchResultDetailedBack
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
    api_instance = openapi_client.SpacesApi(api_client)
    scope = 'scope_example' # str | the scope of the search
    search_term = 'search_term_example' # str | the term to search for
    space_id = 'space_id_example' # str | missing documentation
    start_time = '2013-10-20T19:20:30+01:00' # datetime | the starttime (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | the end time (optional)
    search_id = 'search_id_example' # str | missing documentation (optional)

    try:
        # starts a detailed search in a space
        api_response = api_instance.start_detailed_space_search(scope, search_term, space_id, start_time=start_time, end_time=end_time, search_id=search_id)
        print("The response of SpacesApi->start_detailed_space_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->start_detailed_space_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| the scope of the search | 
 **search_term** | **str**| the term to search for | 
 **space_id** | **str**| missing documentation | 
 **start_time** | **datetime**| the starttime | [optional] 
 **end_time** | **datetime**| the end time | [optional] 
 **search_id** | **str**| missing documentation | [optional] 

### Return type

[**List[SpaceSearchResultDetailedBack]**](SpaceSearchResultDetailedBack.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | search successfully executed |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unassign_labels**
> List[LabelIds] unassign_labels(id, label_ids)

Unassign labels

Unassign labels from a space OauthScopes: WRITE_SPACE, ORGANIZE_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.label_ids import LabelIds
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space.
    label_ids = ['label_ids_example'] # List[str] | missing documentation

    try:
        # Unassign labels
        api_response = api_instance.unassign_labels(id, label_ids)
        print("The response of SpacesApi->unassign_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->unassign_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space. | 
 **label_ids** | [**List[str]**](str.md)| missing documentation | 

### Return type

[**List[LabelIds]**](LabelIds.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Labels successfully unassigned |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unflag_space_item**
> unflag_space_item(item_id)

Unflag a space item

Unflag a space item OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

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
    api_instance = openapi_client.SpacesApi(api_client)
    item_id = 'item_id_example' # str | the id of the item you want to unflag

    try:
        # Unflag a space item
        api_instance.unflag_space_item(item_id)
    except Exception as e:
        print("Exception when calling SpacesApi->unflag_space_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| the id of the item you want to unflag | 

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
**200** | Space item successfully unflagged. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlike_space_item**
> unlike_space_item(item_id)

Unlike a space item

Unlike a space item OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

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
    api_instance = openapi_client.SpacesApi(api_client)
    item_id = 'item_id_example' # str | The id of the item you want to unlike

    try:
        # Unlike a space item
        api_instance.unlike_space_item(item_id)
    except Exception as e:
        print("Exception when calling SpacesApi->unlike_space_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| The id of the item you want to unlike | 

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
**200** | Space item successfully unliked. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unpin_topic**
> unpin_topic(topic_id)

Unpin a topic

Unpin a topic OauthScopes: WRITE_SPACE, MANAGE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    topic_id = 'topic_id_example' # str | The id of the topic to unpin

    try:
        # Unpin a topic
        api_instance.unpin_topic(topic_id)
    except Exception as e:
        print("Exception when calling SpacesApi->unpin_topic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topic_id** | **str**| The id of the topic to unpin | 

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
**200** | Topic successfully unpinned. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_participant_in_space**
> update_participant_in_space(space_id, role, user_id)

Update participant

Update participant in space OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | Id of the space
    role = 'role_example' # str | updated role of participant
    user_id = 'user_id_example' # str | The id of the participant to update

    try:
        # Update participant
        api_instance.update_participant_in_space(space_id, role, user_id)
    except Exception as e:
        print("Exception when calling SpacesApi->update_participant_in_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| Id of the space | 
 **role** | **str**| updated role of participant | 
 **user_id** | **str**| The id of the participant to update | 

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
**200** | Role successfully updated |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_read_timestamp**
> update_read_timestamp(id, timestamp)

Update read timestamp

Update read timestamp OauthScopes: READ_SPACE, WRITE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | Id of a space
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | The new timestamp

    try:
        # Update read timestamp
        api_instance.update_read_timestamp(id, timestamp)
    except Exception as e:
        print("Exception when calling SpacesApi->update_read_timestamp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id of a space | 
 **timestamp** | **datetime**| The new timestamp | 

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
**200** | Read timestamp successfully updated. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_space**
> object update_space(id, access_mode_type=access_mode_type, description=description, large_picture_base64=large_picture_base64, name=name, owner_id=owner_id, role=role, small_picture_base64=small_picture_base64, status=status, tags=tags, type=type)

Update a space

Update a space OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | id of the space
    access_mode_type = NO_CHANGE # str | Access mode (optional) (default to NO_CHANGE)
    description = 'description_example' # str | description of the space (optional)
    large_picture_base64 = 'large_picture_base64_example' # str | large picture (optional)
    name = 'name_example' # str | name of the space (optional)
    owner_id = 'owner_id_example' # str | ownerid of the space (optional)
    role = NO_CHANGE # str | role (optional) (default to NO_CHANGE)
    small_picture_base64 = 'small_picture_base64_example' # str | small picture (optional)
    status = ENABLED # str | status (optional) (default to ENABLED)
    tags = ['tags_example'] # List[str] | tags of the space (optional)
    type = NO_CHANGE # str | type (optional) (default to NO_CHANGE)

    try:
        # Update a space
        api_response = api_instance.update_space(id, access_mode_type=access_mode_type, description=description, large_picture_base64=large_picture_base64, name=name, owner_id=owner_id, role=role, small_picture_base64=small_picture_base64, status=status, tags=tags, type=type)
        print("The response of SpacesApi->update_space:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->update_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id of the space | 
 **access_mode_type** | **str**| Access mode | [optional] [default to NO_CHANGE]
 **description** | **str**| description of the space | [optional] 
 **large_picture_base64** | **str**| large picture | [optional] 
 **name** | **str**| name of the space | [optional] 
 **owner_id** | **str**| ownerid of the space | [optional] 
 **role** | **str**| role | [optional] [default to NO_CHANGE]
 **small_picture_base64** | **str**| small picture | [optional] 
 **status** | **str**| status | [optional] [default to ENABLED]
 **tags** | [**List[str]**](str.md)| tags of the space | [optional] 
 **type** | **str**| type | [optional] [default to NO_CHANGE]

### Return type

**object**

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Space successfully updated. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_space_reply**
> SpaceReply update_space_reply(space_id, topic_id, reply_id, attachments=attachments, complex=complex, content=content, form_meta_data=form_meta_data, mentioned_users=mentioned_users)

Updates a space reply

Updates a space reply OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_reply import SpaceReply
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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | ID of the space
    topic_id = 'topic_id_example' # str | ID of the topic
    reply_id = 'reply_id_example' # str | id of the reply
    attachments = ['attachments_example'] # List[str] | the attached files (optional)
    complex = True # bool | complex or not (optional)
    content = 'content_example' # str | the content of the reply (optional)
    form_meta_data = 'form_meta_data_example' # str | formMetaData of the reply (optional)
    mentioned_users = ['mentioned_users_example'] # List[str] | the mentioned users in the reply (optional)

    try:
        # Updates a space reply
        api_response = api_instance.update_space_reply(space_id, topic_id, reply_id, attachments=attachments, complex=complex, content=content, form_meta_data=form_meta_data, mentioned_users=mentioned_users)
        print("The response of SpacesApi->update_space_reply:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->update_space_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| ID of the space | 
 **topic_id** | **str**| ID of the topic | 
 **reply_id** | **str**| id of the reply | 
 **attachments** | [**List[str]**](str.md)| the attached files | [optional] 
 **complex** | **bool**| complex or not | [optional] 
 **content** | **str**| the content of the reply | [optional] 
 **form_meta_data** | **str**| formMetaData of the reply | [optional] 
 **mentioned_users** | [**List[str]**](str.md)| the mentioned users in the reply | [optional] 

### Return type

[**SpaceReply**](SpaceReply.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated space reply |  -  |
**400** | Invalid input |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_space_topic**
> SpaceTopic update_space_topic(space_id, topic_id, attachments=attachments, complex=complex, content=content, content_tags=content_tags, form_meta_data=form_meta_data, mentioned_users=mentioned_users, subject=subject, tags=tags)

Updates a topic

Updates a topic OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_topic import SpaceTopic
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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | ID of the space
    topic_id = 'topic_id_example' # str | Id of the topic to update
    attachments = ['attachments_example'] # List[str] | the attached files (optional)
    complex = True # bool | complex or not (optional)
    content = 'content_example' # str | content of the topic (optional)
    content_tags = ['content_tags_example'] # List[str] | the content tags (optional)
    form_meta_data = 'form_meta_data_example' # str | formMetaData to update (optional)
    mentioned_users = ['mentioned_users_example'] # List[str] | the updated mentioned users (optional)
    subject = 'subject_example' # str | the subject of the topic (optional)
    tags = ['tags_example'] # List[str] | the tags (optional)

    try:
        # Updates a topic
        api_response = api_instance.update_space_topic(space_id, topic_id, attachments=attachments, complex=complex, content=content, content_tags=content_tags, form_meta_data=form_meta_data, mentioned_users=mentioned_users, subject=subject, tags=tags)
        print("The response of SpacesApi->update_space_topic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->update_space_topic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| ID of the space | 
 **topic_id** | **str**| Id of the topic to update | 
 **attachments** | [**List[str]**](str.md)| the attached files | [optional] 
 **complex** | **bool**| complex or not | [optional] 
 **content** | **str**| content of the topic | [optional] 
 **content_tags** | [**List[str]**](str.md)| the content tags | [optional] 
 **form_meta_data** | **str**| formMetaData to update | [optional] 
 **mentioned_users** | [**List[str]**](str.md)| the updated mentioned users | [optional] 
 **subject** | **str**| the subject of the topic | [optional] 
 **tags** | [**List[str]**](str.md)| the tags | [optional] 

### Return type

[**SpaceTopic**](SpaceTopic.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated space topic |  -  |
**400** | Http_bad_request |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_topic_tags**
> SpaceTopic update_topic_tags(topic_id, tags)

Update tags

Update the tags of a topic   OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_topic import SpaceTopic
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
    api_instance = openapi_client.SpacesApi(api_client)
    topic_id = 'topic_id_example' # str | The id of the topic
    tags = ['tags_example'] # List[str] | The tags to update

    try:
        # Update tags
        api_response = api_instance.update_topic_tags(topic_id, tags)
        print("The response of SpacesApi->update_topic_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->update_topic_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topic_id** | **str**| The id of the topic | 
 **tags** | [**List[str]**](str.md)| The tags to update | 

### Return type

[**SpaceTopic**](SpaceTopic.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | tags successfully updated |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_get_topic_with_replies**
> SpaceTopicWithReplies v2_get_topic_with_replies(space_id, topic_id, number_of_replies=number_of_replies)

Gets space replies and a topic

Gets a number of Space replies with a matching topic OauthScopes: READ_SPACE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.space_topic_with_replies import SpaceTopicWithReplies
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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | Id of the topic
    topic_id = 'topic_id_example' # str | ID of the topic
    number_of_replies = 25 # float | The number of replies (optional) (default to 25)

    try:
        # Gets space replies and a topic
        api_response = api_instance.v2_get_topic_with_replies(space_id, topic_id, number_of_replies=number_of_replies)
        print("The response of SpacesApi->v2_get_topic_with_replies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->v2_get_topic_with_replies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| Id of the topic | 
 **topic_id** | **str**| ID of the topic | 
 **number_of_replies** | **float**| The number of replies | [optional] [default to 25]

### Return type

[**SpaceTopicWithReplies**](SpaceTopicWithReplies.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the replies with a topic |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_remove_participants_from_space**
> v2_remove_participants_from_space(id, user_ids)

Removes participants from a space

removes Participants from a space OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    id = 'id_example' # str | The id of the space
    user_ids = ['user_ids_example'] # List[str] | The ids of the participants to remove 

    try:
        # Removes participants from a space
        api_instance.v2_remove_participants_from_space(id, user_ids)
    except Exception as e:
        print("Exception when calling SpacesApi->v2_remove_participants_from_space: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the space | 
 **user_ids** | [**List[str]**](str.md)| The ids of the participants to remove  | 

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
**200** | participants successfully removed |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_update_welcome_box_content**
> v2_update_welcome_box_content(space_id, content, display_welcome_box=display_welcome_box)

Update content of welcome box

Update content of the welcome box of a space OauthScopes: MANAGE_SPACE, WRITE_SPACE

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
    api_instance = openapi_client.SpacesApi(api_client)
    space_id = 'space_id_example' # str | Id of the space
    content = 'content_example' # str | The new content
    display_welcome_box = False # bool | True, false, default:false (optional) (default to False)

    try:
        # Update content of welcome box
        api_instance.v2_update_welcome_box_content(space_id, content, display_welcome_box=display_welcome_box)
    except Exception as e:
        print("Exception when calling SpacesApi->v2_update_welcome_box_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space_id** | **str**| Id of the space | 
 **content** | **str**| The new content | 
 **display_welcome_box** | **bool**| True, false, default:false | [optional] [default to False]

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
**200** | missing documentation |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

