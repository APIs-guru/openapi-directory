# VirtualMachineProperties

Properties of virtual machine

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_of_ram** | **int** | The amount of memory | 
**controllers** | [**List[VirtualDiskController]**](VirtualDiskController.md) | The list of Virtual Disks&#39; Controllers | [optional] [readonly] 
**customization** | [**GuestOSCustomization**](GuestOSCustomization.md) |  | [optional] 
**disks** | [**List[VirtualDisk]**](VirtualDisk.md) | The list of Virtual Disks | [optional] 
**dnsname** | **str** | The DNS name of Virtual Machine in VCenter | [optional] [readonly] 
**expose_to_guest_vm** | **bool** | Expose Guest OS or not | [optional] 
**folder** | **str** | The path to virtual machine folder in VCenter | [optional] [readonly] 
**guest_os** | **str** | The name of Guest OS | [optional] [readonly] 
**guest_os_type** | **str** | The Guest OS type | [optional] [readonly] 
**nics** | [**List[VirtualNic]**](VirtualNic.md) | The list of Virtual NICs | [optional] 
**number_of_cores** | **int** | The number of CPU cores | 
**password** | **str** | Password for login. Deprecated - use customization property | [optional] 
**private_cloud_id** | **str** | Private Cloud Id | 
**provisioning_state** | **str** | The provisioning status of the resource | [optional] [readonly] 
**public_ip** | **str** | The public ip of Virtual Machine | [optional] [readonly] 
**resource_pool** | [**ResourcePool**](ResourcePool.md) |  | [optional] 
**status** | **str** | The status of Virtual machine | [optional] [readonly] 
**template_id** | **str** | Virtual Machine Template Id | [optional] 
**username** | **str** | Username for login. Deprecated - use customization property | [optional] 
**v_sphere_networks** | **List[str]** | The list of Virtual VSphere Networks | [optional] 
**vm_id** | **str** | The internal id of Virtual Machine in VCenter | [optional] [readonly] 
**vmwaretools** | **str** | VMware tools version | [optional] [readonly] 

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


