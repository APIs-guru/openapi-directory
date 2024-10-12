# ConfigSource

Represents a source file which is used to generate the service configuration defined by `google.api.Service`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[ConfigFile]**](ConfigFile.md) | Set of source configuration files that are used to generate a service configuration (&#x60;google.api.Service&#x60;). | [optional] 
**id** | **str** | A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. If empty, the server may choose to generate one instead. | [optional] 

## Example

```python
from openapi_client.models.config_source import ConfigSource

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigSource from a JSON string
config_source_instance = ConfigSource.from_json(json)
# print the JSON string representation of the object
print(ConfigSource.to_json())

# convert the object into a dict
config_source_dict = config_source_instance.to_dict()
# create an instance of ConfigSource from a dict
config_source_from_dict = ConfigSource.from_dict(config_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


