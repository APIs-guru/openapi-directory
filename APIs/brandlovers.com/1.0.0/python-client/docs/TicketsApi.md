# openapi_client.TicketsApi

All URIs are relative to *https://api.brandlovers.com/marketplace/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ticket_post**](TicketsApi.md#ticket_post) | **POST** /ticket | Creates a new trouble ticket
[**ticket_ticket_id_message_post**](TicketsApi.md#ticket_ticket_id_message_post) | **POST** /ticket/{ticketId}/message | Add new message to trouble ticket
[**ticket_ticket_id_messages_get**](TicketsApi.md#ticket_ticket_id_messages_get) | **GET** /ticket/{ticketId}/messages | Get trouble ticket messages
[**ticket_ticket_id_status_put**](TicketsApi.md#ticket_ticket_id_status_put) | **PUT** /ticket/{ticketId}/status | Update trouble ticket status
[**tickets_get**](TicketsApi.md#tickets_get) | **GET** /tickets | Get customers trouble tickets


# **ticket_post**
> ticket_post(authorization, new_ticket)

Creates a new trouble ticket

Use this service to create a new trouble ticket. Use this to include relevant information about the order, comunicate with the customer or marketplace team. Whenever possible message will be pushed to Mobile first. This is the primary mean of comunicaiton with the customer regarding orders, shippments, shippments status. New tickets will be automatically be set to 'OPEN'. Trouble tickets need to be associated with a orderId or customer. New tickets can optionally include a new message.

### Example


```python
import openapi_client
from openapi_client.models.new_ticket import NewTicket
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TicketsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    new_ticket = openapi_client.NewTicket() # NewTicket | JSON object with new trouble ticket

    try:
        # Creates a new trouble ticket
        api_instance.ticket_post(authorization, new_ticket)
    except Exception as e:
        print("Exception when calling TicketsApi->ticket_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **new_ticket** | [**NewTicket**](NewTicket.md)| JSON object with new trouble ticket | 

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
**200** | Success! |  -  |
**400** | Bad request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ticket_ticket_id_message_post**
> ticket_ticket_id_message_post(authorization, ticket_id, message)

Add new message to trouble ticket

Add a new message to this trouble ticket. Messages can be `CUSTOMER` (customer will be able to see it) or `INTERNAL`.

### Example


```python
import openapi_client
from openapi_client.models.new_ticket_message import NewTicketMessage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TicketsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    ticket_id = 'ticket_id_example' # str | Trouble ticket ID.
    message = openapi_client.NewTicketMessage() # NewTicketMessage | New message object to append to trouble ticket.

    try:
        # Add new message to trouble ticket
        api_instance.ticket_ticket_id_message_post(authorization, ticket_id, message)
    except Exception as e:
        print("Exception when calling TicketsApi->ticket_ticket_id_message_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **ticket_id** | **str**| Trouble ticket ID. | 
 **message** | [**NewTicketMessage**](NewTicketMessage.md)| New message object to append to trouble ticket. | 

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
**200** | Success! |  -  |
**400** | Bad request. |  -  |
**404** | Object not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ticket_ticket_id_messages_get**
> GetTicketMessages ticket_ticket_id_messages_get(authorization, ticket_id, offset=offset, limit=limit)

Get trouble ticket messages

Returns trouble ticket history with all messages exchanged. Only tickets related to your seller will be returned. Attempt to read other tickets will return 403 (acess denied).

### Example


```python
import openapi_client
from openapi_client.models.get_ticket_messages import GetTicketMessages
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TicketsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    ticket_id = 'ticket_id_example' # str | Trouble ticket ID.
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Get trouble ticket messages
        api_response = api_instance.ticket_ticket_id_messages_get(authorization, ticket_id, offset=offset, limit=limit)
        print("The response of TicketsApi->ticket_ticket_id_messages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TicketsApi->ticket_ticket_id_messages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **ticket_id** | **str**| Trouble ticket ID. | 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 10. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetTicketMessages**](GetTicketMessages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**403** | Access denied. You can only access your trouble tickets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ticket_ticket_id_status_put**
> ticket_ticket_id_status_put(authorization, ticket_id, body)

Update trouble ticket status

Alows the seller to update the status of a trouble ticket

### Example


```python
import openapi_client
from openapi_client.models.ticket_status import TicketStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TicketsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    ticket_id = 'ticket_id_example' # str | Trouble ticket unique identification
    body = openapi_client.TicketStatus() # TicketStatus | New trouble ticket status

    try:
        # Update trouble ticket status
        api_instance.ticket_ticket_id_status_put(authorization, ticket_id, body)
    except Exception as e:
        print("Exception when calling TicketsApi->ticket_ticket_id_status_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **ticket_id** | **str**| Trouble ticket unique identification | 
 **body** | [**TicketStatus**](TicketStatus.md)| New trouble ticket status | 

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
**200** | successfully received transaction |  -  |
**400** | Bad request. |  -  |
**401** | Access denied. You&#39;re not authenticated or token expired. Check your request header the &#x60;authorization&#x60; field is required. |  -  |
**403** | Server refused to process your request. Please check the API SLA and reduce number of requests per second. |  -  |
**404** | Object not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tickets_get**
> GetTickets tickets_get(authorization, status=status, offset=offset, limit=limit)

Get customers trouble tickets

Allows seller to receive and status, queries, requests and complaints from customers. As well related messages

### Example


```python
import openapi_client
from openapi_client.models.get_tickets import GetTickets
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.brandlovers.com/marketplace/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.brandlovers.com/marketplace/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TicketsApi(api_client)
    authorization = 'authorization_example' # str | Authorization token. The Authorization token can be found in your Admin console.
    status = 'status_example' # str | Query by trouble ticket status (optional)
    offset = 56 # int | Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results. (optional)
    limit = 56 # int | Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results. (optional)

    try:
        # Get customers trouble tickets
        api_response = api_instance.tickets_get(authorization, status=status, offset=offset, limit=limit)
        print("The response of TicketsApi->tickets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TicketsApi->tickets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Authorization token. The Authorization token can be found in your Admin console. | 
 **status** | **str**| Query by trouble ticket status | [optional] 
 **offset** | **int**| Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with &#x60;limit&#x60; to paginate across the results. | [optional] 
 **limit** | **int**| Number or items to return when executing query. Defaults to 10. Use this conjuction with &#x60;offset&#x60; to paginate across the results. | [optional] 

### Return type

[**GetTickets**](GetTickets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |
**400** | Bad request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

