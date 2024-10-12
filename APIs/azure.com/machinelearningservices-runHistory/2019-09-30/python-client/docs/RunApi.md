# openapi_client.RunApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runs_batch_add_or_modify**](RunApi.md#runs_batch_add_or_modify) | **PATCH** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/batch/runs | Add or Modify a batch of Runs.
[**runs_delete_tags**](RunApi.md#runs_delete_tags) | **DELETE** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/tags | Delete list of Tags in a Run.
[**runs_get**](RunApi.md#runs_get) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId} | Get Run details.
[**runs_get_by_query**](RunApi.md#runs_get_by_query) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs:query | Get all Runs for a specific Experiment.
[**runs_get_child**](RunApi.md#runs_get_child) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/children | Get details of all child runs.
[**runs_get_details**](RunApi.md#runs_get_details) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/details | Get Run Details.
[**runs_patch**](RunApi.md#runs_patch) | **PATCH** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId} | Add or Modify a Run.


# **runs_batch_add_or_modify**
> BatchAddOrModifyRunResult runs_batch_add_or_modify(subscription_id, resource_group_name, workspace_name, experiment_name, request_dto=request_dto)

Add or Modify a batch of Runs.

Add or Modify a batch of Runs for a given experiment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_add_or_modify_run_request import BatchAddOrModifyRunRequest
from openapi_client.models.batch_add_or_modify_run_result import BatchAddOrModifyRunResult
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
    api_instance = openapi_client.RunApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    request_dto = openapi_client.BatchAddOrModifyRunRequest() # BatchAddOrModifyRunRequest | The list of requested Run Additions/modifications in an Experiment. (optional)

    try:
        # Add or Modify a batch of Runs.
        api_response = api_instance.runs_batch_add_or_modify(subscription_id, resource_group_name, workspace_name, experiment_name, request_dto=request_dto)
        print("The response of RunApi->runs_batch_add_or_modify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunApi->runs_batch_add_or_modify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **request_dto** | [**BatchAddOrModifyRunRequest**](BatchAddOrModifyRunRequest.md)| The list of requested Run Additions/modifications in an Experiment. | [optional] 

### Return type

[**BatchAddOrModifyRunResult**](BatchAddOrModifyRunResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Batch Runs are added/modified successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_delete_tags**
> Run runs_delete_tags(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, tags=tags)

Delete list of Tags in a Run.

Delete list of Tags from a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run import Run
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
    api_instance = openapi_client.RunApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    tags = ['tags_example'] # List[str] | The requested tags list to be deleted. (optional)

    try:
        # Delete list of Tags in a Run.
        api_response = api_instance.runs_delete_tags(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, tags=tags)
        print("The response of RunApi->runs_delete_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunApi->runs_delete_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **tags** | [**List[str]**](str.md)| The requested tags list to be deleted. | [optional] 

### Return type

[**Run**](Run.md)

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

# **runs_get**
> Run runs_get(subscription_id, resource_group_name, workspace_name, experiment_name, run_id)

Get Run details.

Get Run details of a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run import Run
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
    api_instance = openapi_client.RunApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.

    try:
        # Get Run details.
        api_response = api_instance.runs_get(subscription_id, resource_group_name, workspace_name, experiment_name, run_id)
        print("The response of RunApi->runs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunApi->runs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 

### Return type

[**Run**](Run.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The details of the Run are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_get_by_query**
> PaginatedRunList runs_get_by_query(subscription_id, resource_group_name, workspace_name, experiment_name, var_query_params=var_query_params)

Get all Runs for a specific Experiment.

Get all Runs for a specific Experiment with the specified query filters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_run_list import PaginatedRunList
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
    api_instance = openapi_client.RunApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    var_query_params = openapi_client.QueryParams() # QueryParams | Query parameters for data sorting and filtering. (optional)

    try:
        # Get all Runs for a specific Experiment.
        api_response = api_instance.runs_get_by_query(subscription_id, resource_group_name, workspace_name, experiment_name, var_query_params=var_query_params)
        print("The response of RunApi->runs_get_by_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunApi->runs_get_by_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **var_query_params** | [**QueryParams**](QueryParams.md)| Query parameters for data sorting and filtering. | [optional] 

### Return type

[**PaginatedRunList**](PaginatedRunList.md)

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

# **runs_get_child**
> PaginatedRunList runs_get_child(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, filter=filter, continuationtoken=continuationtoken, orderby=orderby, sortorder=sortorder, top=top, count=count)

Get details of all child runs.

Get details of all child runs for the specified Run Id with the specified filters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_run_list import PaginatedRunList
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
    api_instance = openapi_client.RunApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    filter = 'filter_example' # str | Allows for filtering the collection of resources.  The expression specified is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response. (optional)
    continuationtoken = 'continuationtoken_example' # str | The continuation token to use for getting the next set of resources. (optional)
    orderby = ['orderby_example'] # List[str] | The list of resource properties to use for sorting the requested resources. (optional)
    sortorder = 'sortorder_example' # str | The sort order of the returned resources. Not used, specify asc or desc after each property name in the OrderBy parameter. (optional)
    top = 56 # int | The maximum number of items in the resource collection to be included in the result.  If not specified, all items are returned. (optional)
    count = True # bool | Whether to include a count of the matching resources along with the resources returned in the response. (optional)

    try:
        # Get details of all child runs.
        api_response = api_instance.runs_get_child(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, filter=filter, continuationtoken=continuationtoken, orderby=orderby, sortorder=sortorder, top=top, count=count)
        print("The response of RunApi->runs_get_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunApi->runs_get_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **filter** | **str**| Allows for filtering the collection of resources.  The expression specified is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response. | [optional] 
 **continuationtoken** | **str**| The continuation token to use for getting the next set of resources. | [optional] 
 **orderby** | [**List[str]**](str.md)| The list of resource properties to use for sorting the requested resources. | [optional] 
 **sortorder** | **str**| The sort order of the returned resources. Not used, specify asc or desc after each property name in the OrderBy parameter. | [optional] 
 **top** | **int**| The maximum number of items in the resource collection to be included in the result.  If not specified, all items are returned. | [optional] 
 **count** | **bool**| Whether to include a count of the matching resources along with the resources returned in the response. | [optional] 

### Return type

[**PaginatedRunList**](PaginatedRunList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The details of the child Runs are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_get_details**
> RunDetails runs_get_details(subscription_id, resource_group_name, workspace_name, experiment_name, run_id)

Get Run Details.

Get Run Details for a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_details import RunDetails
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
    api_instance = openapi_client.RunApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.

    try:
        # Get Run Details.
        api_response = api_instance.runs_get_details(subscription_id, resource_group_name, workspace_name, experiment_name, run_id)
        print("The response of RunApi->runs_get_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunApi->runs_get_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 

### Return type

[**RunDetails**](RunDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The details of the Run are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_patch**
> Run runs_patch(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, create_run_dto=create_run_dto)

Add or Modify a Run.

Add a new Run or Modify an existing Run.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_run import CreateRun
from openapi_client.models.run import Run
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
    api_instance = openapi_client.RunApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    create_run_dto = openapi_client.CreateRun() # CreateRun | The requested Run parameter Additions/modifications. (optional)

    try:
        # Add or Modify a Run.
        api_response = api_instance.runs_patch(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, create_run_dto=create_run_dto)
        print("The response of RunApi->runs_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunApi->runs_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **create_run_dto** | [**CreateRun**](CreateRun.md)| The requested Run parameter Additions/modifications. | [optional] 

### Return type

[**Run**](Run.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Run is added/modified successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

