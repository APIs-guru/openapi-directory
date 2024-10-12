# VideoAbuseReportSecondaryReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of this abuse report secondary reason. | [optional] 
**label** | **str** | The localized label for this abuse report secondary reason. | [optional] 

## Example

```python
from openapi_client.models.video_abuse_report_secondary_reason import VideoAbuseReportSecondaryReason

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAbuseReportSecondaryReason from a JSON string
video_abuse_report_secondary_reason_instance = VideoAbuseReportSecondaryReason.from_json(json)
# print the JSON string representation of the object
print(VideoAbuseReportSecondaryReason.to_json())

# convert the object into a dict
video_abuse_report_secondary_reason_dict = video_abuse_report_secondary_reason_instance.to_dict()
# create an instance of VideoAbuseReportSecondaryReason from a dict
video_abuse_report_secondary_reason_from_dict = VideoAbuseReportSecondaryReason.from_dict(video_abuse_report_secondary_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


