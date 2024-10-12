# EventCollection

Collection of events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the value of nextLink. | [optional] 
**value** | [**List[MigrateEvent]**](MigrateEvent.md) | Gets or sets the machines. | [optional] 

## Example

```python
from openapi_client.models.event_collection import EventCollection

# TODO update the JSON string below
json = "{}"
# create an instance of EventCollection from a JSON string
event_collection_instance = EventCollection.from_json(json)
# print the JSON string representation of the object
print(EventCollection.to_json())

# convert the object into a dict
event_collection_dict = event_collection_instance.to_dict()
# create an instance of EventCollection from a dict
event_collection_from_dict = EventCollection.from_dict(event_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


