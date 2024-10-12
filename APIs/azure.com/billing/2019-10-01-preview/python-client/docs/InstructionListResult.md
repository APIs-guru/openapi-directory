# InstructionListResult

Result of listing instructions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Instruction]**](Instruction.md) | The list of instructions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instruction_list_result import InstructionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of InstructionListResult from a JSON string
instruction_list_result_instance = InstructionListResult.from_json(json)
# print the JSON string representation of the object
print(InstructionListResult.to_json())

# convert the object into a dict
instruction_list_result_dict = instruction_list_result_instance.to_dict()
# create an instance of InstructionListResult from a dict
instruction_list_result_from_dict = InstructionListResult.from_dict(instruction_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


