# openapi_client.JobStepsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_steps_create_or_update**](JobStepsApi.md#job_steps_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName} | 
[**job_steps_delete**](JobStepsApi.md#job_steps_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName} | 
[**job_steps_get**](JobStepsApi.md#job_steps_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName} | 
[**job_steps_get_by_version**](JobStepsApi.md#job_steps_get_by_version) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions/{jobVersion}/steps/{stepName} | 
[**job_steps_list_by_job**](JobStepsApi.md#job_steps_list_by_job) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps | 
[**job_steps_list_by_version**](JobStepsApi.md#job_steps_list_by_version) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions/{jobVersion}/steps | 


# **job_steps_create_or_update**
> JobStep job_steps_create_or_update(resource_group_name, server_name, job_agent_name, job_name, step_name, subscription_id, api_version, parameters)



Creates or updates a job step. This will implicitly create a new job version.

### Example


```python
import openapi_client
from openapi_client.models.job_step import JobStep
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
    api_instance = openapi_client.JobStepsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job.
    step_name = 'step_name_example' # str | The name of the job step.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.JobStep() # JobStep | The requested state of the job step.

    try:
        api_response = api_instance.job_steps_create_or_update(resource_group_name, server_name, job_agent_name, job_name, step_name, subscription_id, api_version, parameters)
        print("The response of JobStepsApi->job_steps_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStepsApi->job_steps_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job. | 
 **step_name** | **str**| The name of the job step. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**JobStep**](JobStep.md)| The requested state of the job step. | 

### Return type

[**JobStep**](JobStep.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the job step. |  -  |
**201** | Successfully added the job step. |  -  |
**0** | *** Error Responses: ***   * 400 JobStepIdMismatch - Step Id in the specified Job Step URI does not match step id in provided Job Step Resource.   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 400 InvalidResourceId - Invalid resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 MismatchingJobAccountNameWithUrl - The provided job account name did not match the name in the Url.   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_steps_delete**
> job_steps_delete(resource_group_name, server_name, job_agent_name, job_name, step_name, subscription_id, api_version)



Deletes a job step. This will implicitly create a new job version.

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
    api_instance = openapi_client.JobStepsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job.
    step_name = 'step_name_example' # str | The name of the job step to delete.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.job_steps_delete(resource_group_name, server_name, job_agent_name, job_name, step_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling JobStepsApi->job_steps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job. | 
 **step_name** | **str**| The name of the job step to delete. | 
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
**200** | Successfully deleted the job step. |  -  |
**204** | The specified job step does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 400 ElasticJobsOperationFailed - Elastic jobs management operation failed.   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_steps_get**
> JobStep job_steps_get(resource_group_name, server_name, job_agent_name, job_name, step_name, subscription_id, api_version)



Gets a job step in a job's current version.

### Example


```python
import openapi_client
from openapi_client.models.job_step import JobStep
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
    api_instance = openapi_client.JobStepsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job.
    step_name = 'step_name_example' # str | The name of the job step.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_steps_get(resource_group_name, server_name, job_agent_name, job_name, step_name, subscription_id, api_version)
        print("The response of JobStepsApi->job_steps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStepsApi->job_steps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job. | 
 **step_name** | **str**| The name of the job step. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobStep**](JobStep.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the job step. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_steps_get_by_version**
> JobStep job_steps_get_by_version(resource_group_name, server_name, job_agent_name, job_name, job_version, step_name, subscription_id, api_version)



Gets the specified version of a job step.

### Example


```python
import openapi_client
from openapi_client.models.job_step import JobStep
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
    api_instance = openapi_client.JobStepsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job.
    job_version = 56 # int | The version of the job to get.
    step_name = 'step_name_example' # str | The name of the job step.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_steps_get_by_version(resource_group_name, server_name, job_agent_name, job_name, job_version, step_name, subscription_id, api_version)
        print("The response of JobStepsApi->job_steps_get_by_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStepsApi->job_steps_get_by_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job. | 
 **job_version** | **int**| The version of the job to get. | 
 **step_name** | **str**| The name of the job step. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobStep**](JobStep.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the job step. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_steps_list_by_job**
> JobStepListResult job_steps_list_by_job(resource_group_name, server_name, job_agent_name, job_name, subscription_id, api_version)



Gets all job steps for a job's current version.

### Example


```python
import openapi_client
from openapi_client.models.job_step_list_result import JobStepListResult
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
    api_instance = openapi_client.JobStepsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job to get.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_steps_list_by_job(resource_group_name, server_name, job_agent_name, job_name, subscription_id, api_version)
        print("The response of JobStepsApi->job_steps_list_by_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStepsApi->job_steps_list_by_job: %s\n" % e)
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

[**JobStepListResult**](JobStepListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of job steps. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_steps_list_by_version**
> JobStepListResult job_steps_list_by_version(resource_group_name, server_name, job_agent_name, job_name, job_version, subscription_id, api_version)



Gets all job steps in the specified job version.

### Example


```python
import openapi_client
from openapi_client.models.job_step_list_result import JobStepListResult
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
    api_instance = openapi_client.JobStepsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    job_name = 'job_name_example' # str | The name of the job to get.
    job_version = 56 # int | The version of the job to get.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_steps_list_by_version(resource_group_name, server_name, job_agent_name, job_name, job_version, subscription_id, api_version)
        print("The response of JobStepsApi->job_steps_list_by_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStepsApi->job_steps_list_by_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **job_name** | **str**| The name of the job to get. | 
 **job_version** | **int**| The version of the job to get. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobStepListResult**](JobStepListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of job steps. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

