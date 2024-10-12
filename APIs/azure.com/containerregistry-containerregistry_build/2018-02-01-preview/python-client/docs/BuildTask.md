# BuildTask

The build task that has the resource properties and all build items. The build task will have all information to schedule a build against it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BuildTaskProperties**](BuildTaskProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**location** | **str** | The location of the resource. This cannot be changed after the resource is created. | 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_task import BuildTask

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTask from a JSON string
build_task_instance = BuildTask.from_json(json)
# print the JSON string representation of the object
print(BuildTask.to_json())

# convert the object into a dict
build_task_dict = build_task_instance.to_dict()
# create an instance of BuildTask from a dict
build_task_from_dict = BuildTask.from_dict(build_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


