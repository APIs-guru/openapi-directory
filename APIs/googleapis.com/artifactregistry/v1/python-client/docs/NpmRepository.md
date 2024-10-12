# NpmRepository

Configuration for a Npm remote repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_repository** | **str** | One of the publicly available Npm repositories supported by Artifact Registry. | [optional] 

## Example

```python
from openapi_client.models.npm_repository import NpmRepository

# TODO update the JSON string below
json = "{}"
# create an instance of NpmRepository from a JSON string
npm_repository_instance = NpmRepository.from_json(json)
# print the JSON string representation of the object
print(NpmRepository.to_json())

# convert the object into a dict
npm_repository_dict = npm_repository_instance.to_dict()
# create an instance of NpmRepository from a dict
npm_repository_from_dict = NpmRepository.from_dict(npm_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


