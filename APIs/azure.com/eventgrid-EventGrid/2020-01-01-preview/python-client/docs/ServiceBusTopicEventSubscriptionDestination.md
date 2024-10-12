# ServiceBusTopicEventSubscriptionDestination

Information about the service bus topic destination for an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceBusTopicEventSubscriptionDestinationProperties**](ServiceBusTopicEventSubscriptionDestinationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_bus_topic_event_subscription_destination import ServiceBusTopicEventSubscriptionDestination

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusTopicEventSubscriptionDestination from a JSON string
service_bus_topic_event_subscription_destination_instance = ServiceBusTopicEventSubscriptionDestination.from_json(json)
# print the JSON string representation of the object
print(ServiceBusTopicEventSubscriptionDestination.to_json())

# convert the object into a dict
service_bus_topic_event_subscription_destination_dict = service_bus_topic_event_subscription_destination_instance.to_dict()
# create an instance of ServiceBusTopicEventSubscriptionDestination from a dict
service_bus_topic_event_subscription_destination_from_dict = ServiceBusTopicEventSubscriptionDestination.from_dict(service_bus_topic_event_subscription_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


