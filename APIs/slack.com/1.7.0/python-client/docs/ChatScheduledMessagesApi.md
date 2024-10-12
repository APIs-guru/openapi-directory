# openapi_client.ChatScheduledMessagesApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chat_scheduled_messages_list**](ChatScheduledMessagesApi.md#chat_scheduled_messages_list) | **GET** /chat.scheduledMessages.list | 


# **chat_scheduled_messages_list**
> ChatScheduledMessagesListSchema chat_scheduled_messages_list(token=token, channel=channel, latest=latest, oldest=oldest, limit=limit, cursor=cursor)



Returns a list of scheduled messages.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.chat_scheduled_messages_list_schema import ChatScheduledMessagesListSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChatScheduledMessagesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none` (optional)
    channel = 'channel_example' # str | The channel of the scheduled messages (optional)
    latest = 3.4 # float | A UNIX timestamp of the latest value in the time range (optional)
    oldest = 3.4 # float | A UNIX timestamp of the oldest value in the time range (optional)
    limit = 56 # int | Maximum number of original entries to return. (optional)
    cursor = 'cursor_example' # str | For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from. (optional)

    try:
        api_response = api_instance.chat_scheduled_messages_list(token=token, channel=channel, latest=latest, oldest=oldest, limit=limit, cursor=cursor)
        print("The response of ChatScheduledMessagesApi->chat_scheduled_messages_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatScheduledMessagesApi->chat_scheduled_messages_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | [optional] 
 **channel** | **str**| The channel of the scheduled messages | [optional] 
 **latest** | **float**| A UNIX timestamp of the latest value in the time range | [optional] 
 **oldest** | **float**| A UNIX timestamp of the oldest value in the time range | [optional] 
 **limit** | **int**| Maximum number of original entries to return. | [optional] 
 **cursor** | **str**| For pagination purposes, this is the &#x60;cursor&#x60; value returned from a previous call to &#x60;chat.scheduledmessages.list&#x60; indicating where you want to start this call from. | [optional] 

### Return type

[**ChatScheduledMessagesListSchema**](ChatScheduledMessagesListSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response if the channel passed is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

