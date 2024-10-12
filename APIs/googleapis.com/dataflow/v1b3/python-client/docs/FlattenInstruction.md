# FlattenInstruction

An instruction that copies its inputs (zero or more) to its (single) output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[InstructionInput]**](InstructionInput.md) | Describes the inputs to the flatten instruction. | [optional] 

## Example

```python
from openapi_client.models.flatten_instruction import FlattenInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenInstruction from a JSON string
flatten_instruction_instance = FlattenInstruction.from_json(json)
# print the JSON string representation of the object
print(FlattenInstruction.to_json())

# convert the object into a dict
flatten_instruction_dict = flatten_instruction_instance.to_dict()
# create an instance of FlattenInstruction from a dict
flatten_instruction_from_dict = FlattenInstruction.from_dict(flatten_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


