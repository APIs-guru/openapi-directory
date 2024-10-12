# openapi_client.JobsApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_job**](JobsApi.md#cancel_job) | **POST** /v1/jobs/cancel | Cancels a job
[**get_attempt_normalization_statuses_for_job**](JobsApi.md#get_attempt_normalization_statuses_for_job) | **POST** /v1/jobs/get_normalization_status | Get normalization status to determine if we can bypass normalization phase
[**get_job_debug_info**](JobsApi.md#get_job_debug_info) | **POST** /v1/jobs/get_debug_info | Gets all information needed to debug this job
[**get_job_info**](JobsApi.md#get_job_info) | **POST** /v1/jobs/get | Get information about a job
[**get_job_info_light**](JobsApi.md#get_job_info_light) | **POST** /v1/jobs/get_light | Get information about a job excluding attempt info and logs
[**get_last_replication_job**](JobsApi.md#get_last_replication_job) | **POST** /v1/jobs/get_last_replication_job | 
[**list_jobs_for**](JobsApi.md#list_jobs_for) | **POST** /v1/jobs/list | Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.


# **cancel_job**
> JobInfoRead cancel_job(job_id_request_body)

Cancels a job

### Example


```python
import openapi_client
from openapi_client.models.job_id_request_body import JobIdRequestBody
from openapi_client.models.job_info_read import JobInfoRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_id_request_body = openapi_client.JobIdRequestBody() # JobIdRequestBody | 

    try:
        # Cancels a job
        api_response = api_instance.cancel_job(job_id_request_body)
        print("The response of JobsApi->cancel_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->cancel_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id_request_body** | [**JobIdRequestBody**](JobIdRequestBody.md)|  | 

### Return type

[**JobInfoRead**](JobInfoRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_attempt_normalization_statuses_for_job**
> AttemptNormalizationStatusReadList get_attempt_normalization_statuses_for_job(job_id_request_body=job_id_request_body)

Get normalization status to determine if we can bypass normalization phase

### Example


```python
import openapi_client
from openapi_client.models.attempt_normalization_status_read_list import AttemptNormalizationStatusReadList
from openapi_client.models.job_id_request_body import JobIdRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_id_request_body = openapi_client.JobIdRequestBody() # JobIdRequestBody |  (optional)

    try:
        # Get normalization status to determine if we can bypass normalization phase
        api_response = api_instance.get_attempt_normalization_statuses_for_job(job_id_request_body=job_id_request_body)
        print("The response of JobsApi->get_attempt_normalization_statuses_for_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->get_attempt_normalization_statuses_for_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id_request_body** | [**JobIdRequestBody**](JobIdRequestBody.md)|  | [optional] 

### Return type

[**AttemptNormalizationStatusReadList**](AttemptNormalizationStatusReadList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_job_debug_info**
> JobDebugInfoRead get_job_debug_info(job_id_request_body)

Gets all information needed to debug this job

### Example


```python
import openapi_client
from openapi_client.models.job_debug_info_read import JobDebugInfoRead
from openapi_client.models.job_id_request_body import JobIdRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_id_request_body = openapi_client.JobIdRequestBody() # JobIdRequestBody | 

    try:
        # Gets all information needed to debug this job
        api_response = api_instance.get_job_debug_info(job_id_request_body)
        print("The response of JobsApi->get_job_debug_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->get_job_debug_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id_request_body** | [**JobIdRequestBody**](JobIdRequestBody.md)|  | 

### Return type

[**JobDebugInfoRead**](JobDebugInfoRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_job_info**
> JobInfoRead get_job_info(job_id_request_body)

Get information about a job

### Example


```python
import openapi_client
from openapi_client.models.job_id_request_body import JobIdRequestBody
from openapi_client.models.job_info_read import JobInfoRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_id_request_body = openapi_client.JobIdRequestBody() # JobIdRequestBody | 

    try:
        # Get information about a job
        api_response = api_instance.get_job_info(job_id_request_body)
        print("The response of JobsApi->get_job_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->get_job_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id_request_body** | [**JobIdRequestBody**](JobIdRequestBody.md)|  | 

### Return type

[**JobInfoRead**](JobInfoRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_job_info_light**
> JobInfoLightRead get_job_info_light(job_id_request_body)

Get information about a job excluding attempt info and logs

### Example


```python
import openapi_client
from openapi_client.models.job_id_request_body import JobIdRequestBody
from openapi_client.models.job_info_light_read import JobInfoLightRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_id_request_body = openapi_client.JobIdRequestBody() # JobIdRequestBody | 

    try:
        # Get information about a job excluding attempt info and logs
        api_response = api_instance.get_job_info_light(job_id_request_body)
        print("The response of JobsApi->get_job_info_light:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->get_job_info_light: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id_request_body** | [**JobIdRequestBody**](JobIdRequestBody.md)|  | 

### Return type

[**JobInfoLightRead**](JobInfoLightRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_last_replication_job**
> JobOptionalRead get_last_replication_job(connection_id_request_body)



### Example


```python
import openapi_client
from openapi_client.models.connection_id_request_body import ConnectionIdRequestBody
from openapi_client.models.job_optional_read import JobOptionalRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    connection_id_request_body = openapi_client.ConnectionIdRequestBody() # ConnectionIdRequestBody | 

    try:
        api_response = api_instance.get_last_replication_job(connection_id_request_body)
        print("The response of JobsApi->get_last_replication_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->get_last_replication_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id_request_body** | [**ConnectionIdRequestBody**](ConnectionIdRequestBody.md)|  | 

### Return type

[**JobOptionalRead**](JobOptionalRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_jobs_for**
> JobReadList list_jobs_for(job_list_request_body)

Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### Example


```python
import openapi_client
from openapi_client.models.job_list_request_body import JobListRequestBody
from openapi_client.models.job_read_list import JobReadList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_list_request_body = openapi_client.JobListRequestBody() # JobListRequestBody | 

    try:
        # Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.
        api_response = api_instance.list_jobs_for(job_list_request_body)
        print("The response of JobsApi->list_jobs_for:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->list_jobs_for: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_list_request_body** | [**JobListRequestBody**](JobListRequestBody.md)|  | 

### Return type

[**JobReadList**](JobReadList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

