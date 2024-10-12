# openapi_client.SlackApi

All URIs are relative to *http://botschaft.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**slack_get_slack_get**](SlackApi.md#slack_get_slack_get) | **GET** /slack | Slack Get
[**slack_post_slack_post**](SlackApi.md#slack_post_slack_post) | **POST** /slack | Slack Post


# **slack_get_slack_get**
> object slack_get_slack_get(channel, message=message, base64_message=base64_message, authorization=authorization)

Slack Get

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://botschaft.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://botschaft.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SlackApi(api_client)
    channel = 'channel_example' # str | 
    message = 'message_example' # str |  (optional)
    base64_message = 'base64_message_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Slack Get
        api_response = api_instance.slack_get_slack_get(channel, message=message, base64_message=base64_message, authorization=authorization)
        print("The response of SlackApi->slack_get_slack_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SlackApi->slack_get_slack_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel** | **str**|  | 
 **message** | **str**|  | [optional] 
 **base64_message** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **slack_post_slack_post**
> object slack_post_slack_post(slack_message_request, authorization=authorization)

Slack Post

### Example


```python
import openapi_client
from openapi_client.models.slack_message_request import SlackMessageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://botschaft.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://botschaft.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SlackApi(api_client)
    slack_message_request = openapi_client.SlackMessageRequest() # SlackMessageRequest | 
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Slack Post
        api_response = api_instance.slack_post_slack_post(slack_message_request, authorization=authorization)
        print("The response of SlackApi->slack_post_slack_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SlackApi->slack_post_slack_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slack_message_request** | [**SlackMessageRequest**](SlackMessageRequest.md)|  | 
 **authorization** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

