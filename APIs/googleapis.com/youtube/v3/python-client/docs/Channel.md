# Channel

A *channel* resource contains information about a YouTube channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_details** | [**ChannelAuditDetails**](ChannelAuditDetails.md) |  | [optional] 
**branding_settings** | [**ChannelBrandingSettings**](ChannelBrandingSettings.md) |  | [optional] 
**content_details** | [**ChannelContentDetails**](ChannelContentDetails.md) |  | [optional] 
**content_owner_details** | [**ChannelContentOwnerDetails**](ChannelContentOwnerDetails.md) |  | [optional] 
**conversion_pings** | [**ChannelConversionPings**](ChannelConversionPings.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the channel. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#channel\&quot;. | [optional] [default to 'youtube#channel']
**localizations** | [**Dict[str, ChannelLocalization]**](ChannelLocalization.md) | Localizations for different languages | [optional] 
**snippet** | [**ChannelSnippet**](ChannelSnippet.md) |  | [optional] 
**statistics** | [**ChannelStatistics**](ChannelStatistics.md) |  | [optional] 
**status** | [**ChannelStatus**](ChannelStatus.md) |  | [optional] 
**topic_details** | [**ChannelTopicDetails**](ChannelTopicDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel import Channel

# TODO update the JSON string below
json = "{}"
# create an instance of Channel from a JSON string
channel_instance = Channel.from_json(json)
# print the JSON string representation of the object
print(Channel.to_json())

# convert the object into a dict
channel_dict = channel_instance.to_dict()
# create an instance of Channel from a dict
channel_from_dict = Channel.from_dict(channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


