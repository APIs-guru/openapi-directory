# openapi_client.CapacitiesApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_events_capacities**](CapacitiesApi.md#fetch_all_events_capacities) | **GET** /events/{event_id}/capacities | Find all capacities for one event
[**fetch_one_event_capacity**](CapacitiesApi.md#fetch_one_event_capacity) | **GET** /events/{event_id}/capacities/{capacity_id} | Get one capacity by ID


# **fetch_all_events_capacities**
> List[EventsCapacitiesEntity] fetch_all_events_capacities(event_id, show_ignored=show_ignored, sort=sort, page_size=page_size)

Find all capacities for one event

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_capacities_entity import EventsCapacitiesEntity
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    show_ignored = False # bool | If set to `false`, show only the [event-]categories which are not ignored. If set to `true`, show everything. (optional) (default to False)
    sort = date # str | Sort the capacities in the corresponding order. (optional) (default to date)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)

    try:
        # Find all capacities for one event
        api_response = api_instance.fetch_all_events_capacities(event_id, show_ignored=show_ignored, sort=sort, page_size=page_size)
        print("The response of CapacitiesApi->fetch_all_events_capacities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->fetch_all_events_capacities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the [event-]categories which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]
 **sort** | **str**| Sort the capacities in the corresponding order. | [optional] [default to date]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]

### Return type

[**List[EventsCapacitiesEntity]**](EventsCapacitiesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of events capacities |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_event_capacity**
> EventsCapacitiesEntity fetch_one_event_capacity(event_id, capacity_id, show_ignored=show_ignored)

Get one capacity by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_capacities_entity import EventsCapacitiesEntity
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    capacity_id = 56 # int | ID of the targeted capacity.
    show_ignored = False # bool | If set to `false`, show only the [event-]categories which are not ignored. If set to `true`, show everything. (optional) (default to False)

    try:
        # Get one capacity by ID
        api_response = api_instance.fetch_one_event_capacity(event_id, capacity_id, show_ignored=show_ignored)
        print("The response of CapacitiesApi->fetch_one_event_capacity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->fetch_one_event_capacity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **capacity_id** | **int**| ID of the targeted capacity. | 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the [event-]categories which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]

### Return type

[**EventsCapacitiesEntity**](EventsCapacitiesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one event capacity |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

