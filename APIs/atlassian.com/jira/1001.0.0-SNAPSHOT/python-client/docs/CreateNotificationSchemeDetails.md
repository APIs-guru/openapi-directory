# CreateNotificationSchemeDetails

Details of an notification scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the notification scheme. | [optional] 
**name** | **str** | The name of the notification scheme. Must be unique (case-insensitive). | 
**notification_scheme_events** | [**List[NotificationSchemeEventDetails]**](NotificationSchemeEventDetails.md) | The list of notifications which should be added to the notification scheme. | [optional] 

## Example

```python
from openapi_client.models.create_notification_scheme_details import CreateNotificationSchemeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNotificationSchemeDetails from a JSON string
create_notification_scheme_details_instance = CreateNotificationSchemeDetails.from_json(json)
# print the JSON string representation of the object
print(CreateNotificationSchemeDetails.to_json())

# convert the object into a dict
create_notification_scheme_details_dict = create_notification_scheme_details_instance.to_dict()
# create an instance of CreateNotificationSchemeDetails from a dict
create_notification_scheme_details_from_dict = CreateNotificationSchemeDetails.from_dict(create_notification_scheme_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


