# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/v1/messages*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_message**](DefaultApi.md#send_message) | **POST** / | Send a message to the given channel.


# **send_message**
> SendMessage202Response send_message(send_message_request)

Send a message to the given channel.

Send a Message

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.send_message202_response import SendMessage202Response
from openapi_client.models.send_message_request import SendMessageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/messages
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/messages"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    send_message_request = openapi_client.SendMessageRequest() # SendMessageRequest | Send a Message.

    try:
        # Send a message to the given channel.
        api_response = api_instance.send_message(send_message_request)
        print("The response of DefaultApi->send_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->send_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_message_request** | [**SendMessageRequest**](SendMessageRequest.md)| Send a Message. | 

### Return type

[**SendMessage202Response**](SendMessage202Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted. |  -  |
**401** | Authentication failure |  -  |
**402** | Payment Required |  -  |
**422** | Unprocessable Entity |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

