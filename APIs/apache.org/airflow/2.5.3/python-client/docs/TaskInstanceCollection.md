# TaskInstanceCollection

Collection of task instances.  *Changed in version 2.1.0*&#58; 'total_entries' field is added. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**task_instances** | [**List[TaskInstance]**](TaskInstance.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_instance_collection import TaskInstanceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TaskInstanceCollection from a JSON string
task_instance_collection_instance = TaskInstanceCollection.from_json(json)
# print the JSON string representation of the object
print(TaskInstanceCollection.to_json())

# convert the object into a dict
task_instance_collection_dict = task_instance_collection_instance.to_dict()
# create an instance of TaskInstanceCollection from a dict
task_instance_collection_from_dict = TaskInstanceCollection.from_dict(task_instance_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


