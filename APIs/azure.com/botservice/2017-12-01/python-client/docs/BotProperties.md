# BotProperties

The parameters to provide for the Bot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configured_channels** | **List[str]** | Collection of channels for which the bot is configured | [optional] [readonly] 
**description** | **str** | The description of the bot | [optional] 
**developer_app_insight_key** | **str** | The Application Insights key | [optional] 
**developer_app_insights_api_key** | **str** | The Application Insights Api Key | [optional] 
**developer_app_insights_application_id** | **str** | The Application Insights App Id | [optional] 
**display_name** | **str** | The Name of the bot | 
**enabled_channels** | **List[str]** | Collection of channels for which the bot is enabled | [optional] [readonly] 
**endpoint** | **str** | The bot&#39;s endpoint | 
**endpoint_version** | **str** | The bot&#39;s endpoint version | [optional] [readonly] 
**icon_url** | **str** | The Icon Url of the bot | [optional] 
**luis_app_ids** | **List[str]** | Collection of LUIS App Ids | [optional] 
**luis_key** | **str** | The LUIS Key | [optional] 
**msa_app_id** | **str** | Microsoft App Id for the bot | 

## Example

```python
from openapi_client.models.bot_properties import BotProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BotProperties from a JSON string
bot_properties_instance = BotProperties.from_json(json)
# print the JSON string representation of the object
print(BotProperties.to_json())

# convert the object into a dict
bot_properties_dict = bot_properties_instance.to_dict()
# create an instance of BotProperties from a dict
bot_properties_from_dict = BotProperties.from_dict(bot_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


