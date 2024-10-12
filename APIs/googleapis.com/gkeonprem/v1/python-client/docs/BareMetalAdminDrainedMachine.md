# BareMetalAdminDrainedMachine

BareMetalAdminDrainedMachine represents the machines that are drained.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_ip** | **str** | Drained machine IP address. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_drained_machine import BareMetalAdminDrainedMachine

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminDrainedMachine from a JSON string
bare_metal_admin_drained_machine_instance = BareMetalAdminDrainedMachine.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminDrainedMachine.to_json())

# convert the object into a dict
bare_metal_admin_drained_machine_dict = bare_metal_admin_drained_machine_instance.to_dict()
# create an instance of BareMetalAdminDrainedMachine from a dict
bare_metal_admin_drained_machine_from_dict = BareMetalAdminDrainedMachine.from_dict(bare_metal_admin_drained_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


