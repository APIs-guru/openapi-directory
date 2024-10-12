# GoogleCloudAiplatformV1beta1SmoothGradConfig

Config for SmoothGrad approximation of gradients. When enabled, the gradients are approximated by averaging the gradients from noisy samples in the vicinity of the inputs. Adding noise can help improve the computed gradients. Refer to this paper for more details: https://arxiv.org/pdf/1706.03825.pdf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_noise_sigma** | [**GoogleCloudAiplatformV1beta1FeatureNoiseSigma**](GoogleCloudAiplatformV1beta1FeatureNoiseSigma.md) |  | [optional] 
**noise_sigma** | **float** | This is a single float value and will be used to add noise to all the features. Use this field when all features are normalized to have the same distribution: scale to range [0, 1], [-1, 1] or z-scoring, where features are normalized to have 0-mean and 1-variance. Learn more about [normalization](https://developers.google.com/machine-learning/data-prep/transform/normalization). For best results the recommended value is about 10% - 20% of the standard deviation of the input feature. Refer to section 3.2 of the SmoothGrad paper: https://arxiv.org/pdf/1706.03825.pdf. Defaults to 0.1. If the distribution is different per feature, set feature_noise_sigma instead for each feature. | [optional] 
**noisy_sample_count** | **int** | The number of gradient samples to use for approximation. The higher this number, the more accurate the gradient is, but the runtime complexity increases by this factor as well. Valid range of its value is [1, 50]. Defaults to 3. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_smooth_grad_config import GoogleCloudAiplatformV1beta1SmoothGradConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SmoothGradConfig from a JSON string
google_cloud_aiplatform_v1beta1_smooth_grad_config_instance = GoogleCloudAiplatformV1beta1SmoothGradConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SmoothGradConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_smooth_grad_config_dict = google_cloud_aiplatform_v1beta1_smooth_grad_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SmoothGradConfig from a dict
google_cloud_aiplatform_v1beta1_smooth_grad_config_from_dict = GoogleCloudAiplatformV1beta1SmoothGradConfig.from_dict(google_cloud_aiplatform_v1beta1_smooth_grad_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


