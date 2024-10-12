# MabFileFolderProtectedItemExtendedInfo

Additional information for the backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_refreshed_at** | **datetime** | The last day and time the agent synced with the service. | [optional] 
**oldest_recovery_point** | **datetime** | The oldest backup copy available. | [optional] 
**recovery_point_count** | **int** | The number of backup copies associated with the backup item. | [optional] 

## Example

```python
from openapi_client.models.mab_file_folder_protected_item_extended_info import MabFileFolderProtectedItemExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MabFileFolderProtectedItemExtendedInfo from a JSON string
mab_file_folder_protected_item_extended_info_instance = MabFileFolderProtectedItemExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(MabFileFolderProtectedItemExtendedInfo.to_json())

# convert the object into a dict
mab_file_folder_protected_item_extended_info_dict = mab_file_folder_protected_item_extended_info_instance.to_dict()
# create an instance of MabFileFolderProtectedItemExtendedInfo from a dict
mab_file_folder_protected_item_extended_info_from_dict = MabFileFolderProtectedItemExtendedInfo.from_dict(mab_file_folder_protected_item_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


