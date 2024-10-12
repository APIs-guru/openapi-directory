# HybridConnectionEventSubscriptionDestination

Information about the HybridConnection destination for an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HybridConnectionEventSubscriptionDestinationProperties**](HybridConnectionEventSubscriptionDestinationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.hybrid_connection_event_subscription_destination import HybridConnectionEventSubscriptionDestination

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnectionEventSubscriptionDestination from a JSON string
hybrid_connection_event_subscription_destination_instance = HybridConnectionEventSubscriptionDestination.from_json(json)
# print the JSON string representation of the object
print(HybridConnectionEventSubscriptionDestination.to_json())

# convert the object into a dict
hybrid_connection_event_subscription_destination_dict = hybrid_connection_event_subscription_destination_instance.to_dict()
# create an instance of HybridConnectionEventSubscriptionDestination from a dict
hybrid_connection_event_subscription_destination_from_dict = HybridConnectionEventSubscriptionDestination.from_dict(hybrid_connection_event_subscription_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


