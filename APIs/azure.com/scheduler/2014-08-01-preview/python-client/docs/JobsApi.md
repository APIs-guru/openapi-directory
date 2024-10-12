# openapi_client.JobsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_create_or_update**](JobsApi.md#jobs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName} | 
[**jobs_delete**](JobsApi.md#jobs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName} | 
[**jobs_get**](JobsApi.md#jobs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName} | 
[**jobs_list**](JobsApi.md#jobs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs | 
[**jobs_list_job_history**](JobsApi.md#jobs_list_job_history) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}/history | 
[**jobs_patch**](JobsApi.md#jobs_patch) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName} | 
[**jobs_run**](JobsApi.md#jobs_run) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}/run | 


# **jobs_create_or_update**
> JobDefinition jobs_create_or_update(subscription_id, resource_group_name, job_collection_name, job_name, api_version, job)



Provisions a new job or updates an existing job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_definition import JobDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    job_name = 'job_name_example' # str | The job name.
    api_version = 'api_version_example' # str | The API version.
    job = openapi_client.JobDefinition() # JobDefinition | The job definition.

    try:
        api_response = api_instance.jobs_create_or_update(subscription_id, resource_group_name, job_collection_name, job_name, api_version, job)
        print("The response of JobsApi->jobs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **job_name** | **str**| The job name. | 
 **api_version** | **str**| The API version. | 
 **job** | [**JobDefinition**](JobDefinition.md)| The job definition. | 

### Return type

[**JobDefinition**](JobDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job has been successfully updated. |  -  |
**201** | The job has been successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_delete**
> jobs_delete(subscription_id, resource_group_name, job_collection_name, job_name, api_version)



Deletes a job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    job_name = 'job_name_example' # str | The job name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.jobs_delete(subscription_id, resource_group_name, job_collection_name, job_name, api_version)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **job_name** | **str**| The job name. | 
 **api_version** | **str**| The API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job has been successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get**
> JobDefinition jobs_get(subscription_id, resource_group_name, job_collection_name, job_name, api_version)



Gets a job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_definition import JobDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    job_name = 'job_name_example' # str | The job name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.jobs_get(subscription_id, resource_group_name, job_collection_name, job_name, api_version)
        print("The response of JobsApi->jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **job_name** | **str**| The job name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**JobDefinition**](JobDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job has been successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list**
> JobListResult jobs_list(subscription_id, resource_group_name, job_collection_name, api_version, top=top, skip=skip, filter=filter)



Lists all jobs under the specified job collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_list_result import JobListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of jobs to request, in the of range [1..100]. (optional)
    skip = 56 # int | The (0-based) index of the job history list from which to begin requesting entries. (optional)
    filter = 'filter_example' # str | The filter to apply on the job state. (optional)

    try:
        api_response = api_instance.jobs_list(subscription_id, resource_group_name, job_collection_name, api_version, top=top, skip=skip, filter=filter)
        print("The response of JobsApi->jobs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of jobs to request, in the of range [1..100]. | [optional] 
 **skip** | **int**| The (0-based) index of the job history list from which to begin requesting entries. | [optional] 
 **filter** | **str**| The filter to apply on the job state. | [optional] 

### Return type

[**JobListResult**](JobListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job has been successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_job_history**
> JobHistoryListResult jobs_list_job_history(subscription_id, resource_group_name, job_collection_name, job_name, api_version, top=top, skip=skip, filter=filter)



Lists job history.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_history_list_result import JobHistoryListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    job_name = 'job_name_example' # str | The job name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | the number of job history to request, in the of range [1..100]. (optional)
    skip = 56 # int | The (0-based) index of the job history list from which to begin requesting entries. (optional)
    filter = 'filter_example' # str | The filter to apply on the job state. (optional)

    try:
        api_response = api_instance.jobs_list_job_history(subscription_id, resource_group_name, job_collection_name, job_name, api_version, top=top, skip=skip, filter=filter)
        print("The response of JobsApi->jobs_list_job_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list_job_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **job_name** | **str**| The job name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| the number of job history to request, in the of range [1..100]. | [optional] 
 **skip** | **int**| The (0-based) index of the job history list from which to begin requesting entries. | [optional] 
 **filter** | **str**| The filter to apply on the job state. | [optional] 

### Return type

[**JobHistoryListResult**](JobHistoryListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job histories have been successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_patch**
> JobDefinition jobs_patch(subscription_id, resource_group_name, job_collection_name, job_name, api_version, job)



Patches an existing job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_definition import JobDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    job_name = 'job_name_example' # str | The job name.
    api_version = 'api_version_example' # str | The API version.
    job = openapi_client.JobDefinition() # JobDefinition | The job definition.

    try:
        api_response = api_instance.jobs_patch(subscription_id, resource_group_name, job_collection_name, job_name, api_version, job)
        print("The response of JobsApi->jobs_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **job_name** | **str**| The job name. | 
 **api_version** | **str**| The API version. | 
 **job** | [**JobDefinition**](JobDefinition.md)| The job definition. | 

### Return type

[**JobDefinition**](JobDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job has been successfully patched. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_run**
> jobs_run(subscription_id, resource_group_name, job_collection_name, job_name, api_version)



Runs a job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    job_name = 'job_name_example' # str | The job name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.jobs_run(subscription_id, resource_group_name, job_collection_name, job_name, api_version)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **job_name** | **str**| The job name. | 
 **api_version** | **str**| The API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job has been successfully run. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

