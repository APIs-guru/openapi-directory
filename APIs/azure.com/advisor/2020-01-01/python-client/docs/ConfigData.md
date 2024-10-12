# ConfigData

The Advisor configuration data structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConfigDataProperties**](ConfigDataProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

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


