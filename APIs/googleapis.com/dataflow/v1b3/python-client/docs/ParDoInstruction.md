# ParDoInstruction

An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**InstructionInput**](InstructionInput.md) |  | [optional] 
**multi_output_infos** | [**List[MultiOutputInfo]**](MultiOutputInfo.md) | Information about each of the outputs, if user_fn is a MultiDoFn. | [optional] 
**num_outputs** | **int** | The number of outputs. | [optional] 
**side_inputs** | [**List[SideInputInfo]**](SideInputInfo.md) | Zero or more side inputs. | [optional] 
**user_fn** | **Dict[str, object]** | The user function to invoke. | [optional] 

## Example

```python
from openapi_client.models.par_do_instruction import ParDoInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of ParDoInstruction from a JSON string
par_do_instruction_instance = ParDoInstruction.from_json(json)
# print the JSON string representation of the object
print(ParDoInstruction.to_json())

# convert the object into a dict
par_do_instruction_dict = par_do_instruction_instance.to_dict()
# create an instance of ParDoInstruction from a dict
par_do_instruction_from_dict = ParDoInstruction.from_dict(par_do_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


