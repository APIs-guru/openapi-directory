# PlayerEvent

An event status resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition_id** | **str** | The ID of the event definition. | [optional] 
**formatted_num_events** | **str** | The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerEvent&#x60;. | [optional] 
**num_events** | **str** | The current number of times this event has occurred. | [optional] 
**player_id** | **str** | The ID of the player. | [optional] 

## Example

```python
from openapi_client.models.player_event import PlayerEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerEvent from a JSON string
player_event_instance = PlayerEvent.from_json(json)
# print the JSON string representation of the object
print(PlayerEvent.to_json())

# convert the object into a dict
player_event_dict = player_event_instance.to_dict()
# create an instance of PlayerEvent from a dict
player_event_from_dict = PlayerEvent.from_dict(player_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


