# GoogleCloudAiplatformV1beta1ExplanationParameters

Parameters to configure explaining for Model's predictions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**examples** | [**GoogleCloudAiplatformV1beta1Examples**](GoogleCloudAiplatformV1beta1Examples.md) |  | [optional] 
**integrated_gradients_attribution** | [**GoogleCloudAiplatformV1beta1IntegratedGradientsAttribution**](GoogleCloudAiplatformV1beta1IntegratedGradientsAttribution.md) |  | [optional] 
**output_indices** | **List[object]** | If populated, only returns attributions that have output_index contained in output_indices. It must be an ndarray of integers, with the same shape of the output it&#39;s explaining. If not populated, returns attributions for top_k indices of outputs. If neither top_k nor output_indices is populated, returns the argmax index of the outputs. Only applicable to Models that predict multiple outputs (e,g, multi-class Models that predict multiple classes). | [optional] 
**sampled_shapley_attribution** | [**GoogleCloudAiplatformV1beta1SampledShapleyAttribution**](GoogleCloudAiplatformV1beta1SampledShapleyAttribution.md) |  | [optional] 
**top_k** | **int** | If populated, returns attributions for top K indices of outputs (defaults to 1). Only applies to Models that predicts more than one outputs (e,g, multi-class Models). When set to -1, returns explanations for all outputs. | [optional] 
**xrai_attribution** | [**GoogleCloudAiplatformV1beta1XraiAttribution**](GoogleCloudAiplatformV1beta1XraiAttribution.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_explanation_parameters import GoogleCloudAiplatformV1beta1ExplanationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExplanationParameters from a JSON string
google_cloud_aiplatform_v1beta1_explanation_parameters_instance = GoogleCloudAiplatformV1beta1ExplanationParameters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExplanationParameters.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_explanation_parameters_dict = google_cloud_aiplatform_v1beta1_explanation_parameters_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExplanationParameters from a dict
google_cloud_aiplatform_v1beta1_explanation_parameters_from_dict = GoogleCloudAiplatformV1beta1ExplanationParameters.from_dict(google_cloud_aiplatform_v1beta1_explanation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


