# EventsChannelsEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelsEntity**](ChannelsEntity.md) |  | 
**id** | **int** | Unique ID of the event channel. | 
**ignored** | **bool** | Defines whether this event channel is ignored or not. | 

## Example

```python
from openapi_client.models.events_channels_entity import EventsChannelsEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EventsChannelsEntity from a JSON string
events_channels_entity_instance = EventsChannelsEntity.from_json(json)
# print the JSON string representation of the object
print(EventsChannelsEntity.to_json())

# convert the object into a dict
events_channels_entity_dict = events_channels_entity_instance.to_dict()
# create an instance of EventsChannelsEntity from a dict
events_channels_entity_from_dict = EventsChannelsEntity.from_dict(events_channels_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


