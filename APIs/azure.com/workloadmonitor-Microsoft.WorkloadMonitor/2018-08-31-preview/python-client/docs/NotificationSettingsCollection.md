# NotificationSettingsCollection

Model for collection of notificationSettings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to the next set of results. | [optional] [readonly] 
**value** | [**List[NotificationSetting]**](NotificationSetting.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_settings_collection import NotificationSettingsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSettingsCollection from a JSON string
notification_settings_collection_instance = NotificationSettingsCollection.from_json(json)
# print the JSON string representation of the object
print(NotificationSettingsCollection.to_json())

# convert the object into a dict
notification_settings_collection_dict = notification_settings_collection_instance.to_dict()
# create an instance of NotificationSettingsCollection from a dict
notification_settings_collection_from_dict = NotificationSettingsCollection.from_dict(notification_settings_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


