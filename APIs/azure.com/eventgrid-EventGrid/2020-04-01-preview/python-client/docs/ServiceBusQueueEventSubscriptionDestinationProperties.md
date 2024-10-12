# ServiceBusQueueEventSubscriptionDestinationProperties

The properties that represent the Service Bus destination of an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.service_bus_queue_event_subscription_destination_properties import ServiceBusQueueEventSubscriptionDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusQueueEventSubscriptionDestinationProperties from a JSON string
service_bus_queue_event_subscription_destination_properties_instance = ServiceBusQueueEventSubscriptionDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceBusQueueEventSubscriptionDestinationProperties.to_json())

# convert the object into a dict
service_bus_queue_event_subscription_destination_properties_dict = service_bus_queue_event_subscription_destination_properties_instance.to_dict()
# create an instance of ServiceBusQueueEventSubscriptionDestinationProperties from a dict
service_bus_queue_event_subscription_destination_properties_from_dict = ServiceBusQueueEventSubscriptionDestinationProperties.from_dict(service_bus_queue_event_subscription_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


