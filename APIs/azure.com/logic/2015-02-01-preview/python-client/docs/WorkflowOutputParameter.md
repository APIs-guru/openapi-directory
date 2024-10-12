# WorkflowOutputParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **object** |  | [optional] 
**metadata** | **object** |  | [optional] 
**type** | [**ParameterType**](ParameterType.md) |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.workflow_output_parameter import WorkflowOutputParameter

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowOutputParameter from a JSON string
workflow_output_parameter_instance = WorkflowOutputParameter.from_json(json)
# print the JSON string representation of the object
print(WorkflowOutputParameter.to_json())

# convert the object into a dict
workflow_output_parameter_dict = workflow_output_parameter_instance.to_dict()
# create an instance of WorkflowOutputParameter from a dict
workflow_output_parameter_from_dict = WorkflowOutputParameter.from_dict(workflow_output_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


