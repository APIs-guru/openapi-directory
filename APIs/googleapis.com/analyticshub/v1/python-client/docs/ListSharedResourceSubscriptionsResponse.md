# ListSharedResourceSubscriptionsResponse

Message for response to the listing of shared resource subscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Next page token. | [optional] 
**shared_resource_subscriptions** | [**List[Subscription]**](Subscription.md) | The list of subscriptions. | [optional] 

## Example

```python
from openapi_client.models.list_shared_resource_subscriptions_response import ListSharedResourceSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSharedResourceSubscriptionsResponse from a JSON string
list_shared_resource_subscriptions_response_instance = ListSharedResourceSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSharedResourceSubscriptionsResponse.to_json())

# convert the object into a dict
list_shared_resource_subscriptions_response_dict = list_shared_resource_subscriptions_response_instance.to_dict()
# create an instance of ListSharedResourceSubscriptionsResponse from a dict
list_shared_resource_subscriptions_response_from_dict = ListSharedResourceSubscriptionsResponse.from_dict(list_shared_resource_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


