# VideoContent

Video content for a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**video_metadata** | [**VideoMetadata**](VideoMetadata.md) |  | [optional] 
**video_url** | **str** | The URL to fetch a video ad. | [optional] 
**video_vast_xml** | **str** | The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. | [optional] 

## Example

```python
from openapi_client.models.video_content import VideoContent

# TODO update the JSON string below
json = "{}"
# create an instance of VideoContent from a JSON string
video_content_instance = VideoContent.from_json(json)
# print the JSON string representation of the object
print(VideoContent.to_json())

# convert the object into a dict
video_content_dict = video_content_instance.to_dict()
# create an instance of VideoContent from a dict
video_content_from_dict = VideoContent.from_dict(video_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


