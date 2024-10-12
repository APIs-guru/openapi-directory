# openapi_client.MessageApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_message_api_v1_app_app_id_msg_post**](MessageApi.md#create_message_api_v1_app_app_id_msg_post) | **POST** /api/v1/app/{app_id}/msg/ | Create Message
[**expunge_message_payload_api_v1_app_app_id_msg_msg_id_content_delete**](MessageApi.md#expunge_message_payload_api_v1_app_app_id_msg_msg_id_content_delete) | **DELETE** /api/v1/app/{app_id}/msg/{msg_id}/content/ | Delete message payload
[**get_message_api_v1_app_app_id_msg_msg_id_get**](MessageApi.md#get_message_api_v1_app_app_id_msg_msg_id_get) | **GET** /api/v1/app/{app_id}/msg/{msg_id}/ | Get Message
[**list_messages_api_v1_app_app_id_msg_get**](MessageApi.md#list_messages_api_v1_app_app_id_msg_get) | **GET** /api/v1/app/{app_id}/msg/ | List Messages


# **create_message_api_v1_app_app_id_msg_post**
> MessageOut create_message_api_v1_app_app_id_msg_post(app_id, message_in, with_content=with_content, idempotency_key=idempotency_key)

Create Message

Creates a new message and dispatches it to all of the application's endpoints.  The `eventId` is an optional custom unique ID. It's verified to be unique only up to a day, after that no verification will be made. If a message with the same `eventId` already exists for any application in your environment, a 409 conflict error will be returned.  The `eventType` indicates the type and schema of the event. All messages of a certain `eventType` are expected to have the same schema. Endpoints can choose to only listen to specific event types. Messages can also have `channels`, which similar to event types let endpoints filter by them. Unlike event types, messages can have multiple channels, and channels don't imply a specific message content or schema.  The `payload` property is the webhook's body (the actual webhook message). Svix supports payload sizes of up to ~350kb, though it's generally a good idea to keep webhook payloads small, probably no larger than 40kb.  The optional `application` property will be used to create an application if the application referenced in the path does not exist. If it does then this property is ignored.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.message_in import MessageIn
from openapi_client.models.message_out import MessageOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessageApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    message_in = openapi_client.MessageIn() # MessageIn | 
    with_content = True # bool |  (optional) (default to True)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Create Message
        api_response = api_instance.create_message_api_v1_app_app_id_msg_post(app_id, message_in, with_content=with_content, idempotency_key=idempotency_key)
        print("The response of MessageApi->create_message_api_v1_app_app_id_msg_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageApi->create_message_api_v1_app_app_id_msg_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **message_in** | [**MessageIn**](MessageIn.md)|  | 
 **with_content** | **bool**|  | [optional] [default to True]
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**MessageOut**](MessageOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**413** | Request Entity Too Large |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expunge_message_payload_api_v1_app_app_id_msg_msg_id_content_delete**
> expunge_message_payload_api_v1_app_app_id_msg_msg_id_content_delete(msg_id, app_id, idempotency_key=idempotency_key)

Delete message payload

Delete the given message's payload. Useful in cases when a message was accidentally sent with sensitive content.  The message can't be replayed or resent once its payload has been deleted or expired.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessageApi(api_client)
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Delete message payload
        api_instance.expunge_message_payload_api_v1_app_app_id_msg_msg_id_content_delete(msg_id, app_id, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling MessageApi->expunge_message_payload_api_v1_app_app_id_msg_msg_id_content_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **msg_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_message_api_v1_app_app_id_msg_msg_id_get**
> MessageOut get_message_api_v1_app_app_id_msg_msg_id_get(msg_id, app_id, idempotency_key=idempotency_key)

Get Message

Get a message by its ID or eventID.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.message_out import MessageOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessageApi(api_client)
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Message
        api_response = api_instance.get_message_api_v1_app_app_id_msg_msg_id_get(msg_id, app_id, idempotency_key=idempotency_key)
        print("The response of MessageApi->get_message_api_v1_app_app_id_msg_msg_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageApi->get_message_api_v1_app_app_id_msg_msg_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **msg_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**MessageOut**](MessageOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_messages_api_v1_app_app_id_msg_get**
> ListResponseMessageOut list_messages_api_v1_app_app_id_msg_get(app_id, iterator=iterator, limit=limit, event_types=event_types, channel=channel, before=before, after=after, idempotency_key=idempotency_key)

List Messages

List all of the application's messages.  The `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed. The `after` parameter lets you filter all items created after a certain date and is ignored if an iterator is passed. `before` and `after` cannot be used simultaneously.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_message_out import ListResponseMessageOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessageApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    iterator = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    event_types = ['event_types_example'] # List[str] |  (optional)
    channel = 'project_1337' # str |  (optional)
    before = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    after = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Messages
        api_response = api_instance.list_messages_api_v1_app_app_id_msg_get(app_id, iterator=iterator, limit=limit, event_types=event_types, channel=channel, before=before, after=after, idempotency_key=idempotency_key)
        print("The response of MessageApi->list_messages_api_v1_app_app_id_msg_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageApi->list_messages_api_v1_app_app_id_msg_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **event_types** | [**List[str]**](str.md)|  | [optional] 
 **channel** | **str**|  | [optional] 
 **before** | **datetime**|  | [optional] 
 **after** | **datetime**|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseMessageOut**](ListResponseMessageOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

