# GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview

Human Review information of the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Human review state. e.g. &#x60;requested&#x60;, &#x60;succeeded&#x60;, &#x60;rejected&#x60;. | [optional] 
**state_message** | **str** | A message providing more details about the current state of processing. For example, the rejection reason when the state is &#x60;rejected&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_revision_human_review import GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview from a JSON string
google_cloud_documentai_v1beta3_document_revision_human_review_instance = GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_revision_human_review_dict = google_cloud_documentai_v1beta3_document_revision_human_review_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview from a dict
google_cloud_documentai_v1beta3_document_revision_human_review_from_dict = GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview.from_dict(google_cloud_documentai_v1beta3_document_revision_human_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


