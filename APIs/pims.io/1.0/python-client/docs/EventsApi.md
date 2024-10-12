# openapi_client.EventsApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_events**](EventsApi.md#fetch_all_events) | **GET** /events | Find all events
[**fetch_all_series_events**](EventsApi.md#fetch_all_series_events) | **GET** /series/{series_id}/events | Find all events for one series
[**fetch_all_venues_events**](EventsApi.md#fetch_all_venues_events) | **GET** /venues/{venue_id}/events | Find all events for one venue
[**fetch_one_event**](EventsApi.md#fetch_one_event) | **GET** /events/{event_id} | Get one event by ID


# **fetch_all_events**
> List[EventsEntity] fetch_all_events(label=label, from_datetime=from_datetime, to_datetime=to_datetime, city=city, sort=sort, page_size=page_size, accept_language=accept_language)

Find all events

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_entity import EventsEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    label = 'label_example' # str | Find only the events whose label contains this value. (optional)
    from_datetime = '2013-10-20' # date | Find only the events starting after this date. (optional)
    to_datetime = '2013-10-20' # date | Find only the events starting before this date. (optional)
    city = 'city_example' # str | Find only the events whose venue city (or metropolitan area) contains this value. (optional)
    sort = label # str | Sort the events in the corresponding order. (optional) (default to label)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all events
        api_response = api_instance.fetch_all_events(label=label, from_datetime=from_datetime, to_datetime=to_datetime, city=city, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of EventsApi->fetch_all_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->fetch_all_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **str**| Find only the events whose label contains this value. | [optional] 
 **from_datetime** | **date**| Find only the events starting after this date. | [optional] 
 **to_datetime** | **date**| Find only the events starting before this date. | [optional] 
 **city** | **str**| Find only the events whose venue city (or metropolitan area) contains this value. | [optional] 
 **sort** | **str**| Sort the events in the corresponding order. | [optional] [default to label]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[EventsEntity]**](EventsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of events |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_all_series_events**
> List[EventsEntity] fetch_all_series_events(series_id, from_datetime=from_datetime, to_datetime=to_datetime, city=city, sort=sort, page_size=page_size, accept_language=accept_language)

Find all events for one series

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_entity import EventsEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    series_id = 56 # int | ID of the targeted series.
    from_datetime = '2013-10-20' # date | Find only the events starting after this date. (optional)
    to_datetime = '2013-10-20' # date | Find only the events starting before this date. (optional)
    city = 'city_example' # str | Find only the events whose venue city (or metropolitan area) contains this value. (optional)
    sort = label # str | Sort the events in the corresponding order. (optional) (default to label)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all events for one series
        api_response = api_instance.fetch_all_series_events(series_id, from_datetime=from_datetime, to_datetime=to_datetime, city=city, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of EventsApi->fetch_all_series_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->fetch_all_series_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **series_id** | **int**| ID of the targeted series. | 
 **from_datetime** | **date**| Find only the events starting after this date. | [optional] 
 **to_datetime** | **date**| Find only the events starting before this date. | [optional] 
 **city** | **str**| Find only the events whose venue city (or metropolitan area) contains this value. | [optional] 
 **sort** | **str**| Sort the events in the corresponding order. | [optional] [default to label]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[EventsEntity]**](EventsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of events |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_all_venues_events**
> List[EventsEntity] fetch_all_venues_events(venue_id, from_datetime=from_datetime, to_datetime=to_datetime, city=city, sort=sort, page_size=page_size, accept_language=accept_language)

Find all events for one venue

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_entity import EventsEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    venue_id = 56 # int | ID of the targeted venue.
    from_datetime = '2013-10-20' # date | Find only the events starting after this date. (optional)
    to_datetime = '2013-10-20' # date | Find only the events starting before this date. (optional)
    city = 'city_example' # str | Find only the events whose venue city (or metropolitan area) contains this value. (optional)
    sort = label # str | Sort the events in the corresponding order. (optional) (default to label)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all events for one venue
        api_response = api_instance.fetch_all_venues_events(venue_id, from_datetime=from_datetime, to_datetime=to_datetime, city=city, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of EventsApi->fetch_all_venues_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->fetch_all_venues_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venue_id** | **int**| ID of the targeted venue. | 
 **from_datetime** | **date**| Find only the events starting after this date. | [optional] 
 **to_datetime** | **date**| Find only the events starting before this date. | [optional] 
 **city** | **str**| Find only the events whose venue city (or metropolitan area) contains this value. | [optional] 
 **sort** | **str**| Sort the events in the corresponding order. | [optional] [default to label]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[EventsEntity]**](EventsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of events |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_event**
> EventsEntity fetch_one_event(event_id, accept_language=accept_language)

Get one event by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_entity import EventsEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Get one event by ID
        api_response = api_instance.fetch_one_event(event_id, accept_language=accept_language)
        print("The response of EventsApi->fetch_one_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->fetch_one_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**EventsEntity**](EventsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one event |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

