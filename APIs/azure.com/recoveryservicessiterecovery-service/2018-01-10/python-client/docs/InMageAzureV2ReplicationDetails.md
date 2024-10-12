# InMageAzureV2ReplicationDetails

InMageAzureV2 provider specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_expiry_date** | **datetime** | Agent expiry date. | [optional] 
**agent_version** | **str** | The agent version. | [optional] 
**azure_vm_disk_details** | [**List[AzureVmDiskDetails]**](AzureVmDiskDetails.md) | Azure VM Disk details. | [optional] 
**compressed_data_rate_in_mb** | **float** | The compressed data change rate in MB. | [optional] 
**datastores** | **List[str]** | The data stores of the on-premise machine. Value can be list of strings that contain data store names. | [optional] 
**discovery_type** | **str** | A value indicating the discovery type of the machine. Value can be vCenter or physical. | [optional] 
**disk_resized** | **str** | A value indicating whether any disk is resized for this VM. | [optional] 
**enable_rdp_on_target_option** | **str** | The selected option to enable RDP\\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum. | [optional] 
**infrastructure_vm_id** | **str** | The infrastructure VM Id. | [optional] 
**ip_address** | **str** | The source IP address. | [optional] 
**is_agent_update_required** | **str** | A value indicating whether installed agent needs to be updated. | [optional] 
**is_reboot_after_update_required** | **str** | A value indicating whether the source server requires a restart after update. | [optional] 
**last_heartbeat** | **datetime** | The last heartbeat received from the source server. | [optional] 
**last_rpo_calculated_time** | **datetime** | The last RPO calculated time. | [optional] 
**last_update_received_time** | **datetime** | The last update time received from on-prem components. | [optional] 
**license_type** | **str** | License Type of the VM to be used. | [optional] 
**master_target_id** | **str** | The master target Id. | [optional] 
**multi_vm_group_id** | **str** | The multi vm group Id. | [optional] 
**multi_vm_group_name** | **str** | The multi vm group name. | [optional] 
**multi_vm_sync_status** | **str** | A value indicating whether multi vm sync is enabled or disabled. | [optional] 
**os_disk_id** | **str** | The id of the disk containing the OS. | [optional] 
**os_type** | **str** | The type of the OS on the VM. | [optional] 
**os_version** | **str** | The OS Version of the protected item. | [optional] 
**process_server_id** | **str** | The process server Id. | [optional] 
**protected_disks** | [**List[InMageAzureV2ProtectedDiskDetails]**](InMageAzureV2ProtectedDiskDetails.md) | The list of protected disks. | [optional] 
**protection_stage** | **str** | The protection stage. | [optional] 
**recovery_availability_set_id** | **str** | The recovery availability set Id. | [optional] 
**recovery_azure_log_storage_account_id** | **str** | The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection. | [optional] 
**recovery_azure_resource_group_id** | **str** | The target resource group Id. | [optional] 
**recovery_azure_storage_account** | **str** | The recovery Azure storage account. | [optional] 
**recovery_azure_vm_name** | **str** | Recovery Azure given name. | [optional] 
**recovery_azure_vm_size** | **str** | The Recovery Azure VM size. | [optional] 
**replica_id** | **str** | The replica id of the protected item. | [optional] 
**resync_progress_percentage** | **int** | The resync progress percentage. | [optional] 
**rpo_in_seconds** | **int** | The RPO in seconds. | [optional] 
**selected_recovery_azure_network_id** | **str** | The selected recovery azure network Id. | [optional] 
**selected_source_nic_id** | **str** | The selected source nic Id which will be used as the primary nic during failover. | [optional] 
**source_vm_cpu_count** | **int** | The CPU count of the VM on the primary side. | [optional] 
**source_vm_ram_size_in_mb** | **int** | The RAM size of the VM on the primary side. | [optional] 
**target_vm_id** | **str** | The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM. | [optional] 
**uncompressed_data_rate_in_mb** | **float** | The uncompressed data change rate in MB. | [optional] 
**use_managed_disks** | **str** | A value indicating whether managed disks should be used during failover. | [optional] 
**v_center_infrastructure_id** | **str** | The vCenter infrastructure Id. | [optional] 
**validation_errors** | [**List[HealthError]**](HealthError.md) | The validation errors of the on-premise machine Value can be list of validation errors. | [optional] 
**vhd_name** | **str** | The OS disk VHD name. | [optional] 
**vm_id** | **str** | The virtual machine Id. | [optional] 
**vm_nics** | [**List[VMNicDetails]**](VMNicDetails.md) | The PE Network details. | [optional] 
**vm_protection_state** | **str** | The protection state for the vm. | [optional] 
**vm_protection_state_description** | **str** | The protection state description for the vm. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_replication_details import InMageAzureV2ReplicationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2ReplicationDetails from a JSON string
in_mage_azure_v2_replication_details_instance = InMageAzureV2ReplicationDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2ReplicationDetails.to_json())

# convert the object into a dict
in_mage_azure_v2_replication_details_dict = in_mage_azure_v2_replication_details_instance.to_dict()
# create an instance of InMageAzureV2ReplicationDetails from a dict
in_mage_azure_v2_replication_details_from_dict = InMageAzureV2ReplicationDetails.from_dict(in_mage_azure_v2_replication_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


