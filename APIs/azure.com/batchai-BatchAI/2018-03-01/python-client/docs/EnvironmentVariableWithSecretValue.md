# EnvironmentVariableWithSecretValue

A collection of environment variables with secret values to set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**value** | **str** |  | [optional] 
**value_secret_reference** | [**KeyVaultSecretReference**](KeyVaultSecretReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.environment_variable_with_secret_value import EnvironmentVariableWithSecretValue

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentVariableWithSecretValue from a JSON string
environment_variable_with_secret_value_instance = EnvironmentVariableWithSecretValue.from_json(json)
# print the JSON string representation of the object
print(EnvironmentVariableWithSecretValue.to_json())

# convert the object into a dict
environment_variable_with_secret_value_dict = environment_variable_with_secret_value_instance.to_dict()
# create an instance of EnvironmentVariableWithSecretValue from a dict
environment_variable_with_secret_value_from_dict = EnvironmentVariableWithSecretValue.from_dict(environment_variable_with_secret_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


