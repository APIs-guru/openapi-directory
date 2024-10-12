# openapi_client.ExecutionApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runs_cancel_run_with_uri**](ExecutionApi.md#runs_cancel_run_with_uri) | **POST** /execution/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runId/{runId}/cancel | Cancel a run.
[**runs_start_local_run**](ExecutionApi.md#runs_start_local_run) | **POST** /execution/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/startlocalrun | Start a run on a local machine.
[**runs_start_run**](ExecutionApi.md#runs_start_run) | **POST** /execution/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/startrun | Start a run on a remote compute target.
[**runs_start_snapshot_run**](ExecutionApi.md#runs_start_snapshot_run) | **POST** /execution/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/snapshotrun | Start a run from a snapshot on a remote compute target.


# **runs_cancel_run_with_uri**
> StartRunResult runs_cancel_run_with_uri(subscription_id, resource_group_name, workspace_name, experiment_name, run_id)

Cancel a run.

Cancels a run within an experiment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.start_run_result import StartRunResult
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
    api_instance = openapi_client.ExecutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The id of the run to cancel.

    try:
        # Cancel a run.
        api_response = api_instance.runs_cancel_run_with_uri(subscription_id, resource_group_name, workspace_name, experiment_name, run_id)
        print("The response of ExecutionApi->runs_cancel_run_with_uri:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecutionApi->runs_cancel_run_with_uri: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The id of the run to cancel. | 

### Return type

[**StartRunResult**](StartRunResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The run was successfully cancelled. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_start_local_run**
> bytearray runs_start_local_run(subscription_id, resource_group_name, workspace_name, experiment_name, definition, run_id=run_id)

Start a run on a local machine.

Starts an experiment run using the provided definition.json file to define the run.              The source code and configuration is defined in a zip archive in project.zip.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_definition import RunDefinition
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
    api_instance = openapi_client.ExecutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    definition = openapi_client.RunDefinition() # RunDefinition | A JSON run definition structure.
    run_id = 'run_id_example' # str | A run id. If not supplied a run id will be created automatically. (optional)

    try:
        # Start a run on a local machine.
        api_response = api_instance.runs_start_local_run(subscription_id, resource_group_name, workspace_name, experiment_name, definition, run_id=run_id)
        print("The response of ExecutionApi->runs_start_local_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecutionApi->runs_start_local_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **definition** | [**RunDefinition**](RunDefinition.md)| A JSON run definition structure. | 
 **run_id** | **str**| A run id. If not supplied a run id will be created automatically. | [optional] 

### Return type

**bytearray**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File Response |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_start_run**
> StartRunResult runs_start_run(subscription_id, resource_group_name, workspace_name, experiment_name, run_definition_file, project_zip_file, run_id=run_id)

Start a run on a remote compute target.

Starts an experiment run using the provided definition.json file to define the run.              The source code and configuration is defined in a zip archive in project.zip.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.start_run_result import StartRunResult
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
    api_instance = openapi_client.ExecutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_definition_file = None # bytearray | The JSON file containing the RunDefinition
    project_zip_file = None # bytearray | The zip archive of the project folder containing the source code to use for the run.
    run_id = 'run_id_example' # str | A run id. If not supplied a run id will be created automatically. (optional)

    try:
        # Start a run on a remote compute target.
        api_response = api_instance.runs_start_run(subscription_id, resource_group_name, workspace_name, experiment_name, run_definition_file, project_zip_file, run_id=run_id)
        print("The response of ExecutionApi->runs_start_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecutionApi->runs_start_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_definition_file** | **bytearray**| The JSON file containing the RunDefinition | 
 **project_zip_file** | **bytearray**| The zip archive of the project folder containing the source code to use for the run. | 
 **run_id** | **str**| A run id. If not supplied a run id will be created automatically. | [optional] 

### Return type

[**StartRunResult**](StartRunResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A run was successfully started. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_start_snapshot_run**
> StartRunResult runs_start_snapshot_run(subscription_id, resource_group_name, workspace_name, experiment_name, definition, run_id=run_id)

Start a run from a snapshot on a remote compute target.

Starts an experiment run on the remote compute target using the provided definition.json file to define the run.              The code for the run is retrieved using the snapshotId in definition.json.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_definition import RunDefinition
from openapi_client.models.start_run_result import StartRunResult
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
    api_instance = openapi_client.ExecutionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    definition = openapi_client.RunDefinition() # RunDefinition | A JSON run definition structure.
    run_id = 'run_id_example' # str | A run id. If not supplied a run id will be created automatically. (optional)

    try:
        # Start a run from a snapshot on a remote compute target.
        api_response = api_instance.runs_start_snapshot_run(subscription_id, resource_group_name, workspace_name, experiment_name, definition, run_id=run_id)
        print("The response of ExecutionApi->runs_start_snapshot_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecutionApi->runs_start_snapshot_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **definition** | [**RunDefinition**](RunDefinition.md)| A JSON run definition structure. | 
 **run_id** | **str**| A run id. If not supplied a run id will be created automatically. | [optional] 

### Return type

[**StartRunResult**](StartRunResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A snapshot run was successfully started. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

