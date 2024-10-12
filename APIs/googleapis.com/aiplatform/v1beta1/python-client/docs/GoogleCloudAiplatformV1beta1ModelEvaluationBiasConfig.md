# GoogleCloudAiplatformV1beta1ModelEvaluationBiasConfig

Configuration for bias detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bias_slices** | [**GoogleCloudAiplatformV1beta1ModelEvaluationSliceSliceSliceSpec**](GoogleCloudAiplatformV1beta1ModelEvaluationSliceSliceSliceSpec.md) |  | [optional] 
**labels** | **List[str]** | Positive labels selection on the target field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_evaluation_bias_config import GoogleCloudAiplatformV1beta1ModelEvaluationBiasConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelEvaluationBiasConfig from a JSON string
google_cloud_aiplatform_v1beta1_model_evaluation_bias_config_instance = GoogleCloudAiplatformV1beta1ModelEvaluationBiasConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelEvaluationBiasConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_evaluation_bias_config_dict = google_cloud_aiplatform_v1beta1_model_evaluation_bias_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelEvaluationBiasConfig from a dict
google_cloud_aiplatform_v1beta1_model_evaluation_bias_config_from_dict = GoogleCloudAiplatformV1beta1ModelEvaluationBiasConfig.from_dict(google_cloud_aiplatform_v1beta1_model_evaluation_bias_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


