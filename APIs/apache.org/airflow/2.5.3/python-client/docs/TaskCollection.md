# TaskCollection

Collection of tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[Task]**](Task.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_collection import TaskCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TaskCollection from a JSON string
task_collection_instance = TaskCollection.from_json(json)
# print the JSON string representation of the object
print(TaskCollection.to_json())

# convert the object into a dict
task_collection_dict = task_collection_instance.to_dict()
# create an instance of TaskCollection from a dict
task_collection_from_dict = TaskCollection.from_dict(task_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


