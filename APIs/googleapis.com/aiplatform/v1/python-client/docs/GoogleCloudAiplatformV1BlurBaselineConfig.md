# GoogleCloudAiplatformV1BlurBaselineConfig

Config for blur baseline. When enabled, a linear path from the maximally blurred image to the input image is created. Using a blurred baseline instead of zero (black image) is motivated by the BlurIG approach explained here: https://arxiv.org/abs/2004.03383

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_blur_sigma** | **float** | The standard deviation of the blur kernel for the blurred baseline. The same blurring parameter is used for both the height and the width dimension. If not set, the method defaults to the zero (i.e. black for images) baseline. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_blur_baseline_config import GoogleCloudAiplatformV1BlurBaselineConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BlurBaselineConfig from a JSON string
google_cloud_aiplatform_v1_blur_baseline_config_instance = GoogleCloudAiplatformV1BlurBaselineConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BlurBaselineConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_blur_baseline_config_dict = google_cloud_aiplatform_v1_blur_baseline_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BlurBaselineConfig from a dict
google_cloud_aiplatform_v1_blur_baseline_config_from_dict = GoogleCloudAiplatformV1BlurBaselineConfig.from_dict(google_cloud_aiplatform_v1_blur_baseline_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


