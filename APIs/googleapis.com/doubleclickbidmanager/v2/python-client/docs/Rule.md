# Rule

A Rule defines a name, and a boolean expression in [conjunctive normal form] (http://mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be applied to a path event to determine if that name should be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disjunctive_match_statements** | [**List[DisjunctiveMatchStatement]**](DisjunctiveMatchStatement.md) | DisjunctiveMatchStatements within a Rule. DisjunctiveMatchStatement OR&#39;s all contained filters. | [optional] 
**name** | **str** | Rule name. | [optional] 

## Example

```python
from openapi_client.models.rule import Rule

# TODO update the JSON string below
json = "{}"
# create an instance of Rule from a JSON string
rule_instance = Rule.from_json(json)
# print the JSON string representation of the object
print(Rule.to_json())

# convert the object into a dict
rule_dict = rule_instance.to_dict()
# create an instance of Rule from a dict
rule_from_dict = Rule.from_dict(rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


