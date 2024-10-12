# GoogleCloudSecuritycenterV2ResourceValueConfig

A resource value config (RVC) is a mapping configuration of user's resources to resource values. Used in Attack path simulations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp this resource value config was created. | [optional] [readonly] 
**description** | **str** | Description of the resource value config. | [optional] 
**name** | **str** | Name for the resource value config | [optional] 
**resource_labels_selector** | **Dict[str, str]** | List of resource labels to search for, evaluated with AND. E.g. \&quot;resource_labels_selector\&quot;: {\&quot;key\&quot;: \&quot;value\&quot;, \&quot;env\&quot;: \&quot;prod\&quot;} will match resources with labels \&quot;key\&quot;: \&quot;value\&quot; AND \&quot;env\&quot;: \&quot;prod\&quot; https://cloud.google.com/resource-manager/docs/creating-managing-labels | [optional] 
**resource_type** | **str** | Apply resource_value only to resources that match resource_type. resource_type will be checked with \&quot;AND\&quot; of other resources. E.g. \&quot;storage.googleapis.com/Bucket\&quot; with resource_value \&quot;HIGH\&quot; will apply \&quot;HIGH\&quot; value only to \&quot;storage.googleapis.com/Bucket\&quot; resources. | [optional] 
**resource_value** | **str** | Resource value level this expression represents Only required when there is no SDP mapping in the request | [optional] 
**scope** | **str** | Project or folder to scope this config to. For example, \&quot;project/456\&quot; would apply this config only to resources in \&quot;project/456\&quot; scope will be checked with \&quot;AND\&quot; of other resources. | [optional] 
**sensitive_data_protection_mapping** | [**GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping**](GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping.md) |  | [optional] 
**tag_values** | **List[str]** | Required. Tag values combined with AND to check against. Values in the form \&quot;tagValues/123\&quot; E.g. [ \&quot;tagValues/123\&quot;, \&quot;tagValues/456\&quot;, \&quot;tagValues/789\&quot; ] https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing | [optional] 
**update_time** | **str** | Output only. Timestamp this resource value config was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_resource_value_config import GoogleCloudSecuritycenterV2ResourceValueConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2ResourceValueConfig from a JSON string
google_cloud_securitycenter_v2_resource_value_config_instance = GoogleCloudSecuritycenterV2ResourceValueConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2ResourceValueConfig.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_resource_value_config_dict = google_cloud_securitycenter_v2_resource_value_config_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2ResourceValueConfig from a dict
google_cloud_securitycenter_v2_resource_value_config_from_dict = GoogleCloudSecuritycenterV2ResourceValueConfig.from_dict(google_cloud_securitycenter_v2_resource_value_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


