# JitApproverDefinition

JIT approver definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The approver display name. | [optional] 
**id** | **str** | The approver service principal Id. | 
**type** | **str** | The approver type. | [optional] 

## Example

```python
from openapi_client.models.jit_approver_definition import JitApproverDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of JitApproverDefinition from a JSON string
jit_approver_definition_instance = JitApproverDefinition.from_json(json)
# print the JSON string representation of the object
print(JitApproverDefinition.to_json())

# convert the object into a dict
jit_approver_definition_dict = jit_approver_definition_instance.to_dict()
# create an instance of JitApproverDefinition from a dict
jit_approver_definition_from_dict = JitApproverDefinition.from_dict(jit_approver_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


