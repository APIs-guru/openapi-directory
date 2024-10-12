# EventInfo

The basic information of an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The event ID. | [optional] 

## Example

```python
from openapi_client.models.event_info import EventInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventInfo from a JSON string
event_info_instance = EventInfo.from_json(json)
# print the JSON string representation of the object
print(EventInfo.to_json())

# convert the object into a dict
event_info_dict = event_info_instance.to_dict()
# create an instance of EventInfo from a dict
event_info_from_dict = EventInfo.from_dict(event_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


