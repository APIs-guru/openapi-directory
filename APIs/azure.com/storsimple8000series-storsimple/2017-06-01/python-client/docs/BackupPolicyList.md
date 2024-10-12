# BackupPolicyList

The collection of backup policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BackupPolicy]**](BackupPolicy.md) | The value. | 

## Example

```python
from openapi_client.models.backup_policy_list import BackupPolicyList

# TODO update the JSON string below
json = "{}"
# create an instance of BackupPolicyList from a JSON string
backup_policy_list_instance = BackupPolicyList.from_json(json)
# print the JSON string representation of the object
print(BackupPolicyList.to_json())

# convert the object into a dict
backup_policy_list_dict = backup_policy_list_instance.to_dict()
# create an instance of BackupPolicyList from a dict
backup_policy_list_from_dict = BackupPolicyList.from_dict(backup_policy_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


