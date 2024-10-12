# ChannelContentDetails

Details about the content of a channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**related_playlists** | [**ChannelContentDetailsRelatedPlaylists**](ChannelContentDetailsRelatedPlaylists.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_content_details import ChannelContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelContentDetails from a JSON string
channel_content_details_instance = ChannelContentDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelContentDetails.to_json())

# convert the object into a dict
channel_content_details_dict = channel_content_details_instance.to_dict()
# create an instance of ChannelContentDetails from a dict
channel_content_details_from_dict = ChannelContentDetails.from_dict(channel_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


