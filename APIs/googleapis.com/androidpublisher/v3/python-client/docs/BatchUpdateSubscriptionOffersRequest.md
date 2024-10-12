# BatchUpdateSubscriptionOffersRequest

Request message for BatchUpdateSubscriptionOffers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateSubscriptionOfferRequest]**](UpdateSubscriptionOfferRequest.md) | Required. A list of update requests of up to 100 elements. All requests must update different subscription offers. | [optional] 

## Example

```python
from openapi_client.models.batch_update_subscription_offers_request import BatchUpdateSubscriptionOffersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateSubscriptionOffersRequest from a JSON string
batch_update_subscription_offers_request_instance = BatchUpdateSubscriptionOffersRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateSubscriptionOffersRequest.to_json())

# convert the object into a dict
batch_update_subscription_offers_request_dict = batch_update_subscription_offers_request_instance.to_dict()
# create an instance of BatchUpdateSubscriptionOffersRequest from a dict
batch_update_subscription_offers_request_from_dict = BatchUpdateSubscriptionOffersRequest.from_dict(batch_update_subscription_offers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


