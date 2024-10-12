# NotificationMutesUpdatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**me** | [**OwnUser**](OwnUser.md) |  | 
**type** | **str** |  | [default to 'notification.mutes_updated']

## Example

```python
from openapi_client.models.notification_mutes_updated_event import NotificationMutesUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationMutesUpdatedEvent from a JSON string
notification_mutes_updated_event_instance = NotificationMutesUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationMutesUpdatedEvent.to_json())

# convert the object into a dict
notification_mutes_updated_event_dict = notification_mutes_updated_event_instance.to_dict()
# create an instance of NotificationMutesUpdatedEvent from a dict
notification_mutes_updated_event_from_dict = NotificationMutesUpdatedEvent.from_dict(notification_mutes_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


