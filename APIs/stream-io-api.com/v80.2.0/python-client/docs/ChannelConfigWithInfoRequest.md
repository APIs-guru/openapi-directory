# ChannelConfigWithInfoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automod** | **str** |  | 
**automod_behavior** | **str** |  | [optional] 
**automod_thresholds** | [**ThresholdsRequest**](ThresholdsRequest.md) |  | [optional] 
**blocklist** | **str** |  | [optional] 
**blocklist_behavior** | **str** |  | [optional] 
**commands** | [**List[CommandRequest]**](CommandRequest.md) |  | [optional] 
**connect_events** | **bool** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**custom_events** | **bool** |  | [optional] 
**grants** | **Dict[str, List[str]]** |  | [optional] 
**max_message_length** | **int** |  | [optional] 
**message_retention** | **str** |  | [optional] 
**mutes** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**push_notifications** | **bool** |  | [optional] 
**quotes** | **bool** |  | [optional] 
**reactions** | **bool** |  | [optional] 
**read_events** | **bool** |  | [optional] 
**reminders** | **bool** |  | [optional] 
**replies** | **bool** |  | [optional] 
**search** | **bool** |  | [optional] 
**typing_events** | **bool** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**uploads** | **bool** |  | [optional] 
**url_enrichment** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.channel_config_with_info_request import ChannelConfigWithInfoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelConfigWithInfoRequest from a JSON string
channel_config_with_info_request_instance = ChannelConfigWithInfoRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelConfigWithInfoRequest.to_json())

# convert the object into a dict
channel_config_with_info_request_dict = channel_config_with_info_request_instance.to_dict()
# create an instance of ChannelConfigWithInfoRequest from a dict
channel_config_with_info_request_from_dict = ChannelConfigWithInfoRequest.from_dict(channel_config_with_info_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


