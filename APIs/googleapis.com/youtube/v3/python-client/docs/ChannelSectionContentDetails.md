# ChannelSectionContentDetails

Details about a channelsection, including playlists and channels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[str]** | The channel ids for type multiple_channels. | [optional] 
**playlists** | **List[str]** | The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed. | [optional] 

## Example

```python
from openapi_client.models.channel_section_content_details import ChannelSectionContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelSectionContentDetails from a JSON string
channel_section_content_details_instance = ChannelSectionContentDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelSectionContentDetails.to_json())

# convert the object into a dict
channel_section_content_details_dict = channel_section_content_details_instance.to_dict()
# create an instance of ChannelSectionContentDetails from a dict
channel_section_content_details_from_dict = ChannelSectionContentDetails.from_dict(channel_section_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


