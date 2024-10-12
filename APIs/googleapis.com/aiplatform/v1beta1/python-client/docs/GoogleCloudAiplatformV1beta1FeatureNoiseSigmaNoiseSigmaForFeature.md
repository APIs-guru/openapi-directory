# GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature

Noise sigma for a single feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the input feature for which noise sigma is provided. The features are defined in explanation metadata inputs. | [optional] 
**sigma** | **float** | This represents the standard deviation of the Gaussian kernel that will be used to add noise to the feature prior to computing gradients. Similar to noise_sigma but represents the noise added to the current feature. Defaults to 0.1. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_noise_sigma_noise_sigma_for_feature import GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature from a JSON string
google_cloud_aiplatform_v1beta1_feature_noise_sigma_noise_sigma_for_feature_instance = GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_noise_sigma_noise_sigma_for_feature_dict = google_cloud_aiplatform_v1beta1_feature_noise_sigma_noise_sigma_for_feature_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature from a dict
google_cloud_aiplatform_v1beta1_feature_noise_sigma_noise_sigma_for_feature_from_dict = GoogleCloudAiplatformV1beta1FeatureNoiseSigmaNoiseSigmaForFeature.from_dict(google_cloud_aiplatform_v1beta1_feature_noise_sigma_noise_sigma_for_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


