# EnvironmentSettingCreationParameters

Settings related to creating an environment setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_setting_creation_parameters** | [**ResourceSettingCreationParameters**](ResourceSettingCreationParameters.md) |  | 

## Example

```python
from openapi_client.models.environment_setting_creation_parameters import EnvironmentSettingCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentSettingCreationParameters from a JSON string
environment_setting_creation_parameters_instance = EnvironmentSettingCreationParameters.from_json(json)
# print the JSON string representation of the object
print(EnvironmentSettingCreationParameters.to_json())

# convert the object into a dict
environment_setting_creation_parameters_dict = environment_setting_creation_parameters_instance.to_dict()
# create an instance of EnvironmentSettingCreationParameters from a dict
environment_setting_creation_parameters_from_dict = EnvironmentSettingCreationParameters.from_dict(environment_setting_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


