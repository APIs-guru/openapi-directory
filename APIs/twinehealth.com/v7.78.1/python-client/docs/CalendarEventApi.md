# openapi_client.CalendarEventApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_calendar_event**](CalendarEventApi.md#create_calendar_event) | **POST** /calendar_event | Create calendar event
[**delete_calendar_event**](CalendarEventApi.md#delete_calendar_event) | **DELETE** /calendar_event/{id} | Delete a calendar event
[**fetch_calendar_event**](CalendarEventApi.md#fetch_calendar_event) | **GET** /calendar_event/{id} | Get a calendar event
[**fetch_calendar_events**](CalendarEventApi.md#fetch_calendar_events) | **GET** /calendar_event | List calendar events
[**update_calendar_event**](CalendarEventApi.md#update_calendar_event) | **PATCH** /calendar_event/{id} | Update a calendar event


# **create_calendar_event**
> CreateCalendarEventResponse create_calendar_event(create_calendar_event_request)

Create calendar event

Create a calendar event for a patient. Attribute `all_day` must be set to `true` and `end_at` cannot be set for `plan-check-in` event type.

### Example


```python
import openapi_client
from openapi_client.models.create_calendar_event_request import CreateCalendarEventRequest
from openapi_client.models.create_calendar_event_response import CreateCalendarEventResponse
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
    api_instance = openapi_client.CalendarEventApi(api_client)
    create_calendar_event_request = openapi_client.CreateCalendarEventRequest() # CreateCalendarEventRequest | 

    try:
        # Create calendar event
        api_response = api_instance.create_calendar_event(create_calendar_event_request)
        print("The response of CalendarEventApi->create_calendar_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarEventApi->create_calendar_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_calendar_event_request** | [**CreateCalendarEventRequest**](CreateCalendarEventRequest.md)|  | 

### Return type

[**CreateCalendarEventResponse**](CreateCalendarEventResponse.md)

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

# **delete_calendar_event**
> delete_calendar_event(id)

Delete a calendar event

Delete a calendar event by id

### Example


```python
import openapi_client
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
    api_instance = openapi_client.CalendarEventApi(api_client)
    id = 'id_example' # str | Calendar event identifier

    try:
        # Delete a calendar event
        api_instance.delete_calendar_event(id)
    except Exception as e:
        print("Exception when calling CalendarEventApi->delete_calendar_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Calendar event identifier | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_calendar_event**
> FetchCalendarEventResponse fetch_calendar_event(id)

Get a calendar event

Get a calendar event by id

### Example


```python
import openapi_client
from openapi_client.models.fetch_calendar_event_response import FetchCalendarEventResponse
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
    api_instance = openapi_client.CalendarEventApi(api_client)
    id = 'id_example' # str | Calendar event identifier

    try:
        # Get a calendar event
        api_response = api_instance.fetch_calendar_event(id)
        print("The response of CalendarEventApi->fetch_calendar_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarEventApi->fetch_calendar_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Calendar event identifier | 

### Return type

[**FetchCalendarEventResponse**](FetchCalendarEventResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_calendar_events**
> FetchCalendarEventsResponse fetch_calendar_events(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, filter_attendees=filter_attendees, filter_type=filter_type, filter_completed=filter_completed, filter_start_at=filter_start_at, filter_end_at=filter_end_at, filter_completed_at=filter_completed_at, filter_created_at=filter_created_at, filter_updated_at=filter_updated_at, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor, include=include)

List calendar events

Get a list of calendar events

### Example


```python
import openapi_client
from openapi_client.models.fetch_calendar_events_response import FetchCalendarEventsResponse
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
    api_instance = openapi_client.CalendarEventApi(api_client)
    filter_patient = 'filter_patient_example' # str | Patient id to fetch calendar event. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.  (optional)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.  (optional)
    filter_attendees = 'filter_attendees_example' # str | Comma-separated list of coach or patient ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.  (optional)
    filter_type = 'filter_type_example' # str | Calendar event type (optional)
    filter_completed = True # bool | If not specified, return all calendar events. If set to `true` return only events marked as completed, if set to `false`, return only events not marked as completed yet. (optional)
    filter_start_at = 'filter_start_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events starting in November 2017 (America/New_York): `filter[start_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    filter_end_at = 'filter_end_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events ending in November 2017 (America/New_York): `filter[end_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    filter_completed_at = 'filter_completed_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events completed in November 2017 (America/New_York): `filter[completed_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    filter_created_at = 'filter_created_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    filter_updated_at = 'filter_updated_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    page_number = 1 # int | Page number (optional) (default to 1)
    page_size = 10 # int | Page size (optional) (default to 10)
    page_limit = 50 # int | Page limit (optional) (default to 50)
    page_cursor = 'page_cursor_example' # str | Page cursor (optional)
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # List calendar events
        api_response = api_instance.fetch_calendar_events(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, filter_attendees=filter_attendees, filter_type=filter_type, filter_completed=filter_completed, filter_start_at=filter_start_at, filter_end_at=filter_end_at, filter_completed_at=filter_completed_at, filter_created_at=filter_created_at, filter_updated_at=filter_updated_at, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor, include=include)
        print("The response of CalendarEventApi->fetch_calendar_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarEventApi->fetch_calendar_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Patient id to fetch calendar event. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, &#x60;filter[organization]&#x60;, or &#x60;filter[attendees]&#x60;.  | [optional] 
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, &#x60;filter[organization]&#x60;, or &#x60;filter[attendees]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, &#x60;filter[organization]&#x60;, or &#x60;filter[attendees]&#x60;.  | [optional] 
 **filter_attendees** | **str**| Comma-separated list of coach or patient ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, &#x60;filter[organization]&#x60;, or &#x60;filter[attendees]&#x60;.  | [optional] 
 **filter_type** | **str**| Calendar event type | [optional] 
 **filter_completed** | **bool**| If not specified, return all calendar events. If set to &#x60;true&#x60; return only events marked as completed, if set to &#x60;false&#x60;, return only events not marked as completed yet. | [optional] 
 **filter_start_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for events starting in November 2017 (America/New_York): &#x60;filter[start_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **filter_end_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for events ending in November 2017 (America/New_York): &#x60;filter[end_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **filter_completed_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for events completed in November 2017 (America/New_York): &#x60;filter[completed_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **filter_created_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for events created in November 2017 (America/New_York): &#x60;filter[created_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **filter_updated_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for events updated in November 2017 (America/New_York): &#x60;filter[updated_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **page_number** | **int**| Page number | [optional] [default to 1]
 **page_size** | **int**| Page size | [optional] [default to 10]
 **page_limit** | **int**| Page limit | [optional] [default to 50]
 **page_cursor** | **str**| Page cursor | [optional] 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchCalendarEventsResponse**](FetchCalendarEventsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_calendar_event**
> UpdateCalendarEventResponse update_calendar_event(id, update_calendar_event_request)

Update a calendar event

Update a calendar event for a patient. Attribute `all_day` must be true and `end_at` cannot be specified for `plan-check-in` event type. To mark a calendar event as 'completed', set `completed_at` and `completed_by` to desired values.  To mark a completed calendar event as 'not completed', set `completed_at` and `completed_by` to `null`. Attendees can be added or removed, but response status cannot be updated. Use the calendar event response api for response status updates instead.

### Example


```python
import openapi_client
from openapi_client.models.update_calendar_event_request import UpdateCalendarEventRequest
from openapi_client.models.update_calendar_event_response import UpdateCalendarEventResponse
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
    api_instance = openapi_client.CalendarEventApi(api_client)
    id = 'id_example' # str | Calendar event identifier
    update_calendar_event_request = openapi_client.UpdateCalendarEventRequest() # UpdateCalendarEventRequest | 

    try:
        # Update a calendar event
        api_response = api_instance.update_calendar_event(id, update_calendar_event_request)
        print("The response of CalendarEventApi->update_calendar_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarEventApi->update_calendar_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Calendar event identifier | 
 **update_calendar_event_request** | [**UpdateCalendarEventRequest**](UpdateCalendarEventRequest.md)|  | 

### Return type

[**UpdateCalendarEventResponse**](UpdateCalendarEventResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

