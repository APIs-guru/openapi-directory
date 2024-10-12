# openapi_client.MatrixAPIApi

All URIs are relative to *https://graphhopper.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculate_matrix**](MatrixAPIApi.md#calculate_matrix) | **POST** /matrix/calculate | Batch Matrix Endpoint
[**get_matrix**](MatrixAPIApi.md#get_matrix) | **GET** /matrix | GET Matrix Endpoint
[**get_matrix_solution**](MatrixAPIApi.md#get_matrix_solution) | **GET** /matrix/solution/{jobId} | GET Batch Matrix Endpoint
[**post_matrix**](MatrixAPIApi.md#post_matrix) | **POST** /matrix | POST Matrix Endpoint


# **calculate_matrix**
> JobId calculate_matrix(post_matrix_request=post_matrix_request)

Batch Matrix Endpoint

Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.  The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):  * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ \"job_id\": \"7ac65787-fb99-4e02-a832-2c3010c70097\" }`  * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`  Here are some full examples via curl: ```bash $ curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]\" -d '{\"points\":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}' {\"job_id\":\"7ac65787-fb99-4e02-a832-2c3010c70097\"} ```  Pick the returned `job_id` and use it in the next GET requests: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"status\":\"waiting\"} ```  When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"solution\":{\"weights\":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],\"info\":{\"copyrights\":[\"GraphHopper\",\"OpenStreetMap contributors\"]}},\"status\":\"finished\"} ```  Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.: ```json {\"message\":\"Cannot find from_points: 1\"} ``` And the optional `hints` array. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.job_id import JobId
from openapi_client.models.post_matrix_request import PostMatrixRequest
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
    api_instance = openapi_client.MatrixAPIApi(api_client)
    post_matrix_request = openapi_client.PostMatrixRequest() # PostMatrixRequest |  (optional)

    try:
        # Batch Matrix Endpoint
        api_response = api_instance.calculate_matrix(post_matrix_request=post_matrix_request)
        print("The response of MatrixAPIApi->calculate_matrix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MatrixAPIApi->calculate_matrix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_matrix_request** | [**PostMatrixRequest**](PostMatrixRequest.md)|  | [optional] 

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
**200** | A jobId you can use to retrieve your solution from the server. |  * X-RateLimit-Credits - The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed. <br>  * X-RateLimit-Limit - Your current daily credit limit. <br>  * X-RateLimit-Remaining - Your remaining credits until the reset. <br>  * X-RateLimit-Reset - The number of seconds that you have to wait before a reset of the credit count is done. <br>  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_matrix**
> MatrixResponse get_matrix(point=point, from_point=from_point, to_point=to_point, point_hint=point_hint, from_point_hint=from_point_hint, to_point_hint=to_point_hint, snap_prevention=snap_prevention, curbside=curbside, from_curbside=from_curbside, to_curbside=to_curbside, out_array=out_array, vehicle=vehicle, fail_fast=fail_fast, turn_costs=turn_costs)

GET Matrix Endpoint

With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient as it works out-of-the-box in the browser. If possible you should prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations and can also gzip the **request**. (Note, that all endpoints return gzipped responses). 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.matrix_response import MatrixResponse
from openapi_client.models.vehicle_profile_id import VehicleProfileId
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
    api_instance = openapi_client.MatrixAPIApi(api_client)
    point = ['point_example'] # List[str] | Specify multiple points in `latitude,longitude` for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point. (optional)
    from_point = ['from_point_example'] # List[str] | The starting points for the routes in `latitude,longitude`. E.g. if you want to calculate the three routes A-&gt;1, A-&gt;2, A-&gt;3 then you have one from_point parameter and three to_point parameters. (optional)
    to_point = ['to_point_example'] # List[str] | The destination points for the routes in `latitude,longitude`. (optional)
    point_hint = ['point_hint_example'] # List[str] | Optional parameter. Specifies a hint for each `point` parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. (optional)
    from_point_hint = ['from_point_hint_example'] # List[str] | For the from_point parameter. See point_hint (optional)
    to_point_hint = ['to_point_hint_example'] # List[str] | For the to_point parameter. See point_hint (optional)
    snap_prevention = ['snap_prevention_example'] # List[str] | Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`  (optional)
    curbside = ['curbside_example'] # List[str] | Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. (optional)
    from_curbside = ['from_curbside_example'] # List[str] | Curbside setting for the from_point parameter. See curbside. (optional)
    to_curbside = ['to_curbside_example'] # List[str] | Curbside setting for the to_point parameter. See curbside. (optional)
    out_array = ['out_array_example'] # List[str] | Specifies which arrays should be included in the response. Specify one or more of the following options 'weights', 'times', 'distances'. To specify more than one array use e.g. out_array=times&out_array=distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API. (optional)
    vehicle = car # VehicleProfileId | The vehicle profile for which the matrix should be calculated. (optional) (default to car)
    fail_fast = True # bool | Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation). (optional) (default to True)
    turn_costs = False # bool | Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap. (optional) (default to False)

    try:
        # GET Matrix Endpoint
        api_response = api_instance.get_matrix(point=point, from_point=from_point, to_point=to_point, point_hint=point_hint, from_point_hint=from_point_hint, to_point_hint=to_point_hint, snap_prevention=snap_prevention, curbside=curbside, from_curbside=from_curbside, to_curbside=to_curbside, out_array=out_array, vehicle=vehicle, fail_fast=fail_fast, turn_costs=turn_costs)
        print("The response of MatrixAPIApi->get_matrix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MatrixAPIApi->get_matrix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **point** | [**List[str]**](str.md)| Specify multiple points in &#x60;latitude,longitude&#x60; for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point. | [optional] 
 **from_point** | [**List[str]**](str.md)| The starting points for the routes in &#x60;latitude,longitude&#x60;. E.g. if you want to calculate the three routes A-&amp;gt;1, A-&amp;gt;2, A-&amp;gt;3 then you have one from_point parameter and three to_point parameters. | [optional] 
 **to_point** | [**List[str]**](str.md)| The destination points for the routes in &#x60;latitude,longitude&#x60;. | [optional] 
 **point_hint** | [**List[str]**](str.md)| Optional parameter. Specifies a hint for each &#x60;point&#x60; parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. | [optional] 
 **from_point_hint** | [**List[str]**](str.md)| For the from_point parameter. See point_hint | [optional] 
 **to_point_hint** | [**List[str]**](str.md)| For the to_point parameter. See point_hint | [optional] 
 **snap_prevention** | [**List[str]**](str.md)| Optional parameter to avoid snapping to a certain road class or road environment. Current supported values &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60;  | [optional] 
 **curbside** | [**List[str]**](str.md)| Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. | [optional] 
 **from_curbside** | [**List[str]**](str.md)| Curbside setting for the from_point parameter. See curbside. | [optional] 
 **to_curbside** | [**List[str]**](str.md)| Curbside setting for the to_point parameter. See curbside. | [optional] 
 **out_array** | [**List[str]**](str.md)| Specifies which arrays should be included in the response. Specify one or more of the following options &#39;weights&#39;, &#39;times&#39;, &#39;distances&#39;. To specify more than one array use e.g. out_array&#x3D;times&amp;out_array&#x3D;distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API. | [optional] 
 **vehicle** | [**VehicleProfileId**](.md)| The vehicle profile for which the matrix should be calculated. | [optional] [default to car]
 **fail_fast** | **bool**| Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to &#x60;false&#x60; the time/weight/distance matrix will be calculated for all valid points and contain the &#x60;null&#x60; value for all entries that could not be calculated. The &#x60;hint&#x60; field of the response will also contain additional information about what went wrong (see its documentation). | [optional] [default to True]
 **turn_costs** | **bool**| Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap. | [optional] [default to False]

### Return type

[**MatrixResponse**](MatrixResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matrix API response |  * X-RateLimit-Credits - The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed. <br>  * X-RateLimit-Limit - Your current daily credit limit. <br>  * X-RateLimit-Remaining - Your remaining credits until the reset. <br>  * X-RateLimit-Reset - The number of seconds that you have to wait before a reset of the credit count is done. <br>  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_matrix_solution**
> MatrixResponse get_matrix_solution(job_id)

GET Batch Matrix Endpoint

This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.matrix_response import MatrixResponse
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
    api_instance = openapi_client.MatrixAPIApi(api_client)
    job_id = 'job_id_example' # str | Request solution with jobId

    try:
        # GET Batch Matrix Endpoint
        api_response = api_instance.get_matrix_solution(job_id)
        print("The response of MatrixAPIApi->get_matrix_solution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MatrixAPIApi->get_matrix_solution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **str**| Request solution with jobId | 

### Return type

[**MatrixResponse**](MatrixResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the matrix |  * X-RateLimit-Credits - The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed. <br>  * X-RateLimit-Limit - Your current daily credit limit. <br>  * X-RateLimit-Remaining - Your remaining credits until the reset. <br>  * X-RateLimit-Reset - The number of seconds that you have to wait before a reset of the credit count is done. <br>  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_matrix**
> MatrixResponse post_matrix(post_matrix_request=post_matrix_request)

POST Matrix Endpoint

 The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request. In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key. Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters please refer to the [guide of the GET endpoint](#operation/getMatrix).  **Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.  For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON: ```json { \"points\": [[11,10], [22,20]], \"vehicle\": \"car\" } ```  A complete curl Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]\" -d '{\"elevation\":false,\"out_arrays\":[\"weights\", \"times\"],\"from_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"to_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"vehicle\":\"car\"}' ``` 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.matrix_response import MatrixResponse
from openapi_client.models.post_matrix_request import PostMatrixRequest
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
    api_instance = openapi_client.MatrixAPIApi(api_client)
    post_matrix_request = openapi_client.PostMatrixRequest() # PostMatrixRequest |  (optional)

    try:
        # POST Matrix Endpoint
        api_response = api_instance.post_matrix(post_matrix_request=post_matrix_request)
        print("The response of MatrixAPIApi->post_matrix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MatrixAPIApi->post_matrix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_matrix_request** | [**PostMatrixRequest**](PostMatrixRequest.md)|  | [optional] 

### Return type

[**MatrixResponse**](MatrixResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matrix API response |  * X-RateLimit-Credits - The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed. <br>  * X-RateLimit-Limit - Your current daily credit limit. <br>  * X-RateLimit-Remaining - Your remaining credits until the reset. <br>  * X-RateLimit-Reset - The number of seconds that you have to wait before a reset of the credit count is done. <br>  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

