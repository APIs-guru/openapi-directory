# BackupList

List of backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[Backup]**](Backup.md) | List of backups. | [optional] 

## Example

```python
from openapi_client.models.backup_list import BackupList

# TODO update the JSON string below
json = "{}"
# create an instance of BackupList from a JSON string
backup_list_instance = BackupList.from_json(json)
# print the JSON string representation of the object
print(BackupList.to_json())

# convert the object into a dict
backup_list_dict = backup_list_instance.to_dict()
# create an instance of BackupList from a dict
backup_list_from_dict = BackupList.from_dict(backup_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


