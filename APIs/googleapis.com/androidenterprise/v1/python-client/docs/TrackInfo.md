# TrackInfo

Id to name association of a track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**track_alias** | **str** | A modifiable name for a track. This is the visible name in the play developer console. | [optional] 
**track_id** | **str** | Unmodifiable, unique track identifier. This identifier is the releaseTrackId in the url of the play developer console page that displays the track information. | [optional] 

## Example

```python
from openapi_client.models.track_info import TrackInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TrackInfo from a JSON string
track_info_instance = TrackInfo.from_json(json)
# print the JSON string representation of the object
print(TrackInfo.to_json())

# convert the object into a dict
track_info_dict = track_info_instance.to_dict()
# create an instance of TrackInfo from a dict
track_info_from_dict = TrackInfo.from_dict(track_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


