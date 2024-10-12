# MavenRepositoryConfig

MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_snapshot_overwrites** | **bool** | The repository with this flag will allow publishing the same snapshot versions. | [optional] 
**version_policy** | **str** | Version policy defines the versions that the registry will accept. | [optional] 

## Example

```python
from openapi_client.models.maven_repository_config import MavenRepositoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MavenRepositoryConfig from a JSON string
maven_repository_config_instance = MavenRepositoryConfig.from_json(json)
# print the JSON string representation of the object
print(MavenRepositoryConfig.to_json())

# convert the object into a dict
maven_repository_config_dict = maven_repository_config_instance.to_dict()
# create an instance of MavenRepositoryConfig from a dict
maven_repository_config_from_dict = MavenRepositoryConfig.from_dict(maven_repository_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


