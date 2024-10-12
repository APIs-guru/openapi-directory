# GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository

Publicly available Apt repositories constructed from a common repository base and a custom repository path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository_base** | **str** | A common public repository base for Apt. | [optional] 
**repository_path** | **str** | A custom field to define a path to a specific repository from the base. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_artifactregistry_v1_remote_repository_config_apt_repository_public_repository import GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository from a JSON string
google_devtools_artifactregistry_v1_remote_repository_config_apt_repository_public_repository_instance = GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository.to_json())

# convert the object into a dict
google_devtools_artifactregistry_v1_remote_repository_config_apt_repository_public_repository_dict = google_devtools_artifactregistry_v1_remote_repository_config_apt_repository_public_repository_instance.to_dict()
# create an instance of GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository from a dict
google_devtools_artifactregistry_v1_remote_repository_config_apt_repository_public_repository_from_dict = GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository.from_dict(google_devtools_artifactregistry_v1_remote_repository_config_apt_repository_public_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


