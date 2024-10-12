# Config

Configuration of a module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module_enablement_state** | **str** | The state of enablement for the module at its level of the resource hierarchy. | [optional] 
**value** | **Dict[str, object]** | The configuration value for the module. The absence of this field implies its inheritance from the parent. | [optional] 

## Example

```python
from openapi_client.models.config import Config

# TODO update the JSON string below
json = "{}"
# create an instance of Config from a JSON string
config_instance = Config.from_json(json)
# print the JSON string representation of the object
print(Config.to_json())

# convert the object into a dict
config_dict = config_instance.to_dict()
# create an instance of Config from a dict
config_from_dict = Config.from_dict(config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


