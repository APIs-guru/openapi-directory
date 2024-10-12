# ModifyProjectNotificationSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_issues_remediations** | [**SetNotificationSettingsRequestNewIssuesRemediations**](SetNotificationSettingsRequestNewIssuesRemediations.md) |  | [optional] 

## Example

```python
from openapi_client.models.modify_project_notification_settings_request import ModifyProjectNotificationSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyProjectNotificationSettingsRequest from a JSON string
modify_project_notification_settings_request_instance = ModifyProjectNotificationSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyProjectNotificationSettingsRequest.to_json())

# convert the object into a dict
modify_project_notification_settings_request_dict = modify_project_notification_settings_request_instance.to_dict()
# create an instance of ModifyProjectNotificationSettingsRequest from a dict
modify_project_notification_settings_request_from_dict = ModifyProjectNotificationSettingsRequest.from_dict(modify_project_notification_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


