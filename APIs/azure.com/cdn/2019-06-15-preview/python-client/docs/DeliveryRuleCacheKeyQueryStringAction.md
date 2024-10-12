# DeliveryRuleCacheKeyQueryStringAction

Defines the cache-key query string action for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**CacheKeyQueryStringActionParameters**](CacheKeyQueryStringActionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_cache_key_query_string_action import DeliveryRuleCacheKeyQueryStringAction

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleCacheKeyQueryStringAction from a JSON string
delivery_rule_cache_key_query_string_action_instance = DeliveryRuleCacheKeyQueryStringAction.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleCacheKeyQueryStringAction.to_json())

# convert the object into a dict
delivery_rule_cache_key_query_string_action_dict = delivery_rule_cache_key_query_string_action_instance.to_dict()
# create an instance of DeliveryRuleCacheKeyQueryStringAction from a dict
delivery_rule_cache_key_query_string_action_from_dict = DeliveryRuleCacheKeyQueryStringAction.from_dict(delivery_rule_cache_key_query_string_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


