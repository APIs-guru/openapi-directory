# ChannelSectionSnippet

Basic details about a channel section, including title, style and position.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the channel that published the channel section. | [optional] 
**default_language** | **str** | The language of the channel section&#39;s default title and description. | [optional] 
**localized** | [**ChannelSectionLocalization**](ChannelSectionLocalization.md) |  | [optional] 
**position** | **int** | The position of the channel section in the channel. | [optional] 
**style** | **str** | The style of the channel section. | [optional] 
**title** | **str** | The channel section&#39;s title for multiple_playlists and multiple_channels. | [optional] 
**type** | **str** | The type of the channel section. | [optional] 

## Example

```python
from openapi_client.models.channel_section_snippet import ChannelSectionSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelSectionSnippet from a JSON string
channel_section_snippet_instance = ChannelSectionSnippet.from_json(json)
# print the JSON string representation of the object
print(ChannelSectionSnippet.to_json())

# convert the object into a dict
channel_section_snippet_dict = channel_section_snippet_instance.to_dict()
# create an instance of ChannelSectionSnippet from a dict
channel_section_snippet_from_dict = ChannelSectionSnippet.from_dict(channel_section_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


