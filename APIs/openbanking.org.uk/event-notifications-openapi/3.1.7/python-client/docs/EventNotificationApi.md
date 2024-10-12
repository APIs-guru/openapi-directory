# openapi_client.EventNotificationApi

All URIs are relative to *https://openbanking.org.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_event_notification**](EventNotificationApi.md#create_event_notification) | **POST** /event-notifications | Send an event notification


# **create_event_notification**
> create_event_notification(x_fapi_financial_id, body, x_fapi_interaction_id=x_fapi_interaction_id)

Send an event notification

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openbanking.org.uk
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openbanking.org.uk"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventNotificationApi(api_client)
    x_fapi_financial_id = 'x_fapi_financial_id_example' # str | The unique id of the ASPSP to which the request is issued. The unique id will be issued by OB.
    body = 'body_example' # str | Create an Callback URI
    x_fapi_interaction_id = 'x_fapi_interaction_id_example' # str | An RFC4122 UID used as a correlation id. (optional)

    try:
        # Send an event notification
        api_instance.create_event_notification(x_fapi_financial_id, body, x_fapi_interaction_id=x_fapi_interaction_id)
    except Exception as e:
        print("Exception when calling EventNotificationApi->create_event_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_fapi_financial_id** | **str**| The unique id of the ASPSP to which the request is issued. The unique id will be issued by OB. | 
 **body** | **str**| Create an Callback URI | 
 **x_fapi_interaction_id** | **str**| An RFC4122 UID used as a correlation id. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/jwt
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

