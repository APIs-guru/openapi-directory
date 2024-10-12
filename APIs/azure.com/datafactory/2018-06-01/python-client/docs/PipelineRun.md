# PipelineRun

Information about a pipeline run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_in_ms** | **int** | The duration of a pipeline run. | [optional] [readonly] 
**invoked_by** | [**PipelineRunInvokedBy**](PipelineRunInvokedBy.md) |  | [optional] 
**is_latest** | **bool** | Indicates if the recovered pipeline run is the latest in its group. | [optional] [readonly] 
**last_updated** | **datetime** | The last updated timestamp for the pipeline run event in ISO8601 format. | [optional] [readonly] 
**message** | **str** | The message from a pipeline run. | [optional] [readonly] 
**parameters** | **Dict[str, str]** | The full or partial list of parameter name, value pair used in the pipeline run. | [optional] [readonly] 
**pipeline_name** | **str** | The pipeline name. | [optional] [readonly] 
**run_dimensions** | **Dict[str, str]** | Run dimensions emitted by Pipeline run. | [optional] [readonly] 
**run_end** | **datetime** | The end time of a pipeline run in ISO8601 format. | [optional] [readonly] 
**run_group_id** | **str** | Identifier that correlates all the recovery runs of a pipeline run. | [optional] [readonly] 
**run_id** | **str** | Identifier of a run. | [optional] [readonly] 
**run_start** | **datetime** | The start time of a pipeline run in ISO8601 format. | [optional] [readonly] 
**status** | **str** | The status of a pipeline run. | [optional] [readonly] 

## Example

```python
from openapi_client.models.pipeline_run import PipelineRun

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineRun from a JSON string
pipeline_run_instance = PipelineRun.from_json(json)
# print the JSON string representation of the object
print(PipelineRun.to_json())

# convert the object into a dict
pipeline_run_dict = pipeline_run_instance.to_dict()
# create an instance of PipelineRun from a dict
pipeline_run_from_dict = PipelineRun.from_dict(pipeline_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


