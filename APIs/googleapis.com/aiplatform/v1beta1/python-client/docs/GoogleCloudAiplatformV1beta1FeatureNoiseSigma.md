# GoogleCloudAiplatformV1beta1FeatureNoiseSigma

Noise sigma by features. Noise sigma represents the standard deviation of the gaussian kernel that will be used to add noise to interpolated inputs prior to computing gradients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**noise_sigma** | [**List[GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature]**](GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature.md) | Noise sigma per feature. No noise is added to features that are not set. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_noise_sigma import GoogleCloudAiplatformV1beta1FeatureNoiseSigma

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureNoiseSigma from a JSON string
google_cloud_aiplatform_v1beta1_feature_noise_sigma_instance = GoogleCloudAiplatformV1beta1FeatureNoiseSigma.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureNoiseSigma.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_noise_sigma_dict = google_cloud_aiplatform_v1beta1_feature_noise_sigma_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureNoiseSigma from a dict
google_cloud_aiplatform_v1beta1_feature_noise_sigma_from_dict = GoogleCloudAiplatformV1beta1FeatureNoiseSigma.from_dict(google_cloud_aiplatform_v1beta1_feature_noise_sigma_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


