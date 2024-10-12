# NotificationSettingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_issues_remediations** | [**NotificationSettingResponse**](NotificationSettingResponse.md) |  | [optional] 
**project_imported** | [**SimpleNotificationSettingResponse**](SimpleNotificationSettingResponse.md) |  | [optional] 
**test_limit** | [**SimpleNotificationSettingResponse**](SimpleNotificationSettingResponse.md) |  | [optional] 
**weekly_report** | [**SimpleNotificationSettingResponse**](SimpleNotificationSettingResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_settings_response import NotificationSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSettingsResponse from a JSON string
notification_settings_response_instance = NotificationSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(NotificationSettingsResponse.to_json())

# convert the object into a dict
notification_settings_response_dict = notification_settings_response_instance.to_dict()
# create an instance of NotificationSettingsResponse from a dict
notification_settings_response_from_dict = NotificationSettingsResponse.from_dict(notification_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


