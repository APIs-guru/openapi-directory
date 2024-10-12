# ParallelInstruction

Describes a particular operation comprising a MapTask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flatten** | [**FlattenInstruction**](FlattenInstruction.md) |  | [optional] 
**name** | **str** | User-provided name of this operation. | [optional] 
**original_name** | **str** | System-defined name for the operation in the original workflow graph. | [optional] 
**outputs** | [**List[InstructionOutput]**](InstructionOutput.md) | Describes the outputs of the instruction. | [optional] 
**par_do** | [**ParDoInstruction**](ParDoInstruction.md) |  | [optional] 
**partial_group_by_key** | [**PartialGroupByKeyInstruction**](PartialGroupByKeyInstruction.md) |  | [optional] 
**read** | [**ReadInstruction**](ReadInstruction.md) |  | [optional] 
**system_name** | **str** | System-defined name of this operation. Unique across the workflow. | [optional] 
**write** | [**WriteInstruction**](WriteInstruction.md) |  | [optional] 

## Example

```python
from openapi_client.models.parallel_instruction import ParallelInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of ParallelInstruction from a JSON string
parallel_instruction_instance = ParallelInstruction.from_json(json)
# print the JSON string representation of the object
print(ParallelInstruction.to_json())

# convert the object into a dict
parallel_instruction_dict = parallel_instruction_instance.to_dict()
# create an instance of ParallelInstruction from a dict
parallel_instruction_from_dict = ParallelInstruction.from_dict(parallel_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


