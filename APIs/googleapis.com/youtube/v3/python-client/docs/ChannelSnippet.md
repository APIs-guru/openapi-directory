# ChannelSnippet

Basic details about a channel, including title, description and thumbnails.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country of the channel. | [optional] 
**custom_url** | **str** | The custom url of the channel. | [optional] 
**default_language** | **str** | The language of the channel&#39;s default title and description. | [optional] 
**description** | **str** | The description of the channel. | [optional] 
**localized** | [**ChannelLocalization**](ChannelLocalization.md) |  | [optional] 
**published_at** | **datetime** | The date and time that the channel was created. | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The channel&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.channel_snippet import ChannelSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelSnippet from a JSON string
channel_snippet_instance = ChannelSnippet.from_json(json)
# print the JSON string representation of the object
print(ChannelSnippet.to_json())

# convert the object into a dict
channel_snippet_dict = channel_snippet_instance.to_dict()
# create an instance of ChannelSnippet from a dict
channel_snippet_from_dict = ChannelSnippet.from_dict(channel_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


