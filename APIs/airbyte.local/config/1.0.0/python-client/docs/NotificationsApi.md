# openapi_client.NotificationsApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**try_notification_config**](NotificationsApi.md#try_notification_config) | **POST** /v1/notifications/try | Try sending a notifications


# **try_notification_config**
> NotificationRead try_notification_config(notification)

Try sending a notifications

### Example


```python
import openapi_client
from openapi_client.models.notification import Notification
from openapi_client.models.notification_read import NotificationRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationsApi(api_client)
    notification = openapi_client.Notification() # Notification | 

    try:
        # Try sending a notifications
        api_response = api_instance.try_notification_config(notification)
        print("The response of NotificationsApi->try_notification_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->try_notification_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | [**Notification**](Notification.md)|  | 

### Return type

[**NotificationRead**](NotificationRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

