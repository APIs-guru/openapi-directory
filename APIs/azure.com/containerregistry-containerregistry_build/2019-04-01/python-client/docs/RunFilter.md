# RunFilter

Properties that are enabled for Odata querying on runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **datetime** | The create time for a run. | [optional] 
**finish_time** | **datetime** | The time the run finished. | [optional] 
**is_archive_enabled** | **bool** | The value that indicates whether archiving is enabled or not. | [optional] 
**output_image_manifests** | **str** | The list of comma-separated image manifests that were generated from the run. This is applicable if the run is of  build type. | [optional] 
**run_id** | **str** | The unique identifier for the run. | [optional] 
**run_type** | **str** | The type of run. | [optional] 
**status** | **str** | The current status of the run. | [optional] 
**task_name** | **str** | The name of the task that the run corresponds to. | [optional] 

## Example

```python
from openapi_client.models.run_filter import RunFilter

# TODO update the JSON string below
json = "{}"
# create an instance of RunFilter from a JSON string
run_filter_instance = RunFilter.from_json(json)
# print the JSON string representation of the object
print(RunFilter.to_json())

# convert the object into a dict
run_filter_dict = run_filter_instance.to_dict()
# create an instance of RunFilter from a dict
run_filter_from_dict = RunFilter.from_dict(run_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


