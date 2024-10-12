# GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule

Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestor_module** | **str** | Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, &#x60;ancestor_module&#x60; specifies the organization or folder from which the custom module is inherited. | [optional] [readonly] 
**custom_config** | [**GoogleCloudSecuritycenterV1CustomConfig**](GoogleCloudSecuritycenterV1CustomConfig.md) |  | [optional] 
**display_name** | **str** | The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. | [optional] 
**enablement_state** | **str** | The enablement state of the custom module. | [optional] 
**last_editor** | **str** | Output only. The editor that last updated the custom module. | [optional] [readonly] 
**name** | **str** | Immutable. The resource name of the custom module. Its format is \&quot;organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}\&quot;, or \&quot;folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}\&quot;, or \&quot;projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}\&quot; The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. | [optional] 
**update_time** | **str** | Output only. The time at which the custom module was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_security_health_analytics_custom_module import GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule from a JSON string
google_cloud_securitycenter_v1_security_health_analytics_custom_module_instance = GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_security_health_analytics_custom_module_dict = google_cloud_securitycenter_v1_security_health_analytics_custom_module_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule from a dict
google_cloud_securitycenter_v1_security_health_analytics_custom_module_from_dict = GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule.from_dict(google_cloud_securitycenter_v1_security_health_analytics_custom_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


