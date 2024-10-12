# openapi_client.JobsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_cancel**](JobsApi.md#jobs_cancel) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/jobs/{jobId}/cancel | 
[**jobs_get**](JobsApi.md#jobs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/jobs/{jobId} | 
[**jobs_list_by_data_manager**](JobsApi.md#jobs_list_by_data_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/jobs | 
[**jobs_list_by_data_service**](JobsApi.md#jobs_list_by_data_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobs | 
[**jobs_list_by_job_definition**](JobsApi.md#jobs_list_by_job_definition) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/jobs | 
[**jobs_resume**](JobsApi.md#jobs_resume) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/jobs/{jobId}/resume | 


# **jobs_cancel**
> jobs_cancel(data_service_name, job_definition_name, job_id, subscription_id, resource_group_name, data_manager_name, api_version)



Cancels the given job.

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
    data_service_name = 'data_service_name_example' # str | The name of the data service of the job definition.
    job_definition_name = 'job_definition_name_example' # str | The name of the job definition of the job.
    job_id = 'job_id_example' # str | The job id of the job queried.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_instance.jobs_cancel(data_service_name, job_definition_name, job_id, subscription_id, resource_group_name, data_manager_name, api_version)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The name of the data service of the job definition. | 
 **job_definition_name** | **str**| The name of the job definition of the job. | 
 **job_id** | **str**| The job id of the job queried. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

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
**202** | Accepted job cancellation request. |  -  |
**204** | Job cancelled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get**
> Job jobs_get(data_service_name, job_definition_name, job_id, subscription_id, resource_group_name, data_manager_name, api_version, expand=expand)



This method gets a data manager job given the jobId.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job import Job
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
    data_service_name = 'data_service_name_example' # str | The name of the data service of the job definition.
    job_definition_name = 'job_definition_name_example' # str | The name of the job definition of the job.
    job_id = 'job_id_example' # str | The job id of the job queried.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    expand = 'expand_example' # str | $expand is supported on details parameter for job, which provides details on the job stages. (optional)

    try:
        api_response = api_instance.jobs_get(data_service_name, job_definition_name, job_id, subscription_id, resource_group_name, data_manager_name, api_version, expand=expand)
        print("The response of JobsApi->jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The name of the data service of the job definition. | 
 **job_definition_name** | **str**| The name of the job definition of the job. | 
 **job_id** | **str**| The job id of the job queried. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **expand** | **str**| $expand is supported on details parameter for job, which provides details on the job stages. | [optional] 

### Return type

[**Job**](Job.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job that matches the given criteria. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_by_data_manager**
> JobList jobs_list_by_data_manager(subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)



This method gets all the jobs at the data manager resource level.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_list import JobList
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
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    filter = 'filter_example' # str | OData Filter options (optional)

    try:
        api_response = api_instance.jobs_list_by_data_manager(subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)
        print("The response of JobsApi->jobs_list_by_data_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list_by_data_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **filter** | **str**| OData Filter options | [optional] 

### Return type

[**JobList**](JobList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of jobs in the resource specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_by_data_service**
> JobList jobs_list_by_data_service(data_service_name, subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)



This method gets all the jobs of a data service type in a given resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_list import JobList
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
    data_service_name = 'data_service_name_example' # str | The name of the data service of interest.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    filter = 'filter_example' # str | OData Filter options (optional)

    try:
        api_response = api_instance.jobs_list_by_data_service(data_service_name, subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)
        print("The response of JobsApi->jobs_list_by_data_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list_by_data_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The name of the data service of interest. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **filter** | **str**| OData Filter options | [optional] 

### Return type

[**JobList**](JobList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of jobs that match the service and resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_by_job_definition**
> JobList jobs_list_by_job_definition(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)



This method gets all the jobs of a given job definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_list import JobList
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
    data_service_name = 'data_service_name_example' # str | The name of the data service of the job definition.
    job_definition_name = 'job_definition_name_example' # str | The name of the job definition for which jobs are needed.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    filter = 'filter_example' # str | OData Filter options (optional)

    try:
        api_response = api_instance.jobs_list_by_job_definition(data_service_name, job_definition_name, subscription_id, resource_group_name, data_manager_name, api_version, filter=filter)
        print("The response of JobsApi->jobs_list_by_job_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list_by_job_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The name of the data service of the job definition. | 
 **job_definition_name** | **str**| The name of the job definition for which jobs are needed. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **filter** | **str**| OData Filter options | [optional] 

### Return type

[**JobList**](JobList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of jobs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_resume**
> jobs_resume(data_service_name, job_definition_name, job_id, subscription_id, resource_group_name, data_manager_name, api_version)



Resumes the given job.

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
    data_service_name = 'data_service_name_example' # str | The name of the data service of the job definition.
    job_definition_name = 'job_definition_name_example' # str | The name of the job definition of the job.
    job_id = 'job_id_example' # str | The job id of the job queried.
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    data_manager_name = 'data_manager_name_example' # str | The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_instance.jobs_resume(data_service_name, job_definition_name, job_id, subscription_id, resource_group_name, data_manager_name, api_version)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_resume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_service_name** | **str**| The name of the data service of the job definition. | 
 **job_definition_name** | **str**| The name of the job definition of the job. | 
 **job_id** | **str**| The job id of the job queried. | 
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **data_manager_name** | **str**| The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

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
**202** | Accepted job resume request. |  -  |
**204** | Job resumed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

