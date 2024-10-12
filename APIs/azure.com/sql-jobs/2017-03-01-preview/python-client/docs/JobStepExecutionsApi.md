# openapi_client.JobStepExecutionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_step_executions_get**](JobStepExecutionsApi.md#job_step_executions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName} | 
[**job_step_executions_list_by_job_execution**](JobStepExecutionsApi.md#job_step_executions_list_by_job_execution) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps | 


# **job_step_executions_get**
> JobExecution job_step_executions_get(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, step_name, subscription_id, api_version)



Gets a step execution of a job execution.

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
    api_instance = openapi_client.JobStepExecutionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job to get.
    job_execution_id = 'job_execution_id_example' # str | The unique id of the job execution
    step_name = 'step_name_example' # str | The name of the step.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_step_executions_get(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, step_name, subscription_id, api_version)
        print("The response of JobStepExecutionsApi->job_step_executions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStepExecutionsApi->job_step_executions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job to get. | 
 **job_execution_id** | **str**| The unique id of the job execution | 
 **step_name** | **str**| The name of the step. | 
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
**200** | Successfully retrieved the step execution. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_step_executions_list_by_job_execution**
> JobExecutionListResult job_step_executions_list_by_job_execution(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, subscription_id, api_version, create_time_min=create_time_min, create_time_max=create_time_max, end_time_min=end_time_min, end_time_max=end_time_max, is_active=is_active, skip=skip, top=top)



Lists the step executions of a job execution.

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
    api_instance = openapi_client.JobStepExecutionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job to get.
    job_execution_id = 'job_execution_id_example' # str | The id of the job execution
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
        api_response = api_instance.job_step_executions_list_by_job_execution(resource_group_name, server_name, job_agent_name, job_name, job_execution_id, subscription_id, api_version, create_time_min=create_time_min, create_time_max=create_time_max, end_time_min=end_time_min, end_time_max=end_time_max, is_active=is_active, skip=skip, top=top)
        print("The response of JobStepExecutionsApi->job_step_executions_list_by_job_execution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStepExecutionsApi->job_step_executions_list_by_job_execution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job to get. | 
 **job_execution_id** | **str**| The id of the job execution | 
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
**200** | Successfully retrieved the step executions. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

