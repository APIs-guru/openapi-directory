# GoogleFirebaseAppdistroV1ListFeedbackReportsResponse

The response message for `ListFeedbackReports`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_reports** | [**List[GoogleFirebaseAppdistroV1FeedbackReport]**](GoogleFirebaseAppdistroV1FeedbackReport.md) | The feedback reports | [optional] 
**next_page_token** | **str** | A short-lived token, which can be sent as &#x60;pageToken&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_list_feedback_reports_response import GoogleFirebaseAppdistroV1ListFeedbackReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1ListFeedbackReportsResponse from a JSON string
google_firebase_appdistro_v1_list_feedback_reports_response_instance = GoogleFirebaseAppdistroV1ListFeedbackReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1ListFeedbackReportsResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_list_feedback_reports_response_dict = google_firebase_appdistro_v1_list_feedback_reports_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1ListFeedbackReportsResponse from a dict
google_firebase_appdistro_v1_list_feedback_reports_response_from_dict = GoogleFirebaseAppdistroV1ListFeedbackReportsResponse.from_dict(google_firebase_appdistro_v1_list_feedback_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


