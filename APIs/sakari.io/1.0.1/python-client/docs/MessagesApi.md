# openapi_client.MessagesApi

All URIs are relative to *https://api.sakari.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messages_fetch**](MessagesApi.md#messages_fetch) | **GET** /v1/accounts/{accountId}/messages/{messageId} | Fetch message by id
[**messages_fetch_all**](MessagesApi.md#messages_fetch_all) | **GET** /v1/accounts/{accountId}/messages | Fetch messages
[**messages_send**](MessagesApi.md#messages_send) | **POST** /v1/accounts/{accountId}/messages | Send Messages


# **messages_fetch**
> MessageResponse messages_fetch(account_id, message_id)

Fetch message by id

Returns a single messag

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.message_response import MessageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
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
    account_id = 'account_id_example' # str | Account to apply operations to
    message_id = 'message_id_example' # str | ID of message to return

    try:
        # Fetch message by id
        api_response = api_instance.messages_fetch(account_id, message_id)
        print("The response of MessagesApi->messages_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_fetch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **message_id** | **str**| ID of message to return | 

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_fetch_all**
> MessagesResponse messages_fetch_all(account_id, offset=offset, limit=limit, contact_id=contact_id, conversation_id=conversation_id)

Fetch messages

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.messages_response import MessagesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
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
    account_id = 'account_id_example' # str | Account to apply operations to
    offset = 56 # int | Results to skip when paginating through a result set (optional)
    limit = 56 # int | Maximum number of results to return (optional)
    contact_id = 'contact_id_example' # str | ID of contact (optional)
    conversation_id = 'conversation_id_example' # str | ID of conversation (optional)

    try:
        # Fetch messages
        api_response = api_instance.messages_fetch_all(account_id, offset=offset, limit=limit, contact_id=contact_id, conversation_id=conversation_id)
        print("The response of MessagesApi->messages_fetch_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_fetch_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **offset** | **int**| Results to skip when paginating through a result set | [optional] 
 **limit** | **int**| Maximum number of results to return | [optional] 
 **contact_id** | **str**| ID of contact | [optional] 
 **conversation_id** | **str**| ID of conversation | [optional] 

### Return type

[**MessagesResponse**](MessagesResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_send**
> SendMessagesResponse messages_send(account_id, send_messages_request=send_messages_request)

Send Messages

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.send_messages_request import SendMessagesRequest
from openapi_client.models.send_messages_response import SendMessagesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
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
    account_id = 'account_id_example' # str | Account to apply operations to
    send_messages_request = openapi_client.SendMessagesRequest() # SendMessagesRequest |  (optional)

    try:
        # Send Messages
        api_response = api_instance.messages_send(account_id, send_messages_request=send_messages_request)
        print("The response of MessagesApi->messages_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **send_messages_request** | [**SendMessagesRequest**](SendMessagesRequest.md)|  | [optional] 

### Return type

[**SendMessagesResponse**](SendMessagesResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

