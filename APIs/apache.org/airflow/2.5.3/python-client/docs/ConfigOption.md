# ConfigOption

The option of configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] [readonly] 
**value** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.config_option import ConfigOption

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigOption from a JSON string
config_option_instance = ConfigOption.from_json(json)
# print the JSON string representation of the object
print(ConfigOption.to_json())

# convert the object into a dict
config_option_dict = config_option_instance.to_dict()
# create an instance of ConfigOption from a dict
config_option_from_dict = ConfigOption.from_dict(config_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


