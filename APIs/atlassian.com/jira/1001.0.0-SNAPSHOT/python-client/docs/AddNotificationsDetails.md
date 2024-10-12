# AddNotificationsDetails

Details of notifications which should be added to the notification scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_scheme_events** | [**List[NotificationSchemeEventDetails]**](NotificationSchemeEventDetails.md) | The list of notifications which should be added to the notification scheme. | 

## Example

```python
from openapi_client.models.add_notifications_details import AddNotificationsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AddNotificationsDetails from a JSON string
add_notifications_details_instance = AddNotificationsDetails.from_json(json)
# print the JSON string representation of the object
print(AddNotificationsDetails.to_json())

# convert the object into a dict
add_notifications_details_dict = add_notifications_details_instance.to_dict()
# create an instance of AddNotificationsDetails from a dict
add_notifications_details_from_dict = AddNotificationsDetails.from_dict(add_notifications_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


