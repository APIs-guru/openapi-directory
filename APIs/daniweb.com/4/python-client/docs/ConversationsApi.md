# openapi_client.ConversationsApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversations_id_get**](ConversationsApi.md#conversations_id_get) | **GET** /conversations/{ID} | 
[**conversations_id_messages_get**](ConversationsApi.md#conversations_id_messages_get) | **GET** /conversations/{ID}/messages | 
[**conversations_id_messages_post**](ConversationsApi.md#conversations_id_messages_post) | **POST** /conversations/{ID}/messages | 
[**conversations_id_schedules_post**](ConversationsApi.md#conversations_id_schedules_post) | **POST** /conversations/{ID}/schedules | 
[**conversations_id_searches_post**](ConversationsApi.md#conversations_id_searches_post) | **POST** /conversations/{ID}/searches | 
[**conversations_id_statuses_get**](ConversationsApi.md#conversations_id_statuses_get) | **GET** /conversations/{ID}/statuses | 
[**conversations_id_statuses_patch**](ConversationsApi.md#conversations_id_statuses_patch) | **PATCH** /conversations/{ID}/statuses | 
[**conversations_schedules_post**](ConversationsApi.md#conversations_schedules_post) | **POST** /conversations/schedules | 
[**conversations_searches_post**](ConversationsApi.md#conversations_searches_post) | **POST** /conversations/searches | 
[**conversations_statuses_get**](ConversationsApi.md#conversations_statuses_get) | **GET** /conversations/statuses | 


# **conversations_id_get**
> EndpointGetConversationsID conversations_id_get(id)



Fetch an array of conversations. You can only retrieve conversations with users who exist within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_conversations_id import EndpointGetConversationsID
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.conversations_id_get(id)
        print("The response of ConversationsApi->conversations_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetConversationsID**](EndpointGetConversationsID.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_id_messages_get**
> EndpointGetConversationsIDMessages conversations_id_messages_get(id, gt_message_id=gt_message_id, exclude_self=exclude_self, var_date=var_date, bubbled=bubbled, record_seen=record_seen, timeout=timeout, offset=offset, limit=limit)



Retrieve the last {limit} messages in the conversation, provided the conversations exist within the current access token's bubble. If a timeout is 0 or greater, the batch is sorted oldest first. Otherwise, if timeout is a negative number, the transcript is paginated and sorted newest first. Specify a timeout for long polling (which delays the server sending back results for up to n seconds or until results are available, whichever comes first), or default to 0 for immediate results. Optionally record your status as online along with sharing the latest message you've seen with the other conversation participant. Optionally specify a gt_message_id to retrieve only messages with an ID greater than that specified (such as greater than the latest message ID received in the last poll). Optionally only poll for messages authored by the other person in the conversation, and echo messages authored by you when sending, for a perceived increase in performance. Optionally only retrieve messages that were posted from within the current access token's bubble. Optionally specify a date formatted as YYYY-MM-DD to retrieve a transcript of messages from a single day. When record_seen is set to true, the new message count for the conversation is reset to zero.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_conversations_id_messages import EndpointGetConversationsIDMessages
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    id = 56 # int | 
    gt_message_id = 56 # int |  (optional)
    exclude_self = False # bool |  (optional) (default to False)
    var_date = 'var_date_example' # str |  (optional)
    bubbled = False # bool |  (optional) (default to False)
    record_seen = False # bool |  (optional) (default to False)
    timeout = 0 # int |  (optional) (default to 0)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.conversations_id_messages_get(id, gt_message_id=gt_message_id, exclude_self=exclude_self, var_date=var_date, bubbled=bubbled, record_seen=record_seen, timeout=timeout, offset=offset, limit=limit)
        print("The response of ConversationsApi->conversations_id_messages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_id_messages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **gt_message_id** | **int**|  | [optional] 
 **exclude_self** | **bool**|  | [optional] [default to False]
 **var_date** | **str**|  | [optional] 
 **bubbled** | **bool**|  | [optional] [default to False]
 **record_seen** | **bool**|  | [optional] [default to False]
 **timeout** | **int**|  | [optional] [default to 0]
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetConversationsIDMessages**](EndpointGetConversationsIDMessages.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_id_messages_post**
> EndpointPostConversationsIDMessages conversations_id_messages_post(id, text_raw, bubbled=bubbled, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values, text_emoticons=text_emoticons)



Post a message to a conversation that is with a user who exists within the current access token's bubble. Optionally specify whether emoticons should be parsed into smiley images. Optionally specify whether the message should be bubbled within the app. Additionally, optionally attach a single metadata key/value pair to the message upon submission.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_conversations_id_messages import EndpointPostConversationsIDMessages
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    id = 56 # int | 
    text_raw = 'text_raw_example' # str | 
    bubbled = False # bool |  (optional) (default to False)
    metadata_0_key = 'metadata_0_key_example' # str |  (optional)
    metadata_0_privacy = 'metadata_0_privacy_example' # str |  (optional)
    metadata_0_values = ['metadata_0_values_example'] # List[str] |  (optional)
    metadata_1_key = 'metadata_1_key_example' # str |  (optional)
    metadata_1_privacy = 'metadata_1_privacy_example' # str |  (optional)
    metadata_1_values = ['metadata_1_values_example'] # List[str] |  (optional)
    metadata_2_key = 'metadata_2_key_example' # str |  (optional)
    metadata_2_privacy = 'metadata_2_privacy_example' # str |  (optional)
    metadata_2_values = ['metadata_2_values_example'] # List[str] |  (optional)
    text_emoticons = False # bool |  (optional) (default to False)

    try:
        api_response = api_instance.conversations_id_messages_post(id, text_raw, bubbled=bubbled, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values, text_emoticons=text_emoticons)
        print("The response of ConversationsApi->conversations_id_messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_id_messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **text_raw** | **str**|  | 
 **bubbled** | **bool**|  | [optional] [default to False]
 **metadata_0_key** | **str**|  | [optional] 
 **metadata_0_privacy** | **str**|  | [optional] 
 **metadata_0_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_1_key** | **str**|  | [optional] 
 **metadata_1_privacy** | **str**|  | [optional] 
 **metadata_1_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_2_key** | **str**|  | [optional] 
 **metadata_2_privacy** | **str**|  | [optional] 
 **metadata_2_values** | [**List[str]**](str.md)|  | [optional] 
 **text_emoticons** | **bool**|  | [optional] [default to False]

### Return type

[**EndpointPostConversationsIDMessages**](EndpointPostConversationsIDMessages.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_id_schedules_post**
> EndpointPostConversationsIDSchedules conversations_id_schedules_post(id, var_date=var_date, limit=limit, offset=offset, roll_up=roll_up, sort=sort)



Paginated report of information about messages contributed by conversation and date. Only conversations that exist within the current access token's bubble are considered in the calculations. Optionally roll up all conversations to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages within the conversation(s).

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_conversations_id_schedules import EndpointPostConversationsIDSchedules
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    id = [56] # List[int] | 
    var_date = 'var_date_example' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    offset = 0 # int |  (optional) (default to 0)
    roll_up = False # bool |  (optional) (default to False)
    sort = desc # str |  (optional) (default to desc)

    try:
        api_response = api_instance.conversations_id_schedules_post(id, var_date=var_date, limit=limit, offset=offset, roll_up=roll_up, sort=sort)
        print("The response of ConversationsApi->conversations_id_schedules_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_id_schedules_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 
 **var_date** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **offset** | **int**|  | [optional] [default to 0]
 **roll_up** | **bool**|  | [optional] [default to False]
 **sort** | **str**|  | [optional] [default to desc]

### Return type

[**EndpointPostConversationsIDSchedules**](EndpointPostConversationsIDSchedules.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_id_searches_post**
> EndpointPostConversationsIDSearches conversations_id_searches_post(id, query, var_date=var_date, gt_message_id=gt_message_id, limit=limit, offset=offset)



Fetch messages authored from within specified conversations that match a query string passed in as a search parameter along with their relevancy score.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_conversations_id_searches import EndpointPostConversationsIDSearches
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    id = [56] # List[int] | 
    query = 'query_example' # str | 
    var_date = 'var_date_example' # str |  (optional)
    gt_message_id = 56 # int |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    offset = 0 # int |  (optional) (default to 0)

    try:
        api_response = api_instance.conversations_id_searches_post(id, query, var_date=var_date, gt_message_id=gt_message_id, limit=limit, offset=offset)
        print("The response of ConversationsApi->conversations_id_searches_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_id_searches_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 
 **query** | **str**|  | 
 **var_date** | **str**|  | [optional] 
 **gt_message_id** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**EndpointPostConversationsIDSearches**](EndpointPostConversationsIDSearches.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_id_statuses_get**
> EndpointGetConversationsIDStatuses conversations_id_statuses_get(id)



Status information about your current relationship with one or more conversations you participating in, provided the conversations exist within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_conversations_id_statuses import EndpointGetConversationsIDStatuses
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.conversations_id_statuses_get(id)
        print("The response of ConversationsApi->conversations_id_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_id_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetConversationsIDStatuses**](EndpointGetConversationsIDStatuses.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_id_statuses_patch**
> EndpointPatchConversationsIDStatuses conversations_id_statuses_patch(id, archived_status)



Archive or unarchive a conversation that is with a user who exists within the same bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_patch_conversations_id_statuses import EndpointPatchConversationsIDStatuses
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    id = 56 # int | 
    archived_status = True # bool | 

    try:
        api_response = api_instance.conversations_id_statuses_patch(id, archived_status)
        print("The response of ConversationsApi->conversations_id_statuses_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_id_statuses_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **archived_status** | **bool**|  | 

### Return type

[**EndpointPatchConversationsIDStatuses**](EndpointPatchConversationsIDStatuses.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_schedules_post**
> EndpointPostConversationsSchedules conversations_schedules_post(var_date=var_date, limit=limit, offset=offset, roll_up=roll_up, sort=sort)



Paginated report of information about messages contributed by conversation and date. Only conversations that exist within the current access token's bubble are considered in the calculations. Optionally roll up all conversations to retrieve one record per date. Optionally specify a date formatted as YYYY-MM-DD to retrieve information just from the single date, along with additional navigational information, which is useful when generating a transcript for a single day and wanting to reference the previous and next days there were messages.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_conversations_schedules import EndpointPostConversationsSchedules
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    var_date = 'var_date_example' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    offset = 0 # int |  (optional) (default to 0)
    roll_up = False # bool |  (optional) (default to False)
    sort = desc # str |  (optional) (default to desc)

    try:
        api_response = api_instance.conversations_schedules_post(var_date=var_date, limit=limit, offset=offset, roll_up=roll_up, sort=sort)
        print("The response of ConversationsApi->conversations_schedules_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_schedules_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **offset** | **int**|  | [optional] [default to 0]
 **roll_up** | **bool**|  | [optional] [default to False]
 **sort** | **str**|  | [optional] [default to desc]

### Return type

[**EndpointPostConversationsSchedules**](EndpointPostConversationsSchedules.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_searches_post**
> EndpointPostConversationsSearches conversations_searches_post(query, var_date=var_date, gt_message_id=gt_message_id, limit=limit, offset=offset)



Fetch messages authored from within the current bubble that match a query string passed in as a search parameter along with their relevancy score.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_conversations_searches import EndpointPostConversationsSearches
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    query = 'query_example' # str | 
    var_date = 'var_date_example' # str |  (optional)
    gt_message_id = 56 # int |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    offset = 0 # int |  (optional) (default to 0)

    try:
        api_response = api_instance.conversations_searches_post(query, var_date=var_date, gt_message_id=gt_message_id, limit=limit, offset=offset)
        print("The response of ConversationsApi->conversations_searches_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_searches_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 
 **var_date** | **str**|  | [optional] 
 **gt_message_id** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**EndpointPostConversationsSearches**](EndpointPostConversationsSearches.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **conversations_statuses_get**
> EndpointGetConversationsStatuses conversations_statuses_get(filter=filter, include_archived=include_archived, bubbled=bubbled, offset=offset, limit=limit)



Retrieve conversations that you are participating in with users who exists within the same bubble, along with your current relationship with the conversations. The user_a / user_b properties of the conversation are populated with as much data as is available if the user is not you. If the user is you, only the id field is populated. There is a separate status endpoint to retrieve relationship information for individual conversations. Optionally filter: 'new' to only show conversations with messages you haven't yet seen; 'introductions' to only show conversations where users have introduced themselves to you but nothing more; 'unreplied' to only show conversations where you have introduced yourself to other users but nothing more; 'notifications' to show all conversations where the other user was the last person to message. Optionally only show conversations engaging within the existing access token's bubble. This report is limited to your ~500-1000 most recently active conversations you've engaged in within current the access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_conversations_statuses import EndpointGetConversationsStatuses
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConversationsApi(api_client)
    filter = 'filter_example' # str |  (optional)
    include_archived = False # bool |  (optional) (default to False)
    bubbled = False # bool |  (optional) (default to False)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.conversations_statuses_get(filter=filter, include_archived=include_archived, bubbled=bubbled, offset=offset, limit=limit)
        print("The response of ConversationsApi->conversations_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**|  | [optional] 
 **include_archived** | **bool**|  | [optional] [default to False]
 **bubbled** | **bool**|  | [optional] [default to False]
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetConversationsStatuses**](EndpointGetConversationsStatuses.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

