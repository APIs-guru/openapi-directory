# DeliveryRuleRequestUriCondition

Defines the RequestUri condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**RequestUriMatchConditionParameters**](RequestUriMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_request_uri_condition import DeliveryRuleRequestUriCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleRequestUriCondition from a JSON string
delivery_rule_request_uri_condition_instance = DeliveryRuleRequestUriCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleRequestUriCondition.to_json())

# convert the object into a dict
delivery_rule_request_uri_condition_dict = delivery_rule_request_uri_condition_instance.to_dict()
# create an instance of DeliveryRuleRequestUriCondition from a dict
delivery_rule_request_uri_condition_from_dict = DeliveryRuleRequestUriCondition.from_dict(delivery_rule_request_uri_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


