# VirtualMachineProperties

Describes the properties of a Virtual Machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_capabilities** | [**AdditionalCapabilities**](AdditionalCapabilities.md) |  | [optional] 
**availability_set** | [**SubResource**](SubResource.md) |  | [optional] 
**billing_profile** | [**BillingProfile**](BillingProfile.md) |  | [optional] 
**diagnostics_profile** | [**DiagnosticsProfile**](DiagnosticsProfile.md) |  | [optional] 
**eviction_policy** | **str** | Specifies the eviction policy for the low priority virtual machine. Only supported value is &#39;Deallocate&#39;. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01 | [optional] 
**hardware_profile** | [**HardwareProfile**](HardwareProfile.md) |  | [optional] 
**host** | [**SubResource**](SubResource.md) |  | [optional] 
**instance_view** | [**VirtualMachineInstanceView**](VirtualMachineInstanceView.md) |  | [optional] 
**license_type** | **str** | Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; Windows_Client &lt;br&gt;&lt;br&gt; Windows_Server &lt;br&gt;&lt;br&gt; If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. &lt;br&gt;&lt;br&gt; For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc&#x3D;%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Minimum api-version: 2015-06-15 | [optional] 
**network_profile** | [**NetworkProfile**](NetworkProfile.md) |  | [optional] 
**os_profile** | [**OSProfile**](OSProfile.md) |  | [optional] 
**priority** | **str** | Specifies the priority for the virtual machine. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01 | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**proximity_placement_group** | [**SubResource**](SubResource.md) |  | [optional] 
**storage_profile** | [**StorageProfile**](StorageProfile.md) |  | [optional] 
**virtual_machine_scale_set** | [**SubResource**](SubResource.md) |  | [optional] 
**vm_id** | **str** | Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_properties import VirtualMachineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineProperties from a JSON string
virtual_machine_properties_instance = VirtualMachineProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineProperties.to_json())

# convert the object into a dict
virtual_machine_properties_dict = virtual_machine_properties_instance.to_dict()
# create an instance of VirtualMachineProperties from a dict
virtual_machine_properties_from_dict = VirtualMachineProperties.from_dict(virtual_machine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


