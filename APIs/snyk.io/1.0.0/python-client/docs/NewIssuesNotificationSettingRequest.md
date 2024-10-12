# NewIssuesNotificationSettingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether notifications should be sent | 
**issue_severity** | **str** | The severity levels of issues to send notifications for (only applicable for &#x60;new-remediations-vulnerabilities&#x60; notificationType) | 
**issue_type** | **str** | Filter the types of issue to include in notifications (only applicable for &#x60;new-remediations-vulnerabilities&#x60; notificationType) | 

## Example

```python
from openapi_client.models.new_issues_notification_setting_request import NewIssuesNotificationSettingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NewIssuesNotificationSettingRequest from a JSON string
new_issues_notification_setting_request_instance = NewIssuesNotificationSettingRequest.from_json(json)
# print the JSON string representation of the object
print(NewIssuesNotificationSettingRequest.to_json())

# convert the object into a dict
new_issues_notification_setting_request_dict = new_issues_notification_setting_request_instance.to_dict()
# create an instance of NewIssuesNotificationSettingRequest from a dict
new_issues_notification_setting_request_from_dict = NewIssuesNotificationSettingRequest.from_dict(new_issues_notification_setting_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


