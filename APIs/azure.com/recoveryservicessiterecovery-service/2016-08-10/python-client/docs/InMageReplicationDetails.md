# InMageReplicationDetails

InMage provider specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_site_type** | **str** | The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always. | [optional] 
**agent_details** | [**InMageAgentDetails**](InMageAgentDetails.md) |  | [optional] 
**azure_storage_account_id** | **str** | A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null. | [optional] 
**compressed_data_rate_in_mb** | **float** | The compressed data change rate in MB. | [optional] 
**consistency_points** | **Dict[str, datetime]** | The collection of Consistency points. | [optional] 
**datastores** | **List[str]** | The data stores of the on-premise machine Value can be list of strings that contain data store names | [optional] 
**discovery_type** | **str** | A value indicating the discovery type of the machine. | [optional] 
**disk_resized** | **str** | A value indicating whether any disk is resized for this VM. | [optional] 
**infrastructure_vm_id** | **str** | The infrastructure VM Id. | [optional] 
**ip_address** | **str** | The source IP address. | [optional] 
**last_heartbeat** | **datetime** | The last heartbeat received from the source server. | [optional] 
**last_rpo_calculated_time** | **datetime** | The last RPO calculated time. | [optional] 
**last_update_received_time** | **datetime** | The last update time received from on-prem components. | [optional] 
**master_target_id** | **str** | The master target Id. | [optional] 
**multi_vm_group_id** | **str** | The multi vm group Id, if any. | [optional] 
**multi_vm_group_name** | **str** | The multi vm group name, if any. | [optional] 
**multi_vm_sync_status** | **str** | A value indicating whether the multi vm sync is enabled or disabled. | [optional] 
**os_details** | [**OSDiskDetails**](OSDiskDetails.md) |  | [optional] 
**os_version** | **str** | The OS Version of the protected item. | [optional] 
**process_server_id** | **str** | The process server Id. | [optional] 
**protected_disks** | [**List[InMageProtectedDiskDetails]**](InMageProtectedDiskDetails.md) | The list of protected disks. | [optional] 
**protection_stage** | **str** | The protection stage. | [optional] 
**reboot_after_update_status** | **str** | A value indicating whether the source server requires a restart after update. | [optional] 
**replica_id** | **str** | The replica id of the protected item. | [optional] 
**resync_details** | [**InitialReplicationDetails**](InitialReplicationDetails.md) |  | [optional] 
**retention_window_end** | **datetime** | The retention window end time. | [optional] 
**retention_window_start** | **datetime** | The retention window start time. | [optional] 
**rpo_in_seconds** | **int** | The RPO in seconds. | [optional] 
**source_vm_cpu_count** | **int** | The CPU count of the VM on the primary side. | [optional] 
**source_vm_ram_size_in_mb** | **int** | The RAM size of the VM on the primary side. | [optional] 
**uncompressed_data_rate_in_mb** | **float** | The uncompressed data change rate in MB. | [optional] 
**v_center_infrastructure_id** | **str** | The vCenter infrastructure Id. | [optional] 
**validation_errors** | [**List[HealthError]**](HealthError.md) | The validation errors of the on-premise machine Value can be list of validation errors | [optional] 
**vm_id** | **str** | The virtual machine Id. | [optional] 
**vm_nics** | [**List[VMNicDetails]**](VMNicDetails.md) | The PE Network details. | [optional] 
**vm_protection_state** | **str** | The protection state for the vm. | [optional] 
**vm_protection_state_description** | **str** | The protection state description for the vm. | [optional] 

## Example

```python
from openapi_client.models.in_mage_replication_details import InMageReplicationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageReplicationDetails from a JSON string
in_mage_replication_details_instance = InMageReplicationDetails.from_json(json)
# print the JSON string representation of the object
print(InMageReplicationDetails.to_json())

# convert the object into a dict
in_mage_replication_details_dict = in_mage_replication_details_instance.to_dict()
# create an instance of InMageReplicationDetails from a dict
in_mage_replication_details_from_dict = InMageReplicationDetails.from_dict(in_mage_replication_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


