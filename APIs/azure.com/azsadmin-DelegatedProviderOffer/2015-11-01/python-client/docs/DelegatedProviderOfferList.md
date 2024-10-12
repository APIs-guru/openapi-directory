# DelegatedProviderOfferList

List of delegated provider offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[DelegatedProviderOffer]**](DelegatedProviderOffer.md) | Array of delegated provider offers. | [optional] 

## Example

```python
from openapi_client.models.delegated_provider_offer_list import DelegatedProviderOfferList

# TODO update the JSON string below
json = "{}"
# create an instance of DelegatedProviderOfferList from a JSON string
delegated_provider_offer_list_instance = DelegatedProviderOfferList.from_json(json)
# print the JSON string representation of the object
print(DelegatedProviderOfferList.to_json())

# convert the object into a dict
delegated_provider_offer_list_dict = delegated_provider_offer_list_instance.to_dict()
# create an instance of DelegatedProviderOfferList from a dict
delegated_provider_offer_list_from_dict = DelegatedProviderOfferList.from_dict(delegated_provider_offer_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


