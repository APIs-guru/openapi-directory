# WriteInstruction

An instruction that writes records. Takes one input, produces no outputs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**InstructionInput**](InstructionInput.md) |  | [optional] 
**sink** | [**Sink**](Sink.md) |  | [optional] 

## Example

```python
from openapi_client.models.write_instruction import WriteInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of WriteInstruction from a JSON string
write_instruction_instance = WriteInstruction.from_json(json)
# print the JSON string representation of the object
print(WriteInstruction.to_json())

# convert the object into a dict
write_instruction_dict = write_instruction_instance.to_dict()
# create an instance of WriteInstruction from a dict
write_instruction_from_dict = WriteInstruction.from_dict(write_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


