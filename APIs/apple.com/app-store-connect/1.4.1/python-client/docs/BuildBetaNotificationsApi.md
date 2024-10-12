# openapi_client.BuildBetaNotificationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**build_beta_notifications_create_instance**](BuildBetaNotificationsApi.md#build_beta_notifications_create_instance) | **POST** /v1/buildBetaNotifications | 


# **build_beta_notifications_create_instance**
> BuildBetaNotificationResponse build_beta_notifications_create_instance(build_beta_notification_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.build_beta_notification_create_request import BuildBetaNotificationCreateRequest
from openapi_client.models.build_beta_notification_response import BuildBetaNotificationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildBetaNotificationsApi(api_client)
    build_beta_notification_create_request = openapi_client.BuildBetaNotificationCreateRequest() # BuildBetaNotificationCreateRequest | BuildBetaNotification representation

    try:
        api_response = api_instance.build_beta_notifications_create_instance(build_beta_notification_create_request)
        print("The response of BuildBetaNotificationsApi->build_beta_notifications_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildBetaNotificationsApi->build_beta_notifications_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_beta_notification_create_request** | [**BuildBetaNotificationCreateRequest**](BuildBetaNotificationCreateRequest.md)| BuildBetaNotification representation | 

### Return type

[**BuildBetaNotificationResponse**](BuildBetaNotificationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BuildBetaNotification |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

