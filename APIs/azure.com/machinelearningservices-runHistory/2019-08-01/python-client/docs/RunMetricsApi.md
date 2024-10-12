# openapi_client.RunMetricsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**run_metrics_batch_post**](RunMetricsApi.md#run_metrics_batch_post) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/batch/metrics | Post Metrics to a Run.
[**run_metrics_get**](RunMetricsApi.md#run_metrics_get) | **GET** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/metrics/{metricId} | Get Metric details.
[**run_metrics_get_by_query**](RunMetricsApi.md#run_metrics_get_by_query) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/metrics:query | Get all Run Metrics for the specific Experiment.
[**run_metrics_post**](RunMetricsApi.md#run_metrics_post) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/metrics | Post Metric to a Run.


# **run_metrics_batch_post**
> run_metrics_batch_post(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, batch_metric_dto=batch_metric_dto)

Post Metrics to a Run.

Post Metrics to a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_metric import BatchMetric
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
    api_instance = openapi_client.RunMetricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier for a run.
    batch_metric_dto = openapi_client.BatchMetric() # BatchMetric | Details of the Metrics which will be added to the Run Id. (optional)

    try:
        # Post Metrics to a Run.
        api_instance.run_metrics_batch_post(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, batch_metric_dto=batch_metric_dto)
    except Exception as e:
        print("Exception when calling RunMetricsApi->run_metrics_batch_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier for a run. | 
 **batch_metric_dto** | [**BatchMetric**](BatchMetric.md)| Details of the Metrics which will be added to the Run Id. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Run Metrics are posted successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_metrics_get**
> RunMetric run_metrics_get(subscription_id, resource_group_name, workspace_name, experiment_name, metric_id)

Get Metric details.

Get Metric details for a specific Metric Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_metric import RunMetric
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
    api_instance = openapi_client.RunMetricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    metric_id = 'metric_id_example' # str | The identifier for a Metric.

    try:
        # Get Metric details.
        api_response = api_instance.run_metrics_get(subscription_id, resource_group_name, workspace_name, experiment_name, metric_id)
        print("The response of RunMetricsApi->run_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunMetricsApi->run_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **metric_id** | **str**| The identifier for a Metric. | 

### Return type

[**RunMetric**](RunMetric.md)

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

# **run_metrics_get_by_query**
> PaginatedRunMetricList run_metrics_get_by_query(subscription_id, resource_group_name, workspace_name, experiment_name, merge_strategy_type=merge_strategy_type, merge_strategy_options=merge_strategy_options, merge_strategy_settings_version=merge_strategy_settings_version, merge_strategy_settings_select_metrics=merge_strategy_settings_select_metrics, var_query_params=var_query_params)

Get all Run Metrics for the specific Experiment.

Get all Run Metrics for the specific Experiment with the specified query filters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_run_metric_list import PaginatedRunMetricList
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
    api_instance = openapi_client.RunMetricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    merge_strategy_type = 'merge_strategy_type_example' # str | The type of merge strategy. Currently supported strategies are:  None - all logged values are returned as individual metrics.  MergeToVector - merges multiple values into a vector of values.  Default - the system determines the behavior. (optional)
    merge_strategy_options = 'merge_strategy_options_example' # str | Controls behavior of the merge strategy in certain cases; e.g. when a metric is not merged. (optional)
    merge_strategy_settings_version = 'merge_strategy_settings_version_example' # str | The strategy settings version. (optional)
    merge_strategy_settings_select_metrics = 'merge_strategy_settings_select_metrics_example' # str | Defines how to select metrics when merging them together. (optional)
    var_query_params = openapi_client.QueryParams() # QueryParams | Query Parameters for data sorting and filtering. (optional)

    try:
        # Get all Run Metrics for the specific Experiment.
        api_response = api_instance.run_metrics_get_by_query(subscription_id, resource_group_name, workspace_name, experiment_name, merge_strategy_type=merge_strategy_type, merge_strategy_options=merge_strategy_options, merge_strategy_settings_version=merge_strategy_settings_version, merge_strategy_settings_select_metrics=merge_strategy_settings_select_metrics, var_query_params=var_query_params)
        print("The response of RunMetricsApi->run_metrics_get_by_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunMetricsApi->run_metrics_get_by_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **merge_strategy_type** | **str**| The type of merge strategy. Currently supported strategies are:  None - all logged values are returned as individual metrics.  MergeToVector - merges multiple values into a vector of values.  Default - the system determines the behavior. | [optional] 
 **merge_strategy_options** | **str**| Controls behavior of the merge strategy in certain cases; e.g. when a metric is not merged. | [optional] 
 **merge_strategy_settings_version** | **str**| The strategy settings version. | [optional] 
 **merge_strategy_settings_select_metrics** | **str**| Defines how to select metrics when merging them together. | [optional] 
 **var_query_params** | [**QueryParams**](QueryParams.md)| Query Parameters for data sorting and filtering. | [optional] 

### Return type

[**PaginatedRunMetricList**](PaginatedRunMetricList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Run Metrics are returned successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_metrics_post**
> run_metrics_post(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, metric_dto=metric_dto)

Post Metric to a Run.

Post a Metric to a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric import Metric
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
    api_instance = openapi_client.RunMetricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier for a run.
    metric_dto = openapi_client.Metric() # Metric | Details of the metric which will be added to the Run Id. (optional)

    try:
        # Post Metric to a Run.
        api_instance.run_metrics_post(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, metric_dto=metric_dto)
    except Exception as e:
        print("Exception when calling RunMetricsApi->run_metrics_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier for a run. | 
 **metric_dto** | [**Metric**](Metric.md)| Details of the metric which will be added to the Run Id. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Run Metric is posted successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

