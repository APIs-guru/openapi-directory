# TargetingRuleScope

Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**specific_subscription_in_app** | **str** | The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app. | [optional] 

## Example

```python
from openapi_client.models.targeting_rule_scope import TargetingRuleScope

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingRuleScope from a JSON string
targeting_rule_scope_instance = TargetingRuleScope.from_json(json)
# print the JSON string representation of the object
print(TargetingRuleScope.to_json())

# convert the object into a dict
targeting_rule_scope_dict = targeting_rule_scope_instance.to_dict()
# create an instance of TargetingRuleScope from a dict
targeting_rule_scope_from_dict = TargetingRuleScope.from_dict(targeting_rule_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


