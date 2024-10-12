# GoogleCloudDocumentaiV1beta3HumanReviewStatus

The status of human review on a processed document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**human_review_operation** | **str** | The name of the operation triggered by the processed document. This field is populated only when the state is &#x60;HUMAN_REVIEW_IN_PROGRESS&#x60;. It has the same response type and metadata as the long-running operation returned by ReviewDocument. | [optional] 
**state** | **str** | The state of human review on the processing request. | [optional] 
**state_message** | **str** | A message providing more details about the human review state. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_human_review_status import GoogleCloudDocumentaiV1beta3HumanReviewStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3HumanReviewStatus from a JSON string
google_cloud_documentai_v1beta3_human_review_status_instance = GoogleCloudDocumentaiV1beta3HumanReviewStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3HumanReviewStatus.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_human_review_status_dict = google_cloud_documentai_v1beta3_human_review_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3HumanReviewStatus from a dict
google_cloud_documentai_v1beta3_human_review_status_from_dict = GoogleCloudDocumentaiV1beta3HumanReviewStatus.from_dict(google_cloud_documentai_v1beta3_human_review_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


