# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/verify*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verify_check**](DefaultApi.md#verify_check) | **POST** /check/{format} | Verify Check
[**verify_control**](DefaultApi.md#verify_control) | **POST** /control/{format} | Verify Control
[**verify_request_with_psd2**](DefaultApi.md#verify_request_with_psd2) | **POST** /psd2/{format} | PSD2 (Payment Services Directive 2) Request
[**verify_search**](DefaultApi.md#verify_search) | **GET** /search/{format} | Verify Search


# **verify_check**
> VerifyCheck200Response verify_check(format, api_key, api_secret, code, request_id, ip_address=ip_address)

Verify Check

Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.  1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request. 2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.  *Note that this endpoint is available by `GET` request as well as `POST`.*

### Example


```python
import openapi_client
from openapi_client.models.verify_check200_response import VerifyCheck200Response
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
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'json' # str | The response format.
    api_key = 'api_key_example' # str | You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
    api_secret = 'api_secret_example' # str | You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
    code = 'code_example' # str | The verification code entered by your user.
    request_id = 'request_id_example' # str | The Verify request to check. This is the `request_id` you received in the response to the Verify request.
    ip_address = 'ip_address_example' # str | (This field is no longer used) (optional)

    try:
        # Verify Check
        api_response = api_instance.verify_check(format, api_key, api_secret, code, request_id, ip_address=ip_address)
        print("The response of DefaultApi->verify_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->verify_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The response format. | 
 **api_key** | **str**| You can find your API key in your [account dashboard](https://dashboard.nexmo.com) | 
 **api_secret** | **str**| You can find your API secret in your [account dashboard](https://dashboard.nexmo.com) | 
 **code** | **str**| The verification code entered by your user. | 
 **request_id** | **str**| The Verify request to check. This is the &#x60;request_id&#x60; you received in the response to the Verify request. | 
 **ip_address** | **str**| (This field is no longer used) | [optional] 

### Return type

[**VerifyCheck200Response**](VerifyCheck200Response.md)

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

# **verify_control**
> VerifyControl200Response verify_control(format, api_key, api_secret, cmd, request_id)

Verify Control

Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:   1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.  2. Check the `status` in the response.   *Note that this endpoint is available by `GET` request as well as `POST`.*

### Example


```python
import openapi_client
from openapi_client.models.verify_control200_response import VerifyControl200Response
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
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'json' # str | The response format.
    api_key = 'api_key_example' # str | You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
    api_secret = 'api_secret_example' # str | You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
    cmd = 'cmd_example' # str | The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.
    request_id = 'request_id_example' # str | The `request_id` you received in the response to the Verify request.

    try:
        # Verify Control
        api_response = api_instance.verify_control(format, api_key, api_secret, cmd, request_id)
        print("The response of DefaultApi->verify_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->verify_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The response format. | 
 **api_key** | **str**| You can find your API key in your [account dashboard](https://dashboard.nexmo.com) | 
 **api_secret** | **str**| You can find your API secret in your [account dashboard](https://dashboard.nexmo.com) | 
 **cmd** | **str**| The possible commands are &#x60;cancel&#x60; to request cancellation of the verification process, or &#x60;trigger_next_event&#x60; to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place. | 
 **request_id** | **str**| The &#x60;request_id&#x60; you received in the response to the Verify request. | 

### Return type

[**VerifyControl200Response**](VerifyControl200Response.md)

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

# **verify_request_with_psd2**
> VerifyRequestWithPSD2200Response verify_request_with_psd2(format, amount, api_key, api_secret, number, payee, code_length=code_length, country=country, lg=lg, next_event_wait=next_event_wait, pin_expiry=pin_expiry, workflow_id=workflow_id)

PSD2 (Payment Services Directive 2) Request

Use Verify request to generate and send a PIN to your user to authorize a payment: 1. Create a request to send a verification code to your user. 2. Check the `status` field in the response to ensure that your request was successful (zero is success). 3. Use the `request_id` field in the response for the Verify check. (Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)

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
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'json' # str | The response format.
    amount = 3.4 # float | The decimal amount of the payment to be confirmed, in Euros
    api_key = 'api_key_example' # str | You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
    api_secret = 'api_secret_example' # str | You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
    number = 'number_example' # str | The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
    payee = 'payee_example' # str | An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.
    code_length = 4 # int | The length of the verification code. (optional) (default to 4)
    country = 'country_example' # str | If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you. (optional)
    lg = en-gb # str | By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used. *Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si` (optional) (default to en-gb)
    next_event_wait = 300 # int | Specifies the wait time in seconds between attempts to deliver the verification code. (optional) (default to 300)
    pin_expiry = 300 # int | How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings). (optional) (default to 300)
    workflow_id = 1 # int | Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events). (optional) (default to 1)

    try:
        # PSD2 (Payment Services Directive 2) Request
        api_response = api_instance.verify_request_with_psd2(format, amount, api_key, api_secret, number, payee, code_length=code_length, country=country, lg=lg, next_event_wait=next_event_wait, pin_expiry=pin_expiry, workflow_id=workflow_id)
        print("The response of DefaultApi->verify_request_with_psd2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->verify_request_with_psd2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The response format. | 
 **amount** | **float**| The decimal amount of the payment to be confirmed, in Euros | 
 **api_key** | **str**| You can find your API key in your [account dashboard](https://dashboard.nexmo.com) | 
 **api_secret** | **str**| You can find your API secret in your [account dashboard](https://dashboard.nexmo.com) | 
 **number** | **str**| The mobile or landline phone number to verify. Unless you are setting &#x60;country&#x60; explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format. | 
 **payee** | **str**| An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to. | 
 **code_length** | **int**| The length of the verification code. | [optional] [default to 4]
 **country** | **str**| If you do not provide &#x60;number&#x60; in international format or you are not sure if &#x60;number&#x60; is correctly formatted, specify the two-character country code in &#x60;country&#x60;. Verify will then format the number for you. | [optional] 
 **lg** | **str**| By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the &#x60;number&#x60;. For example, the text message or TTS message for a &#x60;33*&#x60; number is sent in French. Use this parameter to explicitly control the language used. *Note: Voice calls in English for &#x60;bg-bg&#x60;, &#x60;ee-et&#x60;, &#x60;ga-ie&#x60;, &#x60;lv-lv&#x60;, &#x60;lt-lt&#x60;, &#x60;mt-mt&#x60;, &#x60;sk-sk&#x60;, &#x60;sk-si&#x60; | [optional] [default to en-gb]
 **next_event_wait** | **int**| Specifies the wait time in seconds between attempts to deliver the verification code. | [optional] [default to 300]
 **pin_expiry** | **int**| How long the generated verification code is valid for, in seconds. When you specify both &#x60;pin_expiry&#x60; and &#x60;next_event_wait&#x60; then &#x60;pin_expiry&#x60; must be an integer multiple of &#x60;next_event_wait&#x60; otherwise &#x60;pin_expiry&#x60; is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings). | [optional] [default to 300]
 **workflow_id** | **int**| Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events). | [optional] [default to 1]

### Return type

[**VerifyRequestWithPSD2200Response**](VerifyRequestWithPSD2200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_search**
> VerifySearch200Response verify_search(format, api_key, api_secret, request_id, request_ids=request_ids)

Verify Search

Use Verify search to check the status of past or current verification requests:  1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in. 2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.  *Note that this endpoint is available by `POST` request as well as `GET`.*

### Example


```python
import openapi_client
from openapi_client.models.verify_search200_response import VerifySearch200Response
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
    api_instance = openapi_client.DefaultApi(api_client)
    format = 'json' # str | The response format.
    api_key = 'api_key_example' # str | 
    api_secret = 'api_secret_example' # str | 
    request_id = 'abcdef0123456789abcdef0123456789' # str | The `request_id` you received in the Verify Request Response. Required if `request_ids` not provided.
    request_ids = ['request_ids_example'] # List[str] | More than one `request_id`. Each `request_id` is a new parameter in the Verify Search request. Required if `request_id` not provided. (optional)

    try:
        # Verify Search
        api_response = api_instance.verify_search(format, api_key, api_secret, request_id, request_ids=request_ids)
        print("The response of DefaultApi->verify_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->verify_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The response format. | 
 **api_key** | **str**|  | 
 **api_secret** | **str**|  | 
 **request_id** | **str**| The &#x60;request_id&#x60; you received in the Verify Request Response. Required if &#x60;request_ids&#x60; not provided. | 
 **request_ids** | [**List[str]**](str.md)| More than one &#x60;request_id&#x60;. Each &#x60;request_id&#x60; is a new parameter in the Verify Search request. Required if &#x60;request_id&#x60; not provided. | [optional] 

### Return type

[**VerifySearch200Response**](VerifySearch200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

