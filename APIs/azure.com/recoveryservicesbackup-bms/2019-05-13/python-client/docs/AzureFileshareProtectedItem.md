# AzureFileshareProtectedItem

Azure File Share workload-specific backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_info** | [**AzureFileshareProtectedItemExtendedInfo**](AzureFileshareProtectedItemExtendedInfo.md) |  | [optional] 
**friendly_name** | **str** | Friendly name of the fileshare represented by this backup item. | [optional] 
**health_status** | **str** | backups running status for this backup item. | [optional] 
**last_backup_status** | **str** | Last backup operation status. Possible values: Healthy, Unhealthy. | [optional] 
**last_backup_time** | **datetime** | Timestamp of the last backup operation on this backup item. | [optional] 
**protection_state** | **str** | Backup state of this backup item. | [optional] 
**protection_status** | **str** | Backup status of this backup item. | [optional] 

## Example

```python
from openapi_client.models.azure_fileshare_protected_item import AzureFileshareProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileshareProtectedItem from a JSON string
azure_fileshare_protected_item_instance = AzureFileshareProtectedItem.from_json(json)
# print the JSON string representation of the object
print(AzureFileshareProtectedItem.to_json())

# convert the object into a dict
azure_fileshare_protected_item_dict = azure_fileshare_protected_item_instance.to_dict()
# create an instance of AzureFileshareProtectedItem from a dict
azure_fileshare_protected_item_from_dict = AzureFileshareProtectedItem.from_dict(azure_fileshare_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


