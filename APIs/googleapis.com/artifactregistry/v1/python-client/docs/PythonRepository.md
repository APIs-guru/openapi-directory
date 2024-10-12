# PythonRepository

Configuration for a Python remote repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_repository** | **str** | One of the publicly available Python repositories supported by Artifact Registry. | [optional] 

## Example

```python
from openapi_client.models.python_repository import PythonRepository

# TODO update the JSON string below
json = "{}"
# create an instance of PythonRepository from a JSON string
python_repository_instance = PythonRepository.from_json(json)
# print the JSON string representation of the object
print(PythonRepository.to_json())

# convert the object into a dict
python_repository_dict = python_repository_instance.to_dict()
# create an instance of PythonRepository from a dict
python_repository_from_dict = PythonRepository.from_dict(python_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


