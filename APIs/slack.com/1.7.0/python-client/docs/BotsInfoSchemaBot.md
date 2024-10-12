# BotsInfoSchemaBot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | 
**deleted** | **bool** |  | 
**icons** | [**BotsInfoSchemaBotIcons**](BotsInfoSchemaBotIcons.md) |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**updated** | **int** |  | 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bots_info_schema_bot import BotsInfoSchemaBot

# TODO update the JSON string below
json = "{}"
# create an instance of BotsInfoSchemaBot from a JSON string
bots_info_schema_bot_instance = BotsInfoSchemaBot.from_json(json)
# print the JSON string representation of the object
print(BotsInfoSchemaBot.to_json())

# convert the object into a dict
bots_info_schema_bot_dict = bots_info_schema_bot_instance.to_dict()
# create an instance of BotsInfoSchemaBot from a dict
bots_info_schema_bot_from_dict = BotsInfoSchemaBot.from_dict(bots_info_schema_bot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


