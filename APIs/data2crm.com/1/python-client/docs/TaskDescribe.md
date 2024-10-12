# TaskDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_describe import TaskDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of TaskDescribe from a JSON string
task_describe_instance = TaskDescribe.from_json(json)
# print the JSON string representation of the object
print(TaskDescribe.to_json())

# convert the object into a dict
task_describe_dict = task_describe_instance.to_dict()
# create an instance of TaskDescribe from a dict
task_describe_from_dict = TaskDescribe.from_dict(task_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


