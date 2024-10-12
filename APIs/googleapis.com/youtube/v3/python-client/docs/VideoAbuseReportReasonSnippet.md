# VideoAbuseReportReasonSnippet

Basic details about a video category, such as its localized title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The localized label belonging to this abuse report reason. | [optional] 
**secondary_reasons** | [**List[VideoAbuseReportSecondaryReason]**](VideoAbuseReportSecondaryReason.md) | The secondary reasons associated with this reason, if any are available. (There might be 0 or more.) | [optional] 

## Example

```python
from openapi_client.models.video_abuse_report_reason_snippet import VideoAbuseReportReasonSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAbuseReportReasonSnippet from a JSON string
video_abuse_report_reason_snippet_instance = VideoAbuseReportReasonSnippet.from_json(json)
# print the JSON string representation of the object
print(VideoAbuseReportReasonSnippet.to_json())

# convert the object into a dict
video_abuse_report_reason_snippet_dict = video_abuse_report_reason_snippet_instance.to_dict()
# create an instance of VideoAbuseReportReasonSnippet from a dict
video_abuse_report_reason_snippet_from_dict = VideoAbuseReportReasonSnippet.from_dict(video_abuse_report_reason_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


