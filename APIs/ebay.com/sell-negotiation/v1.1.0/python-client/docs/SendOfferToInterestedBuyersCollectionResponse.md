# SendOfferToInterestedBuyersCollectionResponse

The response object returned from a SendOfferToInterestedBuyers request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offers** | [**List[Offer]**](Offer.md) | The offers container returns a list of the offers sent to buyers who have shown an interest in listings included in the offer. | [optional] 

## Example

```python
from openapi_client.models.send_offer_to_interested_buyers_collection_response import SendOfferToInterestedBuyersCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SendOfferToInterestedBuyersCollectionResponse from a JSON string
send_offer_to_interested_buyers_collection_response_instance = SendOfferToInterestedBuyersCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(SendOfferToInterestedBuyersCollectionResponse.to_json())

# convert the object into a dict
send_offer_to_interested_buyers_collection_response_dict = send_offer_to_interested_buyers_collection_response_instance.to_dict()
# create an instance of SendOfferToInterestedBuyersCollectionResponse from a dict
send_offer_to_interested_buyers_collection_response_from_dict = SendOfferToInterestedBuyersCollectionResponse.from_dict(send_offer_to_interested_buyers_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


