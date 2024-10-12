# Channel

A single channel. Channels are custom groups of related websites and apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | The ID of the advertiser that owns the channel. | [optional] 
**channel_id** | **str** | Output only. The unique ID of the channel. Assigned by the system. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the channel. Must be UTF-8 encoded with a maximum length of 240 bytes. | [optional] 
**name** | **str** | Output only. The resource name of the channel. | [optional] [readonly] 
**negatively_targeted_line_item_count** | **str** | Output only. Number of line items that are directly targeting this channel negatively. | [optional] [readonly] 
**partner_id** | **str** | The ID of the partner that owns the channel. | [optional] 
**positively_targeted_line_item_count** | **str** | Output only. Number of line items that are directly targeting this channel positively. | [optional] [readonly] 

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


