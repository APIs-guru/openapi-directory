# ChannelVisibleEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.visible']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_visible_event import ChannelVisibleEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelVisibleEvent from a JSON string
channel_visible_event_instance = ChannelVisibleEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelVisibleEvent.to_json())

# convert the object into a dict
channel_visible_event_dict = channel_visible_event_instance.to_dict()
# create an instance of ChannelVisibleEvent from a dict
channel_visible_event_from_dict = ChannelVisibleEvent.from_dict(channel_visible_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


