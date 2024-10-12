# BatchUpdateSubscriptionsRequest

Request message for BatchUpdateSubscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateSubscriptionRequest]**](UpdateSubscriptionRequest.md) | Required. A list of update requests of up to 100 elements. All requests must update different subscriptions. | [optional] 

## Example

```python
from openapi_client.models.batch_update_subscriptions_request import BatchUpdateSubscriptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateSubscriptionsRequest from a JSON string
batch_update_subscriptions_request_instance = BatchUpdateSubscriptionsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateSubscriptionsRequest.to_json())

# convert the object into a dict
batch_update_subscriptions_request_dict = batch_update_subscriptions_request_instance.to_dict()
# create an instance of BatchUpdateSubscriptionsRequest from a dict
batch_update_subscriptions_request_from_dict = BatchUpdateSubscriptionsRequest.from_dict(batch_update_subscriptions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


