# VideoContentDetails

Details about the content of a YouTube Video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | The value of captions indicates whether the video has captions or not. | [optional] 
**content_rating** | [**ContentRating**](ContentRating.md) |  | [optional] 
**country_restriction** | [**AccessPolicy**](AccessPolicy.md) |  | [optional] 
**definition** | **str** | The value of definition indicates whether the video is available in high definition or only in standard definition. | [optional] 
**dimension** | **str** | The value of dimension indicates whether the video is available in 3D or in 2D. | [optional] 
**duration** | **str** | The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long. | [optional] 
**has_custom_thumbnail** | **bool** | Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader. | [optional] 
**licensed_content** | **bool** | The value of is_license_content indicates whether the video is licensed content. | [optional] 
**projection** | **str** | Specifies the projection format of the video. | [optional] 
**region_restriction** | [**VideoContentDetailsRegionRestriction**](VideoContentDetailsRegionRestriction.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_content_details import VideoContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VideoContentDetails from a JSON string
video_content_details_instance = VideoContentDetails.from_json(json)
# print the JSON string representation of the object
print(VideoContentDetails.to_json())

# convert the object into a dict
video_content_details_dict = video_content_details_instance.to_dict()
# create an instance of VideoContentDetails from a dict
video_content_details_from_dict = VideoContentDetails.from_dict(video_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


