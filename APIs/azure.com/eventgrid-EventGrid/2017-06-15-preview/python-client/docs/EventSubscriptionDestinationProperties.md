# EventSubscriptionDestinationProperties

Properties of the event subscription destination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_base_url** | **str** | The base URL that represents the endpoint of the destination of an event subscription. | [optional] [readonly] 
**endpoint_url** | **str** | The URL that represents the endpoint of the destination of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.event_subscription_destination_properties import EventSubscriptionDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscriptionDestinationProperties from a JSON string
event_subscription_destination_properties_instance = EventSubscriptionDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(EventSubscriptionDestinationProperties.to_json())

# convert the object into a dict
event_subscription_destination_properties_dict = event_subscription_destination_properties_instance.to_dict()
# create an instance of EventSubscriptionDestinationProperties from a dict
event_subscription_destination_properties_from_dict = EventSubscriptionDestinationProperties.from_dict(event_subscription_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


