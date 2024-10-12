# openapi_client.ConversationsApi

All URIs are relative to *https://api.sakari.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversations_close**](ConversationsApi.md#conversations_close) | **PUT** /v1/accounts/{accountId}/conversations/{conversationId}/close | Closes a conversation
[**conversations_fetch**](ConversationsApi.md#conversations_fetch) | **GET** /v1/accounts/{accountId}/conversations/{conversationId} | Fetch conversation by ID
[**conversations_fetch_all**](ConversationsApi.md#conversations_fetch_all) | **GET** /v1/accounts/{accountId}/conversations | Fetch conversations


# **conversations_close**
> ConversationResponse conversations_close(account_id, conversation_id)

Closes a conversation

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.conversation_response import ConversationResponse
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
    api_instance = openapi_client.ConversationsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    conversation_id = 'conversation_id_example' # str | ID of conversation

    try:
        # Closes a conversation
        api_response = api_instance.conversations_close(account_id, conversation_id)
        print("The response of ConversationsApi->conversations_close:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_close: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **conversation_id** | **str**| ID of conversation | 

### Return type

[**ConversationResponse**](ConversationResponse.md)

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

# **conversations_fetch**
> ConversationResponse conversations_fetch(account_id, conversation_id)

Fetch conversation by ID

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.conversation_response import ConversationResponse
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
    api_instance = openapi_client.ConversationsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    conversation_id = 'conversation_id_example' # str | ID of template to return

    try:
        # Fetch conversation by ID
        api_response = api_instance.conversations_fetch(account_id, conversation_id)
        print("The response of ConversationsApi->conversations_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_fetch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **conversation_id** | **str**| ID of template to return | 

### Return type

[**ConversationResponse**](ConversationResponse.md)

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

# **conversations_fetch_all**
> ConversationsResponse conversations_fetch_all(account_id, offset=offset, limit=limit)

Fetch conversations

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.conversations_response import ConversationsResponse
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
    api_instance = openapi_client.ConversationsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    offset = 56 # int | Results to skip when paginating through a result set (optional)
    limit = 56 # int | Maximum number of results to return (optional)

    try:
        # Fetch conversations
        api_response = api_instance.conversations_fetch_all(account_id, offset=offset, limit=limit)
        print("The response of ConversationsApi->conversations_fetch_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_fetch_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **offset** | **int**| Results to skip when paginating through a result set | [optional] 
 **limit** | **int**| Maximum number of results to return | [optional] 

### Return type

[**ConversationsResponse**](ConversationsResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**4XX** | invalid request |  -  |
**5XX** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

