# openapi_client.BatchMessagesApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_any_post**](BatchMessagesApi.md#batch_any_post) | **POST** /batch/any | 
[**batch_batchid_get**](BatchMessagesApi.md#batch_batchid_get) | **GET** /batch/{batchid} | 
[**batch_schedule_post**](BatchMessagesApi.md#batch_schedule_post) | **POST** /batch/schedule | 
[**batch_send_post**](BatchMessagesApi.md#batch_send_post) | **POST** /batch/send | 
[**batches_schedule_batchid_delete**](BatchMessagesApi.md#batches_schedule_batchid_delete) | **DELETE** /batches/schedule/{batchid} | 


# **batch_any_post**
> BatchMessageResponse batch_any_post(messages)



Sends a collection of unique SMS messages. Batches may contain up to 5000 messages at a time.

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.batch_message_response import BatchMessageResponse
from openapi_client.models.message import Message
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.thesmsworks.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.thesmsworks.co.uk/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BatchMessagesApi(api_client)
    messages = [openapi_client.Message()] # List[Message] | An array of messages

    try:
        api_response = api_instance.batch_any_post(messages)
        print("The response of BatchMessagesApi->batch_any_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchMessagesApi->batch_any_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messages** | [**List[Message]**](Message.md)| An array of messages | 

### Return type

[**BatchMessageResponse**](BatchMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**402** | Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_batchid_get**
> List[MessageResponse] batch_batchid_get(batchid)



Retrieve all messages in a batch with the given batch ID

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.message_response import MessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.thesmsworks.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.thesmsworks.co.uk/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BatchMessagesApi(api_client)
    batchid = 'batchid_example' # str | The ID of the batch you would like returned

    try:
        api_response = api_instance.batch_batchid_get(batchid)
        print("The response of BatchMessagesApi->batch_batchid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchMessagesApi->batch_batchid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchid** | **str**| The ID of the batch you would like returned | 

### Return type

[**List[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_schedule_post**
> ScheduledBatchResponse batch_schedule_post(sms_message)



Schedules a batch of SMS messages to be sent at the date time you specify

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.batch_message import BatchMessage
from openapi_client.models.scheduled_batch_response import ScheduledBatchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.thesmsworks.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.thesmsworks.co.uk/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BatchMessagesApi(api_client)
    sms_message = openapi_client.BatchMessage() # BatchMessage | Message properties

    try:
        api_response = api_instance.batch_schedule_post(sms_message)
        print("The response of BatchMessagesApi->batch_schedule_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchMessagesApi->batch_schedule_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sms_message** | [**BatchMessage**](BatchMessage.md)| Message properties | 

### Return type

[**ScheduledBatchResponse**](ScheduledBatchResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**402** | Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_send_post**
> BatchMessageResponse batch_send_post(sms_message)



Send a single SMS message to multiple recipients.  Batches may contain up to 5000 messages at a time.

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.batch_message import BatchMessage
from openapi_client.models.batch_message_response import BatchMessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.thesmsworks.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.thesmsworks.co.uk/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BatchMessagesApi(api_client)
    sms_message = openapi_client.BatchMessage() # BatchMessage | Message properties

    try:
        api_response = api_instance.batch_send_post(sms_message)
        print("The response of BatchMessagesApi->batch_send_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchMessagesApi->batch_send_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sms_message** | [**BatchMessage**](BatchMessage.md)| Message properties | 

### Return type

[**BatchMessageResponse**](BatchMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**402** | Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batches_schedule_batchid_delete**
> CancelledMessageResponse batches_schedule_batchid_delete(batchid)



Cancels a scheduled SMS message

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.cancelled_message_response import CancelledMessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.thesmsworks.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.thesmsworks.co.uk/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BatchMessagesApi(api_client)
    batchid = 'batchid_example' # str | The ID of the batch you would like returned

    try:
        api_response = api_instance.batches_schedule_batchid_delete(batchid)
        print("The response of BatchMessagesApi->batches_schedule_batchid_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchMessagesApi->batches_schedule_batchid_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchid** | **str**| The ID of the batch you would like returned | 

### Return type

[**CancelledMessageResponse**](CancelledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

