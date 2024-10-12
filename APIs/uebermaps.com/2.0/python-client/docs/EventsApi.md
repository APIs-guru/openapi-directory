# openapi_client.EventsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**events_get**](EventsApi.md#events_get) | **GET** /events | List your own events
[**events_id_delete**](EventsApi.md#events_id_delete) | **DELETE** /events/{id} | Delete event
[**events_id_get**](EventsApi.md#events_id_get) | **GET** /events/{id} | Get event
[**events_id_patch**](EventsApi.md#events_id_patch) | **PATCH** /events/{id} | Update event
[**spots_id_events_get**](EventsApi.md#spots_id_events_get) | **GET** /spots/{id}/events | List events for a given spot
[**spots_id_events_post**](EventsApi.md#spots_id_events_post) | **POST** /spots/{id}/events | Create event


# **events_get**
> List[Event] events_get(timeframe_start=timeframe_start, timeframe_end=timeframe_end, bounds=bounds)

List your own events

List your own events.

### Example


```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    timeframe_start = 'timeframe_start_example' # str | Begin of time range of event (ISO 8601 date format). (optional)
    timeframe_end = 'timeframe_end_example' # str | End of time range of event (ISO 8601 date format). (optional)
    bounds = 'bounds_example' # str | To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792 (optional)

    try:
        # List your own events
        api_response = api_instance.events_get(timeframe_start=timeframe_start, timeframe_end=timeframe_end, bounds=bounds)
        print("The response of EventsApi->events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeframe_start** | **str**| Begin of time range of event (ISO 8601 date format). | [optional] 
 **timeframe_end** | **str**| End of time range of event (ISO 8601 date format). | [optional] 
 **bounds** | **str**| To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within &#39;Hamburg, St. Pauli&#39;:                                                             bounds[sw_lat]&#x3D;53.54831449741324                                                             bounds[sw_lon]&#x3D;9.943227767944336                                                             bounds[ne_lat]&#x3D;53.5571103674878                                                             bounds[ne_lon]&#x3D;9.9776029586792 | [optional] 

### Return type

[**List[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of events. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_id_delete**
> Event events_id_delete(id)

Delete event

Delete event.

### Example


```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    id = 56 # int | Event id

    try:
        # Delete event
        api_response = api_instance.events_id_delete(id)
        print("The response of EventsApi->events_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Event id | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains deleted event. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_id_get**
> Event events_id_get(id)

Get event

Get basic information about an event

### Example


```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    id = 56 # int | Id of event

    try:
        # Get event
        api_response = api_instance.events_id_get(id)
        print("The response of EventsApi->events_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of event | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains event data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_id_patch**
> Map events_id_patch(id, event=event)

Update event

Update event. Wrap event parameters in [event].

### Example


```python
import openapi_client
from openapi_client.models.event_editable import EventEditable
from openapi_client.models.map import Map
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    id = 56 # int | Event id
    event = openapi_client.EventEditable() # EventEditable | Event attributes (optional)

    try:
        # Update event
        api_response = api_instance.events_id_patch(id, event=event)
        print("The response of EventsApi->events_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Event id | 
 **event** | [**EventEditable**](EventEditable.md)| Event attributes | [optional] 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains map data, map settings and your relation to this map |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_events_get**
> List[Event] spots_id_events_get(id, timeframe_start=timeframe_start, timeframe_end=timeframe_end, bounds=bounds)

List events for a given spot

List maps for a given spot.

### Example


```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    id = 56 # int | Id of spot
    timeframe_start = 'timeframe_start_example' # str | Begin of time range of event (ISO 8601 date format). (optional)
    timeframe_end = 'timeframe_end_example' # str | End of time range of event (ISO 8601 date format). (optional)
    bounds = 'bounds_example' # str | To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792 (optional)

    try:
        # List events for a given spot
        api_response = api_instance.spots_id_events_get(id, timeframe_start=timeframe_start, timeframe_end=timeframe_end, bounds=bounds)
        print("The response of EventsApi->spots_id_events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->spots_id_events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of spot | 
 **timeframe_start** | **str**| Begin of time range of event (ISO 8601 date format). | [optional] 
 **timeframe_end** | **str**| End of time range of event (ISO 8601 date format). | [optional] 
 **bounds** | **str**| To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within &#39;Hamburg, St. Pauli&#39;:                                                             bounds[sw_lat]&#x3D;53.54831449741324                                                             bounds[sw_lon]&#x3D;9.943227767944336                                                             bounds[ne_lat]&#x3D;53.5571103674878                                                             bounds[ne_lon]&#x3D;9.9776029586792 | [optional] 

### Return type

[**List[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of events. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_events_post**
> Event spots_id_events_post(id, event=event)

Create event

Create event. Wrap map parameters in [event].

### Example


```python
import openapi_client
from openapi_client.models.event import Event
from openapi_client.models.event_editable import EventEditable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    id = 56 # int | Spot id
    event = openapi_client.EventEditable() # EventEditable | Event attributes (optional)

    try:
        # Create event
        api_response = api_instance.spots_id_events_post(id, event=event)
        print("The response of EventsApi->spots_id_events_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->spots_id_events_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Spot id | 
 **event** | [**EventEditable**](EventEditable.md)| Event attributes | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains event data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

