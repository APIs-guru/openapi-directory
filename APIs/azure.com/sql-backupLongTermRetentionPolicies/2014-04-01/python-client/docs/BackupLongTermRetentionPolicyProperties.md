# BackupLongTermRetentionPolicyProperties

The properties of a backup long term retention policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_services_backup_policy_resource_id** | **str** | The azure recovery services backup protection policy resource id | 
**state** | **str** | The status of the backup long term retention policy | 

## Example

```python
from openapi_client.models.backup_long_term_retention_policy_properties import BackupLongTermRetentionPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLongTermRetentionPolicyProperties from a JSON string
backup_long_term_retention_policy_properties_instance = BackupLongTermRetentionPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(BackupLongTermRetentionPolicyProperties.to_json())

# convert the object into a dict
backup_long_term_retention_policy_properties_dict = backup_long_term_retention_policy_properties_instance.to_dict()
# create an instance of BackupLongTermRetentionPolicyProperties from a dict
backup_long_term_retention_policy_properties_from_dict = BackupLongTermRetentionPolicyProperties.from_dict(backup_long_term_retention_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


