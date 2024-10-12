# TaskRunProperties

The properties of task run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force_update_tag** | **str** | How the run should be forced to rerun even if the run request configuration has not changed | [optional] 
**provisioning_state** | **str** | The provisioning state of this task run | [optional] [readonly] 
**run_request** | [**RunRequest**](RunRequest.md) |  | [optional] 
**run_result** | [**Run**](Run.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_run_properties import TaskRunProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TaskRunProperties from a JSON string
task_run_properties_instance = TaskRunProperties.from_json(json)
# print the JSON string representation of the object
print(TaskRunProperties.to_json())

# convert the object into a dict
task_run_properties_dict = task_run_properties_instance.to_dict()
# create an instance of TaskRunProperties from a dict
task_run_properties_from_dict = TaskRunProperties.from_dict(task_run_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


