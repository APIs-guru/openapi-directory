# VideoContentDetailsRegionRestriction

DEPRECATED Region restriction of the video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **List[str]** | A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries. | [optional] 
**blocked** | **List[str]** | A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries. | [optional] 

## Example

```python
from openapi_client.models.video_content_details_region_restriction import VideoContentDetailsRegionRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of VideoContentDetailsRegionRestriction from a JSON string
video_content_details_region_restriction_instance = VideoContentDetailsRegionRestriction.from_json(json)
# print the JSON string representation of the object
print(VideoContentDetailsRegionRestriction.to_json())

# convert the object into a dict
video_content_details_region_restriction_dict = video_content_details_region_restriction_instance.to_dict()
# create an instance of VideoContentDetailsRegionRestriction from a dict
video_content_details_region_restriction_from_dict = VideoContentDetailsRegionRestriction.from_dict(video_content_details_region_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


