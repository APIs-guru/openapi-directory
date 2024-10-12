# GoogleCloudSecuritycenterV1MuteConfig

A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. | [optional] [readonly] 
**description** | **str** | A description of the mute config. | [optional] 
**display_name** | **str** | The human readable name to be displayed for the mute config. | [optional] 
**filter** | **str** | Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project &#x3D; X but is created under the project &#x3D; Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * category: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.project_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.project_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.folders.resource_folder: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.parent_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.parent_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.type: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * finding_class: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * indicator.ip_addresses: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * indicator.domains: &#x60;&#x3D;&#x60;, &#x60;:&#x60; | [optional] 
**most_recent_editor** | **str** | Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. | [optional] [readonly] 
**name** | **str** | This field will be ignored if provided on config creation. Format \&quot;organizations/{organization}/muteConfigs/{mute_config}\&quot; \&quot;folders/{folder}/muteConfigs/{mute_config}\&quot; \&quot;projects/{project}/muteConfigs/{mute_config}\&quot; \&quot;organizations/{organization}/locations/global/muteConfigs/{mute_config}\&quot; \&quot;folders/{folder}/locations/global/muteConfigs/{mute_config}\&quot; \&quot;projects/{project}/locations/global/muteConfigs/{mute_config}\&quot; | [optional] 
**update_time** | **str** | Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_mute_config import GoogleCloudSecuritycenterV1MuteConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1MuteConfig from a JSON string
google_cloud_securitycenter_v1_mute_config_instance = GoogleCloudSecuritycenterV1MuteConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1MuteConfig.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_mute_config_dict = google_cloud_securitycenter_v1_mute_config_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1MuteConfig from a dict
google_cloud_securitycenter_v1_mute_config_from_dict = GoogleCloudSecuritycenterV1MuteConfig.from_dict(google_cloud_securitycenter_v1_mute_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


