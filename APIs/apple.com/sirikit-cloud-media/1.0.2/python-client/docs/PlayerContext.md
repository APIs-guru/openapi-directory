# PlayerContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_identifier** | **str** |  | [optional] 
**content_identifier** | **str** |  | [optional] 
**offset_in_millis** | **int** |  | [optional] 
**playback_speed** | **float** |  | [optional] [default to 1]
**queue_identifier** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.player_context import PlayerContext

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerContext from a JSON string
player_context_instance = PlayerContext.from_json(json)
# print the JSON string representation of the object
print(PlayerContext.to_json())

# convert the object into a dict
player_context_dict = player_context_instance.to_dict()
# create an instance of PlayerContext from a dict
player_context_from_dict = PlayerContext.from_dict(player_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


