# RuleSetVersionRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**current** | **bool** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**is_snapshot** | **bool** |  | [optional] 
**merged_rules_count** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**published_at** | **datetime** |  | [optional] 
**working** | **bool** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.rule_set_version_read import RuleSetVersionRead

# TODO update the JSON string below
json = "{}"
# create an instance of RuleSetVersionRead from a JSON string
rule_set_version_read_instance = RuleSetVersionRead.from_json(json)
# print the JSON string representation of the object
print(RuleSetVersionRead.to_json())

# convert the object into a dict
rule_set_version_read_dict = rule_set_version_read_instance.to_dict()
# create an instance of RuleSetVersionRead from a dict
rule_set_version_read_from_dict = RuleSetVersionRead.from_dict(rule_set_version_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


