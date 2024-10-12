# ConfigServerProperties

Config server git properties payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_server** | [**ConfigServerSettings**](ConfigServerSettings.md) |  | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**state** | **str** | State of the config server. | [optional] [readonly] 

## Example

```python
from openapi_client.models.config_server_properties import ConfigServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigServerProperties from a JSON string
config_server_properties_instance = ConfigServerProperties.from_json(json)
# print the JSON string representation of the object
print(ConfigServerProperties.to_json())

# convert the object into a dict
config_server_properties_dict = config_server_properties_instance.to_dict()
# create an instance of ConfigServerProperties from a dict
config_server_properties_from_dict = ConfigServerProperties.from_dict(config_server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


