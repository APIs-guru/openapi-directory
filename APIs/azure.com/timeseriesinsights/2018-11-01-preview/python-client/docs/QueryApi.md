# openapi_client.QueryApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query_execute**](QueryApi.md#query_execute) | **POST** /timeseries/query | 
[**query_get_availability**](QueryApi.md#query_get_availability) | **GET** /availability | 
[**query_get_event_schema**](QueryApi.md#query_get_event_schema) | **POST** /eventSchema | 


# **query_execute**
> QueryResultPage query_execute(api_version, parameters, store_type=store_type, x_ms_continuation=x_ms_continuation, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)



Executes Time Series Query in pages of results - Get Events, Get Series or Aggregate Series.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_request import QueryRequest
from openapi_client.models.query_result_page import QueryResultPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    api_version = '2018-11-01-preview' # str | Version of the API to be used with the client request. Currently supported version is \"2018-11-01-preview\". (default to '2018-11-01-preview')
    parameters = openapi_client.QueryRequest() # QueryRequest | Time series query request body.
    store_type = 'store_type_example' # str | For the environments with warm store enabled, the query can be executed either on the 'WarmStore' or 'ColdStore'. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store. (optional)
    x_ms_continuation = 'x_ms_continuation_example' # str | Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results. (optional)
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. (optional)
    x_ms_client_session_id = 'x_ms_client_session_id_example' # str | Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. (optional)

    try:
        api_response = api_instance.query_execute(api_version, parameters, store_type=store_type, x_ms_continuation=x_ms_continuation, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)
        print("The response of QueryApi->query_execute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->query_execute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Currently supported version is \&quot;2018-11-01-preview\&quot;. | [default to &#39;2018-11-01-preview&#39;]
 **parameters** | [**QueryRequest**](QueryRequest.md)| Time series query request body. | 
 **store_type** | **str**| For the environments with warm store enabled, the query can be executed either on the &#39;WarmStore&#39; or &#39;ColdStore&#39;. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store. | [optional] 
 **x_ms_continuation** | **str**| Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results. | [optional] 
 **x_ms_client_request_id** | **str**| Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. | [optional] 
 **x_ms_client_session_id** | **str**| Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. | [optional] 

### Return type

[**QueryResultPage**](QueryResultPage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful query. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |
**0** | Unexpected error. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_get_availability**
> AvailabilityResponse query_get_availability(api_version, store_type=store_type, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)



Returns the time range and distribution of event count over the event timestamp ($ts). This API can be used to provide landing experience of navigating to the environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.availability_response import AvailabilityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    api_version = '2018-11-01-preview' # str | Version of the API to be used with the client request. Currently supported version is \"2018-11-01-preview\". (default to '2018-11-01-preview')
    store_type = 'store_type_example' # str | For the environments with warm store enabled, the query can be executed either on the 'WarmStore' or 'ColdStore'. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store. (optional)
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. (optional)
    x_ms_client_session_id = 'x_ms_client_session_id_example' # str | Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. (optional)

    try:
        api_response = api_instance.query_get_availability(api_version, store_type=store_type, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)
        print("The response of QueryApi->query_get_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->query_get_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Currently supported version is \&quot;2018-11-01-preview\&quot;. | [default to &#39;2018-11-01-preview&#39;]
 **store_type** | **str**| For the environments with warm store enabled, the query can be executed either on the &#39;WarmStore&#39; or &#39;ColdStore&#39;. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store. | [optional] 
 **x_ms_client_request_id** | **str**| Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. | [optional] 
 **x_ms_client_session_id** | **str**| Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. | [optional] 

### Return type

[**AvailabilityResponse**](AvailabilityResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |
**0** | Unexpected error. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_get_event_schema**
> EventSchema query_get_event_schema(api_version, parameters, store_type=store_type, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)



Returns environment event schema for a given search span. Event schema is a set of property definitions. Event schema may not be contain all persisted properties when there are too many properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_schema import EventSchema
from openapi_client.models.get_event_schema_request import GetEventSchemaRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    api_version = '2018-11-01-preview' # str | Version of the API to be used with the client request. Currently supported version is \"2018-11-01-preview\". (default to '2018-11-01-preview')
    parameters = openapi_client.GetEventSchemaRequest() # GetEventSchemaRequest | Parameters to get event schema.
    store_type = 'store_type_example' # str | For the environments with warm store enabled, the query can be executed either on the 'WarmStore' or 'ColdStore'. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store. (optional)
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. (optional)
    x_ms_client_session_id = 'x_ms_client_session_id_example' # str | Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. (optional)

    try:
        api_response = api_instance.query_get_event_schema(api_version, parameters, store_type=store_type, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)
        print("The response of QueryApi->query_get_event_schema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->query_get_event_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Currently supported version is \&quot;2018-11-01-preview\&quot;. | [default to &#39;2018-11-01-preview&#39;]
 **parameters** | [**GetEventSchemaRequest**](GetEventSchemaRequest.md)| Parameters to get event schema. | 
 **store_type** | **str**| For the environments with warm store enabled, the query can be executed either on the &#39;WarmStore&#39; or &#39;ColdStore&#39;. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store. | [optional] 
 **x_ms_client_request_id** | **str**| Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. | [optional] 
 **x_ms_client_session_id** | **str**| Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. | [optional] 

### Return type

[**EventSchema**](EventSchema.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |
**0** | Unexpected error. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

