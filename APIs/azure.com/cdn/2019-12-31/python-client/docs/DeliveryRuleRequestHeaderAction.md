# DeliveryRuleRequestHeaderAction

Defines the request header action for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**HeaderActionParameters**](HeaderActionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_request_header_action import DeliveryRuleRequestHeaderAction

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleRequestHeaderAction from a JSON string
delivery_rule_request_header_action_instance = DeliveryRuleRequestHeaderAction.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleRequestHeaderAction.to_json())

# convert the object into a dict
delivery_rule_request_header_action_dict = delivery_rule_request_header_action_instance.to_dict()
# create an instance of DeliveryRuleRequestHeaderAction from a dict
delivery_rule_request_header_action_from_dict = DeliveryRuleRequestHeaderAction.from_dict(delivery_rule_request_header_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


