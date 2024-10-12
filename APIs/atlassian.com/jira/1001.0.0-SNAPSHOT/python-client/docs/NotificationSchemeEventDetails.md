# NotificationSchemeEventDetails

Details of a notification scheme event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**NotificationSchemeEventTypeId**](NotificationSchemeEventTypeId.md) | The ID of the event. | 
**notifications** | [**List[NotificationSchemeNotificationDetails]**](NotificationSchemeNotificationDetails.md) | The list of notifications mapped to a specified event. | 

## Example

```python
from openapi_client.models.notification_scheme_event_details import NotificationSchemeEventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSchemeEventDetails from a JSON string
notification_scheme_event_details_instance = NotificationSchemeEventDetails.from_json(json)
# print the JSON string representation of the object
print(NotificationSchemeEventDetails.to_json())

# convert the object into a dict
notification_scheme_event_details_dict = notification_scheme_event_details_instance.to_dict()
# create an instance of NotificationSchemeEventDetails from a dict
notification_scheme_event_details_from_dict = NotificationSchemeEventDetails.from_dict(notification_scheme_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


