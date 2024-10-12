# DeliveryRuleHttpVersionCondition

Defines the HttpVersion condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**HttpVersionMatchConditionParameters**](HttpVersionMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_http_version_condition import DeliveryRuleHttpVersionCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleHttpVersionCondition from a JSON string
delivery_rule_http_version_condition_instance = DeliveryRuleHttpVersionCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleHttpVersionCondition.to_json())

# convert the object into a dict
delivery_rule_http_version_condition_dict = delivery_rule_http_version_condition_instance.to_dict()
# create an instance of DeliveryRuleHttpVersionCondition from a dict
delivery_rule_http_version_condition_from_dict = DeliveryRuleHttpVersionCondition.from_dict(delivery_rule_http_version_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


