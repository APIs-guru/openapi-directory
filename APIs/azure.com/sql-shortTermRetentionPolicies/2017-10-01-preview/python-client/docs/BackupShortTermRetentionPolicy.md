# BackupShortTermRetentionPolicy

A short term retention policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupShortTermRetentionPolicyProperties**](BackupShortTermRetentionPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_short_term_retention_policy import BackupShortTermRetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of BackupShortTermRetentionPolicy from a JSON string
backup_short_term_retention_policy_instance = BackupShortTermRetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(BackupShortTermRetentionPolicy.to_json())

# convert the object into a dict
backup_short_term_retention_policy_dict = backup_short_term_retention_policy_instance.to_dict()
# create an instance of BackupShortTermRetentionPolicy from a dict
backup_short_term_retention_policy_from_dict = BackupShortTermRetentionPolicy.from_dict(backup_short_term_retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


