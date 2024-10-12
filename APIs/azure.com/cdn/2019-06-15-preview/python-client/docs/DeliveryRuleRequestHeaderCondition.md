# DeliveryRuleRequestHeaderCondition

Defines the RequestHeader condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**RequestHeaderMatchConditionParameters**](RequestHeaderMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_request_header_condition import DeliveryRuleRequestHeaderCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleRequestHeaderCondition from a JSON string
delivery_rule_request_header_condition_instance = DeliveryRuleRequestHeaderCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleRequestHeaderCondition.to_json())

# convert the object into a dict
delivery_rule_request_header_condition_dict = delivery_rule_request_header_condition_instance.to_dict()
# create an instance of DeliveryRuleRequestHeaderCondition from a dict
delivery_rule_request_header_condition_from_dict = DeliveryRuleRequestHeaderCondition.from_dict(delivery_rule_request_header_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


