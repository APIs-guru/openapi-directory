# PremierAddOnOfferCollection

Collection of premier add-on offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[PremierAddOnOffer]**](PremierAddOnOffer.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.premier_add_on_offer_collection import PremierAddOnOfferCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PremierAddOnOfferCollection from a JSON string
premier_add_on_offer_collection_instance = PremierAddOnOfferCollection.from_json(json)
# print the JSON string representation of the object
print(PremierAddOnOfferCollection.to_json())

# convert the object into a dict
premier_add_on_offer_collection_dict = premier_add_on_offer_collection_instance.to_dict()
# create an instance of PremierAddOnOfferCollection from a dict
premier_add_on_offer_collection_from_dict = PremierAddOnOfferCollection.from_dict(premier_add_on_offer_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


