# PatchRetentionRule

Updates to a rule to expire or retain data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**every_seconds** | **int** | Duration in seconds for how long data will be kept in the database. 0 means infinite. | [optional] 
**shard_group_duration_seconds** | **int** | Shard duration measured in seconds. | [optional] 
**type** | **str** |  | [default to 'expire']

## Example

```python
from openapi_client.models.patch_retention_rule import PatchRetentionRule

# TODO update the JSON string below
json = "{}"
# create an instance of PatchRetentionRule from a JSON string
patch_retention_rule_instance = PatchRetentionRule.from_json(json)
# print the JSON string representation of the object
print(PatchRetentionRule.to_json())

# convert the object into a dict
patch_retention_rule_dict = patch_retention_rule_instance.to_dict()
# create an instance of PatchRetentionRule from a dict
patch_retention_rule_from_dict = PatchRetentionRule.from_dict(patch_retention_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


