# DeleteGitLabConfigOperationMetadata

Metadata for `DeleteGitLabConfig` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 
**gitlab_config** | **str** | The resource name of the GitLabConfig to be created. Format: &#x60;projects/{project}/locations/{location}/gitlabConfigs/{id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.delete_git_lab_config_operation_metadata import DeleteGitLabConfigOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteGitLabConfigOperationMetadata from a JSON string
delete_git_lab_config_operation_metadata_instance = DeleteGitLabConfigOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(DeleteGitLabConfigOperationMetadata.to_json())

# convert the object into a dict
delete_git_lab_config_operation_metadata_dict = delete_git_lab_config_operation_metadata_instance.to_dict()
# create an instance of DeleteGitLabConfigOperationMetadata from a dict
delete_git_lab_config_operation_metadata_from_dict = DeleteGitLabConfigOperationMetadata.from_dict(delete_git_lab_config_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


