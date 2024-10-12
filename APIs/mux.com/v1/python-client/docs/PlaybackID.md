# PlaybackID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the PlaybackID | [optional] 
**policy** | [**PlaybackPolicy**](PlaybackPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.playback_id import PlaybackID

# TODO update the JSON string below
json = "{}"
# create an instance of PlaybackID from a JSON string
playback_id_instance = PlaybackID.from_json(json)
# print the JSON string representation of the object
print(PlaybackID.to_json())

# convert the object into a dict
playback_id_dict = playback_id_instance.to_dict()
# create an instance of PlaybackID from a dict
playback_id_from_dict = PlaybackID.from_dict(playback_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


