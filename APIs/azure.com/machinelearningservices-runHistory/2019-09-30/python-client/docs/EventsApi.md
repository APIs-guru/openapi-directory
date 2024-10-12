# openapi_client.EventsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**events_batch_post**](EventsApi.md#events_batch_post) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/batch/events | Batch post event data.
[**events_post**](EventsApi.md#events_post) | **POST** /history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/events | Post event data.


# **events_batch_post**
> BatchEventCommandResult events_batch_post(subscription_id, resource_group_name, workspace_name, experiment_name, batch_event_command=batch_event_command)

Batch post event data.

Post event data to a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_event_command import BatchEventCommand
from openapi_client.models.batch_event_command_result import BatchEventCommandResult
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
    api_instance = openapi_client.EventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    batch_event_command = openapi_client.BatchEventCommand() # BatchEventCommand | The batch of Event details. (optional)

    try:
        # Batch post event data.
        api_response = api_instance.events_batch_post(subscription_id, resource_group_name, workspace_name, experiment_name, batch_event_command=batch_event_command)
        print("The response of EventsApi->events_batch_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_batch_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **batch_event_command** | [**BatchEventCommand**](BatchEventCommand.md)| The batch of Event details. | [optional] 

### Return type

[**BatchEventCommandResult**](BatchEventCommandResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The batch of Events is posted successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_post**
> events_post(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, event_message=event_message)

Post event data.

Post event data to a specific Run Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.base_event import BaseEvent
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
    api_instance = openapi_client.EventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Name of the resource group in which the workspace is located.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    experiment_name = 'experiment_name_example' # str | The experiment name.
    run_id = 'run_id_example' # str | The identifier of the Run.
    event_message = openapi_client.BaseEvent() # BaseEvent | The Event details. (optional)

    try:
        # Post event data.
        api_instance.events_post(subscription_id, resource_group_name, workspace_name, experiment_name, run_id, event_message=event_message)
    except Exception as e:
        print("Exception when calling EventsApi->events_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group_name** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **experiment_name** | **str**| The experiment name. | 
 **run_id** | **str**| The identifier of the Run. | 
 **event_message** | [**BaseEvent**](BaseEvent.md)| The Event details. | [optional] 

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
**200** | The Event is posted successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

