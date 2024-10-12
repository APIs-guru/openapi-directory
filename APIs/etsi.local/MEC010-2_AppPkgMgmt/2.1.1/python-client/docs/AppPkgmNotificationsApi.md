# openapi_client.AppPkgmNotificationsApi

All URIs are relative to *http://etsi.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_pkg_notification_post**](AppPkgmNotificationsApi.md#app_pkg_notification_post) | **POST** /user_defined_notification | Registers a notification endpoint to notify application package operations


# **app_pkg_notification_post**
> app_pkg_notification_post(app_pkg_notification)

Registers a notification endpoint to notify application package operations

Registers a notification endpoint to notify application package operations

### Example


```python
import openapi_client
from openapi_client.models.app_pkg_notification import AppPkgNotification
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmNotificationsApi(api_client)
    app_pkg_notification = openapi_client.AppPkgNotification() # AppPkgNotification | Notification endpoint to be created

    try:
        # Registers a notification endpoint to notify application package operations
        api_instance.app_pkg_notification_post(app_pkg_notification)
    except Exception as e:
        print("Exception when calling AppPkgmNotificationsApi->app_pkg_notification_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_pkg_notification** | [**AppPkgNotification**](AppPkgNotification.md)| Notification endpoint to be created | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

