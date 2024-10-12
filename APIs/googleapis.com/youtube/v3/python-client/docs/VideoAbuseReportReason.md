# VideoAbuseReportReason

A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID of this abuse report reason. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;youtube#videoAbuseReportReason\&quot;&#x60;. | [optional] [default to 'youtube#videoAbuseReportReason']
**snippet** | [**VideoAbuseReportReasonSnippet**](VideoAbuseReportReasonSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_abuse_report_reason import VideoAbuseReportReason

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAbuseReportReason from a JSON string
video_abuse_report_reason_instance = VideoAbuseReportReason.from_json(json)
# print the JSON string representation of the object
print(VideoAbuseReportReason.to_json())

# convert the object into a dict
video_abuse_report_reason_dict = video_abuse_report_reason_instance.to_dict()
# create an instance of VideoAbuseReportReason from a dict
video_abuse_report_reason_from_dict = VideoAbuseReportReason.from_dict(video_abuse_report_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


