# openapi_client.JobSchedulesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_schedule_add**](JobSchedulesApi.md#job_schedule_add) | **POST** /jobschedules | Adds a Job Schedule to the specified Account.
[**job_schedule_delete**](JobSchedulesApi.md#job_schedule_delete) | **DELETE** /jobschedules/{jobScheduleId} | Deletes a Job Schedule from the specified Account.
[**job_schedule_disable**](JobSchedulesApi.md#job_schedule_disable) | **POST** /jobschedules/{jobScheduleId}/disable | Disables a Job Schedule.
[**job_schedule_enable**](JobSchedulesApi.md#job_schedule_enable) | **POST** /jobschedules/{jobScheduleId}/enable | Enables a Job Schedule.
[**job_schedule_exists**](JobSchedulesApi.md#job_schedule_exists) | **HEAD** /jobschedules/{jobScheduleId} | Checks the specified Job Schedule exists.
[**job_schedule_get**](JobSchedulesApi.md#job_schedule_get) | **GET** /jobschedules/{jobScheduleId} | 
[**job_schedule_list**](JobSchedulesApi.md#job_schedule_list) | **GET** /jobschedules | Lists all of the Job Schedules in the specified Account.
[**job_schedule_patch**](JobSchedulesApi.md#job_schedule_patch) | **PATCH** /jobschedules/{jobScheduleId} | Updates the properties of the specified Job Schedule.
[**job_schedule_terminate**](JobSchedulesApi.md#job_schedule_terminate) | **POST** /jobschedules/{jobScheduleId}/terminate | Terminates a Job Schedule.
[**job_schedule_update**](JobSchedulesApi.md#job_schedule_update) | **PUT** /jobschedules/{jobScheduleId} | Updates the properties of the specified Job Schedule.


# **job_schedule_add**
> job_schedule_add(api_version, cloud_job_schedule, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Adds a Job Schedule to the specified Account.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_schedule_add_parameter import JobScheduleAddParameter
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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    cloud_job_schedule = openapi_client.JobScheduleAddParameter() # JobScheduleAddParameter | The Job Schedule to be added.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Adds a Job Schedule to the specified Account.
        api_instance.job_schedule_add(api_version, cloud_job_schedule, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **cloud_job_schedule** | [**JobScheduleAddParameter**](JobScheduleAddParameter.md)| The Job Schedule to be added. | 
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
**201** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_delete**
> job_schedule_delete(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Deletes a Job Schedule from the specified Account.

When you delete a Job Schedule, this also deletes all Jobs and Tasks under that schedule. When Tasks are deleted, all the files in their working directories on the Compute Nodes are also deleted (the retention period is ignored). The Job Schedule statistics are no longer accessible once the Job Schedule is deleted, though they are still counted towards Account lifetime statistics.

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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    job_schedule_id = 'job_schedule_id_example' # str | The ID of the Job Schedule to delete.
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
        # Deletes a Job Schedule from the specified Account.
        api_instance.job_schedule_delete(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_schedule_id** | **str**| The ID of the Job Schedule to delete. | 
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
**202** | The request to the Batch service was successful. |  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_disable**
> job_schedule_disable(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Disables a Job Schedule.

No new Jobs will be created until the Job Schedule is enabled again.

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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    job_schedule_id = 'job_schedule_id_example' # str | The ID of the Job Schedule to disable.
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
        # Disables a Job Schedule.
        api_instance.job_schedule_disable(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_disable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_schedule_id** | **str**| The ID of the Job Schedule to disable. | 
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
**204** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_enable**
> job_schedule_enable(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Enables a Job Schedule.

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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    job_schedule_id = 'job_schedule_id_example' # str | The ID of the Job Schedule to enable.
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
        # Enables a Job Schedule.
        api_instance.job_schedule_enable(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_schedule_id** | **str**| The ID of the Job Schedule to enable. | 
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
**204** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_exists**
> job_schedule_exists(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Checks the specified Job Schedule exists.

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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    job_schedule_id = 'job_schedule_id_example' # str | The ID of the Job Schedule which you want to check.
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
        # Checks the specified Job Schedule exists.
        api_instance.job_schedule_exists(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_schedule_id** | **str**| The ID of the Job Schedule which you want to check. | 
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
**200** | A response containing headers related to the Job Schedule, if it exists. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**404** | The Job Schedule does not exist. |  -  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_get**
> CloudJobSchedule job_schedule_get(job_schedule_id, api_version, select=select, expand=expand, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)



Gets information about the specified Job Schedule.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cloud_job_schedule import CloudJobSchedule
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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    job_schedule_id = 'job_schedule_id_example' # str | The ID of the Job Schedule to get.
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
        api_response = api_instance.job_schedule_get(job_schedule_id, api_version, select=select, expand=expand, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
        print("The response of JobSchedulesApi->job_schedule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_schedule_id** | **str**| The ID of the Job Schedule to get. | 
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

[**CloudJobSchedule**](CloudJobSchedule.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the Job Schedule. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_list**
> CloudJobScheduleListResult job_schedule_list(api_version, filter=filter, select=select, expand=expand, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Lists all of the Job Schedules in the specified Account.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cloud_job_schedule_list_result import CloudJobScheduleListResult
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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    filter = 'filter_example' # str | An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules. (optional)
    select = 'select_example' # str | An OData $select clause. (optional)
    expand = 'expand_example' # str | An OData $expand clause. (optional)
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 Job Schedules can be returned. (optional) (default to 1000)
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Lists all of the Job Schedules in the specified Account.
        api_response = api_instance.job_schedule_list(api_version, filter=filter, select=select, expand=expand, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of JobSchedulesApi->job_schedule_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **filter** | **str**| An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules. | [optional] 
 **select** | **str**| An OData $select clause. | [optional] 
 **expand** | **str**| An OData $expand clause. | [optional] 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 Job Schedules can be returned. | [optional] [default to 1000]
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**CloudJobScheduleListResult**](CloudJobScheduleListResult.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the list of Job Schedules. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_patch**
> job_schedule_patch(job_schedule_id, api_version, job_schedule_patch_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Updates the properties of the specified Job Schedule.

This replaces only the Job Schedule properties specified in the request. For example, if the schedule property is not specified with this request, then the Batch service will keep the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_schedule_patch_parameter import JobSchedulePatchParameter
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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    job_schedule_id = 'job_schedule_id_example' # str | The ID of the Job Schedule to update.
    api_version = 'api_version_example' # str | Client API Version.
    job_schedule_patch_parameter = openapi_client.JobSchedulePatchParameter() # JobSchedulePatchParameter | The parameters for the request.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        # Updates the properties of the specified Job Schedule.
        api_instance.job_schedule_patch(job_schedule_id, api_version, job_schedule_patch_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_schedule_id** | **str**| The ID of the Job Schedule to update. | 
 **api_version** | **str**| Client API Version. | 
 **job_schedule_patch_parameter** | [**JobSchedulePatchParameter**](JobSchedulePatchParameter.md)| The parameters for the request. | 
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
**200** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_terminate**
> job_schedule_terminate(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Terminates a Job Schedule.

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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    job_schedule_id = 'job_schedule_id_example' # str | The ID of the Job Schedule to terminates.
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
        # Terminates a Job Schedule.
        api_instance.job_schedule_terminate(job_schedule_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_terminate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_schedule_id** | **str**| The ID of the Job Schedule to terminates. | 
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
**202** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_schedule_update**
> job_schedule_update(job_schedule_id, api_version, job_schedule_update_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)

Updates the properties of the specified Job Schedule.

This fully replaces all the updatable properties of the Job Schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_schedule_update_parameter import JobScheduleUpdateParameter
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
    api_instance = openapi_client.JobSchedulesApi(api_client)
    job_schedule_id = 'job_schedule_id_example' # str | The ID of the Job Schedule to update.
    api_version = 'api_version_example' # str | Client API Version.
    job_schedule_update_parameter = openapi_client.JobScheduleUpdateParameter() # JobScheduleUpdateParameter | The parameters for the request.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)
    if_match = 'if_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. (optional)
    if_none_match = 'if_none_match_example' # str | An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. (optional)
    if_modified_since = 'if_modified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. (optional)
    if_unmodified_since = 'if_unmodified_since_example' # str | A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. (optional)

    try:
        # Updates the properties of the specified Job Schedule.
        api_instance.job_schedule_update(job_schedule_id, api_version, job_schedule_update_parameter, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date, if_match=if_match, if_none_match=if_none_match, if_modified_since=if_modified_since, if_unmodified_since=if_unmodified_since)
    except Exception as e:
        print("Exception when calling JobSchedulesApi->job_schedule_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_schedule_id** | **str**| The ID of the Job Schedule to update. | 
 **api_version** | **str**| Client API Version. | 
 **job_schedule_update_parameter** | [**JobScheduleUpdateParameter**](JobScheduleUpdateParameter.md)| The parameters for the request. | 
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
**200** | The request to the Batch service was successful. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * DataServiceId - The OData ID of the resource to which the request applied. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

