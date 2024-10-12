# ConfigManagementConfigSyncVersion

Specific versioning information pertaining to ConfigSync's Pods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admission_webhook** | **str** | Version of the deployed admission_webhook pod | [optional] 
**git_sync** | **str** | Version of the deployed git-sync pod | [optional] 
**importer** | **str** | Version of the deployed importer pod | [optional] 
**monitor** | **str** | Version of the deployed monitor pod | [optional] 
**reconciler_manager** | **str** | Version of the deployed reconciler-manager pod | [optional] 
**root_reconciler** | **str** | Version of the deployed reconciler container in root-reconciler pod | [optional] 
**syncer** | **str** | Version of the deployed syncer pod | [optional] 

## Example

```python
from openapi_client.models.config_management_config_sync_version import ConfigManagementConfigSyncVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementConfigSyncVersion from a JSON string
config_management_config_sync_version_instance = ConfigManagementConfigSyncVersion.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementConfigSyncVersion.to_json())

# convert the object into a dict
config_management_config_sync_version_dict = config_management_config_sync_version_instance.to_dict()
# create an instance of ConfigManagementConfigSyncVersion from a dict
config_management_config_sync_version_from_dict = ConfigManagementConfigSyncVersion.from_dict(config_management_config_sync_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


