# openapi_client.DefaultApi

All URIs are relative to *https://rest.nexmo.com/sms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_an_sms**](DefaultApi.md#send_an_sms) | **POST** /{format} | Send an SMS


# **send_an_sms**
> SendAnSms200Response send_an_sms(format, api_key, var_from, to, account_ref=account_ref, api_secret=api_secret, body=body, param_callback=param_callback, client_ref=client_ref, content_id=content_id, entity_id=entity_id, message_class=message_class, protocol_id=protocol_id, sig=sig, status_report_req=status_report_req, text=text, ttl=ttl, type=type, udh=udh)

Send an SMS

Send an outbound SMS from your Vonage account

### Example


```python
import openapi_client
from openapi_client.models.send_an_sms200_response import SendAnSms200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com/sms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com/sms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    format = json # str | The format of the response (default to json)
    api_key = 'api_key_example' # str | Your API key
    var_from = 'var_from_example' # str | The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.
    to = 'to_example' # str | The number that the message should be sent to. Numbers are specified in E.164 format.
    account_ref = 'account_ref_example' # str | **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com) (optional)
    api_secret = 'api_secret_example' # str | Your API secret. Required unless `sig` is provided (optional)
    body = 'body_example' # str | **Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`. (optional)
    param_callback = 'param_callback_example' # str | **Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters. (optional)
    client_ref = 'client_ref_example' # str | **Advanced**: You can optionally include your own reference of up to 100 characters. (optional)
    content_id = 'content_id_example' # str | **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468) (optional)
    entity_id = 'entity_id_example' # str | **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468) (optional)
    message_class = 56 # int | **Advanced**: The Data Coding Scheme value of the message (optional)
    protocol_id = 56 # int | **Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`. (optional)
    sig = 'sig_example' # str | The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details. (optional)
    status_report_req = True # bool | **Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt). (optional) (default to True)
    text = 'text_example' # str | The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`. (optional)
    ttl = 259200000 # int | **Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes. (optional) (default to 259200000)
    type = text # str | **Advanced**: The format of the message body (optional) (default to text)
    udh = 'udh_example' # str | **Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`. (optional)

    try:
        # Send an SMS
        api_response = api_instance.send_an_sms(format, api_key, var_from, to, account_ref=account_ref, api_secret=api_secret, body=body, param_callback=param_callback, client_ref=client_ref, content_id=content_id, entity_id=entity_id, message_class=message_class, protocol_id=protocol_id, sig=sig, status_report_req=status_report_req, text=text, ttl=ttl, type=type, udh=udh)
        print("The response of DefaultApi->send_an_sms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->send_an_sms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The format of the response | [default to json]
 **api_key** | **str**| Your API key | 
 **var_from** | **str**| The name or number the message should be sent from. Alphanumeric senderID&#39;s are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format. | 
 **to** | **str**| The number that the message should be sent to. Numbers are specified in E.164 format. | 
 **account_ref** | **str**| **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com) | [optional] 
 **api_secret** | **str**| Your API secret. Required unless &#x60;sig&#x60; is provided | [optional] 
 **body** | **str**| **Advanced**: Hex encoded binary data. Depends on &#x60;type&#x60; parameter having the value &#x60;binary&#x60;. | [optional] 
 **param_callback** | **str**| **Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters. | [optional] 
 **client_ref** | **str**| **Advanced**: You can optionally include your own reference of up to 100 characters. | [optional] 
 **content_id** | **str**| **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468) | [optional] 
 **entity_id** | **str**| **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468) | [optional] 
 **message_class** | **int**| **Advanced**: The Data Coding Scheme value of the message | [optional] 
 **protocol_id** | **int**| **Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with &#x60;udh&#x60;. | [optional] 
 **sig** | **str**| The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details. | [optional] 
 **status_report_req** | **bool**| **Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt). | [optional] [default to True]
 **text** | **str**| The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the &#x60;type&#x60; to &#x60;text&#x60;. If your message contains characters outside this range, then you will need to set the &#x60;type&#x60; to &#x60;unicode&#x60;. | [optional] 
 **ttl** | **int**| **Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes. | [optional] [default to 259200000]
 **type** | **str**| **Advanced**: The format of the message body | [optional] [default to text]
 **udh** | **str**| **Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on &#x60;type&#x60; parameter having the value &#x60;binary&#x60;. | [optional] 

### Return type

[**SendAnSms200Response**](SendAnSms200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

