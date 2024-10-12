# DeleteGitHubEnterpriseConfigOperationMetadata

Metadata for `DeleteGitHubEnterpriseConfig` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 
**github_enterprise_config** | **str** | The resource name of the GitHubEnterprise to be deleted. Format: &#x60;projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.delete_git_hub_enterprise_config_operation_metadata import DeleteGitHubEnterpriseConfigOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteGitHubEnterpriseConfigOperationMetadata from a JSON string
delete_git_hub_enterprise_config_operation_metadata_instance = DeleteGitHubEnterpriseConfigOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(DeleteGitHubEnterpriseConfigOperationMetadata.to_json())

# convert the object into a dict
delete_git_hub_enterprise_config_operation_metadata_dict = delete_git_hub_enterprise_config_operation_metadata_instance.to_dict()
# create an instance of DeleteGitHubEnterpriseConfigOperationMetadata from a dict
delete_git_hub_enterprise_config_operation_metadata_from_dict = DeleteGitHubEnterpriseConfigOperationMetadata.from_dict(delete_git_hub_enterprise_config_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


