# openapi_client.JobApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_get**](JobApi.md#job_get) | **GET** /templeton/v1/jobs/{jobId} | 
[**job_get_app_state**](JobApi.md#job_get_app_state) | **GET** /ws/v1/cluster/apps/{appId}/state | 
[**job_kill**](JobApi.md#job_kill) | **DELETE** /templeton/v1/jobs/{jobId} | 
[**job_list**](JobApi.md#job_list) | **GET** /templeton/v1/jobs | 
[**job_list_after_job_id**](JobApi.md#job_list_after_job_id) | **GET** /templeton/v1/jobs?op&#x3D;LISTAFTERID | 
[**job_submit_hive_job**](JobApi.md#job_submit_hive_job) | **POST** /templeton/v1/hive | 
[**job_submit_map_reduce_job**](JobApi.md#job_submit_map_reduce_job) | **POST** /templeton/v1/mapreduce/jar | 
[**job_submit_map_reduce_streaming_job**](JobApi.md#job_submit_map_reduce_streaming_job) | **POST** /templeton/v1/mapreduce/streaming | 
[**job_submit_pig_job**](JobApi.md#job_submit_pig_job) | **POST** /templeton/v1/pig | 
[**job_submit_sqoop_job**](JobApi.md#job_submit_sqoop_job) | **POST** /templeton/v1/sqoop | 


# **job_get**
> JobDetailRootJsonObject job_get(user_name, job_id, fields)



Gets job details from the specified HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_detail_root_json_object import JobDetailRootJsonObject
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    job_id = 'job_id_example' # str | The id of the job.
    fields = 'fields_example' # str | If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.

    try:
        api_response = api_instance.job_get(user_name, job_id, fields)
        print("The response of JobApi->job_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **job_id** | **str**| The id of the job. | 
 **fields** | **str**| If fields set to &#39;*&#39;, the request will return full details of the job. Currently the value can only be &#39;*&#39;. | 

### Return type

[**JobDetailRootJsonObject**](JobDetailRootJsonObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_get_app_state**
> AppState job_get_app_state(app_id)



Gets application state from the specified HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_state import AppState
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
    api_instance = openapi_client.JobApi(api_client)
    app_id = 'app_id_example' # str | The id of the job.

    try:
        api_response = api_instance.job_get_app_state(app_id)
        print("The response of JobApi->job_get_app_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_get_app_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The id of the job. | 

### Return type

[**AppState**](AppState.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_kill**
> JobDetailRootJsonObject job_kill(user_name, job_id)



Initiates cancel on given running job in the specified HDInsight.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_detail_root_json_object import JobDetailRootJsonObject
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    job_id = 'job_id_example' # str | The id of the job.

    try:
        api_response = api_instance.job_kill(user_name, job_id)
        print("The response of JobApi->job_kill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_kill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **job_id** | **str**| The id of the job. | 

### Return type

[**JobDetailRootJsonObject**](JobDetailRootJsonObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_list**
> List[JobListJsonObject] job_list(user_name, showall, fields)



Gets the list of jobs from the specified HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_list_json_object import JobListJsonObject
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    showall = 'showall_example' # str | If showall is set to 'true', the request will return all jobs the user has permission to view, not only the jobs belonging to the user.
    fields = 'fields_example' # str | If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.

    try:
        api_response = api_instance.job_list(user_name, showall, fields)
        print("The response of JobApi->job_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **showall** | **str**| If showall is set to &#39;true&#39;, the request will return all jobs the user has permission to view, not only the jobs belonging to the user. | 
 **fields** | **str**| If fields set to &#39;*&#39;, the request will return full details of the job. Currently the value can only be &#39;*&#39;. | 

### Return type

[**List[JobListJsonObject]**](JobListJsonObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_list_after_job_id**
> List[JobListJsonObject] job_list_after_job_id(user_name, showall, fields, jobid=jobid, numrecords=numrecords)



Gets numrecords Of Jobs after jobid from the specified HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_list_json_object import JobListJsonObject
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    showall = 'showall_example' # str | If showall is set to 'true', the request will return all jobs the user has permission to view, not only the jobs belonging to the user.
    fields = 'fields_example' # str | If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.
    jobid = 'jobid_example' # str | JobId from where to list jobs. (optional)
    numrecords = 56 # int | Number of jobs to fetch. (optional)

    try:
        api_response = api_instance.job_list_after_job_id(user_name, showall, fields, jobid=jobid, numrecords=numrecords)
        print("The response of JobApi->job_list_after_job_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_list_after_job_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **showall** | **str**| If showall is set to &#39;true&#39;, the request will return all jobs the user has permission to view, not only the jobs belonging to the user. | 
 **fields** | **str**| If fields set to &#39;*&#39;, the request will return full details of the job. Currently the value can only be &#39;*&#39;. | 
 **jobid** | **str**| JobId from where to list jobs. | [optional] 
 **numrecords** | **int**| Number of jobs to fetch. | [optional] 

### Return type

[**List[JobListJsonObject]**](JobListJsonObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_submit_hive_job**
> JobSubmissionJsonResponse job_submit_hive_job(user_name, content)



Submits a Hive job to an HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_submission_json_response import JobSubmissionJsonResponse
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    content = None # object | The content of the Hive job request.

    try:
        api_response = api_instance.job_submit_hive_job(user_name, content)
        print("The response of JobApi->job_submit_hive_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_submit_hive_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **content** | **object**| The content of the Hive job request. | 

### Return type

[**JobSubmissionJsonResponse**](JobSubmissionJsonResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/text
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_submit_map_reduce_job**
> JobSubmissionJsonResponse job_submit_map_reduce_job(user_name, content)



Submits a MapReduce job to an HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_submission_json_response import JobSubmissionJsonResponse
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    content = None # object | The content of the MapReduce job request.

    try:
        api_response = api_instance.job_submit_map_reduce_job(user_name, content)
        print("The response of JobApi->job_submit_map_reduce_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_submit_map_reduce_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **content** | **object**| The content of the MapReduce job request. | 

### Return type

[**JobSubmissionJsonResponse**](JobSubmissionJsonResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_submit_map_reduce_streaming_job**
> JobSubmissionJsonResponse job_submit_map_reduce_streaming_job(user_name, content)



Submits a MapReduce streaming job to an HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_submission_json_response import JobSubmissionJsonResponse
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    content = None # object | The content of the MapReduce job request.

    try:
        api_response = api_instance.job_submit_map_reduce_streaming_job(user_name, content)
        print("The response of JobApi->job_submit_map_reduce_streaming_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_submit_map_reduce_streaming_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **content** | **object**| The content of the MapReduce job request. | 

### Return type

[**JobSubmissionJsonResponse**](JobSubmissionJsonResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_submit_pig_job**
> JobSubmissionJsonResponse job_submit_pig_job(user_name, content)



Submits a Pig job to an HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_submission_json_response import JobSubmissionJsonResponse
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    content = None # object | The content of the Pig job request.

    try:
        api_response = api_instance.job_submit_pig_job(user_name, content)
        print("The response of JobApi->job_submit_pig_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_submit_pig_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **content** | **object**| The content of the Pig job request. | 

### Return type

[**JobSubmissionJsonResponse**](JobSubmissionJsonResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_submit_sqoop_job**
> JobSubmissionJsonResponse job_submit_sqoop_job(user_name, content)



Submits a Sqoop job to an HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_submission_json_response import JobSubmissionJsonResponse
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
    api_instance = openapi_client.JobApi(api_client)
    user_name = 'user_name_example' # str | The user name used for running job.
    content = None # object | The content of the Sqoop job request.

    try:
        api_response = api_instance.job_submit_sqoop_job(user_name, content)
        print("The response of JobApi->job_submit_sqoop_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->job_submit_sqoop_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_name** | **str**| The user name used for running job. | 
 **content** | **object**| The content of the Sqoop job request. | 

### Return type

[**JobSubmissionJsonResponse**](JobSubmissionJsonResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

