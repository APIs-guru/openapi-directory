# BackupLongTermRetentionPolicy

A long term retention policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LongTermRetentionPolicyProperties**](LongTermRetentionPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_long_term_retention_policy import BackupLongTermRetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLongTermRetentionPolicy from a JSON string
backup_long_term_retention_policy_instance = BackupLongTermRetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(BackupLongTermRetentionPolicy.to_json())

# convert the object into a dict
backup_long_term_retention_policy_dict = backup_long_term_retention_policy_instance.to_dict()
# create an instance of BackupLongTermRetentionPolicy from a dict
backup_long_term_retention_policy_from_dict = BackupLongTermRetentionPolicy.from_dict(backup_long_term_retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


