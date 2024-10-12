# GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository

Publicly available Yum repositories constructed from a common repository base and a custom repository path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository_base** | **str** | A common public repository base for Yum. | [optional] 
**repository_path** | **str** | A custom field to define a path to a specific repository from the base. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_artifactregistry_v1_remote_repository_config_yum_repository_public_repository import GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository from a JSON string
google_devtools_artifactregistry_v1_remote_repository_config_yum_repository_public_repository_instance = GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository.to_json())

# convert the object into a dict
google_devtools_artifactregistry_v1_remote_repository_config_yum_repository_public_repository_dict = google_devtools_artifactregistry_v1_remote_repository_config_yum_repository_public_repository_instance.to_dict()
# create an instance of GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository from a dict
google_devtools_artifactregistry_v1_remote_repository_config_yum_repository_public_repository_from_dict = GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository.from_dict(google_devtools_artifactregistry_v1_remote_repository_config_yum_repository_public_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


