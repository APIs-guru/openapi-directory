# OfferListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of offer list results if there are any. | [optional] 
**value** | [**List[Offer]**](Offer.md) |  | [optional] 

## Example

```python
from openapi_client.models.offer_list_response import OfferListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferListResponse from a JSON string
offer_list_response_instance = OfferListResponse.from_json(json)
# print the JSON string representation of the object
print(OfferListResponse.to_json())

# convert the object into a dict
offer_list_response_dict = offer_list_response_instance.to_dict()
# create an instance of OfferListResponse from a dict
offer_list_response_from_dict = OfferListResponse.from_dict(offer_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


