# GoogleCloudDataplexV1Task

A task represents a user-visible job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the task was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of the task. | [optional] 
**display_name** | **str** | Optional. User friendly display name. | [optional] 
**execution_spec** | [**GoogleCloudDataplexV1TaskExecutionSpec**](GoogleCloudDataplexV1TaskExecutionSpec.md) |  | [optional] 
**execution_status** | [**GoogleCloudDataplexV1TaskExecutionStatus**](GoogleCloudDataplexV1TaskExecutionStatus.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. User-defined labels for the task. | [optional] 
**name** | **str** | Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}. | [optional] [readonly] 
**notebook** | [**GoogleCloudDataplexV1TaskNotebookTaskConfig**](GoogleCloudDataplexV1TaskNotebookTaskConfig.md) |  | [optional] 
**spark** | [**GoogleCloudDataplexV1TaskSparkTaskConfig**](GoogleCloudDataplexV1TaskSparkTaskConfig.md) |  | [optional] 
**state** | **str** | Output only. Current state of the task. | [optional] [readonly] 
**trigger_spec** | [**GoogleCloudDataplexV1TaskTriggerSpec**](GoogleCloudDataplexV1TaskTriggerSpec.md) |  | [optional] 
**uid** | **str** | Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the task was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task import GoogleCloudDataplexV1Task

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Task from a JSON string
google_cloud_dataplex_v1_task_instance = GoogleCloudDataplexV1Task.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Task.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_dict = google_cloud_dataplex_v1_task_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Task from a dict
google_cloud_dataplex_v1_task_from_dict = GoogleCloudDataplexV1Task.from_dict(google_cloud_dataplex_v1_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


