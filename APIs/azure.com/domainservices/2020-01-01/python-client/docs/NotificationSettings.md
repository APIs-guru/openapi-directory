# NotificationSettings

Settings for notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_recipients** | **List[str]** | The list of additional recipients | [optional] 
**notify_dc_admins** | **str** | Should domain controller admins be notified | [optional] 
**notify_global_admins** | **str** | Should global admins be notified | [optional] 

## Example

```python
from openapi_client.models.notification_settings import NotificationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSettings from a JSON string
notification_settings_instance = NotificationSettings.from_json(json)
# print the JSON string representation of the object
print(NotificationSettings.to_json())

# convert the object into a dict
notification_settings_dict = notification_settings_instance.to_dict()
# create an instance of NotificationSettings from a dict
notification_settings_from_dict = NotificationSettings.from_dict(notification_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


