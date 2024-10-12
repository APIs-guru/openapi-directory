# openapi_client.MessagesApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**message_schedule_post**](MessagesApi.md#message_schedule_post) | **POST** /message/schedule | 
[**message_send_post**](MessagesApi.md#message_send_post) | **POST** /message/send | 
[**messages_failed_post**](MessagesApi.md#messages_failed_post) | **POST** /messages/failed | 
[**messages_inbox_post**](MessagesApi.md#messages_inbox_post) | **POST** /messages/inbox | 
[**messages_messageid_delete**](MessagesApi.md#messages_messageid_delete) | **DELETE** /messages/{messageid} | 
[**messages_messageid_get**](MessagesApi.md#messages_messageid_get) | **GET** /messages/{messageid} | 
[**messages_post**](MessagesApi.md#messages_post) | **POST** /messages | 
[**messages_schedule_get**](MessagesApi.md#messages_schedule_get) | **GET** /messages/schedule | 
[**messages_schedule_messageid_delete**](MessagesApi.md#messages_schedule_messageid_delete) | **DELETE** /messages/schedule/{messageid} | 
[**send_flash_message**](MessagesApi.md#send_flash_message) | **POST** /message/flash | 


# **message_schedule_post**
> List[ScheduledMessageResponse] message_schedule_post(sms_message)



Schedules an SMS message to be sent at the date-time you specify

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.message import Message
from openapi_client.models.scheduled_message_response import ScheduledMessageResponse
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
    api_instance = openapi_client.MessagesApi(api_client)
    sms_message = openapi_client.Message() # Message | Message properties

    try:
        api_response = api_instance.message_schedule_post(sms_message)
        print("The response of MessagesApi->message_schedule_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->message_schedule_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sms_message** | [**Message**](Message.md)| Message properties | 

### Return type

[**List[ScheduledMessageResponse]**](ScheduledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **message_send_post**
> SendMessageResponse message_send_post(sms_message)



Send an SMS Message

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.message import Message
from openapi_client.models.send_message_response import SendMessageResponse
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
    api_instance = openapi_client.MessagesApi(api_client)
    sms_message = openapi_client.Message() # Message | Message properties

    try:
        api_response = api_instance.message_send_post(sms_message)
        print("The response of MessagesApi->message_send_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->message_send_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sms_message** | [**Message**](Message.md)| Message properties | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

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

# **messages_failed_post**
> List[MessageResponse] messages_failed_post(query)



Get failed messages matching your search criteria

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.message_response import MessageResponse
from openapi_client.models.query import Query
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
    api_instance = openapi_client.MessagesApi(api_client)
    query = openapi_client.Query() # Query | 

    try:
        api_response = api_instance.messages_failed_post(query)
        print("The response of MessagesApi->messages_failed_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_failed_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Query**](Query.md)|  | 

### Return type

[**List[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_inbox_post**
> List[MessageResponse] messages_inbox_post(query)



Get unread uncoming messages matching your search criteria

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.message_response import MessageResponse
from openapi_client.models.query import Query
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
    api_instance = openapi_client.MessagesApi(api_client)
    query = openapi_client.Query() # Query | 

    try:
        api_response = api_instance.messages_inbox_post(query)
        print("The response of MessagesApi->messages_inbox_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_inbox_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Query**](Query.md)|  | 

### Return type

[**List[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_messageid_delete**
> DeletedMessageResponse messages_messageid_delete(messageid)



Delete the message with the mathcing messageid

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.deleted_message_response import DeletedMessageResponse
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
    api_instance = openapi_client.MessagesApi(api_client)
    messageid = 'messageid_example' # str | The ID of the message you would like returned

    try:
        api_response = api_instance.messages_messageid_delete(messageid)
        print("The response of MessagesApi->messages_messageid_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_messageid_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **str**| The ID of the message you would like returned | 

### Return type

[**DeletedMessageResponse**](DeletedMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_messageid_get**
> MessageResponse messages_messageid_get(messageid)



Retrieve a logged message by the message ID

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
    api_instance = openapi_client.MessagesApi(api_client)
    messageid = 'messageid_example' # str | The ID of the message you would like returned

    try:
        api_response = api_instance.messages_messageid_get(messageid)
        print("The response of MessagesApi->messages_messageid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_messageid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **str**| The ID of the message you would like returned | 

### Return type

[**MessageResponse**](MessageResponse.md)

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

# **messages_post**
> List[MessageResponse] messages_post(query)



Retrieve up to 1000 messages matching your search criteria

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.message_response import MessageResponse
from openapi_client.models.query import Query
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
    api_instance = openapi_client.MessagesApi(api_client)
    query = openapi_client.Query() # Query | 

    try:
        api_response = api_instance.messages_post(query)
        print("The response of MessagesApi->messages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Query**](Query.md)|  | 

### Return type

[**List[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_schedule_get**
> ScheduledMessagesResponse messages_schedule_get()



Returns a list of messages scheduled from your account, comprising any messages scheduled in the last 3 months and any scheduled to send in the future

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.scheduled_messages_response import ScheduledMessagesResponse
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
    api_instance = openapi_client.MessagesApi(api_client)

    try:
        api_response = api_instance.messages_schedule_get()
        print("The response of MessagesApi->messages_schedule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_schedule_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ScheduledMessagesResponse**](ScheduledMessagesResponse.md)

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

# **messages_schedule_messageid_delete**
> CancelledMessageResponse messages_schedule_messageid_delete(messageid)



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
    api_instance = openapi_client.MessagesApi(api_client)
    messageid = 'messageid_example' # str | The ID of the message you would like returned

    try:
        api_response = api_instance.messages_schedule_messageid_delete(messageid)
        print("The response of MessagesApi->messages_schedule_messageid_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_schedule_messageid_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **str**| The ID of the message you would like returned | 

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

# **send_flash_message**
> SendMessageResponse send_flash_message(sms_message)



Sends an SMS flash message, which appears on the recipients lock screen

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.message import Message
from openapi_client.models.send_message_response import SendMessageResponse
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
    api_instance = openapi_client.MessagesApi(api_client)
    sms_message = openapi_client.Message() # Message | Message properties

    try:
        api_response = api_instance.send_flash_message(sms_message)
        print("The response of MessagesApi->send_flash_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->send_flash_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sms_message** | [**Message**](Message.md)| Message properties | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

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

