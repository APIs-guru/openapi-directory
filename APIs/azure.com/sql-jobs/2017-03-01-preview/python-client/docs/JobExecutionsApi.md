# openapi_client.JobExecutionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_executions_cancel**](JobExecutionsApi.md#job_executions_cancel) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/cancel | 
[**job_executions_create**](JobExecutionsApi.md#job_executions_create) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/start | 
[**job_executions_create_or_update**](JobExecutionsApi.md#job_executions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId} | 
[**job_executions_get**](JobExecutionsApi.md#job_executions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId} | 
[**job_executions_list_by_agent**](JobExecutionsApi.md#job_executions_list_by_agent) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/executions | 
[**job_executions_list_by_job**](JobExecutionsApi.md#job_executions_list_by_job) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions | 


# **job_executions_cancel**
> job_executions_cancel(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, subscription_id, api_version)



Requests cancellation of a job execution.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobExecutionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job.
    job_execution_id = 'job_execution_id_example' # str | The id of the job execution to cancel.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.job_executions_cancel(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling JobExecutionsApi->job_executions_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job. | 
 **job_execution_id** | **str**| The id of the job execution to cancel. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | Successfully requested cancellation of the job execution. |  -  |
**0** | *** Error Responses: ***   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_executions_create**
> JobExecution job_executions_create(resource_group_name, server_name, job_agent_name, job_name, subscription_id, api_version)



Starts an elastic job execution.

### Example


```python
import openapi_client
from openapi_client.models.job_execution import JobExecution
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobExecutionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job to get.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_executions_create(resource_group_name, server_name, job_agent_name, job_name, subscription_id, api_version)
        print("The response of JobExecutionsApi->job_executions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobExecutionsApi->job_executions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job to get. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobExecution**](JobExecution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully started an execution for the job. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_executions_create_or_update**
> JobExecution job_executions_create_or_update(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, subscription_id, api_version)



Creates or updates a job execution.

### Example


```python
import openapi_client
from openapi_client.models.job_execution import JobExecution
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobExecutionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job to get.
    job_execution_id = 'job_execution_id_example' # str | The job execution id to create the job execution under.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_executions_create_or_update(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, subscription_id, api_version)
        print("The response of JobExecutionsApi->job_executions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobExecutionsApi->job_executions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job to get. | 
 **job_execution_id** | **str**| The job execution id to create the job execution under. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobExecution**](JobExecution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A job execution for the job with the given id already existed. |  -  |
**201** | Successfully started an execution for the job. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_executions_get**
> JobExecution job_executions_get(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, subscription_id, api_version)



Gets a job execution.

### Example


```python
import openapi_client
from openapi_client.models.job_execution import JobExecution
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobExecutionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job.
    job_execution_id = 'job_execution_id_example' # str | The id of the job execution
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_executions_get(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, subscription_id, api_version)
        print("The response of JobExecutionsApi->job_executions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobExecutionsApi->job_executions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job. | 
 **job_execution_id** | **str**| The id of the job execution | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobExecution**](JobExecution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the job. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_executions_list_by_agent**
> JobExecutionListResult job_executions_list_by_agent(resource_group_name, server_name, job_agent_name, subscription_id, api_version, create_time_min=create_time_min, create_time_max=create_time_max, end_time_min=end_time_min, end_time_max=end_time_max, is_active=is_active, skip=skip, top=top)



Lists all executions in a job agent.

### Example


```python
import openapi_client
from openapi_client.models.job_execution_list_result import JobExecutionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobExecutionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    create_time_min = '2013-10-20T19:20:30+01:00' # datetime | If specified, only job executions created at or after the specified time are included. (optional)
    create_time_max = '2013-10-20T19:20:30+01:00' # datetime | If specified, only job executions created before the specified time are included. (optional)
    end_time_min = '2013-10-20T19:20:30+01:00' # datetime | If specified, only job executions completed at or after the specified time are included. (optional)
    end_time_max = '2013-10-20T19:20:30+01:00' # datetime | If specified, only job executions completed before the specified time are included. (optional)
    is_active = True # bool | If specified, only active or only completed job executions are included. (optional)
    skip = 56 # int | The number of elements in the collection to skip. (optional)
    top = 56 # int | The number of elements to return from the collection. (optional)

    try:
        api_response = api_instance.job_executions_list_by_agent(resource_group_name, server_name, job_agent_name, subscription_id, api_version, create_time_min=create_time_min, create_time_max=create_time_max, end_time_min=end_time_min, end_time_max=end_time_max, is_active=is_active, skip=skip, top=top)
        print("The response of JobExecutionsApi->job_executions_list_by_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobExecutionsApi->job_executions_list_by_agent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **create_time_min** | **datetime**| If specified, only job executions created at or after the specified time are included. | [optional] 
 **create_time_max** | **datetime**| If specified, only job executions created before the specified time are included. | [optional] 
 **end_time_min** | **datetime**| If specified, only job executions completed at or after the specified time are included. | [optional] 
 **end_time_max** | **datetime**| If specified, only job executions completed before the specified time are included. | [optional] 
 **is_active** | **bool**| If specified, only active or only completed job executions are included. | [optional] 
 **skip** | **int**| The number of elements in the collection to skip. | [optional] 
 **top** | **int**| The number of elements to return from the collection. | [optional] 

### Return type

[**JobExecutionListResult**](JobExecutionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved job executions. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_executions_list_by_job**
> JobExecutionListResult job_executions_list_by_job(resource_group_name, server_name, job_agent_name, job_name, subscription_id, api_version, create_time_min=create_time_min, create_time_max=create_time_max, end_time_min=end_time_min, end_time_max=end_time_max, is_active=is_active, skip=skip, top=top)



Lists a job's executions.

### Example


```python
import openapi_client
from openapi_client.models.job_execution_list_result import JobExecutionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobExecutionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job to get.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    create_time_min = '2013-10-20T19:20:30+01:00' # datetime | If specified, only job executions created at or after the specified time are included. (optional)
    create_time_max = '2013-10-20T19:20:30+01:00' # datetime | If specified, only job executions created before the specified time are included. (optional)
    end_time_min = '2013-10-20T19:20:30+01:00' # datetime | If specified, only job executions completed at or after the specified time are included. (optional)
    end_time_max = '2013-10-20T19:20:30+01:00' # datetime | If specified, only job executions completed before the specified time are included. (optional)
    is_active = True # bool | If specified, only active or only completed job executions are included. (optional)
    skip = 56 # int | The number of elements in the collection to skip. (optional)
    top = 56 # int | The number of elements to return from the collection. (optional)

    try:
        api_response = api_instance.job_executions_list_by_job(resource_group_name, server_name, job_agent_name, job_name, subscription_id, api_version, create_time_min=create_time_min, create_time_max=create_time_max, end_time_min=end_time_min, end_time_max=end_time_max, is_active=is_active, skip=skip, top=top)
        print("The response of JobExecutionsApi->job_executions_list_by_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobExecutionsApi->job_executions_list_by_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job to get. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **create_time_min** | **datetime**| If specified, only job executions created at or after the specified time are included. | [optional] 
 **create_time_max** | **datetime**| If specified, only job executions created before the specified time are included. | [optional] 
 **end_time_min** | **datetime**| If specified, only job executions completed at or after the specified time are included. | [optional] 
 **end_time_max** | **datetime**| If specified, only job executions completed before the specified time are included. | [optional] 
 **is_active** | **bool**| If specified, only active or only completed job executions are included. | [optional] 
 **skip** | **int**| The number of elements in the collection to skip. | [optional] 
 **top** | **int**| The number of elements to return from the collection. | [optional] 

### Return type

[**JobExecutionListResult**](JobExecutionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved job executions. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

