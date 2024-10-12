# openapi_client.CountsApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_detailed_ticket_counts**](CountsApi.md#fetch_all_detailed_ticket_counts) | **GET** /events/{event_id}/ticket-counts/detailed | Find all detailed ticket counts for one event
[**fetch_all_ticket_counts**](CountsApi.md#fetch_all_ticket_counts) | **GET** /events/{event_id}/ticket-counts | Find all ticket counts for one event
[**fetch_one_detailed_ticket_count**](CountsApi.md#fetch_one_detailed_ticket_count) | **GET** /events/{event_id}/ticket-counts/detailed/{ticket_count_id} | Get one detailed ticket count by ID
[**fetch_one_ticket_count**](CountsApi.md#fetch_one_ticket_count) | **GET** /events/{event_id}/ticket-counts/{ticket_count_id} | Get one ticket count by ID


# **fetch_all_detailed_ticket_counts**
> List[TicketCountsDetailedEntity] fetch_all_detailed_ticket_counts(event_id, from_date=from_date, to_date=to_date, show_ignored=show_ignored, show_not_approved=show_not_approved, sort=sort, page_size=page_size)

Find all detailed ticket counts for one event

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.ticket_counts_detailed_entity import TicketCountsDetailedEntity
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
    api_instance = openapi_client.CountsApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    from_date = '2013-10-20' # date | Find only the ticket counts after this date. (optional)
    to_date = '2013-10-20' # date | Find only the ticket counts before this date. (optional)
    show_ignored = False # bool | If set to `false`, show only the [event-]categories/[event-]price ranges/[event]channels which are not ignored. If set to `true`, show everything. (optional) (default to False)
    show_not_approved = False # bool | If set to `false`, show only the approved ticket counts. If set to `true`, show all the ticket counts. (optional) (default to False)
    sort = date # str | Sort the ticket counts in the corresponding order. (optional) (default to date)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)

    try:
        # Find all detailed ticket counts for one event
        api_response = api_instance.fetch_all_detailed_ticket_counts(event_id, from_date=from_date, to_date=to_date, show_ignored=show_ignored, show_not_approved=show_not_approved, sort=sort, page_size=page_size)
        print("The response of CountsApi->fetch_all_detailed_ticket_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountsApi->fetch_all_detailed_ticket_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **from_date** | **date**| Find only the ticket counts after this date. | [optional] 
 **to_date** | **date**| Find only the ticket counts before this date. | [optional] 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the [event-]categories/[event-]price ranges/[event]channels which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]
 **show_not_approved** | **bool**| If set to &#x60;false&#x60;, show only the approved ticket counts. If set to &#x60;true&#x60;, show all the ticket counts. | [optional] [default to False]
 **sort** | **str**| Sort the ticket counts in the corresponding order. | [optional] [default to date]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]

### Return type

[**List[TicketCountsDetailedEntity]**](TicketCountsDetailedEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of detailed ticket counts |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_all_ticket_counts**
> List[TicketCountsEntity] fetch_all_ticket_counts(event_id, from_date=from_date, to_date=to_date, show_ignored=show_ignored, show_not_approved=show_not_approved, sort=sort, page_size=page_size)

Find all ticket counts for one event

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.ticket_counts_entity import TicketCountsEntity
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
    api_instance = openapi_client.CountsApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    from_date = '2013-10-20' # date | Find only the ticket counts after this date. (optional)
    to_date = '2013-10-20' # date | Find only the ticket counts before this date. (optional)
    show_ignored = False # bool | If set to `false`, show only the [event-]categories/[event-]price ranges/[event]channels which are not ignored. If set to `true`, show everything. (optional) (default to False)
    show_not_approved = False # bool | If set to `false`, show only the approved ticket counts. If set to `true`, show all the ticket counts. (optional) (default to False)
    sort = date # str | Sort the ticket counts in the corresponding order. (optional) (default to date)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)

    try:
        # Find all ticket counts for one event
        api_response = api_instance.fetch_all_ticket_counts(event_id, from_date=from_date, to_date=to_date, show_ignored=show_ignored, show_not_approved=show_not_approved, sort=sort, page_size=page_size)
        print("The response of CountsApi->fetch_all_ticket_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountsApi->fetch_all_ticket_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **from_date** | **date**| Find only the ticket counts after this date. | [optional] 
 **to_date** | **date**| Find only the ticket counts before this date. | [optional] 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the [event-]categories/[event-]price ranges/[event]channels which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]
 **show_not_approved** | **bool**| If set to &#x60;false&#x60;, show only the approved ticket counts. If set to &#x60;true&#x60;, show all the ticket counts. | [optional] [default to False]
 **sort** | **str**| Sort the ticket counts in the corresponding order. | [optional] [default to date]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]

### Return type

[**List[TicketCountsEntity]**](TicketCountsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of ticket counts |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_detailed_ticket_count**
> TicketCountsDetailedEntity fetch_one_detailed_ticket_count(event_id, ticket_count_id, show_ignored=show_ignored)

Get one detailed ticket count by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.ticket_counts_detailed_entity import TicketCountsDetailedEntity
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
    api_instance = openapi_client.CountsApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    ticket_count_id = 56 # int | ID of the targeted ticket count.
    show_ignored = False # bool | If set to `false`, show only the [event-]categories/[event-]price ranges/[event]channels which are not ignored. If set to `true`, show everything. (optional) (default to False)

    try:
        # Get one detailed ticket count by ID
        api_response = api_instance.fetch_one_detailed_ticket_count(event_id, ticket_count_id, show_ignored=show_ignored)
        print("The response of CountsApi->fetch_one_detailed_ticket_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountsApi->fetch_one_detailed_ticket_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **ticket_count_id** | **int**| ID of the targeted ticket count. | 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the [event-]categories/[event-]price ranges/[event]channels which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]

### Return type

[**TicketCountsDetailedEntity**](TicketCountsDetailedEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one detailed ticket count |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_ticket_count**
> TicketCountsEntity fetch_one_ticket_count(event_id, ticket_count_id, show_ignored=show_ignored)

Get one ticket count by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.ticket_counts_entity import TicketCountsEntity
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
    api_instance = openapi_client.CountsApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    ticket_count_id = 56 # int | ID of the targeted ticket count.
    show_ignored = False # bool | If set to `false`, show only the [event-]categories/[event-]price ranges/[event]channels which are not ignored. If set to `true`, show everything. (optional) (default to False)

    try:
        # Get one ticket count by ID
        api_response = api_instance.fetch_one_ticket_count(event_id, ticket_count_id, show_ignored=show_ignored)
        print("The response of CountsApi->fetch_one_ticket_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountsApi->fetch_one_ticket_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **ticket_count_id** | **int**| ID of the targeted ticket count. | 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the [event-]categories/[event-]price ranges/[event]channels which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]

### Return type

[**TicketCountsEntity**](TicketCountsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one ticket count |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

