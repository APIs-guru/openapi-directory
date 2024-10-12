# BatchUpdateSubscriptionOfferStatesRequest

Request message for BatchUpdateSubscriptionOfferStates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateSubscriptionOfferStateRequest]**](UpdateSubscriptionOfferStateRequest.md) | Required. The update request list of up to 100 elements. All requests must update different offers. | [optional] 

## Example

```python
from openapi_client.models.batch_update_subscription_offer_states_request import BatchUpdateSubscriptionOfferStatesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateSubscriptionOfferStatesRequest from a JSON string
batch_update_subscription_offer_states_request_instance = BatchUpdateSubscriptionOfferStatesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateSubscriptionOfferStatesRequest.to_json())

# convert the object into a dict
batch_update_subscription_offer_states_request_dict = batch_update_subscription_offer_states_request_instance.to_dict()
# create an instance of BatchUpdateSubscriptionOfferStatesRequest from a dict
batch_update_subscription_offer_states_request_from_dict = BatchUpdateSubscriptionOfferStatesRequest.from_dict(batch_update_subscription_offer_states_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


