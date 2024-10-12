# openapi_client.NotificationsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notifications_post_mail**](NotificationsApi.md#notifications_post_mail) | **POST** /api/v2/Notifications | Sends an email message.


# **notifications_post_mail**
> notifications_post_mail(api_models_notification)

Sends an email message.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_notification import APIModelsNotification
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationsApi(api_client)
    api_models_notification = openapi_client.APIModelsNotification() # APIModelsNotification | The Notification Object.

    try:
        # Sends an email message.
        api_instance.notifications_post_mail(api_models_notification)
    except Exception as e:
        print("Exception when calling NotificationsApi->notifications_post_mail: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_models_notification** | [**APIModelsNotification**](APIModelsNotification.md)| The Notification Object. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

