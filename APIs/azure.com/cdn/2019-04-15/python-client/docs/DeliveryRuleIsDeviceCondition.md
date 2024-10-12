# DeliveryRuleIsDeviceCondition

Defines the IsDevice condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**IsDeviceMatchConditionParameters**](IsDeviceMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_is_device_condition import DeliveryRuleIsDeviceCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleIsDeviceCondition from a JSON string
delivery_rule_is_device_condition_instance = DeliveryRuleIsDeviceCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleIsDeviceCondition.to_json())

# convert the object into a dict
delivery_rule_is_device_condition_dict = delivery_rule_is_device_condition_instance.to_dict()
# create an instance of DeliveryRuleIsDeviceCondition from a dict
delivery_rule_is_device_condition_from_dict = DeliveryRuleIsDeviceCondition.from_dict(delivery_rule_is_device_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


