# ExecutionReference

Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_timestamp** | **str** | Optional. Completion timestamp of the execution. | [optional] 
**creation_timestamp** | **str** | Optional. Creation timestamp of the execution. | [optional] 
**name** | **str** | Optional. Name of the execution. | [optional] 

## Example

```python
from openapi_client.models.execution_reference import ExecutionReference

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionReference from a JSON string
execution_reference_instance = ExecutionReference.from_json(json)
# print the JSON string representation of the object
print(ExecutionReference.to_json())

# convert the object into a dict
execution_reference_dict = execution_reference_instance.to_dict()
# create an instance of ExecutionReference from a dict
execution_reference_from_dict = ExecutionReference.from_dict(execution_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


