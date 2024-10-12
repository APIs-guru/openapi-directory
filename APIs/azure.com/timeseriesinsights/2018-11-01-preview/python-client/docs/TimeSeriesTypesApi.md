# openapi_client.TimeSeriesTypesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**time_series_types_execute_batch**](TimeSeriesTypesApi.md#time_series_types_execute_batch) | **POST** /timeseries/types/$batch | 
[**time_series_types_get**](TimeSeriesTypesApi.md#time_series_types_get) | **GET** /timeseries/types | 


# **time_series_types_execute_batch**
> TypesBatchResponse time_series_types_execute_batch(api_version, parameters, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)



Executes a batch get, create, update, delete operation on multiple time series types.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.types_batch_request import TypesBatchRequest
from openapi_client.models.types_batch_response import TypesBatchResponse
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
    api_instance = openapi_client.TimeSeriesTypesApi(api_client)
    api_version = '2018-11-01-preview' # str | Version of the API to be used with the client request. Currently supported version is \"2018-11-01-preview\". (default to '2018-11-01-preview')
    parameters = openapi_client.TypesBatchRequest() # TypesBatchRequest | Time series types batch request body.
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. (optional)
    x_ms_client_session_id = 'x_ms_client_session_id_example' # str | Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. (optional)

    try:
        api_response = api_instance.time_series_types_execute_batch(api_version, parameters, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)
        print("The response of TimeSeriesTypesApi->time_series_types_execute_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeSeriesTypesApi->time_series_types_execute_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Currently supported version is \&quot;2018-11-01-preview\&quot;. | [default to &#39;2018-11-01-preview&#39;]
 **parameters** | [**TypesBatchRequest**](TypesBatchRequest.md)| Time series types batch request body. | 
 **x_ms_client_request_id** | **str**| Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. | [optional] 
 **x_ms_client_session_id** | **str**| Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. | [optional] 

### Return type

[**TypesBatchResponse**](TypesBatchResponse.md)

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

# **time_series_types_get**
> GetTypesPage time_series_types_get(api_version, x_ms_continuation=x_ms_continuation, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)



Gets time series types in pages.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_types_page import GetTypesPage
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
    api_instance = openapi_client.TimeSeriesTypesApi(api_client)
    api_version = '2018-11-01-preview' # str | Version of the API to be used with the client request. Currently supported version is \"2018-11-01-preview\". (default to '2018-11-01-preview')
    x_ms_continuation = 'x_ms_continuation_example' # str | Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results. (optional)
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. (optional)
    x_ms_client_session_id = 'x_ms_client_session_id_example' # str | Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. (optional)

    try:
        api_response = api_instance.time_series_types_get(api_version, x_ms_continuation=x_ms_continuation, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)
        print("The response of TimeSeriesTypesApi->time_series_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeSeriesTypesApi->time_series_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Currently supported version is \&quot;2018-11-01-preview\&quot;. | [default to &#39;2018-11-01-preview&#39;]
 **x_ms_continuation** | **str**| Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results. | [optional] 
 **x_ms_client_request_id** | **str**| Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. | [optional] 
 **x_ms_client_session_id** | **str**| Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. | [optional] 

### Return type

[**GetTypesPage**](GetTypesPage.md)

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

