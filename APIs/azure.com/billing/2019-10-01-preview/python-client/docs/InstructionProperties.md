# InstructionProperties

A billing instruction used during invoice generation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount budgeted for this billing instruction. | 
**end_date** | **datetime** | The date this billing instruction is no longer in effect. | 
**start_date** | **datetime** | The date this billing instruction goes into effect. | 

## Example

```python
from openapi_client.models.instruction_properties import InstructionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InstructionProperties from a JSON string
instruction_properties_instance = InstructionProperties.from_json(json)
# print the JSON string representation of the object
print(InstructionProperties.to_json())

# convert the object into a dict
instruction_properties_dict = instruction_properties_instance.to_dict()
# create an instance of InstructionProperties from a dict
instruction_properties_from_dict = InstructionProperties.from_dict(instruction_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


