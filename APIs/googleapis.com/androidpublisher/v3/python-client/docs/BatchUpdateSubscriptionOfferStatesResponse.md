# BatchUpdateSubscriptionOfferStatesResponse

Response message for BatchUpdateSubscriptionOfferStates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_offers** | [**List[SubscriptionOffer]**](SubscriptionOffer.md) | The updated subscription offers list. | [optional] 

## Example

```python
from openapi_client.models.batch_update_subscription_offer_states_response import BatchUpdateSubscriptionOfferStatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateSubscriptionOfferStatesResponse from a JSON string
batch_update_subscription_offer_states_response_instance = BatchUpdateSubscriptionOfferStatesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateSubscriptionOfferStatesResponse.to_json())

# convert the object into a dict
batch_update_subscription_offer_states_response_dict = batch_update_subscription_offer_states_response_instance.to_dict()
# create an instance of BatchUpdateSubscriptionOfferStatesResponse from a dict
batch_update_subscription_offer_states_response_from_dict = BatchUpdateSubscriptionOfferStatesResponse.from_dict(batch_update_subscription_offer_states_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


