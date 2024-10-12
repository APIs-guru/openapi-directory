# NotificationSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_issues_remediations** | [**NewIssuesNotificationSettingRequest**](NewIssuesNotificationSettingRequest.md) |  | [optional] 
**project_imported** | [**SimpleNotificationSettingRequest**](SimpleNotificationSettingRequest.md) |  | [optional] 
**test_limit** | [**SimpleNotificationSettingRequest**](SimpleNotificationSettingRequest.md) |  | [optional] 
**weekly_report** | [**SimpleNotificationSettingRequest**](SimpleNotificationSettingRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_settings_request import NotificationSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSettingsRequest from a JSON string
notification_settings_request_instance = NotificationSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(NotificationSettingsRequest.to_json())

# convert the object into a dict
notification_settings_request_dict = notification_settings_request_instance.to_dict()
# create an instance of NotificationSettingsRequest from a dict
notification_settings_request_from_dict = NotificationSettingsRequest.from_dict(notification_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


