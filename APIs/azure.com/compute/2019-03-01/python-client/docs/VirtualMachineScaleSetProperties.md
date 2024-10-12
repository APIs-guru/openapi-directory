# VirtualMachineScaleSetProperties

Describes the properties of a Virtual Machine Scale Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_capabilities** | [**AdditionalCapabilities**](AdditionalCapabilities.md) |  | [optional] 
**do_not_run_extensions_on_overprovisioned_vms** | **bool** | When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. | [optional] 
**overprovision** | **bool** | Specifies whether the Virtual Machine Scale Set should be overprovisioned. | [optional] 
**platform_fault_domain_count** | **int** | Fault Domain count for each placement group. | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**proximity_placement_group** | [**SubResource**](SubResource.md) |  | [optional] 
**scale_in_policy** | [**ScaleInPolicy**](ScaleInPolicy.md) |  | [optional] 
**single_placement_group** | **bool** | When true this limits the scale set to a single placement group, of max size 100 virtual machines. | [optional] 
**unique_id** | **str** | Specifies the ID which uniquely identifies a Virtual Machine Scale Set. | [optional] [readonly] 
**upgrade_policy** | [**UpgradePolicy**](UpgradePolicy.md) |  | [optional] 
**virtual_machine_profile** | [**VirtualMachineScaleSetVMProfile**](VirtualMachineScaleSetVMProfile.md) |  | [optional] 
**zone_balance** | **bool** | Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. | [optional] 

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


