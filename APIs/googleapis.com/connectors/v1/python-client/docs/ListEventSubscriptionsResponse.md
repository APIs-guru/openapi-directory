# ListEventSubscriptionsResponse

Response message for ConnectorsService.ListEventSubscriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_subscriptions** | [**List[EventSubscription]**](EventSubscription.md) | Subscriptions. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_event_subscriptions_response import ListEventSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEventSubscriptionsResponse from a JSON string
list_event_subscriptions_response_instance = ListEventSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEventSubscriptionsResponse.to_json())

# convert the object into a dict
list_event_subscriptions_response_dict = list_event_subscriptions_response_instance.to_dict()
# create an instance of ListEventSubscriptionsResponse from a dict
list_event_subscriptions_response_from_dict = ListEventSubscriptionsResponse.from_dict(list_event_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


