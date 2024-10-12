# VirtualMachineScaleSetProperties

Describes the properties of a Virtual Machine Scale Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**over_provision** | **bool** | Specifies whether the Virtual Machine Scale Set should be overprovisioned. | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**single_placement_group** | **bool** | When true this limits the scale set to a single placement group, of max size 100 virtual machines. | [optional] 
**upgrade_policy** | [**UpgradePolicy**](UpgradePolicy.md) |  | [optional] 
**virtual_machine_profile** | [**VirtualMachineScaleSetVMProfile**](VirtualMachineScaleSetVMProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_properties import VirtualMachineScaleSetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetProperties from a JSON string
virtual_machine_scale_set_properties_instance = VirtualMachineScaleSetProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetProperties.to_json())

# convert the object into a dict
virtual_machine_scale_set_properties_dict = virtual_machine_scale_set_properties_instance.to_dict()
# create an instance of VirtualMachineScaleSetProperties from a dict
virtual_machine_scale_set_properties_from_dict = VirtualMachineScaleSetProperties.from_dict(virtual_machine_scale_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


