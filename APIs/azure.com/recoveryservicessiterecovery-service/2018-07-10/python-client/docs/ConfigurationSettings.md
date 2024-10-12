# ConfigurationSettings

Replication provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the class type. Overridden in derived classes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration_settings import ConfigurationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationSettings from a JSON string
configuration_settings_instance = ConfigurationSettings.from_json(json)
# print the JSON string representation of the object
print(ConfigurationSettings.to_json())

# convert the object into a dict
configuration_settings_dict = configuration_settings_instance.to_dict()
# create an instance of ConfigurationSettings from a dict
configuration_settings_from_dict = ConfigurationSettings.from_dict(configuration_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


