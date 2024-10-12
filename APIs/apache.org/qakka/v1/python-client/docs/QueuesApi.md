# openapi_client.QueuesApi

All URIs are relative to *https://apache.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ack_message**](QueuesApi.md#ack_message) | **DELETE** /queues/{queueName}/messages/{queueMessageId} | Acknowledge that Queue Message has been processed.
[**create_queue**](QueuesApi.md#create_queue) | **POST** /queues | Create new queue.
[**delete_queue**](QueuesApi.md#delete_queue) | **DELETE** /queues/{queueName} | Delete Queue.
[**get_list_of_queues**](QueuesApi.md#get_list_of_queues) | **GET** /queues | Get list of all Queues.
[**get_message_data**](QueuesApi.md#get_message_data) | **GET** /queues/{queueName}/data/{queueMessageId} | Get data associated with a Queue Message.
[**get_next_messages**](QueuesApi.md#get_next_messages) | **GET** /queues/{queueName}/messages | Get next Queue Messages from a Queue
[**get_queue_config**](QueuesApi.md#get_queue_config) | **GET** /queues/{queueName}/config | Get Queue config.
[**send_message_binary**](QueuesApi.md#send_message_binary) | **POST** /queues/{queueName}/messages | Send Queue Message with a binary data (blob) payload.
[**update_queue_config**](QueuesApi.md#update_queue_config) | **PUT** /queues/{queueName}/config | Update Queue configuration.


# **ack_message**
> ApiResponse ack_message(queue_name, queue_message_id)

Acknowledge that Queue Message has been processed.



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    queue_name = 'queue_name_example' # str | Name of Queue
    queue_message_id = 'queue_message_id_example' # str | ID of Queue Message to be acknowledged

    try:
        # Acknowledge that Queue Message has been processed.
        api_response = api_instance.ack_message(queue_name, queue_message_id)
        print("The response of QueuesApi->ack_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->ack_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **str**| Name of Queue | 
 **queue_message_id** | **str**| ID of Queue Message to be acknowledged | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Queue Message ID invalid, or message not in-flight |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_queue**
> ApiResponse create_queue()

Create new queue.



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)

    try:
        # Create new queue.
        api_response = api_instance.create_queue()
        print("The response of QueuesApi->create_queue:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->create_queue: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | No Queue object posted, or name field is missing |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_queue**
> ApiResponse delete_queue(queue_name, confirm=confirm)

Delete Queue.



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    queue_name = 'queue_name_example' # str | 
    confirm = False # bool |  (optional) (default to False)

    try:
        # Delete Queue.
        api_response = api_instance.delete_queue(queue_name, confirm=confirm)
        print("The response of QueuesApi->delete_queue:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->delete_queue: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **str**|  | 
 **confirm** | **bool**|  | [optional] [default to False]

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Queue name or confirm flag missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_list_of_queues**
> ApiResponse get_list_of_queues()

Get list of all Queues.



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)

    try:
        # Get list of all Queues.
        api_response = api_instance.get_list_of_queues()
        print("The response of QueuesApi->get_list_of_queues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->get_list_of_queues: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_message_data**
> ApiResponse get_message_data(queue_name, queue_message_id)

Get data associated with a Queue Message.



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    queue_name = 'queue_name_example' # str | Name of Queue
    queue_message_id = 'queue_message_id_example' # str | ID of Queue Message for which data is to be returned

    try:
        # Get data associated with a Queue Message.
        api_response = api_instance.get_message_data(queue_name, queue_message_id)
        print("The response of QueuesApi->get_message_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->get_message_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **str**| Name of Queue | 
 **queue_message_id** | **str**| ID of Queue Message for which data is to be returned | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Message ID invalid |  -  |
**404** | Queue Message or data not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_next_messages**
> ApiResponse get_next_messages(queue_name, count=count)

Get next Queue Messages from a Queue



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    queue_name = 'queue_name_example' # str | Name of Queue
    count = '1' # str | Number of messages to get (optional) (default to '1')

    try:
        # Get next Queue Messages from a Queue
        api_response = api_instance.get_next_messages(queue_name, count=count)
        print("The response of QueuesApi->get_next_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->get_next_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **str**| Name of Queue | 
 **count** | **str**| Number of messages to get | [optional] [default to &#39;1&#39;]

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid count parameter |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_queue_config**
> ApiResponse get_queue_config(queue_name)

Get Queue config.



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    queue_name = 'queue_name_example' # str | Name of Queue

    try:
        # Get Queue config.
        api_response = api_instance.get_queue_config(queue_name)
        print("The response of QueuesApi->get_queue_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->get_queue_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **str**| Name of Queue | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Queue name or confirm flag missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_message_binary**
> ApiResponse send_message_binary(queue_name, content_type, request_body, regions=regions, delay=delay, expiration=expiration)

Send Queue Message with a binary data (blob) payload.



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    queue_name = 'queue_name_example' # str | Name of Queue
    content_type = 'content_type_example' # str | Content type of the data to be sent with Queue Message
    request_body = None # List[bytearray] | Data to be send with Queue Message
    regions = 'regions_example' # str | Regions to which message is to be sent (optional)
    delay = 'delay_example' # str |  (optional)
    expiration = 'expiration_example' # str |  (optional)

    try:
        # Send Queue Message with a binary data (blob) payload.
        api_response = api_instance.send_message_binary(queue_name, content_type, request_body, regions=regions, delay=delay, expiration=expiration)
        print("The response of QueuesApi->send_message_binary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->send_message_binary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **str**| Name of Queue | 
 **content_type** | **str**| Content type of the data to be sent with Queue Message | 
 **request_body** | [**List[bytearray]**](bytearray.md)| Data to be send with Queue Message | 
 **regions** | **str**| Regions to which message is to be sent | [optional] 
 **delay** | **str**|  | [optional] 
 **expiration** | **str**|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_queue_config**
> ApiResponse update_queue_config(queue_name)

Update Queue configuration.



### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    queue_name = 'queue_name_example' # str | 

    try:
        # Update Queue configuration.
        api_response = api_instance.update_queue_config(queue_name)
        print("The response of QueuesApi->update_queue_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->update_queue_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **str**|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | No Queue object posted, or name field is missing |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

