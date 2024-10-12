# HardwareProfile

Specifies the hardware settings for the virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_size** | **str** | Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc&#x3D;%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). &lt;br&gt;&lt;br&gt; The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  &lt;br&gt;&lt;br&gt; [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) &lt;br&gt;&lt;br&gt; [List all available virtual machine sizes in a region](https://docs.microsoft.com/rest/api/compute/virtualmachinesizes/list) &lt;br&gt;&lt;br&gt; [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes) | [optional] 

## Example

```python
from openapi_client.models.hardware_profile import HardwareProfile

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareProfile from a JSON string
hardware_profile_instance = HardwareProfile.from_json(json)
# print the JSON string representation of the object
print(HardwareProfile.to_json())

# convert the object into a dict
hardware_profile_dict = hardware_profile_instance.to_dict()
# create an instance of HardwareProfile from a dict
hardware_profile_from_dict = HardwareProfile.from_dict(hardware_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


