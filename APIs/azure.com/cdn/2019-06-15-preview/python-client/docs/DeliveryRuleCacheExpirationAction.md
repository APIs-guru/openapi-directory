# DeliveryRuleCacheExpirationAction

Defines the cache expiration action for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**CacheExpirationActionParameters**](CacheExpirationActionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_cache_expiration_action import DeliveryRuleCacheExpirationAction

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleCacheExpirationAction from a JSON string
delivery_rule_cache_expiration_action_instance = DeliveryRuleCacheExpirationAction.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleCacheExpirationAction.to_json())

# convert the object into a dict
delivery_rule_cache_expiration_action_dict = delivery_rule_cache_expiration_action_instance.to_dict()
# create an instance of DeliveryRuleCacheExpirationAction from a dict
delivery_rule_cache_expiration_action_from_dict = DeliveryRuleCacheExpirationAction.from_dict(delivery_rule_cache_expiration_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


