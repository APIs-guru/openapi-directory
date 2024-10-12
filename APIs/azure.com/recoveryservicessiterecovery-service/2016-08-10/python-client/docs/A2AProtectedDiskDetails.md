# A2AProtectedDiskDetails

A2A protected disk details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_pending_at_source_agent_in_mb** | **float** | The data pending at source virtual machine in MB. | [optional] 
**data_pending_in_staging_storage_account_in_mb** | **float** | The data pending for replication in MB at staging account. | [optional] 
**disk_capacity_in_bytes** | **int** | The disk capacity in bytes. | [optional] 
**disk_name** | **str** | The disk name. | [optional] 
**disk_type** | **str** | The type of disk. | [optional] 
**disk_uri** | **str** | The disk uri. | [optional] 
**monitoring_job_type** | **str** | The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property. | [optional] 
**monitoring_percentage_completion** | **int** | The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property. | [optional] 
**primary_disk_azure_storage_account_id** | **str** | The primary disk storage account. | [optional] 
**primary_staging_azure_storage_account_id** | **str** | The primary staging storage account. | [optional] 
**recovery_azure_storage_account_id** | **str** | The recovery disk storage account. | [optional] 
**recovery_disk_uri** | **str** | Recovery disk uri. | [optional] 
**resync_required** | **bool** | A value indicating whether resync is required for this disk. | [optional] 

## Example

```python
from openapi_client.models.a2_a_protected_disk_details import A2AProtectedDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AProtectedDiskDetails from a JSON string
a2_a_protected_disk_details_instance = A2AProtectedDiskDetails.from_json(json)
# print the JSON string representation of the object
print(A2AProtectedDiskDetails.to_json())

# convert the object into a dict
a2_a_protected_disk_details_dict = a2_a_protected_disk_details_instance.to_dict()
# create an instance of A2AProtectedDiskDetails from a dict
a2_a_protected_disk_details_from_dict = A2AProtectedDiskDetails.from_dict(a2_a_protected_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


