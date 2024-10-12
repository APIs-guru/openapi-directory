# OfferDetails

Represents a offer details item read from the gallery item package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **str** | Offer identifier. | [optional] 
**plans** | [**List[Plan]**](Plan.md) | List of plans available for the offer. | [optional] [readonly] 
**publisher_id** | **str** | Publisher identifier. | [optional] 

## Example

```python
from openapi_client.models.offer_details import OfferDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OfferDetails from a JSON string
offer_details_instance = OfferDetails.from_json(json)
# print the JSON string representation of the object
print(OfferDetails.to_json())

# convert the object into a dict
offer_details_dict = offer_details_instance.to_dict()
# create an instance of OfferDetails from a dict
offer_details_from_dict = OfferDetails.from_dict(offer_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


