# PyPiRepositoryConfig

Configuration for PyPi repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pypi_repository** | **str** | Optional. PyPi repository address | [optional] 

## Example

```python
from openapi_client.models.py_pi_repository_config import PyPiRepositoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PyPiRepositoryConfig from a JSON string
py_pi_repository_config_instance = PyPiRepositoryConfig.from_json(json)
# print the JSON string representation of the object
print(PyPiRepositoryConfig.to_json())

# convert the object into a dict
py_pi_repository_config_dict = py_pi_repository_config_instance.to_dict()
# create an instance of PyPiRepositoryConfig from a dict
py_pi_repository_config_from_dict = PyPiRepositoryConfig.from_dict(py_pi_repository_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


