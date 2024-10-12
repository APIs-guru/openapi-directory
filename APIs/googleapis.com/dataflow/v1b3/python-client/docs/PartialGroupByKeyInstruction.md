# PartialGroupByKeyInstruction

An instruction that does a partial group-by-key. One input and one output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**InstructionInput**](InstructionInput.md) |  | [optional] 
**input_element_codec** | **Dict[str, object]** | The codec to use for interpreting an element in the input PTable. | [optional] 
**original_combine_values_input_store_name** | **str** | If this instruction includes a combining function this is the name of the intermediate store between the GBK and the CombineValues. | [optional] 
**original_combine_values_step_name** | **str** | If this instruction includes a combining function, this is the name of the CombineValues instruction lifted into this instruction. | [optional] 
**side_inputs** | [**List[SideInputInfo]**](SideInputInfo.md) | Zero or more side inputs. | [optional] 
**value_combining_fn** | **Dict[str, object]** | The value combining function to invoke. | [optional] 

## Example

```python
from openapi_client.models.partial_group_by_key_instruction import PartialGroupByKeyInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of PartialGroupByKeyInstruction from a JSON string
partial_group_by_key_instruction_instance = PartialGroupByKeyInstruction.from_json(json)
# print the JSON string representation of the object
print(PartialGroupByKeyInstruction.to_json())

# convert the object into a dict
partial_group_by_key_instruction_dict = partial_group_by_key_instruction_instance.to_dict()
# create an instance of PartialGroupByKeyInstruction from a dict
partial_group_by_key_instruction_from_dict = PartialGroupByKeyInstruction.from_dict(partial_group_by_key_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


