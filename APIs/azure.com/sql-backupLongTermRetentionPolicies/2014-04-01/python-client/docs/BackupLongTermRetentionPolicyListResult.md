# BackupLongTermRetentionPolicyListResult

Represents the response to a list long-term retention policies request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BackupLongTermRetentionPolicy]**](BackupLongTermRetentionPolicy.md) | The list of long-term retention policies in the database. | 

## Example

```python
from openapi_client.models.backup_long_term_retention_policy_list_result import BackupLongTermRetentionPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLongTermRetentionPolicyListResult from a JSON string
backup_long_term_retention_policy_list_result_instance = BackupLongTermRetentionPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(BackupLongTermRetentionPolicyListResult.to_json())

# convert the object into a dict
backup_long_term_retention_policy_list_result_dict = backup_long_term_retention_policy_list_result_instance.to_dict()
# create an instance of BackupLongTermRetentionPolicyListResult from a dict
backup_long_term_retention_policy_list_result_from_dict = BackupLongTermRetentionPolicyListResult.from_dict(backup_long_term_retention_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


