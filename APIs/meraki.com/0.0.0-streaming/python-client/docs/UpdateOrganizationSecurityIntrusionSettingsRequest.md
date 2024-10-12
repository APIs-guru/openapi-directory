# UpdateOrganizationSecurityIntrusionSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**whitelisted_rules** | [**List[UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner]**](UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner.md) | Sets a list of specific SNORT signatures to allow | 

## Example

```python
from openapi_client.models.update_organization_security_intrusion_settings_request import UpdateOrganizationSecurityIntrusionSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSecurityIntrusionSettingsRequest from a JSON string
update_organization_security_intrusion_settings_request_instance = UpdateOrganizationSecurityIntrusionSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSecurityIntrusionSettingsRequest.to_json())

# convert the object into a dict
update_organization_security_intrusion_settings_request_dict = update_organization_security_intrusion_settings_request_instance.to_dict()
# create an instance of UpdateOrganizationSecurityIntrusionSettingsRequest from a dict
update_organization_security_intrusion_settings_request_from_dict = UpdateOrganizationSecurityIntrusionSettingsRequest.from_dict(update_organization_security_intrusion_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


