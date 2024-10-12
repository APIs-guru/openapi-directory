# TaskAddCollectionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[TaskAddResult]**](TaskAddResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_add_collection_result import TaskAddCollectionResult

# TODO update the JSON string below
json = "{}"
# create an instance of TaskAddCollectionResult from a JSON string
task_add_collection_result_instance = TaskAddCollectionResult.from_json(json)
# print the JSON string representation of the object
print(TaskAddCollectionResult.to_json())

# convert the object into a dict
task_add_collection_result_dict = task_add_collection_result_instance.to_dict()
# create an instance of TaskAddCollectionResult from a dict
task_add_collection_result_from_dict = TaskAddCollectionResult.from_dict(task_add_collection_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


