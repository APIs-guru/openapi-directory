# VmwareVmDetails

VmwareVmDetails describes a VM in vCenter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_option** | **str** | Output only. The VM Boot Option. | [optional] [readonly] 
**committed_storage** | **str** | The total size of the storage allocated to the VM in MB. | [optional] 
**committed_storage_mb** | **str** | The total size of the storage allocated to the VM in MB. | [optional] 
**cpu_count** | **int** | The number of cpus in the VM. | [optional] 
**datacenter_description** | **str** | The descriptive name of the vCenter&#39;s datacenter this VM is contained in. | [optional] 
**datacenter_id** | **str** | The id of the vCenter&#39;s datacenter this VM is contained in. | [optional] 
**disk_count** | **int** | The number of disks the VM has. | [optional] 
**display_name** | **str** | The display name of the VM. Note that this is not necessarily unique. | [optional] 
**guest_description** | **str** | The VM&#39;s OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold. | [optional] 
**memory_mb** | **int** | The size of the memory of the VM in MB. | [optional] 
**power_state** | **str** | The power state of the VM at the moment list was taken. | [optional] 
**uuid** | **str** | The unique identifier of the VM in vCenter. | [optional] 
**vm_id** | **str** | The VM&#39;s id in the source (note that this is not the MigratingVm&#39;s id). This is the moref id of the VM. | [optional] 

## Example

```python
from openapi_client.models.vmware_vm_details import VmwareVmDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareVmDetails from a JSON string
vmware_vm_details_instance = VmwareVmDetails.from_json(json)
# print the JSON string representation of the object
print(VmwareVmDetails.to_json())

# convert the object into a dict
vmware_vm_details_dict = vmware_vm_details_instance.to_dict()
# create an instance of VmwareVmDetails from a dict
vmware_vm_details_from_dict = VmwareVmDetails.from_dict(vmware_vm_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


