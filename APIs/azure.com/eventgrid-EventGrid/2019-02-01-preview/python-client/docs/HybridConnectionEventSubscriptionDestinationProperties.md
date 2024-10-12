# HybridConnectionEventSubscriptionDestinationProperties

The properties for a hybrid connection destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | The Azure Resource ID of an hybrid connection that is the destination of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.hybrid_connection_event_subscription_destination_properties import HybridConnectionEventSubscriptionDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnectionEventSubscriptionDestinationProperties from a JSON string
hybrid_connection_event_subscription_destination_properties_instance = HybridConnectionEventSubscriptionDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(HybridConnectionEventSubscriptionDestinationProperties.to_json())

# convert the object into a dict
hybrid_connection_event_subscription_destination_properties_dict = hybrid_connection_event_subscription_destination_properties_instance.to_dict()
# create an instance of HybridConnectionEventSubscriptionDestinationProperties from a dict
hybrid_connection_event_subscription_destination_properties_from_dict = HybridConnectionEventSubscriptionDestinationProperties.from_dict(hybrid_connection_event_subscription_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


