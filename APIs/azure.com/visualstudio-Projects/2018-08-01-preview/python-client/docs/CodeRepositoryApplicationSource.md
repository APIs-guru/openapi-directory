# CodeRepositoryApplicationSource

Defines the source application, when it resides in a code repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository** | [**CodeRepositoryLegacy**](CodeRepositoryLegacy.md) |  | 

## Example

```python
from openapi_client.models.code_repository_application_source import CodeRepositoryApplicationSource

# TODO update the JSON string below
json = "{}"
# create an instance of CodeRepositoryApplicationSource from a JSON string
code_repository_application_source_instance = CodeRepositoryApplicationSource.from_json(json)
# print the JSON string representation of the object
print(CodeRepositoryApplicationSource.to_json())

# convert the object into a dict
code_repository_application_source_dict = code_repository_application_source_instance.to_dict()
# create an instance of CodeRepositoryApplicationSource from a dict
code_repository_application_source_from_dict = CodeRepositoryApplicationSource.from_dict(code_repository_application_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


