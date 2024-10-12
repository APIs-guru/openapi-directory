# ListSubscriptionOffersResponse

Response message for ListSubscriptionOffers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**subscription_offers** | [**List[SubscriptionOffer]**](SubscriptionOffer.md) | The subscription offers from the specified subscription. | [optional] 

## Example

```python
from openapi_client.models.list_subscription_offers_response import ListSubscriptionOffersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSubscriptionOffersResponse from a JSON string
list_subscription_offers_response_instance = ListSubscriptionOffersResponse.from_json(json)
# print the JSON string representation of the object
print(ListSubscriptionOffersResponse.to_json())

# convert the object into a dict
list_subscription_offers_response_dict = list_subscription_offers_response_instance.to_dict()
# create an instance of ListSubscriptionOffersResponse from a dict
list_subscription_offers_response_from_dict = ListSubscriptionOffersResponse.from_dict(list_subscription_offers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


