# GoogleFirebaseAppdistroV1FeedbackReport

A feedback report submitted by a tester for a release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the feedback report was created. | [optional] [readonly] 
**firebase_console_uri** | **str** | Output only. A link to the Firebase console displaying the feedback report. | [optional] [readonly] 
**name** | **str** | The name of the feedback report resource. Format: &#x60;projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report}&#x60; | [optional] 
**screenshot_uri** | **str** | Output only. A signed link (which expires in one hour) that lets you directly download the screenshot. | [optional] [readonly] 
**tester** | **str** | Output only. The resource name of the tester who submitted the feedback report. | [optional] [readonly] 
**text** | **str** | Output only. The text of the feedback report. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_feedback_report import GoogleFirebaseAppdistroV1FeedbackReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1FeedbackReport from a JSON string
google_firebase_appdistro_v1_feedback_report_instance = GoogleFirebaseAppdistroV1FeedbackReport.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1FeedbackReport.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_feedback_report_dict = google_firebase_appdistro_v1_feedback_report_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1FeedbackReport from a dict
google_firebase_appdistro_v1_feedback_report_from_dict = GoogleFirebaseAppdistroV1FeedbackReport.from_dict(google_firebase_appdistro_v1_feedback_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


