# BackupPolicyProperties

The properties of the backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_policy_creation_type** | **str** | The backup policy creation type. Indicates whether this was created through SaaS or through StorSimple Snapshot Manager. | [optional] [readonly] 
**last_backup_time** | **datetime** | The time of the last backup for the backup policy. | [optional] [readonly] 
**next_backup_time** | **datetime** | The time of the next backup for the backup policy. | [optional] [readonly] 
**scheduled_backup_status** | **str** | Indicates whether at least one of the schedules in the backup policy is active or not. | [optional] [readonly] 
**schedules_count** | **int** | The count of schedules the backup policy contains. | [optional] [readonly] 
**ssm_host_name** | **str** | If the backup policy was created by StorSimple Snapshot Manager, then this field indicates the hostname of the StorSimple Snapshot Manager. | [optional] [readonly] 
**volume_ids** | **List[str]** | The path IDs of the volumes which are part of the backup policy. | 

## Example

```python
from openapi_client.models.backup_policy_properties import BackupPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupPolicyProperties from a JSON string
backup_policy_properties_instance = BackupPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(BackupPolicyProperties.to_json())

# convert the object into a dict
backup_policy_properties_dict = backup_policy_properties_instance.to_dict()
# create an instance of BackupPolicyProperties from a dict
backup_policy_properties_from_dict = BackupPolicyProperties.from_dict(backup_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


