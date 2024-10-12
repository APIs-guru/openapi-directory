# openapi_client.ActivityRunsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activity_runs_get_activity_run**](ActivityRunsApi.md#activity_runs_get_activity_run) | **GET** /api/v2/activityRuns/{activityRunID} | Get an ActivityRun by ID
[**activity_runs_get_activity_run_status**](ActivityRunsApi.md#activity_runs_get_activity_run_status) | **GET** /api/v2/activityRuns/{activityRunID}/status | Get the ActivityRunStatus of an ActivityRun
[**activity_runs_get_activity_runs**](ActivityRunsApi.md#activity_runs_get_activity_runs) | **GET** /api/v2/activityRuns | Get ActivityRuns
[**activity_runs_put_activity_run**](ActivityRunsApi.md#activity_runs_put_activity_run) | **PUT** /api/v2/activityRuns/{activityRunID} | Update an ActivityRun
[**activity_runs_put_activity_run_status**](ActivityRunsApi.md#activity_runs_put_activity_run_status) | **PUT** /api/v2/activityRuns/{activityRunID}/status | Update the ActivityRunStatus of an ActivityRun


# **activity_runs_get_activity_run**
> BuildSystemSharedDTOActivityRun activity_runs_get_activity_run(activity_run_id)

Get an ActivityRun by ID

Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,              an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity_run import BuildSystemSharedDTOActivityRun
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
    api_instance = openapi_client.ActivityRunsApi(api_client)
    activity_run_id = 56 # int | The ID of the ActivityRun to get.

    try:
        # Get an ActivityRun by ID
        api_response = api_instance.activity_runs_get_activity_run(activity_run_id)
        print("The response of ActivityRunsApi->activity_runs_get_activity_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityRunsApi->activity_runs_get_activity_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_run_id** | **int**| The ID of the ActivityRun to get. | 

### Return type

[**BuildSystemSharedDTOActivityRun**](BuildSystemSharedDTOActivityRun.md)

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

# **activity_runs_get_activity_run_status**
> BuildSystemSharedDTOActivityRunStatus activity_runs_get_activity_run_status(activity_run_id)

Get the ActivityRunStatus of an ActivityRun

Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity_run_status import BuildSystemSharedDTOActivityRunStatus
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
    api_instance = openapi_client.ActivityRunsApi(api_client)
    activity_run_id = 56 # int | The ID of the ActivityRun to get ActivityRunStatus for.

    try:
        # Get the ActivityRunStatus of an ActivityRun
        api_response = api_instance.activity_runs_get_activity_run_status(activity_run_id)
        print("The response of ActivityRunsApi->activity_runs_get_activity_run_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityRunsApi->activity_runs_get_activity_run_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_run_id** | **int**| The ID of the ActivityRun to get ActivityRunStatus for. | 

### Return type

[**BuildSystemSharedDTOActivityRunStatus**](BuildSystemSharedDTOActivityRunStatus.md)

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

# **activity_runs_get_activity_runs**
> APIPagedResponseBuildSystemSharedDTOActivityRun activity_runs_get_activity_runs(limit=limit, offset=offset, status=status)

Get ActivityRuns

Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.                If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_build_system_shared_dto_activity_run import APIPagedResponseBuildSystemSharedDTOActivityRun
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
    api_instance = openapi_client.ActivityRunsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    status = 'status_example' # str | Optional. Filter activity runs by status.  Value should be a comma separated list of status to include.              If not specified, the default status filter is “InProgress”. (optional)

    try:
        # Get ActivityRuns
        api_response = api_instance.activity_runs_get_activity_runs(limit=limit, offset=offset, status=status)
        print("The response of ActivityRunsApi->activity_runs_get_activity_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityRunsApi->activity_runs_get_activity_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **status** | **str**| Optional. Filter activity runs by status.  Value should be a comma separated list of status to include.              If not specified, the default status filter is “InProgress”. | [optional] 

### Return type

[**APIPagedResponseBuildSystemSharedDTOActivityRun**](APIPagedResponseBuildSystemSharedDTOActivityRun.md)

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

# **activity_runs_put_activity_run**
> activity_runs_put_activity_run(activity_run_id, build_system_shared_dto_activity_run)

Update an ActivityRun

Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.              When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity_run import BuildSystemSharedDTOActivityRun
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
    api_instance = openapi_client.ActivityRunsApi(api_client)
    activity_run_id = 56 # int | The ID of the ActivityRun to update ActivityRunStatus for.
    build_system_shared_dto_activity_run = openapi_client.BuildSystemSharedDTOActivityRun() # BuildSystemSharedDTOActivityRun | The updated ActivityRun.

    try:
        # Update an ActivityRun
        api_instance.activity_runs_put_activity_run(activity_run_id, build_system_shared_dto_activity_run)
    except Exception as e:
        print("Exception when calling ActivityRunsApi->activity_runs_put_activity_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_run_id** | **int**| The ID of the ActivityRun to update ActivityRunStatus for. | 
 **build_system_shared_dto_activity_run** | [**BuildSystemSharedDTOActivityRun**](BuildSystemSharedDTOActivityRun.md)| The updated ActivityRun. | 

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

# **activity_runs_put_activity_run_status**
> activity_runs_put_activity_run_status(activity_run_id, build_system_shared_dto_activity_run_status)

Update the ActivityRunStatus of an ActivityRun

Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.              When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity_run_status import BuildSystemSharedDTOActivityRunStatus
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
    api_instance = openapi_client.ActivityRunsApi(api_client)
    activity_run_id = 56 # int | The ID of the ActivityRun to update ActivityRunStatus for.
    build_system_shared_dto_activity_run_status = openapi_client.BuildSystemSharedDTOActivityRunStatus() # BuildSystemSharedDTOActivityRunStatus | The updated ActivityRunStatus.

    try:
        # Update the ActivityRunStatus of an ActivityRun
        api_instance.activity_runs_put_activity_run_status(activity_run_id, build_system_shared_dto_activity_run_status)
    except Exception as e:
        print("Exception when calling ActivityRunsApi->activity_runs_put_activity_run_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_run_id** | **int**| The ID of the ActivityRun to update ActivityRunStatus for. | 
 **build_system_shared_dto_activity_run_status** | [**BuildSystemSharedDTOActivityRunStatus**](BuildSystemSharedDTOActivityRunStatus.md)| The updated ActivityRunStatus. | 

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

