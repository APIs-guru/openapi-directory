# ChannelSettings

Branding properties for the channel view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country of the channel. | [optional] 
**default_language** | **str** |  | [optional] 
**default_tab** | **str** | Which content tab users should see when viewing the channel. | [optional] 
**description** | **str** | Specifies the channel description. | [optional] 
**featured_channels_title** | **str** | Title for the featured channels tab. | [optional] 
**featured_channels_urls** | **List[str]** | The list of featured channels. | [optional] 
**keywords** | **str** | Lists keywords associated with the channel, comma-separated. | [optional] 
**moderate_comments** | **bool** | Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible. | [optional] 
**profile_color** | **str** | A prominent color that can be rendered on this channel page. | [optional] 
**show_browse_view** | **bool** | Whether the tab to browse the videos should be displayed. | [optional] 
**show_related_channels** | **bool** | Whether related channels should be proposed. | [optional] 
**title** | **str** | Specifies the channel title. | [optional] 
**tracking_analytics_account_id** | **str** | The ID for a Google Analytics account to track and measure traffic to the channels. | [optional] 
**unsubscribed_trailer** | **str** | The trailer of the channel, for users that are not subscribers. | [optional] 

## Example

```python
from openapi_client.models.channel_settings import ChannelSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelSettings from a JSON string
channel_settings_instance = ChannelSettings.from_json(json)
# print the JSON string representation of the object
print(ChannelSettings.to_json())

# convert the object into a dict
channel_settings_dict = channel_settings_instance.to_dict()
# create an instance of ChannelSettings from a dict
channel_settings_from_dict = ChannelSettings.from_dict(channel_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


