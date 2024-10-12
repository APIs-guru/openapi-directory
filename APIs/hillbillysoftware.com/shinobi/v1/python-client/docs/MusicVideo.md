# MusicVideo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_id** | **str** |  | [optional] 
**artist_id** | **str** |  | [optional] 
**decription** | **str** |  | [optional] 
**video** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.music_video import MusicVideo

# TODO update the JSON string below
json = "{}"
# create an instance of MusicVideo from a JSON string
music_video_instance = MusicVideo.from_json(json)
# print the JSON string representation of the object
print(MusicVideo.to_json())

# convert the object into a dict
music_video_dict = music_video_instance.to_dict()
# create an instance of MusicVideo from a dict
music_video_from_dict = MusicVideo.from_dict(music_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


