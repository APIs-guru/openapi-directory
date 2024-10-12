# CreateGitLabConfigOperationMetadata

Metadata for `CreateGitLabConfig` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 
**gitlab_config** | **str** | The resource name of the GitLabConfig to be created. Format: &#x60;projects/{project}/locations/{location}/gitlabConfigs/{id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.create_git_lab_config_operation_metadata import CreateGitLabConfigOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGitLabConfigOperationMetadata from a JSON string
create_git_lab_config_operation_metadata_instance = CreateGitLabConfigOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateGitLabConfigOperationMetadata.to_json())

# convert the object into a dict
create_git_lab_config_operation_metadata_dict = create_git_lab_config_operation_metadata_instance.to_dict()
# create an instance of CreateGitLabConfigOperationMetadata from a dict
create_git_lab_config_operation_metadata_from_dict = CreateGitLabConfigOperationMetadata.from_dict(create_git_lab_config_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


