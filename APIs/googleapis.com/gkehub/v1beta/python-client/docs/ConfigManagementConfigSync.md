# ConfigManagementConfigSync

Configuration for Config Sync

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_vertical_scale** | **bool** | Set to true to allow the vertical scaling. Defaults to false which disallows vertical scaling. This field is deprecated. | [optional] 
**enabled** | **bool** | Enables the installation of ConfigSync. If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field. | [optional] 
**git** | [**ConfigManagementGitConfig**](ConfigManagementGitConfig.md) |  | [optional] 
**metrics_gcp_service_account_email** | **str** | The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring and Cloud Monarch when Workload Identity is enabled. The GSA should have the Monitoring Metric Writer (roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount &#x60;default&#x60; in the namespace &#x60;config-management-monitoring&#x60; should be bound to the GSA. | [optional] 
**oci** | [**ConfigManagementOciConfig**](ConfigManagementOciConfig.md) |  | [optional] 
**prevent_drift** | **bool** | Set to true to enable the Config Sync admission webhook to prevent drifts. If set to &#x60;false&#x60;, disables the Config Sync admission webhook and does not prevent drifts. | [optional] 
**source_format** | **str** | Specifies whether the Config Sync Repo is in \&quot;hierarchical\&quot; or \&quot;unstructured\&quot; mode. | [optional] 

## Example

```python
from openapi_client.models.config_management_config_sync import ConfigManagementConfigSync

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementConfigSync from a JSON string
config_management_config_sync_instance = ConfigManagementConfigSync.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementConfigSync.to_json())

# convert the object into a dict
config_management_config_sync_dict = config_management_config_sync_instance.to_dict()
# create an instance of ConfigManagementConfigSync from a dict
config_management_config_sync_from_dict = ConfigManagementConfigSync.from_dict(config_management_config_sync_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


