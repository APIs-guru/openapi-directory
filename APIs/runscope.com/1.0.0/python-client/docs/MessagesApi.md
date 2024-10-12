# openapi_client.MessagesApi

All URIs are relative to *https://api.runscope.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buckets_bucket_key_errors_get**](MessagesApi.md#buckets_bucket_key_errors_get) | **GET** /buckets/{bucketKey}/errors | Retrieve a list of error messages in a bucket
[**buckets_bucket_key_messages_delete**](MessagesApi.md#buckets_bucket_key_messages_delete) | **DELETE** /buckets/{bucketKey}/messages | Clear a bucket (remove all messages).
[**buckets_bucket_key_messages_get**](MessagesApi.md#buckets_bucket_key_messages_get) | **GET** /buckets/{bucketKey}/messages | Retrieve a list of messages in a bucket
[**buckets_bucket_key_messages_message_id_get**](MessagesApi.md#buckets_bucket_key_messages_message_id_get) | **GET** /buckets/{bucketKey}/messages/{messageId} | Retrieve the details for a single message.
[**buckets_bucket_key_messages_post**](MessagesApi.md#buckets_bucket_key_messages_post) | **POST** /buckets/{bucketKey}/messages | Create a message


# **buckets_bucket_key_errors_get**
> buckets_bucket_key_errors_get(bucket_key, count=count, since=since, before=before)

Retrieve a list of error messages in a bucket

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    count = 56 # int | Maxiumum number of messages to return. Default 50, max 1000. (optional)
    since = 56 # int | Only return messages after the given Unix timestamp (optional)
    before = 56 # int | Only return messages before the given Unix timestamp (optional)

    try:
        # Retrieve a list of error messages in a bucket
        api_instance.buckets_bucket_key_errors_get(bucket_key, count=count, since=since, before=before)
    except Exception as e:
        print("Exception when calling MessagesApi->buckets_bucket_key_errors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **count** | **int**| Maxiumum number of messages to return. Default 50, max 1000. | [optional] 
 **since** | **int**| Only return messages after the given Unix timestamp | [optional] 
 **before** | **int**| Only return messages before the given Unix timestamp | [optional] 

### Return type

void (empty response body)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of error messages in a bucket |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_messages_delete**
> buckets_bucket_key_messages_delete(bucket_key)

Clear a bucket (remove all messages).

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket

    try:
        # Clear a bucket (remove all messages).
        api_instance.buckets_bucket_key_messages_delete(bucket_key)
    except Exception as e:
        print("Exception when calling MessagesApi->buckets_bucket_key_messages_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 

### Return type

void (empty response body)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content with no body. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_messages_get**
> buckets_bucket_key_messages_get(bucket_key, count=count, since=since, before=before)

Retrieve a list of messages in a bucket

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    count = 56 # int | Maxiumum number of messages to return. Default 50, max 1000. (optional)
    since = 56 # int | Only return messages after the given Unix timestamp (optional)
    before = 56 # int | Only return messages before the given Unix timestamp (optional)

    try:
        # Retrieve a list of messages in a bucket
        api_instance.buckets_bucket_key_messages_get(bucket_key, count=count, since=since, before=before)
    except Exception as e:
        print("Exception when calling MessagesApi->buckets_bucket_key_messages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **count** | **int**| Maxiumum number of messages to return. Default 50, max 1000. | [optional] 
 **since** | **int**| Only return messages after the given Unix timestamp | [optional] 
 **before** | **int**| Only return messages before the given Unix timestamp | [optional] 

### Return type

void (empty response body)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of messages in a bucket |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_messages_message_id_get**
> buckets_bucket_key_messages_message_id_get(bucket_key, message_id)

Retrieve the details for a single message.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    message_id = 'message_id_example' # str | The unique identifier for this message

    try:
        # Retrieve the details for a single message.
        api_instance.buckets_bucket_key_messages_message_id_get(bucket_key, message_id)
    except Exception as e:
        print("Exception when calling MessagesApi->buckets_bucket_key_messages_message_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **message_id** | **str**| The unique identifier for this message | 

### Return type

void (empty response body)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of messages in a bucket |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_messages_post**
> BucketsBucketKeyMessagesPost200Response buckets_bucket_key_messages_post(bucket_key, new_message)

Create a message

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.buckets_bucket_key_messages_post200_response import BucketsBucketKeyMessagesPost200Response
from openapi_client.models.new_message import NewMessage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    new_message = openapi_client.NewMessage() # NewMessage | 

    try:
        # Create a message
        api_response = api_instance.buckets_bucket_key_messages_post(bucket_key, new_message)
        print("The response of MessagesApi->buckets_bucket_key_messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->buckets_bucket_key_messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **new_message** | [**NewMessage**](NewMessage.md)|  | 

### Return type

[**BucketsBucketKeyMessagesPost200Response**](BucketsBucketKeyMessagesPost200Response.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response includes a list of result objects for the message(s) submitted. It will always return an array, even if only one message was created. The order of the result objects corresponds to the order of messages submitted. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

