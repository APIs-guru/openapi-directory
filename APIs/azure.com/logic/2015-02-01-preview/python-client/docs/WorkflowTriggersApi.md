# openapi_client.WorkflowTriggersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflow_triggers_get**](WorkflowTriggersApi.md#workflow_triggers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName} | 
[**workflow_triggers_list**](WorkflowTriggersApi.md#workflow_triggers_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/ | 
[**workflow_triggers_run**](WorkflowTriggersApi.md#workflow_triggers_run) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/run | 


# **workflow_triggers_get**
> WorkflowTrigger workflow_triggers_get(subscription_id, resource_group_name, workflow_name, trigger_name, api_version)



Gets a workflow trigger.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_trigger import WorkflowTrigger
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
    api_instance = openapi_client.WorkflowTriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    trigger_name = 'trigger_name_example' # str | The workflow trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_triggers_get(subscription_id, resource_group_name, workflow_name, trigger_name, api_version)
        print("The response of WorkflowTriggersApi->workflow_triggers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowTriggersApi->workflow_triggers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **trigger_name** | **str**| The workflow trigger name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowTrigger**](WorkflowTrigger.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_triggers_list**
> WorkflowTriggerListResult workflow_triggers_list(subscription_id, resource_group_name, workflow_name, api_version, top=top, filter=filter)



Gets a list of workflow triggers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_trigger_list_result import WorkflowTriggerListResult
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
    api_instance = openapi_client.WorkflowTriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.workflow_triggers_list(subscription_id, resource_group_name, workflow_name, api_version, top=top, filter=filter)
        print("The response of WorkflowTriggersApi->workflow_triggers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowTriggersApi->workflow_triggers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**WorkflowTriggerListResult**](WorkflowTriggerListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_triggers_run**
> workflow_triggers_run(subscription_id, resource_group_name, workflow_name, trigger_name, api_version)



Runs a workflow trigger.

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
    api_instance = openapi_client.WorkflowTriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    trigger_name = 'trigger_name_example' # str | The workflow trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.workflow_triggers_run(subscription_id, resource_group_name, workflow_name, trigger_name, api_version)
    except Exception as e:
        print("Exception when calling WorkflowTriggersApi->workflow_triggers_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **trigger_name** | **str**| The workflow trigger name. | 
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

