# GoogleCloudDocumentaiV1beta3ProcessResponse

Response message for the ProcessDocument method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**GoogleCloudDocumentaiV1beta3Document**](GoogleCloudDocumentaiV1beta3Document.md) |  | [optional] 
**human_review_operation** | **str** | The name of the operation triggered by the processed document. If the human review process isn&#39;t triggered, this field is empty. It has the same response type and metadata as the long-running operation returned by ReviewDocument. | [optional] 
**human_review_status** | [**GoogleCloudDocumentaiV1beta3HumanReviewStatus**](GoogleCloudDocumentaiV1beta3HumanReviewStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_process_response import GoogleCloudDocumentaiV1beta3ProcessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ProcessResponse from a JSON string
google_cloud_documentai_v1beta3_process_response_instance = GoogleCloudDocumentaiV1beta3ProcessResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ProcessResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_process_response_dict = google_cloud_documentai_v1beta3_process_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ProcessResponse from a dict
google_cloud_documentai_v1beta3_process_response_from_dict = GoogleCloudDocumentaiV1beta3ProcessResponse.from_dict(google_cloud_documentai_v1beta3_process_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


