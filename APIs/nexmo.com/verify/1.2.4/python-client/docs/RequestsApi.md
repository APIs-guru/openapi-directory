# openapi_client.RequestsApi

All URIs are relative to *https://api.nexmo.com/verify*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verify_request**](RequestsApi.md#verify_request) | **POST** /{format} | Request a Verification


# **verify_request**
> VerifyRequestWithPSD2200Response verify_request(format, api_key, api_secret, brand, number, code_length=code_length, country=country, lg=lg, next_event_wait=next_event_wait, pin_code=pin_code, pin_expiry=pin_expiry, sender_id=sender_id, workflow_id=workflow_id)

Request a Verification

Use Verify request to generate and send a PIN to your user:  1. Create a request to send a verification code to your user.  2. Check the `status` field in the response to ensure that your request was successful (zero is success).  3. Use the `request_id` field in the response for the Verify check.  *Note that this endpoint is available by `GET` request as well as `POST`.*

### Example


```python
import openapi_client
from openapi_client.models.verify_request_with_psd2200_response import VerifyRequestWithPSD2200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/verify
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/verify"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequestsApi(api_client)
    format = 'json' # str | The response format.
    api_key = 'api_key_example' # str | You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
    api_secret = 'api_secret_example' # str | You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
    brand = 'brand_example' # str | An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: \\\"Your `Acme Inc` PIN is ...\\\"
    number = 'number_example' # str | The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
    code_length = 4 # int | The length of the verification code. (optional) (default to 4)
    country = 'country_example' # str | If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you. (optional)
    lg = en-us # str | By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages> (optional) (default to en-us)
    next_event_wait = 300 # int | Specifies the wait time in seconds between attempts to deliver the verification code. (optional) (default to 300)
    pin_code = 'pin_code_example' # str | A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. <b>This feature is not enabled by default</b> - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status `20` will be returned. (optional)
    pin_expiry = 300 # int | How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings). (optional) (default to 300)
    sender_id = 'VERIFY' # str | An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply. (optional) (default to 'VERIFY')
    workflow_id = 1 # int | Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events). (optional) (default to 1)

    try:
        # Request a Verification
        api_response = api_instance.verify_request(format, api_key, api_secret, brand, number, code_length=code_length, country=country, lg=lg, next_event_wait=next_event_wait, pin_code=pin_code, pin_expiry=pin_expiry, sender_id=sender_id, workflow_id=workflow_id)
        print("The response of RequestsApi->verify_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequestsApi->verify_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The response format. | 
 **api_key** | **str**| You can find your API key in your [account dashboard](https://dashboard.nexmo.com) | 
 **api_secret** | **str**| You can find your API secret in your [account dashboard](https://dashboard.nexmo.com) | 
 **brand** | **str**| An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: \\\&quot;Your &#x60;Acme Inc&#x60; PIN is ...\\\&quot; | 
 **number** | **str**| The mobile or landline phone number to verify. Unless you are setting &#x60;country&#x60; explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format. | 
 **code_length** | **int**| The length of the verification code. | [optional] [default to 4]
 **country** | **str**| If you do not provide &#x60;number&#x60; in international format or you are not sure if &#x60;number&#x60; is correctly formatted, specify the two-character country code in &#x60;country&#x60;. Verify will then format the number for you. | [optional] 
 **lg** | **str**| By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the &#x60;number&#x60;. For example, the text message or TTS message for a &#x60;33*&#x60; number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: &lt;https://developer.nexmo.com/verify/guides/verify-languages&gt; | [optional] [default to en-us]
 **next_event_wait** | **int**| Specifies the wait time in seconds between attempts to deliver the verification code. | [optional] [default to 300]
 **pin_code** | **str**| A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. &lt;b&gt;This feature is not enabled by default&lt;/b&gt; - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status &#x60;20&#x60; will be returned. | [optional] 
 **pin_expiry** | **int**| How long the generated verification code is valid for, in seconds. When you specify both &#x60;pin_expiry&#x60; and &#x60;next_event_wait&#x60; then &#x60;pin_expiry&#x60; must be an integer multiple of &#x60;next_event_wait&#x60; otherwise &#x60;pin_expiry&#x60; is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings). | [optional] [default to 300]
 **sender_id** | **str**| An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply. | [optional] [default to &#39;VERIFY&#39;]
 **workflow_id** | **int**| Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events). | [optional] [default to 1]

### Return type

[**VerifyRequestWithPSD2200Response**](VerifyRequestWithPSD2200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

