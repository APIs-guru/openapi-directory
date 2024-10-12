# Voice

Creates a voice audio element from the provided text

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
**text** | **str** | The sentence or sentences to be converted to voice audio | 
**type** | **str** |  | 
**voice** | **str** | The voice name to be used. Check &lt;a href&#x3D;\&quot;/docs/tutorial/voice-elements/\&quot;&gt;available voices&lt;/a&gt;. | [optional] [default to 'en-GB-LibbyNeural']

## Example

```python
from openapi_client.models.voice import Voice

# TODO update the JSON string below
json = "{}"
# create an instance of Voice from a JSON string
voice_instance = Voice.from_json(json)
# print the JSON string representation of the object
print(Voice.to_json())

# convert the object into a dict
voice_dict = voice_instance.to_dict()
# create an instance of Voice from a dict
voice_from_dict = Voice.from_dict(voice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


