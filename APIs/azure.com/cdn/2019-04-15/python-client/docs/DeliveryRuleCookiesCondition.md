# DeliveryRuleCookiesCondition

Defines the Cookies condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**CookiesMatchConditionParameters**](CookiesMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_cookies_condition import DeliveryRuleCookiesCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleCookiesCondition from a JSON string
delivery_rule_cookies_condition_instance = DeliveryRuleCookiesCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleCookiesCondition.to_json())

# convert the object into a dict
delivery_rule_cookies_condition_dict = delivery_rule_cookies_condition_instance.to_dict()
# create an instance of DeliveryRuleCookiesCondition from a dict
delivery_rule_cookies_condition_from_dict = DeliveryRuleCookiesCondition.from_dict(delivery_rule_cookies_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


