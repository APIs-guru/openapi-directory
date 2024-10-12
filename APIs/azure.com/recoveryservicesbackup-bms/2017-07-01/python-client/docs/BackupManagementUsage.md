# BackupManagementUsage

Backup management usages of a vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | Current value of usage. | [optional] 
**limit** | **int** | Limit of usage. | [optional] 
**name** | [**NameInfo**](NameInfo.md) |  | [optional] 
**next_reset_time** | **datetime** | Next reset time of usage. | [optional] 
**quota_period** | **str** | Quota period of usage. | [optional] 
**unit** | **str** | Unit of the usage. | [optional] 

## Example

```python
from openapi_client.models.backup_management_usage import BackupManagementUsage

# TODO update the JSON string below
json = "{}"
# create an instance of BackupManagementUsage from a JSON string
backup_management_usage_instance = BackupManagementUsage.from_json(json)
# print the JSON string representation of the object
print(BackupManagementUsage.to_json())

# convert the object into a dict
backup_management_usage_dict = backup_management_usage_instance.to_dict()
# create an instance of BackupManagementUsage from a dict
backup_management_usage_from_dict = BackupManagementUsage.from_dict(backup_management_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


