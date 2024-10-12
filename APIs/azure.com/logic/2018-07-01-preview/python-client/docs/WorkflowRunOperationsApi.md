# openapi_client.WorkflowRunOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflow_run_operations_get**](WorkflowRunOperationsApi.md#workflow_run_operations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/operations/{operationId} | 


# **workflow_run_operations_get**
> WorkflowRun workflow_run_operations_get(subscription_id, resource_group_name, workflow_name, run_name, operation_id, api_version)



Gets an operation for a run.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_run import WorkflowRun
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
    api_instance = openapi_client.WorkflowRunOperationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    operation_id = 'operation_id_example' # str | The workflow operation id.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_operations_get(subscription_id, resource_group_name, workflow_name, run_name, operation_id, api_version)
        print("The response of WorkflowRunOperationsApi->workflow_run_operations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunOperationsApi->workflow_run_operations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **operation_id** | **str**| The workflow operation id. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowRun**](WorkflowRun.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

