# EventSubscriptionsListResult

Result of the List EventSubscriptions operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A link for the next page of event subscriptions | [optional] 
**value** | [**List[EventSubscription]**](EventSubscription.md) | A collection of EventSubscriptions | [optional] 

## Example

```python
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscriptionsListResult from a JSON string
event_subscriptions_list_result_instance = EventSubscriptionsListResult.from_json(json)
# print the JSON string representation of the object
print(EventSubscriptionsListResult.to_json())

# convert the object into a dict
event_subscriptions_list_result_dict = event_subscriptions_list_result_instance.to_dict()
# create an instance of EventSubscriptionsListResult from a dict
event_subscriptions_list_result_from_dict = EventSubscriptionsListResult.from_dict(event_subscriptions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


