# ReadInstruction

An instruction that reads records. Takes no inputs, produces one output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.read_instruction import ReadInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of ReadInstruction from a JSON string
read_instruction_instance = ReadInstruction.from_json(json)
# print the JSON string representation of the object
print(ReadInstruction.to_json())

# convert the object into a dict
read_instruction_dict = read_instruction_instance.to_dict()
# create an instance of ReadInstruction from a dict
read_instruction_from_dict = ReadInstruction.from_dict(read_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


