# MabFileFolderProtectedItem

This is a file or folder workload-specific backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computer_name** | **str** | The name of the computer associated with this backup item. | [optional] 
**extended_info** | [**MabFileFolderProtectedItemExtendedInfo**](MabFileFolderProtectedItemExtendedInfo.md) |  | [optional] 
**friendly_name** | **str** | The friendly name of this backup item. | [optional] 
**is_scheduled_for_deferred_delete** | **bool** |  | [optional] 
**last_backup_status** | **str** | The status of last backup operation. | [optional] 
**protection_state** | **str** | The states for this property are: Protected, ProtectionStopped, IRPending, or ProtectionError. | [optional] 

## Example

```python
from openapi_client.models.mab_file_folder_protected_item import MabFileFolderProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of MabFileFolderProtectedItem from a JSON string
mab_file_folder_protected_item_instance = MabFileFolderProtectedItem.from_json(json)
# print the JSON string representation of the object
print(MabFileFolderProtectedItem.to_json())

# convert the object into a dict
mab_file_folder_protected_item_dict = mab_file_folder_protected_item_instance.to_dict()
# create an instance of MabFileFolderProtectedItem from a dict
mab_file_folder_protected_item_from_dict = MabFileFolderProtectedItem.from_dict(mab_file_folder_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


