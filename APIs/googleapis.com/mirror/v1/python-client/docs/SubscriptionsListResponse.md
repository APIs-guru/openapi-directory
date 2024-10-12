# SubscriptionsListResponse

A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Subscription]**](Subscription.md) | The list of subscriptions. | [optional] 
**kind** | **str** | The type of resource. This is always mirror#subscriptionsList. | [optional] [default to 'mirror#subscriptionsList']

## Example

```python
from openapi_client.models.subscriptions_list_response import SubscriptionsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionsListResponse from a JSON string
subscriptions_list_response_instance = SubscriptionsListResponse.from_json(json)
# print the JSON string representation of the object
print(SubscriptionsListResponse.to_json())

# convert the object into a dict
subscriptions_list_response_dict = subscriptions_list_response_instance.to_dict()
# create an instance of SubscriptionsListResponse from a dict
subscriptions_list_response_from_dict = SubscriptionsListResponse.from_dict(subscriptions_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


