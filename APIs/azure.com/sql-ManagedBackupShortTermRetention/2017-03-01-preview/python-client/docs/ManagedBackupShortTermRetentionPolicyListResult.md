# ManagedBackupShortTermRetentionPolicyListResult

A list of short term retention policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ManagedBackupShortTermRetentionPolicy]**](ManagedBackupShortTermRetentionPolicy.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_backup_short_term_retention_policy_list_result import ManagedBackupShortTermRetentionPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedBackupShortTermRetentionPolicyListResult from a JSON string
managed_backup_short_term_retention_policy_list_result_instance = ManagedBackupShortTermRetentionPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedBackupShortTermRetentionPolicyListResult.to_json())

# convert the object into a dict
managed_backup_short_term_retention_policy_list_result_dict = managed_backup_short_term_retention_policy_list_result_instance.to_dict()
# create an instance of ManagedBackupShortTermRetentionPolicyListResult from a dict
managed_backup_short_term_retention_policy_list_result_from_dict = ManagedBackupShortTermRetentionPolicyListResult.from_dict(managed_backup_short_term_retention_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


