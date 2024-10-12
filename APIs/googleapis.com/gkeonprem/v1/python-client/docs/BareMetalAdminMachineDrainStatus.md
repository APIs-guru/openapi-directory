# BareMetalAdminMachineDrainStatus

BareMetalAdminMachineDrainStatus represents the status of bare metal node machines that are undergoing drain operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drained_machines** | [**List[BareMetalAdminDrainedMachine]**](BareMetalAdminDrainedMachine.md) | The list of drained machines. | [optional] 
**draining_machines** | [**List[BareMetalAdminDrainingMachine]**](BareMetalAdminDrainingMachine.md) | The list of draning machines. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_machine_drain_status import BareMetalAdminMachineDrainStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminMachineDrainStatus from a JSON string
bare_metal_admin_machine_drain_status_instance = BareMetalAdminMachineDrainStatus.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminMachineDrainStatus.to_json())

# convert the object into a dict
bare_metal_admin_machine_drain_status_dict = bare_metal_admin_machine_drain_status_instance.to_dict()
# create an instance of BareMetalAdminMachineDrainStatus from a dict
bare_metal_admin_machine_drain_status_from_dict = BareMetalAdminMachineDrainStatus.from_dict(bare_metal_admin_machine_drain_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


