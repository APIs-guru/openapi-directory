# BackupSuspensionInfo

Describes the backup suspension details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_suspended** | **bool** | Indicates whether periodic backup is suspended at this level or not. | [optional] 
**suspension_inherited_from** | [**BackupSuspensionScope**](BackupSuspensionScope.md) |  | [optional] 

## Example

```python
from openapi_client.models.backup_suspension_info import BackupSuspensionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupSuspensionInfo from a JSON string
backup_suspension_info_instance = BackupSuspensionInfo.from_json(json)
# print the JSON string representation of the object
print(BackupSuspensionInfo.to_json())

# convert the object into a dict
backup_suspension_info_dict = backup_suspension_info_instance.to_dict()
# create an instance of BackupSuspensionInfo from a dict
backup_suspension_info_from_dict = BackupSuspensionInfo.from_dict(backup_suspension_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


