# EligibleItem

A listing that is eligible for a seller-initiated offer to a buyer. Listings are identified by a listingId value that is generated and assigned by eBay when a seller lists an item using the Trading API. Note: The Negotiation API does not currently support listings that are managed with the Inventory API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listing_id** | **str** | The unique eBay-assigned ID for an eBay listing. A listingId is assigned by eBay when a seller creates a listing with the Trading API. | [optional] 

## Example

```python
from openapi_client.models.eligible_item import EligibleItem

# TODO update the JSON string below
json = "{}"
# create an instance of EligibleItem from a JSON string
eligible_item_instance = EligibleItem.from_json(json)
# print the JSON string representation of the object
print(EligibleItem.to_json())

# convert the object into a dict
eligible_item_dict = eligible_item_instance.to_dict()
# create an instance of EligibleItem from a dict
eligible_item_from_dict = EligibleItem.from_dict(eligible_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


