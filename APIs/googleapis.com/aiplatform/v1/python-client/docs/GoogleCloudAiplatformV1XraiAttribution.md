# GoogleCloudAiplatformV1XraiAttribution

An explanation method that redistributes Integrated Gradients attributions to segmented regions, taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Supported only by image Models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blur_baseline_config** | [**GoogleCloudAiplatformV1BlurBaselineConfig**](GoogleCloudAiplatformV1BlurBaselineConfig.md) |  | [optional] 
**smooth_grad_config** | [**GoogleCloudAiplatformV1SmoothGradConfig**](GoogleCloudAiplatformV1SmoothGradConfig.md) |  | [optional] 
**step_count** | **int** | Required. The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. Valid range of its value is [1, 100], inclusively. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_xrai_attribution import GoogleCloudAiplatformV1XraiAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1XraiAttribution from a JSON string
google_cloud_aiplatform_v1_xrai_attribution_instance = GoogleCloudAiplatformV1XraiAttribution.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1XraiAttribution.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_xrai_attribution_dict = google_cloud_aiplatform_v1_xrai_attribution_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1XraiAttribution from a dict
google_cloud_aiplatform_v1_xrai_attribution_from_dict = GoogleCloudAiplatformV1XraiAttribution.from_dict(google_cloud_aiplatform_v1_xrai_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


