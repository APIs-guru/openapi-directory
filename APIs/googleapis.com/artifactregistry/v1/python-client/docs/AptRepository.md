# AptRepository

Configuration for an Apt remote repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_repository** | [**GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository**](GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository.md) |  | [optional] 

## Example

```python
from openapi_client.models.apt_repository import AptRepository

# TODO update the JSON string below
json = "{}"
# create an instance of AptRepository from a JSON string
apt_repository_instance = AptRepository.from_json(json)
# print the JSON string representation of the object
print(AptRepository.to_json())

# convert the object into a dict
apt_repository_dict = apt_repository_instance.to_dict()
# create an instance of AptRepository from a dict
apt_repository_from_dict = AptRepository.from_dict(apt_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


