# TimestampedEvent

An event that occured in the operation assigned to the worker and the time of occurance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, object]** | The event data. | [optional] 
**timestamp** | **str** | The time when the event happened. | [optional] 

## Example

```python
from openapi_client.models.timestamped_event import TimestampedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TimestampedEvent from a JSON string
timestamped_event_instance = TimestampedEvent.from_json(json)
# print the JSON string representation of the object
print(TimestampedEvent.to_json())

# convert the object into a dict
timestamped_event_dict = timestamped_event_instance.to_dict()
# create an instance of TimestampedEvent from a dict
timestamped_event_from_dict = TimestampedEvent.from_dict(timestamped_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


