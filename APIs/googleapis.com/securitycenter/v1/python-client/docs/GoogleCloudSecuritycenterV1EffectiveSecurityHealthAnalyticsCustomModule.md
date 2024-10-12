# GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule

An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_config** | [**GoogleCloudSecuritycenterV1CustomConfig**](GoogleCloudSecuritycenterV1CustomConfig.md) |  | [optional] 
**display_name** | **str** | Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. | [optional] [readonly] 
**enablement_state** | **str** | Output only. The effective state of enablement for the module at the given level of the hierarchy. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the custom module. Its format is \&quot;organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\&quot;, or \&quot;folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\&quot;, or \&quot;projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_effective_security_health_analytics_custom_module import GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule from a JSON string
google_cloud_securitycenter_v1_effective_security_health_analytics_custom_module_instance = GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_effective_security_health_analytics_custom_module_dict = google_cloud_securitycenter_v1_effective_security_health_analytics_custom_module_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule from a dict
google_cloud_securitycenter_v1_effective_security_health_analytics_custom_module_from_dict = GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule.from_dict(google_cloud_securitycenter_v1_effective_security_health_analytics_custom_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


