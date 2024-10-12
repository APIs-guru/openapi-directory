# Video


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
**chroma_key** | [**VisualElementChromaKey**](VisualElementChromaKey.md) |  | [optional] 
**crop** | [**VisualElementCrop**](VisualElementCrop.md) |  | [optional] 
**pan** | **str** | Pans the element to the specified direction. If &lt;code&gt;zoom&lt;/code&gt; property is not specified, the effect is a non-zooming pan | [optional] 
**position** | **str** | Sets the element position in the scene. A value of &#39;custom&#39; sets a custom position based on the provided &#39;x&#39; and &#39;y&#39; properties | [optional] [default to 'custom']
**rotate** | [**VisualElementRotate**](VisualElementRotate.md) |  | [optional] 
**scale** | [**VisualElementScale**](VisualElementScale.md) |  | [optional] 
**x** | **float** | Sets the horizontal position of the element in the scene. The value &lt;code&gt;0&lt;/code&gt; is on the left side | [optional] [default to 0]
**y** | **float** | Sets the vertical position of the element in the scene. The value &lt;code&gt;0&lt;/code&gt; is on the top side | [optional] [default to 0]
**zoom** | **int** | Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the &lt;code&gt;pan&lt;/code&gt; property to set the focus point of the zooming | [optional] 
**muted** | **bool** | Mutes the audio | [optional] [default to False]
**volume** | **float** |  | [optional] [default to 5]
**src** | **str** | URL to the asset file. Videos can be in MP4, MKV, MOV but MP4 is recommended. | [optional] 
**type** | **str** |  | 
**loop** | **int** | Sets the number of loops the video to play. Use -1 for an infinite loop. The default value of 1 plays the video just once. | [optional] 

## Example

```python
from openapi_client.models.video import Video

# TODO update the JSON string below
json = "{}"
# create an instance of Video from a JSON string
video_instance = Video.from_json(json)
# print the JSON string representation of the object
print(Video.to_json())

# convert the object into a dict
video_dict = video_instance.to_dict()
# create an instance of Video from a dict
video_from_dict = Video.from_dict(video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


