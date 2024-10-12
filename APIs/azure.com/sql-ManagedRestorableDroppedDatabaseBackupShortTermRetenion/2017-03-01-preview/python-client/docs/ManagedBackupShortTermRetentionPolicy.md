# ManagedBackupShortTermRetentionPolicy

A short term retention policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedBackupShortTermRetentionPolicyProperties**](ManagedBackupShortTermRetentionPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_backup_short_term_retention_policy import ManagedBackupShortTermRetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedBackupShortTermRetentionPolicy from a JSON string
managed_backup_short_term_retention_policy_instance = ManagedBackupShortTermRetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(ManagedBackupShortTermRetentionPolicy.to_json())

# convert the object into a dict
managed_backup_short_term_retention_policy_dict = managed_backup_short_term_retention_policy_instance.to_dict()
# create an instance of ManagedBackupShortTermRetentionPolicy from a dict
managed_backup_short_term_retention_policy_from_dict = ManagedBackupShortTermRetentionPolicy.from_dict(managed_backup_short_term_retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


