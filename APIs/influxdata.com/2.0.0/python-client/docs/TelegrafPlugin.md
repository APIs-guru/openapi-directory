# TelegrafPlugin


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.telegraf_plugin import TelegrafPlugin

# TODO update the JSON string below
json = "{}"
# create an instance of TelegrafPlugin from a JSON string
telegraf_plugin_instance = TelegrafPlugin.from_json(json)
# print the JSON string representation of the object
print(TelegrafPlugin.to_json())

# convert the object into a dict
telegraf_plugin_dict = telegraf_plugin_instance.to_dict()
# create an instance of TelegrafPlugin from a dict
telegraf_plugin_from_dict = TelegrafPlugin.from_dict(telegraf_plugin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


