# ExecutionTemplateSpec

ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**ObjectMeta**](ObjectMeta.md) |  | [optional] 
**spec** | [**ExecutionSpec**](ExecutionSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.execution_template_spec import ExecutionTemplateSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionTemplateSpec from a JSON string
execution_template_spec_instance = ExecutionTemplateSpec.from_json(json)
# print the JSON string representation of the object
print(ExecutionTemplateSpec.to_json())

# convert the object into a dict
execution_template_spec_dict = execution_template_spec_instance.to_dict()
# create an instance of ExecutionTemplateSpec from a dict
execution_template_spec_from_dict = ExecutionTemplateSpec.from_dict(execution_template_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


