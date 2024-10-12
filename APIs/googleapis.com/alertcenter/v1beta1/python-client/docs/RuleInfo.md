# RuleInfo

Proto that contains rule information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | User provided name of the rule. | [optional] 
**resource_name** | **str** | Resource name that uniquely identifies the rule. | [optional] 

## Example

```python
from openapi_client.models.rule_info import RuleInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RuleInfo from a JSON string
rule_info_instance = RuleInfo.from_json(json)
# print the JSON string representation of the object
print(RuleInfo.to_json())

# convert the object into a dict
rule_info_dict = rule_info_instance.to_dict()
# create an instance of RuleInfo from a dict
rule_info_from_dict = RuleInfo.from_dict(rule_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


