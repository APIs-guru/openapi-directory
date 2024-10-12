# EventSubscriptionProperties

Properties of the Event Subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dead_letter_destination** | [**DeadLetterDestination**](DeadLetterDestination.md) |  | [optional] 
**destination** | [**EventSubscriptionDestination**](EventSubscriptionDestination.md) |  | [optional] 
**event_delivery_schema** | **str** | The event delivery schema for the event subscription. | [optional] 
**expiration_time_utc** | **datetime** | Expiration time of the event subscription. | [optional] 
**filter** | [**EventSubscriptionFilter**](EventSubscriptionFilter.md) |  | [optional] 
**labels** | **List[str]** | List of user defined labels. | [optional] 
**provisioning_state** | **str** | Provisioning state of the event subscription. | [optional] [readonly] 
**retry_policy** | [**RetryPolicy**](RetryPolicy.md) |  | [optional] 
**topic** | **str** | Name of the topic of the event subscription. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_subscription_properties import EventSubscriptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscriptionProperties from a JSON string
event_subscription_properties_instance = EventSubscriptionProperties.from_json(json)
# print the JSON string representation of the object
print(EventSubscriptionProperties.to_json())

# convert the object into a dict
event_subscription_properties_dict = event_subscription_properties_instance.to_dict()
# create an instance of EventSubscriptionProperties from a dict
event_subscription_properties_from_dict = EventSubscriptionProperties.from_dict(event_subscription_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


