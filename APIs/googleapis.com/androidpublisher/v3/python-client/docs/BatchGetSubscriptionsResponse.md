# BatchGetSubscriptionsResponse

Response message for BatchGetSubscriptions endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptions** | [**List[Subscription]**](Subscription.md) | The list of requested subscriptions, in the same order as the request. | [optional] 

## Example

```python
from openapi_client.models.batch_get_subscriptions_response import BatchGetSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetSubscriptionsResponse from a JSON string
batch_get_subscriptions_response_instance = BatchGetSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetSubscriptionsResponse.to_json())

# convert the object into a dict
batch_get_subscriptions_response_dict = batch_get_subscriptions_response_instance.to_dict()
# create an instance of BatchGetSubscriptionsResponse from a dict
batch_get_subscriptions_response_from_dict = BatchGetSubscriptionsResponse.from_dict(batch_get_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


