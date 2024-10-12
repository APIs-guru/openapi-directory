# MachineReferenceWithHints

A machine reference with a hint of the machine's name and operating system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Machine reference with name and os hints. | [optional] 

## Example

```python
from openapi_client.models.machine_reference_with_hints import MachineReferenceWithHints

# TODO update the JSON string below
json = "{}"
# create an instance of MachineReferenceWithHints from a JSON string
machine_reference_with_hints_instance = MachineReferenceWithHints.from_json(json)
# print the JSON string representation of the object
print(MachineReferenceWithHints.to_json())

# convert the object into a dict
machine_reference_with_hints_dict = machine_reference_with_hints_instance.to_dict()
# create an instance of MachineReferenceWithHints from a dict
machine_reference_with_hints_from_dict = MachineReferenceWithHints.from_dict(machine_reference_with_hints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


