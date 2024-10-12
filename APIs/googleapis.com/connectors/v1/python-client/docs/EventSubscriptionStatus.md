# EventSubscriptionStatus

EventSubscription Status denotes the status of the EventSubscription resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Output only. Description of the state. | [optional] [readonly] 
**state** | **str** | Output only. State of Event Subscription resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_subscription_status import EventSubscriptionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscriptionStatus from a JSON string
event_subscription_status_instance = EventSubscriptionStatus.from_json(json)
# print the JSON string representation of the object
print(EventSubscriptionStatus.to_json())

# convert the object into a dict
event_subscription_status_dict = event_subscription_status_instance.to_dict()
# create an instance of EventSubscriptionStatus from a dict
event_subscription_status_from_dict = EventSubscriptionStatus.from_dict(event_subscription_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


