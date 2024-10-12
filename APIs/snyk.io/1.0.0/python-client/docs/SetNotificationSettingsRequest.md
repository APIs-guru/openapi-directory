# SetNotificationSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_issues_remediations** | [**SetNotificationSettingsRequestNewIssuesRemediations**](SetNotificationSettingsRequestNewIssuesRemediations.md) |  | [optional] 
**project_imported** | [**SetNotificationSettingsRequestProjectImported**](SetNotificationSettingsRequestProjectImported.md) |  | [optional] 
**test_limit** | [**SetNotificationSettingsRequestProjectImported**](SetNotificationSettingsRequestProjectImported.md) |  | [optional] 
**weekly_report** | [**SetNotificationSettingsRequestProjectImported**](SetNotificationSettingsRequestProjectImported.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_notification_settings_request import SetNotificationSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetNotificationSettingsRequest from a JSON string
set_notification_settings_request_instance = SetNotificationSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(SetNotificationSettingsRequest.to_json())

# convert the object into a dict
set_notification_settings_request_dict = set_notification_settings_request_instance.to_dict()
# create an instance of SetNotificationSettingsRequest from a dict
set_notification_settings_request_from_dict = SetNotificationSettingsRequest.from_dict(set_notification_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


