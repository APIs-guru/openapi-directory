# RuleNoId

A user-provided stream filtering rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | A tag meant for the labeling of user provided rules. | [optional] 
**value** | **str** | The filterlang value of the rule. | 

## Example

```python
from openapi_client.models.rule_no_id import RuleNoId

# TODO update the JSON string below
json = "{}"
# create an instance of RuleNoId from a JSON string
rule_no_id_instance = RuleNoId.from_json(json)
# print the JSON string representation of the object
print(RuleNoId.to_json())

# convert the object into a dict
rule_no_id_dict = rule_no_id_instance.to_dict()
# create an instance of RuleNoId from a dict
rule_no_id_from_dict = RuleNoId.from_dict(rule_no_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


