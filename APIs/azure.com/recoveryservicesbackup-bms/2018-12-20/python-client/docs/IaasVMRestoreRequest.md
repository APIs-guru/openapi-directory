# IaasVMRestoreRequest

IaaS VM workload-specific restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_group** | **str** | Affinity group associated to VM to be restored. Used only for Classic Compute Virtual Machines. | [optional] 
**create_new_cloud_service** | **bool** | Should a new cloud service be created while restoring the VM. If this is false, VM will be restored to the same  cloud service as it was at the time of backup. | [optional] 
**encryption_details** | [**EncryptionDetails**](EncryptionDetails.md) |  | [optional] 
**original_storage_account_option** | **bool** | Original Storage Account Option | [optional] 
**recovery_point_id** | **str** | ID of the backup copy to be recovered. | [optional] 
**recovery_type** | **str** | Type of this recovery. | [optional] 
**region** | **str** | Region in which the virtual machine is restored. | [optional] 
**restore_disk_lun_list** | **List[int]** | List of Disk LUNs for partial restore | [optional] 
**source_resource_id** | **str** | Fully qualified ARM ID of the VM which is being recovered. | [optional] 
**storage_account_id** | **str** | Fully qualified ARM ID of the storage account to which the VM has to be restored. | [optional] 
**subnet_id** | **str** | Subnet ID, is the subnet ID associated with the to be restored VM. For Classic VMs it would be  {VnetID}/Subnet/{SubnetName} and, for the Azure Resource Manager VMs it would be ARM resource ID used to represent  the subnet. | [optional] 
**target_domain_name_id** | **str** | Fully qualified ARM ID of the domain name to be associated to the VM being restored. This applies only to Classic  Virtual Machines. | [optional] 
**target_resource_group_id** | **str** | This is the ARM Id of the resource group that you want to create for this Virtual machine and other artifacts.  For e.g. /subscriptions/{subId}/resourcegroups/{rg} | [optional] 
**target_virtual_machine_id** | **str** | This is the complete ARM Id of the VM that will be created.  For e.g. /subscriptions/{subId}/resourcegroups/{rg}/provider/Microsoft.Compute/virtualmachines/{vm} | [optional] 
**virtual_network_id** | **str** | This is the virtual network Id of the vnet that will be attached to the virtual machine.  User will be validated for join action permissions in the linked access. | [optional] 

## Example

```python
from openapi_client.models.iaas_vm_restore_request import IaasVMRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IaasVMRestoreRequest from a JSON string
iaas_vm_restore_request_instance = IaasVMRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(IaasVMRestoreRequest.to_json())

# convert the object into a dict
iaas_vm_restore_request_dict = iaas_vm_restore_request_instance.to_dict()
# create an instance of IaasVMRestoreRequest from a dict
iaas_vm_restore_request_from_dict = IaasVMRestoreRequest.from_dict(iaas_vm_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


