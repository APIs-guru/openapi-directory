# IaasVMRestoreRequest

IaaS VM workload-specific restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_group** | **str** | The affinity group associated with the VM to be restored. Affinity groups are used only for Classic-deployed virtual machines. | [optional] 
**create_new_cloud_service** | **bool** | Asks the question if a new cloud service should be created while restoring the VM. If the answer is false, the VM is restored to the same cloud service. | [optional] 
**encryption_details** | [**EncryptionDetails**](EncryptionDetails.md) |  | [optional] 
**recovery_point_id** | **str** | The ID of the backup copy to be recovered. | [optional] 
**recovery_type** | **str** | The type of this recovery. | [optional] 
**region** | **str** | The region where the virtual machine is restored. | [optional] 
**source_resource_id** | **str** | The fully qualified Resource Manager ID of the VM being recovered. | [optional] 
**storage_account_id** | **str** | The fully qualified Resource Manager ID of the storage account where the VM will be restored. | [optional] 
**subnet_id** | **str** | Subnet ID is the identifier for the VM to be restored. For Classic VMs the subnet ID would be {VnetID}/Subnet/{SubnetName}, and for the Resource Manager VMs, the subnet ID would be the Resource Manager resource ID used to represent the subnet. | [optional] 
**target_domain_name_id** | **str** | The fully qualified Resource Manager ID of the domain name to be associated with the VM being restored. Use the Resource Manager ID to identify the domain, only for Classic-deployed virtual machines. | [optional] 
**target_resource_group_id** | **str** | The Resource Manager ID of the resource group you&#39;re creating for this VM and other artifacts.      For example: /subscriptions/{subId}/resourcegroups/{rg} | [optional] 
**target_virtual_machine_id** | **str** | The complete Resource Manager ID of the VM that will be created.              For example: /subscriptions/{subId}/resourcegroups/{rg}/provider/Microsoft.Compute/virtualmachines/{vm} | [optional] 
**virtual_network_id** | **str** | This is the virtual network ID of the vnet that is attached to the virtual machine.              Your join action permissions are validated during the linked access. | [optional] 

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


