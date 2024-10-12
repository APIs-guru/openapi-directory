# TaskOutletDatasetReference

A datasets reference to an upstream task.  *New in version 2.4.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | The dataset creation time | [optional] 
**dag_id** | **str** | The DAG ID that updates the dataset. | [optional] 
**task_id** | **str** | The task ID that updates the dataset. | [optional] 
**updated_at** | **str** | The dataset update time | [optional] 

## Example

```python
from openapi_client.models.task_outlet_dataset_reference import TaskOutletDatasetReference

# TODO update the JSON string below
json = "{}"
# create an instance of TaskOutletDatasetReference from a JSON string
task_outlet_dataset_reference_instance = TaskOutletDatasetReference.from_json(json)
# print the JSON string representation of the object
print(TaskOutletDatasetReference.to_json())

# convert the object into a dict
task_outlet_dataset_reference_dict = task_outlet_dataset_reference_instance.to_dict()
# create an instance of TaskOutletDatasetReference from a dict
task_outlet_dataset_reference_from_dict = TaskOutletDatasetReference.from_dict(task_outlet_dataset_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


