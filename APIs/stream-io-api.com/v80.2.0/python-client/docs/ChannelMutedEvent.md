# ChannelMutedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.muted']

## Example

```python
from openapi_client.models.channel_muted_event import ChannelMutedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelMutedEvent from a JSON string
channel_muted_event_instance = ChannelMutedEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelMutedEvent.to_json())

# convert the object into a dict
channel_muted_event_dict = channel_muted_event_instance.to_dict()
# create an instance of ChannelMutedEvent from a dict
channel_muted_event_from_dict = ChannelMutedEvent.from_dict(channel_muted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


