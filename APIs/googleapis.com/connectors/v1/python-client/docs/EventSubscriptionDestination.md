# EventSubscriptionDestination

Message for EventSubscription Destination to act on receiving an event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | [**EndPoint**](EndPoint.md) |  | [optional] 
**service_account** | **str** | Service account needed for runtime plane to trigger IP workflow. | [optional] 
**type** | **str** | type of the destination | [optional] 

## Example

```python
from openapi_client.models.event_subscription_destination import EventSubscriptionDestination

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscriptionDestination from a JSON string
event_subscription_destination_instance = EventSubscriptionDestination.from_json(json)
# print the JSON string representation of the object
print(EventSubscriptionDestination.to_json())

# convert the object into a dict
event_subscription_destination_dict = event_subscription_destination_instance.to_dict()
# create an instance of EventSubscriptionDestination from a dict
event_subscription_destination_from_dict = EventSubscriptionDestination.from_dict(event_subscription_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


