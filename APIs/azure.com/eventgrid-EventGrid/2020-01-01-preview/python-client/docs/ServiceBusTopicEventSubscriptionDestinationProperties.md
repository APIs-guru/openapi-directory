# ServiceBusTopicEventSubscriptionDestinationProperties

The properties that represent the Service Bus Topic destination of an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.service_bus_topic_event_subscription_destination_properties import ServiceBusTopicEventSubscriptionDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusTopicEventSubscriptionDestinationProperties from a JSON string
service_bus_topic_event_subscription_destination_properties_instance = ServiceBusTopicEventSubscriptionDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceBusTopicEventSubscriptionDestinationProperties.to_json())

# convert the object into a dict
service_bus_topic_event_subscription_destination_properties_dict = service_bus_topic_event_subscription_destination_properties_instance.to_dict()
# create an instance of ServiceBusTopicEventSubscriptionDestinationProperties from a dict
service_bus_topic_event_subscription_destination_properties_from_dict = ServiceBusTopicEventSubscriptionDestinationProperties.from_dict(service_bus_topic_event_subscription_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


