# EventSubscriptionUpdateParameters

Properties of the Event Subscription update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dead_letter_destination** | [**DeadLetterDestination**](DeadLetterDestination.md) |  | [optional] 
**destination** | [**EventSubscriptionDestination**](EventSubscriptionDestination.md) |  | [optional] 
**event_delivery_schema** | **str** | The event delivery schema for the event subscription. | [optional] 
**filter** | [**EventSubscriptionFilter**](EventSubscriptionFilter.md) |  | [optional] 
**labels** | **List[str]** | List of user defined labels. | [optional] 
**retry_policy** | [**RetryPolicy**](RetryPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_subscription_update_parameters import EventSubscriptionUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscriptionUpdateParameters from a JSON string
event_subscription_update_parameters_instance = EventSubscriptionUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EventSubscriptionUpdateParameters.to_json())

# convert the object into a dict
event_subscription_update_parameters_dict = event_subscription_update_parameters_instance.to_dict()
# create an instance of EventSubscriptionUpdateParameters from a dict
event_subscription_update_parameters_from_dict = EventSubscriptionUpdateParameters.from_dict(event_subscription_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


