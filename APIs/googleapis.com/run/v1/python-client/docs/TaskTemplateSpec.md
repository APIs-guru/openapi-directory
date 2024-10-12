# TaskTemplateSpec

TaskTemplateSpec describes the data a task should have when created from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec** | [**TaskSpec**](TaskSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_template_spec import TaskTemplateSpec

# TODO update the JSON string below
json = "{}"
# create an instance of TaskTemplateSpec from a JSON string
task_template_spec_instance = TaskTemplateSpec.from_json(json)
# print the JSON string representation of the object
print(TaskTemplateSpec.to_json())

# convert the object into a dict
task_template_spec_dict = task_template_spec_instance.to_dict()
# create an instance of TaskTemplateSpec from a dict
task_template_spec_from_dict = TaskTemplateSpec.from_dict(task_template_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


