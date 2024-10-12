# EventSubscriptionFilter

Filter for the Event Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_filters** | [**List[AdvancedFilter]**](AdvancedFilter.md) | An array of advanced filters that are used for filtering event subscriptions. | [optional] 
**included_event_types** | **List[str]** | A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null. | [optional] 
**is_subject_case_sensitive** | **bool** | Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter   should be compared in a case sensitive manner. | [optional] [default to False]
**subject_begins_with** | **str** | An optional string to filter events for an event subscription based on a resource path prefix.  The format of this depends on the publisher of the events.   Wildcard characters are not supported in this path. | [optional] 
**subject_ends_with** | **str** | An optional string to filter events for an event subscription based on a resource path suffix.  Wildcard characters are not supported in this path. | [optional] 

## Example

```python
from openapi_client.models.event_subscription_filter import EventSubscriptionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscriptionFilter from a JSON string
event_subscription_filter_instance = EventSubscriptionFilter.from_json(json)
# print the JSON string representation of the object
print(EventSubscriptionFilter.to_json())

# convert the object into a dict
event_subscription_filter_dict = event_subscription_filter_instance.to_dict()
# create an instance of EventSubscriptionFilter from a dict
event_subscription_filter_from_dict = EventSubscriptionFilter.from_dict(event_subscription_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


