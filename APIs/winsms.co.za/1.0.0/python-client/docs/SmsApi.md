# openapi_client.SmsApi

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_scheduled_messages**](SmsApi.md#delete_scheduled_messages) | **POST** /sms/scheduled/delete | Delete scheduled SMS messages and refund credits
[**get_incoming_messages**](SmsApi.md#get_incoming_messages) | **GET** /sms/incoming | Get a list of incoming SMS messages
[**get_optout_messages**](SmsApi.md#get_optout_messages) | **GET** /sms/incoming/optout | Get a list of incoming opt-out SMS messages
[**get_scheduled_messages**](SmsApi.md#get_scheduled_messages) | **GET** /sms/scheduled | Get a list of scheduled SMS messages
[**sms_send**](SmsApi.md#sms_send) | **POST** /sms/outgoing/send | Send SMS messages
[**sms_send_batch**](SmsApi.md#sms_send_batch) | **POST** /sms/outgoing/sendmulti | Send multiple different SMS messages
[**sms_status**](SmsApi.md#sms_status) | **POST** /sms/outgoing/status | Get SMS delivery statuses


# **delete_scheduled_messages**
> DeleteScheduledResponse delete_scheduled_messages(message_delete_request)

Delete scheduled SMS messages and refund credits

Delete a list of previously scheduled SMS messages that have not yet been sent.  Credits originally deducted for each SMS message will be refunded to your account upon successful deletion. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.delete_scheduled_response import DeleteScheduledResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmsApi(api_client)
    message_delete_request = [56] # List[int] | An array of WinSMS API Ids received after submitting scheduled messages to the ***/sms/outgoing/send*** endpoint.<br> A maximum of 1000 API Ids can be supplied in a single request. 

    try:
        # Delete scheduled SMS messages and refund credits
        api_response = api_instance.delete_scheduled_messages(message_delete_request)
        print("The response of SmsApi->delete_scheduled_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmsApi->delete_scheduled_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_delete_request** | [**List[int]**](int.md)| An array of WinSMS API Ids received after submitting scheduled messages to the ***/sms/outgoing/send*** endpoint.&lt;br&gt; A maximum of 1000 API Ids can be supplied in a single request.  | 

### Return type

[**DeleteScheduledResponse**](DeleteScheduledResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**413** | Payload Too Large |  -  |
**415** | Unsupported Media Type |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_incoming_messages**
> IncomingMessageResponse get_incoming_messages(offset=offset, limit=limit)

Get a list of incoming SMS messages

Get a list of all incoming SMS messages received by the account.  Only the first 100 incoming messages will be returned if no ***offset*** and ***limit*** parameters are specified. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.incoming_message_response import IncomingMessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmsApi(api_client)
    offset = 0 # int | ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  (optional) (default to 0)
    limit = 100 # int | ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  (optional) (default to 100)

    try:
        # Get a list of incoming SMS messages
        api_response = api_instance.get_incoming_messages(offset=offset, limit=limit)
        print("The response of SmsApi->get_incoming_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmsApi->get_incoming_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  | [optional] [default to 0]
 **limit** | **int**| ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  | [optional] [default to 100]

### Return type

[**IncomingMessageResponse**](IncomingMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_optout_messages**
> OptoutMessageResponse get_optout_messages()

Get a list of incoming opt-out SMS messages

Get a list of all opt-out SMS messages received by the account, as well as all manually added opt-out numbers.<br>

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.optout_message_response import OptoutMessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmsApi(api_client)

    try:
        # Get a list of incoming opt-out SMS messages
        api_response = api_instance.get_optout_messages()
        print("The response of SmsApi->get_optout_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmsApi->get_optout_messages: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OptoutMessageResponse**](OptoutMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_scheduled_messages**
> ScheduledMessageResponse get_scheduled_messages(offset=offset, limit=limit)

Get a list of scheduled SMS messages

Get a list of all scheduled SMS messages that have not yet been sent.  Only the first 100 scheduled messages will be returned if no ***offset*** and ***limit*** parameters are specified. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.scheduled_message_response import ScheduledMessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmsApi(api_client)
    offset = 0 # int | ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  (optional) (default to 0)
    limit = 100 # int | ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  (optional) (default to 100)

    try:
        # Get a list of scheduled SMS messages
        api_response = api_instance.get_scheduled_messages(offset=offset, limit=limit)
        print("The response of SmsApi->get_scheduled_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmsApi->get_scheduled_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  | [optional] [default to 0]
 **limit** | **int**| ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  | [optional] [default to 100]

### Return type

[**ScheduledMessageResponse**](ScheduledMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sms_send**
> NewMessageResponse sms_send(new_message_details)

Send SMS messages

Submit 1 or more SMS messages to be sent by WinSMS. Maximum 1000 recipients per request.  The SMS message text can be a maximum of 918 characters long. If you are submitting a message longer than 160 characters, you should change the value of ***maxSegments***. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.new_message_details import NewMessageDetails
from openapi_client.models.new_message_response import NewMessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmsApi(api_client)
    new_message_details = openapi_client.NewMessageDetails() # NewMessageDetails | The message, recipients and delivery options of an SMS message to be sent. 

    try:
        # Send SMS messages
        api_response = api_instance.sms_send(new_message_details)
        print("The response of SmsApi->sms_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmsApi->sms_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new_message_details** | [**NewMessageDetails**](NewMessageDetails.md)| The message, recipients and delivery options of an SMS message to be sent.  | 

### Return type

[**NewMessageResponse**](NewMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**413** | Payload Too Large |  -  |
**415** | Unsupported Media Type |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sms_send_batch**
> MultiMessageResponse sms_send_batch(multi_message_details)

Send multiple different SMS messages

Submit multiple different SMS messages to be sent to multiple recipients. Maximum 1000 recipients across all messages.  Each SMS message text can be a maximum of 918 characters long. If you are submitting a message longer than 160 characters, you should change the value of ***maxSegments***. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.multi_message_details import MultiMessageDetails
from openapi_client.models.multi_message_response import MultiMessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmsApi(api_client)
    multi_message_details = openapi_client.MultiMessageDetails() # MultiMessageDetails | The messages, recipients and delivery options of multiple SMS messages to be sent. 

    try:
        # Send multiple different SMS messages
        api_response = api_instance.sms_send_batch(multi_message_details)
        print("The response of SmsApi->sms_send_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmsApi->sms_send_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multi_message_details** | [**MultiMessageDetails**](MultiMessageDetails.md)| The messages, recipients and delivery options of multiple SMS messages to be sent.  | 

### Return type

[**MultiMessageResponse**](MultiMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**413** | Payload Too Large |  -  |
**415** | Unsupported Media Type |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sms_status**
> MessageStatusResponse sms_status(message_status_request)

Get SMS delivery statuses

Get a list of previously submitted SMS message delivery statuses.  Post an array of API Message Ids received from the ***/sms/outgoing/send*** endpoint. 

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.message_status_response import MessageStatusResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmsApi(api_client)
    message_status_request = [56] # List[int] | An array of WinSMS API Ids received after submitting messages to the ***/sms/outgoing/send*** endpoint.  A maximum of 1000 API Ids can be supplied in a single request. 

    try:
        # Get SMS delivery statuses
        api_response = api_instance.sms_status(message_status_request)
        print("The response of SmsApi->sms_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmsApi->sms_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_status_request** | [**List[int]**](int.md)| An array of WinSMS API Ids received after submitting messages to the ***/sms/outgoing/send*** endpoint.  A maximum of 1000 API Ids can be supplied in a single request.  | 

### Return type

[**MessageStatusResponse**](MessageStatusResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**413** | Payload Too Large |  -  |
**415** | Unsupported Media Type |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

