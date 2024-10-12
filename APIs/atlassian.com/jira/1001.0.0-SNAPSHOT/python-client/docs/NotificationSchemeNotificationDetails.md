# NotificationSchemeNotificationDetails

Details of a notification within a notification scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_type** | **str** | The notification type, e.g &#x60;CurrentAssignee&#x60;, &#x60;Group&#x60;, &#x60;EmailAddress&#x60;. | 
**parameter** | **str** | The value corresponding to the specified notification type. | [optional] 

## Example

```python
from openapi_client.models.notification_scheme_notification_details import NotificationSchemeNotificationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSchemeNotificationDetails from a JSON string
notification_scheme_notification_details_instance = NotificationSchemeNotificationDetails.from_json(json)
# print the JSON string representation of the object
print(NotificationSchemeNotificationDetails.to_json())

# convert the object into a dict
notification_scheme_notification_details_dict = notification_scheme_notification_details_instance.to_dict()
# create an instance of NotificationSchemeNotificationDetails from a dict
notification_scheme_notification_details_from_dict = NotificationSchemeNotificationDetails.from_dict(notification_scheme_notification_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


