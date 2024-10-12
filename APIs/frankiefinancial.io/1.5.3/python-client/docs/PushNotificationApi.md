# openapi_client.PushNotificationApi

All URIs are relative to *https://api.demo.frankiefinancial.io/compliance/v1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notify_result**](PushNotificationApi.md#notify_result) | **POST** /your/configured/path/{requestId} | Push Notification Payload


# **notify_result**
> notify_result(request_id, notifcation_result=notifcation_result)

Push Notification Payload

Whenever you request that a transaction be put into the background, there needs to be a mechanism for notifying you that the request has been completed. This notification will push you the high-level details of the result, and you can then query the results at your leisiure.  The same notification process will also be used to push alerts to your system. This means that RequestIDs may not match your records 

### Example


```python
import openapi_client
from openapi_client.models.notification_result_object import NotificationResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PushNotificationApi(api_client)
    request_id = 'request_id_example' # str | This will be the same RequestId that was sent in the 202 acceptance response. 
    notifcation_result = openapi_client.NotificationResultObject() # NotificationResultObject |  (optional)

    try:
        # Push Notification Payload
        api_instance.notify_result(request_id, notifcation_result=notifcation_result)
    except Exception as e:
        print("Exception when calling PushNotificationApi->notify_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**| This will be the same RequestId that was sent in the 202 acceptance response.  | 
 **notifcation_result** | [**NotificationResultObject**](NotificationResultObject.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Customer has accepted the notification and we don&#39;t need to retry sending it. |  -  |
**400** | The notification represents a type of notification the customer was not expecting, or can accept. No retry. |  -  |
**500** | The Customer cannot accept the notification at this time. Please resend again later |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

