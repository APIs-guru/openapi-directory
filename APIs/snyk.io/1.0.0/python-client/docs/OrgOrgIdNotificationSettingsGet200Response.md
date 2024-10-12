# OrgOrgIdNotificationSettingsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_issues_remediations** | [**OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations**](OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations.md) |  | [optional] 
**project_imported** | [**OrgOrgIdNotificationSettingsGet200ResponseProjectImported**](OrgOrgIdNotificationSettingsGet200ResponseProjectImported.md) |  | [optional] 
**test_limit** | [**OrgOrgIdNotificationSettingsGet200ResponseProjectImported**](OrgOrgIdNotificationSettingsGet200ResponseProjectImported.md) |  | [optional] 
**weekly_report** | [**OrgOrgIdNotificationSettingsGet200ResponseProjectImported**](OrgOrgIdNotificationSettingsGet200ResponseProjectImported.md) |  | [optional] 

## Example

```python
from openapi_client.models.org_org_id_notification_settings_get200_response import OrgOrgIdNotificationSettingsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrgIdNotificationSettingsGet200Response from a JSON string
org_org_id_notification_settings_get200_response_instance = OrgOrgIdNotificationSettingsGet200Response.from_json(json)
# print the JSON string representation of the object
print(OrgOrgIdNotificationSettingsGet200Response.to_json())

# convert the object into a dict
org_org_id_notification_settings_get200_response_dict = org_org_id_notification_settings_get200_response_instance.to_dict()
# create an instance of OrgOrgIdNotificationSettingsGet200Response from a dict
org_org_id_notification_settings_get200_response_from_dict = OrgOrgIdNotificationSettingsGet200Response.from_dict(org_org_id_notification_settings_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


