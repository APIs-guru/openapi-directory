# DeliveryRuleRemoteAddressCondition

Defines the RemoteAddress condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**RemoteAddressMatchConditionParameters**](RemoteAddressMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_remote_address_condition import DeliveryRuleRemoteAddressCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleRemoteAddressCondition from a JSON string
delivery_rule_remote_address_condition_instance = DeliveryRuleRemoteAddressCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleRemoteAddressCondition.to_json())

# convert the object into a dict
delivery_rule_remote_address_condition_dict = delivery_rule_remote_address_condition_instance.to_dict()
# create an instance of DeliveryRuleRemoteAddressCondition from a dict
delivery_rule_remote_address_condition_from_dict = DeliveryRuleRemoteAddressCondition.from_dict(delivery_rule_remote_address_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


