# OrgOrgIdNotificationSettingsGet200ResponseProjectImported


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether notifications should be sent | 
**inherited** | **bool** | Whether the setting was found on the requested context directly or inherited from a parent | [optional] 

## Example

```python
from openapi_client.models.org_org_id_notification_settings_get200_response_project_imported import OrgOrgIdNotificationSettingsGet200ResponseProjectImported

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrgIdNotificationSettingsGet200ResponseProjectImported from a JSON string
org_org_id_notification_settings_get200_response_project_imported_instance = OrgOrgIdNotificationSettingsGet200ResponseProjectImported.from_json(json)
# print the JSON string representation of the object
print(OrgOrgIdNotificationSettingsGet200ResponseProjectImported.to_json())

# convert the object into a dict
org_org_id_notification_settings_get200_response_project_imported_dict = org_org_id_notification_settings_get200_response_project_imported_instance.to_dict()
# create an instance of OrgOrgIdNotificationSettingsGet200ResponseProjectImported from a dict
org_org_id_notification_settings_get200_response_project_imported_from_dict = OrgOrgIdNotificationSettingsGet200ResponseProjectImported.from_dict(org_org_id_notification_settings_get200_response_project_imported_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


