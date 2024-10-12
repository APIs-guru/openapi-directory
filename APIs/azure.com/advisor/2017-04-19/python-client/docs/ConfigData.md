# ConfigData

The Advisor configuration data structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource Id of the configuration resource. | [optional] 
**name** | **str** | The name of the configuration resource. | [optional] 
**properties** | **Dict[str, object]** | The list of property name/value pairs. | [optional] 
**type** | **str** | The type of the configuration resource. | [optional] 

## Example

```python
from openapi_client.models.config_data import ConfigData

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigData from a JSON string
config_data_instance = ConfigData.from_json(json)
# print the JSON string representation of the object
print(ConfigData.to_json())

# convert the object into a dict
config_data_dict = config_data_instance.to_dict()
# create an instance of ConfigData from a dict
config_data_from_dict = ConfigData.from_dict(config_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


