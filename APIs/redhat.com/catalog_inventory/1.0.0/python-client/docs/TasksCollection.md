# TasksCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Task]**](Task.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.tasks_collection import TasksCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TasksCollection from a JSON string
tasks_collection_instance = TasksCollection.from_json(json)
# print the JSON string representation of the object
print(TasksCollection.to_json())

# convert the object into a dict
tasks_collection_dict = tasks_collection_instance.to_dict()
# create an instance of TasksCollection from a dict
tasks_collection_from_dict = TasksCollection.from_dict(tasks_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


