# GoogleCloudIntegrationsV1alphaTaskConfig

The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. User-provided description intended to give additional business context about the task. | [optional] 
**display_name** | **str** | Optional. User-provided label that is attached to this TaskConfig in the UI. | [optional] 
**error_catcher_id** | **str** | Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task | [optional] 
**external_task_type** | **str** | Optional. External task type of the task | [optional] 
**failure_policy** | [**GoogleCloudIntegrationsV1alphaFailurePolicy**](GoogleCloudIntegrationsV1alphaFailurePolicy.md) |  | [optional] 
**json_validation_option** | **str** | Optional. If set, overrides the option configured in the Task implementation class. | [optional] 
**next_tasks** | [**List[GoogleCloudIntegrationsV1alphaNextTask]**](GoogleCloudIntegrationsV1alphaNextTask.md) | Optional. The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by &#x60;event_config_id&#x60;. Each of these next tasks are executed only if the condition associated with them evaluates to true. | [optional] 
**next_tasks_execution_policy** | **str** | Optional. The policy dictating the execution of the next set of tasks for the current task. | [optional] 
**parameters** | [**Dict[str, GoogleCloudIntegrationsV1alphaEventParameter]**](GoogleCloudIntegrationsV1alphaEventParameter.md) | Optional. The customized parameters the user can pass to this task. | [optional] 
**position** | [**GoogleCloudIntegrationsV1alphaCoordinate**](GoogleCloudIntegrationsV1alphaCoordinate.md) |  | [optional] 
**success_policy** | [**GoogleCloudIntegrationsV1alphaSuccessPolicy**](GoogleCloudIntegrationsV1alphaSuccessPolicy.md) |  | [optional] 
**synchronous_call_failure_policy** | [**GoogleCloudIntegrationsV1alphaFailurePolicy**](GoogleCloudIntegrationsV1alphaFailurePolicy.md) |  | [optional] 
**task** | **str** | Optional. The name for the task. | [optional] 
**task_execution_strategy** | **str** | Optional. The policy dictating the execution strategy of this task. | [optional] 
**task_id** | **str** | Required. The identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field &#x60;next_tasks.task_id&#x60;). | [optional] 
**task_template** | **str** | Optional. Used to define task-template name if task is of type task-template | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_task_config import GoogleCloudIntegrationsV1alphaTaskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaTaskConfig from a JSON string
google_cloud_integrations_v1alpha_task_config_instance = GoogleCloudIntegrationsV1alphaTaskConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaTaskConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_task_config_dict = google_cloud_integrations_v1alpha_task_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaTaskConfig from a dict
google_cloud_integrations_v1alpha_task_config_from_dict = GoogleCloudIntegrationsV1alphaTaskConfig.from_dict(google_cloud_integrations_v1alpha_task_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


