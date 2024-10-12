# BatchCreateGitLabConnectedRepositoriesResponseMetadata

Metadata for `BatchCreateGitLabConnectedRepositories` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**config** | **str** | The name of the &#x60;GitLabConfig&#x60; that added connected repositories. Format: &#x60;projects/{project}/locations/{location}/gitLabConfigs/{config}&#x60; | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_git_lab_connected_repositories_response_metadata import BatchCreateGitLabConnectedRepositoriesResponseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateGitLabConnectedRepositoriesResponseMetadata from a JSON string
batch_create_git_lab_connected_repositories_response_metadata_instance = BatchCreateGitLabConnectedRepositoriesResponseMetadata.from_json(json)
# print the JSON string representation of the object
print(BatchCreateGitLabConnectedRepositoriesResponseMetadata.to_json())

# convert the object into a dict
batch_create_git_lab_connected_repositories_response_metadata_dict = batch_create_git_lab_connected_repositories_response_metadata_instance.to_dict()
# create an instance of BatchCreateGitLabConnectedRepositoriesResponseMetadata from a dict
batch_create_git_lab_connected_repositories_response_metadata_from_dict = BatchCreateGitLabConnectedRepositoriesResponseMetadata.from_dict(batch_create_git_lab_connected_repositories_response_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


