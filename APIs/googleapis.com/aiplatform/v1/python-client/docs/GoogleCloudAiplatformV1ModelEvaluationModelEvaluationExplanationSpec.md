# GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanation_spec** | [**GoogleCloudAiplatformV1ExplanationSpec**](GoogleCloudAiplatformV1ExplanationSpec.md) |  | [optional] 
**explanation_type** | **str** | Explanation type. For AutoML Image Classification models, possible values are: * &#x60;image-integrated-gradients&#x60; * &#x60;image-xrai&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_evaluation_model_evaluation_explanation_spec import GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec from a JSON string
google_cloud_aiplatform_v1_model_evaluation_model_evaluation_explanation_spec_instance = GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_evaluation_model_evaluation_explanation_spec_dict = google_cloud_aiplatform_v1_model_evaluation_model_evaluation_explanation_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec from a dict
google_cloud_aiplatform_v1_model_evaluation_model_evaluation_explanation_spec_from_dict = GoogleCloudAiplatformV1ModelEvaluationModelEvaluationExplanationSpec.from_dict(google_cloud_aiplatform_v1_model_evaluation_model_evaluation_explanation_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


