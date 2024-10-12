# DPMProtectedItemExtendedInfo

Additional information of DPM Protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_storage_used_in_bytes** | **str** | Used Disk storage in bytes. | [optional] 
**is_collocated** | **bool** | To check if backup item is collocated. | [optional] 
**is_present_on_cloud** | **bool** | To check if backup item is cloud protected. | [optional] 
**last_backup_status** | **str** | Last backup status information on backup item. | [optional] 
**last_refreshed_at** | **datetime** | Last refresh time on backup item. | [optional] 
**oldest_recovery_point** | **datetime** | Oldest cloud recovery point time. | [optional] 
**on_premise_latest_recovery_point** | **datetime** | latest disk recovery point time. | [optional] 
**on_premise_oldest_recovery_point** | **datetime** | Oldest disk recovery point time. | [optional] 
**on_premise_recovery_point_count** | **int** | disk recovery point count. | [optional] 
**protectable_object_load_path** | **Dict[str, str]** | Attribute to provide information on various DBs. | [optional] 
**protected** | **bool** | To check if backup item is disk protected. | [optional] 
**protection_group_name** | **str** | Protection group name of the backup item. | [optional] 
**recovery_point_count** | **int** | cloud recovery point count. | [optional] 
**total_disk_storage_size_in_bytes** | **str** | total Disk storage in bytes. | [optional] 

## Example

```python
from openapi_client.models.dpm_protected_item_extended_info import DPMProtectedItemExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DPMProtectedItemExtendedInfo from a JSON string
dpm_protected_item_extended_info_instance = DPMProtectedItemExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(DPMProtectedItemExtendedInfo.to_json())

# convert the object into a dict
dpm_protected_item_extended_info_dict = dpm_protected_item_extended_info_instance.to_dict()
# create an instance of DPMProtectedItemExtendedInfo from a dict
dpm_protected_item_extended_info_from_dict = DPMProtectedItemExtendedInfo.from_dict(dpm_protected_item_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


