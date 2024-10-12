# MemoryEvent

An event related to memory and storage measurements.To distinguish between new and old events, we recommend using the createTime field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_count** | **str** | The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium. | [optional] 
**create_time** | **str** | The creation time of the event. | [optional] 
**event_type** | **str** | Event type. | [optional] 

## Example

```python
from openapi_client.models.memory_event import MemoryEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MemoryEvent from a JSON string
memory_event_instance = MemoryEvent.from_json(json)
# print the JSON string representation of the object
print(MemoryEvent.to_json())

# convert the object into a dict
memory_event_dict = memory_event_instance.to_dict()
# create an instance of MemoryEvent from a dict
memory_event_from_dict = MemoryEvent.from_dict(memory_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


