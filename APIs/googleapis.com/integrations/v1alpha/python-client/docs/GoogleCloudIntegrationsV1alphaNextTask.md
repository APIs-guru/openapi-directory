# GoogleCloudIntegrationsV1alphaNextTask

The task that is next in line to be executed, if the condition specified evaluated to true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | Standard filter expression for this task to become an eligible next task. | [optional] 
**description** | **str** | User-provided description intended to give additional business context about the task. | [optional] 
**display_name** | **str** | User-provided label that is attached to this edge in the UI. | [optional] 
**task_config_id** | **str** | ID of the next task. | [optional] 
**task_id** | **str** | Task number of the next task. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_next_task import GoogleCloudIntegrationsV1alphaNextTask

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaNextTask from a JSON string
google_cloud_integrations_v1alpha_next_task_instance = GoogleCloudIntegrationsV1alphaNextTask.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaNextTask.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_next_task_dict = google_cloud_integrations_v1alpha_next_task_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaNextTask from a dict
google_cloud_integrations_v1alpha_next_task_from_dict = GoogleCloudIntegrationsV1alphaNextTask.from_dict(google_cloud_integrations_v1alpha_next_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


