# openapi_client.CalendarEventResponseApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_calendar_event_response**](CalendarEventResponseApi.md#create_calendar_event_response) | **POST** /calendar_event_response | Create calendar event response


# **create_calendar_event_response**
> CreateCalendarEventResponseRequest create_calendar_event_response(create_calendar_event_response_request)

Create calendar event response

Create a calendar event response for an attendee of a calendar event, the attendee can be a coach or patient.  Calendar event responses cannot be fetched, updated nor deleted.  Use calendar event api to fetch the response status for attendees.

### Example


```python
import openapi_client
from openapi_client.models.create_calendar_event_response_request import CreateCalendarEventResponseRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalendarEventResponseApi(api_client)
    create_calendar_event_response_request = openapi_client.CreateCalendarEventResponseRequest() # CreateCalendarEventResponseRequest | 

    try:
        # Create calendar event response
        api_response = api_instance.create_calendar_event_response(create_calendar_event_response_request)
        print("The response of CalendarEventResponseApi->create_calendar_event_response:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarEventResponseApi->create_calendar_event_response: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_calendar_event_response_request** | [**CreateCalendarEventResponseRequest**](CreateCalendarEventResponseRequest.md)|  | 

### Return type

[**CreateCalendarEventResponseRequest**](CreateCalendarEventResponseRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

