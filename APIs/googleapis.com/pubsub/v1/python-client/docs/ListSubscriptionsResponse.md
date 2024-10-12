# ListSubscriptionsResponse

Response for the `ListSubscriptions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional. If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new &#x60;ListSubscriptionsRequest&#x60; to get more subscriptions. | [optional] 
**subscriptions** | [**List[Subscription]**](Subscription.md) | Optional. The subscriptions that match the request. | [optional] 

## Example

```python
from openapi_client.models.list_subscriptions_response import ListSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSubscriptionsResponse from a JSON string
list_subscriptions_response_instance = ListSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSubscriptionsResponse.to_json())

# convert the object into a dict
list_subscriptions_response_dict = list_subscriptions_response_instance.to_dict()
# create an instance of ListSubscriptionsResponse from a dict
list_subscriptions_response_from_dict = ListSubscriptionsResponse.from_dict(list_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


