# ChannelSectionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[ChannelSection]**](ChannelSection.md) | A list of ChannelSections that match the request criteria. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#channelSectionListResponse\&quot;. | [optional] [default to 'youtube#channelSectionListResponse']
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.channel_section_list_response import ChannelSectionListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelSectionListResponse from a JSON string
channel_section_list_response_instance = ChannelSectionListResponse.from_json(json)
# print the JSON string representation of the object
print(ChannelSectionListResponse.to_json())

# convert the object into a dict
channel_section_list_response_dict = channel_section_list_response_instance.to_dict()
# create an instance of ChannelSectionListResponse from a dict
channel_section_list_response_from_dict = ChannelSectionListResponse.from_dict(channel_section_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


