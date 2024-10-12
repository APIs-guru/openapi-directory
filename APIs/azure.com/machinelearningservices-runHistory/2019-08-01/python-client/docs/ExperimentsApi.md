# openapi_client.ExperimentsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experiments_create**](ExperimentsApi.md#experiments_create) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName} | Create an Experiment.
[**experiments_delete_tags**](ExperimentsApi.md#experiments_delete_tags) | **DELETE** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experimentids/{experimentId}/tags | Delete list of Tags in an Experiment.
[**experiments_get**](ExperimentsApi.md#experiments_get) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName} | Get details of an Experiment.
[**experiments_get_by_id**](ExperimentsApi.md#experiments_get_by_id) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experimentids/{experimentId} | Get details of an Experiment.
[**experiments_get_by_query**](ExperimentsApi.md#experiments_get_by_query) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments:query | Get all Experiments in a specific workspace.
[**experiments_update**](ExperimentsApi.md#experiments_update) | **PATCH** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experimentids/{experimentId} | Update details of an Experiment.


# **experiments_create**
> Experiment experiments_create(subscription_id, resource_group_name, workspace_name, experiment_name)

Create an Experiment.

Create a new Experiment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.

    try:
        # Create an Experiment.
        api_response = api_instance.experiments_create(subscription_id, resource_group_name, workspace_name, experiment_name)
        print("The response of ExperimentsApi->experiments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Experiment is created successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_delete_tags**
> Experiment experiments_delete_tags(subscription_id, resource_group_name, workspace_name, experiment_id, tags=tags)

Delete list of Tags in an Experiment.

Delete list of Tags from a specific Experiment Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.delete_tags_command import DeleteTagsCommand
from openapi_client.models.experiment import Experiment
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_id = 'experiment_id_example' # str | The identifier of the experiment.
    tags = openapi_client.DeleteTagsCommand() # DeleteTagsCommand | The requested tags list to be deleted. (optional)

    try:
        # Delete list of Tags in an Experiment.
        api_response = api_instance.experiments_delete_tags(subscription_id, resource_group_name, workspace_name, experiment_id, tags=tags)
        print("The response of ExperimentsApi->experiments_delete_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_delete_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_id** | **str**| The identifier of the experiment. | 
 **tags** | [**DeleteTagsCommand**](DeleteTagsCommand.md)| The requested tags list to be deleted. | [optional] 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_get**
> Experiment experiments_get(subscription_id, resource_group_name, workspace_name, experiment_name)

Get details of an Experiment.

Get details of an Experiment with specific Experiment name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.

    try:
        # Get details of an Experiment.
        api_response = api_instance.experiments_get(subscription_id, resource_group_name, workspace_name, experiment_name)
        print("The response of ExperimentsApi->experiments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The details of the Experiment are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_get_by_id**
> Experiment experiments_get_by_id(subscription_id, resource_group_name, workspace_name, experiment_id)

Get details of an Experiment.

Get details of an Experiment with specific Experiment Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_id = 'experiment_id_example' # str | The identifier of the experiment.

    try:
        # Get details of an Experiment.
        api_response = api_instance.experiments_get_by_id(subscription_id, resource_group_name, workspace_name, experiment_id)
        print("The response of ExperimentsApi->experiments_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_id** | **str**| The identifier of the experiment. | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_get_by_query**
> PaginatedExperimentList experiments_get_by_query(subscription_id, resource_group_name, workspace_name, var_query_params=var_query_params)

Get all Experiments in a specific workspace.

Get all experiments in a specific workspace with the specified query filters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_experiment_list import PaginatedExperimentList
from openapi_client.models.query_params import QueryParams
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    var_query_params = openapi_client.QueryParams() # QueryParams | Query parameters for data sorting and filtering. (optional)

    try:
        # Get all Experiments in a specific workspace.
        api_response = api_instance.experiments_get_by_query(subscription_id, resource_group_name, workspace_name, var_query_params=var_query_params)
        print("The response of ExperimentsApi->experiments_get_by_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_get_by_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **var_query_params** | [**QueryParams**](QueryParams.md)| Query parameters for data sorting and filtering. | [optional] 

### Return type

[**PaginatedExperimentList**](PaginatedExperimentList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_update**
> Experiment experiments_update(subscription_id, resource_group_name, workspace_name, experiment_id, modify_experiment_dto=modify_experiment_dto)

Update details of an Experiment.

Update details of an Experiment with specific Experiment Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
from openapi_client.models.modify_experiment import ModifyExperiment
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_id = 'experiment_id_example' # str | The identifier of the experiment.
    modify_experiment_dto = openapi_client.ModifyExperiment() # ModifyExperiment | Experiment details which needs to be updated. (optional)

    try:
        # Update details of an Experiment.
        api_response = api_instance.experiments_update(subscription_id, resource_group_name, workspace_name, experiment_id, modify_experiment_dto=modify_experiment_dto)
        print("The response of ExperimentsApi->experiments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_id** | **str**| The identifier of the experiment. | 
 **modify_experiment_dto** | [**ModifyExperiment**](ModifyExperiment.md)| Experiment details which needs to be updated. | [optional] 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

