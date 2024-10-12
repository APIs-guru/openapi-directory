# Bot

Bot resource definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BotProperties**](BotProperties.md) |  | [optional] 
**etag** | **str** | Entity Tag | [optional] 
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**kind** | [**Kind**](Kind.md) |  | [optional] 
**location** | **str** | Specifies the location of the resource. | [optional] 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bot import Bot

# TODO update the JSON string below
json = "{}"
# create an instance of Bot from a JSON string
bot_instance = Bot.from_json(json)
# print the JSON string representation of the object
print(Bot.to_json())

# convert the object into a dict
bot_dict = bot_instance.to_dict()
# create an instance of Bot from a dict
bot_from_dict = Bot.from_dict(bot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


