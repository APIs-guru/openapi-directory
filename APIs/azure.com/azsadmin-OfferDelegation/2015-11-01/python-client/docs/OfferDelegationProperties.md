# OfferDelegationProperties

Properties for an offer delegation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **str** | Identifier of the subscription receiving the delegated offer. | [optional] 

## Example

```python
from openapi_client.models.offer_delegation_properties import OfferDelegationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OfferDelegationProperties from a JSON string
offer_delegation_properties_instance = OfferDelegationProperties.from_json(json)
# print the JSON string representation of the object
print(OfferDelegationProperties.to_json())

# convert the object into a dict
offer_delegation_properties_dict = offer_delegation_properties_instance.to_dict()
# create an instance of OfferDelegationProperties from a dict
offer_delegation_properties_from_dict = OfferDelegationProperties.from_dict(offer_delegation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


