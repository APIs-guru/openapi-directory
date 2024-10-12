# openapi_client.JobsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_delete_job**](JobsApi.md#jobs_delete_job) | **DELETE** /api/v2/jobs/{jobID} | Mark the delete flag for the Job
[**jobs_get_job**](JobsApi.md#jobs_get_job) | **GET** /api/v2/jobs/{jobID} | Get a Job by ID
[**jobs_get_jobs**](JobsApi.md#jobs_get_jobs) | **GET** /api/v2/jobs | Get Jobs
[**jobs_post_job**](JobsApi.md#jobs_post_job) | **POST** /api/v2/jobs | Create a Job
[**jobs_put_job**](JobsApi.md#jobs_put_job) | **PUT** /api/v2/jobs/{jobID} | Update a Job


# **jobs_delete_job**
> jobs_delete_job(job_id)

Mark the delete flag for the Job

Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate              ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_id = 56 # int | The id of the job to delete

    try:
        # Mark the delete flag for the Job
        api_instance.jobs_delete_job(job_id)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_delete_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **int**| The id of the job to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get_job**
> BuildSystemSharedDTOJob jobs_get_job(job_id, is_include_deleted=is_include_deleted)

Get a Job by ID

Gets a Job by ID. When successful, the response is the requested Job.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_job import BuildSystemSharedDTOJob
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_id = 56 # int | The ID of the Job to get.
    is_include_deleted = True # bool | Does it include deleted job, or not (optional)

    try:
        # Get a Job by ID
        api_response = api_instance.jobs_get_job(job_id, is_include_deleted=is_include_deleted)
        print("The response of JobsApi->jobs_get_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_get_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **int**| The ID of the Job to get. | 
 **is_include_deleted** | **bool**| Does it include deleted job, or not | [optional] 

### Return type

[**BuildSystemSharedDTOJob**](BuildSystemSharedDTOJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get_jobs**
> APIPagedResponseBuildSystemSharedDTOJob jobs_get_jobs(limit=limit, offset=offset, is_include_deleted=is_include_deleted)

Get Jobs

Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.              If unsuccessful, an appropriate ApiError is returned.               ///

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_build_system_shared_dto_job import APIPagedResponseBuildSystemSharedDTOJob
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    is_include_deleted = True # bool | Does it include deleted job, or not (optional)

    try:
        # Get Jobs
        api_response = api_instance.jobs_get_jobs(limit=limit, offset=offset, is_include_deleted=is_include_deleted)
        print("The response of JobsApi->jobs_get_jobs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_get_jobs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **is_include_deleted** | **bool**| Does it include deleted job, or not | [optional] 

### Return type

[**APIPagedResponseBuildSystemSharedDTOJob**](APIPagedResponseBuildSystemSharedDTOJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_post_job**
> int jobs_post_job(build_system_shared_dto_job)

Create a Job

Creates a Job.  The body of the POST is the Job to create.  The JobID will be assigned on              creation of the Job.  When successful, the response is the JobID.  If unsuccessful, an               appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_job import BuildSystemSharedDTOJob
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    build_system_shared_dto_job = openapi_client.BuildSystemSharedDTOJob() # BuildSystemSharedDTOJob | The job to create.  The JobID will be assigned on creation of the Job.

    try:
        # Create a Job
        api_response = api_instance.jobs_post_job(build_system_shared_dto_job)
        print("The response of JobsApi->jobs_post_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_post_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_system_shared_dto_job** | [**BuildSystemSharedDTOJob**](BuildSystemSharedDTOJob.md)| The job to create.  The JobID will be assigned on creation of the Job. | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_put_job**
> jobs_put_job(job_id, build_system_shared_dto_job)

Update a Job

Updates a Job.  The body of the PUT is the updated Job.  When successful, the response is empty.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_job import BuildSystemSharedDTOJob
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    job_id = 56 # int | The id of the job to update
    build_system_shared_dto_job = openapi_client.BuildSystemSharedDTOJob() # BuildSystemSharedDTOJob | The updated job

    try:
        # Update a Job
        api_instance.jobs_put_job(job_id, build_system_shared_dto_job)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_put_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **int**| The id of the job to update | 
 **build_system_shared_dto_job** | [**BuildSystemSharedDTOJob**](BuildSystemSharedDTOJob.md)| The updated job | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

