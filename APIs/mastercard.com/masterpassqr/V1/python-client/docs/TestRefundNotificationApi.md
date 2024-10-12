# openapi_client.TestRefundNotificationApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_notification_refund_retry**](TestRefundNotificationApi.md#send_notification_refund_retry) | **POST** /send/v1/partners/{partnerId}/events/generate/refund | Client can simulate a Mastercard Merchant Presented QR Refund notification to the registered URL endpoint. 


# **send_notification_refund_retry**
> NotificationResponse166Wrapper send_notification_refund_retry(partner_id, notification_request=notification_request)

Client can simulate a Mastercard Merchant Presented QR Refund notification to the registered URL endpoint. 

Client can simulate a Mastercard Merchant Presented QR Refund notification to the registered URL endpoint. 

### Example


```python
import openapi_client
from openapi_client.models.notification_request163_wrapper import NotificationRequest163Wrapper
from openapi_client.models.notification_response166_wrapper import NotificationResponse166Wrapper
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
    api_instance = openapi_client.TestRefundNotificationApi(api_client)
    partner_id = 'partner_id_example' # str | Path Param - Provider assigned partner id. Details - string, 32
    notification_request = openapi_client.NotificationRequest163Wrapper() # NotificationRequest163Wrapper | Contains the details of the request message. (optional)

    try:
        # Client can simulate a Mastercard Merchant Presented QR Refund notification to the registered URL endpoint. 
        api_response = api_instance.send_notification_refund_retry(partner_id, notification_request=notification_request)
        print("The response of TestRefundNotificationApi->send_notification_refund_retry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestRefundNotificationApi->send_notification_refund_retry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **notification_request** | [**NotificationRequest163Wrapper**](NotificationRequest163Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**NotificationResponse166Wrapper**](NotificationResponse166Wrapper.md)

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

