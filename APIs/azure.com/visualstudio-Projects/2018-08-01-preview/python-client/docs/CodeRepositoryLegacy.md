# CodeRepositoryLegacy

Defines a code repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_reference** | **str** | Reference to the authorization info used to access the code repository. This value is used as a key into the global authorization details dictionary. | [optional] 
**default_branch** | **str** | Default branch for which continuous integration should be configured in the VSTS pipeline. | 
**id** | **str** | Unique identifier of the code repository. | 
**properties** | **Dict[str, str]** | Repository-specific properties. | [optional] 
**repository_type** | **str** | Type of code repository. | 

## Example

```python
from openapi_client.models.code_repository_legacy import CodeRepositoryLegacy

# TODO update the JSON string below
json = "{}"
# create an instance of CodeRepositoryLegacy from a JSON string
code_repository_legacy_instance = CodeRepositoryLegacy.from_json(json)
# print the JSON string representation of the object
print(CodeRepositoryLegacy.to_json())

# convert the object into a dict
code_repository_legacy_dict = code_repository_legacy_instance.to_dict()
# create an instance of CodeRepositoryLegacy from a dict
code_repository_legacy_from_dict = CodeRepositoryLegacy.from_dict(code_repository_legacy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


