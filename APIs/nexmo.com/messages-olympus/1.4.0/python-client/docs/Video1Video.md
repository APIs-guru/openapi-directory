# Video1Video


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp &gt; Note: Only supports video codec H.264 and audio codec AAC  | 

## Example

```python
from openapi_client.models.video1_video import Video1Video

# TODO update the JSON string below
json = "{}"
# create an instance of Video1Video from a JSON string
video1_video_instance = Video1Video.from_json(json)
# print the JSON string representation of the object
print(Video1Video.to_json())

# convert the object into a dict
video1_video_dict = video1_video_instance.to_dict()
# create an instance of Video1Video from a dict
video1_video_from_dict = Video1Video.from_dict(video1_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


