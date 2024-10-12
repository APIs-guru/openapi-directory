# RetentionRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**every_seconds** | **int** | Duration in seconds for how long data will be kept in the database. 0 means infinite. | 
**shard_group_duration_seconds** | **int** | Shard duration measured in seconds. | [optional] 
**type** | **str** |  | [default to 'expire']

## Example

```python
from openapi_client.models.retention_rule import RetentionRule

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionRule from a JSON string
retention_rule_instance = RetentionRule.from_json(json)
# print the JSON string representation of the object
print(RetentionRule.to_json())

# convert the object into a dict
retention_rule_dict = retention_rule_instance.to_dict()
# create an instance of RetentionRule from a dict
retention_rule_from_dict = RetentionRule.from_dict(retention_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


