# OfferDetails

Offer details information related to a purchase line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_plan_id** | **str** | The base plan ID. Present for all base plan and offers. | [optional] 
**offer_id** | **str** | The offer ID. Only present for discounted offers. | [optional] 
**offer_tags** | **List[str]** | The latest offer tags associated with the offer. It includes tags inherited from the base plan. | [optional] 

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


