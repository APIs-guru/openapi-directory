# ExecutionSpec

ExecutionSpec describes how the execution will look.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parallelism** | **int** | Optional. Specifies the maximum desired number of tasks the execution should run at given time. Must be &lt;&#x3D; task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed, i.e. when the work left to do is less than max parallelism. | [optional] 
**task_count** | **int** | Optional. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1. | [optional] 
**template** | [**TaskTemplateSpec**](TaskTemplateSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.execution_spec import ExecutionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionSpec from a JSON string
execution_spec_instance = ExecutionSpec.from_json(json)
# print the JSON string representation of the object
print(ExecutionSpec.to_json())

# convert the object into a dict
execution_spec_dict = execution_spec_instance.to_dict()
# create an instance of ExecutionSpec from a dict
execution_spec_from_dict = ExecutionSpec.from_dict(execution_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


