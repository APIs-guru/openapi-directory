# Track

A track configuration. The resource for TracksService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releases** | [**List[TrackRelease]**](TrackRelease.md) | In a read request, represents all active releases in the track. In an update request, represents desired changes. | [optional] 
**track** | **str** | Identifier of the track. Form factor tracks have a special prefix as an identifier, for example &#x60;wear:production&#x60;, &#x60;automotive:production&#x60;. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) | [optional] 

## Example

```python
from openapi_client.models.track import Track

# TODO update the JSON string below
json = "{}"
# create an instance of Track from a JSON string
track_instance = Track.from_json(json)
# print the JSON string representation of the object
print(Track.to_json())

# convert the object into a dict
track_dict = track_instance.to_dict()
# create an instance of Track from a dict
track_from_dict = Track.from_dict(track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


