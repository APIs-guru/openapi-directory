# EnvVariable

An environment variable to set for an action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hidden** | **bool** | Deprecated, do not use. | [optional] 
**name** | **str** | The name of the environment variable. | [optional] 
**value** | **str** | The value of the variable. | [optional] 

## Example

```python
from openapi_client.models.env_variable import EnvVariable

# TODO update the JSON string below
json = "{}"
# create an instance of EnvVariable from a JSON string
env_variable_instance = EnvVariable.from_json(json)
# print the JSON string representation of the object
print(EnvVariable.to_json())

# convert the object into a dict
env_variable_dict = env_variable_instance.to_dict()
# create an instance of EnvVariable from a dict
env_variable_from_dict = EnvVariable.from_dict(env_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


