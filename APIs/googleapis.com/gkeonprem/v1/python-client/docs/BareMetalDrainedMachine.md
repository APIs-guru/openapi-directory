# BareMetalDrainedMachine

Represents a machine that is currently drained.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_ip** | **str** | Drained machine IP address. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_drained_machine import BareMetalDrainedMachine

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalDrainedMachine from a JSON string
bare_metal_drained_machine_instance = BareMetalDrainedMachine.from_json(json)
# print the JSON string representation of the object
print(BareMetalDrainedMachine.to_json())

# convert the object into a dict
bare_metal_drained_machine_dict = bare_metal_drained_machine_instance.to_dict()
# create an instance of BareMetalDrainedMachine from a dict
bare_metal_drained_machine_from_dict = BareMetalDrainedMachine.from_dict(bare_metal_drained_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


