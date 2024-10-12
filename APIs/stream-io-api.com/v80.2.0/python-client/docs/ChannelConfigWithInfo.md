# ChannelConfigWithInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automod** | **str** |  | 
**automod_behavior** | **str** |  | 
**automod_thresholds** | [**Thresholds**](Thresholds.md) |  | [optional] 
**blocklist** | **str** |  | [optional] 
**blocklist_behavior** | **str** |  | [optional] 
**commands** | [**List[Command]**](Command.md) |  | 
**connect_events** | **bool** |  | 
**created_at** | **datetime** |  | 
**custom_events** | **bool** |  | 
**grants** | **Dict[str, List[str]]** |  | [optional] 
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
from openapi_client.models.channel_config_with_info import ChannelConfigWithInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelConfigWithInfo from a JSON string
channel_config_with_info_instance = ChannelConfigWithInfo.from_json(json)
# print the JSON string representation of the object
print(ChannelConfigWithInfo.to_json())

# convert the object into a dict
channel_config_with_info_dict = channel_config_with_info_instance.to_dict()
# create an instance of ChannelConfigWithInfo from a dict
channel_config_with_info_from_dict = ChannelConfigWithInfo.from_dict(channel_config_with_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


