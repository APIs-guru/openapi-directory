# BackupManagementUsageList

Backup management usage for vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BackupManagementUsage]**](BackupManagementUsage.md) | The list of backup management usages for the given vault. | [optional] 

## Example

```python
from openapi_client.models.backup_management_usage_list import BackupManagementUsageList

# TODO update the JSON string below
json = "{}"
# create an instance of BackupManagementUsageList from a JSON string
backup_management_usage_list_instance = BackupManagementUsageList.from_json(json)
# print the JSON string representation of the object
print(BackupManagementUsageList.to_json())

# convert the object into a dict
backup_management_usage_list_dict = backup_management_usage_list_instance.to_dict()
# create an instance of BackupManagementUsageList from a dict
backup_management_usage_list_from_dict = BackupManagementUsageList.from_dict(backup_management_usage_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


