# SetNotificationSettingsRequestNewIssuesRemediations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether notifications should be sent | 
**issue_severity** | **str** | The severity levels of issues to send notifications for (only applicable for &#x60;new-remediations-vulnerabilities&#x60; notificationType) | 
**issue_type** | **str** | Filter the types of issue to include in notifications (only applicable for &#x60;new-remediations-vulnerabilities&#x60; notificationType) | 

## Example

```python
from openapi_client.models.set_notification_settings_request_new_issues_remediations import SetNotificationSettingsRequestNewIssuesRemediations

# TODO update the JSON string below
json = "{}"
# create an instance of SetNotificationSettingsRequestNewIssuesRemediations from a JSON string
set_notification_settings_request_new_issues_remediations_instance = SetNotificationSettingsRequestNewIssuesRemediations.from_json(json)
# print the JSON string representation of the object
print(SetNotificationSettingsRequestNewIssuesRemediations.to_json())

# convert the object into a dict
set_notification_settings_request_new_issues_remediations_dict = set_notification_settings_request_new_issues_remediations_instance.to_dict()
# create an instance of SetNotificationSettingsRequestNewIssuesRemediations from a dict
set_notification_settings_request_new_issues_remediations_from_dict = SetNotificationSettingsRequestNewIssuesRemediations.from_dict(set_notification_settings_request_new_issues_remediations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


