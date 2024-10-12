# BatchUpdateSubscriptionsResponse

Response message for BatchUpdateSubscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptions** | [**List[Subscription]**](Subscription.md) | The updated subscriptions list. | [optional] 

## Example

```python
from openapi_client.models.batch_update_subscriptions_response import BatchUpdateSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateSubscriptionsResponse from a JSON string
batch_update_subscriptions_response_instance = BatchUpdateSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateSubscriptionsResponse.to_json())

# convert the object into a dict
batch_update_subscriptions_response_dict = batch_update_subscriptions_response_instance.to_dict()
# create an instance of BatchUpdateSubscriptionsResponse from a dict
batch_update_subscriptions_response_from_dict = BatchUpdateSubscriptionsResponse.from_dict(batch_update_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


