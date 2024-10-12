# openapi_client.EventsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publish_events**](EventsApi.md#publish_events) | **POST** /api/events | 


# **publish_events**
> publish_events(api_version, events)



Publishes a batch of events to an Azure Event Grid topic.

### Example


```python
import openapi_client
from openapi_client.models.event_grid_event import EventGridEvent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    events = [openapi_client.EventGridEvent()] # List[EventGridEvent] | An array of events to be published to Event Grid.

    try:
        api_instance.publish_events(api_version, events)
    except Exception as e:
        print("Exception when calling EventsApi->publish_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **events** | [**List[EventGridEvent]**](EventGridEvent.md)| An array of events to be published to Event Grid. | 

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
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error.   * 429 Too Many Events   * 404 Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

