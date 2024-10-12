# ChannelUnmutedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.unmuted']

## Example

```python
from openapi_client.models.channel_unmuted_event import ChannelUnmutedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelUnmutedEvent from a JSON string
channel_unmuted_event_instance = ChannelUnmutedEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelUnmutedEvent.to_json())

# convert the object into a dict
channel_unmuted_event_dict = channel_unmuted_event_instance.to_dict()
# create an instance of ChannelUnmutedEvent from a dict
channel_unmuted_event_from_dict = ChannelUnmutedEvent.from_dict(channel_unmuted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


