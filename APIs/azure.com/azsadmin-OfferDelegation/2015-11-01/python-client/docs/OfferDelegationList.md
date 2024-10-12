# OfferDelegationList

.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[OfferDelegation]**](OfferDelegation.md) | Array of usage aggregates. | [optional] 

## Example

```python
from openapi_client.models.offer_delegation_list import OfferDelegationList

# TODO update the JSON string below
json = "{}"
# create an instance of OfferDelegationList from a JSON string
offer_delegation_list_instance = OfferDelegationList.from_json(json)
# print the JSON string representation of the object
print(OfferDelegationList.to_json())

# convert the object into a dict
offer_delegation_list_dict = offer_delegation_list_instance.to_dict()
# create an instance of OfferDelegationList from a dict
offer_delegation_list_from_dict = OfferDelegationList.from_dict(offer_delegation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


