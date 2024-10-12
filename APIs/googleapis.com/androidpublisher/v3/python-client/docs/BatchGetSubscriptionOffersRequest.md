# BatchGetSubscriptionOffersRequest

Request message for BatchGetSubscriptionOffers endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GetSubscriptionOfferRequest]**](GetSubscriptionOfferRequest.md) | Required. A list of update requests of up to 100 elements. All requests must update different subscriptions. | [optional] 

## Example

```python
from openapi_client.models.batch_get_subscription_offers_request import BatchGetSubscriptionOffersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetSubscriptionOffersRequest from a JSON string
batch_get_subscription_offers_request_instance = BatchGetSubscriptionOffersRequest.from_json(json)
# print the JSON string representation of the object
print(BatchGetSubscriptionOffersRequest.to_json())

# convert the object into a dict
batch_get_subscription_offers_request_dict = batch_get_subscription_offers_request_instance.to_dict()
# create an instance of BatchGetSubscriptionOffersRequest from a dict
batch_get_subscription_offers_request_from_dict = BatchGetSubscriptionOffersRequest.from_dict(batch_get_subscription_offers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


