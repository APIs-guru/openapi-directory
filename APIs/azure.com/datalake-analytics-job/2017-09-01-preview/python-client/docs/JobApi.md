# openapi_client.JobApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_build**](JobApi.md#job_build) | **POST** /buildJob | 
[**job_cancel**](JobApi.md#job_cancel) | **POST** /jobs/{jobIdentity}/CancelJob | 
[**job_create**](JobApi.md#job_create) | **PUT** /jobs/{jobIdentity} | 
[**job_get**](JobApi.md#job_get) | **GET** /jobs/{jobIdentity} | 
[**job_get_debug_data_path**](JobApi.md#job_get_debug_data_path) | **GET** /jobs/{jobIdentity}/GetDebugDataPath | 
[**job_get_statistics**](JobApi.md#job_get_statistics) | **GET** /jobs/{jobIdentity}/GetStatistics | 
[**job_list**](JobApi.md#job_list) | **GET** /jobs | 
[**job_update**](JobApi.md#job_update) | **PATCH** /jobs/{jobIdentity} | 
[**job_yield**](JobApi.md#job_yield) | **POST** /jobs/{jobIdentity}/YieldJob | 


# **job_build**
> JobInformation job_build(api_version, parameters)



Builds (compiles) the specified job in the specified Data Lake Analytics account for job correctness and validation.

### Example


```python
import openapi_client
from openapi_client.models.build_job_parameters import BuildJobParameters
from openapi_client.models.job_information import JobInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.BuildJobParameters() # BuildJobParameters | The parameters to build a job.

    try:
        api_response = api_instance.job_build(api_version, parameters)
        print("The response of JobApi->job_build:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_build: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**BuildJobParameters**](BuildJobParameters.md)| The parameters to build a job. | 

### Return type

[**JobInformation**](JobInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully built the job script. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_cancel**
> job_cancel(job_identity, api_version)



Cancels the running job specified by the job ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    job_identity = 'job_identity_example' # str | Job identifier. Uniquely identifies the job across all jobs submitted to the service.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.job_cancel(job_identity, api_version)
    except Exception as e:
        print("Exception when calling JobApi->job_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_identity** | **str**| Job identifier. Uniquely identifies the job across all jobs submitted to the service. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully cancelled the job. |  -  |
**202** | Successfully initiated the cancellation of the specified job. |  -  |
**204** | The specified job was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_create**
> JobInformation job_create(job_identity, api_version, parameters)



Submits a job to the specified Data Lake Analytics account.

### Example


```python
import openapi_client
from openapi_client.models.create_job_parameters import CreateJobParameters
from openapi_client.models.job_information import JobInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    job_identity = 'job_identity_example' # str | Job identifier. Uniquely identifies the job across all jobs submitted to the service.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CreateJobParameters() # CreateJobParameters | The parameters to submit a job.

    try:
        api_response = api_instance.job_create(job_identity, api_version, parameters)
        print("The response of JobApi->job_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_identity** | **str**| Job identifier. Uniquely identifies the job across all jobs submitted to the service. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CreateJobParameters**](CreateJobParameters.md)| The parameters to submit a job. | 

### Return type

[**JobInformation**](JobInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully submitted the job. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_get**
> JobInformation job_get(job_identity, api_version)



Gets the job information for the specified job ID.

### Example


```python
import openapi_client
from openapi_client.models.job_information import JobInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    job_identity = 'job_identity_example' # str | JobInfo ID.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.job_get(job_identity, api_version)
        print("The response of JobApi->job_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_identity** | **str**| JobInfo ID. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**JobInformation**](JobInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of the specified job. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_get_debug_data_path**
> JobDataPath job_get_debug_data_path(job_identity, api_version)



Gets the job debug data information specified by the job ID.

### Example


```python
import openapi_client
from openapi_client.models.job_data_path import JobDataPath
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    job_identity = 'job_identity_example' # str | Job identifier. Uniquely identifies the job across all jobs submitted to the service.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.job_get_debug_data_path(job_identity, api_version)
        print("The response of JobApi->job_get_debug_data_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_get_debug_data_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_identity** | **str**| Job identifier. Uniquely identifies the job across all jobs submitted to the service. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**JobDataPath**](JobDataPath.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved debug data paths of the specified job. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_get_statistics**
> JobStatistics job_get_statistics(job_identity, api_version)



Gets statistics of the specified job.

### Example


```python
import openapi_client
from openapi_client.models.job_statistics import JobStatistics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    job_identity = 'job_identity_example' # str | Job Information ID.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.job_get_statistics(job_identity, api_version)
        print("The response of JobApi->job_get_statistics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_get_statistics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_identity** | **str**| Job Information ID. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**JobStatistics**](JobStatistics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved job statistics of the specified job. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_list**
> JobInfoListResult job_list(api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Lists the jobs, if any, associated with the specified Data Lake Analytics account. The response includes a link to the next page of results, if any.

### Example


```python
import openapi_client
from openapi_client.models.job_info_list_result import JobInfoListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.job_list(api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of JobApi->job_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**JobInfoListResult**](JobInfoListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of jobs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_update**
> JobInformation job_update(job_identity, api_version, parameters=parameters)



Updates the job information for the specified job ID. (Only for use internally with Scope job type.)

### Example


```python
import openapi_client
from openapi_client.models.job_information import JobInformation
from openapi_client.models.update_job_parameters import UpdateJobParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    job_identity = 'job_identity_example' # str | Job identifier. Uniquely identifies the job across all jobs submitted to the service.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.UpdateJobParameters() # UpdateJobParameters | The parameters to update a job. (optional)

    try:
        api_response = api_instance.job_update(job_identity, api_version, parameters=parameters)
        print("The response of JobApi->job_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_identity** | **str**| Job identifier. Uniquely identifies the job across all jobs submitted to the service. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**UpdateJobParameters**](UpdateJobParameters.md)| The parameters to update a job. | [optional] 

### Return type

[**JobInformation**](JobInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the details of the specified job. |  -  |
**201** | Successfully initiated an update of the specified job. |  -  |
**202** | Successfully initiated an update of the specified job. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_yield**
> job_yield(job_identity, api_version)



Pauses the specified job and places it back in the job queue, behind other jobs of equal or higher importance, based on priority. (Only for use internally with Scope job type.)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    job_identity = 'job_identity_example' # str | Job identifier. Uniquely identifies the job across all jobs submitted to the service.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.job_yield(job_identity, api_version)
    except Exception as e:
        print("Exception when calling JobApi->job_yield: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_identity** | **str**| Job identifier. Uniquely identifies the job across all jobs submitted to the service. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully yielded the specified job. |  -  |
**202** | Successfully initiated the yielding of the specified job. |  -  |
**204** | The specified job was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

