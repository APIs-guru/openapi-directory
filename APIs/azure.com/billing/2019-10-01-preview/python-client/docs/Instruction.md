# Instruction

A instruction resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InstructionProperties**](InstructionProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instruction import Instruction

# TODO update the JSON string below
json = "{}"
# create an instance of Instruction from a JSON string
instruction_instance = Instruction.from_json(json)
# print the JSON string representation of the object
print(Instruction.to_json())

# convert the object into a dict
instruction_dict = instruction_instance.to_dict()
# create an instance of Instruction from a dict
instruction_from_dict = Instruction.from_dict(instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


