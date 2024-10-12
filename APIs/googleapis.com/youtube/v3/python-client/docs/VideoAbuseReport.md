# VideoAbuseReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Additional comments regarding the abuse report. | [optional] 
**language** | **str** | The language that the content was viewed in. | [optional] 
**reason_id** | **str** | The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID. | [optional] 
**secondary_reason_id** | **str** | The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason. | [optional] 
**video_id** | **str** | The ID that YouTube uses to uniquely identify the video. | [optional] 

## Example

```python
from openapi_client.models.video_abuse_report import VideoAbuseReport

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAbuseReport from a JSON string
video_abuse_report_instance = VideoAbuseReport.from_json(json)
# print the JSON string representation of the object
print(VideoAbuseReport.to_json())

# convert the object into a dict
video_abuse_report_dict = video_abuse_report_instance.to_dict()
# create an instance of VideoAbuseReport from a dict
video_abuse_report_from_dict = VideoAbuseReport.from_dict(video_abuse_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


