# CodeRepository

Repository containing the source code for a pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | [**Authorization**](Authorization.md) |  | [optional] 
**default_branch** | **str** | Default branch used to configure Continuous Integration (CI) in the pipeline. | 
**id** | **str** | Unique immutable identifier of the code repository. | 
**properties** | **Dict[str, str]** | Repository-specific properties. | [optional] 
**repository_type** | **str** | Type of code repository. | 

## Example

```python
from openapi_client.models.code_repository import CodeRepository

# TODO update the JSON string below
json = "{}"
# create an instance of CodeRepository from a JSON string
code_repository_instance = CodeRepository.from_json(json)
# print the JSON string representation of the object
print(CodeRepository.to_json())

# convert the object into a dict
code_repository_dict = code_repository_instance.to_dict()
# create an instance of CodeRepository from a dict
code_repository_from_dict = CodeRepository.from_dict(code_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


