# EventFragment

An event to be notified for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_name** | **str** | The event type for which this notification is enabled (i.e. AutoShutdown, Cost) | [optional] 

## Example

```python
from openapi_client.models.event_fragment import EventFragment

# TODO update the JSON string below
json = "{}"
# create an instance of EventFragment from a JSON string
event_fragment_instance = EventFragment.from_json(json)
# print the JSON string representation of the object
print(EventFragment.to_json())

# convert the object into a dict
event_fragment_dict = event_fragment_instance.to_dict()
# create an instance of EventFragment from a dict
event_fragment_from_dict = EventFragment.from_dict(event_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


