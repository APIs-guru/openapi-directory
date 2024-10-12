# ChannelConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automod** | **str** |  | 
**automod_behavior** | **str** |  | 
**automod_thresholds** | [**Thresholds**](Thresholds.md) |  | [optional] 
**blocklist** | **str** |  | [optional] 
**blocklist_behavior** | **str** |  | [optional] 
**commands** | **List[str]** | List of commands that channel supports | 
**connect_events** | **bool** |  | 
**created_at** | **datetime** |  | 
**custom_events** | **bool** |  | 
**max_message_length** | **int** |  | 
**message_retention** | **str** |  | 
**mutes** | **bool** |  | 
**name** | **str** |  | 
**push_notifications** | **bool** |  | 
**quotes** | **bool** |  | 
**reactions** | **bool** |  | 
**read_events** | **bool** |  | 
**reminders** | **bool** |  | 
**replies** | **bool** |  | 
**search** | **bool** |  | 
**typing_events** | **bool** |  | 
**updated_at** | **datetime** |  | 
**uploads** | **bool** |  | 
**url_enrichment** | **bool** |  | 

## Example

```python
from openapi_client.models.channel_config import ChannelConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelConfig from a JSON string
channel_config_instance = ChannelConfig.from_json(json)
# print the JSON string representation of the object
print(ChannelConfig.to_json())

# convert the object into a dict
channel_config_dict = channel_config_instance.to_dict()
# create an instance of ChannelConfig from a dict
channel_config_from_dict = ChannelConfig.from_dict(channel_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


