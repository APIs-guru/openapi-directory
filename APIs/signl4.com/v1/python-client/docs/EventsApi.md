# openapi_client.EventsApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**events_event_id_overview_get**](EventsApi.md#events_event_id_overview_get) | **GET** /events/{eventId}/overview | Get overview event
[**events_event_id_parameters_get**](EventsApi.md#events_event_id_parameters_get) | **GET** /events/{eventId}/parameters | Get event parameters
[**events_paged_post**](EventsApi.md#events_paged_post) | **POST** /events/paged | Get overview event paged.


# **events_event_id_overview_get**
> OverviewEvent events_event_id_overview_get(event_id)

Get overview event

Get overview event by id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.overview_event import OverviewEvent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    event_id = 'event_id_example' # str | Id of event to get.

    try:
        # Get overview event
        api_response = api_instance.events_event_id_overview_get(event_id)
        print("The response of EventsApi->events_event_id_overview_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_event_id_overview_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **str**| Id of event to get. | 

### Return type

[**OverviewEvent**](OverviewEvent.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns overview event with specific id. |  -  |
**400** | Required parameters could not be found in the request/claims. |  -  |
**404** | Event with specified id could not be found. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_event_id_parameters_get**
> List[EventParameterInfo] events_event_id_parameters_get(event_id)

Get event parameters

Get parameters of an event by id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.event_parameter_info import EventParameterInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    event_id = 'event_id_example' # str | Event Id of the requested Alert.

    try:
        # Get event parameters
        api_response = api_instance.events_event_id_parameters_get(event_id)
        print("The response of EventsApi->events_event_id_parameters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_event_id_parameters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **str**| Event Id of the requested Alert. | 

### Return type

[**List[EventParameterInfo]**](EventParameterInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_paged_post**
> OverviewEventPagedResultsPublic events_paged_post(max_results=max_results, event_filter=event_filter)

Get overview event paged.

Get overview event paged. If there are more results, you also get a continuation token which you can add to the event filter.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.event_filter import EventFilter
from openapi_client.models.overview_event_paged_results_public import OverviewEventPagedResultsPublic
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    max_results = 56 # int | Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.                   Number of alerts could be less if filtered but at least 1. (optional)
    event_filter = openapi_client.EventFilter() # EventFilter | The filter defines which alerts are supposed to be retrieved. (optional)

    try:
        # Get overview event paged.
        api_response = api_instance.events_paged_post(max_results=max_results, event_filter=event_filter)
        print("The response of EventsApi->events_paged_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_paged_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max_results** | **int**| Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.                   Number of alerts could be less if filtered but at least 1. | [optional] 
 **event_filter** | [**EventFilter**](EventFilter.md)| The filter defines which alerts are supposed to be retrieved. | [optional] 

### Return type

[**OverviewEventPagedResultsPublic**](OverviewEventPagedResultsPublic.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns paged result with found events and continuation token, if database holds more events. |  -  |
**204** | No event could be found (with passed filter) |  -  |
**400** | Required parameters could not be found in the request/claims. |  -  |
**404** | Not Found |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

