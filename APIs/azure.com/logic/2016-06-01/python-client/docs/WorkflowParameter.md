# WorkflowParameter

The workflow parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description. | [optional] 
**metadata** | **object** |  | [optional] 
**type** | [**ParameterType**](ParameterType.md) |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.workflow_parameter import WorkflowParameter

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowParameter from a JSON string
workflow_parameter_instance = WorkflowParameter.from_json(json)
# print the JSON string representation of the object
print(WorkflowParameter.to_json())

# convert the object into a dict
workflow_parameter_dict = workflow_parameter_instance.to_dict()
# create an instance of WorkflowParameter from a dict
workflow_parameter_from_dict = WorkflowParameter.from_dict(workflow_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


