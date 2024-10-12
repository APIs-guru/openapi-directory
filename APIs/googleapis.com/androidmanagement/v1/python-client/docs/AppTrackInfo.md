# AppTrackInfo

Id to name association of a app track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**track_alias** | **str** | The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console. | [optional] 
**track_id** | **str** | The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information. | [optional] 

## Example

```python
from openapi_client.models.app_track_info import AppTrackInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppTrackInfo from a JSON string
app_track_info_instance = AppTrackInfo.from_json(json)
# print the JSON string representation of the object
print(AppTrackInfo.to_json())

# convert the object into a dict
app_track_info_dict = app_track_info_instance.to_dict()
# create an instance of AppTrackInfo from a dict
app_track_info_from_dict = AppTrackInfo.from_dict(app_track_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


