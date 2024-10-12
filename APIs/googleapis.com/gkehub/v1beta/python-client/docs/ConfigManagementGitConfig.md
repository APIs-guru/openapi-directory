# ConfigManagementGitConfig

Git repo configuration for a single cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_service_account_email** | **str** | The Google Cloud Service Account Email used for auth when secret_type is gcpServiceAccount. | [optional] 
**https_proxy** | **str** | URL for the HTTPS proxy to be used when communicating with the Git repo. | [optional] 
**policy_dir** | **str** | The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository. | [optional] 
**secret_type** | **str** | Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive. Required. | [optional] 
**sync_branch** | **str** | The branch of the repository to sync from. Default: master. | [optional] 
**sync_repo** | **str** | The URL of the Git repository to use as the source of truth. | [optional] 
**sync_rev** | **str** | Git revision (tag or hash) to check out. Default HEAD. | [optional] 
**sync_wait_secs** | **str** | Period in seconds between consecutive syncs. Default: 15. | [optional] 

## Example

```python
from openapi_client.models.config_management_git_config import ConfigManagementGitConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementGitConfig from a JSON string
config_management_git_config_instance = ConfigManagementGitConfig.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementGitConfig.to_json())

# convert the object into a dict
config_management_git_config_dict = config_management_git_config_instance.to_dict()
# create an instance of ConfigManagementGitConfig from a dict
config_management_git_config_from_dict = ConfigManagementGitConfig.from_dict(config_management_git_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


