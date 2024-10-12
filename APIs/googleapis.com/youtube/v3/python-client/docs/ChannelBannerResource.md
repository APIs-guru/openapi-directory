# ChannelBannerResource

A channel banner returned as the response to a channel_banner.insert call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#channelBannerResource\&quot;. | [optional] [default to 'youtube#channelBannerResource']
**url** | **str** | The URL of this banner image. | [optional] 

## Example

```python
from openapi_client.models.channel_banner_resource import ChannelBannerResource

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelBannerResource from a JSON string
channel_banner_resource_instance = ChannelBannerResource.from_json(json)
# print the JSON string representation of the object
print(ChannelBannerResource.to_json())

# convert the object into a dict
channel_banner_resource_dict = channel_banner_resource_instance.to_dict()
# create an instance of ChannelBannerResource from a dict
channel_banner_resource_from_dict = ChannelBannerResource.from_dict(channel_banner_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


