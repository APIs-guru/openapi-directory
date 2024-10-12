# MsTeamsChannelProperties

The parameters to provide for the Microsoft Teams channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_mode** | **str** | Enable messaging for Microsoft Teams channel | [optional] 
**enable_calling** | **bool** | Enable calling for Microsoft Teams channel | [optional] 
**enable_media_cards** | **bool** | Enable media cards for Microsoft Teams channel | [optional] 
**enable_messaging** | **bool** | Enable messaging for Microsoft Teams channel | [optional] 
**enable_video** | **bool** | Enable video for Microsoft Teams channel | [optional] 
**is_enabled** | **bool** | Whether this channel is enabled for the bot | 

## Example

```python
from openapi_client.models.ms_teams_channel_properties import MsTeamsChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MsTeamsChannelProperties from a JSON string
ms_teams_channel_properties_instance = MsTeamsChannelProperties.from_json(json)
# print the JSON string representation of the object
print(MsTeamsChannelProperties.to_json())

# convert the object into a dict
ms_teams_channel_properties_dict = ms_teams_channel_properties_instance.to_dict()
# create an instance of MsTeamsChannelProperties from a dict
ms_teams_channel_properties_from_dict = MsTeamsChannelProperties.from_dict(ms_teams_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


