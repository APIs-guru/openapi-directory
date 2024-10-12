# ConfigServerSettings

The settings of config server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**git_property** | [**ConfigServerGitProperty**](ConfigServerGitProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.config_server_settings import ConfigServerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigServerSettings from a JSON string
config_server_settings_instance = ConfigServerSettings.from_json(json)
# print the JSON string representation of the object
print(ConfigServerSettings.to_json())

# convert the object into a dict
config_server_settings_dict = config_server_settings_instance.to_dict()
# create an instance of ConfigServerSettings from a dict
config_server_settings_from_dict = ConfigServerSettings.from_dict(config_server_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


