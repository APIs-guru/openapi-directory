# Audio


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache** | **bool** | Element&#39;s cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded. | [optional] [default to True]
**comment** | **str** | Used for adding your comments | [optional] 
**duration** | **float** | Element&#39;s duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration. | [optional] [default to -1]
**extra_time** | **float** | Element&#39;s time span added after the playback. | [optional] [default to 0]
**fade_in** | **float** | Adds a fade in effect to the element. Value in seconds. | [optional] 
**fade_out** | **float** | Adds a fade out effect to the element. Value in seconds. | [optional] 
**start** | **float** | Element&#39;s starting time in seconds relative to the container scene or the movie if the element is in the Movie&#39;s elements array. | [optional] [default to 0]
**z_index** | **float** | Element&#39;s z-index. Use this property to reorganize the layering of the elements like in HTML | [optional] [default to 0]
**muted** | **bool** | Mutes the audio | [optional] [default to False]
**volume** | **float** |  | [optional] [default to 5]
**src** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.audio import Audio

# TODO update the JSON string below
json = "{}"
# create an instance of Audio from a JSON string
audio_instance = Audio.from_json(json)
# print the JSON string representation of the object
print(Audio.to_json())

# convert the object into a dict
audio_dict = audio_instance.to_dict()
# create an instance of Audio from a dict
audio_from_dict = Audio.from_dict(audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


