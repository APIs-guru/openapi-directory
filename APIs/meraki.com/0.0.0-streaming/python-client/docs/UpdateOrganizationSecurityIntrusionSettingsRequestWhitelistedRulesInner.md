# UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET | [optional] 
**rule_id** | **str** | A rule identifier of the format meraki:intrusion/snort/GID/&lt;gid&gt;/SID/&lt;sid&gt;. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents | 

## Example

```python
from openapi_client.models.update_organization_security_intrusion_settings_request_whitelisted_rules_inner import UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner from a JSON string
update_organization_security_intrusion_settings_request_whitelisted_rules_inner_instance = UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner.to_json())

# convert the object into a dict
update_organization_security_intrusion_settings_request_whitelisted_rules_inner_dict = update_organization_security_intrusion_settings_request_whitelisted_rules_inner_instance.to_dict()
# create an instance of UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner from a dict
update_organization_security_intrusion_settings_request_whitelisted_rules_inner_from_dict = UpdateOrganizationSecurityIntrusionSettingsRequestWhitelistedRulesInner.from_dict(update_organization_security_intrusion_settings_request_whitelisted_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


