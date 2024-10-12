# InMageAzureV2ProtectedDiskDetails

InMageAzureV2 protected disk details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_capacity_in_bytes** | **int** | The disk capacity in bytes. | [optional] 
**disk_id** | **str** | The disk id. | [optional] 
**disk_name** | **str** | The disk name. | [optional] 
**disk_resized** | **str** | A value indicating whether disk is resized. | [optional] 
**file_system_capacity_in_bytes** | **int** | The disk file system capacity in bytes. | [optional] 
**health_error_code** | **str** | The health error code for the disk. | [optional] 
**last_rpo_calculated_time** | **datetime** | The last RPO calculated time. | [optional] 
**protection_stage** | **str** | The protection stage. | [optional] 
**ps_data_in_mega_bytes** | **float** | The PS data transit in MB. | [optional] 
**resync_duration_in_seconds** | **int** | The resync duration in seconds. | [optional] 
**resync_progress_percentage** | **int** | The resync progress percentage. | [optional] 
**resync_required** | **str** | A value indicating whether resync is required for this disk. | [optional] 
**rpo_in_seconds** | **int** | The RPO in seconds. | [optional] 
**source_data_in_mega_bytes** | **float** | The source data transit in MB. | [optional] 
**target_data_in_mega_bytes** | **float** | The target data transit in MB. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_protected_disk_details import InMageAzureV2ProtectedDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2ProtectedDiskDetails from a JSON string
in_mage_azure_v2_protected_disk_details_instance = InMageAzureV2ProtectedDiskDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2ProtectedDiskDetails.to_json())

# convert the object into a dict
in_mage_azure_v2_protected_disk_details_dict = in_mage_azure_v2_protected_disk_details_instance.to_dict()
# create an instance of InMageAzureV2ProtectedDiskDetails from a dict
in_mage_azure_v2_protected_disk_details_from_dict = InMageAzureV2ProtectedDiskDetails.from_dict(in_mage_azure_v2_protected_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


