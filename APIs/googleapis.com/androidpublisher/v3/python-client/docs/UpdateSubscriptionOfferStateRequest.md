# UpdateSubscriptionOfferStateRequest

Request message to update the state of a subscription offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activate_subscription_offer_request** | [**ActivateSubscriptionOfferRequest**](ActivateSubscriptionOfferRequest.md) |  | [optional] 
**deactivate_subscription_offer_request** | [**DeactivateSubscriptionOfferRequest**](DeactivateSubscriptionOfferRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_subscription_offer_state_request import UpdateSubscriptionOfferStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSubscriptionOfferStateRequest from a JSON string
update_subscription_offer_state_request_instance = UpdateSubscriptionOfferStateRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSubscriptionOfferStateRequest.to_json())

# convert the object into a dict
update_subscription_offer_state_request_dict = update_subscription_offer_state_request_instance.to_dict()
# create an instance of UpdateSubscriptionOfferStateRequest from a dict
update_subscription_offer_state_request_from_dict = UpdateSubscriptionOfferStateRequest.from_dict(update_subscription_offer_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


