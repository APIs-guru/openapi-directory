# BackupShortTermRetentionPolicyListResult

A list of short term retention policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[BackupShortTermRetentionPolicy]**](BackupShortTermRetentionPolicy.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_short_term_retention_policy_list_result import BackupShortTermRetentionPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BackupShortTermRetentionPolicyListResult from a JSON string
backup_short_term_retention_policy_list_result_instance = BackupShortTermRetentionPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(BackupShortTermRetentionPolicyListResult.to_json())

# convert the object into a dict
backup_short_term_retention_policy_list_result_dict = backup_short_term_retention_policy_list_result_instance.to_dict()
# create an instance of BackupShortTermRetentionPolicyListResult from a dict
backup_short_term_retention_policy_list_result_from_dict = BackupShortTermRetentionPolicyListResult.from_dict(backup_short_term_retention_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


