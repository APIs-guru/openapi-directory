# TaskInstanceReferenceCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_instances** | [**List[TaskInstanceReference]**](TaskInstanceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_instance_reference_collection import TaskInstanceReferenceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TaskInstanceReferenceCollection from a JSON string
task_instance_reference_collection_instance = TaskInstanceReferenceCollection.from_json(json)
# print the JSON string representation of the object
print(TaskInstanceReferenceCollection.to_json())

# convert the object into a dict
task_instance_reference_collection_dict = task_instance_reference_collection_instance.to_dict()
# create an instance of TaskInstanceReferenceCollection from a dict
task_instance_reference_collection_from_dict = TaskInstanceReferenceCollection.from_dict(task_instance_reference_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


