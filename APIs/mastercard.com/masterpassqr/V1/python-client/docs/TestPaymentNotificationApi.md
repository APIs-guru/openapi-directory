# openapi_client.TestPaymentNotificationApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_notification_payment_retry**](TestPaymentNotificationApi.md#send_notification_payment_retry) | **POST** /send/v1/partners/{partnerId}/events/generate/payment | Client can simulate a Mastercard Merchant Presented QR Payment notification to the registered URL endpoint. 


# **send_notification_payment_retry**
> NotificationResponse162Wrapper send_notification_payment_retry(partner_id, notification_request=notification_request)

Client can simulate a Mastercard Merchant Presented QR Payment notification to the registered URL endpoint. 

Client can simulate a Mastercard Merchant Presented QR Payment notification to the registered URL endpoint. 

### Example


```python
import openapi_client
from openapi_client.models.notification_request159_wrapper import NotificationRequest159Wrapper
from openapi_client.models.notification_response162_wrapper import NotificationResponse162Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestPaymentNotificationApi(api_client)
    partner_id = 'partner_id_example' # str | Path Param - Provider assigned partner id. Details - string, 32
    notification_request = openapi_client.NotificationRequest159Wrapper() # NotificationRequest159Wrapper | Contains the details of the request message. (optional)

    try:
        # Client can simulate a Mastercard Merchant Presented QR Payment notification to the registered URL endpoint. 
        api_response = api_instance.send_notification_payment_retry(partner_id, notification_request=notification_request)
        print("The response of TestPaymentNotificationApi->send_notification_payment_retry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestPaymentNotificationApi->send_notification_payment_retry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **notification_request** | [**NotificationRequest159Wrapper**](NotificationRequest159Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**NotificationResponse162Wrapper**](NotificationResponse162Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: N/A

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the details of the response message. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

