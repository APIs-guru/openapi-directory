# openapi_client.JobRunsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_runs_delete_job_run**](JobRunsApi.md#job_runs_delete_job_run) | **DELETE** /api/v2/jobRuns/{jobRunID} | Delete a JobRun
[**job_runs_get_job_run**](JobRunsApi.md#job_runs_get_job_run) | **GET** /api/v2/jobRuns/{jobRunID} | Get a JobRun by ID
[**job_runs_get_job_runs**](JobRunsApi.md#job_runs_get_job_runs) | **GET** /api/v2/jobRuns | Get JobRuns
[**job_runs_post_job_run**](JobRunsApi.md#job_runs_post_job_run) | **POST** /api/v2/jobRuns | Create a JobRun
[**job_runs_put_job_run**](JobRunsApi.md#job_runs_put_job_run) | **PUT** /api/v2/jobRuns/{jobRunID} | Update a JobRun


# **job_runs_delete_job_run**
> job_runs_delete_job_run(job_run_id)

Delete a JobRun

Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate              ApiError is returned.

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
    api_instance = openapi_client.JobRunsApi(api_client)
    job_run_id = 56 # int | The id of the JobRun to delete

    try:
        # Delete a JobRun
        api_instance.job_runs_delete_job_run(job_run_id)
    except Exception as e:
        print("Exception when calling JobRunsApi->job_runs_delete_job_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_run_id** | **int**| The id of the JobRun to delete | 

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

# **job_runs_get_job_run**
> BuildSystemSharedDTOJobRun job_runs_get_job_run(job_run_id, include_activity_run_details=include_activity_run_details)

Get a JobRun by ID

Gets a JobRun by ID. When successful, the response is the requested JobRun.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_job_run import BuildSystemSharedDTOJobRun
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
    api_instance = openapi_client.JobRunsApi(api_client)
    job_run_id = 56 # int | The ID of the JobRun to get.
    include_activity_run_details = True # bool | Optional. Indicates whether to include ActivityRun details.  Defaults to false. (optional)

    try:
        # Get a JobRun by ID
        api_response = api_instance.job_runs_get_job_run(job_run_id, include_activity_run_details=include_activity_run_details)
        print("The response of JobRunsApi->job_runs_get_job_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobRunsApi->job_runs_get_job_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_run_id** | **int**| The ID of the JobRun to get. | 
 **include_activity_run_details** | **bool**| Optional. Indicates whether to include ActivityRun details.  Defaults to false. | [optional] 

### Return type

[**BuildSystemSharedDTOJobRun**](BuildSystemSharedDTOJobRun.md)

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

# **job_runs_get_job_runs**
> APIPagedResponseBuildSystemSharedDTOJobRun job_runs_get_job_runs(limit=limit, offset=offset, include_activity_run_details=include_activity_run_details)

Get JobRuns

Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_build_system_shared_dto_job_run import APIPagedResponseBuildSystemSharedDTOJobRun
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
    api_instance = openapi_client.JobRunsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    include_activity_run_details = True # bool | Optional. Indicates whether to include ActivityRun details.  Defaults to false. (optional)

    try:
        # Get JobRuns
        api_response = api_instance.job_runs_get_job_runs(limit=limit, offset=offset, include_activity_run_details=include_activity_run_details)
        print("The response of JobRunsApi->job_runs_get_job_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobRunsApi->job_runs_get_job_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **include_activity_run_details** | **bool**| Optional. Indicates whether to include ActivityRun details.  Defaults to false. | [optional] 

### Return type

[**APIPagedResponseBuildSystemSharedDTOJobRun**](APIPagedResponseBuildSystemSharedDTOJobRun.md)

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

# **job_runs_post_job_run**
> int job_runs_post_job_run(build_system_shared_dto_job_run)

Create a JobRun

Creates a JobRun.  The body of the POST is the JobRun to create.  The JobRunID will be assigned on              creation of the JobRun.  When successful, the response is the JobRunID.  If unsuccessful, an               appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_job_run import BuildSystemSharedDTOJobRun
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
    api_instance = openapi_client.JobRunsApi(api_client)
    build_system_shared_dto_job_run = openapi_client.BuildSystemSharedDTOJobRun() # BuildSystemSharedDTOJobRun | The JobRun to create.  The JobRunID will be assigned on creation of the JobRun.

    try:
        # Create a JobRun
        api_response = api_instance.job_runs_post_job_run(build_system_shared_dto_job_run)
        print("The response of JobRunsApi->job_runs_post_job_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobRunsApi->job_runs_post_job_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_system_shared_dto_job_run** | [**BuildSystemSharedDTOJobRun**](BuildSystemSharedDTOJobRun.md)| The JobRun to create.  The JobRunID will be assigned on creation of the JobRun. | 

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

# **job_runs_put_job_run**
> job_runs_put_job_run(job_run_id, build_system_shared_dto_job_run)

Update a JobRun

///               Updates a JobRun.  The body of the PUT is the updated JobRun.              When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_job_run import BuildSystemSharedDTOJobRun
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
    api_instance = openapi_client.JobRunsApi(api_client)
    job_run_id = 56 # int | The id of the JobRun to update
    build_system_shared_dto_job_run = openapi_client.BuildSystemSharedDTOJobRun() # BuildSystemSharedDTOJobRun | The updated JobRun

    try:
        # Update a JobRun
        api_instance.job_runs_put_job_run(job_run_id, build_system_shared_dto_job_run)
    except Exception as e:
        print("Exception when calling JobRunsApi->job_runs_put_job_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_run_id** | **int**| The id of the JobRun to update | 
 **build_system_shared_dto_job_run** | [**BuildSystemSharedDTOJobRun**](BuildSystemSharedDTOJobRun.md)| The updated JobRun | 

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

