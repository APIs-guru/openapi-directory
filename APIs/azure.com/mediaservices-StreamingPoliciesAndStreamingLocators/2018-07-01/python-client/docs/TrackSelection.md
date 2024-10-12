# TrackSelection

Class to select a track

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**track_selections** | [**List[TrackPropertyCondition]**](TrackPropertyCondition.md) | TrackSelections is a track property condition list which can specify track(s) | [optional] 

## Example

```python
from openapi_client.models.track_selection import TrackSelection

# TODO update the JSON string below
json = "{}"
# create an instance of TrackSelection from a JSON string
track_selection_instance = TrackSelection.from_json(json)
# print the JSON string representation of the object
print(TrackSelection.to_json())

# convert the object into a dict
track_selection_dict = track_selection_instance.to_dict()
# create an instance of TrackSelection from a dict
track_selection_from_dict = TrackSelection.from_dict(track_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


