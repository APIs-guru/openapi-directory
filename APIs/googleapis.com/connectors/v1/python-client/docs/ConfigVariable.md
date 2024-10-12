# ConfigVariable

ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Value is a bool. | [optional] 
**encryption_key_value** | [**EncryptionKey**](EncryptionKey.md) |  | [optional] 
**int_value** | **str** | Value is an integer | [optional] 
**key** | **str** | Key of the config variable. | [optional] 
**secret_value** | [**Secret**](Secret.md) |  | [optional] 
**string_value** | **str** | Value is a string. | [optional] 

## Example

```python
from openapi_client.models.config_variable import ConfigVariable

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigVariable from a JSON string
config_variable_instance = ConfigVariable.from_json(json)
# print the JSON string representation of the object
print(ConfigVariable.to_json())

# convert the object into a dict
config_variable_dict = config_variable_instance.to_dict()
# create an instance of ConfigVariable from a dict
config_variable_from_dict = ConfigVariable.from_dict(config_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


