# EventSubscription

represents the Connector's EventSubscription resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**destinations** | [**EventSubscriptionDestination**](EventSubscriptionDestination.md) |  | [optional] 
**event_type_id** | **str** | Optional. Event type id of the event of current EventSubscription. | [optional] 
**jms** | [**JMS**](JMS.md) |  | [optional] 
**name** | **str** | Required. Resource name of the EventSubscription. Format: projects/{project}/locations/{location}/connections/{connection}/eventSubscriptions/{event_subscription} | [optional] 
**status** | [**EventSubscriptionStatus**](EventSubscriptionStatus.md) |  | [optional] 
**subscriber** | **str** | Optional. name of the Subscriber for the current EventSubscription. | [optional] 
**subscriber_link** | **str** | Optional. Link for Subscriber of the current EventSubscription. | [optional] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_subscription import EventSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscription from a JSON string
event_subscription_instance = EventSubscription.from_json(json)
# print the JSON string representation of the object
print(EventSubscription.to_json())

# convert the object into a dict
event_subscription_dict = event_subscription_instance.to_dict()
# create an instance of EventSubscription from a dict
event_subscription_from_dict = EventSubscription.from_dict(event_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


