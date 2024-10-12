# EventHubEventSubscriptionDestination

Information about the event hub destination for an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventHubEventSubscriptionDestinationProperties**](EventHubEventSubscriptionDestinationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_hub_event_subscription_destination import EventHubEventSubscriptionDestination

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubEventSubscriptionDestination from a JSON string
event_hub_event_subscription_destination_instance = EventHubEventSubscriptionDestination.from_json(json)
# print the JSON string representation of the object
print(EventHubEventSubscriptionDestination.to_json())

# convert the object into a dict
event_hub_event_subscription_destination_dict = event_hub_event_subscription_destination_instance.to_dict()
# create an instance of EventHubEventSubscriptionDestination from a dict
event_hub_event_subscription_destination_from_dict = EventHubEventSubscriptionDestination.from_dict(event_hub_event_subscription_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


