# openapi_client.WorkflowsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflows_create_or_update**](WorkflowsApi.md#workflows_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName} | 
[**workflows_delete**](WorkflowsApi.md#workflows_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName} | 
[**workflows_disable**](WorkflowsApi.md#workflows_disable) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/disable | 
[**workflows_enable**](WorkflowsApi.md#workflows_enable) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/enable | 
[**workflows_get**](WorkflowsApi.md#workflows_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName} | 
[**workflows_list_by_resource_group**](WorkflowsApi.md#workflows_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows | 
[**workflows_list_by_subscription**](WorkflowsApi.md#workflows_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Logic/workflows | 
[**workflows_run**](WorkflowsApi.md#workflows_run) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/run | 
[**workflows_update**](WorkflowsApi.md#workflows_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName} | 
[**workflows_validate**](WorkflowsApi.md#workflows_validate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/validate | 


# **workflows_create_or_update**
> Workflow workflows_create_or_update(subscription_id, resource_group_name, workflow_name, api_version, workflow)



Creates or updates a workflow.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow import Workflow
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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.
    workflow = openapi_client.Workflow() # Workflow | The workflow.

    try:
        api_response = api_instance.workflows_create_or_update(subscription_id, resource_group_name, workflow_name, api_version, workflow)
        print("The response of WorkflowsApi->workflows_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **api_version** | **str**| The API version. | 
 **workflow** | [**Workflow**](Workflow.md)| The workflow. | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_delete**
> workflows_delete(subscription_id, resource_group_name, workflow_name, api_version)



Deletes a workflow.

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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.workflows_delete(subscription_id, resource_group_name, workflow_name, api_version)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_disable**
> workflows_disable(subscription_id, resource_group_name, workflow_name, api_version)



Disables a workflow.

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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.workflows_disable(subscription_id, resource_group_name, workflow_name, api_version)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_disable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
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

# **workflows_enable**
> workflows_enable(subscription_id, resource_group_name, workflow_name, api_version)



Enables a workflow.

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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.workflows_enable(subscription_id, resource_group_name, workflow_name, api_version)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
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

# **workflows_get**
> Workflow workflows_get(subscription_id, resource_group_name, workflow_name, api_version)



Gets a workflow.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow import Workflow
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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflows_get(subscription_id, resource_group_name, workflow_name, api_version)
        print("The response of WorkflowsApi->workflows_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**Workflow**](Workflow.md)

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

# **workflows_list_by_resource_group**
> WorkflowListResult workflows_list_by_resource_group(subscription_id, resource_group_name, api_version, top=top, filter=filter)



Gets a list of workflows by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_list_result import WorkflowListResult
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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.workflows_list_by_resource_group(subscription_id, resource_group_name, api_version, top=top, filter=filter)
        print("The response of WorkflowsApi->workflows_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**WorkflowListResult**](WorkflowListResult.md)

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

# **workflows_list_by_subscription**
> WorkflowListResult workflows_list_by_subscription(subscription_id, api_version, top=top, filter=filter)



Gets a list of workflows by subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_list_result import WorkflowListResult
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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.workflows_list_by_subscription(subscription_id, api_version, top=top, filter=filter)
        print("The response of WorkflowsApi->workflows_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**WorkflowListResult**](WorkflowListResult.md)

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

# **workflows_run**
> WorkflowRun workflows_run(subscription_id, resource_group_name, workflow_name, api_version, parameters)



Runs a workflow.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_workflow_parameters import RunWorkflowParameters
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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.
    parameters = openapi_client.RunWorkflowParameters() # RunWorkflowParameters | The parameters.

    try:
        api_response = api_instance.workflows_run(subscription_id, resource_group_name, workflow_name, api_version, parameters)
        print("The response of WorkflowsApi->workflows_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **api_version** | **str**| The API version. | 
 **parameters** | [**RunWorkflowParameters**](RunWorkflowParameters.md)| The parameters. | 

### Return type

[**WorkflowRun**](WorkflowRun.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_update**
> Workflow workflows_update(subscription_id, resource_group_name, workflow_name, api_version, workflow)



Updates a workflow.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow import Workflow
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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.
    workflow = openapi_client.Workflow() # Workflow | The workflow.

    try:
        api_response = api_instance.workflows_update(subscription_id, resource_group_name, workflow_name, api_version, workflow)
        print("The response of WorkflowsApi->workflows_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **api_version** | **str**| The API version. | 
 **workflow** | [**Workflow**](Workflow.md)| The workflow. | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_validate**
> workflows_validate(subscription_id, resource_group_name, workflow_name, api_version, workflow)



Validates a workflow.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow import Workflow
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
    api_instance = openapi_client.WorkflowsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.
    workflow = openapi_client.Workflow() # Workflow | The workflow.

    try:
        api_instance.workflows_validate(subscription_id, resource_group_name, workflow_name, api_version, workflow)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **api_version** | **str**| The API version. | 
 **workflow** | [**Workflow**](Workflow.md)| The workflow. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

