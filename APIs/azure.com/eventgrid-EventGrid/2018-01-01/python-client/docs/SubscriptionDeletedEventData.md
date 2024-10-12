# SubscriptionDeletedEventData

Schema of the Data property of an EventGridEvent for a Microsoft.EventGrid.SubscriptionDeletedEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_subscription_id** | **str** | The Azure resource ID of the deleted event subscription. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_deleted_event_data import SubscriptionDeletedEventData

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionDeletedEventData from a JSON string
subscription_deleted_event_data_instance = SubscriptionDeletedEventData.from_json(json)
# print the JSON string representation of the object
print(SubscriptionDeletedEventData.to_json())

# convert the object into a dict
subscription_deleted_event_data_dict = subscription_deleted_event_data_instance.to_dict()
# create an instance of SubscriptionDeletedEventData from a dict
subscription_deleted_event_data_from_dict = SubscriptionDeletedEventData.from_dict(subscription_deleted_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


