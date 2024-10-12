# GoogleCloudAiplatformV1beta1BatchImportModelEvaluationSlicesRequest

Request message for ModelService.BatchImportModelEvaluationSlices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_evaluation_slices** | [**List[GoogleCloudAiplatformV1beta1ModelEvaluationSlice]**](GoogleCloudAiplatformV1beta1ModelEvaluationSlice.md) | Required. Model evaluation slice resource to be imported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_import_model_evaluation_slices_request import GoogleCloudAiplatformV1beta1BatchImportModelEvaluationSlicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchImportModelEvaluationSlicesRequest from a JSON string
google_cloud_aiplatform_v1beta1_batch_import_model_evaluation_slices_request_instance = GoogleCloudAiplatformV1beta1BatchImportModelEvaluationSlicesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchImportModelEvaluationSlicesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_import_model_evaluation_slices_request_dict = google_cloud_aiplatform_v1beta1_batch_import_model_evaluation_slices_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchImportModelEvaluationSlicesRequest from a dict
google_cloud_aiplatform_v1beta1_batch_import_model_evaluation_slices_request_from_dict = GoogleCloudAiplatformV1beta1BatchImportModelEvaluationSlicesRequest.from_dict(google_cloud_aiplatform_v1beta1_batch_import_model_evaluation_slices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


