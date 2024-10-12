# openapi_client.MessageAttemptApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expunge_attempt_content_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_content_delete**](MessageAttemptApi.md#expunge_attempt_content_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_content_delete) | **DELETE** /api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content/ | Delete attempt response body
[**get_attempt_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_get**](MessageAttemptApi.md#get_attempt_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_get) | **GET** /api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/ | Get Attempt
[**list_attempted_destinations_api_v1_app_app_id_msg_msg_id_endpoint_get**](MessageAttemptApi.md#list_attempted_destinations_api_v1_app_app_id_msg_msg_id_endpoint_get) | **GET** /api/v1/app/{app_id}/msg/{msg_id}/endpoint/ | List Attempted Destinations
[**list_attempted_messages_api_v1_app_app_id_endpoint_endpoint_id_msg_get**](MessageAttemptApi.md#list_attempted_messages_api_v1_app_app_id_endpoint_endpoint_id_msg_get) | **GET** /api/v1/app/{app_id}/endpoint/{endpoint_id}/msg/ | List Attempted Messages
[**list_attempts_api_v1_app_app_id_msg_msg_id_attempt_get**](MessageAttemptApi.md#list_attempts_api_v1_app_app_id_msg_msg_id_attempt_get) | **GET** /api/v1/app/{app_id}/msg/{msg_id}/attempt/ | List Attempts
[**list_attempts_by_endpoint_api_v1_app_app_id_attempt_endpoint_endpoint_id_get**](MessageAttemptApi.md#list_attempts_by_endpoint_api_v1_app_app_id_attempt_endpoint_endpoint_id_get) | **GET** /api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}/ | List Attempts By Endpoint
[**list_attempts_by_msg_api_v1_app_app_id_attempt_msg_msg_id_get**](MessageAttemptApi.md#list_attempts_by_msg_api_v1_app_app_id_attempt_msg_msg_id_get) | **GET** /api/v1/app/{app_id}/attempt/msg/{msg_id}/ | List Attempts By Msg
[**list_attempts_for_endpoint_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_attempt_get**](MessageAttemptApi.md#list_attempts_for_endpoint_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_attempt_get) | **GET** /api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/attempt/ | List Attempts For Endpoint
[**resend_webhook_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_resend_post**](MessageAttemptApi.md#resend_webhook_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_resend_post) | **POST** /api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend/ | Resend Webhook


# **expunge_attempt_content_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_content_delete**
> expunge_attempt_content_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_content_delete(attempt_id, msg_id, app_id, idempotency_key=idempotency_key)

Delete attempt response body

Deletes the given attempt's response body. Useful when an endpoint accidentally returned sensitive content.

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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    attempt_id = 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Delete attempt response body
        api_instance.expunge_attempt_content_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_content_delete(attempt_id, msg_id, app_id, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->expunge_attempt_content_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_content_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt_id** | **str**|  | 
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

# **get_attempt_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_get**
> MessageAttemptOut get_attempt_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_get(attempt_id, msg_id, app_id, idempotency_key=idempotency_key)

Get Attempt

`msg_id`: Use a message id or a message `eventId`

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.message_attempt_out import MessageAttemptOut
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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    attempt_id = 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Attempt
        api_response = api_instance.get_attempt_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_get(attempt_id, msg_id, app_id, idempotency_key=idempotency_key)
        print("The response of MessageAttemptApi->get_attempt_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->get_attempt_api_v1_app_app_id_msg_msg_id_attempt_attempt_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt_id** | **str**|  | 
 **msg_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**MessageAttemptOut**](MessageAttemptOut.md)

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

# **list_attempted_destinations_api_v1_app_app_id_msg_msg_id_endpoint_get**
> ListResponseMessageEndpointOut list_attempted_destinations_api_v1_app_app_id_msg_msg_id_endpoint_get(msg_id, app_id, iterator=iterator, limit=limit, idempotency_key=idempotency_key)

List Attempted Destinations

`msg_id`: Use a message id or a message `eventId`

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_message_endpoint_out import ListResponseMessageEndpointOut
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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    iterator = 'msgep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Attempted Destinations
        api_response = api_instance.list_attempted_destinations_api_v1_app_app_id_msg_msg_id_endpoint_get(msg_id, app_id, iterator=iterator, limit=limit, idempotency_key=idempotency_key)
        print("The response of MessageAttemptApi->list_attempted_destinations_api_v1_app_app_id_msg_msg_id_endpoint_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->list_attempted_destinations_api_v1_app_app_id_msg_msg_id_endpoint_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **msg_id** | **str**|  | 
 **app_id** | **str**|  | 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseMessageEndpointOut**](ListResponseMessageEndpointOut.md)

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

# **list_attempted_messages_api_v1_app_app_id_endpoint_endpoint_id_msg_get**
> ListResponseEndpointMessageOut list_attempted_messages_api_v1_app_app_id_endpoint_endpoint_id_msg_get(endpoint_id, app_id, iterator=iterator, limit=limit, channel=channel, status=status, before=before, after=after, idempotency_key=idempotency_key)

List Attempted Messages

List messages for a particular endpoint. Additionally includes metadata about the latest message attempt.  The `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_endpoint_message_out import ListResponseEndpointMessageOut
from openapi_client.models.message_status import MessageStatus
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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    iterator = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    channel = 'project_1337' # str |  (optional)
    status = openapi_client.MessageStatus() # MessageStatus |  (optional)
    before = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    after = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Attempted Messages
        api_response = api_instance.list_attempted_messages_api_v1_app_app_id_endpoint_endpoint_id_msg_get(endpoint_id, app_id, iterator=iterator, limit=limit, channel=channel, status=status, before=before, after=after, idempotency_key=idempotency_key)
        print("The response of MessageAttemptApi->list_attempted_messages_api_v1_app_app_id_endpoint_endpoint_id_msg_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->list_attempted_messages_api_v1_app_app_id_endpoint_endpoint_id_msg_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **channel** | **str**|  | [optional] 
 **status** | [**MessageStatus**](.md)|  | [optional] 
 **before** | **datetime**|  | [optional] 
 **after** | **datetime**|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseEndpointMessageOut**](ListResponseEndpointMessageOut.md)

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

# **list_attempts_api_v1_app_app_id_msg_msg_id_attempt_get**
> ListResponseMessageAttemptOut list_attempts_api_v1_app_app_id_msg_msg_id_attempt_get(app_id, msg_id, iterator=iterator, limit=limit, endpoint_id=endpoint_id, event_types=event_types, channel=channel, status=status, before=before, after=after, idempotency_key=idempotency_key)

List Attempts

Deprecated: Please use \"List Attempts by Endpoint\" and \"List Attempts by Msg\" instead.  `msg_id`: Use a message id or a message `eventId`

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_message_attempt_out import ListResponseMessageAttemptOut
from openapi_client.models.message_status import MessageStatus
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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    iterator = 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    event_types = ['event_types_example'] # List[str] |  (optional)
    channel = 'project_1337' # str |  (optional)
    status = openapi_client.MessageStatus() # MessageStatus |  (optional)
    before = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    after = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Attempts
        api_response = api_instance.list_attempts_api_v1_app_app_id_msg_msg_id_attempt_get(app_id, msg_id, iterator=iterator, limit=limit, endpoint_id=endpoint_id, event_types=event_types, channel=channel, status=status, before=before, after=after, idempotency_key=idempotency_key)
        print("The response of MessageAttemptApi->list_attempts_api_v1_app_app_id_msg_msg_id_attempt_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->list_attempts_api_v1_app_app_id_msg_msg_id_attempt_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **msg_id** | **str**|  | 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **endpoint_id** | **str**|  | [optional] 
 **event_types** | [**List[str]**](str.md)|  | [optional] 
 **channel** | **str**|  | [optional] 
 **status** | [**MessageStatus**](.md)|  | [optional] 
 **before** | **datetime**|  | [optional] 
 **after** | **datetime**|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseMessageAttemptOut**](ListResponseMessageAttemptOut.md)

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

# **list_attempts_by_endpoint_api_v1_app_app_id_attempt_endpoint_endpoint_id_get**
> ListResponseMessageAttemptOut list_attempts_by_endpoint_api_v1_app_app_id_attempt_endpoint_endpoint_id_get(app_id, endpoint_id, iterator=iterator, limit=limit, status=status, status_code_class=status_code_class, event_types=event_types, channel=channel, before=before, after=after, idempotency_key=idempotency_key)

List Attempts By Endpoint

List attempts by endpoint id

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_message_attempt_out import ListResponseMessageAttemptOut
from openapi_client.models.message_status import MessageStatus
from openapi_client.models.status_code_class import StatusCodeClass
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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    iterator = 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    status = openapi_client.MessageStatus() # MessageStatus |  (optional)
    status_code_class = openapi_client.StatusCodeClass() # StatusCodeClass |  (optional)
    event_types = ['event_types_example'] # List[str] |  (optional)
    channel = 'project_1337' # str |  (optional)
    before = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    after = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Attempts By Endpoint
        api_response = api_instance.list_attempts_by_endpoint_api_v1_app_app_id_attempt_endpoint_endpoint_id_get(app_id, endpoint_id, iterator=iterator, limit=limit, status=status, status_code_class=status_code_class, event_types=event_types, channel=channel, before=before, after=after, idempotency_key=idempotency_key)
        print("The response of MessageAttemptApi->list_attempts_by_endpoint_api_v1_app_app_id_attempt_endpoint_endpoint_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->list_attempts_by_endpoint_api_v1_app_app_id_attempt_endpoint_endpoint_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **endpoint_id** | **str**|  | 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **status** | [**MessageStatus**](.md)|  | [optional] 
 **status_code_class** | [**StatusCodeClass**](.md)|  | [optional] 
 **event_types** | [**List[str]**](str.md)|  | [optional] 
 **channel** | **str**|  | [optional] 
 **before** | **datetime**|  | [optional] 
 **after** | **datetime**|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseMessageAttemptOut**](ListResponseMessageAttemptOut.md)

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

# **list_attempts_by_msg_api_v1_app_app_id_attempt_msg_msg_id_get**
> ListResponseMessageAttemptOut list_attempts_by_msg_api_v1_app_app_id_attempt_msg_msg_id_get(app_id, msg_id, endpoint_id=endpoint_id, iterator=iterator, limit=limit, status=status, status_code_class=status_code_class, event_types=event_types, channel=channel, before=before, after=after, idempotency_key=idempotency_key)

List Attempts By Msg

List attempts by message id

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_message_attempt_out import ListResponseMessageAttemptOut
from openapi_client.models.message_status import MessageStatus
from openapi_client.models.status_code_class import StatusCodeClass
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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    iterator = 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    status = openapi_client.MessageStatus() # MessageStatus |  (optional)
    status_code_class = openapi_client.StatusCodeClass() # StatusCodeClass |  (optional)
    event_types = ['event_types_example'] # List[str] |  (optional)
    channel = 'project_1337' # str |  (optional)
    before = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    after = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Attempts By Msg
        api_response = api_instance.list_attempts_by_msg_api_v1_app_app_id_attempt_msg_msg_id_get(app_id, msg_id, endpoint_id=endpoint_id, iterator=iterator, limit=limit, status=status, status_code_class=status_code_class, event_types=event_types, channel=channel, before=before, after=after, idempotency_key=idempotency_key)
        print("The response of MessageAttemptApi->list_attempts_by_msg_api_v1_app_app_id_attempt_msg_msg_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->list_attempts_by_msg_api_v1_app_app_id_attempt_msg_msg_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **msg_id** | **str**|  | 
 **endpoint_id** | **str**|  | [optional] 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **status** | [**MessageStatus**](.md)|  | [optional] 
 **status_code_class** | [**StatusCodeClass**](.md)|  | [optional] 
 **event_types** | [**List[str]**](str.md)|  | [optional] 
 **channel** | **str**|  | [optional] 
 **before** | **datetime**|  | [optional] 
 **after** | **datetime**|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseMessageAttemptOut**](ListResponseMessageAttemptOut.md)

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

# **list_attempts_for_endpoint_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_attempt_get**
> ListResponseMessageAttemptEndpointOut list_attempts_for_endpoint_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_attempt_get(msg_id, app_id, endpoint_id, iterator=iterator, limit=limit, event_types=event_types, channel=channel, status=status, before=before, after=after, idempotency_key=idempotency_key)

List Attempts For Endpoint

DEPRECATED: please use list_attempts with endpoint_id as a query parameter instead.  List the message attempts for a particular endpoint.  Returning the endpoint.  The `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_message_attempt_endpoint_out import ListResponseMessageAttemptEndpointOut
from openapi_client.models.message_status import MessageStatus
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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    iterator = 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    event_types = ['event_types_example'] # List[str] |  (optional)
    channel = 'project_1337' # str |  (optional)
    status = openapi_client.MessageStatus() # MessageStatus |  (optional)
    before = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    after = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Attempts For Endpoint
        api_response = api_instance.list_attempts_for_endpoint_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_attempt_get(msg_id, app_id, endpoint_id, iterator=iterator, limit=limit, event_types=event_types, channel=channel, status=status, before=before, after=after, idempotency_key=idempotency_key)
        print("The response of MessageAttemptApi->list_attempts_for_endpoint_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_attempt_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->list_attempts_for_endpoint_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_attempt_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **msg_id** | **str**|  | 
 **app_id** | **str**|  | 
 **endpoint_id** | **str**|  | 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **event_types** | [**List[str]**](str.md)|  | [optional] 
 **channel** | **str**|  | [optional] 
 **status** | [**MessageStatus**](.md)|  | [optional] 
 **before** | **datetime**|  | [optional] 
 **after** | **datetime**|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseMessageAttemptEndpointOut**](ListResponseMessageAttemptEndpointOut.md)

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

# **resend_webhook_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_resend_post**
> resend_webhook_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_resend_post(endpoint_id, msg_id, app_id, idempotency_key=idempotency_key)

Resend Webhook

Resend a message to the specified endpoint.

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
    api_instance = openapi_client.MessageAttemptApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    msg_id = 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Resend Webhook
        api_instance.resend_webhook_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_resend_post(endpoint_id, msg_id, app_id, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling MessageAttemptApi->resend_webhook_api_v1_app_app_id_msg_msg_id_endpoint_endpoint_id_resend_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
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
**202** | Successful Response |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

