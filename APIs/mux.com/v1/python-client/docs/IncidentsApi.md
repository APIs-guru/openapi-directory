# openapi_client.IncidentsApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_incident**](IncidentsApi.md#get_incident) | **GET** /data/v1/incidents/{INCIDENT_ID} | Get an Incident
[**list_incidents**](IncidentsApi.md#list_incidents) | **GET** /data/v1/incidents | List Incidents
[**list_related_incidents**](IncidentsApi.md#list_related_incidents) | **GET** /data/v1/incidents/{INCIDENT_ID}/related | List Related Incidents


# **get_incident**
> IncidentResponse get_incident(incident_id)

Get an Incident

Returns the details of an incident.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.incident_response import IncidentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    incident_id = 'abcd1234' # str | ID of the Incident

    try:
        # Get an Incident
        api_response = api_instance.get_incident(incident_id)
        print("The response of IncidentsApi->get_incident:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->get_incident: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incident_id** | **str**| ID of the Incident | 

### Return type

[**IncidentResponse**](IncidentResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_incidents**
> ListIncidentsResponse list_incidents(limit=limit, page=page, order_by=order_by, order_direction=order_direction, status=status, severity=severity)

List Incidents

Returns a list of incidents.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_incidents_response import ListIncidentsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    limit = 25 # int | Number of items to include in the response (optional) (default to 25)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)
    order_by = 'order_by_example' # str | Value to order the results by (optional)
    order_direction = 'order_direction_example' # str | Sort order. (optional)
    status = 'status_example' # str | Status to filter incidents by (optional)
    severity = 'severity_example' # str | Severity to filter incidents by (optional)

    try:
        # List Incidents
        api_response = api_instance.list_incidents(limit=limit, page=page, order_by=order_by, order_direction=order_direction, status=status, severity=severity)
        print("The response of IncidentsApi->list_incidents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->list_incidents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items to include in the response | [optional] [default to 25]
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]
 **order_by** | **str**| Value to order the results by | [optional] 
 **order_direction** | **str**| Sort order. | [optional] 
 **status** | **str**| Status to filter incidents by | [optional] 
 **severity** | **str**| Severity to filter incidents by | [optional] 

### Return type

[**ListIncidentsResponse**](ListIncidentsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_related_incidents**
> ListRelatedIncidentsResponse list_related_incidents(incident_id, limit=limit, page=page, order_by=order_by, order_direction=order_direction)

List Related Incidents

Returns all the incidents that seem related to a specific incident.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_related_incidents_response import ListRelatedIncidentsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IncidentsApi(api_client)
    incident_id = 'abcd1234' # str | ID of the Incident
    limit = 25 # int | Number of items to include in the response (optional) (default to 25)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)
    order_by = 'order_by_example' # str | Value to order the results by (optional)
    order_direction = 'order_direction_example' # str | Sort order. (optional)

    try:
        # List Related Incidents
        api_response = api_instance.list_related_incidents(incident_id, limit=limit, page=page, order_by=order_by, order_direction=order_direction)
        print("The response of IncidentsApi->list_related_incidents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IncidentsApi->list_related_incidents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incident_id** | **str**| ID of the Incident | 
 **limit** | **int**| Number of items to include in the response | [optional] [default to 25]
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]
 **order_by** | **str**| Value to order the results by | [optional] 
 **order_direction** | **str**| Sort order. | [optional] 

### Return type

[**ListRelatedIncidentsResponse**](ListRelatedIncidentsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

