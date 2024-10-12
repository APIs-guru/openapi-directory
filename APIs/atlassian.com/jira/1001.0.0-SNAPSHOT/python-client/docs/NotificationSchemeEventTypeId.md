# NotificationSchemeEventTypeId

The ID of an event that is being mapped to notifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the notification scheme event. | 

## Example

```python
from openapi_client.models.notification_scheme_event_type_id import NotificationSchemeEventTypeId

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSchemeEventTypeId from a JSON string
notification_scheme_event_type_id_instance = NotificationSchemeEventTypeId.from_json(json)
# print the JSON string representation of the object
print(NotificationSchemeEventTypeId.to_json())

# convert the object into a dict
notification_scheme_event_type_id_dict = notification_scheme_event_type_id_instance.to_dict()
# create an instance of NotificationSchemeEventTypeId from a dict
notification_scheme_event_type_id_from_dict = NotificationSchemeEventTypeId.from_dict(notification_scheme_event_type_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


