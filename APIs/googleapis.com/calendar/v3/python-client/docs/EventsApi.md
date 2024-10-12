# openapi_client.EventsApi

All URIs are relative to *https://www.googleapis.com/calendar/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calendar_events_delete**](EventsApi.md#calendar_events_delete) | **DELETE** /calendars/{calendarId}/events/{eventId} | 
[**calendar_events_get**](EventsApi.md#calendar_events_get) | **GET** /calendars/{calendarId}/events/{eventId} | 
[**calendar_events_import**](EventsApi.md#calendar_events_import) | **POST** /calendars/{calendarId}/events/import | 
[**calendar_events_insert**](EventsApi.md#calendar_events_insert) | **POST** /calendars/{calendarId}/events | 
[**calendar_events_instances**](EventsApi.md#calendar_events_instances) | **GET** /calendars/{calendarId}/events/{eventId}/instances | 
[**calendar_events_list**](EventsApi.md#calendar_events_list) | **GET** /calendars/{calendarId}/events | 
[**calendar_events_move**](EventsApi.md#calendar_events_move) | **POST** /calendars/{calendarId}/events/{eventId}/move | 
[**calendar_events_patch**](EventsApi.md#calendar_events_patch) | **PATCH** /calendars/{calendarId}/events/{eventId} | 
[**calendar_events_quick_add**](EventsApi.md#calendar_events_quick_add) | **POST** /calendars/{calendarId}/events/quickAdd | 
[**calendar_events_update**](EventsApi.md#calendar_events_update) | **PUT** /calendars/{calendarId}/events/{eventId} | 
[**calendar_events_watch**](EventsApi.md#calendar_events_watch) | **POST** /calendars/{calendarId}/events/watch | 


# **calendar_events_delete**
> calendar_events_delete(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, send_notifications=send_notifications, send_updates=send_updates)



Deletes an event.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    event_id = 'event_id_example' # str | Event identifier.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    send_notifications = True # bool | Deprecated. Please use sendUpdates instead.  Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false. (optional)
    send_updates = 'send_updates_example' # str | Guests who should receive notifications about the deletion of the event. (optional)

    try:
        api_instance.calendar_events_delete(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, send_notifications=send_notifications, send_updates=send_updates)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **event_id** | **str**| Event identifier. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **send_notifications** | **bool**| Deprecated. Please use sendUpdates instead.  Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false. | [optional] 
 **send_updates** | **str**| Guests who should receive notifications about the deletion of the event. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_get**
> Event calendar_events_get(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, max_attendees=max_attendees, time_zone=time_zone)



Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    event_id = 'event_id_example' # str | Event identifier.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    always_include_email = True # bool | Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). (optional)
    max_attendees = 56 # int | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. (optional)
    time_zone = 'time_zone_example' # str | Time zone used in the response. Optional. The default is the time zone of the calendar. (optional)

    try:
        api_response = api_instance.calendar_events_get(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, max_attendees=max_attendees, time_zone=time_zone)
        print("The response of EventsApi->calendar_events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **event_id** | **str**| Event identifier. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **always_include_email** | **bool**| Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). | [optional] 
 **max_attendees** | **int**| The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. | [optional] 
 **time_zone** | **str**| Time zone used in the response. Optional. The default is the time zone of the calendar. | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_import**
> Event calendar_events_import(calendar_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, conference_data_version=conference_data_version, supports_attachments=supports_attachments, event=event)



Imports an event. This operation is used to add a private copy of an existing event to a calendar.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    conference_data_version = 56 # int | Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. (optional)
    supports_attachments = True # bool | Whether API client performing operation supports event attachments. Optional. The default is False. (optional)
    event = openapi_client.Event() # Event |  (optional)

    try:
        api_response = api_instance.calendar_events_import(calendar_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, conference_data_version=conference_data_version, supports_attachments=supports_attachments, event=event)
        print("The response of EventsApi->calendar_events_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **conference_data_version** | **int**| Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event&#39;s body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. | [optional] 
 **supports_attachments** | **bool**| Whether API client performing operation supports event attachments. Optional. The default is False. | [optional] 
 **event** | [**Event**](Event.md)|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_insert**
> Event calendar_events_insert(calendar_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, conference_data_version=conference_data_version, max_attendees=max_attendees, send_notifications=send_notifications, send_updates=send_updates, supports_attachments=supports_attachments, event=event)



Creates an event.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    conference_data_version = 56 # int | Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. (optional)
    max_attendees = 56 # int | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. (optional)
    send_notifications = True # bool | Deprecated. Please use sendUpdates instead.  Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false. (optional)
    send_updates = 'send_updates_example' # str | Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false. (optional)
    supports_attachments = True # bool | Whether API client performing operation supports event attachments. Optional. The default is False. (optional)
    event = openapi_client.Event() # Event |  (optional)

    try:
        api_response = api_instance.calendar_events_insert(calendar_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, conference_data_version=conference_data_version, max_attendees=max_attendees, send_notifications=send_notifications, send_updates=send_updates, supports_attachments=supports_attachments, event=event)
        print("The response of EventsApi->calendar_events_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **conference_data_version** | **int**| Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event&#39;s body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. | [optional] 
 **max_attendees** | **int**| The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. | [optional] 
 **send_notifications** | **bool**| Deprecated. Please use sendUpdates instead.  Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false. | [optional] 
 **send_updates** | **str**| Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false. | [optional] 
 **supports_attachments** | **bool**| Whether API client performing operation supports event attachments. Optional. The default is False. | [optional] 
 **event** | [**Event**](Event.md)|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_instances**
> Events calendar_events_instances(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, max_attendees=max_attendees, max_results=max_results, original_start=original_start, page_token=page_token, show_deleted=show_deleted, time_max=time_max, time_min=time_min, time_zone=time_zone)



Returns instances of the specified recurring event.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.events import Events
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    event_id = 'event_id_example' # str | Recurring event identifier.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    always_include_email = True # bool | Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). (optional)
    max_attendees = 56 # int | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. (optional)
    max_results = 56 # int | Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. (optional)
    original_start = 'original_start_example' # str | The original start time of the instance in the result. Optional. (optional)
    page_token = 'page_token_example' # str | Token specifying which result page to return. Optional. (optional)
    show_deleted = True # bool | Whether to include deleted events (with status equals \"cancelled\") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False. (optional)
    time_max = 'time_max_example' # str | Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset. (optional)
    time_min = 'time_min_example' # str | Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset. (optional)
    time_zone = 'time_zone_example' # str | Time zone used in the response. Optional. The default is the time zone of the calendar. (optional)

    try:
        api_response = api_instance.calendar_events_instances(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, max_attendees=max_attendees, max_results=max_results, original_start=original_start, page_token=page_token, show_deleted=show_deleted, time_max=time_max, time_min=time_min, time_zone=time_zone)
        print("The response of EventsApi->calendar_events_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **event_id** | **str**| Recurring event identifier. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **always_include_email** | **bool**| Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). | [optional] 
 **max_attendees** | **int**| The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. | [optional] 
 **max_results** | **int**| Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. | [optional] 
 **original_start** | **str**| The original start time of the instance in the result. Optional. | [optional] 
 **page_token** | **str**| Token specifying which result page to return. Optional. | [optional] 
 **show_deleted** | **bool**| Whether to include deleted events (with status equals \&quot;cancelled\&quot;) in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False. | [optional] 
 **time_max** | **str**| Upper bound (exclusive) for an event&#39;s start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset. | [optional] 
 **time_min** | **str**| Lower bound (inclusive) for an event&#39;s end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset. | [optional] 
 **time_zone** | **str**| Time zone used in the response. Optional. The default is the time zone of the calendar. | [optional] 

### Return type

[**Events**](Events.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_list**
> Events calendar_events_list(calendar_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, event_types=event_types, i_cal_uid=i_cal_uid, max_attendees=max_attendees, max_results=max_results, order_by=order_by, page_token=page_token, private_extended_property=private_extended_property, q=q, shared_extended_property=shared_extended_property, show_deleted=show_deleted, show_hidden_invitations=show_hidden_invitations, single_events=single_events, sync_token=sync_token, time_max=time_max, time_min=time_min, time_zone=time_zone, updated_min=updated_min)



Returns events on the specified calendar.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.events import Events
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    always_include_email = True # bool | Deprecated and ignored. (optional)
    event_types = ['event_types_example'] # List[str] | Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. The default is [\"default\", \"focusTime\", \"outOfOffice\"]. (optional)
    i_cal_uid = 'i_cal_uid_example' # str | Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID. (optional)
    max_attendees = 56 # int | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. (optional)
    max_results = 56 # int | Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. (optional)
    order_by = 'order_by_example' # str | The order of the events returned in the result. Optional. The default is an unspecified, stable order. (optional)
    page_token = 'page_token_example' # str | Token specifying which result page to return. Optional. (optional)
    private_extended_property = ['private_extended_property_example'] # List[str] | Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints. (optional)
    q = 'q_example' # str | Free text search terms to find events that match these terms in the following fields:  - summary  - description  - location  - attendee's displayName  - attendee's email  - organizer's displayName  - organizer's email  - workingLocationProperties.officeLocation.buildingId  - workingLocationProperties.officeLocation.deskId  - workingLocationProperties.officeLocation.label  - workingLocationProperties.customLocation.label  These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for \"Office\" or \"Bureau\" returns working location events of type officeLocation, whereas searching for \"Out of office\" or \"Abwesend\" returns out-of-office events. Optional. (optional)
    shared_extended_property = ['shared_extended_property_example'] # List[str] | Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints. (optional)
    show_deleted = True # bool | Whether to include deleted events (with status equals \"cancelled\") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False. (optional)
    show_hidden_invitations = True # bool | Whether to include hidden invitations in the result. Optional. The default is False. (optional)
    single_events = True # bool | Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False. (optional)
    sync_token = 'sync_token_example' # str | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.  These are:  - iCalUID  - orderBy  - privateExtendedProperty  - q  - sharedExtendedProperty  - timeMin  - timeMax  - updatedMin All other query parameters should be the same as for the initial synchronization to avoid undefined behavior. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries. (optional)
    time_max = 'time_max_example' # str | Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin. (optional)
    time_min = 'time_min_example' # str | Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax. (optional)
    time_zone = 'time_zone_example' # str | Time zone used in the response. Optional. The default is the time zone of the calendar. (optional)
    updated_min = 'updated_min_example' # str | Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. (optional)

    try:
        api_response = api_instance.calendar_events_list(calendar_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, event_types=event_types, i_cal_uid=i_cal_uid, max_attendees=max_attendees, max_results=max_results, order_by=order_by, page_token=page_token, private_extended_property=private_extended_property, q=q, shared_extended_property=shared_extended_property, show_deleted=show_deleted, show_hidden_invitations=show_hidden_invitations, single_events=single_events, sync_token=sync_token, time_max=time_max, time_min=time_min, time_zone=time_zone, updated_min=updated_min)
        print("The response of EventsApi->calendar_events_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **always_include_email** | **bool**| Deprecated and ignored. | [optional] 
 **event_types** | [**List[str]**](str.md)| Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. The default is [\&quot;default\&quot;, \&quot;focusTime\&quot;, \&quot;outOfOffice\&quot;]. | [optional] 
 **i_cal_uid** | **str**| Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID. | [optional] 
 **max_attendees** | **int**| The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. | [optional] 
 **max_results** | **int**| Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. | [optional] 
 **order_by** | **str**| The order of the events returned in the result. Optional. The default is an unspecified, stable order. | [optional] 
 **page_token** | **str**| Token specifying which result page to return. Optional. | [optional] 
 **private_extended_property** | [**List[str]**](str.md)| Extended properties constraint specified as propertyName&#x3D;value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints. | [optional] 
 **q** | **str**| Free text search terms to find events that match these terms in the following fields:  - summary  - description  - location  - attendee&#39;s displayName  - attendee&#39;s email  - organizer&#39;s displayName  - organizer&#39;s email  - workingLocationProperties.officeLocation.buildingId  - workingLocationProperties.officeLocation.deskId  - workingLocationProperties.officeLocation.label  - workingLocationProperties.customLocation.label  These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for \&quot;Office\&quot; or \&quot;Bureau\&quot; returns working location events of type officeLocation, whereas searching for \&quot;Out of office\&quot; or \&quot;Abwesend\&quot; returns out-of-office events. Optional. | [optional] 
 **shared_extended_property** | [**List[str]**](str.md)| Extended properties constraint specified as propertyName&#x3D;value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints. | [optional] 
 **show_deleted** | **bool**| Whether to include deleted events (with status equals \&quot;cancelled\&quot;) in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False. | [optional] 
 **show_hidden_invitations** | **bool**| Whether to include hidden invitations in the result. Optional. The default is False. | [optional] 
 **single_events** | **bool**| Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False. | [optional] 
 **sync_token** | **str**| Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.  These are:  - iCalUID  - orderBy  - privateExtendedProperty  - q  - sharedExtendedProperty  - timeMin  - timeMax  - updatedMin All other query parameters should be the same as for the initial synchronization to avoid undefined behavior. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries. | [optional] 
 **time_max** | **str**| Upper bound (exclusive) for an event&#39;s start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin. | [optional] 
 **time_min** | **str**| Lower bound (exclusive) for an event&#39;s end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax. | [optional] 
 **time_zone** | **str**| Time zone used in the response. Optional. The default is the time zone of the calendar. | [optional] 
 **updated_min** | **str**| Lower bound for an event&#39;s last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. | [optional] 

### Return type

[**Events**](Events.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_move**
> Event calendar_events_move(calendar_id, event_id, destination, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, send_notifications=send_notifications, send_updates=send_updates)



Moves an event to another calendar, i.e. changes an event's organizer. Note that only default events can be moved; outOfOffice, focusTime and workingLocation events cannot be moved.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier of the source calendar where the event currently is on.
    event_id = 'event_id_example' # str | Event identifier.
    destination = 'destination_example' # str | Calendar identifier of the target calendar where the event is to be moved to.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    send_notifications = True # bool | Deprecated. Please use sendUpdates instead.  Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false. (optional)
    send_updates = 'send_updates_example' # str | Guests who should receive notifications about the change of the event's organizer. (optional)

    try:
        api_response = api_instance.calendar_events_move(calendar_id, event_id, destination, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, send_notifications=send_notifications, send_updates=send_updates)
        print("The response of EventsApi->calendar_events_move:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_move: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier of the source calendar where the event currently is on. | 
 **event_id** | **str**| Event identifier. | 
 **destination** | **str**| Calendar identifier of the target calendar where the event is to be moved to. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **send_notifications** | **bool**| Deprecated. Please use sendUpdates instead.  Whether to send notifications about the change of the event&#39;s organizer. Note that some emails might still be sent even if you set the value to false. The default is false. | [optional] 
 **send_updates** | **str**| Guests who should receive notifications about the change of the event&#39;s organizer. | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_patch**
> Event calendar_events_patch(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, conference_data_version=conference_data_version, max_attendees=max_attendees, send_notifications=send_notifications, send_updates=send_updates, supports_attachments=supports_attachments, event=event)



Updates an event. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    event_id = 'event_id_example' # str | Event identifier.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    always_include_email = True # bool | Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). (optional)
    conference_data_version = 56 # int | Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. (optional)
    max_attendees = 56 # int | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. (optional)
    send_notifications = True # bool | Deprecated. Please use sendUpdates instead.  Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. (optional)
    send_updates = 'send_updates_example' # str | Guests who should receive notifications about the event update (for example, title changes, etc.). (optional)
    supports_attachments = True # bool | Whether API client performing operation supports event attachments. Optional. The default is False. (optional)
    event = openapi_client.Event() # Event |  (optional)

    try:
        api_response = api_instance.calendar_events_patch(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, conference_data_version=conference_data_version, max_attendees=max_attendees, send_notifications=send_notifications, send_updates=send_updates, supports_attachments=supports_attachments, event=event)
        print("The response of EventsApi->calendar_events_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **event_id** | **str**| Event identifier. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **always_include_email** | **bool**| Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). | [optional] 
 **conference_data_version** | **int**| Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event&#39;s body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. | [optional] 
 **max_attendees** | **int**| The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. | [optional] 
 **send_notifications** | **bool**| Deprecated. Please use sendUpdates instead.  Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. | [optional] 
 **send_updates** | **str**| Guests who should receive notifications about the event update (for example, title changes, etc.). | [optional] 
 **supports_attachments** | **bool**| Whether API client performing operation supports event attachments. Optional. The default is False. | [optional] 
 **event** | [**Event**](Event.md)|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_quick_add**
> Event calendar_events_quick_add(calendar_id, text, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, send_notifications=send_notifications, send_updates=send_updates)



Creates an event based on a simple text string.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    text = 'text_example' # str | The text describing the event to be created.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    send_notifications = True # bool | Deprecated. Please use sendUpdates instead.  Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false. (optional)
    send_updates = 'send_updates_example' # str | Guests who should receive notifications about the creation of the new event. (optional)

    try:
        api_response = api_instance.calendar_events_quick_add(calendar_id, text, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, send_notifications=send_notifications, send_updates=send_updates)
        print("The response of EventsApi->calendar_events_quick_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_quick_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **text** | **str**| The text describing the event to be created. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **send_notifications** | **bool**| Deprecated. Please use sendUpdates instead.  Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false. | [optional] 
 **send_updates** | **str**| Guests who should receive notifications about the creation of the new event. | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_update**
> Event calendar_events_update(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, conference_data_version=conference_data_version, max_attendees=max_attendees, send_notifications=send_notifications, send_updates=send_updates, supports_attachments=supports_attachments, event=event)



Updates an event.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    event_id = 'event_id_example' # str | Event identifier.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    always_include_email = True # bool | Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). (optional)
    conference_data_version = 56 # int | Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. (optional)
    max_attendees = 56 # int | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. (optional)
    send_notifications = True # bool | Deprecated. Please use sendUpdates instead.  Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. (optional)
    send_updates = 'send_updates_example' # str | Guests who should receive notifications about the event update (for example, title changes, etc.). (optional)
    supports_attachments = True # bool | Whether API client performing operation supports event attachments. Optional. The default is False. (optional)
    event = openapi_client.Event() # Event |  (optional)

    try:
        api_response = api_instance.calendar_events_update(calendar_id, event_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, conference_data_version=conference_data_version, max_attendees=max_attendees, send_notifications=send_notifications, send_updates=send_updates, supports_attachments=supports_attachments, event=event)
        print("The response of EventsApi->calendar_events_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **event_id** | **str**| Event identifier. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **always_include_email** | **bool**| Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). | [optional] 
 **conference_data_version** | **int**| Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event&#39;s body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. | [optional] 
 **max_attendees** | **int**| The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. | [optional] 
 **send_notifications** | **bool**| Deprecated. Please use sendUpdates instead.  Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. | [optional] 
 **send_updates** | **str**| Guests who should receive notifications about the event update (for example, title changes, etc.). | [optional] 
 **supports_attachments** | **bool**| Whether API client performing operation supports event attachments. Optional. The default is False. | [optional] 
 **event** | [**Event**](Event.md)|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_events_watch**
> Channel calendar_events_watch(calendar_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, event_types=event_types, i_cal_uid=i_cal_uid, max_attendees=max_attendees, max_results=max_results, order_by=order_by, page_token=page_token, private_extended_property=private_extended_property, q=q, shared_extended_property=shared_extended_property, show_deleted=show_deleted, show_hidden_invitations=show_hidden_invitations, single_events=single_events, sync_token=sync_token, time_max=time_max, time_min=time_min, time_zone=time_zone, updated_min=updated_min, channel=channel)



Watch for changes to Events resources.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/calendar/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/calendar/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    calendar_id = 'calendar_id_example' # str | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \"primary\" keyword.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    always_include_email = True # bool | Deprecated and ignored. (optional)
    event_types = ['event_types_example'] # List[str] | Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. The default is [\"default\", \"focusTime\", \"outOfOffice\"]. (optional)
    i_cal_uid = 'i_cal_uid_example' # str | Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID. (optional)
    max_attendees = 56 # int | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. (optional)
    max_results = 56 # int | Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. (optional)
    order_by = 'order_by_example' # str | The order of the events returned in the result. Optional. The default is an unspecified, stable order. (optional)
    page_token = 'page_token_example' # str | Token specifying which result page to return. Optional. (optional)
    private_extended_property = ['private_extended_property_example'] # List[str] | Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints. (optional)
    q = 'q_example' # str | Free text search terms to find events that match these terms in the following fields:  - summary  - description  - location  - attendee's displayName  - attendee's email  - organizer's displayName  - organizer's email  - workingLocationProperties.officeLocation.buildingId  - workingLocationProperties.officeLocation.deskId  - workingLocationProperties.officeLocation.label  - workingLocationProperties.customLocation.label  These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for \"Office\" or \"Bureau\" returns working location events of type officeLocation, whereas searching for \"Out of office\" or \"Abwesend\" returns out-of-office events. Optional. (optional)
    shared_extended_property = ['shared_extended_property_example'] # List[str] | Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints. (optional)
    show_deleted = True # bool | Whether to include deleted events (with status equals \"cancelled\") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False. (optional)
    show_hidden_invitations = True # bool | Whether to include hidden invitations in the result. Optional. The default is False. (optional)
    single_events = True # bool | Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False. (optional)
    sync_token = 'sync_token_example' # str | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.  These are:  - iCalUID  - orderBy  - privateExtendedProperty  - q  - sharedExtendedProperty  - timeMin  - timeMax  - updatedMin All other query parameters should be the same as for the initial synchronization to avoid undefined behavior. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries. (optional)
    time_max = 'time_max_example' # str | Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin. (optional)
    time_min = 'time_min_example' # str | Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax. (optional)
    time_zone = 'time_zone_example' # str | Time zone used in the response. Optional. The default is the time zone of the calendar. (optional)
    updated_min = 'updated_min_example' # str | Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. (optional)
    channel = openapi_client.Channel() # Channel |  (optional)

    try:
        api_response = api_instance.calendar_events_watch(calendar_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, always_include_email=always_include_email, event_types=event_types, i_cal_uid=i_cal_uid, max_attendees=max_attendees, max_results=max_results, order_by=order_by, page_token=page_token, private_extended_property=private_extended_property, q=q, shared_extended_property=shared_extended_property, show_deleted=show_deleted, show_hidden_invitations=show_hidden_invitations, single_events=single_events, sync_token=sync_token, time_max=time_max, time_min=time_min, time_zone=time_zone, updated_min=updated_min, channel=channel)
        print("The response of EventsApi->calendar_events_watch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->calendar_events_watch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendar_id** | **str**| Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the \&quot;primary\&quot; keyword. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **always_include_email** | **bool**| Deprecated and ignored. | [optional] 
 **event_types** | [**List[str]**](str.md)| Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. The default is [\&quot;default\&quot;, \&quot;focusTime\&quot;, \&quot;outOfOffice\&quot;]. | [optional] 
 **i_cal_uid** | **str**| Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID. | [optional] 
 **max_attendees** | **int**| The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. | [optional] 
 **max_results** | **int**| Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. | [optional] 
 **order_by** | **str**| The order of the events returned in the result. Optional. The default is an unspecified, stable order. | [optional] 
 **page_token** | **str**| Token specifying which result page to return. Optional. | [optional] 
 **private_extended_property** | [**List[str]**](str.md)| Extended properties constraint specified as propertyName&#x3D;value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints. | [optional] 
 **q** | **str**| Free text search terms to find events that match these terms in the following fields:  - summary  - description  - location  - attendee&#39;s displayName  - attendee&#39;s email  - organizer&#39;s displayName  - organizer&#39;s email  - workingLocationProperties.officeLocation.buildingId  - workingLocationProperties.officeLocation.deskId  - workingLocationProperties.officeLocation.label  - workingLocationProperties.customLocation.label  These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for \&quot;Office\&quot; or \&quot;Bureau\&quot; returns working location events of type officeLocation, whereas searching for \&quot;Out of office\&quot; or \&quot;Abwesend\&quot; returns out-of-office events. Optional. | [optional] 
 **shared_extended_property** | [**List[str]**](str.md)| Extended properties constraint specified as propertyName&#x3D;value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints. | [optional] 
 **show_deleted** | **bool**| Whether to include deleted events (with status equals \&quot;cancelled\&quot;) in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False. | [optional] 
 **show_hidden_invitations** | **bool**| Whether to include hidden invitations in the result. Optional. The default is False. | [optional] 
 **single_events** | **bool**| Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False. | [optional] 
 **sync_token** | **str**| Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.  These are:  - iCalUID  - orderBy  - privateExtendedProperty  - q  - sharedExtendedProperty  - timeMin  - timeMax  - updatedMin All other query parameters should be the same as for the initial synchronization to avoid undefined behavior. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries. | [optional] 
 **time_max** | **str**| Upper bound (exclusive) for an event&#39;s start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin. | [optional] 
 **time_min** | **str**| Lower bound (exclusive) for an event&#39;s end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax. | [optional] 
 **time_zone** | **str**| Time zone used in the response. Optional. The default is the time zone of the calendar. | [optional] 
 **updated_min** | **str**| Lower bound for an event&#39;s last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. | [optional] 
 **channel** | [**Channel**](Channel.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

