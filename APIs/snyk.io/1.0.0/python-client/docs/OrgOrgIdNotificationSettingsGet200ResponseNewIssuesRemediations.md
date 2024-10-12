# OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether notifications should be sent | 
**inherited** | **bool** | Whether the setting was found on the requested context directly or inherited from a parent | [optional] 
**issue_severity** | **str** | The severity levels of issues to send notifications for (only applicable for &#x60;new-remediations-vulnerabilities&#x60; notificationType) | 
**issue_type** | **str** | Filter the types of issue to include in notifications (only applicable for &#x60;new-remediations-vulnerabilities&#x60; notificationType) | 

## Example

```python
from openapi_client.models.org_org_id_notification_settings_get200_response_new_issues_remediations import OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations from a JSON string
org_org_id_notification_settings_get200_response_new_issues_remediations_instance = OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations.from_json(json)
# print the JSON string representation of the object
print(OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations.to_json())

# convert the object into a dict
org_org_id_notification_settings_get200_response_new_issues_remediations_dict = org_org_id_notification_settings_get200_response_new_issues_remediations_instance.to_dict()
# create an instance of OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations from a dict
org_org_id_notification_settings_get200_response_new_issues_remediations_from_dict = OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations.from_dict(org_org_id_notification_settings_get200_response_new_issues_remediations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


