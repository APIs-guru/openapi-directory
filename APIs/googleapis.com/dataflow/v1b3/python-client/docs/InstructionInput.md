# InstructionInput

An input of an instruction, as a reference to an output of a producer instruction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_num** | **int** | The output index (origin zero) within the producer. | [optional] 
**producer_instruction_index** | **int** | The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input&#39;s instruction&#39;s containing MapTask. | [optional] 

## Example

```python
from openapi_client.models.instruction_input import InstructionInput

# TODO update the JSON string below
json = "{}"
# create an instance of InstructionInput from a JSON string
instruction_input_instance = InstructionInput.from_json(json)
# print the JSON string representation of the object
print(InstructionInput.to_json())

# convert the object into a dict
instruction_input_dict = instruction_input_instance.to_dict()
# create an instance of InstructionInput from a dict
instruction_input_from_dict = InstructionInput.from_dict(instruction_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


