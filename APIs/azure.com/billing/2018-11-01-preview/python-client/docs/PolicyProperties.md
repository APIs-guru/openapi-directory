# PolicyProperties

The properties of policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplace_purchases_allowed** | **bool** | The marketplacePurchasesAllowed flag. | [optional] 
**reservation_purchases_allowed** | **bool** | The reservationPurchasesAllowed flag. | [optional] 
**subscription_owner_can_view_charges** | **bool** | The subscriptionOwnerCanViewCharges flag. | [optional] 

## Example

```python
from openapi_client.models.policy_properties import PolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyProperties from a JSON string
policy_properties_instance = PolicyProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyProperties.to_json())

# convert the object into a dict
policy_properties_dict = policy_properties_instance.to_dict()
# create an instance of PolicyProperties from a dict
policy_properties_from_dict = PolicyProperties.from_dict(policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


