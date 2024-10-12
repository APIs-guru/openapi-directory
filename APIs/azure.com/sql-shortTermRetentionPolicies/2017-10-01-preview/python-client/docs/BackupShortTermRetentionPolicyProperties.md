# BackupShortTermRetentionPolicyProperties

Properties of a short term retention policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_days** | **int** | The backup retention period in days. This is how many days Point-in-Time Restore will be supported. | [optional] 

## Example

```python
from openapi_client.models.backup_short_term_retention_policy_properties import BackupShortTermRetentionPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupShortTermRetentionPolicyProperties from a JSON string
backup_short_term_retention_policy_properties_instance = BackupShortTermRetentionPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(BackupShortTermRetentionPolicyProperties.to_json())

# convert the object into a dict
backup_short_term_retention_policy_properties_dict = backup_short_term_retention_policy_properties_instance.to_dict()
# create an instance of BackupShortTermRetentionPolicyProperties from a dict
backup_short_term_retention_policy_properties_from_dict = BackupShortTermRetentionPolicyProperties.from_dict(backup_short_term_retention_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


