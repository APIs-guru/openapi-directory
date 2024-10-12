# GoogleCloudIntegrationsV1alphaTaskExecutionDetails

Contains the details of the execution of this task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_attempt_stats** | [**List[GoogleCloudIntegrationsV1alphaAttemptStats]**](GoogleCloudIntegrationsV1alphaAttemptStats.md) | Status for the current task execution attempt. | [optional] 
**task_execution_state** | **str** | The execution state of this task. | [optional] 
**task_number** | **str** | Pointer to the task config it used for execution. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_task_execution_details import GoogleCloudIntegrationsV1alphaTaskExecutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaTaskExecutionDetails from a JSON string
google_cloud_integrations_v1alpha_task_execution_details_instance = GoogleCloudIntegrationsV1alphaTaskExecutionDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaTaskExecutionDetails.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_task_execution_details_dict = google_cloud_integrations_v1alpha_task_execution_details_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaTaskExecutionDetails from a dict
google_cloud_integrations_v1alpha_task_execution_details_from_dict = GoogleCloudIntegrationsV1alphaTaskExecutionDetails.from_dict(google_cloud_integrations_v1alpha_task_execution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


