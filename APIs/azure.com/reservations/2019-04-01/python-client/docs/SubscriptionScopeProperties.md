# SubscriptionScopeProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scopes** | [**List[ScopeProperties]**](ScopeProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_scope_properties import SubscriptionScopeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionScopeProperties from a JSON string
subscription_scope_properties_instance = SubscriptionScopeProperties.from_json(json)
# print the JSON string representation of the object
print(SubscriptionScopeProperties.to_json())

# convert the object into a dict
subscription_scope_properties_dict = subscription_scope_properties_instance.to_dict()
# create an instance of SubscriptionScopeProperties from a dict
subscription_scope_properties_from_dict = SubscriptionScopeProperties.from_dict(subscription_scope_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


