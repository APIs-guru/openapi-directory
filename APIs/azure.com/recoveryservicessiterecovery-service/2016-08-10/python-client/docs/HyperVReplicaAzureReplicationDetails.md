# HyperVReplicaAzureReplicationDetails

Hyper V Replica Azure provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_vm_disk_details** | [**List[AzureVmDiskDetails]**](AzureVmDiskDetails.md) | Azure VM Disk details. | [optional] 
**enable_rdpon_target_option** | **str** | The selected option to enable RDP\\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum. | [optional] 
**encryption** | **str** | The encryption info. | [optional] 
**initial_replication_details** | [**InitialReplicationDetails**](InitialReplicationDetails.md) |  | [optional] 
**last_replicated_time** | **datetime** | The Last replication time. | [optional] 
**license_type** | **str** | License Type of the VM to be used. | [optional] 
**o_s_details** | [**OSDetails**](OSDetails.md) |  | [optional] 
**recovery_availability_set_id** | **str** | The recovery availability set Id. | [optional] 
**recovery_azure_log_storage_account_id** | **str** | The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection. | [optional] 
**recovery_azure_resource_group_id** | **str** | The target resource group Id. | [optional] 
**recovery_azure_storage_account** | **str** | The recovery Azure storage account. | [optional] 
**recovery_azure_vm_name** | **str** | Recovery Azure given name. | [optional] 
**recovery_azure_vm_size** | **str** | The Recovery Azure VM size. | [optional] 
**selected_recovery_azure_network_id** | **str** | The selected recovery azure network Id. | [optional] 
**source_vm_cpu_count** | **int** | The CPU count of the VM on the primary side. | [optional] 
**source_vm_ram_size_in_mb** | **int** | The RAM size of the VM on the primary side. | [optional] 
**use_managed_disks** | **str** | A value indicating whether managed disks should be used during failover. | [optional] 
**vm_id** | **str** | The virtual machine Id. | [optional] 
**vm_nics** | [**List[VMNicDetails]**](VMNicDetails.md) | The PE Network details. | [optional] 
**vm_protection_state** | **str** | The protection state for the vm. | [optional] 
**vm_protection_state_description** | **str** | The protection state description for the vm. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_replication_details import HyperVReplicaAzureReplicationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzureReplicationDetails from a JSON string
hyper_v_replica_azure_replication_details_instance = HyperVReplicaAzureReplicationDetails.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzureReplicationDetails.to_json())

# convert the object into a dict
hyper_v_replica_azure_replication_details_dict = hyper_v_replica_azure_replication_details_instance.to_dict()
# create an instance of HyperVReplicaAzureReplicationDetails from a dict
hyper_v_replica_azure_replication_details_from_dict = HyperVReplicaAzureReplicationDetails.from_dict(hyper_v_replica_azure_replication_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


