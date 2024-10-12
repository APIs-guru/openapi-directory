# A2AReplicationDetails

A2A provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | The agent version. | [optional] 
**fabric_object_id** | **str** | The fabric specific object Id of the virtual machine. | [optional] 
**is_replication_agent_update_required** | **bool** | A value indicating whether replication agent update is required. | [optional] 
**last_heartbeat** | **datetime** | The last heartbeat received from the source server. | [optional] 
**last_rpo_calculated_time** | **datetime** | The time (in UTC) when the last RPO value was calculated by Protection Service. | [optional] 
**lifecycle_id** | **str** | An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the \&quot;same\&quot; protected item even though other internal Ids/ARM Id might be changing. | [optional] 
**management_id** | **str** | The management Id. | [optional] 
**monitoring_job_type** | **str** | The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property. | [optional] 
**monitoring_percentage_completion** | **int** | The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property. | [optional] 
**multi_vm_group_id** | **str** | The multi vm group Id. | [optional] 
**multi_vm_group_name** | **str** | The multi vm group name. | [optional] 
**os_type** | **str** | The type of operating system. | [optional] 
**primary_fabric_location** | **str** | Primary fabric location. | [optional] 
**protected_disks** | [**List[A2AProtectedDiskDetails]**](A2AProtectedDiskDetails.md) | The list of protected disks. | [optional] 
**protected_managed_disks** | [**List[A2AProtectedManagedDiskDetails]**](A2AProtectedManagedDiskDetails.md) | The list of protected managed disks. | [optional] 
**recovery_availability_set** | **str** | The recovery availability set. | [optional] 
**recovery_azure_resource_group_id** | **str** | The recovery resource group. | [optional] 
**recovery_azure_vm_name** | **str** | The name of recovery virtual machine. | [optional] 
**recovery_azure_vm_size** | **str** | The size of recovery virtual machine. | [optional] 
**recovery_cloud_service** | **str** | The recovery cloud service. | [optional] 
**recovery_fabric_location** | **str** | The recovery fabric location. | [optional] 
**recovery_fabric_object_id** | **str** | The recovery fabric object Id. | [optional] 
**rpo_in_seconds** | **int** | The last RPO value in seconds. | [optional] 
**selected_recovery_azure_network_id** | **str** | The recovery virtual network. | [optional] 
**test_failover_recovery_fabric_object_id** | **str** | The test failover fabric object Id. | [optional] 
**vm_nics** | [**List[VMNicDetails]**](VMNicDetails.md) | The virtual machine nic details. | [optional] 
**vm_protection_state** | **str** | The protection state for the vm. | [optional] 
**vm_protection_state_description** | **str** | The protection state description for the vm. | [optional] 
**vm_synced_config_details** | [**AzureToAzureVmSyncedConfigDetails**](AzureToAzureVmSyncedConfigDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.a2_a_replication_details import A2AReplicationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AReplicationDetails from a JSON string
a2_a_replication_details_instance = A2AReplicationDetails.from_json(json)
# print the JSON string representation of the object
print(A2AReplicationDetails.to_json())

# convert the object into a dict
a2_a_replication_details_dict = a2_a_replication_details_instance.to_dict()
# create an instance of A2AReplicationDetails from a dict
a2_a_replication_details_from_dict = A2AReplicationDetails.from_dict(a2_a_replication_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


