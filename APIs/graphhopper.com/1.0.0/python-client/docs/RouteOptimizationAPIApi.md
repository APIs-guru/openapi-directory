# openapi_client.RouteOptimizationAPIApi

All URIs are relative to *https://graphhopper.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**async_vrp**](RouteOptimizationAPIApi.md#async_vrp) | **POST** /vrp/optimize | POST route optimization problem (batch mode)
[**get_solution**](RouteOptimizationAPIApi.md#get_solution) | **GET** /vrp/solution/{jobId} | GET the solution (batch mode)
[**solve_vrp**](RouteOptimizationAPIApi.md#solve_vrp) | **POST** /vrp | POST route optimization problem


# **async_vrp**
> JobId async_vrp(request)

POST route optimization problem (batch mode)

 To solve a vehicle routing problem, perform the following steps:  1.) Make a HTTP POST to this URL  ``` https://graphhopper.com/api/1/vrp/optimize?key=<your_key> ```  It returns a job id (job_id).  2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:  ``` https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key> ```  We recommend to query the solution every 500ms until it returns 'status=finished'.  **Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.job_id import JobId
from openapi_client.models.request import Request
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://graphhopper.com/api/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://graphhopper.com/api/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RouteOptimizationAPIApi(api_client)
    request = openapi_client.Request() # Request | The request that contains the problem to be solved.

    try:
        # POST route optimization problem (batch mode)
        api_response = api_instance.async_vrp(request)
        print("The response of RouteOptimizationAPIApi->async_vrp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteOptimizationAPIApi->async_vrp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request**](Request.md)| The request that contains the problem to be solved. | 

### Return type

[**JobId**](JobId.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A jobId you can use to retrieve your solution from the server - see solution endpoint. |  * X-RateLimit-Credits - The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed. <br>  * X-RateLimit-Limit - Your current daily credit limit. <br>  * X-RateLimit-Remaining - Your remaining credits until the reset. <br>  * X-RateLimit-Reset - The number of seconds that you have to wait before a reset of the credit count is done. <br>  |
**400** | Error occurred when reading client request. Request is invalid. |  -  |
**500** | Error occurred on server side. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_solution**
> Response get_solution(job_id)

GET the solution (batch mode)

 Take the job id and fetch the solution for the vehicle routing problem from this URL:  ``` https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key> ```  You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP). 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.response import Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://graphhopper.com/api/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://graphhopper.com/api/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RouteOptimizationAPIApi(api_client)
    job_id = 'job_id_example' # str | Request solution with jobId

    try:
        # GET the solution (batch mode)
        api_response = api_instance.get_solution(job_id)
        print("The response of RouteOptimizationAPIApi->get_solution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteOptimizationAPIApi->get_solution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **str**| Request solution with jobId | 

### Return type

[**Response**](Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the solution |  * X-RateLimit-Credits - The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed. <br>  * X-RateLimit-Limit - Your current daily credit limit. <br>  * X-RateLimit-Remaining - Your remaining credits until the reset. <br>  * X-RateLimit-Reset - The number of seconds that you have to wait before a reset of the credit count is done. <br>  |
**400** | Error occurred on client side such as invalid input. |  -  |
**404** | Requested solution could not be found. |  -  |
**500** | Error occurred on server side. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **solve_vrp**
> Response solve_vrp(request)

POST route optimization problem

 To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).  To solve a new vehicle routing problem, make a HTTP POST to this URL  ``` https://graphhopper.com/api/1/vrp?key=<your_key> ```  It returns the solution to this problem in the JSON response.  Please note that this URL is very well suited to solve minor problems. Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved. To solve them, please use the [batch mode URL](#operation/asyncVRP) instead. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.request import Request
from openapi_client.models.response import Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://graphhopper.com/api/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://graphhopper.com/api/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RouteOptimizationAPIApi(api_client)
    request = openapi_client.Request() # Request | The request that contains the vehicle routing problem to be solved.

    try:
        # POST route optimization problem
        api_response = api_instance.solve_vrp(request)
        print("The response of RouteOptimizationAPIApi->solve_vrp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteOptimizationAPIApi->solve_vrp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request**](Request.md)| The request that contains the vehicle routing problem to be solved. | 

### Return type

[**Response**](Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the solution |  * X-RateLimit-Credits - The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed. <br>  * X-RateLimit-Limit - Your current daily credit limit. <br>  * X-RateLimit-Remaining - Your remaining credits until the reset. <br>  * X-RateLimit-Reset - The number of seconds that you have to wait before a reset of the credit count is done. <br>  |
**400** | Error occurred when reading the request. Request is invalid. |  -  |
**500** | Error occurred on server side. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

