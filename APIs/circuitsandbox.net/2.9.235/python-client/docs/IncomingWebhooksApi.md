# openapi_client.IncomingWebhooksApi

All URIs are relative to *https://circuitsandbox.net/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_incoming_webhook**](IncomingWebhooksApi.md#create_incoming_webhook) | **POST** /webhooks/incoming/create/{conversationId} | Create a new webhook for existing conversation.
[**delete_incoming_webhook**](IncomingWebhooksApi.md#delete_incoming_webhook) | **DELETE** /webhooks/incoming/{webhookId} | Delete an existing webhook
[**get_incoming_webhook_by_user**](IncomingWebhooksApi.md#get_incoming_webhook_by_user) | **GET** /webhooks/incoming/user/{userId} | Get all webhooks of a special user.
[**post_webhook_as_slack_message**](IncomingWebhooksApi.md#post_webhook_as_slack_message) | **POST** /webhooks/incoming/{webhookId} | Post text item for conversation via webhook.


# **create_incoming_webhook**
> IncomingWebhook create_incoming_webhook(conversation_id, name=name, user_id=user_id, description=description)

Create a new webhook for existing conversation.

Create a new webhook. Conversation must exist and creater has to be participant. OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.incoming_webhook import IncomingWebhook
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncomingWebhooksApi(api_client)
    conversation_id = 'conversation_id_example' # str | The id of the conversation.
    name = 'name_example' # str | The name of the webhook (optional)
    user_id = 'user_id_example' # str | The id of the user of the webhook (optional)
    description = 'description_example' # str | A short description of the webhook (optional)

    try:
        # Create a new webhook for existing conversation.
        api_response = api_instance.create_incoming_webhook(conversation_id, name=name, user_id=user_id, description=description)
        print("The response of IncomingWebhooksApi->create_incoming_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncomingWebhooksApi->create_incoming_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_id** | **str**| The id of the conversation. | 
 **name** | **str**| The name of the webhook | [optional] 
 **user_id** | **str**| The id of the user of the webhook | [optional] 
 **description** | **str**| A short description of the webhook | [optional] 

### Return type

[**IncomingWebhook**](IncomingWebhook.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created webhook object as JSON string. |  -  |
**400** | Could not create webhook. |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_incoming_webhook**
> delete_incoming_webhook(webhook_id)

Delete an existing webhook

Delete a new webhook. Webhook must exist OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncomingWebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | The id of the webhook

    try:
        # Delete an existing webhook
        api_instance.delete_incoming_webhook(webhook_id)
    except Exception as e:
        print("Exception when calling IncomingWebhooksApi->delete_incoming_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| The id of the webhook | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The webhook was deleted |  -  |
**401** | The authentication was not successful |  -  |
**404** | Could not find webhook |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_incoming_webhook_by_user**
> List[IncomingWebhook] get_incoming_webhook_by_user(user_id, pagesize=pagesize, searchpointer=searchpointer)

Get all webhooks of a special user.

Get all webhooks of a special user. OauthScopes: READ_CONVERSATIONS, MANAGE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.incoming_webhook import IncomingWebhook
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncomingWebhooksApi(api_client)
    user_id = 'user_id_example' # str | The id of the user.
    pagesize = 25 # float | Max number of hooks per request. Default is 25 (optional) (default to 25)
    searchpointer = 'searchpointer_example' # str | Start of search if consequtive call. (optional)

    try:
        # Get all webhooks of a special user.
        api_response = api_instance.get_incoming_webhook_by_user(user_id, pagesize=pagesize, searchpointer=searchpointer)
        print("The response of IncomingWebhooksApi->get_incoming_webhook_by_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncomingWebhooksApi->get_incoming_webhook_by_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The id of the user. | 
 **pagesize** | **float**| Max number of hooks per request. Default is 25 | [optional] [default to 25]
 **searchpointer** | **str**| Start of search if consequtive call. | [optional] 

### Return type

[**List[IncomingWebhook]**](IncomingWebhook.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Result successful |  -  |
**400** | The request cannot be fulfilled due to bad syntax |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_webhook_as_slack_message**
> post_webhook_as_slack_message(webhook_id, file_url=file_url, filename=filename, markdown=markdown, subject=subject, text=text)

Post text item for conversation via webhook.

Post text items to conversations via slack apps.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncomingWebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | The id of the webhook.
    file_url = 'file_url_example' # str | missing documentation (optional)
    filename = 'filename_example' # str | missing documentation (optional)
    markdown = True # bool | missing documentation (optional)
    subject = 'subject_example' # str | missing documentation (optional)
    text = 'text_example' # str | The text which will occur in the conversation. May contain formats like *bold* or _italic_ (optional)

    try:
        # Post text item for conversation via webhook.
        api_instance.post_webhook_as_slack_message(webhook_id, file_url=file_url, filename=filename, markdown=markdown, subject=subject, text=text)
    except Exception as e:
        print("Exception when calling IncomingWebhooksApi->post_webhook_as_slack_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| The id of the webhook. | 
 **file_url** | **str**| missing documentation | [optional] 
 **filename** | **str**| missing documentation | [optional] 
 **markdown** | **bool**| missing documentation | [optional] 
 **subject** | **str**| missing documentation | [optional] 
 **text** | **str**| The text which will occur in the conversation. May contain formats like *bold* or _italic_ | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message was posted to conversation |  -  |
**400** | The request cannot be fulfilled due to bad syntax |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

