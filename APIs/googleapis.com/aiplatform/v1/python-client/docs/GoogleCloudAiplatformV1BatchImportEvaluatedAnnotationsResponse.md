# GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsResponse

Response message for ModelService.BatchImportEvaluatedAnnotations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imported_evaluated_annotations_count** | **int** | Output only. Number of EvaluatedAnnotations imported. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_import_evaluated_annotations_response import GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsResponse from a JSON string
google_cloud_aiplatform_v1_batch_import_evaluated_annotations_response_instance = GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_import_evaluated_annotations_response_dict = google_cloud_aiplatform_v1_batch_import_evaluated_annotations_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsResponse from a dict
google_cloud_aiplatform_v1_batch_import_evaluated_annotations_response_from_dict = GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsResponse.from_dict(google_cloud_aiplatform_v1_batch_import_evaluated_annotations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


