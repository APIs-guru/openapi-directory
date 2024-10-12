# ChannelCreatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.created']

## Example

```python
from openapi_client.models.channel_created_event import ChannelCreatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelCreatedEvent from a JSON string
channel_created_event_instance = ChannelCreatedEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelCreatedEvent.to_json())

# convert the object into a dict
channel_created_event_dict = channel_created_event_instance.to_dict()
# create an instance of ChannelCreatedEvent from a dict
channel_created_event_from_dict = ChannelCreatedEvent.from_dict(channel_created_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


