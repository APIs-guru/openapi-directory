# EventHubEventSubscriptionDestinationProperties

The properties for a event hub destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.event_hub_event_subscription_destination_properties import EventHubEventSubscriptionDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubEventSubscriptionDestinationProperties from a JSON string
event_hub_event_subscription_destination_properties_instance = EventHubEventSubscriptionDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(EventHubEventSubscriptionDestinationProperties.to_json())

# convert the object into a dict
event_hub_event_subscription_destination_properties_dict = event_hub_event_subscription_destination_properties_instance.to_dict()
# create an instance of EventHubEventSubscriptionDestinationProperties from a dict
event_hub_event_subscription_destination_properties_from_dict = EventHubEventSubscriptionDestinationProperties.from_dict(event_hub_event_subscription_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


