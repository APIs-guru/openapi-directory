# ActivityRun

Information about an activity run in a pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_name** | **str** | The name of the activity. | [optional] [readonly] 
**activity_run_end** | **datetime** | The end time of the activity run in &#39;ISO 8601&#39; format. | [optional] [readonly] 
**activity_run_id** | **str** | The id of the activity run. | [optional] [readonly] 
**activity_run_start** | **datetime** | The start time of the activity run in &#39;ISO 8601&#39; format. | [optional] [readonly] 
**activity_type** | **str** | The type of the activity. | [optional] [readonly] 
**duration_in_ms** | **int** | The duration of the activity run. | [optional] [readonly] 
**error** | **object** | The error if any from the activity run. | [optional] [readonly] 
**input** | **object** | The input for the activity. | [optional] [readonly] 
**linked_service_name** | **str** | The name of the compute linked service. | [optional] [readonly] 
**output** | **object** | The output for the activity. | [optional] [readonly] 
**pipeline_name** | **str** | The name of the pipeline. | [optional] [readonly] 
**pipeline_run_id** | **str** | The id of the pipeline run. | [optional] [readonly] 
**status** | **str** | The status of the activity run. | [optional] [readonly] 

## Example

```python
from openapi_client.models.activity_run import ActivityRun

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityRun from a JSON string
activity_run_instance = ActivityRun.from_json(json)
# print the JSON string representation of the object
print(ActivityRun.to_json())

# convert the object into a dict
activity_run_dict = activity_run_instance.to_dict()
# create an instance of ActivityRun from a dict
activity_run_from_dict = ActivityRun.from_dict(activity_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


