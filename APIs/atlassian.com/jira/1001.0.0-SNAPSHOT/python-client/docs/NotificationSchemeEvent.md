# NotificationSchemeEvent

Details about a notification scheme event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**NotificationEvent**](NotificationEvent.md) |  | [optional] 
**notifications** | [**List[EventNotification]**](EventNotification.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_scheme_event import NotificationSchemeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSchemeEvent from a JSON string
notification_scheme_event_instance = NotificationSchemeEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationSchemeEvent.to_json())

# convert the object into a dict
notification_scheme_event_dict = notification_scheme_event_instance.to_dict()
# create an instance of NotificationSchemeEvent from a dict
notification_scheme_event_from_dict = NotificationSchemeEvent.from_dict(notification_scheme_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


