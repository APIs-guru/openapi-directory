# Tasks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**tasks** | [**List[Task]**](Task.md) |  | [optional] 

## Example

```python
from openapi_client.models.tasks import Tasks

# TODO update the JSON string below
json = "{}"
# create an instance of Tasks from a JSON string
tasks_instance = Tasks.from_json(json)
# print the JSON string representation of the object
print(Tasks.to_json())

# convert the object into a dict
tasks_dict = tasks_instance.to_dict()
# create an instance of Tasks from a dict
tasks_from_dict = Tasks.from_dict(tasks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


