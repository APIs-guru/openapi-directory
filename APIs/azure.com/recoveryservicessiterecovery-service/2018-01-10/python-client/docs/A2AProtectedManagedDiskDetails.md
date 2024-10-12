# A2AProtectedManagedDiskDetails

A2A protected managed disk details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_pending_at_source_agent_in_mb** | **float** | The data pending at source virtual machine in MB. | [optional] 
**data_pending_in_staging_storage_account_in_mb** | **float** | The data pending for replication in MB at staging account. | [optional] 
**dek_key_vault_arm_id** | **str** | The KeyVault resource id for secret (BEK). | [optional] 
**disk_capacity_in_bytes** | **int** | The disk capacity in bytes. | [optional] 
**disk_id** | **str** | The managed disk Arm id. | [optional] 
**disk_name** | **str** | The disk name. | [optional] 
**disk_type** | **str** | The type of disk. | [optional] 
**is_disk_encrypted** | **bool** | A value indicating whether vm has encrypted os disk or not. | [optional] 
**is_disk_key_encrypted** | **bool** | A value indicating whether disk key got encrypted or not. | [optional] 
**kek_key_vault_arm_id** | **str** | The KeyVault resource id for key (KEK). | [optional] 
**key_identifier** | **str** | The key URL / identifier (KEK). | [optional] 
**monitoring_job_type** | **str** | The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property. | [optional] 
**monitoring_percentage_completion** | **int** | The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property. | [optional] 
**primary_staging_azure_storage_account_id** | **str** | The primary staging storage account. | [optional] 
**recovery_replica_disk_account_type** | **str** | The replica disk type. Its an optional value and will be same as source disk type if not user provided. | [optional] 
**recovery_replica_disk_id** | **str** | Recovery replica disk Arm Id. | [optional] 
**recovery_resource_group_id** | **str** | The recovery disk resource group Arm Id. | [optional] 
**recovery_target_disk_account_type** | **str** | The target disk type after failover. Its an optional value and will be same as source disk type if not user provided. | [optional] 
**recovery_target_disk_id** | **str** | Recovery target disk Arm Id. | [optional] 
**resync_required** | **bool** | A value indicating whether resync is required for this disk. | [optional] 
**secret_identifier** | **str** | The secret URL / identifier (BEK). | [optional] 

## Example

```python
from openapi_client.models.a2_a_protected_managed_disk_details import A2AProtectedManagedDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AProtectedManagedDiskDetails from a JSON string
a2_a_protected_managed_disk_details_instance = A2AProtectedManagedDiskDetails.from_json(json)
# print the JSON string representation of the object
print(A2AProtectedManagedDiskDetails.to_json())

# convert the object into a dict
a2_a_protected_managed_disk_details_dict = a2_a_protected_managed_disk_details_instance.to_dict()
# create an instance of A2AProtectedManagedDiskDetails from a dict
a2_a_protected_managed_disk_details_from_dict = A2AProtectedManagedDiskDetails.from_dict(a2_a_protected_managed_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


