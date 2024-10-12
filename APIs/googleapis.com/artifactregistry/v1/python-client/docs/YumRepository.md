# YumRepository

Configuration for a Yum remote repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_repository** | [**GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository**](GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository.md) |  | [optional] 

## Example

```python
from openapi_client.models.yum_repository import YumRepository

# TODO update the JSON string below
json = "{}"
# create an instance of YumRepository from a JSON string
yum_repository_instance = YumRepository.from_json(json)
# print the JSON string representation of the object
print(YumRepository.to_json())

# convert the object into a dict
yum_repository_dict = yum_repository_instance.to_dict()
# create an instance of YumRepository from a dict
yum_repository_from_dict = YumRepository.from_dict(yum_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


