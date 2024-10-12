# GoogleCloudMlV1ExplanationConfig

Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrated_gradients_attribution** | [**GoogleCloudMlV1IntegratedGradientsAttribution**](GoogleCloudMlV1IntegratedGradientsAttribution.md) |  | [optional] 
**sampled_shapley_attribution** | [**GoogleCloudMlV1SampledShapleyAttribution**](GoogleCloudMlV1SampledShapleyAttribution.md) |  | [optional] 
**xrai_attribution** | [**GoogleCloudMlV1XraiAttribution**](GoogleCloudMlV1XraiAttribution.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_explanation_config import GoogleCloudMlV1ExplanationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ExplanationConfig from a JSON string
google_cloud_ml_v1_explanation_config_instance = GoogleCloudMlV1ExplanationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ExplanationConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_explanation_config_dict = google_cloud_ml_v1_explanation_config_instance.to_dict()
# create an instance of GoogleCloudMlV1ExplanationConfig from a dict
google_cloud_ml_v1_explanation_config_from_dict = GoogleCloudMlV1ExplanationConfig.from_dict(google_cloud_ml_v1_explanation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


