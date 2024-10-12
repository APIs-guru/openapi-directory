# MavenRepository

Configuration for a Maven remote repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_repository** | **str** | One of the publicly available Maven repositories supported by Artifact Registry. | [optional] 

## Example

```python
from openapi_client.models.maven_repository import MavenRepository

# TODO update the JSON string below
json = "{}"
# create an instance of MavenRepository from a JSON string
maven_repository_instance = MavenRepository.from_json(json)
# print the JSON string representation of the object
print(MavenRepository.to_json())

# convert the object into a dict
maven_repository_dict = maven_repository_instance.to_dict()
# create an instance of MavenRepository from a dict
maven_repository_from_dict = MavenRepository.from_dict(maven_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


