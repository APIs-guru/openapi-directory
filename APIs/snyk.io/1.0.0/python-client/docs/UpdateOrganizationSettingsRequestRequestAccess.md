# UpdateOrganizationSettingsRequestRequestAccess

Can only be updated if `API_KEY` has edit access to request access settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether requesting access to the organization is enabled. | 

## Example

```python
from openapi_client.models.update_organization_settings_request_request_access import UpdateOrganizationSettingsRequestRequestAccess

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSettingsRequestRequestAccess from a JSON string
update_organization_settings_request_request_access_instance = UpdateOrganizationSettingsRequestRequestAccess.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSettingsRequestRequestAccess.to_json())

# convert the object into a dict
update_organization_settings_request_request_access_dict = update_organization_settings_request_request_access_instance.to_dict()
# create an instance of UpdateOrganizationSettingsRequestRequestAccess from a dict
update_organization_settings_request_request_access_from_dict = UpdateOrganizationSettingsRequestRequestAccess.from_dict(update_organization_settings_request_request_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


