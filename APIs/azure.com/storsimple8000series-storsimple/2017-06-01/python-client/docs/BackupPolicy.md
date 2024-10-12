# BackupPolicy

The backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupPolicyProperties**](BackupPolicyProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_policy import BackupPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of BackupPolicy from a JSON string
backup_policy_instance = BackupPolicy.from_json(json)
# print the JSON string representation of the object
print(BackupPolicy.to_json())

# convert the object into a dict
backup_policy_dict = backup_policy_instance.to_dict()
# create an instance of BackupPolicy from a dict
backup_policy_from_dict = BackupPolicy.from_dict(backup_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


