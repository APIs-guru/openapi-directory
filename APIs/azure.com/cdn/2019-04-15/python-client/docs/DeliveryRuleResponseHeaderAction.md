# DeliveryRuleResponseHeaderAction

Defines the response header action for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**HeaderActionParameters**](HeaderActionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_response_header_action import DeliveryRuleResponseHeaderAction

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleResponseHeaderAction from a JSON string
delivery_rule_response_header_action_instance = DeliveryRuleResponseHeaderAction.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleResponseHeaderAction.to_json())

# convert the object into a dict
delivery_rule_response_header_action_dict = delivery_rule_response_header_action_instance.to_dict()
# create an instance of DeliveryRuleResponseHeaderAction from a dict
delivery_rule_response_header_action_from_dict = DeliveryRuleResponseHeaderAction.from_dict(delivery_rule_response_header_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


