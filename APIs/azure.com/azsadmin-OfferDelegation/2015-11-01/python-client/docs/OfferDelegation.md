# OfferDelegation

Offer delegation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OfferDelegationProperties**](OfferDelegationProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.offer_delegation import OfferDelegation

# TODO update the JSON string below
json = "{}"
# create an instance of OfferDelegation from a JSON string
offer_delegation_instance = OfferDelegation.from_json(json)
# print the JSON string representation of the object
print(OfferDelegation.to_json())

# convert the object into a dict
offer_delegation_dict = offer_delegation_instance.to_dict()
# create an instance of OfferDelegation from a dict
offer_delegation_from_dict = OfferDelegation.from_dict(offer_delegation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


