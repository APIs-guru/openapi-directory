# ChannelSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_details** | [**ChannelSectionContentDetails**](ChannelSectionContentDetails.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the channel section. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#channelSection\&quot;. | [optional] [default to 'youtube#channelSection']
**localizations** | [**Dict[str, ChannelSectionLocalization]**](ChannelSectionLocalization.md) | Localizations for different languages | [optional] 
**snippet** | [**ChannelSectionSnippet**](ChannelSectionSnippet.md) |  | [optional] 
**targeting** | [**ChannelSectionTargeting**](ChannelSectionTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_section import ChannelSection

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelSection from a JSON string
channel_section_instance = ChannelSection.from_json(json)
# print the JSON string representation of the object
print(ChannelSection.to_json())

# convert the object into a dict
channel_section_dict = channel_section_instance.to_dict()
# create an instance of ChannelSection from a dict
channel_section_from_dict = ChannelSection.from_dict(channel_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


