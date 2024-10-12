# DeliveryRuleQueryStringCondition

Defines the QueryString condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**QueryStringMatchConditionParameters**](QueryStringMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_query_string_condition import DeliveryRuleQueryStringCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleQueryStringCondition from a JSON string
delivery_rule_query_string_condition_instance = DeliveryRuleQueryStringCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleQueryStringCondition.to_json())

# convert the object into a dict
delivery_rule_query_string_condition_dict = delivery_rule_query_string_condition_instance.to_dict()
# create an instance of DeliveryRuleQueryStringCondition from a dict
delivery_rule_query_string_condition_from_dict = DeliveryRuleQueryStringCondition.from_dict(delivery_rule_query_string_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


