# TelegrafPlugins


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os** | **str** |  | [optional] 
**plugins** | [**List[TelegrafPlugin]**](TelegrafPlugin.md) |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.telegraf_plugins import TelegrafPlugins

# TODO update the JSON string below
json = "{}"
# create an instance of TelegrafPlugins from a JSON string
telegraf_plugins_instance = TelegrafPlugins.from_json(json)
# print the JSON string representation of the object
print(TelegrafPlugins.to_json())

# convert the object into a dict
telegraf_plugins_dict = telegraf_plugins_instance.to_dict()
# create an instance of TelegrafPlugins from a dict
telegraf_plugins_from_dict = TelegrafPlugins.from_dict(telegraf_plugins_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


