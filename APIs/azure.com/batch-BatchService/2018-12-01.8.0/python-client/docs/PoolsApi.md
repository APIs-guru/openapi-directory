# openapi_client.PoolsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pool_add**](PoolsApi.md#pool_add) | **POST** /pools | Adds a pool to the specified account.
[**pool_delete**](PoolsApi.md#pool_delete) | **DELETE** /pools/{poolId} | Deletes a pool from the specified account.
[**pool_disable_auto_scale**](PoolsApi.md#pool_disable_auto_scale) | **POST** /pools/{poolId}/disableautoscale | Disables automatic scaling for a pool.
[**pool_enable_auto_scale**](PoolsApi.md#pool_enable_auto_scale) | **POST** /pools/{poolId}/enableautoscale | Enables automatic scaling for a pool.
[**pool_evaluate_auto_scale**](PoolsApi.md#pool_evaluate_auto_scale) | **POST** /pools/{poolId}/evaluateautoscale | Gets the result of evaluating an automatic scaling formula on the pool.
[**pool_exists**](PoolsApi.md#pool_exists) | **HEAD** /pools/{poolId} | 
[**pool_get**](PoolsApi.md#pool_get) | **GET** /pools/{poolId} | 
[**pool_get_all_lifetime_statistics**](PoolsApi.md#pool_get_all_lifetime_statistics) | **GET** /lifetimepoolstats | Gets lifetime summary statistics for all of the pools in the specified account.
[**pool_list**](PoolsApi.md#pool_list) | **GET** /pools | Lists all of the pools in the specified account.
[**pool_list_usage_metrics**](PoolsApi.md#pool_list_usage_metrics) | **GET** /poolusagemetrics | Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
[**pool_patch**](PoolsApi.md#pool_patch) | **PATCH** /pools/{poolId} | Updates the properties of the specified pool.
[**pool_resize**](PoolsApi.md#pool_resize) | **POST** /pools/{poolId}/resize | Changes the number of compute nodes that are assigned to a pool.
[**pool_stop_resize**](PoolsApi.md#pool_stop_resize) | **POST** /pools/{poolId}/stopresize | Stops an ongoing resize operation on the pool.
[**pool_update_properties**](PoolsApi.md#pool_update_properties) | **POST** /pools/{poolId}/updateproperties | Updates the properties of the specified pool.


# **pool_add**
> pool_add(api_version, pool, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Adds a pool to the specified account.

When naming pools, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool_add_parameter import PoolAddParameter
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    pool = openapi_client.PoolAddParameter() # PoolAddParameter | The pool to be added.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Adds a pool to the specified account.
        api_instance.pool_add(api_version, pool, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **pool** | [**PoolAddParameter**](PoolAddParameter.md)| The pool to be added. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json; odata=minimalmetadata
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_delete**
> pool_delete(pool_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Deletes a pool from the specified account.

When you request that a pool be deleted, the following actions occur: the pool state is set to deleting; any ongoing resize operation on the pool are stopped; the Batch service starts resizing the pool to zero nodes; any tasks running on existing nodes are terminated and requeued (as if a resize pool operation had been requested with the default requeue option); finally, the pool is removed from the system. Because running tasks are requeued, the user can rerun these tasks by updating their job to target a different pool. The tasks can then run on the new pool. If you want to override the requeue behavior, then you should call resize pool explicitly to shrink the pool to zero size before deleting the pool. If you call an Update, Patch or Delete API on a pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool to delete.
    api_version = 'api_version_example' # str | Client API Version.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        # Deletes a pool from the specified account.
        api_instance.pool_delete(pool_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool to delete. | 
 **api_version** | **str**| Client API Version. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 
 **if_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service exactly matches the value specified by the client. | [optional] 
 **if_none_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service does not match the value specified by the client. | [optional] 
 **if_modified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. | [optional] 
 **if_unmodified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request to the Batch service was successful. |  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_disable_auto_scale**
> pool_disable_auto_scale(pool_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Disables automatic scaling for a pool.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool on which to disable automatic scaling.
    api_version = 'api_version_example' # str | Client API Version.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Disables automatic scaling for a pool.
        api_instance.pool_disable_auto_scale(pool_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_disable_auto_scale: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool on which to disable automatic scaling. | 
 **api_version** | **str**| Client API Version. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_enable_auto_scale**
> pool_enable_auto_scale(pool_id, api_version, pool_enable_auto_scale_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Enables automatic scaling for a pool.

You cannot enable automatic scaling on a pool if a resize operation is in progress on the pool. If automatic scaling of the pool is currently disabled, you must specify a valid autoscale formula as part of the request. If automatic scaling of the pool is already enabled, you may specify a new autoscale formula and/or a new evaluation interval. You cannot call this API for the same pool more than once every 30 seconds.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool_enable_auto_scale_parameter import PoolEnableAutoScaleParameter
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool on which to enable automatic scaling.
    api_version = 'api_version_example' # str | Client API Version.
    pool_enable_auto_scale_parameter = openapi_client.PoolEnableAutoScaleParameter() # PoolEnableAutoScaleParameter | The parameters for the request.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        # Enables automatic scaling for a pool.
        api_instance.pool_enable_auto_scale(pool_id, api_version, pool_enable_auto_scale_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_enable_auto_scale: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool on which to enable automatic scaling. | 
 **api_version** | **str**| Client API Version. | 
 **pool_enable_auto_scale_parameter** | [**PoolEnableAutoScaleParameter**](PoolEnableAutoScaleParameter.md)| The parameters for the request. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 
 **if_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service exactly matches the value specified by the client. | [optional] 
 **if_none_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service does not match the value specified by the client. | [optional] 
 **if_modified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. | [optional] 
 **if_unmodified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json; odata=minimalmetadata
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_evaluate_auto_scale**
> AutoScaleRun pool_evaluate_auto_scale(pool_id, api_version, pool_evaluate_auto_scale_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Gets the result of evaluating an automatic scaling formula on the pool.

This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the pool. The pool must have auto scaling enabled in order to evaluate a formula.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auto_scale_run import AutoScaleRun
from openapi_client.models.pool_evaluate_auto_scale_parameter import PoolEvaluateAutoScaleParameter
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool on which to evaluate the automatic scaling formula.
    api_version = 'api_version_example' # str | Client API Version.
    pool_evaluate_auto_scale_parameter = openapi_client.PoolEvaluateAutoScaleParameter() # PoolEvaluateAutoScaleParameter | The parameters for the request.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Gets the result of evaluating an automatic scaling formula on the pool.
        api_response = api_instance.pool_evaluate_auto_scale(pool_id, api_version, pool_evaluate_auto_scale_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of PoolsApi->pool_evaluate_auto_scale:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_evaluate_auto_scale: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool on which to evaluate the automatic scaling formula. | 
 **api_version** | **str**| Client API Version. | 
 **pool_evaluate_auto_scale_parameter** | [**PoolEvaluateAutoScaleParameter**](PoolEvaluateAutoScaleParameter.md)| The parameters for the request. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**AutoScaleRun**](AutoScaleRun.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json; odata=minimalmetadata
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the results of the autoscale evaluation. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_exists**
> pool_exists(pool_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)



Gets basic properties of a pool.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool to get.
    api_version = 'api_version_example' # str | Client API Version.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        api_instance.pool_exists(pool_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool to get. | 
 **api_version** | **str**| Client API Version. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 
 **if_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service exactly matches the value specified by the client. | [optional] 
 **if_none_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service does not match the value specified by the client. | [optional] 
 **if_modified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. | [optional] 
 **if_unmodified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing headers related to the pool, if it exists. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**404** | The pool does not exist. |  -  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_get**
> CloudPool pool_get(pool_id, api_version, select=select, expand=expand, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)



Gets information about the specified pool.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cloud_pool import CloudPool
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool to get.
    api_version = 'api_version_example' # str | Client API Version.
    select = 'select_example' # str | An OData $select clause. (optional)
    expand = 'expand_example' # str | An OData $expand clause. (optional)
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        api_response = api_instance.pool_get(pool_id, api_version, select=select, expand=expand, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
        print("The response of PoolsApi->pool_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool to get. | 
 **api_version** | **str**| Client API Version. | 
 **select** | **str**| An OData $select clause. | [optional] 
 **expand** | **str**| An OData $expand clause. | [optional] 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 
 **if_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service exactly matches the value specified by the client. | [optional] 
 **if_none_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service does not match the value specified by the client. | [optional] 
 **if_modified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. | [optional] 
 **if_unmodified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. | [optional] 

### Return type

[**CloudPool**](CloudPool.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the pool. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_get_all_lifetime_statistics**
> PoolStatistics pool_get_all_lifetime_statistics(api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Gets lifetime summary statistics for all of the pools in the specified account.

Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool_statistics import PoolStatistics
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Gets lifetime summary statistics for all of the pools in the specified account.
        api_response = api_instance.pool_get_all_lifetime_statistics(api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of PoolsApi->pool_get_all_lifetime_statistics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_get_all_lifetime_statistics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**PoolStatistics**](PoolStatistics.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the pool statistics for the lifetime of the Batch account. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_list**
> CloudPoolListResult pool_list(api_version, filter=filter, select=select, expand=expand, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Lists all of the pools in the specified account.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cloud_pool_list_result import CloudPoolListResult
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    filter = 'filter_example' # str | An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools. (optional)
    select = 'select_example' # str | An OData $select clause. (optional)
    expand = 'expand_example' # str | An OData $expand clause. (optional)
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 pools can be returned. (optional) (default to 1000)
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Lists all of the pools in the specified account.
        api_response = api_instance.pool_list(api_version, filter=filter, select=select, expand=expand, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of PoolsApi->pool_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **filter** | **str**| An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools. | [optional] 
 **select** | **str**| An OData $select clause. | [optional] 
 **expand** | **str**| An OData $expand clause. | [optional] 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 pools can be returned. | [optional] [default to 1000]
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**CloudPoolListResult**](CloudPoolListResult.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the list of pools. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_list_usage_metrics**
> PoolListUsageMetricsResult pool_list_usage_metrics(api_version, starttime=starttime, endtime=endtime, filter=filter, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.

If you do not specify a $filter clause including a poolId, the response includes all pools that existed in the account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool_list_usage_metrics_result import PoolListUsageMetricsResult
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    starttime = '2013-10-20T19:20:30+01:00' # datetime | The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available. (optional)
    endtime = '2013-10-20T19:20:30+01:00' # datetime | The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available. (optional)
    filter = 'filter_example' # str | An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics. (optional)
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 results will be returned. (optional) (default to 1000)
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
        api_response = api_instance.pool_list_usage_metrics(api_version, starttime=starttime, endtime=endtime, filter=filter, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of PoolsApi->pool_list_usage_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_list_usage_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **starttime** | **datetime**| The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available. | [optional] 
 **endtime** | **datetime**| The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available. | [optional] 
 **filter** | **str**| An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics. | [optional] 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 results will be returned. | [optional] [default to 1000]
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**PoolListUsageMetricsResult**](PoolListUsageMetricsResult.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the list of pool usage details. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_patch**
> pool_patch(pool_id, api_version, pool_patch_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Updates the properties of the specified pool.

This only replaces the pool properties specified in the request. For example, if the pool has a start task associated with it, and a request does not specify a start task element, then the pool keeps the existing start task.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool_patch_parameter import PoolPatchParameter
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool to update.
    api_version = 'api_version_example' # str | Client API Version.
    pool_patch_parameter = openapi_client.PoolPatchParameter() # PoolPatchParameter | The parameters for the request.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        # Updates the properties of the specified pool.
        api_instance.pool_patch(pool_id, api_version, pool_patch_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool to update. | 
 **api_version** | **str**| Client API Version. | 
 **pool_patch_parameter** | [**PoolPatchParameter**](PoolPatchParameter.md)| The parameters for the request. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 
 **if_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service exactly matches the value specified by the client. | [optional] 
 **if_none_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service does not match the value specified by the client. | [optional] 
 **if_modified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. | [optional] 
 **if_unmodified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json; odata=minimalmetadata
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_resize**
> pool_resize(pool_id, api_version, pool_resize_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Changes the number of compute nodes that are assigned to a pool.

You can only resize a pool when its allocation state is steady. If the pool is already resizing, the request fails with status code 409. When you resize a pool, the pool's allocation state changes from steady to resizing. You cannot resize pools which are configured for automatic scaling. If you try to do this, the Batch service returns an error 409. If you resize a pool downwards, the Batch service chooses which nodes to remove. To remove specific nodes, use the pool remove nodes API instead.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool_resize_parameter import PoolResizeParameter
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool to resize.
    api_version = 'api_version_example' # str | Client API Version.
    pool_resize_parameter = openapi_client.PoolResizeParameter() # PoolResizeParameter | The parameters for the request.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        # Changes the number of compute nodes that are assigned to a pool.
        api_instance.pool_resize(pool_id, api_version, pool_resize_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_resize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool to resize. | 
 **api_version** | **str**| Client API Version. | 
 **pool_resize_parameter** | [**PoolResizeParameter**](PoolResizeParameter.md)| The parameters for the request. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 
 **if_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service exactly matches the value specified by the client. | [optional] 
 **if_none_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service does not match the value specified by the client. | [optional] 
 **if_modified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. | [optional] 
 **if_unmodified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json; odata=minimalmetadata
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_stop_resize**
> pool_stop_resize(pool_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Stops an ongoing resize operation on the pool.

This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. After stopping, the pool stabilizes at the number of nodes it was at when the stop operation was done. During the stop operation, the pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool whose resizing you want to stop.
    api_version = 'api_version_example' # str | Client API Version.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        # Stops an ongoing resize operation on the pool.
        api_instance.pool_stop_resize(pool_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_stop_resize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool whose resizing you want to stop. | 
 **api_version** | **str**| Client API Version. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 
 **if_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service exactly matches the value specified by the client. | [optional] 
 **if_none_match** | **str**| An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource&#39;s current ETag on the service does not match the value specified by the client. | [optional] 
 **if_modified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. | [optional] 
 **if_unmodified_since** | **str**| A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. If you call this API on a pool which is not in the resizing state, the request fails with HTTP status code 409. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_update_properties**
> pool_update_properties(pool_id, api_version, pool_update_properties_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Updates the properties of the specified pool.

This fully replaces all the updatable properties of the pool. For example, if the pool has a start task associated with it and if start task is not specified with this request, then the Batch service will remove the existing start task.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool_update_properties_parameter import PoolUpdatePropertiesParameter
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

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PoolsApi(api_client)
    pool_id = 'pool_id_example' # str | The ID of the pool to update.
    api_version = 'api_version_example' # str | Client API Version.
    pool_update_properties_parameter = openapi_client.PoolUpdatePropertiesParameter() # PoolUpdatePropertiesParameter | The parameters for the request.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Updates the properties of the specified pool.
        api_instance.pool_update_properties(pool_id, api_version, pool_update_properties_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
    except Exception as e:
        print("Exception when calling PoolsApi->pool_update_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pool_id** | **str**| The ID of the pool to update. | 
 **api_version** | **str**| Client API Version. | 
 **pool_update_properties_parameter** | [**PoolUpdatePropertiesParameter**](PoolUpdatePropertiesParameter.md)| The parameters for the request. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json; odata=minimalmetadata
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

