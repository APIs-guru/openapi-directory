# BatchGetSubscriptionOffersResponse

Response message for BatchGetSubscriptionOffers endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_offers** | [**List[SubscriptionOffer]**](SubscriptionOffer.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_get_subscription_offers_response import BatchGetSubscriptionOffersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetSubscriptionOffersResponse from a JSON string
batch_get_subscription_offers_response_instance = BatchGetSubscriptionOffersResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetSubscriptionOffersResponse.to_json())

# convert the object into a dict
batch_get_subscription_offers_response_dict = batch_get_subscription_offers_response_instance.to_dict()
# create an instance of BatchGetSubscriptionOffersResponse from a dict
batch_get_subscription_offers_response_from_dict = BatchGetSubscriptionOffersResponse.from_dict(batch_get_subscription_offers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


