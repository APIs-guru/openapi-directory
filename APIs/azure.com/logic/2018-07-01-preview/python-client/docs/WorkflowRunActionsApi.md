# openapi_client.WorkflowRunActionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflow_run_action_repetitions_get**](WorkflowRunActionsApi.md#workflow_run_action_repetitions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName} | 
[**workflow_run_action_repetitions_list**](WorkflowRunActionsApi.md#workflow_run_action_repetitions_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions | 
[**workflow_run_action_repetitions_list_expression_traces**](WorkflowRunActionsApi.md#workflow_run_action_repetitions_list_expression_traces) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/listExpressionTraces | 
[**workflow_run_action_repetitions_request_histories_get**](WorkflowRunActionsApi.md#workflow_run_action_repetitions_request_histories_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/requestHistories/{requestHistoryName} | 
[**workflow_run_action_repetitions_request_histories_list**](WorkflowRunActionsApi.md#workflow_run_action_repetitions_request_histories_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/requestHistories | 
[**workflow_run_action_request_histories_get**](WorkflowRunActionsApi.md#workflow_run_action_request_histories_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/requestHistories/{requestHistoryName} | 
[**workflow_run_action_request_histories_list**](WorkflowRunActionsApi.md#workflow_run_action_request_histories_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/requestHistories | 
[**workflow_run_action_scope_repetitions_get**](WorkflowRunActionsApi.md#workflow_run_action_scope_repetitions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/scopeRepetitions/{repetitionName} | 
[**workflow_run_action_scope_repetitions_list**](WorkflowRunActionsApi.md#workflow_run_action_scope_repetitions_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/scopeRepetitions | 
[**workflow_run_actions_get**](WorkflowRunActionsApi.md#workflow_run_actions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName} | 
[**workflow_run_actions_list**](WorkflowRunActionsApi.md#workflow_run_actions_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions | 
[**workflow_run_actions_list_expression_traces**](WorkflowRunActionsApi.md#workflow_run_actions_list_expression_traces) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/listExpressionTraces | 


# **workflow_run_action_repetitions_get**
> WorkflowRunActionRepetitionDefinition workflow_run_action_repetitions_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, api_version)



Get a workflow run action repetition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_run_action_repetition_definition import WorkflowRunActionRepetitionDefinition
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    repetition_name = 'repetition_name_example' # str | The workflow repetition.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_repetitions_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_repetitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_repetitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **repetition_name** | **str**| The workflow repetition. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowRunActionRepetitionDefinition**](WorkflowRunActionRepetitionDefinition.md)

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

# **workflow_run_action_repetitions_list**
> WorkflowRunActionRepetitionDefinitionCollection workflow_run_action_repetitions_list(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)



Get all of a workflow run action repetitions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_run_action_repetition_definition_collection import WorkflowRunActionRepetitionDefinitionCollection
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_repetitions_list(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_repetitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_repetitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowRunActionRepetitionDefinitionCollection**](WorkflowRunActionRepetitionDefinitionCollection.md)

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

# **workflow_run_action_repetitions_list_expression_traces**
> ExpressionTraces workflow_run_action_repetitions_list_expression_traces(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, api_version)



Lists a workflow run expression trace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.expression_traces import ExpressionTraces
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    repetition_name = 'repetition_name_example' # str | The workflow repetition.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_repetitions_list_expression_traces(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_repetitions_list_expression_traces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_repetitions_list_expression_traces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **repetition_name** | **str**| The workflow repetition. | 
 **api_version** | **str**| The API version. | 

### Return type

[**ExpressionTraces**](ExpressionTraces.md)

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

# **workflow_run_action_repetitions_request_histories_get**
> RequestHistory workflow_run_action_repetitions_request_histories_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, request_history_name, api_version)



Gets a workflow run repetition request history.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.request_history import RequestHistory
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    repetition_name = 'repetition_name_example' # str | The workflow repetition.
    request_history_name = 'request_history_name_example' # str | The request history name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_repetitions_request_histories_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, request_history_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_repetitions_request_histories_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_repetitions_request_histories_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **repetition_name** | **str**| The workflow repetition. | 
 **request_history_name** | **str**| The request history name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**RequestHistory**](RequestHistory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_run_action_repetitions_request_histories_list**
> RequestHistoryListResult workflow_run_action_repetitions_request_histories_list(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, api_version)



List a workflow run repetition request history.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.request_history_list_result import RequestHistoryListResult
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    repetition_name = 'repetition_name_example' # str | The workflow repetition.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_repetitions_request_histories_list(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_repetitions_request_histories_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_repetitions_request_histories_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **repetition_name** | **str**| The workflow repetition. | 
 **api_version** | **str**| The API version. | 

### Return type

[**RequestHistoryListResult**](RequestHistoryListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_run_action_request_histories_get**
> RequestHistory workflow_run_action_request_histories_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, request_history_name, api_version)



Gets a workflow run request history.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.request_history import RequestHistory
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    request_history_name = 'request_history_name_example' # str | The request history name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_request_histories_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, request_history_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_request_histories_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_request_histories_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **request_history_name** | **str**| The request history name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**RequestHistory**](RequestHistory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_run_action_request_histories_list**
> RequestHistoryListResult workflow_run_action_request_histories_list(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)



List a workflow run request history.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.request_history_list_result import RequestHistoryListResult
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_request_histories_list(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_request_histories_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_request_histories_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**RequestHistoryListResult**](RequestHistoryListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_run_action_scope_repetitions_get**
> WorkflowRunActionRepetitionDefinition workflow_run_action_scope_repetitions_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, api_version)



Get a workflow run action scoped repetition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_run_action_repetition_definition import WorkflowRunActionRepetitionDefinition
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    repetition_name = 'repetition_name_example' # str | The workflow repetition.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_scope_repetitions_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, repetition_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_scope_repetitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_scope_repetitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **repetition_name** | **str**| The workflow repetition. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowRunActionRepetitionDefinition**](WorkflowRunActionRepetitionDefinition.md)

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

# **workflow_run_action_scope_repetitions_list**
> WorkflowRunActionRepetitionDefinitionCollection workflow_run_action_scope_repetitions_list(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)



List the workflow run action scoped repetitions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_run_action_repetition_definition_collection import WorkflowRunActionRepetitionDefinitionCollection
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_action_scope_repetitions_list(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_action_scope_repetitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_action_scope_repetitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowRunActionRepetitionDefinitionCollection**](WorkflowRunActionRepetitionDefinitionCollection.md)

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

# **workflow_run_actions_get**
> WorkflowRunAction workflow_run_actions_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)



Gets a workflow run action.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_run_action import WorkflowRunAction
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_actions_get(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_actions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_actions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowRunAction**](WorkflowRunAction.md)

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

# **workflow_run_actions_list**
> WorkflowRunActionListResult workflow_run_actions_list(subscription_id, resource_group_name, workflow_name, run_name, api_version, top=top, filter=filter)



Gets a list of workflow run actions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_run_action_list_result import WorkflowRunActionListResult
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. Options for filters include: Status. (optional)

    try:
        api_response = api_instance.workflow_run_actions_list(subscription_id, resource_group_name, workflow_name, run_name, api_version, top=top, filter=filter)
        print("The response of WorkflowRunActionsApi->workflow_run_actions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_actions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. Options for filters include: Status. | [optional] 

### Return type

[**WorkflowRunActionListResult**](WorkflowRunActionListResult.md)

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

# **workflow_run_actions_list_expression_traces**
> ExpressionTraces workflow_run_actions_list_expression_traces(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)



Lists a workflow run expression trace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.expression_traces import ExpressionTraces
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
    api_instance = openapi_client.WorkflowRunActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    run_name = 'run_name_example' # str | The workflow run name.
    action_name = 'action_name_example' # str | The workflow action name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_run_actions_list_expression_traces(subscription_id, resource_group_name, workflow_name, run_name, action_name, api_version)
        print("The response of WorkflowRunActionsApi->workflow_run_actions_list_expression_traces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunActionsApi->workflow_run_actions_list_expression_traces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **run_name** | **str**| The workflow run name. | 
 **action_name** | **str**| The workflow action name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**ExpressionTraces**](ExpressionTraces.md)

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

