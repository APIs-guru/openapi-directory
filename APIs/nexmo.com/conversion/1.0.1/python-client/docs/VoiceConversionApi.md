# openapi_client.VoiceConversionApi

All URIs are relative to *https://api.nexmo.com/conversions*

Method | HTTP request | Description
------------- | ------------- | -------------
[**voice_conversion**](VoiceConversionApi.md#voice_conversion) | **POST** /voice | Tell Nexmo if your voice call was successful


# **voice_conversion**
> voice_conversion(message_id, delivered, timestamp)

Tell Nexmo if your voice call was successful

Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSig):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/conversions
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/conversions"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSig
configuration.api_key['apiSig'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSig'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VoiceConversionApi(api_client)
    message_id = '00A0B0C0' # str | The ID you receive in the response to a request. * From the Verify API - use the `event_id` in the response to Verify Check. * From the SMS API - use the `message-id` * From the Text-To-Speech API - use the `call-id` * From the Text-To-Speech-Prompt API - use the `call-id`
    delivered = true # bool | Set to _true_ if your user replied to the message you sent. Otherwise, set to _false_. **Note**: for curl, use 0 and 1.
    timestamp = '2020-01-01 12:00:00' # str | When the user completed your call-to-action (e.g. visited your website, installed your app) in [UTC±00:00](https://en.wikipedia.org/wiki/UTC%C2%B100:00) format: _yyyy-MM-dd HH:mm:ss_. If you do not set this parameter, Nexmo uses the time it receives this request.

    try:
        # Tell Nexmo if your voice call was successful
        api_instance.voice_conversion(message_id, delivered, timestamp)
    except Exception as e:
        print("Exception when calling VoiceConversionApi->voice_conversion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **str**| The ID you receive in the response to a request. * From the Verify API - use the &#x60;event_id&#x60; in the response to Verify Check. * From the SMS API - use the &#x60;message-id&#x60; * From the Text-To-Speech API - use the &#x60;call-id&#x60; * From the Text-To-Speech-Prompt API - use the &#x60;call-id&#x60; | 
 **delivered** | **bool**| Set to _true_ if your user replied to the message you sent. Otherwise, set to _false_. **Note**: for curl, use 0 and 1. | 
 **timestamp** | **str**| When the user completed your call-to-action (e.g. visited your website, installed your app) in [UTC±00:00](https://en.wikipedia.org/wiki/UTC%C2%B100:00) format: _yyyy-MM-dd HH:mm:ss_. If you do not set this parameter, Nexmo uses the time it receives this request. | 

### Return type

void (empty response body)

### Authorization

[apiKey](../README.md#apiKey), [apiSig](../README.md#apiSig), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Wrong credentials |  -  |
**402** | Conversion has not been enabled for your account |  -  |
**420** | Invalid parameters |  -  |
**423** | Invalid parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

