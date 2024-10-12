# GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsRequest

Request message for ModelService.BatchImportEvaluatedAnnotations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluated_annotations** | [**List[GoogleCloudAiplatformV1EvaluatedAnnotation]**](GoogleCloudAiplatformV1EvaluatedAnnotation.md) | Required. Evaluated annotations resource to be imported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_import_evaluated_annotations_request import GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsRequest from a JSON string
google_cloud_aiplatform_v1_batch_import_evaluated_annotations_request_instance = GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_import_evaluated_annotations_request_dict = google_cloud_aiplatform_v1_batch_import_evaluated_annotations_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsRequest from a dict
google_cloud_aiplatform_v1_batch_import_evaluated_annotations_request_from_dict = GoogleCloudAiplatformV1BatchImportEvaluatedAnnotationsRequest.from_dict(google_cloud_aiplatform_v1_batch_import_evaluated_annotations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


