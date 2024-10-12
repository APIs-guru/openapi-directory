# VideoAbuseReportReasonListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[VideoAbuseReportReason]**](VideoAbuseReportReason.md) | A list of valid abuse reasons that are used with &#x60;video.ReportAbuse&#x60;. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;youtube#videoAbuseReportReasonListResponse\&quot;&#x60;. | [optional] [default to 'youtube#videoAbuseReportReasonListResponse']
**visitor_id** | **str** | The &#x60;visitorId&#x60; identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.video_abuse_report_reason_list_response import VideoAbuseReportReasonListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAbuseReportReasonListResponse from a JSON string
video_abuse_report_reason_list_response_instance = VideoAbuseReportReasonListResponse.from_json(json)
# print the JSON string representation of the object
print(VideoAbuseReportReasonListResponse.to_json())

# convert the object into a dict
video_abuse_report_reason_list_response_dict = video_abuse_report_reason_list_response_instance.to_dict()
# create an instance of VideoAbuseReportReasonListResponse from a dict
video_abuse_report_reason_list_response_from_dict = VideoAbuseReportReasonListResponse.from_dict(video_abuse_report_reason_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


