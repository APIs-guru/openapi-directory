# openapi_client.TwilioApi

All URIs are relative to *http://botschaft.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**twilio_message_get_twilio_get**](TwilioApi.md#twilio_message_get_twilio_get) | **GET** /twilio | Twilio Message Get
[**twilio_message_post_twilio_post**](TwilioApi.md#twilio_message_post_twilio_post) | **POST** /twilio | Twilio Message Post


# **twilio_message_get_twilio_get**
> object twilio_message_get_twilio_get(to, message=message, base64_message=base64_message, authorization=authorization)

Twilio Message Get

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
    api_instance = openapi_client.TwilioApi(api_client)
    to = 'to_example' # str | 
    message = 'message_example' # str |  (optional)
    base64_message = 'base64_message_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Twilio Message Get
        api_response = api_instance.twilio_message_get_twilio_get(to, message=message, base64_message=base64_message, authorization=authorization)
        print("The response of TwilioApi->twilio_message_get_twilio_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TwilioApi->twilio_message_get_twilio_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **to** | **str**|  | 
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

# **twilio_message_post_twilio_post**
> object twilio_message_post_twilio_post(twilio_message_request, authorization=authorization)

Twilio Message Post

### Example


```python
import openapi_client
from openapi_client.models.twilio_message_request import TwilioMessageRequest
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
    api_instance = openapi_client.TwilioApi(api_client)
    twilio_message_request = openapi_client.TwilioMessageRequest() # TwilioMessageRequest | 
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Twilio Message Post
        api_response = api_instance.twilio_message_post_twilio_post(twilio_message_request, authorization=authorization)
        print("The response of TwilioApi->twilio_message_post_twilio_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TwilioApi->twilio_message_post_twilio_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **twilio_message_request** | [**TwilioMessageRequest**](TwilioMessageRequest.md)|  | 
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

