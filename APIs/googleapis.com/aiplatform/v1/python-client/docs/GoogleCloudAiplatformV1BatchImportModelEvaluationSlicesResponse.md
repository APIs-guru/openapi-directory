# GoogleCloudAiplatformV1BatchImportModelEvaluationSlicesResponse

Response message for ModelService.BatchImportModelEvaluationSlices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imported_model_evaluation_slices** | **List[str]** | Output only. List of imported ModelEvaluationSlice.name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_import_model_evaluation_slices_response import GoogleCloudAiplatformV1BatchImportModelEvaluationSlicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchImportModelEvaluationSlicesResponse from a JSON string
google_cloud_aiplatform_v1_batch_import_model_evaluation_slices_response_instance = GoogleCloudAiplatformV1BatchImportModelEvaluationSlicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchImportModelEvaluationSlicesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_import_model_evaluation_slices_response_dict = google_cloud_aiplatform_v1_batch_import_model_evaluation_slices_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchImportModelEvaluationSlicesResponse from a dict
google_cloud_aiplatform_v1_batch_import_model_evaluation_slices_response_from_dict = GoogleCloudAiplatformV1BatchImportModelEvaluationSlicesResponse.from_dict(google_cloud_aiplatform_v1_batch_import_model_evaluation_slices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


