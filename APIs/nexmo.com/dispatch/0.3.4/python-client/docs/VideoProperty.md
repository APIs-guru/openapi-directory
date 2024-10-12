# VideoProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL of the video attachment.  **messenger** supports .mp4  **whatsapp** supports .mp4 and .3gpp. Note, only H.264 video codec and AAC audio codec is supported.  | [optional] 

## Example

```python
from openapi_client.models.video_property import VideoProperty

# TODO update the JSON string below
json = "{}"
# create an instance of VideoProperty from a JSON string
video_property_instance = VideoProperty.from_json(json)
# print the JSON string representation of the object
print(VideoProperty.to_json())

# convert the object into a dict
video_property_dict = video_property_instance.to_dict()
# create an instance of VideoProperty from a dict
video_property_from_dict = VideoProperty.from_dict(video_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


