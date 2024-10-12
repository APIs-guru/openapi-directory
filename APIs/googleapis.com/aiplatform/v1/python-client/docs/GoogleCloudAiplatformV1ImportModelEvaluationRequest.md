# GoogleCloudAiplatformV1ImportModelEvaluationRequest

Request message for ModelService.ImportModelEvaluation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_evaluation** | [**GoogleCloudAiplatformV1ModelEvaluation**](GoogleCloudAiplatformV1ModelEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_import_model_evaluation_request import GoogleCloudAiplatformV1ImportModelEvaluationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ImportModelEvaluationRequest from a JSON string
google_cloud_aiplatform_v1_import_model_evaluation_request_instance = GoogleCloudAiplatformV1ImportModelEvaluationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ImportModelEvaluationRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_import_model_evaluation_request_dict = google_cloud_aiplatform_v1_import_model_evaluation_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ImportModelEvaluationRequest from a dict
google_cloud_aiplatform_v1_import_model_evaluation_request_from_dict = GoogleCloudAiplatformV1ImportModelEvaluationRequest.from_dict(google_cloud_aiplatform_v1_import_model_evaluation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


