# BatchUpdateSubscriptionOffersResponse

Response message for BatchUpdateSubscriptionOffers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_offers** | [**List[SubscriptionOffer]**](SubscriptionOffer.md) | The updated subscription offers list. | [optional] 

## Example

```python
from openapi_client.models.batch_update_subscription_offers_response import BatchUpdateSubscriptionOffersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateSubscriptionOffersResponse from a JSON string
batch_update_subscription_offers_response_instance = BatchUpdateSubscriptionOffersResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateSubscriptionOffersResponse.to_json())

# convert the object into a dict
batch_update_subscription_offers_response_dict = batch_update_subscription_offers_response_instance.to_dict()
# create an instance of BatchUpdateSubscriptionOffersResponse from a dict
batch_update_subscription_offers_response_from_dict = BatchUpdateSubscriptionOffersResponse.from_dict(batch_update_subscription_offers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


