# DelegatedProviderOffer

The delegated provider offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DelegatedProviderOfferProperties**](DelegatedProviderOfferProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.delegated_provider_offer import DelegatedProviderOffer

# TODO update the JSON string below
json = "{}"
# create an instance of DelegatedProviderOffer from a JSON string
delegated_provider_offer_instance = DelegatedProviderOffer.from_json(json)
# print the JSON string representation of the object
print(DelegatedProviderOffer.to_json())

# convert the object into a dict
delegated_provider_offer_dict = delegated_provider_offer_instance.to_dict()
# create an instance of DelegatedProviderOffer from a dict
delegated_provider_offer_from_dict = DelegatedProviderOffer.from_dict(delegated_provider_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


