# EnvironmentVariable

A key-value pair passed as an environment variable to the test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key for the environment variable. | [optional] 
**value** | **str** | Value for the environment variable. | [optional] 

## Example

```python
from openapi_client.models.environment_variable import EnvironmentVariable

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentVariable from a JSON string
environment_variable_instance = EnvironmentVariable.from_json(json)
# print the JSON string representation of the object
print(EnvironmentVariable.to_json())

# convert the object into a dict
environment_variable_dict = environment_variable_instance.to_dict()
# create an instance of EnvironmentVariable from a dict
environment_variable_from_dict = EnvironmentVariable.from_dict(environment_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


