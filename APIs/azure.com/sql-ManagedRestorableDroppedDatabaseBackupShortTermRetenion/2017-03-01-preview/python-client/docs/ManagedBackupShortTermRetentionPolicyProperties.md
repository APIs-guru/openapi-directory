# ManagedBackupShortTermRetentionPolicyProperties

Properties of a short term retention policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_days** | **int** | The backup retention period in days. This is how many days Point-in-Time Restore will be supported. | [optional] 

## Example

```python
from openapi_client.models.managed_backup_short_term_retention_policy_properties import ManagedBackupShortTermRetentionPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedBackupShortTermRetentionPolicyProperties from a JSON string
managed_backup_short_term_retention_policy_properties_instance = ManagedBackupShortTermRetentionPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedBackupShortTermRetentionPolicyProperties.to_json())

# convert the object into a dict
managed_backup_short_term_retention_policy_properties_dict = managed_backup_short_term_retention_policy_properties_instance.to_dict()
# create an instance of ManagedBackupShortTermRetentionPolicyProperties from a dict
managed_backup_short_term_retention_policy_properties_from_dict = ManagedBackupShortTermRetentionPolicyProperties.from_dict(managed_backup_short_term_retention_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


