# VirtualMachineTemplateProperties

Properties of virtual machine template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_of_ram** | **int** | The amount of memory | [optional] 
**controllers** | [**List[VirtualDiskController]**](VirtualDiskController.md) | The list of Virtual Disk Controllers | [optional] 
**description** | **str** | The description of Virtual Machine Template | [optional] 
**disks** | [**List[VirtualDisk]**](VirtualDisk.md) | The list of Virtual Disks | [optional] 
**expose_to_guest_vm** | **bool** | Expose Guest OS or not | [optional] 
**guest_os** | **str** | The Guest OS | [optional] [readonly] 
**guest_os_type** | **str** | The Guest OS types | [optional] [readonly] 
**nics** | [**List[VirtualNic]**](VirtualNic.md) | The list of Virtual NICs | [optional] 
**number_of_cores** | **int** | The number of CPU cores | [optional] 
**path** | **str** | path to folder | [optional] 
**private_cloud_id** | **str** | The Private Cloud Id | 
**v_sphere_networks** | **List[str]** | The list of VSphere networks | [optional] 
**v_sphere_tags** | **List[str]** | The tags from VSphere | [optional] 
**vmwaretools** | **str** | The VMware tools version | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_template_properties import VirtualMachineTemplateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineTemplateProperties from a JSON string
virtual_machine_template_properties_instance = VirtualMachineTemplateProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineTemplateProperties.to_json())

# convert the object into a dict
virtual_machine_template_properties_dict = virtual_machine_template_properties_instance.to_dict()
# create an instance of VirtualMachineTemplateProperties from a dict
virtual_machine_template_properties_from_dict = VirtualMachineTemplateProperties.from_dict(virtual_machine_template_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


