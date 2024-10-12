# EventDataCollection

Represents collection of events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Provides the link to retrieve the next set of events. | [optional] 
**value** | [**List[EventData]**](EventData.md) | this list that includes the Azure audit logs. | 

## Example

```python
from openapi_client.models.event_data_collection import EventDataCollection

# TODO update the JSON string below
json = "{}"
# create an instance of EventDataCollection from a JSON string
event_data_collection_instance = EventDataCollection.from_json(json)
# print the JSON string representation of the object
print(EventDataCollection.to_json())

# convert the object into a dict
event_data_collection_dict = event_data_collection_instance.to_dict()
# create an instance of EventDataCollection from a dict
event_data_collection_from_dict = EventDataCollection.from_dict(event_data_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


