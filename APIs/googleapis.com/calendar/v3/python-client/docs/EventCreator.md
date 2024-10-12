# EventCreator

The creator of the event. Read-only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The creator&#39;s name, if available. | [optional] 
**email** | **str** | The creator&#39;s email address, if available. | [optional] 
**id** | **str** | The creator&#39;s Profile ID, if available. | [optional] 
**var_self** | **bool** | Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. | [optional] [default to False]

## Example

```python
from openapi_client.models.event_creator import EventCreator

# TODO update the JSON string below
json = "{}"
# create an instance of EventCreator from a JSON string
event_creator_instance = EventCreator.from_json(json)
# print the JSON string representation of the object
print(EventCreator.to_json())

# convert the object into a dict
event_creator_dict = event_creator_instance.to_dict()
# create an instance of EventCreator from a dict
event_creator_from_dict = EventCreator.from_dict(event_creator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


