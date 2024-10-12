# BooleanRule

A rule that may or may not match, depending on the condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**BooleanCondition**](BooleanCondition.md) |  | [optional] 
**format** | [**CellFormat**](CellFormat.md) |  | [optional] 

## Example

```python
from openapi_client.models.boolean_rule import BooleanRule

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanRule from a JSON string
boolean_rule_instance = BooleanRule.from_json(json)
# print the JSON string representation of the object
print(BooleanRule.to_json())

# convert the object into a dict
boolean_rule_dict = boolean_rule_instance.to_dict()
# create an instance of BooleanRule from a dict
boolean_rule_from_dict = BooleanRule.from_dict(boolean_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


