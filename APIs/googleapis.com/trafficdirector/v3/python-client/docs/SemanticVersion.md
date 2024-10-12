# SemanticVersion

Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**major_number** | **int** |  | [optional] 
**minor_number** | **int** |  | [optional] 
**patch** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.semantic_version import SemanticVersion

# TODO update the JSON string below
json = "{}"
# create an instance of SemanticVersion from a JSON string
semantic_version_instance = SemanticVersion.from_json(json)
# print the JSON string representation of the object
print(SemanticVersion.to_json())

# convert the object into a dict
semantic_version_dict = semantic_version_instance.to_dict()
# create an instance of SemanticVersion from a dict
semantic_version_from_dict = SemanticVersion.from_dict(semantic_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


