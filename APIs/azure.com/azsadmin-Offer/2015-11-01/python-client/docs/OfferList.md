# OfferList

List of public offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[Offer]**](Offer.md) | List of public offers. | [optional] 

## Example

```python
from openapi_client.models.offer_list import OfferList

# TODO update the JSON string below
json = "{}"
# create an instance of OfferList from a JSON string
offer_list_instance = OfferList.from_json(json)
# print the JSON string representation of the object
print(OfferList.to_json())

# convert the object into a dict
offer_list_dict = offer_list_instance.to_dict()
# create an instance of OfferList from a dict
offer_list_from_dict = OfferList.from_dict(offer_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


