# GoogleCloudDocumentaiV1ProcessResponse

Response message for the ProcessDocument method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**GoogleCloudDocumentaiV1Document**](GoogleCloudDocumentaiV1Document.md) |  | [optional] 
**human_review_status** | [**GoogleCloudDocumentaiV1HumanReviewStatus**](GoogleCloudDocumentaiV1HumanReviewStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_process_response import GoogleCloudDocumentaiV1ProcessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1ProcessResponse from a JSON string
google_cloud_documentai_v1_process_response_instance = GoogleCloudDocumentaiV1ProcessResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1ProcessResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1_process_response_dict = google_cloud_documentai_v1_process_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1ProcessResponse from a dict
google_cloud_documentai_v1_process_response_from_dict = GoogleCloudDocumentaiV1ProcessResponse.from_dict(google_cloud_documentai_v1_process_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


