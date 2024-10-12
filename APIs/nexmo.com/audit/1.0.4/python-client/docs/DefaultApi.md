# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/beta/audit*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_event**](DefaultApi.md#get_event) | **GET** /events/{id} | Retrieve individual audit event
[**get_events**](DefaultApi.md#get_events) | **GET** /events | Retrieve audit events
[**get_events_options**](DefaultApi.md#get_events_options) | **OPTIONS** /events | Retrieve audit event types


# **get_event**
> AuditEvent get_event(id)

Retrieve individual audit event

Get the specified audit event. 

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.audit_event import AuditEvent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/beta/audit
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/beta/audit"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | The UUID of the audit event to retrieve

    try:
        # Retrieve individual audit event
        api_response = api_instance.get_event(id)
        print("The response of DefaultApi->get_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the audit event to retrieve | 

### Return type

[**AuditEvent**](AuditEvent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_events**
> AuditResp get_events(event_type=event_type, date_from=date_from, date_to=date_to, search_text=search_text, page=page, size=size)

Retrieve audit events

Get a series of audit events describing changes made to your Vonage API account over time. 

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.audit_resp import AuditResp
from openapi_client.models.event_types import EventTypes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/beta/audit
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/beta/audit"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    event_type = openapi_client.EventTypes() # EventTypes | Filter results by this event type. (optional)
    date_from = 'date_from_example' # str | Start of time range for audit events. DateTime in ISO-8601 format. (optional)
    date_to = 'date_to_example' # str | End of time range for audit events. DateTime in ISO-8601 format. (optional)
    search_text = 'search_text_example' # str | Return only audit events where the JSON object contains this search text. Must be legal text for a JSON attribute value, that is quotes and braces must be escaped. (optional)
    page = 'page_example' # str | Page number starting with page 1. (optional)
    size = 30 # int | Number of elements per page. (optional) (default to 30)

    try:
        # Retrieve audit events
        api_response = api_instance.get_events(event_type=event_type, date_from=date_from, date_to=date_to, search_text=search_text, page=page, size=size)
        print("The response of DefaultApi->get_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_type** | [**EventTypes**](.md)| Filter results by this event type. | [optional] 
 **date_from** | **str**| Start of time range for audit events. DateTime in ISO-8601 format. | [optional] 
 **date_to** | **str**| End of time range for audit events. DateTime in ISO-8601 format. | [optional] 
 **search_text** | **str**| Return only audit events where the JSON object contains this search text. Must be legal text for a JSON attribute value, that is quotes and braces must be escaped. | [optional] 
 **page** | **str**| Page number starting with page 1. | [optional] 
 **size** | **int**| Number of elements per page. | [optional] [default to 30]

### Return type

[**AuditResp**](AuditResp.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_events_options**
> AuditEventTypesResp get_events_options()

Retrieve audit event types

Get audit event types. 

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.audit_event_types_resp import AuditEventTypesResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/beta/audit
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/beta/audit"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Retrieve audit event types
        api_response = api_instance.get_events_options()
        print("The response of DefaultApi->get_events_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_events_options: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AuditEventTypesResp**](AuditEventTypesResp.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

