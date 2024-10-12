# GoogleCloudAiplatformV1beta1ModelEvaluationSlice

A collection of metrics calculated by comparing Model's predictions on a slice of the test data against ground truth annotations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this ModelEvaluationSlice was created. | [optional] [readonly] 
**metrics** | **object** | Output only. Sliced evaluation metrics of the Model. The schema of the metrics is stored in metrics_schema_uri | [optional] [readonly] 
**metrics_schema_uri** | **str** | Output only. Points to a YAML file stored on Google Cloud Storage describing the metrics of this ModelEvaluationSlice. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). | [optional] [readonly] 
**model_explanation** | [**GoogleCloudAiplatformV1beta1ModelExplanation**](GoogleCloudAiplatformV1beta1ModelExplanation.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the ModelEvaluationSlice. | [optional] [readonly] 
**slice** | [**GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice**](GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_evaluation_slice import GoogleCloudAiplatformV1beta1ModelEvaluationSlice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelEvaluationSlice from a JSON string
google_cloud_aiplatform_v1beta1_model_evaluation_slice_instance = GoogleCloudAiplatformV1beta1ModelEvaluationSlice.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelEvaluationSlice.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_evaluation_slice_dict = google_cloud_aiplatform_v1beta1_model_evaluation_slice_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelEvaluationSlice from a dict
google_cloud_aiplatform_v1beta1_model_evaluation_slice_from_dict = GoogleCloudAiplatformV1beta1ModelEvaluationSlice.from_dict(google_cloud_aiplatform_v1beta1_model_evaluation_slice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


