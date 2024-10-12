# SkypeChannelProperties

The parameters to provide for the Microsoft Teams channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calling_web_hook** | **str** | Calling web hook for Skype channel | [optional] 
**enable_calling** | **bool** | Enable calling for Skype channel | [optional] 
**enable_groups** | **bool** | Enable groups for Skype channel | [optional] 
**enable_media_cards** | **bool** | Enable media cards for Skype channel | [optional] 
**enable_messaging** | **bool** | Enable messaging for Skype channel | [optional] 
**enable_screen_sharing** | **bool** | Enable screen sharing for Skype channel | [optional] 
**enable_video** | **bool** | Enable video for Skype channel | [optional] 
**groups_mode** | **str** | Group mode for Skype channel | [optional] 
**is_enabled** | **bool** | Whether this channel is enabled for the bot | 

## Example

```python
from openapi_client.models.skype_channel_properties import SkypeChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SkypeChannelProperties from a JSON string
skype_channel_properties_instance = SkypeChannelProperties.from_json(json)
# print the JSON string representation of the object
print(SkypeChannelProperties.to_json())

# convert the object into a dict
skype_channel_properties_dict = skype_channel_properties_instance.to_dict()
# create an instance of SkypeChannelProperties from a dict
skype_channel_properties_from_dict = SkypeChannelProperties.from_dict(skype_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


