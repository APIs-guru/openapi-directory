# UpdateGitHubEnterpriseConfigOperationMetadata

Metadata for `UpdateGitHubEnterpriseConfig` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 
**github_enterprise_config** | **str** | The resource name of the GitHubEnterprise to be updated. Format: &#x60;projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.update_git_hub_enterprise_config_operation_metadata import UpdateGitHubEnterpriseConfigOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateGitHubEnterpriseConfigOperationMetadata from a JSON string
update_git_hub_enterprise_config_operation_metadata_instance = UpdateGitHubEnterpriseConfigOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateGitHubEnterpriseConfigOperationMetadata.to_json())

# convert the object into a dict
update_git_hub_enterprise_config_operation_metadata_dict = update_git_hub_enterprise_config_operation_metadata_instance.to_dict()
# create an instance of UpdateGitHubEnterpriseConfigOperationMetadata from a dict
update_git_hub_enterprise_config_operation_metadata_from_dict = UpdateGitHubEnterpriseConfigOperationMetadata.from_dict(update_git_hub_enterprise_config_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


