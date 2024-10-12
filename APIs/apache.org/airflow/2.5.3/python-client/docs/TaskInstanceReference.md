# TaskInstanceReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_id** | **str** | The DAG ID. | [optional] [readonly] 
**dag_run_id** | **str** | The DAG run ID. | [optional] [readonly] 
**execution_date** | **str** |  | [optional] [readonly] 
**task_id** | **str** | The task ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.task_instance_reference import TaskInstanceReference

# TODO update the JSON string below
json = "{}"
# create an instance of TaskInstanceReference from a JSON string
task_instance_reference_instance = TaskInstanceReference.from_json(json)
# print the JSON string representation of the object
print(TaskInstanceReference.to_json())

# convert the object into a dict
task_instance_reference_dict = task_instance_reference_instance.to_dict()
# create an instance of TaskInstanceReference from a dict
task_instance_reference_from_dict = TaskInstanceReference.from_dict(task_instance_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


